#!/usr/bin/env bash
# Publish work: optionally merge a work branch into dev, then merge dev into
# main, push main, and sync dev with the updated main.
#
#   make merge-dev-to-main                      # dev -> main
#   make merge-dev-to-main BRANCH=claude-topic  # claude-topic -> dev -> main
set -euo pipefail

DEV_BRANCH="dev"
MAIN_BRANCH="main"
REMOTE="origin"
WORK_BRANCH="${1:-}"

cd "$(git rev-parse --show-toplevel)"

if [[ -n "$(git status --porcelain)" ]]; then
  echo "Error: working tree has uncommitted changes. Commit or stash them first." >&2
  exit 1
fi

if [[ "${WORK_BRANCH}" == "${DEV_BRANCH}" || "${WORK_BRANCH}" == "${MAIN_BRANCH}" ]]; then
  echo "Error: BRANCH should be a work branch, not ${WORK_BRANCH}." >&2
  exit 1
fi

ORIGINAL_BRANCH="$(git rev-parse --abbrev-ref HEAD)"

echo "==> Fetching latest refs from ${REMOTE}"
git fetch "${REMOTE}"

echo "==> Updating local ${MAIN_BRANCH}"
git checkout "${MAIN_BRANCH}"
git pull "${REMOTE}" "${MAIN_BRANCH}"

echo "==> Updating local ${DEV_BRANCH}"
git checkout "${DEV_BRANCH}"
git pull "${REMOTE}" "${DEV_BRANCH}"

if [[ -n "${WORK_BRANCH}" ]]; then
  if ! git rev-parse --verify --quiet "${REMOTE}/${WORK_BRANCH}" >/dev/null; then
    echo "Error: branch ${WORK_BRANCH} not found on ${REMOTE}." >&2
    git checkout "${ORIGINAL_BRANCH}"
    exit 1
  fi
  echo "==> Merging ${WORK_BRANCH} into ${DEV_BRANCH}"
  git merge --no-ff "${REMOTE}/${WORK_BRANCH}" -m "Merge ${WORK_BRANCH} into ${DEV_BRANCH}"
  git push "${REMOTE}" "${DEV_BRANCH}"
fi

echo "==> Merging ${DEV_BRANCH} into ${MAIN_BRANCH}"
git checkout "${MAIN_BRANCH}"
git merge --no-ff "${DEV_BRANCH}" -m "Merge ${DEV_BRANCH} into ${MAIN_BRANCH}"

echo "==> Pushing ${MAIN_BRANCH}"
git push "${REMOTE}" "${MAIN_BRANCH}"

echo "==> Syncing ${DEV_BRANCH} with ${MAIN_BRANCH}"
git checkout "${DEV_BRANCH}"
git merge --ff-only "${MAIN_BRANCH}"
git push "${REMOTE}" "${DEV_BRANCH}"

echo "==> Returning to ${ORIGINAL_BRANCH}"
git checkout "${ORIGINAL_BRANCH}"

echo "Done: ${MAIN_BRANCH} and ${DEV_BRANCH} are in sync."

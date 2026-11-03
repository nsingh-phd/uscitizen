#!/usr/bin/env bash
# Publish work: merge a work branch into main and push main (which deploys the live site).
#
#   make merge BRANCH=claude-topic
set -euo pipefail

MAIN_BRANCH="main"
REMOTE="origin"
WORK_BRANCH="${1:-}"

cd "$(git rev-parse --show-toplevel)"

if [[ -z "${WORK_BRANCH}" ]]; then
  echo "Usage: make merge BRANCH=<work-branch>" >&2
  exit 1
fi

if [[ "${WORK_BRANCH}" == "${MAIN_BRANCH}" ]]; then
  echo "Error: BRANCH should be a work branch, not ${MAIN_BRANCH}." >&2
  exit 1
fi

if [[ -n "$(git status --porcelain)" ]]; then
  echo "Error: working tree has uncommitted changes. Commit or stash them first." >&2
  exit 1
fi

ORIGINAL_BRANCH="$(git rev-parse --abbrev-ref HEAD)"

echo "==> Fetching latest refs from ${REMOTE}"
git fetch "${REMOTE}"

if ! git rev-parse --verify --quiet "${REMOTE}/${WORK_BRANCH}" >/dev/null; then
  echo "Error: branch ${WORK_BRANCH} not found on ${REMOTE}." >&2
  exit 1
fi

echo "==> Updating local ${MAIN_BRANCH}"
git checkout "${MAIN_BRANCH}"
git pull "${REMOTE}" "${MAIN_BRANCH}"

echo "==> Merging ${WORK_BRANCH} into ${MAIN_BRANCH}"
git merge --no-ff "${REMOTE}/${WORK_BRANCH}" -m "Merge ${WORK_BRANCH} into ${MAIN_BRANCH}"

echo "==> Pushing ${MAIN_BRANCH}"
git push "${REMOTE}" "${MAIN_BRANCH}"

echo "==> Returning to ${ORIGINAL_BRANCH}"
git checkout "${ORIGINAL_BRANCH}"

echo "Done: ${WORK_BRANCH} is merged into ${MAIN_BRANCH}."

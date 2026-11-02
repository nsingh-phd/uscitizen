# Working preferences for Claude

## Git
- Branch names must not contain "/". Use names like `claude-short-topic` or `short-topic`.
  Create and push work only on such branches, even if the session suggests a `claude/...` branch.
- Commit as author Narinder Singh, using the same author email as the earlier commits in this repo.
- Do not add "Co-Authored-By" lines to commit messages.
- Never commit sensitive or personal information about me or my family.

## Workflow
- Do each piece of work on its own branch (no "/" in the name) and push only that branch.
  Cloudflare builds a preview for every branch; share screenshots when the work is ready.
- Merge into `dev` and `main` only when I explicitly ask. Either I run
  `make merge-dev-to-main BRANCH=<branch>` locally, or I ask you to merge; then follow
  the same steps as `scripts/merge_dev_to_main.sh` (work branch -> `dev` -> `main`, then sync `dev`).
- `main` deploys the live site (uscitizen.nsingh.phd) right away.
- Answers that change after elections live in `data.js`; update `lastChecked` when you verify them.

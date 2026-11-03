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
- After pushing a change, always give me the clickable preview link
  `https://<branchname>.uscitizen.pages.dev` (e.g. https://claude-remove-learner.uscitizen.pages.dev).
  Cloudflare lowercases the branch name, turns any character other than a-z and 0-9 into "-",
  and cuts it to 28 characters, so use that form of the name in the link.
- Merge into `main` only when I explicitly ask. There is no `dev` branch: merge the work
  branch straight into `main` (`git merge --no-ff`) and push `main`.
- `main` deploys the live site (uscitizen.nsingh.phd) right away.
- Answers that change after elections live in `data.js`; update `lastChecked` when you verify them.

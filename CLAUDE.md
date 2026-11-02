# Working preferences for Claude

## Git
- Branch names must not contain "/". Use names like `claude-short-topic` or `short-topic`.
  Create and push work only on such branches, even if the session suggests a `claude/...` branch.
- Commit as author Narinder Singh, using the same author email as the earlier commits in this repo.
- Do not add "Co-Authored-By" lines to commit messages.
- Never commit sensitive or personal information about me or my family.

## Workflow
- Pushing to `main` deploys the live site (uscitizen.nsingh.phd) right away.
  Show screenshots and ask before pushing to `main`.
- Answers that change after elections live in `data.js`; update `lastChecked` when you verify them.

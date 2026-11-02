.PHONY: merge-dev-to-main

# Usage: make merge-dev-to-main [BRANCH=work-branch]
merge-dev-to-main:
	./scripts/merge_dev_to_main.sh $(BRANCH)

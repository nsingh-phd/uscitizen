.PHONY: merge serve

# Usage: make serve [PORT=8000]
serve:
	python3 scripts/serve.py $(or $(PORT),8000)

# Usage: make merge BRANCH=work-branch
merge:
	./scripts/merge_to_main.sh $(BRANCH)

YARN = yarn
PACKAGE_DIR = node_module

##
## Project
## -------
##

server: ## Install and start the project
server: install-packages
	$(YARN) dev

test: ## Install and test the project
test: test-run

fresh-test: ## Install, refresh snapshots and test the project
fresh-test: test-snapshots-update

##
## Packages
## -----
##

install-packages: yarn.lock
	$(YARN) install
	@touch -c $(PACKAGE_DIR)

yarn.lock: package.json

##
## Tests
## -----
##

test-snapshots-update: install-packages
	$(YARN) test:ci -u

test-run: install-packages
	$(YARN) test:ci

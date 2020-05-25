YARN = yarn

##
## Project
## -------
##

server: ## Install and start the project
server: node_modules
	$(YARN) dev

##
## Utils
## -----
##

node_modules: yarn.lock
	$(YARN) install
	@touch -c node_modules

yarn.lock: package.json
	$(YARN) upgrade
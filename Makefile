export functions_dir?='./functions'

build-app:
	@ (cd ${functions_dir}; npm run build; cd ..)

run-dev:
	@ (cd ${functions_dir}; npm run serve; cd ..)

deploy:
	@ firebase deploy

heroku-run:
	heroku login
	git init
	heroku git:remote -a orion-crepe-frontend
	heroku config:set PYTHONPATH="/app"
	heroku config:set ORION_HOME="/app"


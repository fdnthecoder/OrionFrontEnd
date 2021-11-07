heroku-run:
	heroku login
	git init
	heroku git:remote -a orion-crepe-frontend
	heroku config:set PYTHONPATH="/app"
	heroku config:set ORION_HOME="/app"

heroku-push:
	git add -A
	git commit -a
	git push heroku main

prod:
	git add -A
	git commit -a
	git push origin main 
	git push heroku main
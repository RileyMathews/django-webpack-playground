# Django with Webpack

## setup project
1. ran `djangoadmin startproejct project .`
1. ran `python manage.py startapp app`
1. created basic routing of url to app/views/app/index.html
1. created npm project by running `npm init`
1. ran `npm install webpack webpack-cli --save-dev`
1. modified package json file to remove entrypoint and set private to true
1. added /app/static to gitignore because it will soon contain build artifacts.
1. moved static files to global ./static directory.
1. added top level ./assets directory
1. added webpack config to build from ./assets/index.js to ./static/main.js
1. added babel and loaders with webpack config
1. added react scripts as dependency and setup boilerplate react project

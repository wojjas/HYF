# Notes
## Let's use Chrome Debugger
https://code.visualstudio.com/blogs/2016/02/23/introducing-chrome-debugger-for-vs-code

We will need a local web server running ans serving us!

### alt1 webpack
Install and run the Webpack Dev Server.
* npm init
* npm install -D webpack
* npm install -D webpack-cli
* npm install -D webpack-dev-server
* add to package.json: `"build": "webpack-dev-server main.js -d"`
* start server: npm run build

### alt2 
If python is installed
* python -m SimpleHTTPServer 8080# HYF

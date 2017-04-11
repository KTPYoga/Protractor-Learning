#! /bin/bash

[ -z "$SELENIUM_SERVER_NAME" ] && SELENIUM_SERVER_NAME="selenium-server"

#install protractor
npm install

# Remove but don't fail if it doesn't exist 
docker rm -f $SELENIUM_SERVER_NAME || true

# Start container for selenium server in background on host network
docker run -d -p 4444:4444 --name $SELENIUM_SERVER_NAME selenium/standalone-chrome

docker ps

#run protractor/flake test
npm run flake

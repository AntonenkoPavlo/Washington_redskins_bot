#!/bin/bash

npm install
npm install -g pm2
npm run build

# dev
pm2 start --no-daemon npm --name "practice" -- run "start:dev"

# prod
#pm2 start --no-daemon --name "practice" dist/main.js

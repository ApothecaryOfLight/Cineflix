#!/bin/bash
cd "${0%/*}"
npx nodemon --delay 500ms --watch . main.js "$1"

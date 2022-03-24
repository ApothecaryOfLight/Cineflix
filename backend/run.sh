cd "${0%/*}"
npx nodemon --watch . main.js "$1"

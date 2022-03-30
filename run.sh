cd "${0%/*}"
if [[ "$1" = "http" ]];
then
  echo "const ip = \"http://${2}:3000\";" > ./frontend/ip_file.js
elif [[ "$1" = "https" ]];
then
  echo "const ip = \"https://cineflix.video:3000\";" > ./frontend/ip_file.js
else
  echo "Command line argument:";
  echo "  run.sh http";
  echo "    Will run Cineflix without an SSL/TSL Certificates.";
  echo "  run.sh https";
  echo "    Will run Cineflix with SSL/TSL Certificates.";
  exit -1
fi

cd backend && screen -dm -S Cineflix bash -c './run.sh "$1"'

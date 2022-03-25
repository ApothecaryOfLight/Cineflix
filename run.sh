cd "${0%/*}"
if [[ "$1" = "dev" ]];
then
  echo "const ip = \"ws://${2}:3000\";" > ./frontend/ip_file.js
elif [[ "$1" = "prod" ]];
then
  echo "const ip = \"wss://cineflix.video:3000\";" > ./frontend/ip_file.js
else
  echo "Command line argument:";
  echo "  run.sh dev";
  echo "    Will run Cineflix without an SSL/TSL Certificates.";
  echo "  run.sh prod";
  echo "    Will run Cineflix with SSL/TSL Certificates.";
  exit -1
fi

cd backend && screen -dm -S Cineflix bash -c './run.sh "$1"'

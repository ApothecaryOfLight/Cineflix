if [[ "$1" = "dev" ]];
then
  IP=$(hostname -I | xargs)
  echo "const ip = \"ws://${IP}:3000\";" > ./frontend/ip_file.sh
elif [[ "$1" = "prod" ]];
then
  echo "const ip = \"wss://cineflix.video:3000\";" > ./frontend/ip_file.sh
else
  echo "Command line argument:";
  echo "  run.sh dev";
  echo "    Will run Cineflix without an SSL/TSL Certificates.";
  echo "  run.sh prod";
  echo "    Will run Cineflix with SSL/TSL Certificates.";
fi

cd backend && screen -dm -S Cineflix bash -c './run.sh "$1"'

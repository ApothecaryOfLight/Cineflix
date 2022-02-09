## Install project.
## Command line:
##   -i: standalone or unified.
##   -s: http or https.

## Get the command line arguments.
while getopts i:s: flag
do
  case "${flag}" in
    i) install_mode=${OPTARG};;
    s) secure_mode=${OPTARG};;
  esac
done

## If no command line arguments are supplied, print the options to console and stop.
if [[ "$install_mode" = "standalone" || "$install_mode" = "unified" ]] && [[ "$secure_mode" = "secure" || "$secure_mode" = "unsecure" ]];
then
  echo "Installing...";
else
  echo "Both command line arguments required.";
  echo "-i";
  echo "  standalone: Installs just this project.";
  echo "  unified: Installs this project as well as any dependencies.";
  echo "-s";
  echo "  secure: Installs project for HTTPS, opens ports. Doesn't provide certificates!";
  echo "  unsecure: Installs project for HTTP, opens ports.";
  exit;
fi

if [[ "$install_mode" = "standalone" ]];
then
  sudo apt-get upgrade -y sudo apt-get update -y

  #==NODEJS==
  curl -sL https://deb.nodesource.com/setup_15.x | sudo -E bash -
  sudo apt-get install -y nodejs

  #==NGINX==
  sudo apt-get install nginx -y
  sudo ufw allow 'Nginx HTTP'
  sudo ufw allow ssh
  sudo ufw enable

  ##TODO: Configure NGINX.
fi

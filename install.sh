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

if [[ "$install_mode" = "unified" ]];
then
  echo "Installing NGINX.";
  ##install nginx, sql, nodejs, etc. here.
fi

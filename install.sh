#!/bin/bash
cd "${0%/*}"
## Install project.
## Command line argument:
##   install.sh standalone
##     Will install Cineflix with all dependencies except for NodeJS packages.
##   install.sh unified
##     Will install just Cineflix, with all dependencies installed by the calling install script for UnifiedPortfolio.

if [[ "$1" = "standalone" ]];
then
  echo "Installing Cineflix and all dependencies.";

  #==NODEJS==
  sudo apt-get install -y nodejs
  sudo apt-get install -y npm
  cd backend && npm i

  #==NGINX==
  sudo apt-get install nginx -y
  sudo ufw allow 8000
  sudo ufw allow 3000
  sudo ufw allow 'Nginx HTTP'
  sudo ufw allow 'Nginx HTTPS'
  sudo ufw allow ssh
  sudo ufw enable
elif [[ "$1" = "unified" ]];
then
  echo "Installing just Cineflix and NodeJS packages."
  cd backend && npm i
  sudo ufw allow 8000
  sudo ufw allow 3000
else
  echo "Command line argument:";
  echo "  install.sh standalone";
  echo "    Will install Cineflix with all dependencies except for NodeJS packages.";
  echo "  install.sh unified";
  echo "    Will install just Cineflix, with all dependencies installed by the calling install script for UnifiedPortfolio.";
fi

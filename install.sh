#!/bin/bash
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
  curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
  sudo apt-get install -y nodejs
  cd backend && npm i

  #==NGINX==
  sudo apt-get install nginx -y
  sudo ufw allow 'Nginx HTTP'
  sudo ufw allow 'Nginx HTTPS'
  sudo ufw allow ssh
  sudo ufw enable
elif [[ "$1" = "unified" ]];
then
  echo "Installing just Cineflix and NodeJS packages."
  cd backend && npm i
else
  echo "Command line argument:";
  echo "  install.sh standalone";
  echo "    Will install Cineflix with all dependencies except for NodeJS packages.";
  echo "  install.sh unified";
  echo "    Will install just Cineflix, with all dependencies installed by the calling install script for UnifiedPortfolio.";
fi

##Set up Nginx route.
cp frontend/cineflix.video.config /etc/nginx/sites-available/

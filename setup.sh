#!/bin/bash
sudo apt-get upgrade -y sudo apt-get update -y

#==NODEJS==
curl -sL https://deb.nodesource.com/setup_15.x | sudo -E bash -
sudo apt-get install -y nodejs

#==NGINX==
sudo apt-get install nginx -y
sudo ufw allow 'Nginx HTTP'
sudo ufw allow ssh
sudo ufw enable
cd /etc/nginx/sites-enabled && sudo sed -i "s/root \/var\/www\/html;/root \/home\/ubuntu\/Cineflix\/frontend;/g" default
sudo systemctl restart nginx

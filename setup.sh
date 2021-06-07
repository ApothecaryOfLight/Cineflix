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
cd /etc/nginx/sites-enabled && sudo sed -i '54i  location /images {'
cd /etc/nginx/sites-enabled && sudo sed -i '55i    alias /home/ubuntu/Cineflix/backend/movies;'
cd /etc/nginx/sites-enabled && sudo sed -i '56i  }'
sudo systemctl restart nginx

curl https://cdn.vox-cdn.com/thumbor/H6oAgfA5ycaj1UnnJ94xx83TTHs=/0x38:1920x1043/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/10768517/melies.jpg -o ./frontend/man-in-the-moon.jpg

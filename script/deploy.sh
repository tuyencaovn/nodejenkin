ssh root@45.118.151.218 <<EOF
 cd ~/myapp/nodeci
 git pull
 npm install — production
 pm2 restart all
 exit
EOF
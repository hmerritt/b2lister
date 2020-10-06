#!/bin/bash


echo -e "\n\n* Build app client"
cd /app/client
npm run build

## Move built app to www
cd /app
mv -v /app/client/build/* /usr/share/nginx/html
rm -rf /app/client
ln -s /usr/share/nginx/html /app/client


##  Start server
echo -e "\n\n* Starting server"
cd /app/api
pm2 start index.js


##  Start serving app
echo -e "\n\n* Start serving app"
nginx -g "daemon off;"

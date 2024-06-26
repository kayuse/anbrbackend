git pull
rm -r node_modules/
npm install
npm prisma migrate deploy
node ace build
cd build/
npm ci --omit="dev"  
cd ..
pm2 stop server 
ENV_PATH=$ENV_PATH pm2 start bin/server.js
# cp ../.env .env
pm2 start bin/server.js
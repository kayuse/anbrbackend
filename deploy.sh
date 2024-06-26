git pull
pm2 stop server
npm install
npm prisma migrate deploy
node ace build
cd build/
npm ci --omit="dev"   
ENV_PATH=$ENV_PATH pm2 start bin/server.js
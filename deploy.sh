git pull
rm -r node_modules/
npm install
npm prisma migrate deploy
npx prisma generate
node ace build
cd build/
npm ci --omit="dev"  
npx prisma generate
pm2 stop server 
# ENV_PATH=$ENV_PATH pm2 start bin/server.js
cp ../.env .env
pm2 start bin/server.js


#   // "optionalDependencies": {
#   //      "@rollup/rollup-linux-x64-gnu": "4.9.5"
#   // },
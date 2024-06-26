git pull
pm2 stop server
ENV_PATH=.env pm2 start build/bin/server.js
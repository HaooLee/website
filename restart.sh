#!/bin/bash

echo '开始拉取git代码'

git fetch --all
git reset --hard origin/master
git pull

echo 'git 代码拉取完毕 开始安装node_modules'
npm i

echo 'node_modules安装完毕 开始build'

npm run build

echo 'build完成 开始重启pm2'

pm2 reload pm2.config.json

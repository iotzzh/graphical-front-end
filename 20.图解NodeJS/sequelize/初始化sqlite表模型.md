

## 命令
npm i sequelize-cli sqlite3 sequelize sequelize-auto
npm i -g sequelize-cli sqlite3

npx sequelize-auto -o "./models" -d YOUR_DATABASE_NAME -h YOUR_DATABASE_HOST -u YOUR_DATABASE_USERNAME -p YOUR_DATABASE_PORT -x YOUR_DATABASE_PASSWORD -e sqlite


#### 注意
如果报错：清除缓存，重新安装
npm cache clean --force
npm install sequelize-auto sqlite3

## 示例
npx sequelize-auto -o "./electron/main/models" -d ./data.db  -e sqlite 
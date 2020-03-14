const mongoose = require('mongoose');
const { db, app_mode } = require('../app-setting')

url = app_mode == 'dev' ?
    `mongodb://${db.dev.main.address}/${db.dev.main.name}` :
    `mongodb://${db.deploy.userName}:${db.deploy.password}@${db.deploy.main.address}/${db.deploy.main.name}?authSource=admin`;

console.log("url", url)
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.Promise = Promise;

module.exports = mongoose;

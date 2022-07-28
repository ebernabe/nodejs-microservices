const config = require('../../../config');
let store;
// const store = require('../../../store/mysql');
//const store = require('../../../store/remote-mysql');
if (config.remoteDB === true) {
    store = require('../../../store/remote-mysql');
} else {
    store = require('../../../store/mysql');
}


const ctrl = require('./controller');

module.exports = ctrl(store);
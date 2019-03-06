'use strict';

var _fs = require('fs');

var _path = require('path');

var _lodash = require('lodash');

var _contentstackSyncManager = require('contentstack-sync-manager');

var _config = require('./config');

var listener = require(_config.config.listenerModule);
var assetStore = require(_config.config.assetStoreModule);

var contentStore = require(_config.config.contentStoreModule);

var env = process.env.NODE_ENV;

var envConfig = void 0;
if ((0, _fs.existsSync)((0, _path.join)(__dirname, 'config', env + '.js'))) {
  envConfig = require((0, _path.join)(__dirname, 'config', env));
} else {
  envConfig = require((0, _path.join)(__dirname, 'config', 'development'));
}

var appConfig = (0, _lodash.merge)(_config.config, envConfig.config);

(0, _contentstackSyncManager.setConfig)(appConfig);
(0, _contentstackSyncManager.setAssetStore)(assetStore);
(0, _contentstackSyncManager.setContentStore)(contentStore);
(0, _contentstackSyncManager.setListener)(listener);

(0, _contentstackSyncManager.start)().then(function () {
  console.log('Contentstack sync utility started successfully!');
}).catch(console.error);
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var config = exports.config = {
  contentStoreModule: '@contentstack/datasync-content-store-filesystem',
  assetStoreModule: '@contentstack/datasync-asset-store-filesystem',
  listenerModule: '@contentstack/webhook-listener',
  contentstack: {
    apiKey: '***REMOVED***',
    deliveryToken: 'cs2cbe1d54611c2cb41fa36119'
  }
};
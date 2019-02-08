
const environment = process.env.NODE_ENV || 'development'

const contentStoreName = 'contentstack-content-store-filesystem'
const assetStore = require('contentstack-asset-store-filesystem')
const listener = require('contentstack-webhook-listener')
const syncManager = require('contentstack-sync-manager')
const config = require('./config/'+environment);

if(config.contentStore && config.contentStore.name) {
  contentStoreName = config.contentStore.name
}
const contentStore = require(contentStoreName || 'contentstack-content-store-filesystem')

syncManager.setConfig(config)
syncManager.setAssetConnector(assetStore)
syncManager.setContentConnector(contentStore)
syncManager.setListener(listener)

syncManager.start().then(messages => {
  console.log('Application started successfully.')
}).catch(console.error)

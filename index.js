const fs = require('fs')
const path = require('path')
const lodash = require('lodash')
const datasyncManager = require('@contentstack/datasync-manager')
const config = require('./config/all')

const listener = require(config.listenerModule)
const assetStore = require(config.assetStoreModule)

const contentStore = require(config.contentStoreModule)

const env = process.env.NODE_ENV

let envConfig
if (fs.existsSync(path.join(__dirname, 'config', env + '.js'))) {
  envConfig = require(path.join(__dirname, 'config', env))
} else {
  envConfig = require(path.join(__dirname, 'config', 'development'))
}

const appConfig = lodash.merge(config, envConfig.config)

datasyncManager.setConfig(appConfig)
datasyncManager.setAssetStore(assetStore)
datasyncManager.setContentStore(contentStore)
datasyncManager.setListener(listener)

datasyncManager.start()
  .then(() => {
    console.log('Boilerplate: DataSync started successfully!')
  })
  .catch(console.error)
  
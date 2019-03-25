import { existsSync } from 'fs'
import { join } from 'path'
import { merge } from 'lodash'
import { setConfig, setAssetStore, setContentStore, setListener, start } from '@contentstack/datasync-manager'
import { config } from './config'

const listener = require(config.listenerModule)
const assetStore = require(config.assetStoreModule)

const contentStore = require(config.contentStoreModule)

const env = process.env.NODE_ENV

let envConfig
if (existsSync(join(__dirname, 'config', env + '.js'))) {
  envConfig = require(join(__dirname, 'config', env))
} else {
  envConfig = require(join(__dirname, 'config', 'development'))
}

const appConfig = merge(config, envConfig.config)

setConfig(appConfig)
setAssetStore(assetStore)
setContentStore(contentStore)
setListener(listener)

start()
  .then(() => {
    console.log('Contentstack sync utility started successfully!')
  })
  .catch(console.error)

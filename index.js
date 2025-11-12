const fs = require("fs");
const path = require("path");
const _ = require("lodash");
const datasyncManager = require("@contentstack/datasync-manager");
const config = require("./config/all");
const messages = require("./messages");
/**
 * Listener module. Currently Contentstack offers
 * - @contentstack/webhook-listener
 */
const listener = require(config.listenerModule);
/**
 * Asset store module. Currently Contentstack offers
 * - @contentstack/datasync-asset-store-filesystem
 */
const assetStore = require(config.assetStoreModule);
/**
 * Content store module. Currently Contentstack offers
 * - @contentstack/datasync-content-store-filesystem (To query contents synced via filesystem, you can use https://github.com/contentstack/datasync-filesystem-sdk)
 * - @contentstack/datasync-content-store-mongodb (To query contents synced via mongodb, you can use https://github.com/contentstack/datasync-mongodb-sdk)
 */
const contentStore = require(config.contentStoreModule);

// Set application's environment
const env = process.env.NODE_ENV || config.environment || "development";

let envConfig;
if (fs.existsSync(path.join(__dirname, "config", env + ".js"))) {
  envConfig = require(path.join(__dirname, "config", env));
} else {
  envConfig = require(path.join(__dirname, "config", "development"));
}

const appConfig = _.merge(config, envConfig);

// Optional checkpoint reading
if (appConfig.checkpoint?.enabled) {
  const checkpointPath = path.join(__dirname, appConfig.checkpoint.filePath || ".checkpoint");
  const checkPoint = readHiddenFile(checkpointPath);
  if (checkPoint) {
    console.log(messages.sync.tokenFound(checkPoint));
    appConfig.contentstack.sync_token = checkPoint.token;
    console.log(messages.sync.usingToken(appConfig.contentstack.sync_token));
  }
}

datasyncManager.setConfig(appConfig);
datasyncManager.setAssetStore(assetStore);
datasyncManager.setContentStore(contentStore);
datasyncManager.setListener(listener);

datasyncManager
  .start()
  .then(() => {
    console.log(messages.sync.startSuccess());
  })
  .catch((error) => {
    console.error(messages.sync.error(error));
  });

function readHiddenFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.error(messages.file.notExist(filePath));
      return;
    }
    const data = fs.readFileSync(filePath, "utf8"); 
    return JSON.parse(data); 
  } catch (err) {
    console.error(messages.file.readError(err?.message));
  }
}

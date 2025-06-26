// scripts/clean.js
const fs = require("fs");
const path = require("path");
const rimraf = require("rimraf");
const config = require("./config/all");
const { merge } = require("lodash");

// Set application's environment
const env = process.env.NODE_ENV || config.environment || "development";

let envConfig;
if (fs.existsSync(path.join(__dirname, "config", env + ".js"))) {
  envConfig = require(path.join(__dirname, "config", env));
} else {
  envConfig = require(path.join(__dirname, "config", "development"));
}

const appConfig = merge(config, envConfig);

const pathsToDelete = [".ledger", ".token", "unprocessible"];

// Preserve .checkpoint only if explicitly set in the configuration
if (!appConfig.checkpoint?.preserve) {
  pathsToDelete.push(".checkpoint");
}

pathsToDelete.forEach((fileOrDir) => {
  const fullPath = path.join(__dirname, "..", fileOrDir);
  if (fs.existsSync(fullPath)) {
    rimraf.sync(fullPath);
    console.log("Deleted:", fileOrDir);
  } else {
    console.log("Not found (skipped):", fileOrDir);
  }
});

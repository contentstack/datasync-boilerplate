const config = {
  // By default, we'd be using contentstack-content-store-filesystem, the following keys can be configured for it.
  contentStore: {
    baseDir: './_development_contents',
    //Flag to preserve asset uid in the referenced entries, When a new asset version is published.(preserveAssetInReferencedEntries: true)
    preserveAssetInReferencedEntries: false
  },
  assetStore: {
    baseDir: './_development_contents',
  }
}

module.exports = config

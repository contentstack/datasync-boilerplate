const config = {
  contentStoreModule: '@contentstack/datasync-content-store-filesystem',
  assetStoreModule: '@contentstack/datasync-asset-store-filesystem',
  listenerModule: '@contentstack/webhook-listener',
  contentstack: {
    apiKey: '',
    deliveryToken: ''
  },
}

module.exports = config
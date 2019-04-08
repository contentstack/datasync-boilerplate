export const config = {
  contentStoreModule: '@contentstack/datasync-content-store-mongodb',
  assetStoreModule: '@contentstack/datasync-asset-store-filesystem',
  listenerModule: '@contentstack/webhook-listener',
  contentstack: {
    apiKey: '',
    deliveryToken: '',
  },
}

const config = {
  // // The following keys, can be edited in contentstack-content-store-mongodb.
  // contentStore: {
  //   // Name of the mongodb database to store in
  //   dbName: 'contentstack-db', // Required
  //   // Collection name in which contents will be stored
  //   collection: {
  //     asset: 'prod_contents',
  //     entry: 'prod_contents',
  //     schema: 'prod_content_types'
  //   },
  //   // keys that form part of sys_keys, pass { key: true } to add, { key: false } to remove
  //   // currently, only top level keys from SYNC API response item are supported
  //   indexedKeys: {
  //     _content_type_uid: true,
  //     locale: true,
  //     uid: true,
  //   },
  //   // Refer http://mongodb.github.io/node-mongodb-native/3.1/api/MongoClient.html for more configuration options
  //   options: {
  //     autoReconnect: true,
  //     connectTimeoutMS: 15000,
  //     keepAlive: true,
  //     noDelay: true,
  //     reconnectInterval: 1000,
  //     reconnectTries: 20,
  //     userNewUrlParser: true,
  //   },
  //   // Keys to be deleted, while data is being inserted
  //   unwantedKeys: {
  //     asset: {
  //       action: true,
  //       checkpoint: true,
  //       'data.created_by': true,
  //       event_at: true,
  //       type: true,
  //       'data.updated_by': true
  //     },
  //     contentType: {
  //       'data.created_by': true,
  //       'data.updated_by': true,
  //       'data.DEFAULT_ACL': true,
  //       'data.SYS_ACL': true,
  //       'data.abilities': true,
  //       'data.last_activity': true
  //     },
  //     entry: {
  //       action: true,
  //       checkpoint: true,
  //       'data.created_by': true,
  //       event_at: true,
  //       type: true,
  //       'data.updated_by': true
  //     },
  //   },
  //   // mongodb connection url
  //   url: 'mongodb://localhost:27017',

  //   // Flag to preserve asset uid in the referenced entries, When a new asset version is published.(preserveAssetInReferencedEntries: true)
  //   preserveAssetInReferencedEntries: false
  // }
}

module.exports = config

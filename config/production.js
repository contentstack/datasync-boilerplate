export const config = {
  // The following keys, can be edited in contentstack-content-store-mongodb.
  // contentStore: {
  //   // Name of the mongodb database to store in
  //   dbName: 'contentstack-persistent-db', // Required
  //   // Collection name in which contents will be stored
  //   collectionName: 'contents',
  //   // keys that form part of sys_keys, pass { key: true } to add, { key: false } to remove
  //   // currently, only top level keys from SYNC API response item are supported
  //   indexedKeys: {
  //     content_type_uid: true,
  //     locale: true,
  //     uid: true,
  //     published_at: true
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
  // }
}
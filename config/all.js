const config = {
  // Make sure you have all the modules mentioned below installed
  contentStoreModule: '@contentstack/datasync-content-store-filesystem',
  assetStoreModule: '@contentstack/datasync-asset-store-filesystem',
  listenerModule: '@contentstack/webhook-listener',
  contentstack: {
       // Your stack's API key
       apiKey: '',
       // Your stack's environment based delivery token. (Goto Contentstack Dashboard -> Settings dropdown -> Tokens -> Generate tokens)
       deliveryToken: '',
       // add a host based on your region
       //(For NA Region) host: 'https://api.contentstack.com/v3',
       //(For EU Region) host: 'https://eu-api.contentstack.com/v3',
       //(For AZURE NA Region) host: 'https://azure-na-api.contentstack.com/v3',
       host:'',
  },
  plugins: [
    // Plugins starting with _cs_internal_ are app specific internal plugins
    // If you have custom plugins
    //  1. Ceate a 'plugins' folder in this app's directory
    //  2. Create a folder inside it
    //  3. Inside the folder, create a index.js file
    // Check example - plugins/dummy-plugin of this project
    
    {
      disabled: false,
      name: 'item-logger',
      options: {
        // Here, you can set your own custom logger
        log: console.log
      }
    },
    {
      disabled: false,
      // This plugin 
      //  - Modifies reference field structure of Stack's v3.4.x and below to new reference field structure (Array of uids, transformed to Array of objects)
      //  - Updates all old reference fields and makes them compatible with multiple references
      name: '_cs_internal_transform_entries',
      // path: '',
      options: {
        // other overrides...
      },
    },
    {
      disabled: false,
      // This plugin 
      //  - Detects asset/reference paths in a content type's schema
      //  - Updates all content types with asset/reference fields
      // Which can be later used with datasync-filesystem-sdk OR datasync-mongodb-sdk
      name: '_cs_internal_transform_schemas',
      options: {
        // Set false, if you do not wish to log asset references in the schema
        logAssetPaths: true,
        // Set false, if you do not wish to log entry references in the scehma
        logReferencePaths: true,
      },
    },
    {
      disabled: false,
      // This plugin
      //  - Detects RTE/Markdown fields in a schema
      //  - Finds all the assets that's stored in Contentstack
      //  - Downloads all assets onto the asset store specified
      //  - Updates the entry's RTE/Markdown fields
      name: '_cs_internal_save_rte_markdown_assets',
      options: {
        // other overrides...
      },
    },
  ],
}

module.exports = config

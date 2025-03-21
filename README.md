[![Contentstack](https://www.contentstack.com/docs/static/images/contentstack.png)](https://www.contentstack.com/)

Contentstack is a headless CMS with an API-first approach. It is a CMS that developers can use to build powerful cross-platform applications in their favorite languages. Build your application frontend, and Contentstack will take care of the rest. [Read More](https://www.contentstack.com/). 

## Contentstack DataSync Boilerplate

Contentstack DataSync lets you sync your Contentstack data with your database, enabling you to save data locally and serve content directly from your database. It is a combination of four powerful modules that is [DataSync Webhook Listener](https://github.com/contentstack/webhook-listener), [DataSync Manager](https://github.com/contentstack/datasync-manager), [DataSync Asset Store Filesystem](https://github.com/contentstack/datasync-asset-store-filesystem), **DataSync Content Store** — [Filesystem](https://github.com/contentstack/datasync-content-store-filesystem) and [MongoDB](https://github.com/contentstack/datasync-content-store-mongodb).

This boilerplate is a code skeleton that will help you get up and running with Contentstack DataSync. It's a pre-built code that will help you sync your data from the Contentstack server with Filesystem and MongoDB databases.

### Prerequisite

- Node.js 20 or above
- ngrok for running it on the local system
- A webhook already set up as follows:
    - Make your contentstack-webhook-listener server available publicly (For local environment, use ngrok)
    - Add your publically available domain with the endpoint specified for the listener. (Default endpoint is /notify so, your URL to Notify will be: http://www.example.com/notify)
    - Copy paste below listed actions in "When" section by switching to "Code View"

        ```
        content_types.entries.environments.development.publish.success,
        assets.environments.development.publish.success,
        assets.environments.development.unpublish.success,
        content_types.entries.environments.development.unpublish.success,
        content_types.entries.delete,
        content_types.delete,
        assets.delete
        ```

### Configuration

Add following configurations to config/all.js or to your config/{{environment-name}}.js file:
```js
module.exports = {
    contentstack: {
        apiKey: '<<YOUR API KEY>>',
        token: '<<DELIVERY TOKEN>>',
        host: '<<HOST>>'
    },
   contentStoreModule: '<<MODULE NAME>>',
   assetStoreModule: '<<MODULE NAME>>',
   listenerModule: '<<MODULE NAME>>'
}
```
The following content store modules are available
- [@contentstack/datasync-content-store-filesystem](https://github.com/contentstack/datasync-content-store-filesystem)
- [@contentstack/datasync-content-store-mongodb](https://github.com/contentstack/datasync-content-store-mongodb)

The following asset store modules are available
- [@contentstack/datasync-asset-store-filesystem](https://github.com/contentstack/datasync-asset-store-filesystem)

### Install all dependencies
```cmd
npm install
```
### Start the service
```cmd
 npm start 
```

## Further Reading
- [Getting started with Contentstack DataSync](https://www.contentstack.com/docs/guide/synchronization/contentstack-datasync)
- [Contentstack DataSync](https://www.contentstack.com/docs/guide/synchronization/contentstack-datasync/configuration-files-for-contentstack-datasync) doc lists the configuration for different modules


## Support and Feature requests
If you have any issues working with the library, please file an issue [here](https://github.com/contentstack/datasync-boilerplate/issues) at Github.

You can send us an e-mail at support@contentstack.com if you have any support or feature requests. Our support team is available 24/7 on the intercom. You can always get in touch and give us an opportunity to serve you better!


## License
This repository is published under the [MIT license](LICENSE).

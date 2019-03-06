[![Contentstack](https://www.contentstack.com/docs/static/images/contentstack.png)](https://www.contentstack.com/)
## Contentstack sync boilerplate

Contentstack is a headless CMS with an API-first approach. It is a CMS that developers can use to build powerful cross-platform applications in their favorite languages. Build your application frontend, and Contentstack will take care of the rest. [Read More](https://www.contentstack.com/). 

Contentstack provides Webhook listener to get notified when webhook gets triggered. It is build to use along with Contentstack Sync Manager and Contentstack Asset stores and Content stores.

### Prerequisite

**Mongodb 4.0.2 (If using mongodb connector)**

**Create webhook**
    - Make sure your contentstack-wehbook-listener server available publicly (For local development use ngrok)
    - Add your publically available domain with the endpoint specified for listener. (Default endpoint is /notify so, your URL to Notify will be: http://www.example.com/notify)
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

### Config

Add following configurations to config.js file:
```js
module.exports = {
    'contentstack': {
        'apiKey': '<<YOUR API KEY>>',
        'token': '<<DELIVERY TOKEN>>'
    }
}
```

To override default configurations, please refere list of configs here:
https://docs.google.com/document/d/1JmjFI36I0OS88wjnUAiuQ1wWG3UtznI4REK-lxMsNPY/edit?usp=sharing

### How to add plugin
You have to register plugin in config as follows:
```js
plugins: {
        myplugin: {
            name: 'John doe'
        }
    }
```
Note: By default it will search for plugin in current working directory. If you want to change the plugin folder location use environment variable "PLUGIN_PATH"

    $ PLUGIN_PATH=./path/to/plugins npm start

Create plugin folder inside the boilerplate and add folder with **plugins** name specified in config above. In this case it is **myplugin**

### Usage

If you are using mongodb content store, require mongodb module as follows:
```js
const contentStore = require('contentstack-mongodb-content-connector')
```

If you are using filesystem content store, require filesystem store as follows:

```js
const contentStore = require('contentstack-content-store-filesystem')
```

Install all dependencies
```cmd
npm install
```
Start the service
```cmd
 npm start 
```




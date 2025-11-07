const messages = require('../../messages');

module.exports = function Plugins () {
  // eslint-disable-next-line no-unused-vars
  const options = Plugins.options
  const log = options.log

  // eslint-disable-next-line no-unused-vars
  Plugins.beforeSync = function (action, data, schema) {
    log(messages.plugin.itemLogger.beforeSync(action, data.uid, data._content_type_uid))
    return Promise.resolve()
  }

  // eslint-disable-next-line no-unused-vars
  Plugins.afterSync = function (action, data, schema) {
    log(messages.plugin.itemLogger.afterSync(action, data.uid, data._content_type_uid))
    return Promise.resolve()
  }
}

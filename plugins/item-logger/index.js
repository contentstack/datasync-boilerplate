module.exports = function Plugins () {
  // eslint-disable-next-line no-unused-vars
  const options = Plugins.options
  const log = options.log

  // eslint-disable-next-line no-unused-vars
  Plugins.beforeSync = function (action, data, schema) {
    log(`item-logger before-sync logging: ${action.toUpperCase()} on ${data.uid} of ${data._content_type_uid}`)
    return Promise.resolve()
  }

  // eslint-disable-next-line no-unused-vars
  Plugins.afterSync = function (action, data, schema) {
    log(`item-logger after-sync logging: ${action.toUpperCase()} on ${data.uid} of ${data._content_type_uid}`)
    return Promise.resolve()
  }
}

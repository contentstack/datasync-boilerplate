"use strict";

var log = console.log;

module.exports = function Plugins(pluginOptions) {
  var options = pluginOptions;

  Plugins.beforePublish = function (input) {
    return Promise.resolve(input);
  };

  Plugins.afterPublish = function (input) {
    return Promise.resolve(input);
  };

  Plugins.beforeUnpublish = function (input) {
    return Promise.resolve(input);
  };

  Plugins.afterUnpublish = function (input) {
    return Promise.resolve(input);
  };

  Plugins.beforeDelete = function (input) {
    return Promise.resolve(input);
  };

  Plugins.afterDelete = function (input) {
    return Promise.resolve(input);
  };
};
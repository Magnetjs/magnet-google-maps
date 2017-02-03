'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _convert = require('magnet-core/convert');

var _convert2 = _interopRequireDefault(_convert);

var _maps = require('@google/maps');

var _maps2 = _interopRequireDefault(_maps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _convert2.default)(_maps2.default, {
  namespace: 'googleMaps',
  initializer: 'createClient',
  params: function params(config) {
    return _extends({}, config, { key: config.key || config.apiKey, Promise: global.Promise });
  }
});
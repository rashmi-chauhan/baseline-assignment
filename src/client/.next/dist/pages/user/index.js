'use strict';
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = require('next/node_modules/babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = require('next/node_modules/babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require('next/node_modules/babel-runtime/helpers/createClass');var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = require('next/node_modules/babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('next/node_modules/babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);var _jsxFileName = '/Users/enograles/appirio-digital/ads-webapp-baseline/src/client/pages/user/index.js?entry';var _link = require('next/dist/lib/link.js');var _link2 = _interopRequireDefault(_link);
var _react = require('react');var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}var PageUser = function (_React$Component) {
  (0, _inherits3.default)(PageUser, _React$Component);function PageUser() {
    (0, _classCallCheck3.default)(this, PageUser);return (0, _possibleConstructorReturn3.default)(this, (PageUser.__proto__ || (0, _getPrototypeOf2.default)(PageUser)).apply(this, arguments));
  }(0, _createClass3.default)(PageUser, [{ key: 'render', value: function render() {
      var message = process && process.env && process.env.WEBAPP_MESSAGE || undefined || 'no message found';
      return _react2.default.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 8 } }, _react2.default.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 9 } }, _react2.default.createElement(_link2.default, { href: '/user/profile', __source: { fileName: _jsxFileName, lineNumber: 10 } }, 'Profile')));
    } }]);return PageUser;
}(_react2.default.Component);exports.default = PageUser;
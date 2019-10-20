'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _person = require('./person.js');

var _person2 = _interopRequireDefault(_person);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import './utils.js';

var template = _react2.default.createElement(
  'p',
  null,
  'testing 12asd34'
);
_reactDom2.default.render(template, document.getElementById('app'));

console.log(validator.isEmail('asds@gmail.com'));

console.log('app.js is running');
console.log((0, _person.isAdult)(18));
console.log((0, _person.isAdult)(8));

console.log((0, _person.canDrink)(21));
console.log((0, _person.canDrink)(18));

console.log((0, _person2.default)(65));
console.log((0, _person2.default)(25));

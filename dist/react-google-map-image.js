(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ReactGoogleMapImage = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var GoogleMapImage = (function (_Component) {
    _inherits(GoogleMapImage, _Component);

    function GoogleMapImage(props, context) {
        _classCallCheck(this, GoogleMapImage);

        _get(Object.getPrototypeOf(GoogleMapImage.prototype), 'constructor', this).call(this, props, context);
    }

    _createClass(GoogleMapImage, [{
        key: 'getSrcParams',
        value: function getSrcParams() {
            var params = '';
            var counter = 0;
            var defaultMarker = '&markers=blue|';

            for (var key in this.props.config) {
                params += counter > 0 ? "&" : "";
                params += key + '=' + this.props.config[key];
                counter++;
            }

            if (!Object.keys(this.props.config).includes('markers')) {
                params += defaultMarker + this.props.config.center;
            }

            return params;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                {
                    className: 'map-image-wrapper',
                    style: this.props.wrapperStyle || null
                },
                _react2['default'].createElement('img', {
                    src: "https://maps.googleapis.com/maps/api/staticmap?" + this.getSrcParams(),
                    style: this.props.style || null
                })
            );
        }
    }]);

    return GoogleMapImage;
})(_react.Component);

GoogleMapImage.propTypes = {
    config: _react2['default'].PropTypes.shape({
        center: _react2['default'].PropTypes.string.isRequired,
        size: _react2['default'].PropTypes.string.isRequired,
        zoom: _react2['default'].PropTypes.string.isRequired,
        key: _react2['default'].PropTypes.string.isRequired
    }).isRequired
};

exports['default'] = GoogleMapImage;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});
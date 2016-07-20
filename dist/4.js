webpackJsonp([4],{

/***/ 39:
/***/ function(module, exports, __webpack_require__) {

  module.exports = { "default": __webpack_require__(89), __esModule: true };

/***/ },

/***/ 40:
/***/ function(module, exports) {

  "use strict";
  
  exports.__esModule = true;
  
  exports.default = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

/***/ },

/***/ 41:
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  
  exports.__esModule = true;
  
  var _defineProperty = __webpack_require__(120);
  
  var _defineProperty2 = _interopRequireDefault(_defineProperty);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        (0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }
  
    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

/***/ },

/***/ 42:
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  
  exports.__esModule = true;
  
  var _setPrototypeOf = __webpack_require__(88);
  
  var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
  
  var _create = __webpack_require__(119);
  
  var _create2 = _interopRequireDefault(_create);
  
  var _typeof2 = __webpack_require__(59);
  
  var _typeof3 = _interopRequireDefault(_typeof2);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
    }
  
    subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  };

/***/ },

/***/ 43:
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  
  exports.__esModule = true;
  
  var _typeof2 = __webpack_require__(59);
  
  var _typeof3 = _interopRequireDefault(_typeof2);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
  
    return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  };

/***/ },

/***/ 88:
/***/ function(module, exports, __webpack_require__) {

  module.exports = { "default": __webpack_require__(90), __esModule: true };

/***/ },

/***/ 89:
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(95);
  module.exports = __webpack_require__(15).Object.getPrototypeOf;

/***/ },

/***/ 90:
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(96);
  module.exports = __webpack_require__(15).Object.setPrototypeOf;

/***/ },

/***/ 93:
/***/ function(module, exports, __webpack_require__) {

  // Works with __proto__ only. Old v8 can't work with null proto objects.
  /* eslint-disable no-proto */
  var isObject = __webpack_require__(61)
    , anObject = __webpack_require__(34);
  var check = function(O, proto){
    anObject(O);
    if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
  };
  module.exports = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
      function(test, buggy, set){
        try {
          set = __webpack_require__(60)(Function.call, __webpack_require__(122).f(Object.prototype, '__proto__').set, 2);
          set(test, []);
          buggy = !(test instanceof Array);
        } catch(e){ buggy = true; }
        return function setPrototypeOf(O, proto){
          check(O, proto);
          if(buggy)O.__proto__ = proto;
          else set(O, proto);
          return O;
        };
      }({}, false) : undefined),
    check: check
  };

/***/ },

/***/ 95:
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.9 Object.getPrototypeOf(O)
  var toObject        = __webpack_require__(72)
    , $getPrototypeOf = __webpack_require__(123);
  
  __webpack_require__(124)('getPrototypeOf', function(){
    return function getPrototypeOf(it){
      return $getPrototypeOf(toObject(it));
    };
  });

/***/ },

/***/ 96:
/***/ function(module, exports, __webpack_require__) {

  // 19.1.3.19 Object.setPrototypeOf(O, proto)
  var $export = __webpack_require__(35);
  $export($export.S, 'Object', {setPrototypeOf: __webpack_require__(93).set});

/***/ },

/***/ 274:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _slicedToArray2 = __webpack_require__(378);
  
  var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
  
  var _getPrototypeOf = __webpack_require__(39);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(40);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(41);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(43);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(42);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _history = __webpack_require__(184);
  
  var _history2 = _interopRequireDefault(_history);
  
  var _Link = __webpack_require__(365);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var _styles = __webpack_require__(718);
  
  var _styles2 = _interopRequireDefault(_styles);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Static Boilerplate
   * https://github.com/kriasoft/react-static-boilerplate
   *
   * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var ErrorPage = function (_React$Component) {
    (0, _inherits3.default)(ErrorPage, _React$Component);
  
    function ErrorPage() {
      var _Object$getPrototypeO;
  
      var _temp, _this, _ret;
  
      (0, _classCallCheck3.default)(this, ErrorPage);
  
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(ErrorPage)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.goBack = function (event) {
        event.preventDefault();
        _history2.default.goBack();
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }
  
    (0, _createClass3.default)(ErrorPage, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        document.title = this.props.error && this.props.error.status === 404 ? 'Page Not Found' : 'Error';
      }
    }, {
      key: 'render',
      value: function render() {
        if (this.props.error) console.error(this.props.error); // eslint-disable-line no-console
  
        var _ref = this.props.error && this.props.error.status === 404 ? ['404', 'Page not found'] : ['Error', 'Oups, something went wrong'];
  
        var _ref2 = (0, _slicedToArray3.default)(_ref, 2);
  
        var code = _ref2[0];
        var title = _ref2[1];
  
  
        return _react2.default.createElement(
          'div',
          { className: _styles2.default.container },
          _react2.default.createElement(
            'main',
            { className: _styles2.default.content },
            _react2.default.createElement(
              'h1',
              { className: _styles2.default.code },
              code
            ),
            _react2.default.createElement(
              'p',
              { className: _styles2.default.title },
              title
            ),
            code === '404' && _react2.default.createElement(
              'p',
              { className: _styles2.default.text },
              'The page you\'re looking for does not exist or an another error occurred.'
            ),
            _react2.default.createElement(
              'p',
              { className: _styles2.default.text },
              _react2.default.createElement(
                'a',
                { href: '/', onClick: this.goBack },
                'Go back'
              ),
              ', or head over to the ',
              _react2.default.createElement(
                _Link2.default,
                { to: '/' },
                'home page'
              ),
              ' to choose a new direction.'
            )
          )
        );
      }
    }]);
    return ErrorPage;
  }(_react2.default.Component);
  
  ErrorPage.propTypes = {
    error: _react2.default.PropTypes.object
  };
  exports.default = ErrorPage;

/***/ },

/***/ 365:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends2 = __webpack_require__(70);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _objectWithoutProperties2 = __webpack_require__(377);
  
  var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
  
  var _getPrototypeOf = __webpack_require__(39);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(40);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(41);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(43);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(42);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _history = __webpack_require__(184);
  
  var _history2 = _interopRequireDefault(_history);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Static Boilerplate
   * https://github.com/kriasoft/react-static-boilerplate
   *
   * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var Link = function (_React$Component) {
    (0, _inherits3.default)(Link, _React$Component);
  
    function Link() {
      var _Object$getPrototypeO;
  
      var _temp, _this, _ret;
  
      (0, _classCallCheck3.default)(this, Link);
  
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(Link)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleClick = function (event) {
        if (_this.props.onClick) {
          _this.props.onClick(event);
        }
  
        if (event.button !== 0 /* left click */) {
            return;
          }
  
        if (event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) {
          return;
        }
  
        if (event.defaultPrevented === true) {
          return;
        }
  
        event.preventDefault();
  
        if (_this.props.to) {
          _history2.default.push(_this.props.to);
        } else {
          _history2.default.push({
            pathname: event.currentTarget.pathname,
            search: event.currentTarget.search
          });
        }
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }
  
    (0, _createClass3.default)(Link, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var to = _props.to;
        var props = (0, _objectWithoutProperties3.default)(_props, ['to']); // eslint-disable-line no-use-before-define
  
        return _react2.default.createElement('a', (0, _extends3.default)({ href: _history2.default.createHref(to) }, props, { onClick: this.handleClick }));
      }
    }]);
    return Link;
  }(_react2.default.Component);
  
  Link.propTypes = {
    to: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]).isRequired,
    onClick: _react.PropTypes.func
  };
  exports.default = Link;

/***/ },

/***/ 371:
/***/ function(module, exports, __webpack_require__) {

  module.exports = { "default": __webpack_require__(384), __esModule: true };

/***/ },

/***/ 377:
/***/ function(module, exports) {

  "use strict";
  
  exports.__esModule = true;
  
  exports.default = function (obj, keys) {
    var target = {};
  
    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }
  
    return target;
  };

/***/ },

/***/ 378:
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  
  exports.__esModule = true;
  
  var _isIterable2 = __webpack_require__(371);
  
  var _isIterable3 = _interopRequireDefault(_isIterable2);
  
  var _getIterator2 = __webpack_require__(279);
  
  var _getIterator3 = _interopRequireDefault(_getIterator2);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;
  
      try {
        for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
  
          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }
  
      return _arr;
    }
  
    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if ((0, _isIterable3.default)(Object(arr))) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

/***/ },

/***/ 384:
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(189);
  __webpack_require__(126);
  module.exports = __webpack_require__(414);

/***/ },

/***/ 414:
/***/ function(module, exports, __webpack_require__) {

  var classof   = __webpack_require__(212)
    , ITERATOR  = __webpack_require__(23)('iterator')
    , Iterators = __webpack_require__(109);
  module.exports = __webpack_require__(15).isIterable = function(it){
    var O = Object(it);
    return O[ITERATOR] !== undefined
      || '@@iterator' in O
      || Iterators.hasOwnProperty(classof(O));
  };

/***/ },

/***/ 606:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(76)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n *\n * Copyright © 2015-2016 Konstantin Tarkus (@koistya)\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n.styles_container_2SD {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.styles_content_2ZN {\n  padding-bottom: 80px;\n}\n\n.styles_code_2Cl {\n  margin: 0;\n  color: #607d8b;\n  letter-spacing: 0.02em;\n  font-weight: 300;\n  font-size: 15em;\n  line-height: 1;\n}\n\n.styles_title_CN4 {\n  padding-bottom: 0.5em;\n  color: #607d8b;\n  letter-spacing: 0.02em;\n  font-weight: 400;\n  font-size: 2em;\n  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;\n  line-height: 1em;\n}\n\n.styles_text_VDz {\n  padding-bottom: 0;\n  color: rgba(96, 125, 139, 0.5);\n  font-size: 1.125em;\n  line-height: 1.5em;\n}\n\n@media only screen and (max-width: 280px) {\n\n  .styles_container_2SD,\n  .styles_text_VDz {\n    width: 95%;\n  }\n\n  .styles_title_CN4 {\n    margin: 0 0 0.3em;\n    font-size: 1.5em;\n  }\n\n}\n\n@media screen and (max-width: 1024px) {\n\n  .styles_content_2ZN {\n    padding: 0 16px;\n  }\n\n  .styles_code_2Cl {\n    font-size: 10em;\n  }\n\n  .styles_title_CN4 {\n    font-size: 1.5em;\n  }\n\n}\n", "", {"version":3,"sources":["/./pages/error/styles.css"],"names":[],"mappings":"AAAA;;;;;;;;GAQG;;AAMH;EACE,mBAAmB;EACnB,OAAO;EACP,QAAQ;EACR,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,yBAAwB;MAAxB,sBAAwB;UAAxB,wBAAwB;EACxB,0BAAoB;MAApB,uBAAoB;UAApB,oBAAoB;CACrB;;AAED;EACE,qBAAqB;CACtB;;AAED;EACE,UAAU;EACV,eAAoB;EACpB,uBAAuB;EACvB,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;CAChB;;AAED;EACE,sBAAsB;EACtB,eAAoB;EACpB,uBAAuB;EACvB,iBAAiB;EACjB,eAAe;EACf,wDAAwD;EACxD,iBAAiB;CAClB;;AAED;EACE,kBAAkB;EAClB,+BAAsC;EACtC,mBAAmB;EACnB,mBAAmB;CACpB;;AAED;;EAEE;;IAEE,WAAW;GACZ;;EAED;IACE,kBAAkB;IAClB,iBAAiB;GAClB;;CAEF;;AAED;;EAEE;IACE,gBAAgB;GACjB;;EAED;IACE,gBAAgB;GACjB;;EAED;IACE,iBAAiB;GAClB;;CAEF","file":"styles.css","sourcesContent":["/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n *\n * Copyright © 2015-2016 Konstantin Tarkus (@koistya)\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  --color: #607d8b;\n}\n\n.container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n}\n\n.content {\n  padding-bottom: 80px;\n}\n\n.code {\n  margin: 0;\n  color: var(--color);\n  letter-spacing: 0.02em;\n  font-weight: 300;\n  font-size: 15em;\n  line-height: 1;\n}\n\n.title {\n  padding-bottom: 0.5em;\n  color: var(--color);\n  letter-spacing: 0.02em;\n  font-weight: 400;\n  font-size: 2em;\n  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;\n  line-height: 1em;\n}\n\n.text {\n  padding-bottom: 0;\n  color: color(var(--color) alpha(50%));\n  font-size: 1.125em;\n  line-height: 1.5em;\n}\n\n@media only screen and (max-width: 280px) {\n\n  .container,\n  .text {\n    width: 95%;\n  }\n\n  .title {\n    margin: 0 0 0.3em;\n    font-size: 1.5em;\n  }\n\n}\n\n@media screen and (max-width: 1024px) {\n\n  .content {\n    padding: 0 16px;\n  }\n\n  .code {\n    font-size: 10em;\n  }\n\n  .title {\n    font-size: 1.5em;\n  }\n\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"container": "styles_container_2SD",
  	"content": "styles_content_2ZN",
  	"code": "styles_code_2Cl",
  	"title": "styles_title_CN4",
  	"text": "styles_text_VDz"
  };

/***/ },

/***/ 718:
/***/ function(module, exports, __webpack_require__) {

  // style-loader: Adds some css to the DOM by adding a <style> tag
  
  // load the styles
  var content = __webpack_require__(606);
  if(typeof content === 'string') content = [[module.id, content, '']];
  // add the styles to the DOM
  var update = __webpack_require__(87)(content, {});
  if(content.locals) module.exports = content.locals;
  // Hot Module Replacement
  if(false) {
  	// When the styles change, update the <style> tags
  	if(!content.locals) {
  		module.hot.accept("!!./../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../node_modules/postcss-loader/index.js!./styles.css", function() {
  			var newContent = require("!!./../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../node_modules/postcss-loader/index.js!./styles.css");
  			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
  			update(newContent);
  		});
  	}
  	// When the module is disposed, remove the <style> tags
  	module.hot.dispose(function() { update(); });
  }

/***/ }

});
//# sourceMappingURL=4.js.map?3e0bf08f7c3ed3a972c4
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.between = factory());
}(this, (function () { 'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    _setPrototypeOf(subClass.prototype, superClass && superClass.prototype);

    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) {
      return o.__proto__;
    };

    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _construct(Parent, args, Class) {
    if (typeof Reflect !== "undefined" && Reflect.construct) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Parent.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  var minivents_commonjs = function Events(target){
    var events = {}, empty = [];
    target = target || this;
    /**
     *  On: listen to events
     */
    target.on = function(type, func, ctx){
      (events[type] = events[type] || []).push([func, ctx]);
      return target
    };
    /**
     *  Off: stop listening to event / specific callback
     */
    target.off = function(type, func){
      type || (events = {});
      var list = events[type] || empty,
          i = list.length = func ? list.length : 0;
      while(i--) func == list[i][0] && list.splice(i,1);
      return target
    };
    /** 
     * Emit: send event, callbacks will be triggered
     */
    target.emit = function(type){
      var e = events[type] || empty, list = e.length > 0 ? e.slice(0, e.length) : e, i=0, j;
      while(j=list[i++]) j[0].apply(j[1], empty.slice.call(arguments, 1));
      return target
    };
  };

  function lerp(v0, v1, t) {
      return v0*(1-t)+v1*t
  }
  var lerp_1 = lerp;

  var _betweens = [];

  var _prevTime = Date.now(),
      _time,
      _delta;

  (function _update() {
    requestAnimationFrame(_update);
    _time = Date.now();
    _delta = _time - _prevTime;

    for (var i = 0; i < _betweens.length; i++) {
      if (!_betweens[i][SYMBOL_COMPLETED]) _betweens[i].update(_delta);
    }

    _prevTime = _time;
  })();

  var SYMBOL_TYPE = Symbol('type');
  var SYMBOL_COMPLETED = Symbol('completed');

  var Between =
  /*#__PURE__*/
  function (_Events) {
    function Between(startValue, destValue) {
      var _Object$assign;

      var _this;

      _classCallCheck(this, Between);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Between).call(this));
      var type = _typeof(startValue) === 'object' ? Array.isArray(startValue) ? 'array' : 'object' : 'number';
      Object.assign(_assertThisInitialized(_assertThisInitialized(_this)), (_Object$assign = {
        duration: null,
        localTime: 0,
        startValue: startValue,
        destValue: destValue,
        value: type === 'array' ? [].concat(startValue) : startValue
      }, _defineProperty(_Object$assign, SYMBOL_COMPLETED, false), _defineProperty(_Object$assign, SYMBOL_TYPE, type), _Object$assign));

      _betweens.push(_assertThisInitialized(_assertThisInitialized(_this)));

      return _this;
    }

    _createClass(Between, [{
      key: "time",
      value: function time(duration) {
        this.duration = duration;
        return this;
      }
    }, {
      key: "update",
      value: function update(delta) {
        if (this.localTime === 0) this.emit('start');
        var progress = Math.min(1, this.localTime / this.duration);

        switch (this[SYMBOL_TYPE]) {
          case 'array':
            for (var i = 0; i < this.value.length; i++) {
              this.value[i] = lerp_1(this.startValue[i], this.destValue[i], progress);
            }

            break;

          case 'object':
            // FIXME: Unimplemented.
            break;

          case 'number':
          default:
            this.value = lerp_1(this.startValue, this.destValue, progress);
            break;
        }

        this.emit('update', this.value, this);

        if (progress >= 1) {
          this[SYMBOL_COMPLETED] = true;
          this.emit('complete');
        }

        this.localTime += delta;
      }
    }]);

    _inherits(Between, _Events);

    return Between;
  }(minivents_commonjs);

  function between () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _construct(Between, args);
  }

  return between;

})));

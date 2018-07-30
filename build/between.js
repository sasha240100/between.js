/* Between.js v0.1.1 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Between = factory());
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

  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var easingFunctions = createCommonjsModule(function (module) {
  /**
  * A collection of easing methods defining ease-in ease-out curves.
  *
  * @class Easing
  */
  var Easing = module.exports = {

      /**
      * Linear easing.
      *
      * @class Easing.Linear
      */
      Linear: {

          /**
          * Ease-in.
          *
          * @method Easing.Linear#In
          * @param {number} k - The value to be tweened.
          * @returns {number} k^2.
          */
          None: function ( k ) {

              return k;

          }

      },

      /**
      * Quadratic easing.
      *
      * @class Easing.Quadratic
      */
      Quadratic: {

          /**
          * Ease-in.
          *
          * @method Easing.Quadratic#In
          * @param {number} k - The value to be tweened.
          * @returns {number} k^2.
          */
          In: function ( k ) {

              return k * k;

          },

          /**
          * Ease-out.
          *
          * @method Easing.Quadratic#Out
          * @param {number} k - The value to be tweened.
          * @returns {number} k* (2-k).
          */
          Out: function ( k ) {

              return k * ( 2 - k );

          },

          /**
          * Ease-in/out.
          *
          * @method Easing.Quadratic#InOut
          * @param {number} k - The value to be tweened.
          * @returns {number} The tweened value.
          */
          InOut: function ( k ) {

              if ( ( k *= 2 ) < 1 ) return 0.5 * k * k;
              return - 0.5 * ( --k * ( k - 2 ) - 1 );

          }

      },

      /**
      * Cubic easing.
      *
      * @class Easing.Cubic
      */
      Cubic: {

          /**
          * Cubic ease-in.
          *
          * @method Easing.Cubic#In
          * @param {number} k - The value to be tweened.
          * @returns {number} The tweened value.
          */
          In: function ( k ) {

              return k * k * k;

          },

          /**
          * Cubic ease-out.
          *
          * @method Easing.Cubic#Out
          * @param {number} k - The value to be tweened.
          * @returns {number} The tweened value.
          */
          Out: function ( k ) {

              return --k * k * k + 1;

          },

          /**
          * Cubic ease-in/out.
          *
          * @method Easing.Cubic#InOut
          * @param {number} k - The value to be tweened.
          * @returns {number} The tweened value.
          */
          InOut: function ( k ) {

              if ( ( k *= 2 ) < 1 ) return 0.5 * k * k * k;
              return 0.5 * ( ( k -= 2 ) * k * k + 2 );

          }

      },

      /**
      * Quartic easing.
      *
      * @class Easing.Quartic
      */
      Quartic: {

          /**
          * Quartic ease-in.
          *
          * @method Easing.Quartic#In
          * @param {number} k - The value to be tweened.
          * @returns {number} The tweened value.
          */
          In: function ( k ) {

              return k * k * k * k;

          },

          /**
          * Quartic ease-out.
          *
          * @method Easing.Quartic#Out
          * @param {number} k - The value to be tweened.
          * @returns {number} The tweened value.
          */
          Out: function ( k ) {

              return 1 - ( --k * k * k * k );

          },

          /**
          * Quartic ease-in/out.
          *
          * @method Easing.Quartic#InOut
          * @param {number} k - The value to be tweened.
          * @returns {number} The tweened value.
          */
          InOut: function ( k ) {

              if ( ( k *= 2 ) < 1) return 0.5 * k * k * k * k;
              return - 0.5 * ( ( k -= 2 ) * k * k * k - 2 );

          }

      },

      /**
      * Quintic easing.
      *
      * @class Easing.Quintic
      */
      Quintic: {

          /**
          * Quintic ease-in.
          *
          * @method Easing.Quintic#In
          * @param {number} k - The value to be tweened.
          * @returns {number} The tweened value.
          */
          In: function ( k ) {

              return k * k * k * k * k;

          },

          /**
          * Quintic ease-out.
          *
          * @method Easing.Quintic#Out
          * @param {number} k - The value to be tweened.
          * @returns {number} The tweened value.
          */
          Out: function ( k ) {

              return --k * k * k * k * k + 1;

          },

          /**
          * Quintic ease-in/out.
          *
          * @method Easing.Quintic#InOut
          * @param {number} k - The value to be tweened.
          * @returns {number} The tweened value.
          */
          InOut: function ( k ) {

              if ( ( k *= 2 ) < 1 ) return 0.5 * k * k * k * k * k;
              return 0.5 * ( ( k -= 2 ) * k * k * k * k + 2 );

          }

      },

      /**
      * Sinusoidal easing.
      *
      * @class Easing.Sinusoidal
      */
      Sinusoidal: {

          /**
          * Sinusoidal ease-in.
          *
          * @method Easing.Sinusoidal#In
          * @param {number} k - The value to be tweened.
          * @returns {number} The tweened value.
          */
          In: function ( k ) {

              return 1 - Math.cos( k * Math.PI / 2 );

          },

          /**
          * Sinusoidal ease-out.
          *
          * @method Easing.Sinusoidal#Out
          * @param {number} k - The value to be tweened.
          * @returns {number} The tweened value.
          */
          Out: function ( k ) {

              return Math.sin( k * Math.PI / 2 );

          },

          /**
          * Sinusoidal ease-in/out.
          *
          * @method Easing.Sinusoidal#InOut
          * @param {number} k - The value to be tweened.
          * @returns {number} The tweened value.
          */
          InOut: function ( k ) {

              return 0.5 * ( 1 - Math.cos( Math.PI * k ) );

          }

      },

      /**
      * Exponential easing.
      *
      * @class Easing.Exponential
      */
      Exponential: {

          /**
          * Exponential ease-in.
          *
          * @method Easing.Exponential#In
          * @param {number} k - The value to be tweened.
          * @returns {number} The tweened value.
          */
          In: function ( k ) {

              return k === 0 ? 0 : Math.pow( 1024, k - 1 );

          },

          /**
          * Exponential ease-out.
          *
          * @method Easing.Exponential#Out
          * @param {number} k - The value to be tweened.
          * @returns {number} The tweened value.
          */
          Out: function ( k ) {

              return k === 1 ? 1 : 1 - Math.pow( 2, - 10 * k );

          },

          /**
          * Exponential ease-in/out.
          *
          * @method Easing.Exponential#InOut
          * @param {number} k - The value to be tweened.
          * @returns {number} The tweened value.
          */
          InOut: function ( k ) {

              if ( k === 0 ) return 0;
              if ( k === 1 ) return 1;
              if ( ( k *= 2 ) < 1 ) return 0.5 * Math.pow( 1024, k - 1 );
              return 0.5 * ( - Math.pow( 2, - 10 * ( k - 1 ) ) + 2 );

          }

      },

      /**
      * Circular easing.
      *
      * @class Easing.Circular
      */
      Circular: {

          /**
          * Circular ease-in.
          *
          * @method Easing.Circular#In
          * @param {number} k - The value to be tweened.
          * @returns {number} The tweened value.
          */
          In: function ( k ) {

              return 1 - Math.sqrt( 1 - k * k );

          },

          /**
          * Circular ease-out.
          *
          * @method Easing.Circular#Out
          * @param {number} k - The value to be tweened.
          * @returns {number} The tweened value.
          */
          Out: function ( k ) {

              return Math.sqrt( 1 - ( --k * k ) );

          },

          /**
          * Circular ease-in/out.
          *
          * @method Easing.Circular#InOut
          * @param {number} k - The value to be tweened.
          * @returns {number} The tweened value.
          */
          InOut: function ( k ) {

              if ( ( k *= 2 ) < 1) return - 0.5 * ( Math.sqrt( 1 - k * k) - 1);
              return 0.5 * ( Math.sqrt( 1 - ( k -= 2) * k) + 1);

          }

      },

      /**
      * Elastic easing.
      *
      * @class Easing.Elastic
      */
      Elastic: {

          /**
          * Elastic ease-in.
          *
          * @method Easing.Elastic#In
          * @param {number} k - The value to be tweened.
          * @returns {number} The tweened value.
          */
          In: function ( k ) {

              var s, a = 0.1, p = 0.4;
              if ( k === 0 ) return 0;
              if ( k === 1 ) return 1;
              if ( !a || a < 1 ) { a = 1; s = p / 4; }
              else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
              return - ( a * Math.pow( 2, 10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) );

          },

          /**
          * Elastic ease-out.
          *
          * @method Easing.Elastic#Out
          * @param {number} k - The value to be tweened.
          * @returns {number} The tweened value.
          */
          Out: function ( k ) {

              var s, a = 0.1, p = 0.4;
              if ( k === 0 ) return 0;
              if ( k === 1 ) return 1;
              if ( !a || a < 1 ) { a = 1; s = p / 4; }
              else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
              return ( a * Math.pow( 2, - 10 * k) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) + 1 );

          },

          /**
          * Elastic ease-in/out.
          *
          * @method Easing.Elastic#InOut
          * @param {number} k - The value to be tweened.
          * @returns {number} The tweened value.
          */
          InOut: function ( k ) {

              var s, a = 0.1, p = 0.4;
              if ( k === 0 ) return 0;
              if ( k === 1 ) return 1;
              if ( !a || a < 1 ) { a = 1; s = p / 4; }
              else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
              if ( ( k *= 2 ) < 1 ) return - 0.5 * ( a * Math.pow( 2, 10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) );
              return a * Math.pow( 2, -10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) * 0.5 + 1;

          }

      },

      /**
      * Back easing.
      *
      * @class Easing.Back
      */
      Back: {

          /**
          * Back ease-in.
          *
          * @method Easing.Back#In
          * @param {number} k - The value to be tweened.
          * @returns {number} The tweened value.
          */
          In: function ( k ) {

              var s = 1.70158;
              return k * k * ( ( s + 1 ) * k - s );

          },

          /**
          * Back ease-out.
          *
          * @method Easing.Back#Out
          * @param {number} k - The value to be tweened.
          * @returns {number} The tweened value.
          */
          Out: function ( k ) {

              var s = 1.70158;
              return --k * k * ( ( s + 1 ) * k + s ) + 1;

          },

          /**
          * Back ease-in/out.
          *
          * @method Easing.Back#InOut
          * @param {number} k - The value to be tweened.
          * @returns {number} The tweened value.
          */
          InOut: function ( k ) {

              var s = 1.70158 * 1.525;
              if ( ( k *= 2 ) < 1 ) return 0.5 * ( k * k * ( ( s + 1 ) * k - s ) );
              return 0.5 * ( ( k -= 2 ) * k * ( ( s + 1 ) * k + s ) + 2 );

          }

      },

      /**
      * Bounce easing.
      *
      * @class Easing.Bounce
      */
      Bounce: {

          /**
          * Bounce ease-in.
          *
          * @method Easing.Bounce#In
          * @param {number} k - The value to be tweened.
          * @returns {number} The tweened value.
          */
          In: function ( k ) {

              return 1 - Easing.Bounce.Out( 1 - k );

          },

          /**
          * Bounce ease-out.
          *
          * @method Easing.Bounce#Out
          * @param {number} k - The value to be tweened.
          * @returns {number} The tweened value.
          */
          Out: function ( k ) {

              if ( k < ( 1 / 2.75 ) ) {

                  return 7.5625 * k * k;

              } else if ( k < ( 2 / 2.75 ) ) {

                  return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;

              } else if ( k < ( 2.5 / 2.75 ) ) {

                  return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;

              } else {

                  return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;

              }

          },

          /**
          * Bounce ease-in/out.
          *
          * @method Easing.Bounce#InOut
          * @param {number} k - The value to be tweened.
          * @returns {number} The tweened value.
          */
          InOut: function ( k ) {

              if ( k < 0.5 ) return Easing.Bounce.In( k * 2 ) * 0.5;
              return Easing.Bounce.Out( k * 2 - 1 ) * 0.5 + 0.5;

          }

      }

  };
  });
  var easingFunctions_1 = easingFunctions.Linear;
  var easingFunctions_2 = easingFunctions.Quadratic;
  var easingFunctions_3 = easingFunctions.Cubic;
  var easingFunctions_4 = easingFunctions.Quartic;
  var easingFunctions_5 = easingFunctions.Quintic;
  var easingFunctions_6 = easingFunctions.Sinusoidal;
  var easingFunctions_7 = easingFunctions.Exponential;
  var easingFunctions_8 = easingFunctions.Circular;
  var easingFunctions_9 = easingFunctions.Elastic;
  var easingFunctions_10 = easingFunctions.Back;
  var easingFunctions_11 = easingFunctions.Bounce;

  var performanceNow = createCommonjsModule(function (module) {
  // Generated by CoffeeScript 1.12.2
  (function() {
    var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

    if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
      module.exports = function() {
        return performance.now();
      };
    } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
      module.exports = function() {
        return (getNanoSeconds() - nodeLoadTime) / 1e6;
      };
      hrtime = process.hrtime;
      getNanoSeconds = function() {
        var hr;
        hr = hrtime();
        return hr[0] * 1e9 + hr[1];
      };
      moduleLoadTime = getNanoSeconds();
      upTime = process.uptime() * 1e9;
      nodeLoadTime = moduleLoadTime - upTime;
    } else if (Date.now) {
      module.exports = function() {
        return Date.now() - loadTime;
      };
      loadTime = Date.now();
    } else {
      module.exports = function() {
        return new Date().getTime() - loadTime;
      };
      loadTime = new Date().getTime();
    }

  }).call(commonjsGlobal);


  });

  var root = typeof window === 'undefined' ? commonjsGlobal : window
    , vendors = ['moz', 'webkit']
    , suffix = 'AnimationFrame'
    , raf = root['request' + suffix]
    , caf = root['cancel' + suffix] || root['cancelRequest' + suffix];

  for(var i = 0; !raf && i < vendors.length; i++) {
    raf = root[vendors[i] + 'Request' + suffix];
    caf = root[vendors[i] + 'Cancel' + suffix]
        || root[vendors[i] + 'CancelRequest' + suffix];
  }

  // Some versions of FF have rAF but not cAF
  if(!raf || !caf) {
    var last = 0
      , id = 0
      , queue = []
      , frameDuration = 1000 / 60;

    raf = function(callback) {
      if(queue.length === 0) {
        var _now = performanceNow()
          , next = Math.max(0, frameDuration - (_now - last));
        last = next + _now;
        setTimeout(function() {
          var cp = queue.slice(0);
          // Clear queue here to prevent
          // callbacks from appending listeners
          // to the current frame's queue
          queue.length = 0;
          for(var i = 0; i < cp.length; i++) {
            if(!cp[i].cancelled) {
              try{
                cp[i].callback(last);
              } catch(e) {
                setTimeout(function() { throw e }, 0);
              }
            }
          }
        }, Math.round(next));
      }
      queue.push({
        handle: ++id,
        callback: callback,
        cancelled: false
      });
      return id
    };

    caf = function(handle) {
      for(var i = 0; i < queue.length; i++) {
        if(queue[i].handle === handle) {
          queue[i].cancelled = true;
        }
      }
    };
  }

  var raf_1 = function(fn) {
    // Wrap in a new function to prevent
    // `cancel` potentially being assigned
    // to the native rAF function
    return raf.call(root, fn)
  };
  var cancel = function() {
    caf.apply(root, arguments);
  };
  var polyfill = function(object) {
    if (!object) {
      object = root;
    }
    object.requestAnimationFrame = raf;
    object.cancelAnimationFrame = caf;
  };
  raf_1.cancel = cancel;
  raf_1.polyfill = polyfill;

  var _betweens = [];
  var SYMBOL_TYPE = Symbol('type');
  var SYMBOL_START_TIME = Symbol('start_time');
  var SYMBOL_COMPLETED = Symbol('completed');

  var _requestAnimationFrame = // polyfill
  requestAnimationFrame || raf_1;

  var _prevTime = Date.now(),
      _time,
      _delta;

  (function _update() {
    _requestAnimationFrame(_update);

    _time = Date.now();
    _delta = _time - _prevTime;

    for (var i = 0; i < _betweens.length; i++) {
      if (!_betweens[i][SYMBOL_COMPLETED]) _betweens[i](_delta, Date.now() - _betweens[i][SYMBOL_START_TIME]);
    }

    _prevTime = _time;
  })();

  var Between =
  /*#__PURE__*/
  function (_Events) {
    _createClass(Between, null, [{
      key: "between",
      value: function between() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _construct(Between, args);
      }
    }]);

    function Between(startValue, destValue) {
      var _Object$assign;

      var _this;

      _classCallCheck(this, Between);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Between).call(this));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "update", function () {
        var _assertThisInitialize = _assertThisInitialized(_assertThisInitialized(_this)),
            _updateValue = _assertThisInitialize._updateValue;

        return function (delta, time) {
          if (_this.localTime === 0) _this.emit('start', _this.value, _assertThisInitialized(_assertThisInitialized(_this)));

          _updateValue(_this.ease( // progress
          _this.loopFunction.progress(Math.min(1, (time || _this.localTime) / _this.duration))));

          _this.emit('update', _this.value, _assertThisInitialized(_assertThisInitialized(_this)), delta);

          if (_this.localTime >= _this.duration) {
            _this.loopFunction.complete(function () {
              _this[SYMBOL_COMPLETED] = true;

              _this.emit('complete', _this.value, _assertThisInitialized(_assertThisInitialized(_this)));
            });
          }

          _this.localTime += delta;
        };
      });

      var plugin = _this.plugin = Object.values(Between._plugins).reduce(function (v, m) {
        return v || m && m.test && m.test(startValue) && m;
      }, false);
      var type = plugin && plugin.name || (_typeof(startValue) === 'object' ? Array.isArray(startValue) ? 'array' : 'object' : 'number');

      if (plugin) {
        var result = plugin.initialize(startValue, destValue);
        startValue = result.startValue;
        destValue = result.destValue;
        _this.data = result.data;
      }

      Object.assign(_assertThisInitialized(_assertThisInitialized(_this)), (_Object$assign = {
        duration: 1000,
        localTime: 0,
        startValue: startValue,
        destValue: destValue,
        loopMode: 'once',
        loopFunction: Between.DEFAULT_LOOP,
        ease: function ease(x) {
          return x;
        },
        value: type === 'array' ? [].concat(startValue) : type === 'object' ? Object.assign({}, startValue) : startValue
      }, _defineProperty(_Object$assign, SYMBOL_COMPLETED, false), _defineProperty(_Object$assign, SYMBOL_TYPE, type), _defineProperty(_Object$assign, SYMBOL_START_TIME, Date.now()), _Object$assign));

      switch (_this[SYMBOL_TYPE]) {
        case 'number':
          _this._updateValue = function (progress) {
            _this.value = lerp_1(_this.startValue, _this.destValue, progress);
          };

          break;

        case 'array':
          {
            var _l = _this.value.length;

            var _assertThisInitialize2 = _assertThisInitialized(_assertThisInitialized(_this)),
                s = _assertThisInitialize2.startValue,
                d = _assertThisInitialize2.destValue,
                v = _assertThisInitialize2.value;

            _this._updateValue = function (progress) {
              for (var i = 0; i < _l; i++) {
                v[i] = lerp_1(s[i], d[i], progress);
              }
            };
          }
          break;

        case 'object':
          {
            var keys = Object.keys(_this.startValue);
            var _l2 = keys.length;

            var _assertThisInitialize3 = _assertThisInitialized(_assertThisInitialized(_this)),
                _s = _assertThisInitialize3.startValue,
                _d = _assertThisInitialize3.destValue,
                _v = _assertThisInitialize3.value;

            _this._updateValue = function (progress) {
              for (var i = 0; i < _l2; i++) {
                var key = keys[i];
                _v[key] = lerp_1(_s[key], _d[key], progress);
              }
            };
          }
          break;

        default:
          if (_this.plugin) {
            _this._updateValue = function (progress) {
              _this.value = _this.plugin.interpolate(_this.startValue, _this.destValue, progress, _this.data);
            };
          } else {
            console.warn('Between: startValue type was unrecognized.');

            _this._updateValue = function () {
              return null;
            };
          }

      }

      _betweens.push(_this.update());

      return _this;
    }

    _createClass(Between, [{
      key: "easing",
      value: function easing(_easing) {
        this.ease = _easing;
        return this;
      }
    }, {
      key: "time",
      value: function time(duration) {
        this.duration = duration;
        return this;
      }
    }, {
      key: "loop",
      value: function loop() {
        var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'once';
        var loopFunctionName = "__loop_".concat(mode);

        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        this.loopFunction = loopFunctionName in this ? Object.assign({}, Between.DEFAULT_LOOP, this[loopFunctionName].apply(this, args)) : Between.DEFAULT_LOOP;
        return this;
      }
    }, {
      key: "__loop_repeat",
      value: function __loop_repeat(times) {
        var _this2 = this;

        var maxTimes = times;
        this.times = 0;
        return {
          complete: function complete(callback) {
            _this2.localTime = 0;
            if (Number.isInteger(maxTimes) && ++_this2.times === maxTimes) callback();else if (!Number.isInteger(maxTimes)) ++_this2.times;
          }
        };
      }
    }, {
      key: "__loop_bounce",
      value: function __loop_bounce(times) {
        var _this3 = this;

        var maxTimes = times;
        var bounceDirection = 1;
        this.times = 0;
        return {
          complete: function complete(callback) {
            _this3.localTime = 0;
            bounceDirection = -bounceDirection;
            if (Number.isInteger(maxTimes) && ++_this3.times === maxTimes) callback();else if (!Number.isInteger(maxTimes)) ++_this3.times;
          },
          progress: function progress(x) {
            return bounceDirection > 0 ? x : 1 - x;
          }
        };
      }
    }]);

    _inherits(Between, _Events);

    return Between;
  }(minivents_commonjs);

  _defineProperty(Between, "DEFAULT_LOOP", {
    complete: function complete(cb) {
      return cb();
    },
    progress: function progress(x) {
      return x;
    }
  });
  Between.Easing = easingFunctions;
  Between._plugins = {};

  return Between;

})));

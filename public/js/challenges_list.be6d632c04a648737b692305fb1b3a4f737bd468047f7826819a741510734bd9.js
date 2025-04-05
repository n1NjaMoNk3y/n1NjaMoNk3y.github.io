"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // ns-hugo-imp:C:\Users\n1NjaM0nk3y\Coding\n1NjaMonk3y\themes\hackropole\assets\js\vendor\autoComplete.min.js
  var require_autoComplete_min = __commonJS({
    "ns-hugo-imp:C:\\Users\\n1NjaM0nk3y\\Coding\\n1NjaMonk3y\\themes\\hackropole\\assets\\js\\vendor\\autoComplete.min.js"(exports, module) {
      var e;
      var t;
      e = exports, t = function() {
        "use strict";
        function e2(e3, t3) {
          var n2 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var r2 = Object.getOwnPropertySymbols(e3);
            t3 && (r2 = r2.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n2.push.apply(n2, r2);
          }
          return n2;
        }
        function t2(t3) {
          for (var n2 = 1; n2 < arguments.length; n2++) {
            var i2 = null != arguments[n2] ? arguments[n2] : {};
            n2 % 2 ? e2(Object(i2), true).forEach(function(e3) {
              r(t3, e3, i2[e3]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(i2)) : e2(Object(i2)).forEach(function(e3) {
              Object.defineProperty(t3, e3, Object.getOwnPropertyDescriptor(i2, e3));
            });
          }
          return t3;
        }
        function n(e3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, n(e3);
        }
        function r(e3, t3, n2) {
          return t3 in e3 ? Object.defineProperty(e3, t3, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t3] = n2, e3;
        }
        function i(e3) {
          return function(e4) {
            if (Array.isArray(e4)) return s(e4);
          }(e3) || function(e4) {
            if ("undefined" != typeof Symbol && null != e4[Symbol.iterator] || null != e4["@@iterator"]) return Array.from(e4);
          }(e3) || o(e3) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function o(e3, t3) {
          if (e3) {
            if ("string" == typeof e3) return s(e3, t3);
            var n2 = Object.prototype.toString.call(e3).slice(8, -1);
            return "Object" === n2 && e3.constructor && (n2 = e3.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e3) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? s(e3, t3) : void 0;
          }
        }
        function s(e3, t3) {
          (null == t3 || t3 > e3.length) && (t3 = e3.length);
          for (var n2 = 0, r2 = new Array(t3); n2 < t3; n2++) r2[n2] = e3[n2];
          return r2;
        }
        var u = function(e3) {
          return "string" == typeof e3 ? document.querySelector(e3) : e3();
        }, a = function(e3, t3) {
          var n2 = "string" == typeof e3 ? document.createElement(e3) : e3;
          for (var r2 in t3) {
            var i2 = t3[r2];
            if ("inside" === r2) i2.append(n2);
            else if ("dest" === r2) u(i2[0]).insertAdjacentElement(i2[1], n2);
            else if ("around" === r2) {
              var o2 = i2;
              o2.parentNode.insertBefore(n2, o2), n2.append(o2), null != o2.getAttribute("autofocus") && o2.focus();
            } else r2 in n2 ? n2[r2] = i2 : n2.setAttribute(r2, i2);
          }
          return n2;
        }, c = function(e3, t3) {
          return e3 = String(e3).toLowerCase(), t3 ? e3.normalize("NFD").replace(/[\u0300-\u036f]/g, "").normalize("NFC") : e3;
        }, l = function(e3, n2) {
          return a("mark", t2({ innerHTML: e3 }, "string" == typeof n2 && { class: n2 })).outerHTML;
        }, f = function(e3, t3) {
          t3.input.dispatchEvent(new CustomEvent(e3, { bubbles: true, detail: t3.feedback, cancelable: true }));
        }, p = function(e3, t3, n2) {
          var r2 = n2 || {}, i2 = r2.mode, o2 = r2.diacritics, s2 = r2.highlight, u2 = c(t3, o2);
          if (t3 = String(t3), e3 = c(e3, o2), "loose" === i2) {
            var a2 = (e3 = e3.replace(/ /g, "")).length, f2 = 0, p2 = Array.from(t3).map(function(t4, n3) {
              return f2 < a2 && u2[n3] === e3[f2] && (t4 = s2 ? l(t4, s2) : t4, f2++), t4;
            }).join("");
            if (f2 === a2) return p2;
          } else {
            var d2 = u2.indexOf(e3);
            if (~d2) return e3 = t3.substring(d2, d2 + e3.length), d2 = s2 ? t3.replace(e3, l(e3, s2)) : t3;
          }
        }, d = function(e3, t3) {
          return new Promise(function(n2, r2) {
            var i2;
            return (i2 = e3.data).cache && i2.store ? n2() : new Promise(function(e4, n3) {
              return "function" == typeof i2.src ? i2.src(t3).then(e4, n3) : e4(i2.src);
            }).then(function(t4) {
              try {
                return e3.feedback = i2.store = t4, f("response", e3), n2();
              } catch (e4) {
                return r2(e4);
              }
            }, r2);
          });
        }, h = function(e3, t3) {
          var n2 = t3.data, r2 = t3.searchEngine, i2 = [];
          n2.store.forEach(function(s3, u2) {
            var a2 = function(n3) {
              var o2 = n3 ? s3[n3] : s3, u3 = "function" == typeof r2 ? r2(e3, o2) : p(e3, o2, { mode: r2, diacritics: t3.diacritics, highlight: t3.resultItem.highlight });
              if (u3) {
                var a3 = { match: u3, value: s3 };
                n3 && (a3.key = n3), i2.push(a3);
              }
            };
            if (n2.keys) {
              var c2, l2 = function(e4, t4) {
                var n3 = "undefined" != typeof Symbol && e4[Symbol.iterator] || e4["@@iterator"];
                if (!n3) {
                  if (Array.isArray(e4) || (n3 = o(e4)) || t4 && e4 && "number" == typeof e4.length) {
                    n3 && (e4 = n3);
                    var r3 = 0, i3 = function() {
                    };
                    return { s: i3, n: function() {
                      return r3 >= e4.length ? { done: true } : { done: false, value: e4[r3++] };
                    }, e: function(e5) {
                      throw e5;
                    }, f: i3 };
                  }
                  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var s4, u3 = true, a3 = false;
                return { s: function() {
                  n3 = n3.call(e4);
                }, n: function() {
                  var e5 = n3.next();
                  return u3 = e5.done, e5;
                }, e: function(e5) {
                  a3 = true, s4 = e5;
                }, f: function() {
                  try {
                    u3 || null == n3.return || n3.return();
                  } finally {
                    if (a3) throw s4;
                  }
                } };
              }(n2.keys);
              try {
                for (l2.s(); !(c2 = l2.n()).done; ) a2(c2.value);
              } catch (e4) {
                l2.e(e4);
              } finally {
                l2.f();
              }
            } else a2();
          }), n2.filter && (i2 = n2.filter(i2));
          var s2 = i2.slice(0, t3.resultsList.maxResults);
          t3.feedback = { query: e3, matches: i2, results: s2 }, f("results", t3);
        }, m = "aria-expanded", b = "aria-activedescendant", y = "aria-selected", v = function(e3, n2) {
          e3.feedback.selection = t2({ index: n2 }, e3.feedback.results[n2]);
        }, g = function(e3) {
          e3.isOpen || ((e3.wrapper || e3.input).setAttribute(m, true), e3.list.removeAttribute("hidden"), e3.isOpen = true, f("open", e3));
        }, w = function(e3) {
          e3.isOpen && ((e3.wrapper || e3.input).setAttribute(m, false), e3.input.setAttribute(b, ""), e3.list.setAttribute("hidden", ""), e3.isOpen = false, f("close", e3));
        }, O = function(e3, t3) {
          var n2 = t3.resultItem, r2 = t3.list.getElementsByTagName(n2.tag), o2 = !!n2.selected && n2.selected.split(" ");
          if (t3.isOpen && r2.length) {
            var s2, u2, a2 = t3.cursor;
            e3 >= r2.length && (e3 = 0), e3 < 0 && (e3 = r2.length - 1), t3.cursor = e3, a2 > -1 && (r2[a2].removeAttribute(y), o2 && (u2 = r2[a2].classList).remove.apply(u2, i(o2))), r2[e3].setAttribute(y, true), o2 && (s2 = r2[e3].classList).add.apply(s2, i(o2)), t3.input.setAttribute(b, r2[t3.cursor].id), t3.list.scrollTop = r2[e3].offsetTop - t3.list.clientHeight + r2[e3].clientHeight + 5, t3.feedback.cursor = t3.cursor, v(t3, e3), f("navigate", t3);
          }
        }, A = function(e3) {
          O(e3.cursor + 1, e3);
        }, k = function(e3) {
          O(e3.cursor - 1, e3);
        }, L = function(e3, t3, n2) {
          (n2 = n2 >= 0 ? n2 : e3.cursor) < 0 || (e3.feedback.event = t3, v(e3, n2), f("selection", e3), w(e3));
        };
        function j(e3, n2) {
          var r2 = this;
          return new Promise(function(i2, o2) {
            var s2, u2;
            return s2 = n2 || ((u2 = e3.input) instanceof HTMLInputElement || u2 instanceof HTMLTextAreaElement ? u2.value : u2.innerHTML), function(e4, t3, n3) {
              return t3 ? t3(e4) : e4.length >= n3;
            }(s2 = e3.query ? e3.query(s2) : s2, e3.trigger, e3.threshold) ? d(e3, s2).then(function(n3) {
              try {
                return e3.feedback instanceof Error ? i2() : (h(s2, e3), e3.resultsList && function(e4) {
                  var n4 = e4.resultsList, r3 = e4.list, i3 = e4.resultItem, o3 = e4.feedback, s3 = o3.matches, u3 = o3.results;
                  if (e4.cursor = -1, r3.innerHTML = "", s3.length || n4.noResults) {
                    var c3 = new DocumentFragment();
                    u3.forEach(function(e5, n5) {
                      var r4 = a(i3.tag, t2({ id: "".concat(i3.id, "_").concat(n5), role: "option", innerHTML: e5.match, inside: c3 }, i3.class && { class: i3.class }));
                      i3.element && i3.element(r4, e5);
                    }), r3.append(c3), n4.element && n4.element(r3, o3), g(e4);
                  } else w(e4);
                }(e3), c2.call(r2));
              } catch (e4) {
                return o2(e4);
              }
            }, o2) : (w(e3), c2.call(r2));
            function c2() {
              return i2();
            }
          });
        }
        var S = function(e3, t3) {
          for (var n2 in e3) for (var r2 in e3[n2]) t3(n2, r2);
        }, T = function(e3) {
          var n2, r2, i2, o2 = e3.events, s2 = (n2 = function() {
            return j(e3);
          }, r2 = e3.debounce, function() {
            clearTimeout(i2), i2 = setTimeout(function() {
              return n2();
            }, r2);
          }), u2 = e3.events = t2({ input: t2({}, o2 && o2.input) }, e3.resultsList && { list: o2 ? t2({}, o2.list) : {} }), a2 = { input: { input: function() {
            s2();
          }, keydown: function(t3) {
            !function(e4, t4) {
              switch (e4.keyCode) {
                case 40:
                case 38:
                  e4.preventDefault(), 40 === e4.keyCode ? A(t4) : k(t4);
                  break;
                case 13:
                  t4.submit || e4.preventDefault(), t4.cursor >= 0 && L(t4, e4);
                  break;
                case 9:
                  t4.resultsList.tabSelect && t4.cursor >= 0 && L(t4, e4);
                  break;
                case 27:
                  t4.input.value = "", w(t4);
              }
            }(t3, e3);
          }, blur: function() {
            w(e3);
          } }, list: { mousedown: function(e4) {
            e4.preventDefault();
          }, click: function(t3) {
            !function(e4, t4) {
              var n3 = t4.resultItem.tag.toUpperCase(), r3 = Array.from(t4.list.querySelectorAll(n3)), i3 = e4.target.closest(n3);
              i3 && i3.nodeName === n3 && L(t4, e4, r3.indexOf(i3));
            }(t3, e3);
          } } };
          S(a2, function(t3, n3) {
            (e3.resultsList || "input" === n3) && (u2[t3][n3] || (u2[t3][n3] = a2[t3][n3]));
          }), S(u2, function(t3, n3) {
            e3[t3].addEventListener(n3, u2[t3][n3]);
          });
        };
        function E(e3) {
          var n2 = this;
          return new Promise(function(r2, i2) {
            var o2, s2, u2;
            if (o2 = e3.placeHolder, u2 = { role: "combobox", "aria-owns": (s2 = e3.resultsList).id, "aria-haspopup": true, "aria-expanded": false }, a(e3.input, t2(t2({ "aria-controls": s2.id, "aria-autocomplete": "both" }, o2 && { placeholder: o2 }), !e3.wrapper && t2({}, u2))), e3.wrapper && (e3.wrapper = a("div", t2({ around: e3.input, class: e3.name + "_wrapper" }, u2))), s2 && (e3.list = a(s2.tag, t2({ dest: [s2.destination, s2.position], id: s2.id, role: "listbox", hidden: "hidden" }, s2.class && { class: s2.class }))), T(e3), e3.data.cache) return d(e3).then(function(e4) {
              try {
                return c2.call(n2);
              } catch (e5) {
                return i2(e5);
              }
            }, i2);
            function c2() {
              return f("init", e3), r2();
            }
            return c2.call(n2);
          });
        }
        function x(e3) {
          var t3 = e3.prototype;
          t3.init = function() {
            E(this);
          }, t3.start = function(e4) {
            j(this, e4);
          }, t3.unInit = function() {
            if (this.wrapper) {
              var e4 = this.wrapper.parentNode;
              e4.insertBefore(this.input, this.wrapper), e4.removeChild(this.wrapper);
            }
            var t4;
            S((t4 = this).events, function(e5, n2) {
              t4[e5].removeEventListener(n2, t4.events[e5][n2]);
            });
          }, t3.open = function() {
            g(this);
          }, t3.close = function() {
            w(this);
          }, t3.goTo = function(e4) {
            O(e4, this);
          }, t3.next = function() {
            A(this);
          }, t3.previous = function() {
            k(this);
          }, t3.select = function(e4) {
            L(this, null, e4);
          }, t3.search = function(e4, t4, n2) {
            return p(e4, t4, n2);
          };
        }
        return function e3(t3) {
          this.options = t3, this.id = e3.instances = (e3.instances || 0) + 1, this.name = "autoComplete", this.wrapper = 1, this.threshold = 1, this.debounce = 0, this.resultsList = { position: "afterend", tag: "ul", maxResults: 5 }, this.resultItem = { tag: "li" }, function(e4) {
            var t4 = e4.name, r2 = e4.options, i2 = e4.resultsList, o2 = e4.resultItem;
            for (var s2 in r2) if ("object" === n(r2[s2])) for (var a2 in e4[s2] || (e4[s2] = {}), r2[s2]) e4[s2][a2] = r2[s2][a2];
            else e4[s2] = r2[s2];
            e4.selector = e4.selector || "#" + t4, i2.destination = i2.destination || e4.selector, i2.id = i2.id || t4 + "_list_" + e4.id, o2.id = o2.id || t4 + "_result", e4.input = u(e4.selector);
          }(this), x.call(this, e3), E(this);
        };
      }, "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).autoComplete = t();
    }
  });

  // ns-hugo-imp:C:\Users\n1NjaM0nk3y\Coding\n1NjaMonk3y\themes\hackropole\assets\js\vendor\bootstrap\dom\data.js
  var require_data = __commonJS({
    "ns-hugo-imp:C:\\Users\\n1NjaM0nk3y\\Coding\\n1NjaMonk3y\\themes\\hackropole\\assets\\js\\vendor\\bootstrap\\dom\\data.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Data = factory());
      })(exports, function() {
        "use strict";
        const elementMap = /* @__PURE__ */ new Map();
        const data = {
          set(element, key, instance) {
            if (!elementMap.has(element)) {
              elementMap.set(element, /* @__PURE__ */ new Map());
            }
            const instanceMap = elementMap.get(element);
            if (!instanceMap.has(key) && instanceMap.size !== 0) {
              console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
              return;
            }
            instanceMap.set(key, instance);
          },
          get(element, key) {
            if (elementMap.has(element)) {
              return elementMap.get(element).get(key) || null;
            }
            return null;
          },
          remove(element, key) {
            if (!elementMap.has(element)) {
              return;
            }
            const instanceMap = elementMap.get(element);
            instanceMap.delete(key);
            if (instanceMap.size === 0) {
              elementMap.delete(element);
            }
          }
        };
        return data;
      });
    }
  });

  // ns-hugo-imp:C:\Users\n1NjaM0nk3y\Coding\n1NjaMonk3y\themes\hackropole\assets\js\vendor\bootstrap\util\index.js
  var require_util = __commonJS({
    "ns-hugo-imp:C:\\Users\\n1NjaM0nk3y\\Coding\\n1NjaMonk3y\\themes\\hackropole\\assets\\js\\vendor\\bootstrap\\util\\index.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.Index = {}));
      })(exports, function(exports2) {
        "use strict";
        const MAX_UID = 1e6;
        const MILLISECONDS_MULTIPLIER = 1e3;
        const TRANSITION_END = "transitionend";
        const parseSelector = (selector) => {
          if (selector && window.CSS && window.CSS.escape) {
            selector = selector.replace(/#([^\s"#']+)/g, (match, id) => `#${CSS.escape(id)}`);
          }
          return selector;
        };
        const toType = (object) => {
          if (object === null || object === void 0) {
            return `${object}`;
          }
          return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
        };
        const getUID = (prefix) => {
          do {
            prefix += Math.floor(Math.random() * MAX_UID);
          } while (document.getElementById(prefix));
          return prefix;
        };
        const getTransitionDurationFromElement = (element) => {
          if (!element) {
            return 0;
          }
          let {
            transitionDuration,
            transitionDelay
          } = window.getComputedStyle(element);
          const floatTransitionDuration = Number.parseFloat(transitionDuration);
          const floatTransitionDelay = Number.parseFloat(transitionDelay);
          if (!floatTransitionDuration && !floatTransitionDelay) {
            return 0;
          }
          transitionDuration = transitionDuration.split(",")[0];
          transitionDelay = transitionDelay.split(",")[0];
          return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
        };
        const triggerTransitionEnd = (element) => {
          element.dispatchEvent(new Event(TRANSITION_END));
        };
        const isElement = (object) => {
          if (!object || typeof object !== "object") {
            return false;
          }
          if (typeof object.jquery !== "undefined") {
            object = object[0];
          }
          return typeof object.nodeType !== "undefined";
        };
        const getElement = (object) => {
          if (isElement(object)) {
            return object.jquery ? object[0] : object;
          }
          if (typeof object === "string" && object.length > 0) {
            return document.querySelector(parseSelector(object));
          }
          return null;
        };
        const isVisible = (element) => {
          if (!isElement(element) || element.getClientRects().length === 0) {
            return false;
          }
          const elementIsVisible = getComputedStyle(element).getPropertyValue("visibility") === "visible";
          const closedDetails = element.closest("details:not([open])");
          if (!closedDetails) {
            return elementIsVisible;
          }
          if (closedDetails !== element) {
            const summary = element.closest("summary");
            if (summary && summary.parentNode !== closedDetails) {
              return false;
            }
            if (summary === null) {
              return false;
            }
          }
          return elementIsVisible;
        };
        const isDisabled = (element) => {
          if (!element || element.nodeType !== Node.ELEMENT_NODE) {
            return true;
          }
          if (element.classList.contains("disabled")) {
            return true;
          }
          if (typeof element.disabled !== "undefined") {
            return element.disabled;
          }
          return element.hasAttribute("disabled") && element.getAttribute("disabled") !== "false";
        };
        const findShadowRoot = (element) => {
          if (!document.documentElement.attachShadow) {
            return null;
          }
          if (typeof element.getRootNode === "function") {
            const root = element.getRootNode();
            return root instanceof ShadowRoot ? root : null;
          }
          if (element instanceof ShadowRoot) {
            return element;
          }
          if (!element.parentNode) {
            return null;
          }
          return findShadowRoot(element.parentNode);
        };
        const noop = () => {
        };
        const reflow = (element) => {
          element.offsetHeight;
        };
        const getjQuery = () => {
          if (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")) {
            return window.jQuery;
          }
          return null;
        };
        const DOMContentLoadedCallbacks = [];
        const onDOMContentLoaded = (callback) => {
          if (document.readyState === "loading") {
            if (!DOMContentLoadedCallbacks.length) {
              document.addEventListener("DOMContentLoaded", () => {
                for (const callback2 of DOMContentLoadedCallbacks) {
                  callback2();
                }
              });
            }
            DOMContentLoadedCallbacks.push(callback);
          } else {
            callback();
          }
        };
        const isRTL = () => document.documentElement.dir === "rtl";
        const defineJQueryPlugin = (plugin) => {
          onDOMContentLoaded(() => {
            const $ = getjQuery();
            if ($) {
              const name = plugin.NAME;
              const JQUERY_NO_CONFLICT = $.fn[name];
              $.fn[name] = plugin.jQueryInterface;
              $.fn[name].Constructor = plugin;
              $.fn[name].noConflict = () => {
                $.fn[name] = JQUERY_NO_CONFLICT;
                return plugin.jQueryInterface;
              };
            }
          });
        };
        const execute = (possibleCallback, args = [], defaultValue = possibleCallback) => {
          return typeof possibleCallback === "function" ? possibleCallback(...args) : defaultValue;
        };
        const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
          if (!waitForTransition) {
            execute(callback);
            return;
          }
          const durationPadding = 5;
          const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
          let called = false;
          const handler = ({
            target
          }) => {
            if (target !== transitionElement) {
              return;
            }
            called = true;
            transitionElement.removeEventListener(TRANSITION_END, handler);
            execute(callback);
          };
          transitionElement.addEventListener(TRANSITION_END, handler);
          setTimeout(() => {
            if (!called) {
              triggerTransitionEnd(transitionElement);
            }
          }, emulatedDuration);
        };
        const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
          const listLength = list.length;
          let index = list.indexOf(activeElement);
          if (index === -1) {
            return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
          }
          index += shouldGetNext ? 1 : -1;
          if (isCycleAllowed) {
            index = (index + listLength) % listLength;
          }
          return list[Math.max(0, Math.min(index, listLength - 1))];
        };
        exports2.defineJQueryPlugin = defineJQueryPlugin;
        exports2.execute = execute;
        exports2.executeAfterTransition = executeAfterTransition;
        exports2.findShadowRoot = findShadowRoot;
        exports2.getElement = getElement;
        exports2.getNextActiveElement = getNextActiveElement;
        exports2.getTransitionDurationFromElement = getTransitionDurationFromElement;
        exports2.getUID = getUID;
        exports2.getjQuery = getjQuery;
        exports2.isDisabled = isDisabled;
        exports2.isElement = isElement;
        exports2.isRTL = isRTL;
        exports2.isVisible = isVisible;
        exports2.noop = noop;
        exports2.onDOMContentLoaded = onDOMContentLoaded;
        exports2.parseSelector = parseSelector;
        exports2.reflow = reflow;
        exports2.toType = toType;
        exports2.triggerTransitionEnd = triggerTransitionEnd;
        Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
      });
    }
  });

  // ns-hugo-imp:C:\Users\n1NjaM0nk3y\Coding\n1NjaMonk3y\themes\hackropole\assets\js\vendor\bootstrap\dom\event-handler.js
  var require_event_handler = __commonJS({
    "ns-hugo-imp:C:\\Users\\n1NjaM0nk3y\\Coding\\n1NjaMonk3y\\themes\\hackropole\\assets\\js\\vendor\\bootstrap\\dom\\event-handler.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require_util()) : typeof define === "function" && define.amd ? define(["../util/index"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.EventHandler = factory(global.Index));
      })(exports, function(index_js) {
        "use strict";
        const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
        const stripNameRegex = /\..*/;
        const stripUidRegex = /::\d+$/;
        const eventRegistry = {};
        let uidEvent = 1;
        const customEvents = {
          mouseenter: "mouseover",
          mouseleave: "mouseout"
        };
        const nativeEvents = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
        function makeEventUid(element, uid) {
          return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
        }
        function getElementEvents(element) {
          const uid = makeEventUid(element);
          element.uidEvent = uid;
          eventRegistry[uid] = eventRegistry[uid] || {};
          return eventRegistry[uid];
        }
        function bootstrapHandler(element, fn) {
          return function handler(event) {
            hydrateObj(event, {
              delegateTarget: element
            });
            if (handler.oneOff) {
              EventHandler.off(element, event.type, fn);
            }
            return fn.apply(element, [event]);
          };
        }
        function bootstrapDelegationHandler(element, selector, fn) {
          return function handler(event) {
            const domElements = element.querySelectorAll(selector);
            for (let {
              target
            } = event; target && target !== this; target = target.parentNode) {
              for (const domElement of domElements) {
                if (domElement !== target) {
                  continue;
                }
                hydrateObj(event, {
                  delegateTarget: target
                });
                if (handler.oneOff) {
                  EventHandler.off(element, event.type, selector, fn);
                }
                return fn.apply(target, [event]);
              }
            }
          };
        }
        function findHandler(events, callable, delegationSelector = null) {
          return Object.values(events).find((event) => event.callable === callable && event.delegationSelector === delegationSelector);
        }
        function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
          const isDelegated = typeof handler === "string";
          const callable = isDelegated ? delegationFunction : handler || delegationFunction;
          let typeEvent = getTypeEvent(originalTypeEvent);
          if (!nativeEvents.has(typeEvent)) {
            typeEvent = originalTypeEvent;
          }
          return [isDelegated, callable, typeEvent];
        }
        function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
          if (typeof originalTypeEvent !== "string" || !element) {
            return;
          }
          let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
          if (originalTypeEvent in customEvents) {
            const wrapFunction = (fn2) => {
              return function(event) {
                if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
                  return fn2.call(this, event);
                }
              };
            };
            callable = wrapFunction(callable);
          }
          const events = getElementEvents(element);
          const handlers = events[typeEvent] || (events[typeEvent] = {});
          const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
          if (previousFunction) {
            previousFunction.oneOff = previousFunction.oneOff && oneOff;
            return;
          }
          const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ""));
          const fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
          fn.delegationSelector = isDelegated ? handler : null;
          fn.callable = callable;
          fn.oneOff = oneOff;
          fn.uidEvent = uid;
          handlers[uid] = fn;
          element.addEventListener(typeEvent, fn, isDelegated);
        }
        function removeHandler(element, events, typeEvent, handler, delegationSelector) {
          const fn = findHandler(events[typeEvent], handler, delegationSelector);
          if (!fn) {
            return;
          }
          element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
          delete events[typeEvent][fn.uidEvent];
        }
        function removeNamespacedHandlers(element, events, typeEvent, namespace) {
          const storeElementEvent = events[typeEvent] || {};
          for (const [handlerKey, event] of Object.entries(storeElementEvent)) {
            if (handlerKey.includes(namespace)) {
              removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
            }
          }
        }
        function getTypeEvent(event) {
          event = event.replace(stripNameRegex, "");
          return customEvents[event] || event;
        }
        const EventHandler = {
          on(element, event, handler, delegationFunction) {
            addHandler(element, event, handler, delegationFunction, false);
          },
          one(element, event, handler, delegationFunction) {
            addHandler(element, event, handler, delegationFunction, true);
          },
          off(element, originalTypeEvent, handler, delegationFunction) {
            if (typeof originalTypeEvent !== "string" || !element) {
              return;
            }
            const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
            const inNamespace = typeEvent !== originalTypeEvent;
            const events = getElementEvents(element);
            const storeElementEvent = events[typeEvent] || {};
            const isNamespace = originalTypeEvent.startsWith(".");
            if (typeof callable !== "undefined") {
              if (!Object.keys(storeElementEvent).length) {
                return;
              }
              removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
              return;
            }
            if (isNamespace) {
              for (const elementEvent of Object.keys(events)) {
                removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
              }
            }
            for (const [keyHandlers, event] of Object.entries(storeElementEvent)) {
              const handlerKey = keyHandlers.replace(stripUidRegex, "");
              if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
                removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
              }
            }
          },
          trigger(element, event, args) {
            if (typeof event !== "string" || !element) {
              return null;
            }
            const $ = index_js.getjQuery();
            const typeEvent = getTypeEvent(event);
            const inNamespace = event !== typeEvent;
            let jQueryEvent = null;
            let bubbles = true;
            let nativeDispatch = true;
            let defaultPrevented = false;
            if (inNamespace && $) {
              jQueryEvent = $.Event(event, args);
              $(element).trigger(jQueryEvent);
              bubbles = !jQueryEvent.isPropagationStopped();
              nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
              defaultPrevented = jQueryEvent.isDefaultPrevented();
            }
            const evt = hydrateObj(new Event(event, {
              bubbles,
              cancelable: true
            }), args);
            if (defaultPrevented) {
              evt.preventDefault();
            }
            if (nativeDispatch) {
              element.dispatchEvent(evt);
            }
            if (evt.defaultPrevented && jQueryEvent) {
              jQueryEvent.preventDefault();
            }
            return evt;
          }
        };
        function hydrateObj(obj, meta = {}) {
          for (const [key, value] of Object.entries(meta)) {
            try {
              obj[key] = value;
            } catch (_unused) {
              Object.defineProperty(obj, key, {
                configurable: true,
                get() {
                  return value;
                }
              });
            }
          }
          return obj;
        }
        return EventHandler;
      });
    }
  });

  // ns-hugo-imp:C:\Users\n1NjaM0nk3y\Coding\n1NjaMonk3y\themes\hackropole\assets\js\vendor\bootstrap\dom\manipulator.js
  var require_manipulator = __commonJS({
    "ns-hugo-imp:C:\\Users\\n1NjaM0nk3y\\Coding\\n1NjaMonk3y\\themes\\hackropole\\assets\\js\\vendor\\bootstrap\\dom\\manipulator.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Manipulator = factory());
      })(exports, function() {
        "use strict";
        function normalizeData(value) {
          if (value === "true") {
            return true;
          }
          if (value === "false") {
            return false;
          }
          if (value === Number(value).toString()) {
            return Number(value);
          }
          if (value === "" || value === "null") {
            return null;
          }
          if (typeof value !== "string") {
            return value;
          }
          try {
            return JSON.parse(decodeURIComponent(value));
          } catch (_unused) {
            return value;
          }
        }
        function normalizeDataKey(key) {
          return key.replace(/[A-Z]/g, (chr) => `-${chr.toLowerCase()}`);
        }
        const Manipulator = {
          setDataAttribute(element, key, value) {
            element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
          },
          removeDataAttribute(element, key) {
            element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
          },
          getDataAttributes(element) {
            if (!element) {
              return {};
            }
            const attributes = {};
            const bsKeys = Object.keys(element.dataset).filter((key) => key.startsWith("bs") && !key.startsWith("bsConfig"));
            for (const key of bsKeys) {
              let pureKey = key.replace(/^bs/, "");
              pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
              attributes[pureKey] = normalizeData(element.dataset[key]);
            }
            return attributes;
          },
          getDataAttribute(element, key) {
            return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
          }
        };
        return Manipulator;
      });
    }
  });

  // ns-hugo-imp:C:\Users\n1NjaM0nk3y\Coding\n1NjaMonk3y\themes\hackropole\assets\js\vendor\bootstrap\util\config.js
  var require_config = __commonJS({
    "ns-hugo-imp:C:\\Users\\n1NjaM0nk3y\\Coding\\n1NjaMonk3y\\themes\\hackropole\\assets\\js\\vendor\\bootstrap\\util\\config.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require_manipulator(), require_util()) : typeof define === "function" && define.amd ? define(["../dom/manipulator", "./index"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Config = factory(global.Manipulator, global.Index));
      })(exports, function(Manipulator, index_js) {
        "use strict";
        class Config {
          // Getters
          static get Default() {
            return {};
          }
          static get DefaultType() {
            return {};
          }
          static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!');
          }
          _getConfig(config) {
            config = this._mergeConfigObj(config);
            config = this._configAfterMerge(config);
            this._typeCheckConfig(config);
            return config;
          }
          _configAfterMerge(config) {
            return config;
          }
          _mergeConfigObj(config, element) {
            const jsonConfig = index_js.isElement(element) ? Manipulator.getDataAttribute(element, "config") : {};
            return {
              ...this.constructor.Default,
              ...typeof jsonConfig === "object" ? jsonConfig : {},
              ...index_js.isElement(element) ? Manipulator.getDataAttributes(element) : {},
              ...typeof config === "object" ? config : {}
            };
          }
          _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
            for (const [property, expectedTypes] of Object.entries(configTypes)) {
              const value = config[property];
              const valueType = index_js.isElement(value) ? "element" : index_js.toType(value);
              if (!new RegExp(expectedTypes).test(valueType)) {
                throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
              }
            }
          }
        }
        return Config;
      });
    }
  });

  // ns-hugo-imp:C:\Users\n1NjaM0nk3y\Coding\n1NjaMonk3y\themes\hackropole\assets\js\vendor\bootstrap\base-component.js
  var require_base_component = __commonJS({
    "ns-hugo-imp:C:\\Users\\n1NjaM0nk3y\\Coding\\n1NjaMonk3y\\themes\\hackropole\\assets\\js\\vendor\\bootstrap\\base-component.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require_data(), require_event_handler(), require_config(), require_util()) : typeof define === "function" && define.amd ? define(["./dom/data", "./dom/event-handler", "./util/config", "./util/index"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.BaseComponent = factory(global.Data, global.EventHandler, global.Config, global.Index));
      })(exports, function(Data, EventHandler, Config, index_js) {
        "use strict";
        const VERSION = "5.3.2";
        class BaseComponent extends Config {
          constructor(element, config) {
            super();
            element = index_js.getElement(element);
            if (!element) {
              return;
            }
            this._element = element;
            this._config = this._getConfig(config);
            Data.set(this._element, this.constructor.DATA_KEY, this);
          }
          // Public
          dispose() {
            Data.remove(this._element, this.constructor.DATA_KEY);
            EventHandler.off(this._element, this.constructor.EVENT_KEY);
            for (const propertyName of Object.getOwnPropertyNames(this)) {
              this[propertyName] = null;
            }
          }
          _queueCallback(callback, element, isAnimated = true) {
            index_js.executeAfterTransition(callback, element, isAnimated);
          }
          _getConfig(config) {
            config = this._mergeConfigObj(config, this._element);
            config = this._configAfterMerge(config);
            this._typeCheckConfig(config);
            return config;
          }
          // Static
          static getInstance(element) {
            return Data.get(index_js.getElement(element), this.DATA_KEY);
          }
          static getOrCreateInstance(element, config = {}) {
            return this.getInstance(element) || new this(element, typeof config === "object" ? config : null);
          }
          static get VERSION() {
            return VERSION;
          }
          static get DATA_KEY() {
            return `bs.${this.NAME}`;
          }
          static get EVENT_KEY() {
            return `.${this.DATA_KEY}`;
          }
          static eventName(name) {
            return `${name}${this.EVENT_KEY}`;
          }
        }
        return BaseComponent;
      });
    }
  });

  // ns-hugo-imp:C:\Users\n1NjaM0nk3y\Coding\n1NjaMonk3y\themes\hackropole\assets\js\vendor\bootstrap\dom\selector-engine.js
  var require_selector_engine = __commonJS({
    "ns-hugo-imp:C:\\Users\\n1NjaM0nk3y\\Coding\\n1NjaMonk3y\\themes\\hackropole\\assets\\js\\vendor\\bootstrap\\dom\\selector-engine.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require_util()) : typeof define === "function" && define.amd ? define(["../util/index"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.SelectorEngine = factory(global.Index));
      })(exports, function(index_js) {
        "use strict";
        const getSelector = (element) => {
          let selector = element.getAttribute("data-bs-target");
          if (!selector || selector === "#") {
            let hrefAttribute = element.getAttribute("href");
            if (!hrefAttribute || !hrefAttribute.includes("#") && !hrefAttribute.startsWith(".")) {
              return null;
            }
            if (hrefAttribute.includes("#") && !hrefAttribute.startsWith("#")) {
              hrefAttribute = `#${hrefAttribute.split("#")[1]}`;
            }
            selector = hrefAttribute && hrefAttribute !== "#" ? index_js.parseSelector(hrefAttribute.trim()) : null;
          }
          return selector;
        };
        const SelectorEngine = {
          find(selector, element = document.documentElement) {
            return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
          },
          findOne(selector, element = document.documentElement) {
            return Element.prototype.querySelector.call(element, selector);
          },
          children(element, selector) {
            return [].concat(...element.children).filter((child) => child.matches(selector));
          },
          parents(element, selector) {
            const parents = [];
            let ancestor = element.parentNode.closest(selector);
            while (ancestor) {
              parents.push(ancestor);
              ancestor = ancestor.parentNode.closest(selector);
            }
            return parents;
          },
          prev(element, selector) {
            let previous = element.previousElementSibling;
            while (previous) {
              if (previous.matches(selector)) {
                return [previous];
              }
              previous = previous.previousElementSibling;
            }
            return [];
          },
          // TODO: this is now unused; remove later along with prev()
          next(element, selector) {
            let next = element.nextElementSibling;
            while (next) {
              if (next.matches(selector)) {
                return [next];
              }
              next = next.nextElementSibling;
            }
            return [];
          },
          focusableChildren(element) {
            const focusables = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((selector) => `${selector}:not([tabindex^="-"])`).join(",");
            return this.find(focusables, element).filter((el) => !index_js.isDisabled(el) && index_js.isVisible(el));
          },
          getSelectorFromElement(element) {
            const selector = getSelector(element);
            if (selector) {
              return SelectorEngine.findOne(selector) ? selector : null;
            }
            return null;
          },
          getElementFromSelector(element) {
            const selector = getSelector(element);
            return selector ? SelectorEngine.findOne(selector) : null;
          },
          getMultipleElementsFromSelector(element) {
            const selector = getSelector(element);
            return selector ? SelectorEngine.find(selector) : [];
          }
        };
        return SelectorEngine;
      });
    }
  });

  // ns-hugo-imp:C:\Users\n1NjaM0nk3y\Coding\n1NjaMonk3y\themes\hackropole\assets\js\vendor\bootstrap\collapse.js
  var require_collapse = __commonJS({
    "ns-hugo-imp:C:\\Users\\n1NjaM0nk3y\\Coding\\n1NjaMonk3y\\themes\\hackropole\\assets\\js\\vendor\\bootstrap\\collapse.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require_base_component(), require_event_handler(), require_selector_engine(), require_util()) : typeof define === "function" && define.amd ? define(["./base-component", "./dom/event-handler", "./dom/selector-engine", "./util/index"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Collapse = factory(global.BaseComponent, global.EventHandler, global.SelectorEngine, global.Index));
      })(exports, function(BaseComponent, EventHandler, SelectorEngine, index_js) {
        "use strict";
        const NAME = "collapse";
        const DATA_KEY = "bs.collapse";
        const EVENT_KEY = `.${DATA_KEY}`;
        const DATA_API_KEY = ".data-api";
        const EVENT_SHOW = `show${EVENT_KEY}`;
        const EVENT_SHOWN = `shown${EVENT_KEY}`;
        const EVENT_HIDE = `hide${EVENT_KEY}`;
        const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
        const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
        const CLASS_NAME_SHOW = "show";
        const CLASS_NAME_COLLAPSE = "collapse";
        const CLASS_NAME_COLLAPSING = "collapsing";
        const CLASS_NAME_COLLAPSED = "collapsed";
        const CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
        const CLASS_NAME_HORIZONTAL = "collapse-horizontal";
        const WIDTH = "width";
        const HEIGHT = "height";
        const SELECTOR_ACTIVES = ".collapse.show, .collapse.collapsing";
        const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="collapse"]';
        const Default = {
          parent: null,
          toggle: true
        };
        const DefaultType = {
          parent: "(null|element)",
          toggle: "boolean"
        };
        class Collapse extends BaseComponent {
          constructor(element, config) {
            super(element, config);
            this._isTransitioning = false;
            this._triggerArray = [];
            const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE);
            for (const elem of toggleList) {
              const selector = SelectorEngine.getSelectorFromElement(elem);
              const filterElement = SelectorEngine.find(selector).filter((foundElement) => foundElement === this._element);
              if (selector !== null && filterElement.length) {
                this._triggerArray.push(elem);
              }
            }
            this._initializeChildren();
            if (!this._config.parent) {
              this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
            }
            if (this._config.toggle) {
              this.toggle();
            }
          }
          // Getters
          static get Default() {
            return Default;
          }
          static get DefaultType() {
            return DefaultType;
          }
          static get NAME() {
            return NAME;
          }
          // Public
          toggle() {
            if (this._isShown()) {
              this.hide();
            } else {
              this.show();
            }
          }
          show() {
            if (this._isTransitioning || this._isShown()) {
              return;
            }
            let activeChildren = [];
            if (this._config.parent) {
              activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter((element) => element !== this._element).map((element) => Collapse.getOrCreateInstance(element, {
                toggle: false
              }));
            }
            if (activeChildren.length && activeChildren[0]._isTransitioning) {
              return;
            }
            const startEvent = EventHandler.trigger(this._element, EVENT_SHOW);
            if (startEvent.defaultPrevented) {
              return;
            }
            for (const activeInstance of activeChildren) {
              activeInstance.hide();
            }
            const dimension = this._getDimension();
            this._element.classList.remove(CLASS_NAME_COLLAPSE);
            this._element.classList.add(CLASS_NAME_COLLAPSING);
            this._element.style[dimension] = 0;
            this._addAriaAndCollapsedClass(this._triggerArray, true);
            this._isTransitioning = true;
            const complete = () => {
              this._isTransitioning = false;
              this._element.classList.remove(CLASS_NAME_COLLAPSING);
              this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW);
              this._element.style[dimension] = "";
              EventHandler.trigger(this._element, EVENT_SHOWN);
            };
            const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
            const scrollSize = `scroll${capitalizedDimension}`;
            this._queueCallback(complete, this._element, true);
            this._element.style[dimension] = `${this._element[scrollSize]}px`;
          }
          hide() {
            if (this._isTransitioning || !this._isShown()) {
              return;
            }
            const startEvent = EventHandler.trigger(this._element, EVENT_HIDE);
            if (startEvent.defaultPrevented) {
              return;
            }
            const dimension = this._getDimension();
            this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
            index_js.reflow(this._element);
            this._element.classList.add(CLASS_NAME_COLLAPSING);
            this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW);
            for (const trigger of this._triggerArray) {
              const element = SelectorEngine.getElementFromSelector(trigger);
              if (element && !this._isShown(element)) {
                this._addAriaAndCollapsedClass([trigger], false);
              }
            }
            this._isTransitioning = true;
            const complete = () => {
              this._isTransitioning = false;
              this._element.classList.remove(CLASS_NAME_COLLAPSING);
              this._element.classList.add(CLASS_NAME_COLLAPSE);
              EventHandler.trigger(this._element, EVENT_HIDDEN);
            };
            this._element.style[dimension] = "";
            this._queueCallback(complete, this._element, true);
          }
          _isShown(element = this._element) {
            return element.classList.contains(CLASS_NAME_SHOW);
          }
          // Private
          _configAfterMerge(config) {
            config.toggle = Boolean(config.toggle);
            config.parent = index_js.getElement(config.parent);
            return config;
          }
          _getDimension() {
            return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
          }
          _initializeChildren() {
            if (!this._config.parent) {
              return;
            }
            const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE);
            for (const element of children) {
              const selected = SelectorEngine.getElementFromSelector(element);
              if (selected) {
                this._addAriaAndCollapsedClass([element], this._isShown(selected));
              }
            }
          }
          _getFirstLevelChildren(selector) {
            const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
            return SelectorEngine.find(selector, this._config.parent).filter((element) => !children.includes(element));
          }
          _addAriaAndCollapsedClass(triggerArray, isOpen) {
            if (!triggerArray.length) {
              return;
            }
            for (const element of triggerArray) {
              element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
              element.setAttribute("aria-expanded", isOpen);
            }
          }
          // Static
          static jQueryInterface(config) {
            const _config = {};
            if (typeof config === "string" && /show|hide/.test(config)) {
              _config.toggle = false;
            }
            return this.each(function() {
              const data = Collapse.getOrCreateInstance(this, _config);
              if (typeof config === "string") {
                if (typeof data[config] === "undefined") {
                  throw new TypeError(`No method named "${config}"`);
                }
                data[config]();
              }
            });
          }
        }
        EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function(event) {
          if (event.target.tagName === "A" || event.delegateTarget && event.delegateTarget.tagName === "A") {
            event.preventDefault();
          }
          for (const element of SelectorEngine.getMultipleElementsFromSelector(this)) {
            Collapse.getOrCreateInstance(element, {
              toggle: false
            }).toggle();
          }
        });
        index_js.defineJQueryPlugin(Collapse);
        return Collapse;
      });
    }
  });

  // ns-hugo-imp:C:\Users\n1NjaM0nk3y\Coding\n1NjaMonk3y\themes\hackropole\assets\js\vendor\bootstrap\util\component-functions.js
  var require_component_functions = __commonJS({
    "ns-hugo-imp:C:\\Users\\n1NjaM0nk3y\\Coding\\n1NjaMonk3y\\themes\\hackropole\\assets\\js\\vendor\\bootstrap\\util\\component-functions.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require_event_handler(), require_selector_engine(), require_util()) : typeof define === "function" && define.amd ? define(["exports", "../dom/event-handler", "../dom/selector-engine", "./index"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.ComponentFunctions = {}, global.EventHandler, global.SelectorEngine, global.Index));
      })(exports, function(exports2, EventHandler, SelectorEngine, index_js) {
        "use strict";
        const enableDismissTrigger = (component, method = "hide") => {
          const clickEvent = `click.dismiss${component.EVENT_KEY}`;
          const name = component.NAME;
          EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function(event) {
            if (["A", "AREA"].includes(this.tagName)) {
              event.preventDefault();
            }
            if (index_js.isDisabled(this)) {
              return;
            }
            const target = SelectorEngine.getElementFromSelector(this) || this.closest(`.${name}`);
            const instance = component.getOrCreateInstance(target);
            instance[method]();
          });
        };
        exports2.enableDismissTrigger = enableDismissTrigger;
        Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
      });
    }
  });

  // ns-hugo-imp:C:\Users\n1NjaM0nk3y\Coding\n1NjaMonk3y\themes\hackropole\assets\js\vendor\bootstrap\toast.js
  var require_toast = __commonJS({
    "ns-hugo-imp:C:\\Users\\n1NjaM0nk3y\\Coding\\n1NjaMonk3y\\themes\\hackropole\\assets\\js\\vendor\\bootstrap\\toast.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require_base_component(), require_event_handler(), require_component_functions(), require_util()) : typeof define === "function" && define.amd ? define(["./base-component", "./dom/event-handler", "./util/component-functions", "./util/index"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Toast = factory(global.BaseComponent, global.EventHandler, global.ComponentFunctions, global.Index));
      })(exports, function(BaseComponent, EventHandler, componentFunctions_js, index_js) {
        "use strict";
        const NAME = "toast";
        const DATA_KEY = "bs.toast";
        const EVENT_KEY = `.${DATA_KEY}`;
        const EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
        const EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
        const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
        const EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
        const EVENT_HIDE = `hide${EVENT_KEY}`;
        const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
        const EVENT_SHOW = `show${EVENT_KEY}`;
        const EVENT_SHOWN = `shown${EVENT_KEY}`;
        const CLASS_NAME_FADE = "fade";
        const CLASS_NAME_HIDE = "hide";
        const CLASS_NAME_SHOW = "show";
        const CLASS_NAME_SHOWING = "showing";
        const DefaultType = {
          animation: "boolean",
          autohide: "boolean",
          delay: "number"
        };
        const Default = {
          animation: true,
          autohide: true,
          delay: 5e3
        };
        class Toast3 extends BaseComponent {
          constructor(element, config) {
            super(element, config);
            this._timeout = null;
            this._hasMouseInteraction = false;
            this._hasKeyboardInteraction = false;
            this._setListeners();
          }
          // Getters
          static get Default() {
            return Default;
          }
          static get DefaultType() {
            return DefaultType;
          }
          static get NAME() {
            return NAME;
          }
          // Public
          show() {
            const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);
            if (showEvent.defaultPrevented) {
              return;
            }
            this._clearTimeout();
            if (this._config.animation) {
              this._element.classList.add(CLASS_NAME_FADE);
            }
            const complete = () => {
              this._element.classList.remove(CLASS_NAME_SHOWING);
              EventHandler.trigger(this._element, EVENT_SHOWN);
              this._maybeScheduleHide();
            };
            this._element.classList.remove(CLASS_NAME_HIDE);
            index_js.reflow(this._element);
            this._element.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING);
            this._queueCallback(complete, this._element, this._config.animation);
          }
          hide() {
            if (!this.isShown()) {
              return;
            }
            const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
            if (hideEvent.defaultPrevented) {
              return;
            }
            const complete = () => {
              this._element.classList.add(CLASS_NAME_HIDE);
              this._element.classList.remove(CLASS_NAME_SHOWING, CLASS_NAME_SHOW);
              EventHandler.trigger(this._element, EVENT_HIDDEN);
            };
            this._element.classList.add(CLASS_NAME_SHOWING);
            this._queueCallback(complete, this._element, this._config.animation);
          }
          dispose() {
            this._clearTimeout();
            if (this.isShown()) {
              this._element.classList.remove(CLASS_NAME_SHOW);
            }
            super.dispose();
          }
          isShown() {
            return this._element.classList.contains(CLASS_NAME_SHOW);
          }
          // Private
          _maybeScheduleHide() {
            if (!this._config.autohide) {
              return;
            }
            if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
              return;
            }
            this._timeout = setTimeout(() => {
              this.hide();
            }, this._config.delay);
          }
          _onInteraction(event, isInteracting) {
            switch (event.type) {
              case "mouseover":
              case "mouseout": {
                this._hasMouseInteraction = isInteracting;
                break;
              }
              case "focusin":
              case "focusout": {
                this._hasKeyboardInteraction = isInteracting;
                break;
              }
            }
            if (isInteracting) {
              this._clearTimeout();
              return;
            }
            const nextElement = event.relatedTarget;
            if (this._element === nextElement || this._element.contains(nextElement)) {
              return;
            }
            this._maybeScheduleHide();
          }
          _setListeners() {
            EventHandler.on(this._element, EVENT_MOUSEOVER, (event) => this._onInteraction(event, true));
            EventHandler.on(this._element, EVENT_MOUSEOUT, (event) => this._onInteraction(event, false));
            EventHandler.on(this._element, EVENT_FOCUSIN, (event) => this._onInteraction(event, true));
            EventHandler.on(this._element, EVENT_FOCUSOUT, (event) => this._onInteraction(event, false));
          }
          _clearTimeout() {
            clearTimeout(this._timeout);
            this._timeout = null;
          }
          // Static
          static jQueryInterface(config) {
            return this.each(function() {
              const data = Toast3.getOrCreateInstance(this, config);
              if (typeof config === "string") {
                if (typeof data[config] === "undefined") {
                  throw new TypeError(`No method named "${config}"`);
                }
                data[config](this);
              }
            });
          }
        }
        componentFunctions_js.enableDismissTrigger(Toast3);
        index_js.defineJQueryPlugin(Toast3);
        return Toast3;
      });
    }
  });

  // ns-hugo-imp:C:\Users\n1NjaM0nk3y\Coding\n1NjaMonk3y\themes\hackropole\assets\js\lib\sortable.js
  function sortTable(headEl) {
    const directionUp = !headEl.classList.contains("dir-u");
    headEl.parentNode.querySelectorAll("th").forEach((e) => e.classList.remove("dir-u", "dir-d"));
    headEl.classList.add(directionUp ? "dir-u" : "dir-d");
    const tableBody = headEl.closest("table").tBodies[0];
    const rows = Array.from(tableBody.rows).slice(0);
    const cellId = Array.from(headEl.parentNode.children).indexOf(headEl);
    const getSortValue = (el) => el.getAttribute("data-sort") || el.innerText;
    rows.sort((row1, row2) => {
      const val1 = getSortValue((directionUp ? row1 : row2).cells[cellId]);
      const val2 = getSortValue((directionUp ? row2 : row1).cells[cellId]);
      return isNaN(val1 - val2) ? val1.localeCompare(val2) : val1 - val2;
    });
    const newTableBody = tableBody.cloneNode();
    while (rows.length) {
      newTableBody.appendChild(rows.splice(0, 1)[0]);
    }
    tableBody.parentNode.replaceChild(newTableBody, tableBody);
  }
  window.addEventListener("load", () => {
    document.querySelectorAll("table[data-sortable] th").forEach((el) => {
      el.addEventListener("click", (e) => sortTable(e.currentTarget));
    });
  });

  // ns-hugo-imp:C:\Users\n1NjaM0nk3y\Coding\n1NjaMonk3y\themes\hackropole\assets\js\lib\common.js
  var import_autoComplete_min = __toESM(require_autoComplete_min());
  var import_collapse = __toESM(require_collapse());

  // ns-hugo-params:C:\Users\n1NjaM0nk3y\Coding\n1NjaMonk3y\themes\hackropole\assets\js\lib\api.js
  var api = "https://example.com/";

  // ns-hugo-imp:C:\Users\n1NjaM0nk3y\Coding\n1NjaMonk3y\themes\hackropole\assets\js\lib\api.js
  var HackropoleApi = class {
    static apiUrl = `${api}api/hackropole`;
    static isLogged() {
      return "auth" in window.localStorage;
    }
    /**
     * Call API to get URL for authentication providers
     * @param {{redirect_uri: String}} params - The parameters needed to resolve the URL
     * @returns {Promise<{name: String, url: String}[]>} List of providers
     */
    static async authorize(params) {
      const response = await fetch(this.apiUrl + "/auth/authorize", {
        method: "post",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(params)
      });
      if (!response.ok) {
        throw Error("authorize failed");
      }
      const data = await response.json();
      return data;
    }
    /**
     * Call API to login and return an access token
     *
     * This occurs after Github has redirected us and given a temporary code.
     * We need to send the code back to the API to get an AccessToken in exchange.
     *
     * @param {Object} params - The parameters returned by the provider and the provider name
     */
    static async login(params) {
      const response = await fetch(this.apiUrl + "/auth/authenticate", {
        method: "post",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(params)
      });
      if (!response.ok) {
        throw Error("login failed");
      }
      const data = await response.json();
      window.localStorage.setItem("auth", JSON.stringify(data));
    }
    /**
     * Empty all local storage, except theme
     *
     * This function never returns as it refreshes the window.
     */
    static logout() {
      let theme;
      if ("theme" in window.localStorage) {
        theme = window.localStorage.getItem("theme");
      }
      window.localStorage.clear();
      if (theme) {
        window.localStorage.setItem("theme", theme);
      }
      window.location.reload();
    }
    /**
     * Call API to refresh the access token
     *
     * This occurs when the access token is expired.
     * This function may never return as it refreshes the window if unable to
     * refresh the token.
     */
    static async refresh() {
      const auth = JSON.parse(window.localStorage.getItem("auth"));
      const response = await fetch(this.apiUrl + "/auth/refresh", {
        method: "post",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(auth)
      });
      if (!response.ok) {
        alert("Authentication has expired, please try again after logging in.");
        this.logout();
      }
      const data = await response.json();
      window.localStorage.setItem("auth", JSON.stringify(data));
      return data;
    }
    /**
     * Call API and handle login error
     * @param {string} ep - Endpoint URL
     * @param {Object} params - The parameters to pass to API
     * @param {boolean} hasData - Whether return data is expected
     * @returns {Promise<any>} The API call result
     */
    static async api(ep, params = {}, hasData = true) {
      const auth = JSON.parse(window.localStorage.getItem("auth"));
      const headers = new Headers({ "Content-Type": "application/json" });
      let response = await fetch(this.apiUrl + ep, {
        method: "post",
        headers,
        body: JSON.stringify({
          ...auth,
          ...params
        })
      });
      if (response.status === 401) {
        const auth2 = await this.refresh();
        response = await fetch(this.apiUrl + ep, {
          method: "post",
          headers,
          body: JSON.stringify({
            ...auth2,
            ...params
          })
        });
      }
      if (!response.ok) {
        throw Error(`API returned ${response.status}`);
      }
      if (hasData) {
        const data = await response.json();
        return data;
      }
    }
    /**
     * Call API to retrieve all user data
     * @returns {Promise<{
     *   name: String,
     *   solves: {challenge: String, date: String, flag: String}[],
     *   solutions_pending: {challenge: String, url: String, date: String}[],
     *   solutions_rejected: {challenge: String, url: String, date: String}[],
     *   solutions_accepted: {challenge: String, date: String, uuid: String}[],
     *   solution_votes: String[],
     *   challenge_votes: String[]
     * }>} User data
     */
    static async getSelfUserData() {
      return await this.api("/user/self");
    }
    /**
     * Call API to delete all user data
     */
    static async deleteUserData() {
      await this.api("/user/delete", {}, false);
    }
    /**
     * Call API to toggle a vote on a challenge.
     * @param {String} challenge - Challenge identifier, e.g. "fcsc2019-crypto-2tp"
     * @returns {Promise<String[]>} List of currently voted challenges
     */
    static async voteChallenge(challenge) {
      return await this.api(
        "/vote/challenge",
        {
          challenge
        }
      );
    }
    /**
     * Call API to toggle a vote on a writeup.
     * @param {String} solution - Write-up UUID
     * @returns {Promise<String[]>} List of currently voted write-ups
     */
    static async voteSolution(solution) {
      return await this.api(
        "/vote/solution",
        {
          solution
        }
      );
    }
    /**
     * Call API to flag a challenge.
     * @param {String} challenge - Challenge identifier, e.g. "fcsc2019-crypto-2tp"
     * @param {String} flag - Flag
     * @returns {Promise<{challenge: String, date: String, flag: String}[]>} List of flagged challenges
     */
    static async submission(challenge, flag) {
      return await this.api(
        "/submit_flag",
        {
          challenge,
          flag
        }
      );
    }
    /**
     * Call API to submit a new writeup for review.
     * @param {String} challenge - Challenge identifier, e.g. "fcsc2019-crypto-2tp"
     * @param {String} url - URL to the writeup
     * @returns {Promise<{challenge: String, url: String, date: String}[]>} List of submitted write-ups in pending state
     */
    static async submitWriteUp(challenge, url) {
      return await this.api(
        "/submit_solution",
        {
          challenge,
          url
        }
      );
    }
  };

  // ns-hugo-imp:C:\Users\n1NjaM0nk3y\Coding\n1NjaMonk3y\themes\hackropole\assets\js\lib\common.js
  var import_toast = __toESM(require_toast());
  var STORAGE_VERSION = "1";
  function fillLogin() {
    const providers = JSON.parse(window.sessionStorage.getItem("providers"));
    const menu = document.getElementById("login-providers");
    menu.querySelector("div").classList.add("d-none");
    menu.querySelector("ul").classList.remove("d-none");
    providers.forEach((provider) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      const text = document.createTextNode(`${menu.dataset.prefix}${provider.name}`);
      const bi = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      const icon = document.createElementNS("http://www.w3.org/2000/svg", "use");
      icon.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + provider.name.toLowerCase().replace(/[^a-z0-9_]+/g, "_"));
      bi.classList.add("bi");
      bi.ariaHidden = "true";
      bi.appendChild(icon);
      a.classList.add("dropdown-item");
      a.classList.add("icon-link");
      a.href = provider.url;
      a.appendChild(bi);
      a.appendChild(text);
      li.appendChild(a);
      menu.querySelector("ul").appendChild(li);
    });
  }
  async function queryLogin(redirectUri2) {
    const d = await HackropoleApi.authorize({ redirect_uri: redirectUri2 });
    window.sessionStorage.setItem("providers", JSON.stringify(d));
    window.sessionStorage.setItem("providers_redirect_uri", redirectUri2);
  }
  document.getElementById("btn-logout").addEventListener("click", (e) => {
    e.preventDefault();
    HackropoleApi.logout();
  });
  var redirectUri = document.getElementById("menu-login").dataset.redirectUri;
  if (sessionStorage.getItem("providers_redirect_uri") === redirectUri) {
    fillLogin();
  } else {
    document.querySelector("#menu-login .spinner-border").addEventListener("animationstart", () => {
      queryLogin(redirectUri).then(() => fillLogin()).catch(() => {
        const toast = new import_toast.default(document.getElementById("toast-api-error"));
        toast.show();
      });
    }, { once: true });
  }
  if (HackropoleApi.isLogged() && localStorage.getItem("version") !== STORAGE_VERSION) {
    HackropoleApi.logout();
  }
  document.getElementById("menu-login").classList.toggle("d-none", HackropoleApi.isLogged());
  document.getElementById("menu-account").classList.toggle("d-none", !HackropoleApi.isLogged());
  var indexUrl = `${window.location.origin}/${location.pathname.split("/")[1]}/index.json`;
  var searchAutocomplete = new import_autoComplete_min.default({
    selector: "#challenges-search",
    data: {
      src: async () => {
        const source = await fetch(indexUrl);
        const data = await source.json();
        return data;
      },
      keys: ["title", "content"],
      cache: true,
      // Sort entries with match in title first and filter out entries with same title
      filter: function(list) {
        list.sort(function(a, b) {
          if (a.key === b.key) {
            return 0;
          }
          if (a.key === "title") {
            return -1;
          }
          return 1;
        });
        const set = /* @__PURE__ */ new Set();
        return list.filter(function(a) {
          if (set.has(a.value.title)) {
            return false;
          }
          set.add(a.value.title);
          return true;
        });
      }
    },
    diacritics: true,
    threshold: 0,
    resultsList: {
      tabSelect: true,
      maxResults: void 0
    },
    resultItem: {
      // Format result item
      element: (item, data) => {
        const found = data.match.match(/([^\s]*.{0,10}<mark>.*<\/mark>.{0,10}[^\s]*)/);
        if (found) {
          if (data.key === "title") {
            item.innerHTML = `<b>${data.value.title}</b>`;
          } else {
            item.innerHTML = `<b>${data.value.title}</b> : ${found[1]}`;
          }
        }
      },
      highlight: true
    }
  });
  document.querySelector("#challenges-search").addEventListener("selection", function(event) {
    window.location = event.detail.selection.value.uri;
  });
  document.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT" || e.repeat || e.ctrlKey) {
    } else if (e.key === "/") {
      document.getElementById("challenges-search").select();
      e.preventDefault();
    } else if (e.key === "t") {
      document.querySelector(".theme-switch").click();
      e.preventDefault();
    }
  });
  document.querySelectorAll("[data-countdown]").forEach((el) => {
    const countDownDate = new Date(parseInt(el.dataset.countdown)).getTime();
    const updateTimer = () => {
      const now = (/* @__PURE__ */ new Date()).getTime();
      const dist = countDownDate - now;
      if (dist >= 0) {
        el.querySelector(".countdown-day").textContent = Math.floor(dist / 864e5);
        el.querySelector(".countdown-hour").textContent = String(Math.floor(dist % 864e5 / 36e5)).padStart(2, "0");
        el.querySelector(".countdown-min").textContent = String(Math.floor(dist % 36e5 / 6e4)).padStart(2, "0");
        el.querySelector(".countdown-sec").textContent = String(Math.floor(dist % 6e4 / 1e3)).padStart(2, "0");
      } else {
        el.querySelector(".countdown-day").textContent = "0";
        el.querySelector(".countdown-hour").textContent = "00";
        el.querySelector(".countdown-min").textContent = "00";
        el.querySelector(".countdown-sec").textContent = "00";
      }
    };
    setInterval(updateTimer, 500);
    updateTimer();
  });

  // ns-hugo-imp:C:\Users\n1NjaM0nk3y\Coding\n1NjaMonk3y\themes\hackropole\assets\js\lib\challengeVoteBtn.js
  var import_toast2 = __toESM(require_toast());
  function refreshChallVote() {
    let votes = [];
    if (HackropoleApi.isLogged()) {
      votes = JSON.parse(window.localStorage.getItem("challenge_votes"));
    }
    document.querySelectorAll("a.challenge-vote-btn").forEach((el) => {
      if (!(el instanceof HTMLAnchorElement)) {
        return;
      }
      const active = votes.includes(el.dataset.challenge);
      el.classList.toggle("text-opacity-25", !active);
      el.setAttribute("title", active ? el.dataset.titleActive : el.dataset.titleInactive);
      if (el.parentElement instanceof HTMLTableCellElement) {
        el.parentElement.setAttribute("data-sort", active ? "1" : "0");
      }
    });
  }
  window.addEventListener("load", () => {
    refreshChallVote();
    document.querySelectorAll("a.challenge-vote-btn").forEach((el) => {
      if (!(el instanceof HTMLAnchorElement)) {
        return;
      }
      el.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();
        if (HackropoleApi.isLogged()) {
          const challenge = el.dataset.challenge;
          HackropoleApi.voteChallenge(challenge).then((d) => {
            window.localStorage.setItem("challenge_votes", JSON.stringify(d || []));
            refreshChallVote();
          }).catch(() => {
            const toast = new import_toast2.default(document.getElementById("toast-api-error"));
            toast.show();
          });
        } else {
          const toast = new import_toast2.default(document.getElementById("toast-api-need-login"));
          toast.show();
        }
      });
    });
  });

  // <stdin>
  function refreshFlags() {
    if (!("flags" in window.localStorage)) {
      return;
    }
    const flags = JSON.parse(window.localStorage.getItem("flags"));
    flags.forEach((flag) => {
      document.querySelectorAll(`[data-challenge="${flag.challenge}"] .badge-flag`).forEach((el) => {
        const d = new Date(flag.date);
        el.textContent = d.toLocaleDateString("fr-CA") + ", " + d.toLocaleTimeString("en-GB");
        el.classList.remove("invisible");
        el.closest("td").setAttribute("data-sort", flag.date);
      });
    });
  }
  window.addEventListener("load", () => {
    refreshFlags();
  });
})();
/*!
  * Bootstrap data.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
/*!
  * Bootstrap index.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
/*!
  * Bootstrap event-handler.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
/*!
  * Bootstrap manipulator.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
/*!
  * Bootstrap config.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
/*!
  * Bootstrap base-component.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
/*!
  * Bootstrap selector-engine.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
/*!
  * Bootstrap collapse.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
/*!
  * Bootstrap component-functions.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
/*!
  * Bootstrap toast.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */

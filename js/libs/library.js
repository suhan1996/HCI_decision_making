/**
 * Created by Suhan on 08/03/2017.
 */
/*!
 * VERSION: 1.19.0
 * DATE: 2016-07-16
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
/*! Hammer.JS - v2.0.8 - 2016-04-23
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-canvas-csstransforms3d-webgl-setclasses !*/
/**
 * @fileoverview gl-matrix - High performance matrix and vector operations
 * @author Brandon Jones
 * @author Colin MacKenzie IV
 * @version 2.3.2
 */
(function () {
    for (var q = 0, p = ["ms", "moz", "webkit", "o"], s = 0; s < p.length && !window.requestAnimationFrame; ++s)window.requestAnimationFrame = window[p[s] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[p[s] + "CancelAnimationFrame"] || window[p[s] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function (n, c) {
        var a = (new Date).getTime(), b = Math.max(0, 16 - (a - q)), d = window.setTimeout(function () {
            n(a + b)
        }, b);
        q = a + b;
        return d
    });
    window.cancelAnimationFrame || (window.cancelAnimationFrame =
        function (n) {
            clearTimeout(n)
        });
    window.requestTimeout = function (n, c) {
        function a(e) {
            b || (b = e);
            e - b >= c ? n.call() : d.value = window.requestAnimationFrame(a)
        }

        var b = null, d = {};
        d.value = window.requestAnimationFrame(a);
        return d
    };
    window.clearRequestTimeout = function (n) {
        window.cancelAnimationFrame ? window.cancelAnimationFrame(n.value) : window.webkitCancelAnimationFrame ? window.webkitCancelAnimationFrame(n.value) : window.webkitCancelRequestAnimationFrame ? window.webkitCancelRequestAnimationFrame(n.value) : window.mozCancelRequestAnimationFrame ?
            window.mozCancelRequestAnimationFrame(n.value) : window.oCancelRequestAnimationFrame ? window.oCancelRequestAnimationFrame(n.value) : window.msCancelRequestAnimationFrame ? window.msCancelRequestAnimationFrame(n.value) : clearTimeout(n)
    }
})();
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (q) {
        var p, s, n, c = _gsScope.GreenSockGlobals || _gsScope, a = 2 * Math.PI, b = Math.PI / 2, d = c.com.greensock._class, e = function (a, b) {
            var c = d("easing." + a, function () {
            }, !0), e = c.prototype = new q;
            return e.constructor = c, e.getRatio = b, c
        }, g = q.register || function () {
            }, f = function (a, b, c, e, f) {
            b = d("easing." + a, {easeOut: new b, easeIn: new c, easeInOut: new e}, !0);
            return g(b, a), b
        }, h = function (a, b, d) {
            this.t = a;
            this.v = b;
            d && (this.next =
                d, d.prev = this, this.c = d.v - b, this.gap = d.t - a)
        }, l = function (a, b) {
            var c = d("easing." + a, function (a) {
                this._p1 = a || 0 === a ? a : 1.70158;
                this._p2 = 1.525 * this._p1
            }, !0), e = c.prototype = new q;
            return e.constructor = c, e.getRatio = b, e.config = function (a) {
                return new c(a)
            }, c
        }, l = f("Back", l("BackOut", function (a) {
            return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1
        }), l("BackIn", function (a) {
            return a * a * ((this._p1 + 1) * a - this._p1)
        }), l("BackInOut", function (a) {
            return 1 > (a *= 2) ? 0.5 * a * a * ((this._p2 + 1) * a - this._p2) : 0.5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) +
            2)
        })), k = d("easing.SlowMo", function (a, b, d) {
            null == a ? a = 0.7 : 1 < a && (a = 1);
            this._p = 1 !== a ? b || 0 === b ? b : 0.7 : 0;
            this._p1 = (1 - a) / 2;
            this._p2 = a;
            this._p3 = this._p1 + this._p2;
            this._calcEnd = !0 === d
        }, !0), m = k.prototype = new q;
        return m.constructor = k, m.getRatio = function (a) {
            var b = a + (0.5 - a) * this._p;
            return a < this._p1 ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : b
        }, k.ease = new k(0.7, 0.7), m.config = k.config =
            function (a, b, d) {
                return new k(a, b, d)
            }, p = d("easing.SteppedEase", function (a) {
            a = a || 1;
            this._p1 = 1 / a;
            this._p2 = a + 1
        }, !0), m = p.prototype = new q, m.constructor = p, m.getRatio = function (a) {
            return 0 > a ? a = 0 : 1 <= a && (a = 0.999999999), (this._p2 * a >> 0) * this._p1
        }, m.config = p.config = function (a) {
            return new p(a)
        }, s = d("easing.RoughEase", function (a) {
            a = a || {};
            for (var b, d, c, e, g = a.taper || "none", f = [], k = 0, l = e = 0 | (a.points || 20), m = !1 !== a.randomize, n = !0 === a.clamp, p = a.template instanceof q ? a.template : null, s = "number" == typeof a.strength ? 0.4 * a.strength :
                0.4; -1 < --l;)a = m ? Math.random() : 1 / e * l, b = p ? p.getRatio(a) : a, "none" === g ? d = s : "out" === g ? (c = 1 - a, d = c * c * s) : "in" === g ? d = a * a * s : 0.5 > a ? (c = 2 * a, d = 0.5 * (c * c) * s) : (c = 2 * (1 - a), d = 0.5 * (c * c) * s), m ? b += Math.random() * d - 0.5 * d : l % 2 ? b += 0.5 * d : b -= 0.5 * d, n && (1 < b ? b = 1 : 0 > b && (b = 0)), f[k++] = {
                x: a,
                y: b
            };
            f.sort(function (a, b) {
                return a.x - b.x
            });
            d = new h(1, 1, null);
            for (l = e; -1 < --l;)e = f[l], d = new h(e.x, e.y, d);
            this._prev = new h(0, 0, 0 !== d.t ? d : d.next)
        }, !0), m = s.prototype = new q, m.constructor = s, m.getRatio = function (a) {
            var b = this._prev;
            if (a > b.t) {
                for (; b.next && a >=
                b.t;)b = b.next;
                b = b.prev
            } else for (; b.prev && a <= b.t;)b = b.prev;
            return this._prev = b, b.v + (a - b.t) / b.gap * b.c
        }, m.config = function (a) {
            return new s(a)
        }, s.ease = new s, f("Bounce", e("BounceOut", function (a) {
            return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375
        }), e("BounceIn", function (a) {
            return (a = 1 - a) < 1 / 2.75 ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) *
            a + 0.984375)
        }), e("BounceInOut", function (a) {
            var b = 0.5 > a;
            return a = b ? 1 - 2 * a : 2 * a - 1, a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375, b ? 0.5 * (1 - a) : 0.5 * a + 0.5
        })), f("Circ", e("CircOut", function (a) {
            return Math.sqrt(1 - (a -= 1) * a)
        }), e("CircIn", function (a) {
            return -(Math.sqrt(1 - a * a) - 1)
        }), e("CircInOut", function (a) {
            return 1 > (a *= 2) ? -0.5 * (Math.sqrt(1 - a * a) - 1) : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
        })), n = function (b, c, e) {
            var g = d("easing." + b, function (b,
                                               d) {
                this._p1 = 1 <= b ? b : 1;
                this._p2 = (d || e) / (1 > b ? b : 1);
                this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0);
                this._p2 = a / this._p2
            }, !0);
            b = g.prototype = new q;
            return b.constructor = g, b.getRatio = c, b.config = function (a, b) {
                return new g(a, b)
            }, g
        }, f("Elastic", n("ElasticOut", function (a) {
            return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * this._p2) + 1
        }, 0.3), n("ElasticIn", function (a) {
            return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2))
        }, 0.3), n("ElasticInOut", function (a) {
            return 1 > (a *= 2) ? -0.5 * this._p1 * Math.pow(2,
                10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2) : 0.5 * this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2) + 1
        }, 0.45)), f("Expo", e("ExpoOut", function (a) {
            return 1 - Math.pow(2, -10 * a)
        }), e("ExpoIn", function (a) {
            return Math.pow(2, 10 * (a - 1)) - 0.001
        }), e("ExpoInOut", function (a) {
            return 1 > (a *= 2) ? 0.5 * Math.pow(2, 10 * (a - 1)) : 0.5 * (2 - Math.pow(2, -10 * (a - 1)))
        })), f("Sine", e("SineOut", function (a) {
            return Math.sin(a * b)
        }), e("SineIn", function (a) {
            return -Math.cos(a * b) + 1
        }), e("SineInOut", function (a) {
            return -0.5 * (Math.cos(Math.PI *
                    a) - 1)
        })), d("easing.EaseLookup", {
            find: function (a) {
                return q.map[a]
            }
        }, !0), g(c.SlowMo, "SlowMo", "ease,"), g(s, "RoughEase", "ease,"), g(p, "SteppedEase", "ease,"), l
    }, !0)
});
_gsScope._gsDefine && _gsScope._gsQueue.pop()();
(function () {
    var q = function () {
        return _gsScope.GreenSockGlobals || _gsScope
    };
    "function" == typeof define && define.amd ? define(["TweenLite"], q) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = q())
})();
!function (q, p) {
    var s = {}, n = q.GreenSockGlobals = q.GreenSockGlobals || q;
    if (!n.TweenLite) {
        var c, a, b, d, e, g = function (a) {
            var b = a.split("."), d = n;
            for (a = 0; a < b.length; a++)d[b[a]] = d = d[b[a]] || {};
            return d
        }, f = g("com.greensock"), h = function (a) {
            var b, d = [], c = a.length;
            for (b = 0; b !== c; d.push(a[b++]));
            return d
        }, l = function () {
        }, k = function () {
            var a = Object.prototype.toString, b = a.call([]);
            return function (d) {
                return null != d && (d instanceof Array || "object" == typeof d && !!d.push && a.call(d) === b)
            }
        }(), m = {}, r = function (a, b, d, c) {
            this.sc = m[a] ?
                m[a].sc : [];
            m[a] = this;
            this.gsClass = null;
            this.func = d;
            var e = [];
            this.check = function (f) {
                for (var h, k, l, E, F, x = b.length, y = x; -1 < --x;)(h = m[b[x]] || new r(b[x], [])).gsClass ? (e[x] = h.gsClass, y--) : f && h.sc.push(this);
                if (0 === y && d) {
                    if (k = ("com.greensock." + a).split("."), l = k.pop(), E = g(k.join("."))[l] = this.gsClass = d.apply(d, e), c)if (n[l] = s[l] = E, F = "undefined" != typeof module && module.exports, !F && "function" == typeof define && define.amd)define((q.GreenSockAMDPath ? q.GreenSockAMDPath + "/" : "") + a.split(".").pop(), [], function () {
                        return E
                    });
                    else if (F)if (a === p)for (x in module.exports = s[p] = E, s)E[x] = s[x]; else s[p] && (s[p][l] = E);
                    for (x = 0; x < this.sc.length; x++)this.sc[x].check()
                }
            };
            this.check(!0)
        }, E = q._gsDefine = function (a, b, d, c) {
            return new r(a, b, d, c)
        }, F = f._class = function (a, b, d) {
            return b = b || function () {
                }, E(a, [], function () {
                return b
            }, d), b
        };
        E.globals = n;
        var x = [0, 0, 1, 1], C = F("easing.Ease", function (a, b, d, c) {
            this._func = a;
            this._type = d || 0;
            this._power = c || 0;
            this._params = b ? x.concat(b) : x
        }, !0), v = C.map = {}, t = C.register = function (a, b, d, c) {
            var e, g, h;
            b = b.split(",");
            for (var k = b.length, l = (d || "easeIn,easeOut,easeInOut").split(","); -1 < --k;)for (e = b[k], d = c ? F("easing." + e, null, !0) : f.easing[e] || {}, g = l.length; -1 < --g;)h = l[g], v[e + "." + h] = v[h + e] = d[h] = a.getRatio ? a : a[h] || new a
        };
        b = C.prototype;
        b._calcEnd = !1;
        b.getRatio = function (a) {
            if (this._func)return this._params[0] = a, this._func.apply(null, this._params);
            var b = this._type, d = this._power, c = 1 === b ? 1 - a : 2 === b ? a : 0.5 > a ? 2 * a : 2 * (1 - a);
            return 1 === d ? c *= c : 2 === d ? c *= c * c : 3 === d ? c *= c * c * c : 4 === d && (c *= c * c * c * c), 1 === b ? 1 - c : 2 === b ? c : 0.5 > a ? c / 2 : 1 - c / 2
        };
        c = ["Linear",
            "Quad", "Cubic", "Quart", "Quint,Strong"];
        for (a = c.length; -1 < --a;)b = c[a] + ",Power" + a, t(new C(null, null, 1, a), b, "easeOut", !0), t(new C(null, null, 2, a), b, "easeIn" + (0 === a ? ",easeNone" : "")), t(new C(null, null, 3, a), b, "easeInOut");
        v.linear = f.easing.Linear.easeIn;
        v.swing = f.easing.Quad.easeInOut;
        var w = F("events.EventDispatcher", function (a) {
            this._listeners = {};
            this._eventTarget = a || this
        });
        b = w.prototype;
        b.addEventListener = function (a, b, c, g, f) {
            f = f || 0;
            var h, k = this._listeners[a], l = 0;
            this !== d || e || d.wake();
            null == k && (this._listeners[a] =
                k = []);
            for (h = k.length; -1 < --h;)a = k[h], a.c === b && a.s === c ? k.splice(h, 1) : 0 === l && a.pr < f && (l = h + 1);
            k.splice(l, 0, {c: b, s: c, up: g, pr: f})
        };
        b.removeEventListener = function (a, b) {
            var d, c = this._listeners[a];
            if (c)for (d = c.length; -1 < --d;)if (c[d].c === b)return void c.splice(d, 1)
        };
        b.dispatchEvent = function (a) {
            var b, d, c, e = this._listeners[a];
            if (e)for (b = e.length, 1 < b && (e = e.slice(0)), d = this._eventTarget; -1 < --b;)(c = e[b]) && (c.up ? c.c.call(c.s || d, {
                type: a,
                target: d
            }) : c.c.call(c.s || d))
        };
        var y = q.requestAnimationFrame, B = q.cancelAnimationFrame,
            A = Date.now || function () {
                    return (new Date).getTime()
                }, z = A();
        c = ["ms", "moz", "webkit", "o"];
        for (a = c.length; -1 < --a && !y;)y = q[c[a] + "RequestAnimationFrame"], B = q[c[a] + "CancelAnimationFrame"] || q[c[a] + "CancelRequestAnimationFrame"];
        F("Ticker", function (a, b) {
            var c, g, f, h, k, m = this, r = A(), n = !1 !== b && y ? "auto" : !1, E = 500, p = 33, F = function (a) {
                var b, d;
                b = A() - z;
                b > E && (r += b - p);
                z += b;
                m.time = (z - r) / 1E3;
                b = m.time - k;
                (!c || 0 < b || !0 === a) && (m.frame++, k += b + (b >= h ? 0.004 : h - b), d = !0);
                !0 !== a && (f = g(F));
                d && m.dispatchEvent("tick")
            };
            w.call(m);
            m.time = m.frame =
                0;
            m.tick = function () {
                F(!0)
            };
            m.lagSmoothing = function (a, b) {
                E = a || 1E10;
                p = Math.min(b, E, 0)
            };
            m.sleep = function () {
                null != f && (n && B ? B(f) : clearTimeout(f), g = l, f = null, m === d && (e = !1))
            };
            m.wake = function (a) {
                null !== f ? m.sleep() : a ? r += -z + (z = A()) : 10 < m.frame && (z = A() - E + 5);
                g = 0 === c ? l : n && y ? y : function (a) {
                    return setTimeout(a, 1E3 * (k - m.time) + 1 | 0)
                };
                m === d && (e = !0);
                F(2)
            };
            m.fps = function (a) {
                return arguments.length ? (c = a, h = 1 / (c || 60), k = this.time + h, void m.wake()) : c
            };
            m.useRAF = function (a) {
                return arguments.length ? (m.sleep(), n = a, void m.fps(c)) :
                    n
            };
            m.fps(a);
            setTimeout(function () {
                "auto" === n && 5 > m.frame && "hidden" !== document.visibilityState && m.useRAF(!1)
            }, 1500)
        });
        b = f.Ticker.prototype = new f.events.EventDispatcher;
        b.constructor = f.Ticker;
        var D = F("core.Animation", function (a, b) {
            if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = !0 === b.immediateRender, this.data = b.data, this._reversed = !0 === b.reversed, U) {
                e || d.wake();
                var c = this.vars.useFrames ? X : U;
                c.add(this, c._time);
                this.vars.paused &&
                this.paused(!0)
            }
        });
        d = D.ticker = new f.Ticker;
        b = D.prototype;
        b._dirty = b._gc = b._initted = b._paused = !1;
        b._totalTime = b._time = 0;
        b._rawPrevTime = -1;
        b._next = b._last = b._onUpdate = b._timeline = b.timeline = null;
        b._paused = !1;
        var J = function () {
            e && 2E3 < A() - z && d.wake();
            setTimeout(J, 2E3)
        };
        J();
        b.play = function (a, b) {
            return null != a && this.seek(a, b), this.reversed(!1).paused(!1)
        };
        b.pause = function (a, b) {
            return null != a && this.seek(a, b), this.paused(!0)
        };
        b.resume = function (a, b) {
            return null != a && this.seek(a, b), this.paused(!1)
        };
        b.seek = function (a,
                           b) {
            return this.totalTime(Number(a), !1 !== b)
        };
        b.restart = function (a, b) {
            return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, !1 !== b, !0)
        };
        b.reverse = function (a, b) {
            return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1)
        };
        b.render = function (a, b, d) {
        };
        b.invalidate = function () {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
        };
        b.isActive = function () {
            var a, b = this._timeline, d = this._startTime;
            return !b ||
                !this._gc && !this._paused && b.isActive() && (a = b.rawTime()) >= d && a < d + this.totalDuration() / this._timeScale
        };
        b._enabled = function (a, b) {
            return e || d.wake(), this._gc = !a, this._active = this.isActive(), !0 !== b && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1
        };
        b._kill = function (a, b) {
            return this._enabled(!1, !1)
        };
        b.kill = function (a, b) {
            return this._kill(a, b), this
        };
        b._uncache = function (a) {
            for (a = a ? this : this.timeline; a;)a._dirty = !0, a = a.timeline;
            return this
        };
        b._swapSelfInParams = function (a) {
            for (var b = a.length, d = a.concat(); -1 < --b;)"{self}" === a[b] && (d[b] = this);
            return d
        };
        b._callback = function (a) {
            var b = this.vars, d = b[a], c = b[a + "Params"];
            a = b[a + "Scope"] || b.callbackScope || this;
            switch (c ? c.length : 0) {
                case 0:
                    d.call(a);
                    break;
                case 1:
                    d.call(a, c[0]);
                    break;
                case 2:
                    d.call(a, c[0], c[1]);
                    break;
                default:
                    d.apply(a, c)
            }
        };
        b.eventCallback = function (a, b, d, c) {
            if ("on" === (a || "").substr(0, 2)) {
                var e = this.vars;
                if (1 === arguments.length)return e[a];
                null == b ? delete e[a] : (e[a] = b, e[a +
                "Params"] = k(d) && -1 !== d.join("").indexOf("{self}") ? this._swapSelfInParams(d) : d, e[a + "Scope"] = c);
                "onUpdate" === a && (this._onUpdate = b)
            }
            return this
        };
        b.delay = function (a) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay
        };
        b.duration = function (a) {
            return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime *
                (a / this._duration), !0), this) : (this._dirty = !1, this._duration)
        };
        b.totalDuration = function (a) {
            return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration
        };
        b.time = function (a, b) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time
        };
        b.totalTime = function (a, b, c) {
            if (e || d.wake(), !arguments.length)return this._totalTime;
            if (this._timeline) {
                if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var g = this._totalDuration, f = this._timeline;
                    if (a > g && !c && (a = g), this._startTime = (this._paused ? this._pauseTime : f._time) - (this._reversed ? g - a : a) / this._timeScale, f._dirty || this._uncache(!1), f._timeline)for (; f._timeline;)f._timeline._time !== (f._startTime + f._totalTime) / f._timeScale && f.totalTime(f._totalTime, !0), f = f._timeline
                }
                this._gc && this._enabled(!0, !1);
                (this._totalTime !== a || 0 === this._duration) && (I.length && Z(), this.render(a, b, !1), I.length && Z())
            }
            return this
        };
        b.progress = b.totalProgress = function (a, b) {
            var d =
                this.duration();
            return arguments.length ? this.totalTime(d * a, b) : d ? this._time / d : this.ratio
        };
        b.startTime = function (a) {
            return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime
        };
        b.endTime = function (a) {
            return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale
        };
        b.timeScale = function (a) {
            if (!arguments.length)return this._timeScale;
            if (a = a || 1E-10, this._timeline && this._timeline.smoothChildTiming) {
                var b =
                    this._pauseTime, b = b || 0 === b ? b : this._timeline.totalTime();
                this._startTime = b - (b - this._startTime) * this._timeScale / a
            }
            return this._timeScale = a, this._uncache(!1)
        };
        b.reversed = function (a) {
            return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        };
        b.paused = function (a) {
            if (!arguments.length)return this._paused;
            var b, c, g = this._timeline;
            return a != this._paused && g && (e ||
            a || d.wake(), b = g.rawTime(), c = b - this._pauseTime, !a && g.smoothChildTiming && (this._startTime += c, this._uncache(!1)), this._pauseTime = a ? b : null, this._paused = a, this._active = this.isActive(), !a && 0 !== c && this._initted && this.duration() && (b = g.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale, this.render(b, b === this._totalTime, !0))), this._gc && !a && this._enabled(!0, !1), this
        };
        c = F("core.SimpleTimeline", function (a) {
            D.call(this, 0, a);
            this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        b = c.prototype = new D;
        b.constructor = c;
        b.kill()._gc = !1;
        b._first = b._last = b._recent = null;
        b._sortChildren = !1;
        b.add = b.insert = function (a, b, d, c) {
            if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), b = this._last, this._sortChildren)for (d = a._startTime; b && b._startTime > d;)b = b._prev;
            return b ? (a._next = b._next, b._next = a) : (a._next = this._first, this._first = a), a._next ?
                a._next._prev = a : this._last = a, a._prev = b, this._recent = a, this._timeline && this._uncache(!0), this
        };
        b._remove = function (a, b) {
            return a.timeline === this && (b || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), a._next = a._prev = a.timeline = null, a === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
        };
        b.render = function (a, b, d) {
            var c, e = this._first;
            for (this._totalTime = this._time = this._rawPrevTime =
                a; e;)c = e._next, (e._active || a >= e._startTime && !e._paused) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, d) : e.render((a - e._startTime) * e._timeScale, b, d)), e = c
        };
        b.rawTime = function () {
            return e || d.wake(), this._totalTime
        };
        var u = F("TweenLite", function (a, b, d) {
            if (D.call(this, b, d), this.render = u.prototype.render, null == a)throw"Cannot tween a null target.";
            this.target = a = "string" != typeof a ? a : u.selector(a) || a;
            var c, e;
            c = a.jquery || a.length && a !== q && a[0] && (a[0] === q ||
                a[0].nodeType && a[0].style && !a.nodeType);
            d = this.vars.overwrite;
            if (this._overwrite = d = null == d ? fa[u.defaultOverwrite] : "number" == typeof d ? d >> 0 : fa[d], (c || a instanceof Array || a.push && k(a)) && "number" != typeof a[0])for (this._targets = e = h(a), this._propLookup = [], this._siblings = [], a = 0; a < e.length; a++)(c = e[a]) ? "string" != typeof c ? c.length && c !== q && c[0] && (c[0] === q || c[0].nodeType && c[0].style && !c.nodeType) ? (e.splice(a--, 1), this._targets = e = e.concat(h(c))) : (this._siblings[a] = ca(c, this, !1), 1 === d && 1 < this._siblings[a].length &&
            ga(c, this, null, 1, this._siblings[a])) : (c = e[a--] = u.selector(c), "string" == typeof c && e.splice(a + 1, 1)) : e.splice(a--, 1); else this._propLookup = {}, this._siblings = ca(a, this, !1), 1 === d && 1 < this._siblings.length && ga(a, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === b && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1E-10, this.render(Math.min(0, -this._delay)))
        }, !0), G = function (a) {
            return a && a.length && a !== q && a[0] && (a[0] === q || a[0].nodeType && a[0].style && !a.nodeType)
        };
        b = u.prototype = new D;
        b.constructor =
            u;
        b.kill()._gc = !1;
        b.ratio = 0;
        b._firstPT = b._targets = b._overwrittenProps = b._startAt = null;
        b._notifyPluginsOfEnabled = b._lazy = !1;
        u.version = "1.19.0";
        u.defaultEase = b._ease = new C(null, null, 1, 1);
        u.defaultOverwrite = "auto";
        u.ticker = d;
        u.autoSleep = 120;
        u.lagSmoothing = function (a, b) {
            d.lagSmoothing(a, b)
        };
        u.selector = q.$ || q.jQuery || function (a) {
                var b = q.$ || q.jQuery;
                return b ? (u.selector = b, b(a)) : "undefined" == typeof document ? a : document.querySelectorAll ? document.querySelectorAll(a) : document.getElementById("#" === a.charAt(0) ?
                    a.substr(1) : a)
            };
        var I = [], L = {}, Q = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, N = function (a) {
            for (var b, d = this._firstPT; d;)b = d.blob ? a ? this.join("") : this.start : d.c * a + d.s, d.m ? b = d.m(b, this._target || d.t) : 1E-6 > b && -1E-6 < b && (b = 0), d.f ? d.fp ? d.t[d.p](d.fp, b) : d.t[d.p](b) : d.t[d.p] = b, d = d._next
        }, H = function (a, b, d, c) {
            var e, g, f, h, k = [a, b], l = 0, m = "", r = 0;
            k.start = a;
            d && (d(k), a = k[0], b = k[1]);
            k.length = 0;
            a = a.match(Q) || [];
            d = b.match(Q) || [];
            c && (c._next = null, c.blob = 1, k._firstPT = k._applyPT = c);
            g = d.length;
            for (c = 0; g > c; c++)h = d[c],
                f = b.substr(l, b.indexOf(h, l) - l), m += f || !c ? f : ",", l += f.length, r ? r = (r + 1) % 5 : "rgba(" === f.substr(-5) && (r = 1), h === a[c] || a.length <= c ? m += h : (m && (k.push(m), m = ""), e = parseFloat(a[c]), k.push(e), k._firstPT = {
                _next: k._firstPT,
                t: k,
                p: k.length - 1,
                s: e,
                c: ("=" === h.charAt(1) ? parseInt(h.charAt(0) + "1", 10) * parseFloat(h.substr(2)) : parseFloat(h) - e) || 0,
                f: 0,
                m: r && 4 > r ? Math.round : 0
            }), l += h.length;
            return m += b.substr(l), m && k.push(m), k.setRatio = N, k
        }, O = function (a, b, d, c, e, g, f, h, k) {
            "function" == typeof c && (c = c(k || 0, a));
            var l, m;
            k = "get" === d ? a[b] :
                d;
            var r = typeof a[b], n = "string" == typeof c && "=" === c.charAt(1);
            g = {
                t: a,
                p: b,
                s: k,
                f: "function" === r,
                pg: 0,
                n: e || b,
                m: g ? "function" == typeof g ? g : Math.round : 0,
                pr: 0,
                c: n ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - k || 0
            };
            return "number" !== r && ("function" === r && "get" === d && (m = b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3), g.s = k = f ? a[m](f) : a[m]()), "string" == typeof k && (f || isNaN(k)) ? (g.fp = f, l = H(k, c, h || u.defaultStringFilter, g), g = {
                t: l, p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: e || b,
                pr: 0, m: 0
            }) : n || (g.s = parseFloat(k), g.c = parseFloat(c) - g.s || 0)), g.c ? ((g._next = this._firstPT) && (g._next._prev = g), this._firstPT = g, g) : void 0
        };
        a = u._internals = {isArray: k, isSelector: G, lazyTweens: I, blobDif: H};
        var R = u._plugins = {}, S = a.tweenLookup = {}, la = 0, P = a.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1,
            lazy: 1,
            onOverwrite: 1,
            callbackScope: 1,
            stringFilter: 1,
            id: 1
        }, fa = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            "true": 1,
            "false": 0
        }, X = D._rootFramesTimeline = new c, U = D._rootTimeline = new c, ma = 30, Z = a.lazyRender = function () {
            var a, b = I.length;
            for (L = {}; -1 < --b;)(a = I[b]) && !1 !== a._lazy && (a.render(a._lazy[0], a._lazy[1], !0), a._lazy = !1);
            I.length = 0
        };
        U._startTime = d.time;
        X._startTime = d.frame;
        U._active = X._active = !0;
        setTimeout(Z, 1);
        D._updateRoot = u.render = function () {
            var a, b, c;
            if (I.length && Z(), U.render((d.time - U._startTime) * U._timeScale, !1, !1), X.render((d.frame - X._startTime) * X._timeScale, !1, !1), I.length && Z(), d.frame >= ma) {
                ma = d.frame + (parseInt(u.autoSleep, 10) || 120);
                for (c in S) {
                    b = S[c].tweens;
                    for (a = b.length; -1 < --a;)b[a]._gc && b.splice(a, 1);
                    0 === b.length && delete S[c]
                }
                if (c = U._first, (!c || c._paused) && u.autoSleep && !X._first && 1 === d._listeners.tick.length) {
                    for (; c &&
                           c._paused;)c = c._next;
                    c || d.sleep()
                }
            }
        };
        d.addEventListener("tick", D._updateRoot);
        var ca = function (a, b, d) {
            var c, e, g = a._gsTweenID;
            if (S[g || (a._gsTweenID = g = "t" + la++)] || (S[g] = {
                    target: a,
                    tweens: []
                }), b && (c = S[g].tweens, c[e = c.length] = b, d))for (; -1 < --e;)c[e] === b && c.splice(e, 1);
            return S[g].tweens
        }, V = function (a, b, d, c) {
            var e, g, f = a.vars.onOverwrite;
            return f && (e = f(a, b, d, c)), f = u.onOverwrite, f && (g = f(a, b, d, c)), !1 !== e && !1 !== g
        }, ga = function (a, b, d, c, e) {
            var g, f, h;
            if (1 === c || 4 <= c) {
                d = e.length;
                for (g = 0; d > g; g++)if ((h = e[g]) !== b)h._gc ||
                h._kill(null, a, b) && (f = !0); else if (5 === c)break;
                return f
            }
            var k, l = b._startTime + 1E-10, m = [], r = 0, n = 0 === b._duration;
            for (g = e.length; -1 < --g;)(h = e[g]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (k = k || oa(b, 0, n), 0 === oa(h, k, n) && (m[r++] = h)) : h._startTime <= l && h._startTime + h.totalDuration() / h._timeScale > l && ((n || !h._initted) && 2E-10 >= l - h._startTime || (m[r++] = h)));
            for (g = r; -1 < --g;)(h = m[g], 2 === c && h._kill(d, a, b) && (f = !0), 2 !== c || !h._firstPT && h._initted) && (2 === c || V(h, b)) && h._enabled(!1, !1) && (f = !0);
            return f
        }, oa = function (a,
                          b, d) {
            for (var c = a._timeline, e = c._timeScale, g = a._startTime; c._timeline;) {
                if (g += c._startTime, e *= c._timeScale, c._paused)return -100;
                c = c._timeline
            }
            return g /= e, g > b ? g - b : d && g === b || !a._initted && 2E-10 > g - b ? 1E-10 : (g += a.totalDuration() / a._timeScale / e) > b + 1E-10 ? 0 : g - b - 1E-10
        };
        b._init = function () {
            var a, b, d, c, e = this.vars, g = this._overwrittenProps, f = this._duration;
            c = !!e.immediateRender;
            var h = e.ease;
            if (e.startAt) {
                this._startAt && (this._startAt.render(-1, !0), this._startAt.kill());
                d = {};
                for (a in e.startAt)d[a] = e.startAt[a];
                if (d.overwrite = !1, d.immediateRender = !0, d.lazy = c && !1 !== e.lazy, d.startAt = d.delay = null, this._startAt = u.to(this.target, 0, d), c)if (0 < this._time)this._startAt = null; else if (0 !== f)return
            } else if (e.runBackwards && 0 !== f)if (this._startAt)this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null; else {
                0 !== this._time && (c = !1);
                d = {};
                for (a in e)P[a] && "autoCSS" !== a || (d[a] = e[a]);
                if (d.overwrite = 0, d.data = "isFromStart", d.lazy = c && !1 !== e.lazy, d.immediateRender = c, this._startAt = u.to(this.target, 0, d), c) {
                    if (0 === this._time)return
                } else this._startAt._init(),
                    this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
            }
            if (this._ease = h = h ? h instanceof C ? h : "function" == typeof h ? new C(h, e.easeParams) : v[h] || u.defaultEase : u.defaultEase, e.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, e.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)for (c = this._targets.length, a = 0; c > a; a++)this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], g ? g[a] : null, a) && (b = !0); else b = this._initProps(this.target, this._propLookup, this._siblings, g, 0);
            if (b && u._onPluginEvent("_onInitAllProps", this), g && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), e.runBackwards)for (d = this._firstPT; d;)d.s += d.c, d.c = -d.c, d = d._next;
            this._onUpdate = e.onUpdate;
            this._initted = !0
        };
        b._initProps = function (a, b, d, c, e) {
            var g, f, h, l, m;
            if (null == a)return !1;
            L[a._gsTweenID] && Z();
            if (!this.vars.css && a.style && a !== q && a.nodeType && R.css && !1 !== this.vars.autoCSS) {
                f = this.vars;
                var r = {};
                for (m in f)P[m] ||
                m in a && "transform" !== m && "x" !== m && "y" !== m && "width" !== m && "height" !== m && "className" !== m && "border" !== m || !(!R[m] || R[m] && R[m]._autoCSS) || (r[m] = f[m], delete f[m]);
                f.css = r
            }
            for (g in this.vars)if (f = this.vars[g], P[g])f && (f instanceof Array || f.push && k(f)) && -1 !== f.join("").indexOf("{self}") && (this.vars[g] = this._swapSelfInParams(f, this)); else if (R[g] && (l = new R[g])._onInitTween(a, this.vars[g], this, e)) {
                this._firstPT = m = {
                    _next: this._firstPT,
                    t: l,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 1,
                    n: g,
                    pg: 1,
                    pr: l._priority,
                    m: 0
                };
                for (f = l._overwriteProps.length; -1 < --f;)b[l._overwriteProps[f]] = this._firstPT;
                (l._priority || l._onInitAllProps) && (h = !0);
                (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0);
                m._next && (m._next._prev = m)
            } else b[g] = O.call(this, a, g, "get", f, g, 0, null, this.vars.stringFilter, e);
            return c && this._kill(c, a) ? this._initProps(a, b, d, c, e) : 1 < this._overwrite && this._firstPT && 1 < d.length && ga(a, this, b, this._overwrite, d) ? (this._kill(b, a), this._initProps(a, b, d, c, e)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) &&
            (L[a._gsTweenID] = !0), h)
        };
        b.render = function (a, b, d) {
            var c, e, g, f, h = this._time, k = this._duration;
            g = this._rawPrevTime;
            if (a >= k - 1E-7)this._totalTime = this._time = k, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (c = !0, e = "onComplete", d = d || this._timeline.autoRemoveChildren), 0 === k && (this._initted || !this.vars.lazy || d) && (this._startTime === this._timeline._duration && (a = 0), (0 > g || 0 >= a && -1E-7 <= a || 1E-10 === g && "isPause" !== this.data) && g !== a && (d = !0, 1E-10 < g && (e = "onReverseComplete")), this._rawPrevTime =
                f = !b || a || g === a ? a : 1E-10); else if (1E-7 > a)this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== h || 0 === k && 0 < g) && (e = "onReverseComplete", c = this._reversed), 0 > a && (this._active = !1, 0 === k && (this._initted || !this.vars.lazy || d) && (0 <= g && (1E-10 !== g || "isPause" !== this.data) && (d = !0), this._rawPrevTime = f = !b || a || g === a ? a : 1E-10)), this._initted || (d = !0); else if (this._totalTime = this._time = a, this._easeType) {
                var l = a / k, m = this._easeType, r = this._easePower;
                (1 === m || 3 === m && 0.5 <= l) && (l = 1 - l);
                3 ===
                m && (l *= 2);
                1 === r ? l *= l : 2 === r ? l *= l * l : 3 === r ? l *= l * l * l : 4 === r && (l *= l * l * l * l);
                1 === m ? this.ratio = 1 - l : 2 === m ? this.ratio = l : 0.5 > a / k ? this.ratio = l / 2 : this.ratio = 1 - l / 2
            } else this.ratio = this._ease.getRatio(a / k);
            if (this._time !== h || d) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc)return;
                    if (!d && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration))return this._time = this._totalTime = h, this._rawPrevTime = g, I.push(this), void(this._lazy = [a, b]);
                    this._time && !c ? this.ratio = this._ease.getRatio(this._time /
                        k) : c && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                !1 !== this._lazy && (this._lazy = !1);
                this._active || !this._paused && this._time !== h && 0 <= a && (this._active = !0);
                0 !== h || (this._startAt && (0 <= a ? this._startAt.render(a, b, d) : e || (e = "_dummyGS")), !this.vars.onStart || 0 === this._time && 0 !== k || !b && this._callback("onStart"));
                for (g = this._firstPT; g;)g.f ? g.t[g.p](g.c * this.ratio + g.s) : g.t[g.p] = g.c * this.ratio + g.s, g = g._next;
                this._onUpdate && (0 > a && this._startAt && -1E-4 !== a && this._startAt.render(a, b, d),
                b || (this._time !== h || c || d) && this._callback("onUpdate"));
                e && (!this._gc || d) && (0 > a && this._startAt && !this._onUpdate && -1E-4 !== a && this._startAt.render(a, b, d), c && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this._callback(e), 0 === k && 1E-10 === this._rawPrevTime && 1E-10 !== f && (this._rawPrevTime = 0))
            }
        };
        b._kill = function (a, b, d) {
            if ("all" === a && (a = null), null == a && (null == b || b === this.target))return this._lazy = !1, this._enabled(!1, !1);
            b = "string" != typeof b ? b || this._targets || this.target :
            u.selector(b) || b;
            var c, e, g, f, h, l, m, r, n = d && this._time && d._startTime === this._startTime && this._timeline === d._timeline;
            if ((k(b) || G(b)) && "number" != typeof b[0])for (c = b.length; -1 < --c;)this._kill(a, b[c], d) && (l = !0); else {
                if (this._targets)for (c = this._targets.length; -1 < --c;) {
                    if (b === this._targets[c]) {
                        h = this._propLookup[c] || {};
                        this._overwrittenProps = this._overwrittenProps || [];
                        e = this._overwrittenProps[c] = a ? this._overwrittenProps[c] || {} : "all";
                        break
                    }
                } else {
                    if (b !== this.target)return !1;
                    h = this._propLookup;
                    e = this._overwrittenProps =
                        a ? this._overwrittenProps || {} : "all"
                }
                if (h) {
                    if (c = a || h, m = a !== e && "all" !== e && a !== h && ("object" != typeof a || !a._tempKill), d && (u.onOverwrite || this.vars.onOverwrite)) {
                        for (g in c)h[g] && (r || (r = []), r.push(g));
                        if ((r || !a) && !V(this, d, b, r))return !1
                    }
                    for (g in c)(f = h[g]) && (n && (f.f ? f.t[f.p](f.s) : f.t[f.p] = f.s, l = !0), f.pg && f.t._kill(c) && (l = !0), f.pg && 0 !== f.t._overwriteProps.length || (f._prev ? f._prev._next = f._next : f === this._firstPT && (this._firstPT = f._next), f._next && (f._next._prev = f._prev), f._next = f._prev = null), delete h[g]),
                    m && (e[g] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return l
        };
        b.invalidate = function () {
            return this._notifyPluginsOfEnabled && u._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], D.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -1E-10, this.render(Math.min(0, -this._delay))), this
        };
        b._enabled = function (a, b) {
            if (e || d.wake(),
                a && this._gc) {
                var c, g = this._targets;
                if (g)for (c = g.length; -1 < --c;)this._siblings[c] = ca(g[c], this, !0); else this._siblings = ca(this.target, this, !0)
            }
            return D.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? u._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1
        };
        u.to = function (a, b, d) {
            return new u(a, b, d)
        };
        u.from = function (a, b, d) {
            return d.runBackwards = !0, d.immediateRender = 0 != d.immediateRender, new u(a, b, d)
        };
        u.fromTo = function (a, b, d, c) {
            return c.startAt = d, c.immediateRender = 0 != c.immediateRender &&
                0 != d.immediateRender, new u(a, b, c)
        };
        u.delayedCall = function (a, b, d, c, e) {
            return new u(b, 0, {
                delay: a,
                onComplete: b,
                onCompleteParams: d,
                callbackScope: c,
                onReverseComplete: b,
                onReverseCompleteParams: d,
                immediateRender: !1,
                lazy: !1,
                useFrames: e,
                overwrite: 0
            })
        };
        u.set = function (a, b) {
            return new u(a, 0, b)
        };
        u.getTweensOf = function (a, b) {
            if (null == a)return [];
            a = "string" != typeof a ? a : u.selector(a) || a;
            var d, c, e, g;
            if ((k(a) || G(a)) && "number" != typeof a[0]) {
                d = a.length;
                for (c = []; -1 < --d;)c = c.concat(u.getTweensOf(a[d], b));
                for (d = c.length; -1 < --d;)for (g = c[d], e = d; -1 < --e;)g === c[e] && c.splice(d, 1)
            } else for (c = ca(a).concat(), d = c.length; -1 < --d;)(c[d]._gc || b && !c[d].isActive()) && c.splice(d, 1);
            return c
        };
        u.killTweensOf = u.killDelayedCallsTo = function (a, b, d) {
            "object" == typeof b && (d = b, b = !1);
            b = u.getTweensOf(a, b);
            for (var c = b.length; -1 < --c;)b[c]._kill(d, a)
        };
        var Y = F("plugins.TweenPlugin", function (a, b) {
            this._overwriteProps = (a || "").split(",");
            this._propName = this._overwriteProps[0];
            this._priority = b || 0;
            this._super = Y.prototype
        }, !0);
        if (b = Y.prototype, Y.version =
                "1.19.0", Y.API = 2, b._firstPT = null, b._addTween = O, b.setRatio = N, b._kill = function (a) {
                var b, d = this._overwriteProps, c = this._firstPT;
                if (null != a[this._propName])this._overwriteProps = []; else for (b = d.length; -1 < --b;)null != a[d[b]] && d.splice(b, 1);
                for (; c;)null != a[c.n] && (c._next && (c._next._prev = c._prev), c._prev ? (c._prev._next = c._next, c._prev = null) : this._firstPT === c && (this._firstPT = c._next)), c = c._next;
                return !1
            }, b._mod = b._roundProps = function (a) {
                for (var b, d = this._firstPT; d;)(b = a[this._propName] || null != d.n && a[d.n.split(this._propName +
                        "_").join("")]) && "function" == typeof b && (2 === d.f ? d.t._applyPT.m = b : d.m = b), d = d._next
            }, u._onPluginEvent = function (a, b) {
                var d, c, e, g, f, h = b._firstPT;
                if ("_onInitAllProps" === a) {
                    for (; h;) {
                        f = h._next;
                        for (c = e; c && c.pr > h.pr;)c = c._next;
                        (h._prev = c ? c._prev : g) ? h._prev._next = h : e = h;
                        (h._next = c) ? c._prev = h : g = h;
                        h = f
                    }
                    h = b._firstPT = e
                }
                for (; h;)h.pg && "function" == typeof h.t[a] && h.t[a]() && (d = !0), h = h._next;
                return d
            }, Y.activate = function (a) {
                for (var b = a.length; -1 < --b;)a[b].API === Y.API && (R[(new a[b])._propName] = a[b]);
                return !0
            }, E.plugin =
                function (a) {
                    if (!(a && a.propName && a.init && a.API))throw"illegal plugin definition.";
                    var b, d = a.propName, c = a.priority || 0, e = a.overwriteProps, g = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_mod",
                        mod: "_mod",
                        initAll: "_onInitAllProps"
                    }, f = F("plugins." + d.charAt(0).toUpperCase() + d.substr(1) + "Plugin", function () {
                        Y.call(this, d, c);
                        this._overwriteProps = e || []
                    }, !0 === a.global), h = f.prototype = new Y(d);
                    h.constructor = f;
                    f.API = a.API;
                    for (b in g)"function" == typeof a[b] && (h[g[b]] = a[b]);
                    return f.version = a.version, Y.activate([f]),
                        f
                }, c = q._gsQueue) {
            for (a = 0; a < c.length; a++)c[a]();
            for (b in m)m[b].func || q.console.log("GSAP encountered missing dependency: " + b)
        }
        e = !1
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite");
!function (q, p, s) {
    function n() {
        return "function" != typeof p.createElement ? p.createElement(arguments[0]) : F ? p.createElementNS.call(p, "http://www.w3.org/2000/svg", arguments[0]) : p.createElement.apply(p, arguments)
    }

    function c(a, b, d, c) {
        var e, g, f, h, k = n("div"), l;
        f = p.body;
        l = (f || (f = n(F ? "svg" : "body"), f.fake = !0), f);
        if (parseInt(d, 10))for (; d--;)f = n("div"), f.id = c ? c[d] : "modernizr" + (d + 1), k.appendChild(f);
        return e = n("style"), e.type = "text/css", e.id = "smodernizr", (l.fake ? l : k).appendChild(e), l.appendChild(k), e.styleSheet ?
            e.styleSheet.cssText = a : e.appendChild(p.createTextNode(a)), k.id = "modernizr", l.fake && (l.style.background = "", l.style.overflow = "hidden", h = E.style.overflow, E.style.overflow = "hidden", E.appendChild(l)), g = b(k, a), l.fake ? (l.parentNode.removeChild(l), E.style.overflow = h, E.offsetHeight) : k.parentNode.removeChild(k), !!g
    }

    function a(a) {
        return a.replace(/([a-z])-([a-z])/g, function (a, b, d) {
            return b + d.toUpperCase()
        }).replace(/^-/, "")
    }

    function b(a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }

    function d(a) {
        return a.replace(/([A-Z])/g,
            function (a, b) {
                return "-" + b.toLowerCase()
            }).replace(/^ms-/, "-ms-")
    }

    function e(a, b) {
        var e = a.length;
        if ("CSS"in q && "supports"in q.CSS) {
            for (; e--;)if (q.CSS.supports(d(a[e]), b))return !0;
            return !1
        }
        if ("CSSSupportsRule"in q) {
            for (var g = []; e--;)g.push("(" + d(a[e]) + ":" + b + ")");
            return g = g.join(" or "), c("@supports (" + g + ") { #modernizr { position: absolute; } }", function (a) {
                return "absolute" == getComputedStyle(a, null).position
            })
        }
        return s
    }

    function g(b, d, c, g) {
        function f() {
            k && (delete w.style, delete w.modElem)
        }

        if (g = "undefined" === typeof g ? !1 : g, "undefined" !== typeof c) {
            var h = e(b, c);
            if ("undefined" !== typeof h)return h
        }
        for (var k, l, m, r, h = ["modernizr", "tspan", "samp"]; !w.style && h.length;)k = !0, w.modElem = n(h.shift()), w.style = w.modElem.style;
        l = b.length;
        for (h = 0; l > h; h++)if (m = b[h], r = w.style[m], !!~("" + m).indexOf("-") && (m = a(m)), w.style[m] !== s) {
            if (g || "undefined" === typeof c)return f(), "pfx" == d ? m : !0;
            try {
                w.style[m] = c
            } catch (E) {
            }
            if (w.style[m] != r)return f(), "pfx" == d ? m : !0
        }
        return f(), !1
    }

    function f(a, d, c, e, f) {
        var h = a.charAt(0).toUpperCase() + a.slice(1),
            k = (a + " " + C.join(h + " ") + h).split(" "), l;
        if ("string" === typeof d || "undefined" === typeof d)l = g(k, d, e, f); else {
            k = (a + " " + v.join(h + " ") + h).split(" ");
            a:{
                a = k;
                for (var m in a)if (a[m]in d) {
                    d = !1 === c ? a[m] : (l = d[a[m]], "function" === typeof l ? b(l, c || d) : l);
                    break a
                }
                d = !1
            }
            l = d
        }
        return l
    }

    function h(a, b, d) {
        return f(a, s, s, b, d)
    }

    var l = [], k = [], m = {
        _version: "3.3.1",
        _config: {classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0},
        _q: [],
        on: function (a, b) {
            var d = this;
            setTimeout(function () {
                b(d[a])
            }, 0)
        },
        addTest: function (a, b, d) {
            k.push({
                name: a,
                fn: b, options: d
            })
        },
        addAsyncTest: function (a) {
            k.push({name: null, fn: a})
        }
    }, r = function () {
    };
    r.prototype = m;
    var r = new r, E = p.documentElement, F = "svg" === E.nodeName.toLowerCase();
    r.addTest("canvas", function () {
        var a = n("canvas");
        return !(!a.getContext || !a.getContext("2d"))
    });
    r.addTest("webgl", function () {
        var a = n("canvas"), b = "probablySupportsContext"in a ? "probablySupportsContext" : "supportsContext";
        return b in a ? a[b]("webgl") || a[b]("experimental-webgl") : "WebGLRenderingContext"in q
    });
    r.addTest("supports", "CSS"in q &&
        "supports"in q.CSS || "supportsCSS"in q);
    var x = m.testStyles = c, C = m._config.usePrefixes ? ["Moz", "O", "ms", "Webkit"] : [];
    m._cssomPrefixes = C;
    var v = m._config.usePrefixes ? ["moz", "o", "ms", "webkit"] : [];
    m._domPrefixes = v;
    var t = {elem: n("modernizr")};
    r._q.push(function () {
        delete t.elem
    });
    var w = {style: t.elem.style};
    r._q.unshift(function () {
        delete w.style
    });
    m.testAllProps = f;
    m.testAllProps = h;
    r.addTest("csstransforms3d", function () {
        var a = !!h("perspective", "1px", !0), b = r._config.usePrefixes;
        if (a && (!b || "webkitPerspective"in
            E.style)) {
            var d;
            r.supports ? d = "@supports (perspective: 1px)" : (d = "@media (transform-3d)", b && (d += ",(-webkit-transform-3d)"));
            x("#modernizr{width:0;height:0}" + (d + "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}"), function (b) {
                a = 7 === b.offsetWidth && 18 === b.offsetHeight
            })
        }
        return a
    });
    (function () {
        var a, b, d, c, e, g;
        for (g in k)if (k.hasOwnProperty(g)) {
            if (a = [], b = k[g], b.name && (a.push(b.name.toLowerCase()), b.options && b.options.aliases && b.options.aliases.length))for (d = 0; d < b.options.aliases.length; d++)a.push(b.options.aliases[d].toLowerCase());
            d = "function" === typeof b.fn ? b.fn() : b.fn;
            for (c = 0; c < a.length; c++)e = a[c], e = e.split("."), 1 === e.length ? r[e[0]] = d : (!r[e[0]] || r[e[0]]instanceof Boolean || (r[e[0]] = new Boolean(r[e[0]])), r[e[0]][e[1]] = d), l.push((d ? "" : "no-") + e.join("-"))
        }
    })();
    (function (a) {
        var b = E.className, d = r._config.classPrefix || "";
        if (F && (b = b.baseVal), r._config.enableJSClass)b = b.replace(RegExp("(^|\\s)" + d + "no-js(\\s|$)"), "$1" + d + "js$2");
        r._config.enableClasses && (b += " " + d + a.join(" " + d), F ? E.className.baseVal = b : E.className = b)
    })(l);
    delete m.addTest;
    delete m.addAsyncTest;
    for (m = 0; m < r._q.length; m++)r._q[m]();
    q.Modernizr = r
}(window, document);
/*
 FastClick: polyfill to remove click delays on browsers with touch UIs.

 @codingstandard ftlabs-jsv2
 @copyright The Financial Times Limited [All Rights Reserved]
 @license MIT License (see LICENSE.txt)
 */
(function () {
    function q(a, b) {
        function c(a, b) {
            return function () {
                return a.apply(b, arguments)
            }
        }

        var f;
        b = b || {};
        this.trackingClick = !1;
        this.trackingClickStart = 0;
        this.targetElement = null;
        this.lastTouchIdentifier = this.touchStartY = this.touchStartX = 0;
        this.touchBoundary = b.touchBoundary || 10;
        this.layer = a;
        this.tapDelay = b.tapDelay || 200;
        this.tapTimeout = b.tapTimeout || 700;
        if (!q.notNeeded(a)) {
            for (var h = "onMouse onClick onTouchStart onTouchMove onTouchEnd onTouchCancel".split(" "), l = 0, k = h.length; l < k; l++)this[h[l]] = c(this[h[l]],
                this);
            s && (a.addEventListener("mouseover", this.onMouse, !0), a.addEventListener("mousedown", this.onMouse, !0), a.addEventListener("mouseup", this.onMouse, !0));
            a.addEventListener("click", this.onClick, !0);
            a.addEventListener("touchstart", this.onTouchStart, !1);
            a.addEventListener("touchmove", this.onTouchMove, !1);
            a.addEventListener("touchend", this.onTouchEnd, !1);
            a.addEventListener("touchcancel", this.onTouchCancel, !1);
            Event.prototype.stopImmediatePropagation || (a.removeEventListener = function (b, c, e) {
                var g = Node.prototype.removeEventListener;
                "click" === b ? g.call(a, b, c.hijacked || c, e) : g.call(a, b, c, e)
            }, a.addEventListener = function (b, c, e) {
                var g = Node.prototype.addEventListener;
                "click" === b ? g.call(a, b, c.hijacked || (c.hijacked = function (a) {
                        a.propagationStopped || c(a)
                    }), e) : g.call(a, b, c, e)
            });
            "function" === typeof a.onclick && (f = a.onclick, a.addEventListener("click", function (a) {
                f(a)
            }, !1), a.onclick = null)
        }
    }

    var p = 0 <= navigator.userAgent.indexOf("Windows Phone"), s = 0 < navigator.userAgent.indexOf("Android") && !p, n = /iP(ad|hone|od)/.test(navigator.userAgent) && !p, c =
        n && /OS 4_\d(_\d)?/.test(navigator.userAgent), a = n && /OS [6-7]_\d/.test(navigator.userAgent), b = 0 < navigator.userAgent.indexOf("BB10");
    q.prototype.needsClick = function (a) {
        switch (a.nodeName.toLowerCase()) {
            case "button":
            case "select":
            case "textarea":
                if (a.disabled)return !0;
                break;
            case "input":
                if (n && "file" === a.type || a.disabled)return !0;
                break;
            case "label":
            case "iframe":
            case "video":
                return !0
        }
        return /\bneedsclick\b/.test(a.className)
    };
    q.prototype.needsFocus = function (a) {
        switch (a.nodeName.toLowerCase()) {
            case "textarea":
                return !0;
            case "select":
                return !s;
            case "input":
                switch (a.type) {
                    case "button":
                    case "checkbox":
                    case "file":
                    case "image":
                    case "radio":
                    case "submit":
                        return !1
                }
                return !a.disabled && !a.readOnly;
            default:
                return /\bneedsfocus\b/.test(a.className)
        }
    };
    q.prototype.sendClick = function (a, b) {
        var c, f;
        document.activeElement && document.activeElement !== a && document.activeElement.blur();
        f = b.changedTouches[0];
        c = document.createEvent("MouseEvents");
        c.initMouseEvent(this.determineEventType(a), !0, !0, window, 1, f.screenX, f.screenY, f.clientX, f.clientY,
            !1, !1, !1, !1, 0, null);
        c.forwardedTouchEvent = !0;
        a.dispatchEvent(c)
    };
    q.prototype.determineEventType = function (a) {
        return s && "select" === a.tagName.toLowerCase() ? "mousedown" : "click"
    };
    q.prototype.focus = function (a) {
        var b;
        n && a.setSelectionRange && 0 !== a.type.indexOf("date") && "time" !== a.type && "month" !== a.type ? (b = a.value.length, a.setSelectionRange(b, b)) : a.focus()
    };
    q.prototype.updateScrollParent = function (a) {
        var b, c;
        b = a.fastClickScrollParent;
        if (!b || !b.contains(a)) {
            c = a;
            do {
                if (c.scrollHeight > c.offsetHeight) {
                    b = c;
                    a.fastClickScrollParent =
                        c;
                    break
                }
                c = c.parentElement
            } while (c)
        }
        b && (b.fastClickLastScrollTop = b.scrollTop)
    };
    q.prototype.getTargetElementFromEventTarget = function (a) {
        return a.nodeType === Node.TEXT_NODE ? a.parentNode : a
    };
    q.prototype.onTouchStart = function (a) {
        var b, g, f;
        if (1 < a.targetTouches.length)return !0;
        b = this.getTargetElementFromEventTarget(a.target);
        g = a.targetTouches[0];
        if (n) {
            f = window.getSelection();
            if (f.rangeCount && !f.isCollapsed)return !0;
            if (!c) {
                if (g.identifier && g.identifier === this.lastTouchIdentifier)return a.preventDefault(), !1;
                this.lastTouchIdentifier = g.identifier;
                this.updateScrollParent(b)
            }
        }
        this.trackingClick = !0;
        this.trackingClickStart = a.timeStamp;
        this.targetElement = b;
        this.touchStartX = g.pageX;
        this.touchStartY = g.pageY;
        a.timeStamp - this.lastClickTime < this.tapDelay && a.preventDefault();
        return !0
    };
    q.prototype.touchHasMoved = function (a) {
        a = a.changedTouches[0];
        var b = this.touchBoundary;
        return Math.abs(a.pageX - this.touchStartX) > b || Math.abs(a.pageY - this.touchStartY) > b ? !0 : !1
    };
    q.prototype.onTouchMove = function (a) {
        if (!this.trackingClick)return !0;
        if (this.targetElement !== this.getTargetElementFromEventTarget(a.target) || this.touchHasMoved(a))this.trackingClick = !1, this.targetElement = null;
        return !0
    };
    q.prototype.findControl = function (a) {
        return void 0 !== a.control ? a.control : a.htmlFor ? document.getElementById(a.htmlFor) : a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    };
    q.prototype.onTouchEnd = function (b) {
        var e, g, f = this.targetElement;
        if (!this.trackingClick)return !0;
        if (b.timeStamp - this.lastClickTime <
            this.tapDelay)return this.cancelNextClick = !0;
        if (b.timeStamp - this.trackingClickStart > this.tapTimeout)return !0;
        this.cancelNextClick = !1;
        this.lastClickTime = b.timeStamp;
        e = this.trackingClickStart;
        this.trackingClick = !1;
        this.trackingClickStart = 0;
        a && (g = b.changedTouches[0], f = document.elementFromPoint(g.pageX - window.pageXOffset, g.pageY - window.pageYOffset) || f, f.fastClickScrollParent = this.targetElement.fastClickScrollParent);
        g = f.tagName.toLowerCase();
        if ("label" === g) {
            if (e = this.findControl(f)) {
                this.focus(f);
                if (s)return !1;
                f = e
            }
        } else if (this.needsFocus(f)) {
            if (100 < b.timeStamp - e || n && window.top !== window && "input" === g)return this.targetElement = null, !1;
            this.focus(f);
            this.sendClick(f, b);
            n && "select" === g || (this.targetElement = null, b.preventDefault());
            return !1
        }
        if (n && !c && (e = f.fastClickScrollParent) && e.fastClickLastScrollTop !== e.scrollTop)return !0;
        this.needsClick(f) || (b.preventDefault(), this.sendClick(f, b));
        return !1
    };
    q.prototype.onTouchCancel = function () {
        this.trackingClick = !1;
        this.targetElement = null
    };
    q.prototype.onMouse = function (a) {
        return this.targetElement && !a.forwardedTouchEvent && a.cancelable ? !this.needsClick(this.targetElement) || this.cancelNextClick ? (a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.propagationStopped = !0, a.stopPropagation(), a.preventDefault(), !1) : !0 : !0
    };
    q.prototype.onClick = function (a) {
        if (this.trackingClick)return this.targetElement = null, this.trackingClick = !1, !0;
        if ("submit" === a.target.type && 0 === a.detail)return !0;
        a = this.onMouse(a);
        a || (this.targetElement = null);
        return a
    };
    q.prototype.destroy = function () {
        var a = this.layer;
        s && (a.removeEventListener("mouseover",
            this.onMouse, !0), a.removeEventListener("mousedown", this.onMouse, !0), a.removeEventListener("mouseup", this.onMouse, !0));
        a.removeEventListener("click", this.onClick, !0);
        a.removeEventListener("touchstart", this.onTouchStart, !1);
        a.removeEventListener("touchmove", this.onTouchMove, !1);
        a.removeEventListener("touchend", this.onTouchEnd, !1);
        a.removeEventListener("touchcancel", this.onTouchCancel, !1)
    };
    q.notNeeded = function (a) {
        var c, g;
        if ("undefined" === typeof window.ontouchstart)return !0;
        if (g = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) ||
            [, 0])[1])if (s) {
            if ((c = document.querySelector("meta[name=viewport]")) && (-1 !== c.content.indexOf("user-scalable=no") || 31 < g && document.documentElement.scrollWidth <= window.outerWidth))return !0
        } else return !0;
        return b && (c = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), 10 <= c[1] && 3 <= c[2] && (c = document.querySelector("meta[name=viewport]")) && (-1 !== c.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) || ("none" === a.style.msTouchAction || "manipulation" === a.style.touchAction) ||
        27 <= +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1] && (c = document.querySelector("meta[name=viewport]")) && (-1 !== c.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth) ? !0 : "none" === a.style.touchAction || "manipulation" === a.style.touchAction ? !0 : !1
    };
    q.attach = function (a, b) {
        return new q(a, b)
    };
    "function" === typeof define && "object" === typeof define.amd && define.amd ? define(function () {
        return q
    }) : "undefined" !== typeof module && module.exports ? (module.exports = q.attach,
        module.exports.FastClick = q) : window.FastClick = q
})();
(function (q, p, s, n) {
    function c(b, d, c) {
        return Array.isArray(b) ? (a(b, c[d], c), !0) : !1
    }

    function a(a, b, d) {
        var c;
        if (a)if (a.forEach)a.forEach(b, d); else if (a.length !== n)for (c = 0; c < a.length;)b.call(d, a[c], c, a), c++; else for (c in a)a.hasOwnProperty(c) && b.call(d, a[c], c, a)
    }

    function b(a, b, d) {
        var c = "DEPRECATED METHOD: " + b + "\n" + d + " AT \n";
        return function () {
            var b = Error("get-stack-trace"), b = b && b.stack ? b.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") :
                "Unknown Stack Trace", d = q.console && (q.console.warn || q.console.log);
            d && d.call(q.console, c, b);
            return a.apply(this, arguments)
        }
    }

    function d(a, b, d) {
        b = b.prototype;
        var c;
        c = a.prototype = Object.create(b);
        c.constructor = a;
        c._super = b;
        d && aa(c, d)
    }

    function e(a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }

    function g(a, b) {
        return typeof a == Na ? a.apply(b ? b[0] || n : n, b) : a
    }

    function f(b, d, c) {
        a(k(d), function (a) {
            b.addEventListener(a, c, !1)
        })
    }

    function h(b, d, c) {
        a(k(d), function (a) {
            b.removeEventListener(a, c, !1)
        })
    }

    function l(a,
               b) {
        for (; a;) {
            if (a == b)return !0;
            a = a.parentNode
        }
        return !1
    }

    function k(a) {
        return a.trim().split(/\s+/g)
    }

    function m(a, b, d) {
        if (a.indexOf && !d)return a.indexOf(b);
        for (var c = 0; c < a.length;) {
            if (d && a[c][d] == b || !d && a[c] === b)return c;
            c++
        }
        return -1
    }

    function r(a) {
        return Array.prototype.slice.call(a, 0)
    }

    function E(a, b, d) {
        for (var c = [], e = [], g = 0; g < a.length;) {
            var f = b ? a[g][b] : a[g];
            0 > m(e, f) && c.push(a[g]);
            e[g] = f;
            g++
        }
        d && (c = b ? c.sort(function (a, d) {
            return a[b] > d[b]
        }) : c.sort());
        return c
    }

    function F(a, b) {
        for (var d, c = b[0].toUpperCase() +
            b.slice(1), e = 0; e < Ca.length;) {
            d = (d = Ca[e]) ? d + c : b;
            if (d in a)return d;
            e++
        }
        return n
    }

    function x(a) {
        a = a.ownerDocument || a;
        return a.defaultView || a.parentWindow || q
    }

    function C(a, b) {
        var d = this;
        this.manager = a;
        this.callback = b;
        this.element = a.element;
        this.target = a.options.inputTarget;
        this.domHandler = function (b) {
            g(a.options.enable, [a]) && d.handler(b)
        };
        this.init()
    }

    function v(a) {
        var b = a.options.inputClass;
        return new (b ? b : Ra ? J : Sa ? G : Ea ? L : D)(a, t)
    }

    function t(a, b, d) {
        var c = d.pointers.length, e = d.changedPointers.length, g = b &
            M && 0 === c - e, c = b & (K | T) && 0 === c - e;
        d.isFirst = !!g;
        d.isFinal = !!c;
        g && (a.session = {});
        d.eventType = b;
        b = a.session;
        g = d.pointers;
        c = g.length;
        b.firstInput || (b.firstInput = w(d));
        1 < c && !b.firstMultiple ? b.firstMultiple = w(d) : 1 === c && (b.firstMultiple = !1);
        var e = b.firstInput, f = (c = b.firstMultiple) ? c.center : e.center, h = d.center = y(g);
        d.timeStamp = Aa();
        d.deltaTime = d.timeStamp - e.timeStamp;
        d.angle = z(f, h);
        d.distance = A(f, h);
        var e = d.center, f = b.offsetDelta || {}, h = b.prevDelta || {}, k = b.prevInput || {};
        if (d.eventType === M || k.eventType === K)h =
            b.prevDelta = {x: k.deltaX || 0, y: k.deltaY || 0}, f = b.offsetDelta = {x: e.x, y: e.y};
        d.deltaX = h.x + (e.x - f.x);
        d.deltaY = h.y + (e.y - f.y);
        d.offsetDirection = B(d.deltaX, d.deltaY);
        e = d.deltaX / d.deltaTime || 0;
        f = d.deltaY / d.deltaTime || 0;
        d.overallVelocityX = e;
        d.overallVelocityY = f;
        d.overallVelocity = ea(e) > ea(f) ? e : f;
        d.scale = c ? A(g[0], g[1], wa) / A(c.pointers[0], c.pointers[1], wa) : 1;
        d.rotation = c ? z(g[1], g[0], wa) + z(c.pointers[1], c.pointers[0], wa) : 0;
        d.maxPointers = b.prevInput ? d.pointers.length > b.prevInput.maxPointers ? d.pointers.length : b.prevInput.maxPointers :
            d.pointers.length;
        f = b.lastInterval || d;
        g = d.timeStamp - f.timeStamp;
        d.eventType != T && (g > Ta || f.velocity === n) ? (e = d.deltaX - f.deltaX, f = d.deltaY - f.deltaY, h = e / g || 0, k = f / g || 0, g = h, c = k, h = ea(h) > ea(k) ? h : k, e = B(e, f), b.lastInterval = d) : (h = f.velocity, g = f.velocityX, c = f.velocityY, e = f.direction);
        d.velocity = h;
        d.velocityX = g;
        d.velocityY = c;
        d.direction = e;
        b = a.element;
        l(d.srcEvent.target, b) && (b = d.srcEvent.target);
        d.target = b;
        a.emit("hammer.input", d);
        a.recognize(d);
        a.session.prevInput = d
    }

    function w(a) {
        for (var b = [], d = 0; d < a.pointers.length;)b[d] =
        {clientX: ka(a.pointers[d].clientX), clientY: ka(a.pointers[d].clientY)}, d++;
        return {timeStamp: Aa(), pointers: b, center: y(b), deltaX: a.deltaX, deltaY: a.deltaY}
    }

    function y(a) {
        var b = a.length;
        if (1 === b)return {x: ka(a[0].clientX), y: ka(a[0].clientY)};
        for (var d = 0, c = 0, e = 0; e < b;)d += a[e].clientX, c += a[e].clientY, e++;
        return {x: ka(d / b), y: ka(c / b)}
    }

    function B(a, b) {
        return a === b ? xa : ea(a) >= ea(b) ? 0 > a ? pa : qa : 0 > b ? ra : sa
    }

    function A(a, b, d) {
        d || (d = Fa);
        var c = b[d[0]] - a[d[0]];
        a = b[d[1]] - a[d[1]];
        return Math.sqrt(c * c + a * a)
    }

    function z(a, b, d) {
        d ||
        (d = Fa);
        return 180 * Math.atan2(b[d[1]] - a[d[1]], b[d[0]] - a[d[0]]) / Math.PI
    }

    function D() {
        this.evEl = Ua;
        this.evWin = Va;
        this.pressed = !1;
        C.apply(this, arguments)
    }

    function J() {
        this.evEl = Ga;
        this.evWin = Ha;
        C.apply(this, arguments);
        this.store = this.manager.session.pointerEvents = []
    }

    function u() {
        this.evTarget = Wa;
        this.evWin = Xa;
        this.started = !1;
        C.apply(this, arguments)
    }

    function G() {
        this.evTarget = Ya;
        this.targetIds = {};
        C.apply(this, arguments)
    }

    function I(a, b) {
        var d = r(a.touches), c = this.targetIds;
        if (b & (M | ha) && 1 === d.length)return c[d[0].identifier] = !0, [d, d];
        var e, g = r(a.changedTouches), f = [], h = this.target;
        e = d.filter(function (a) {
            return l(a.target, h)
        });
        if (b === M)for (d = 0; d < e.length;)c[e[d].identifier] = !0, d++;
        for (d = 0; d < g.length;)c[g[d].identifier] && f.push(g[d]), b & (K | T) && delete c[g[d].identifier], d++;
        if (f.length)return [E(e.concat(f), "identifier", !0), f]
    }

    function L() {
        C.apply(this, arguments);
        var a = e(this.handler, this);
        this.touch = new G(this.manager, a);
        this.mouse = new D(this.manager, a);
        this.primaryTouch = null;
        this.lastTouches = []
    }

    function Q(a) {
        a = a.changedPointers[0];
        if (a.identifier === this.primaryTouch) {
            var b = {x: a.clientX, y: a.clientY};
            this.lastTouches.push(b);
            var d = this.lastTouches;
            setTimeout(function () {
                var a = d.indexOf(b);
                -1 < a && d.splice(a, 1)
            }, Za)
        }
    }

    function N(a, b) {
        this.manager = a;
        this.set(b)
    }

    function H(a) {
        if (-1 < a.indexOf(ia))return ia;
        var b = -1 < a.indexOf(ta), d = -1 < a.indexOf(ua);
        return b && d ? ia : b || d ? b ? ta : ua : -1 < a.indexOf(Ba) ? Ba : Ia
    }

    function O(a) {
        this.options = aa({}, this.defaults, a || {});
        this.id = Pa++;
        this.manager = null;
        this.options.enable = this.options.enable === n ? !0 : this.options.enable;
        this.state = ya;
        this.simultaneous = {};
        this.requireFail = []
    }

    function R(a) {
        return a & va ? "cancel" : a & da ? "end" : a & na ? "move" : a & W ? "start" : ""
    }

    function S(a) {
        return a == sa ? "down" : a == ra ? "up" : a == pa ? "left" : a == qa ? "right" : ""
    }

    function la(a, b) {
        var d = b.manager;
        return d ? d.get(a) : a
    }

    function P() {
        O.apply(this, arguments)
    }

    function fa() {
        P.apply(this, arguments);
        this.pY = this.pX = null
    }

    function X() {
        P.apply(this, arguments)
    }

    function U() {
        O.apply(this, arguments);
        this._input = this._timer = null
    }

    function ma() {
        P.apply(this, arguments)
    }

    function Z() {
        P.apply(this,
            arguments)
    }

    function ca() {
        O.apply(this, arguments);
        this.pCenter = this.pTime = !1;
        this._input = this._timer = null;
        this.count = 0
    }

    function V(a, b) {
        b = b || {};
        b.recognizers = b.recognizers === n ? V.defaults.preset : b.recognizers;
        return new ga(a, b)
    }

    function ga(b, d) {
        this.options = aa({}, V.defaults, d || {});
        this.options.inputTarget = this.options.inputTarget || b;
        this.handlers = {};
        this.session = {};
        this.recognizers = [];
        this.oldCssProps = {};
        this.element = b;
        this.input = v(this);
        this.touchAction = new N(this, this.options.touchAction);
        oa(this,
            !0);
        a(this.options.recognizers, function (a) {
            var b = this.add(new a[0](a[1]));
            a[2] && b.recognizeWith(a[2]);
            a[3] && b.requireFailure(a[3])
        }, this)
    }

    function oa(b, d) {
        var c = b.element;
        if (c.style) {
            var e;
            a(b.options.cssProps, function (a, g) {
                e = F(c.style, g);
                d ? (b.oldCssProps[e] = c.style[e], c.style[e] = a) : c.style[e] = b.oldCssProps[e] || ""
            });
            d || (b.oldCssProps = {})
        }
    }

    function Y(a, b) {
        var d = p.createEvent("Event");
        d.initEvent(a, !0, !0);
        d.gesture = b;
        b.target.dispatchEvent(d)
    }

    var Ca = " webkit Moz MS ms o".split(" "), Ma = p.createElement("div"),
        Na = "function", ka = Math.round, ea = Math.abs, Aa = Date.now, aa;
    aa = "function" !== typeof Object.assign ? function (a) {
        if (a === n || null === a)throw new TypeError("Cannot convert undefined or null to object");
        for (var b = Object(a), d = 1; d < arguments.length; d++) {
            var c = arguments[d];
            if (c !== n && null !== c)for (var e in c)c.hasOwnProperty(e) && (b[e] = c[e])
        }
        return b
    } : Object.assign;
    var Da = b(function (a, b, d) {
        for (var c = Object.keys(b), e = 0; e < c.length;) {
            if (!d || d && a[c[e]] === n)a[c[e]] = b[c[e]];
            e++
        }
        return a
    }, "extend", "Use `assign`."), Oa = b(function (a,
                                                    b) {
        return Da(a, b, !0)
    }, "merge", "Use `assign`."), Pa = 1, Qa = /mobile|tablet|ip(ad|hone|od)|android/i, Ea = "ontouchstart"in q, Ra = F(q, "PointerEvent") !== n, Sa = Ea && Qa.test(navigator.userAgent), Ta = 25, M = 1, ha = 2, K = 4, T = 8, xa = 1, pa = 2, qa = 4, ra = 8, sa = 16, $ = pa | qa, ja = ra | sa, Ja = $ | ja, Fa = ["x", "y"], wa = ["clientX", "clientY"];
    C.prototype = {
        handler: function () {
        }, init: function () {
            this.evEl && f(this.element, this.evEl, this.domHandler);
            this.evTarget && f(this.target, this.evTarget, this.domHandler);
            this.evWin && f(x(this.element), this.evWin, this.domHandler)
        },
        destroy: function () {
            this.evEl && h(this.element, this.evEl, this.domHandler);
            this.evTarget && h(this.target, this.evTarget, this.domHandler);
            this.evWin && h(x(this.element), this.evWin, this.domHandler)
        }
    };
    var $a = {mousedown: M, mousemove: ha, mouseup: K}, Ua = "mousedown", Va = "mousemove mouseup";
    d(D, C, {
        handler: function (a) {
            var b = $a[a.type];
            b & M && 0 === a.button && (this.pressed = !0);
            b & ha && 1 !== a.which && (b = K);
            this.pressed && (b & K && (this.pressed = !1), this.callback(this.manager, b, {
                pointers: [a], changedPointers: [a], pointerType: "mouse",
                srcEvent: a
            }))
        }
    });
    var ab = {pointerdown: M, pointermove: ha, pointerup: K, pointercancel: T, pointerout: T}, bb = {
        2: "touch",
        3: "pen",
        4: "mouse",
        5: "kinect"
    }, Ga = "pointerdown", Ha = "pointermove pointerup pointercancel";
    q.MSPointerEvent && !q.PointerEvent && (Ga = "MSPointerDown", Ha = "MSPointerMove MSPointerUp MSPointerCancel");
    d(J, C, {
        handler: function (a) {
            var b = this.store, d = !1, c = a.type.toLowerCase().replace("ms", ""), c = ab[c], e = bb[a.pointerType] || a.pointerType, g = "touch" == e, f = m(b, a.pointerId, "pointerId");
            c & M && (0 === a.button || g) ? 0 >
            f && (b.push(a), f = b.length - 1) : c & (K | T) && (d = !0);
            0 > f || (b[f] = a, this.callback(this.manager, c, {
                pointers: b,
                changedPointers: [a],
                pointerType: e,
                srcEvent: a
            }), d && b.splice(f, 1))
        }
    });
    var cb = {
        touchstart: M,
        touchmove: ha,
        touchend: K,
        touchcancel: T
    }, Wa = "touchstart", Xa = "touchstart touchmove touchend touchcancel";
    d(u, C, {
        handler: function (a) {
            var b = cb[a.type];
            b === M && (this.started = !0);
            if (this.started) {
                var d;
                d = r(a.touches);
                var c = r(a.changedTouches);
                b & (K | T) && (d = E(d.concat(c), "identifier", !0));
                d = [d, c];
                b & (K | T) && 0 === d[0].length - d[1].length &&
                (this.started = !1);
                this.callback(this.manager, b, {
                    pointers: d[0],
                    changedPointers: d[1],
                    pointerType: "touch",
                    srcEvent: a
                })
            }
        }
    });
    var db = {
        touchstart: M,
        touchmove: ha,
        touchend: K,
        touchcancel: T
    }, Ya = "touchstart touchmove touchend touchcancel";
    d(G, C, {
        handler: function (a) {
            var b = db[a.type], d = I.call(this, a, b);
            d && this.callback(this.manager, b, {
                pointers: d[0],
                changedPointers: d[1],
                pointerType: "touch",
                srcEvent: a
            })
        }
    });
    var Za = 2500;
    d(L, C, {
        handler: function (a, b, d) {
            var c = "touch" == d.pointerType, e = "mouse" == d.pointerType;
            if (!(e && d.sourceCapabilities &&
                d.sourceCapabilities.firesTouchEvents)) {
                if (c)b & M ? (this.primaryTouch = d.changedPointers[0].identifier, Q.call(this, d)) : b & (K | T) && Q.call(this, d); else {
                    if (c = e)a:{
                        for (var c = d.srcEvent.clientX, e = d.srcEvent.clientY, g = 0; g < this.lastTouches.length; g++) {
                            var f = this.lastTouches[g], h = Math.abs(c - f.x), f = Math.abs(e - f.y);
                            if (25 >= h && 25 >= f) {
                                c = !0;
                                break a
                            }
                        }
                        c = !1
                    }
                    if (c)return
                }
                this.callback(a, b, d)
            }
        }, destroy: function () {
            this.touch.destroy();
            this.mouse.destroy()
        }
    });
    var Ka = F(Ma.style, "touchAction"), La = Ka !== n, Ia = "auto", Ba = "manipulation",
        ia = "none", ta = "pan-x", ua = "pan-y", za = function () {
            if (!La)return !1;
            var a = {}, b = q.CSS && q.CSS.supports;
            "auto;manipulation;pan-y;pan-x;pan-x pan-y;none".split(";").forEach(function (d) {
                a[d] = b ? q.CSS.supports("touch-action", d) : !0
            });
            return a
        }();
    N.prototype = {
        set: function (a) {
            "compute" == a && (a = this.compute());
            La && (this.manager.element.style && za[a]) && (this.manager.element.style[Ka] = a);
            this.actions = a.toLowerCase().trim()
        }, update: function () {
            this.set(this.manager.options.touchAction)
        }, compute: function () {
            var b = [];
            a(this.manager.recognizers,
                function (a) {
                    g(a.options.enable, [a]) && (b = b.concat(a.getTouchAction()))
                });
            return H(b.join(" "))
        }, preventDefaults: function (a) {
            var b = a.srcEvent, d = a.offsetDirection;
            if (this.manager.session.prevented)b.preventDefault(); else {
                var c = this.actions, e = -1 < c.indexOf(ia) && !za[ia], g = -1 < c.indexOf(ua) && !za[ua], c = -1 < c.indexOf(ta) && !za[ta];
                if (e) {
                    var f = 2 > a.distance, h = 250 > a.deltaTime;
                    if (1 === a.pointers.length && f && h)return
                }
                if (!c || !g)if (e || g && d & $ || c && d & ja)return this.preventSrc(b)
            }
        }, preventSrc: function (a) {
            this.manager.session.prevented = !0;
            a.preventDefault()
        }
    };
    var ya = 1, W = 2, na = 4, da = 8, ba = da, va = 16;
    O.prototype = {
        defaults: {}, set: function (a) {
            aa(this.options, a);
            this.manager && this.manager.touchAction.update();
            return this
        }, recognizeWith: function (a) {
            if (c(a, "recognizeWith", this))return this;
            var b = this.simultaneous;
            a = la(a, this);
            b[a.id] || (b[a.id] = a, a.recognizeWith(this));
            return this
        }, dropRecognizeWith: function (a) {
            if (c(a, "dropRecognizeWith", this))return this;
            a = la(a, this);
            delete this.simultaneous[a.id];
            return this
        }, requireFailure: function (a) {
            if (c(a,
                    "requireFailure", this))return this;
            var b = this.requireFail;
            a = la(a, this);
            -1 === m(b, a) && (b.push(a), a.requireFailure(this));
            return this
        }, dropRequireFailure: function (a) {
            if (c(a, "dropRequireFailure", this))return this;
            a = la(a, this);
            a = m(this.requireFail, a);
            -1 < a && this.requireFail.splice(a, 1);
            return this
        }, hasRequireFailures: function () {
            return 0 < this.requireFail.length
        }, canRecognizeWith: function (a) {
            return !!this.simultaneous[a.id]
        }, emit: function (a) {
            function b(c) {
                d.manager.emit(c, a)
            }

            var d = this, c = this.state;
            c < da &&
            b(d.options.event + R(c));
            b(d.options.event);
            a.additionalEvent && b(a.additionalEvent);
            c >= da && b(d.options.event + R(c))
        }, tryEmit: function (a) {
            if (this.canEmit())return this.emit(a);
            this.state = 32
        }, canEmit: function () {
            for (var a = 0; a < this.requireFail.length;) {
                if (!(this.requireFail[a].state & (32 | ya)))return !1;
                a++
            }
            return !0
        }, recognize: function (a) {
            a = aa({}, a);
            g(this.options.enable, [this, a]) ? (this.state & (ba | va | 32) && (this.state = ya), this.state = this.process(a), this.state & (W | na | da | va) && this.tryEmit(a)) : (this.reset(), this.state =
                32)
        }, process: function (a) {
        }, getTouchAction: function () {
        }, reset: function () {
        }
    };
    d(P, O, {
        defaults: {pointers: 1}, attrTest: function (a) {
            var b = this.options.pointers;
            return 0 === b || a.pointers.length === b
        }, process: function (a) {
            var b = this.state, d = a.eventType, c = b & (W | na);
            a = this.attrTest(a);
            return c && (d & T || !a) ? b | va : c || a ? d & K ? b | da : b & W ? b | na : W : 32
        }
    });
    d(fa, P, {
        defaults: {event: "pan", threshold: 10, pointers: 1, direction: Ja}, getTouchAction: function () {
            var a = this.options.direction, b = [];
            a & $ && b.push(ua);
            a & ja && b.push(ta);
            return b
        }, directionTest: function (a) {
            var b =
                this.options, d = !0, c = a.distance, e = a.direction, g = a.deltaX, f = a.deltaY;
            e & b.direction || (b.direction & $ ? (e = 0 === g ? xa : 0 > g ? pa : qa, d = g != this.pX, c = Math.abs(a.deltaX)) : (e = 0 === f ? xa : 0 > f ? ra : sa, d = f != this.pY, c = Math.abs(a.deltaY)));
            a.direction = e;
            return d && c > b.threshold && e & b.direction
        }, attrTest: function (a) {
            return P.prototype.attrTest.call(this, a) && (this.state & W || !(this.state & W) && this.directionTest(a))
        }, emit: function (a) {
            this.pX = a.deltaX;
            this.pY = a.deltaY;
            var b = S(a.direction);
            b && (a.additionalEvent = this.options.event + b);
            this._super.emit.call(this, a)
        }
    });
    d(X, P, {
        defaults: {event: "pinch", threshold: 0, pointers: 2}, getTouchAction: function () {
            return [ia]
        }, attrTest: function (a) {
            return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & W)
        }, emit: function (a) {
            1 !== a.scale && (a.additionalEvent = this.options.event + (1 > a.scale ? "in" : "out"));
            this._super.emit.call(this, a)
        }
    });
    d(U, O, {
        defaults: {event: "press", pointers: 1, time: 0.001, threshold: 9}, getTouchAction: function () {
            return [Ia]
        }, process: function (a) {
            var b =
                this.options, d = a.pointers.length === b.pointers, b = a.distance < b.threshold;
            this._input = a;
            if (b && d) {
                if (a.eventType & M)return this.reset(), ba;
                if (a.eventType & K)return ba
            } else this.reset();
            return 32
        }, reset: function () {
            clearTimeout(this._timer)
        }, emit: function (a) {
            this.state === ba && (a && a.eventType & K ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = Aa(), this.manager.emit(this.options.event, this._input)))
        }
    });
    d(ma, P, {
        defaults: {event: "rotate", threshold: 0, pointers: 2}, getTouchAction: function () {
            return [ia]
        },
        attrTest: function (a) {
            return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & W)
        }
    });
    d(Z, P, {
        defaults: {event: "swipe", threshold: 10, velocity: 0.3, direction: $ | ja, pointers: 1},
        getTouchAction: function () {
            return fa.prototype.getTouchAction.call(this)
        },
        attrTest: function (a) {
            var b = this.options.direction, d;
            b & ($ | ja) ? d = a.overallVelocity : b & $ ? d = a.overallVelocityX : b & ja && (d = a.overallVelocityY);
            return this._super.attrTest.call(this, a) && b & a.offsetDirection && a.distance > this.options.threshold &&
                a.maxPointers == this.options.pointers && ea(d) > this.options.velocity && a.eventType & K
        },
        emit: function (a) {
            var b = S(a.offsetDirection);
            b && this.manager.emit(this.options.event + b, a);
            this.manager.emit(this.options.event, a)
        }
    });
    d(ca, O, {
        defaults: {event: "tap", pointers: 1, taps: 1, interval: 300, time: 250, threshold: 9, posThreshold: 10},
        getTouchAction: function () {
            return [Ba]
        },
        process: function (a) {
            var b = this.options, d = a.pointers.length === b.pointers, c = a.distance < b.threshold, g = a.deltaTime < b.time;
            this.reset();
            if (a.eventType & M && 0 ===
                this.count)return this.failTimeout();
            if (c && g && d) {
                if (a.eventType != K)return this.failTimeout();
                d = this.pTime ? a.timeStamp - this.pTime < b.interval : !0;
                c = !this.pCenter || A(this.pCenter, a.center) < b.posThreshold;
                this.pTime = a.timeStamp;
                this.pCenter = a.center;
                this.count = c && d ? this.count + 1 : 1;
                this._input = a;
                if (0 === this.count % b.taps)return this.hasRequireFailures() ? (this._timer = setTimeout(e(function () {
                    this.state = ba;
                    this.tryEmit()
                }, this), b.interval), W) : ba
            }
            return 32
        },
        failTimeout: function () {
            this._timer = setTimeout(e(function () {
                this.state =
                    32
            }, this), this.options.interval);
            return 32
        },
        reset: function () {
            clearTimeout(this._timer)
        },
        emit: function () {
            this.state == ba && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
        }
    });
    V.VERSION = "2.0.8";
    V.defaults = {
        domEvents: !1,
        touchAction: "compute",
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [[ma, {enable: !1}], [X, {enable: !1}, ["rotate"]], [Z, {direction: $}], [fa, {direction: $}, ["swipe"]], [U]],
        cssProps: {
            userSelect: "none", touchSelect: "none", touchCallout: "none", contentZooming: "none",
            userDrag: "none", tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    ga.prototype = {
        set: function (a) {
            aa(this.options, a);
            a.touchAction && this.touchAction.update();
            a.inputTarget && (this.input.destroy(), this.input.target = a.inputTarget, this.input.init());
            return this
        }, stop: function (a) {
            this.session.stopped = a ? 2 : 1
        }, recognize: function (a) {
            var b = this.session;
            if (!b.stopped) {
                this.touchAction.preventDefaults(a);
                var d, c = this.recognizers, e = b.curRecognizer;
                if (!e || e && e.state & ba)e = b.curRecognizer = null;
                for (var g = 0; g < c.length;)d = c[g], 2 ===
                b.stopped || e && d != e && !d.canRecognizeWith(e) ? d.reset() : d.recognize(a), !e && d.state & (W | na | da) && (e = b.curRecognizer = d), g++
            }
        }, get: function (a) {
            if (a instanceof O)return a;
            for (var b = this.recognizers, d = 0; d < b.length; d++)if (b[d].options.event == a)return b[d];
            return null
        }, add: function (a) {
            if (c(a, "add", this))return this;
            var b = this.get(a.options.event);
            b && this.remove(b);
            this.recognizers.push(a);
            a.manager = this;
            this.touchAction.update();
            return a
        }, remove: function (a) {
            if (c(a, "remove", this))return this;
            if (a = this.get(a)) {
                var b =
                    this.recognizers;
                a = m(b, a);
                -1 !== a && (b.splice(a, 1), this.touchAction.update())
            }
            return this
        }, on: function (b, d) {
            if (b !== n && d !== n) {
                var c = this.handlers;
                a(k(b), function (a) {
                    c[a] = c[a] || [];
                    c[a].push(d)
                });
                return this
            }
        }, off: function (b, d) {
            if (b !== n) {
                var c = this.handlers;
                a(k(b), function (a) {
                    d ? c[a] && c[a].splice(m(c[a], d), 1) : delete c[a]
                });
                return this
            }
        }, emit: function (a, b) {
            this.options.domEvents && Y(a, b);
            var d = this.handlers[a] && this.handlers[a].slice();
            if (d && d.length) {
                b.type = a;
                b.preventDefault = function () {
                    b.srcEvent.preventDefault()
                };
                for (var c = 0; c < d.length;)d[c](b), c++
            }
        }, destroy: function () {
            this.element && oa(this, !1);
            this.handlers = {};
            this.session = {};
            this.input.destroy();
            this.element = null
        }
    };
    aa(V, {
        INPUT_START: M,
        INPUT_MOVE: ha,
        INPUT_END: K,
        INPUT_CANCEL: T,
        STATE_POSSIBLE: ya,
        STATE_BEGAN: W,
        STATE_CHANGED: na,
        STATE_ENDED: da,
        STATE_RECOGNIZED: ba,
        STATE_CANCELLED: va,
        STATE_FAILED: 32,
        DIRECTION_NONE: xa,
        DIRECTION_LEFT: pa,
        DIRECTION_RIGHT: qa,
        DIRECTION_UP: ra,
        DIRECTION_DOWN: sa,
        DIRECTION_HORIZONTAL: $,
        DIRECTION_VERTICAL: ja,
        DIRECTION_ALL: Ja,
        Manager: ga,
        Input: C,
        TouchAction: N,
        TouchInput: G,
        MouseInput: D,
        PointerEventInput: J,
        TouchMouseInput: L,
        SingleTouchInput: u,
        Recognizer: O,
        AttrRecognizer: P,
        Tap: ca,
        Pan: fa,
        Swipe: Z,
        Pinch: X,
        Rotate: ma,
        Press: U,
        on: f,
        off: h,
        each: a,
        merge: Oa,
        extend: Da,
        assign: aa,
        inherit: d,
        bindFn: e,
        prefixed: F
    });
    ("undefined" !== typeof q ? q : "undefined" !== typeof self ? self : {}).Hammer = V;
    "function" === typeof define && define.amd ? define(function () {
        return V
    }) : "undefined" != typeof module && module.exports ? module.exports = V : q[s] = V
})(window, document, "Hammer");
(function (q, p) {
    if ("object" === typeof exports && "object" === typeof module)module.exports = p(); else if ("function" === typeof define && define.amd)define([], p); else {
        var s = p(), n;
        for (n in s)("object" === typeof exports ? exports : q)[n] = s[n]
    }
})(this, function () {
    return function (q) {
        function p(n) {
            if (s[n])return s[n].exports;
            var c = s[n] = {exports: {}, id: n, loaded: !1};
            q[n].call(c.exports, c, c.exports, p);
            c.loaded = !0;
            return c.exports
        }

        var s = {};
        p.m = q;
        p.c = s;
        p.p = "";
        return p(0)
    }([function (q, p, s) {
        p.glMatrix = s(1);
        p.mat2 = s(2);
        p.mat2d = s(3);
        p.mat3 = s(4);
        p.mat4 = s(5);
        p.quat = s(6);
        p.vec2 = s(9);
        p.vec3 = s(7);
        p.vec4 = s(8)
    }, function (q, p) {
        var s = {EPSILON: 1E-6};
        s.ARRAY_TYPE = "undefined" !== typeof Float32Array ? Float32Array : Array;
        s.RANDOM = Math.random;
        s.ENABLE_SIMD = !1;
        s.SIMD_AVAILABLE = s.ARRAY_TYPE === this.Float32Array && "SIMD"in this;
        s.USE_SIMD = s.ENABLE_SIMD && s.SIMD_AVAILABLE;
        s.setMatrixArrayType = function (c) {
            s.ARRAY_TYPE = c
        };
        var n = Math.PI / 180;
        s.toRadian = function (c) {
            return c * n
        };
        s.equals = function (c, a) {
            return Math.abs(c - a) <= s.EPSILON * Math.max(1, Math.abs(c), Math.abs(a))
        };
        q.exports = s
    }, function (q, p, s) {
        var n = s(1);
        p = {
            create: function () {
                var c = new n.ARRAY_TYPE(4);
                c[0] = 1;
                c[1] = 0;
                c[2] = 0;
                c[3] = 1;
                return c
            }, clone: function (c) {
                var a = new n.ARRAY_TYPE(4);
                a[0] = c[0];
                a[1] = c[1];
                a[2] = c[2];
                a[3] = c[3];
                return a
            }, copy: function (c, a) {
                c[0] = a[0];
                c[1] = a[1];
                c[2] = a[2];
                c[3] = a[3];
                return c
            }, identity: function (c) {
                c[0] = 1;
                c[1] = 0;
                c[2] = 0;
                c[3] = 1;
                return c
            }, fromValues: function (c, a, b, d) {
                var e = new n.ARRAY_TYPE(4);
                e[0] = c;
                e[1] = a;
                e[2] = b;
                e[3] = d;
                return e
            }, set: function (c, a, b, d, e) {
                c[0] = a;
                c[1] = b;
                c[2] = d;
                c[3] = e;
                return c
            },
            transpose: function (c, a) {
                if (c === a) {
                    var b = a[1];
                    c[1] = a[2];
                    c[2] = b
                } else c[0] = a[0], c[1] = a[2], c[2] = a[1], c[3] = a[3];
                return c
            }, invert: function (c, a) {
                var b = a[0], d = a[1], e = a[2], g = a[3], f = b * g - e * d;
                if (!f)return null;
                f = 1 / f;
                c[0] = g * f;
                c[1] = -d * f;
                c[2] = -e * f;
                c[3] = b * f;
                return c
            }, adjoint: function (c, a) {
                var b = a[0];
                c[0] = a[3];
                c[1] = -a[1];
                c[2] = -a[2];
                c[3] = b;
                return c
            }, determinant: function (c) {
                return c[0] * c[3] - c[2] * c[1]
            }, multiply: function (c, a, b) {
                var d = a[0], e = a[1], g = a[2];
                a = a[3];
                var f = b[0], h = b[1], l = b[2];
                b = b[3];
                c[0] = d * f + g * h;
                c[1] = e * f + a * h;
                c[2] = d * l + g * b;
                c[3] = e * l + a * b;
                return c
            }
        };
        p.mul = p.multiply;
        p.rotate = function (c, a, b) {
            var d = a[0], e = a[1], g = a[2];
            a = a[3];
            var f = Math.sin(b);
            b = Math.cos(b);
            c[0] = d * b + g * f;
            c[1] = e * b + a * f;
            c[2] = d * -f + g * b;
            c[3] = e * -f + a * b;
            return c
        };
        p.scale = function (c, a, b) {
            var d = a[1], e = a[2], g = a[3], f = b[0];
            b = b[1];
            c[0] = a[0] * f;
            c[1] = d * f;
            c[2] = e * b;
            c[3] = g * b;
            return c
        };
        p.fromRotation = function (c, a) {
            var b = Math.sin(a), d = Math.cos(a);
            c[0] = d;
            c[1] = b;
            c[2] = -b;
            c[3] = d;
            return c
        };
        p.fromScaling = function (c, a) {
            c[0] = a[0];
            c[1] = 0;
            c[2] = 0;
            c[3] = a[1];
            return c
        };
        p.str = function (c) {
            return "mat2(" +
                c[0] + ", " + c[1] + ", " + c[2] + ", " + c[3] + ")"
        };
        p.frob = function (c) {
            return Math.sqrt(Math.pow(c[0], 2) + Math.pow(c[1], 2) + Math.pow(c[2], 2) + Math.pow(c[3], 2))
        };
        p.LDU = function (c, a, b, d) {
            c[2] = d[2] / d[0];
            b[0] = d[0];
            b[1] = d[1];
            b[3] = d[3] - c[2] * b[1];
            return [c, a, b]
        };
        p.add = function (c, a, b) {
            c[0] = a[0] + b[0];
            c[1] = a[1] + b[1];
            c[2] = a[2] + b[2];
            c[3] = a[3] + b[3];
            return c
        };
        p.subtract = function (c, a, b) {
            c[0] = a[0] - b[0];
            c[1] = a[1] - b[1];
            c[2] = a[2] - b[2];
            c[3] = a[3] - b[3];
            return c
        };
        p.sub = p.subtract;
        p.exactEquals = function (c, a) {
            return c[0] === a[0] && c[1] ===
                a[1] && c[2] === a[2] && c[3] === a[3]
        };
        p.equals = function (c, a) {
            var b = c[0], d = c[1], e = c[2], g = c[3], f = a[0], h = a[1], l = a[2], k = a[3];
            return Math.abs(b - f) <= n.EPSILON * Math.max(1, Math.abs(b), Math.abs(f)) && Math.abs(d - h) <= n.EPSILON * Math.max(1, Math.abs(d), Math.abs(h)) && Math.abs(e - l) <= n.EPSILON * Math.max(1, Math.abs(e), Math.abs(l)) && Math.abs(g - k) <= n.EPSILON * Math.max(1, Math.abs(g), Math.abs(k))
        };
        p.multiplyScalar = function (c, a, b) {
            c[0] = a[0] * b;
            c[1] = a[1] * b;
            c[2] = a[2] * b;
            c[3] = a[3] * b;
            return c
        };
        p.multiplyScalarAndAdd = function (c, a, b, d) {
            c[0] =
                a[0] + b[0] * d;
            c[1] = a[1] + b[1] * d;
            c[2] = a[2] + b[2] * d;
            c[3] = a[3] + b[3] * d;
            return c
        };
        q.exports = p
    }, function (q, p, s) {
        var n = s(1);
        p = {
            create: function () {
                var c = new n.ARRAY_TYPE(6);
                c[0] = 1;
                c[1] = 0;
                c[2] = 0;
                c[3] = 1;
                c[4] = 0;
                c[5] = 0;
                return c
            }, clone: function (c) {
                var a = new n.ARRAY_TYPE(6);
                a[0] = c[0];
                a[1] = c[1];
                a[2] = c[2];
                a[3] = c[3];
                a[4] = c[4];
                a[5] = c[5];
                return a
            }, copy: function (c, a) {
                c[0] = a[0];
                c[1] = a[1];
                c[2] = a[2];
                c[3] = a[3];
                c[4] = a[4];
                c[5] = a[5];
                return c
            }, identity: function (c) {
                c[0] = 1;
                c[1] = 0;
                c[2] = 0;
                c[3] = 1;
                c[4] = 0;
                c[5] = 0;
                return c
            }, fromValues: function (c,
                                     a, b, d, e, g) {
                var f = new n.ARRAY_TYPE(6);
                f[0] = c;
                f[1] = a;
                f[2] = b;
                f[3] = d;
                f[4] = e;
                f[5] = g;
                return f
            }, set: function (c, a, b, d, e, g, f) {
                c[0] = a;
                c[1] = b;
                c[2] = d;
                c[3] = e;
                c[4] = g;
                c[5] = f;
                return c
            }, invert: function (c, a) {
                var b = a[0], d = a[1], e = a[2], g = a[3], f = a[4], h = a[5], l = b * g - d * e;
                if (!l)return null;
                l = 1 / l;
                c[0] = g * l;
                c[1] = -d * l;
                c[2] = -e * l;
                c[3] = b * l;
                c[4] = (e * h - g * f) * l;
                c[5] = (d * f - b * h) * l;
                return c
            }, determinant: function (c) {
                return c[0] * c[3] - c[1] * c[2]
            }, multiply: function (c, a, b) {
                var d = a[0], e = a[1], g = a[2], f = a[3], h = a[4];
                a = a[5];
                var l = b[0], k = b[1], m = b[2], r =
                    b[3], n = b[4];
                b = b[5];
                c[0] = d * l + g * k;
                c[1] = e * l + f * k;
                c[2] = d * m + g * r;
                c[3] = e * m + f * r;
                c[4] = d * n + g * b + h;
                c[5] = e * n + f * b + a;
                return c
            }
        };
        p.mul = p.multiply;
        p.rotate = function (c, a, b) {
            var d = a[0], e = a[1], g = a[2], f = a[3], h = a[4];
            a = a[5];
            var l = Math.sin(b);
            b = Math.cos(b);
            c[0] = d * b + g * l;
            c[1] = e * b + f * l;
            c[2] = d * -l + g * b;
            c[3] = e * -l + f * b;
            c[4] = h;
            c[5] = a;
            return c
        };
        p.scale = function (c, a, b) {
            var d = a[1], e = a[2], g = a[3], f = a[4], h = a[5], l = b[0];
            b = b[1];
            c[0] = a[0] * l;
            c[1] = d * l;
            c[2] = e * b;
            c[3] = g * b;
            c[4] = f;
            c[5] = h;
            return c
        };
        p.translate = function (c, a, b) {
            var d = a[0], e = a[1], g = a[2],
                f = a[3], h = a[4];
            a = a[5];
            var l = b[0];
            b = b[1];
            c[0] = d;
            c[1] = e;
            c[2] = g;
            c[3] = f;
            c[4] = d * l + g * b + h;
            c[5] = e * l + f * b + a;
            return c
        };
        p.fromRotation = function (c, a) {
            var b = Math.sin(a), d = Math.cos(a);
            c[0] = d;
            c[1] = b;
            c[2] = -b;
            c[3] = d;
            c[4] = 0;
            c[5] = 0;
            return c
        };
        p.fromScaling = function (c, a) {
            c[0] = a[0];
            c[1] = 0;
            c[2] = 0;
            c[3] = a[1];
            c[4] = 0;
            c[5] = 0;
            return c
        };
        p.fromTranslation = function (c, a) {
            c[0] = 1;
            c[1] = 0;
            c[2] = 0;
            c[3] = 1;
            c[4] = a[0];
            c[5] = a[1];
            return c
        };
        p.str = function (c) {
            return "mat2d(" + c[0] + ", " + c[1] + ", " + c[2] + ", " + c[3] + ", " + c[4] + ", " + c[5] + ")"
        };
        p.frob = function (c) {
            return Math.sqrt(Math.pow(c[0],
                    2) + Math.pow(c[1], 2) + Math.pow(c[2], 2) + Math.pow(c[3], 2) + Math.pow(c[4], 2) + Math.pow(c[5], 2) + 1)
        };
        p.add = function (c, a, b) {
            c[0] = a[0] + b[0];
            c[1] = a[1] + b[1];
            c[2] = a[2] + b[2];
            c[3] = a[3] + b[3];
            c[4] = a[4] + b[4];
            c[5] = a[5] + b[5];
            return c
        };
        p.subtract = function (c, a, b) {
            c[0] = a[0] - b[0];
            c[1] = a[1] - b[1];
            c[2] = a[2] - b[2];
            c[3] = a[3] - b[3];
            c[4] = a[4] - b[4];
            c[5] = a[5] - b[5];
            return c
        };
        p.sub = p.subtract;
        p.multiplyScalar = function (c, a, b) {
            c[0] = a[0] * b;
            c[1] = a[1] * b;
            c[2] = a[2] * b;
            c[3] = a[3] * b;
            c[4] = a[4] * b;
            c[5] = a[5] * b;
            return c
        };
        p.multiplyScalarAndAdd = function (c,
                                           a, b, d) {
            c[0] = a[0] + b[0] * d;
            c[1] = a[1] + b[1] * d;
            c[2] = a[2] + b[2] * d;
            c[3] = a[3] + b[3] * d;
            c[4] = a[4] + b[4] * d;
            c[5] = a[5] + b[5] * d;
            return c
        };
        p.exactEquals = function (c, a) {
            return c[0] === a[0] && c[1] === a[1] && c[2] === a[2] && c[3] === a[3] && c[4] === a[4] && c[5] === a[5]
        };
        p.equals = function (c, a) {
            var b = c[0], d = c[1], e = c[2], g = c[3], f = c[4], h = c[5], l = a[0], k = a[1], m = a[2], r = a[3], E = a[4], p = a[5];
            return Math.abs(b - l) <= n.EPSILON * Math.max(1, Math.abs(b), Math.abs(l)) && Math.abs(d - k) <= n.EPSILON * Math.max(1, Math.abs(d), Math.abs(k)) && Math.abs(e - m) <= n.EPSILON * Math.max(1,
                    Math.abs(e), Math.abs(m)) && Math.abs(g - r) <= n.EPSILON * Math.max(1, Math.abs(g), Math.abs(r)) && Math.abs(f - E) <= n.EPSILON * Math.max(1, Math.abs(f), Math.abs(E)) && Math.abs(h - p) <= n.EPSILON * Math.max(1, Math.abs(h), Math.abs(p))
        };
        q.exports = p
    }, function (q, p, s) {
        var n = s(1);
        p = {
            create: function () {
                var c = new n.ARRAY_TYPE(9);
                c[0] = 1;
                c[1] = 0;
                c[2] = 0;
                c[3] = 0;
                c[4] = 1;
                c[5] = 0;
                c[6] = 0;
                c[7] = 0;
                c[8] = 1;
                return c
            }, fromMat4: function (c, a) {
                c[0] = a[0];
                c[1] = a[1];
                c[2] = a[2];
                c[3] = a[4];
                c[4] = a[5];
                c[5] = a[6];
                c[6] = a[8];
                c[7] = a[9];
                c[8] = a[10];
                return c
            }, clone: function (c) {
                var a =
                    new n.ARRAY_TYPE(9);
                a[0] = c[0];
                a[1] = c[1];
                a[2] = c[2];
                a[3] = c[3];
                a[4] = c[4];
                a[5] = c[5];
                a[6] = c[6];
                a[7] = c[7];
                a[8] = c[8];
                return a
            }, copy: function (c, a) {
                c[0] = a[0];
                c[1] = a[1];
                c[2] = a[2];
                c[3] = a[3];
                c[4] = a[4];
                c[5] = a[5];
                c[6] = a[6];
                c[7] = a[7];
                c[8] = a[8];
                return c
            }, fromValues: function (c, a, b, d, e, g, f, h, l) {
                var k = new n.ARRAY_TYPE(9);
                k[0] = c;
                k[1] = a;
                k[2] = b;
                k[3] = d;
                k[4] = e;
                k[5] = g;
                k[6] = f;
                k[7] = h;
                k[8] = l;
                return k
            }, set: function (c, a, b, d, e, g, f, h, l, k) {
                c[0] = a;
                c[1] = b;
                c[2] = d;
                c[3] = e;
                c[4] = g;
                c[5] = f;
                c[6] = h;
                c[7] = l;
                c[8] = k;
                return c
            }, identity: function (c) {
                c[0] =
                    1;
                c[1] = 0;
                c[2] = 0;
                c[3] = 0;
                c[4] = 1;
                c[5] = 0;
                c[6] = 0;
                c[7] = 0;
                c[8] = 1;
                return c
            }, transpose: function (c, a) {
                if (c === a) {
                    var b = a[1], d = a[2], e = a[5];
                    c[1] = a[3];
                    c[2] = a[6];
                    c[3] = b;
                    c[5] = a[7];
                    c[6] = d;
                    c[7] = e
                } else c[0] = a[0], c[1] = a[3], c[2] = a[6], c[3] = a[1], c[4] = a[4], c[5] = a[7], c[6] = a[2], c[7] = a[5], c[8] = a[8];
                return c
            }, invert: function (c, a) {
                var b = a[0], d = a[1], e = a[2], g = a[3], f = a[4], h = a[5], l = a[6], k = a[7], m = a[8], r = m * f - h * k, n = -m * g + h * l, p = k * g - f * l, x = b * r + d * n + e * p;
                if (!x)return null;
                x = 1 / x;
                c[0] = r * x;
                c[1] = (-m * d + e * k) * x;
                c[2] = (h * d - e * f) * x;
                c[3] = n * x;
                c[4] = (m *
                    b - e * l) * x;
                c[5] = (-h * b + e * g) * x;
                c[6] = p * x;
                c[7] = (-k * b + d * l) * x;
                c[8] = (f * b - d * g) * x;
                return c
            }, adjoint: function (c, a) {
                var b = a[0], d = a[1], e = a[2], g = a[3], f = a[4], h = a[5], l = a[6], k = a[7], m = a[8];
                c[0] = f * m - h * k;
                c[1] = e * k - d * m;
                c[2] = d * h - e * f;
                c[3] = h * l - g * m;
                c[4] = b * m - e * l;
                c[5] = e * g - b * h;
                c[6] = g * k - f * l;
                c[7] = d * l - b * k;
                c[8] = b * f - d * g;
                return c
            }, determinant: function (c) {
                var a = c[3], b = c[4], d = c[5], e = c[6], g = c[7], f = c[8];
                return c[0] * (f * b - d * g) + c[1] * (-f * a + d * e) + c[2] * (g * a - b * e)
            }, multiply: function (c, a, b) {
                var d = a[0], e = a[1], g = a[2], f = a[3], h = a[4], l = a[5], k = a[6], m =
                    a[7];
                a = a[8];
                var r = b[0], n = b[1], p = b[2], x = b[3], q = b[4], s = b[5], t = b[6], w = b[7];
                b = b[8];
                c[0] = r * d + n * f + p * k;
                c[1] = r * e + n * h + p * m;
                c[2] = r * g + n * l + p * a;
                c[3] = x * d + q * f + s * k;
                c[4] = x * e + q * h + s * m;
                c[5] = x * g + q * l + s * a;
                c[6] = t * d + w * f + b * k;
                c[7] = t * e + w * h + b * m;
                c[8] = t * g + w * l + b * a;
                return c
            }
        };
        p.mul = p.multiply;
        p.translate = function (c, a, b) {
            var d = a[0], e = a[1], g = a[2], f = a[3], h = a[4], l = a[5], k = a[6], m = a[7];
            a = a[8];
            var r = b[0];
            b = b[1];
            c[0] = d;
            c[1] = e;
            c[2] = g;
            c[3] = f;
            c[4] = h;
            c[5] = l;
            c[6] = r * d + b * f + k;
            c[7] = r * e + b * h + m;
            c[8] = r * g + b * l + a;
            return c
        };
        p.rotate = function (c, a, b) {
            var d =
                a[0], e = a[1], g = a[2], f = a[3], h = a[4], l = a[5], k = a[6], m = a[7];
            a = a[8];
            var r = Math.sin(b);
            b = Math.cos(b);
            c[0] = b * d + r * f;
            c[1] = b * e + r * h;
            c[2] = b * g + r * l;
            c[3] = b * f - r * d;
            c[4] = b * h - r * e;
            c[5] = b * l - r * g;
            c[6] = k;
            c[7] = m;
            c[8] = a;
            return c
        };
        p.scale = function (c, a, b) {
            var d = b[0];
            b = b[1];
            c[0] = d * a[0];
            c[1] = d * a[1];
            c[2] = d * a[2];
            c[3] = b * a[3];
            c[4] = b * a[4];
            c[5] = b * a[5];
            c[6] = a[6];
            c[7] = a[7];
            c[8] = a[8];
            return c
        };
        p.fromTranslation = function (c, a) {
            c[0] = 1;
            c[1] = 0;
            c[2] = 0;
            c[3] = 0;
            c[4] = 1;
            c[5] = 0;
            c[6] = a[0];
            c[7] = a[1];
            c[8] = 1;
            return c
        };
        p.fromRotation = function (c, a) {
            var b =
                Math.sin(a), d = Math.cos(a);
            c[0] = d;
            c[1] = b;
            c[2] = 0;
            c[3] = -b;
            c[4] = d;
            c[5] = 0;
            c[6] = 0;
            c[7] = 0;
            c[8] = 1;
            return c
        };
        p.fromScaling = function (c, a) {
            c[0] = a[0];
            c[1] = 0;
            c[2] = 0;
            c[3] = 0;
            c[4] = a[1];
            c[5] = 0;
            c[6] = 0;
            c[7] = 0;
            c[8] = 1;
            return c
        };
        p.fromMat2d = function (c, a) {
            c[0] = a[0];
            c[1] = a[1];
            c[2] = 0;
            c[3] = a[2];
            c[4] = a[3];
            c[5] = 0;
            c[6] = a[4];
            c[7] = a[5];
            c[8] = 1;
            return c
        };
        p.fromQuat = function (c, a) {
            var b = a[0], d = a[1], e = a[2], g = a[3], f = b + b, h = d + d, l = e + e, b = b * f, k = d * f, d = d * h, m = e * f, r = e * h, e = e * l, f = g * f, h = g * h, g = g * l;
            c[0] = 1 - d - e;
            c[3] = k - g;
            c[6] = m + h;
            c[1] = k + g;
            c[4] = 1 - b - e;
            c[7] = r - f;
            c[2] = m - h;
            c[5] = r + f;
            c[8] = 1 - b - d;
            return c
        };
        p.normalFromMat4 = function (c, a) {
            var b = a[0], d = a[1], e = a[2], g = a[3], f = a[4], h = a[5], l = a[6], k = a[7], m = a[8], r = a[9], n = a[10], p = a[11], x = a[12], q = a[13], s = a[14], t = a[15], w = b * h - d * f, y = b * l - e * f, B = b * k - g * f, A = d * l - e * h, z = d * k - g * h, D = e * k - g * l, J = m * q - r * x, u = m * s - n * x, m = m * t - p * x, G = r * s - n * q, r = r * t - p * q, n = n * t - p * s, p = w * n - y * r + B * G + A * m - z * u + D * J;
            if (!p)return null;
            p = 1 / p;
            c[0] = (h * n - l * r + k * G) * p;
            c[1] = (l * m - f * n - k * u) * p;
            c[2] = (f * r - h * m + k * J) * p;
            c[3] = (e * r - d * n - g * G) * p;
            c[4] = (b * n - e * m + g * u) * p;
            c[5] = (d * m - b * r - g * J) * p;
            c[6] =
                (q * D - s * z + t * A) * p;
            c[7] = (s * B - x * D - t * y) * p;
            c[8] = (x * z - q * B + t * w) * p;
            return c
        };
        p.str = function (c) {
            return "mat3(" + c[0] + ", " + c[1] + ", " + c[2] + ", " + c[3] + ", " + c[4] + ", " + c[5] + ", " + c[6] + ", " + c[7] + ", " + c[8] + ")"
        };
        p.frob = function (c) {
            return Math.sqrt(Math.pow(c[0], 2) + Math.pow(c[1], 2) + Math.pow(c[2], 2) + Math.pow(c[3], 2) + Math.pow(c[4], 2) + Math.pow(c[5], 2) + Math.pow(c[6], 2) + Math.pow(c[7], 2) + Math.pow(c[8], 2))
        };
        p.add = function (c, a, b) {
            c[0] = a[0] + b[0];
            c[1] = a[1] + b[1];
            c[2] = a[2] + b[2];
            c[3] = a[3] + b[3];
            c[4] = a[4] + b[4];
            c[5] = a[5] + b[5];
            c[6] = a[6] +
                b[6];
            c[7] = a[7] + b[7];
            c[8] = a[8] + b[8];
            return c
        };
        p.subtract = function (c, a, b) {
            c[0] = a[0] - b[0];
            c[1] = a[1] - b[1];
            c[2] = a[2] - b[2];
            c[3] = a[3] - b[3];
            c[4] = a[4] - b[4];
            c[5] = a[5] - b[5];
            c[6] = a[6] - b[6];
            c[7] = a[7] - b[7];
            c[8] = a[8] - b[8];
            return c
        };
        p.sub = p.subtract;
        p.multiplyScalar = function (c, a, b) {
            c[0] = a[0] * b;
            c[1] = a[1] * b;
            c[2] = a[2] * b;
            c[3] = a[3] * b;
            c[4] = a[4] * b;
            c[5] = a[5] * b;
            c[6] = a[6] * b;
            c[7] = a[7] * b;
            c[8] = a[8] * b;
            return c
        };
        p.multiplyScalarAndAdd = function (c, a, b, d) {
            c[0] = a[0] + b[0] * d;
            c[1] = a[1] + b[1] * d;
            c[2] = a[2] + b[2] * d;
            c[3] = a[3] + b[3] * d;
            c[4] = a[4] +
                b[4] * d;
            c[5] = a[5] + b[5] * d;
            c[6] = a[6] + b[6] * d;
            c[7] = a[7] + b[7] * d;
            c[8] = a[8] + b[8] * d;
            return c
        };
        p.exactEquals = function (c, a) {
            return c[0] === a[0] && c[1] === a[1] && c[2] === a[2] && c[3] === a[3] && c[4] === a[4] && c[5] === a[5] && c[6] === a[6] && c[7] === a[7] && c[8] === a[8]
        };
        p.equals = function (c, a) {
            var b = c[0], d = c[1], e = c[2], g = c[3], f = c[4], h = c[5], l = c[6], k = c[7], m = c[8], r = a[0], p = a[1], q = a[2], x = a[3], s = a[4], v = a[5], t = c[6], w = a[7], y = a[8];
            return Math.abs(b - r) <= n.EPSILON * Math.max(1, Math.abs(b), Math.abs(r)) && Math.abs(d - p) <= n.EPSILON * Math.max(1, Math.abs(d),
                    Math.abs(p)) && Math.abs(e - q) <= n.EPSILON * Math.max(1, Math.abs(e), Math.abs(q)) && Math.abs(g - x) <= n.EPSILON * Math.max(1, Math.abs(g), Math.abs(x)) && Math.abs(f - s) <= n.EPSILON * Math.max(1, Math.abs(f), Math.abs(s)) && Math.abs(h - v) <= n.EPSILON * Math.max(1, Math.abs(h), Math.abs(v)) && Math.abs(l - t) <= n.EPSILON * Math.max(1, Math.abs(l), Math.abs(t)) && Math.abs(k - w) <= n.EPSILON * Math.max(1, Math.abs(k), Math.abs(w)) && Math.abs(m - y) <= n.EPSILON * Math.max(1, Math.abs(m), Math.abs(y))
        };
        q.exports = p
    }, function (q, p, s) {
        var n = s(1), c = {
            scalar: {},
            SIMD: {}, create: function () {
                var a = new n.ARRAY_TYPE(16);
                a[0] = 1;
                a[1] = 0;
                a[2] = 0;
                a[3] = 0;
                a[4] = 0;
                a[5] = 1;
                a[6] = 0;
                a[7] = 0;
                a[8] = 0;
                a[9] = 0;
                a[10] = 1;
                a[11] = 0;
                a[12] = 0;
                a[13] = 0;
                a[14] = 0;
                a[15] = 1;
                return a
            }, clone: function (a) {
                var b = new n.ARRAY_TYPE(16);
                b[0] = a[0];
                b[1] = a[1];
                b[2] = a[2];
                b[3] = a[3];
                b[4] = a[4];
                b[5] = a[5];
                b[6] = a[6];
                b[7] = a[7];
                b[8] = a[8];
                b[9] = a[9];
                b[10] = a[10];
                b[11] = a[11];
                b[12] = a[12];
                b[13] = a[13];
                b[14] = a[14];
                b[15] = a[15];
                return b
            }, copy: function (a, b) {
                a[0] = b[0];
                a[1] = b[1];
                a[2] = b[2];
                a[3] = b[3];
                a[4] = b[4];
                a[5] = b[5];
                a[6] = b[6];
                a[7] =
                    b[7];
                a[8] = b[8];
                a[9] = b[9];
                a[10] = b[10];
                a[11] = b[11];
                a[12] = b[12];
                a[13] = b[13];
                a[14] = b[14];
                a[15] = b[15];
                return a
            }, fromValues: function (a, b, d, c, g, f, h, l, k, m, r, p, q, x, s, v) {
                var t = new n.ARRAY_TYPE(16);
                t[0] = a;
                t[1] = b;
                t[2] = d;
                t[3] = c;
                t[4] = g;
                t[5] = f;
                t[6] = h;
                t[7] = l;
                t[8] = k;
                t[9] = m;
                t[10] = r;
                t[11] = p;
                t[12] = q;
                t[13] = x;
                t[14] = s;
                t[15] = v;
                return t
            }, set: function (a, b, d, c, g, f, h, l, k, m, r, n, p, q, s, v, t) {
                a[0] = b;
                a[1] = d;
                a[2] = c;
                a[3] = g;
                a[4] = f;
                a[5] = h;
                a[6] = l;
                a[7] = k;
                a[8] = m;
                a[9] = r;
                a[10] = n;
                a[11] = p;
                a[12] = q;
                a[13] = s;
                a[14] = v;
                a[15] = t;
                return a
            }, identity: function (a) {
                a[0] =
                    1;
                a[1] = 0;
                a[2] = 0;
                a[3] = 0;
                a[4] = 0;
                a[5] = 1;
                a[6] = 0;
                a[7] = 0;
                a[8] = 0;
                a[9] = 0;
                a[10] = 1;
                a[11] = 0;
                a[12] = 0;
                a[13] = 0;
                a[14] = 0;
                a[15] = 1;
                return a
            }
        };
        c.scalar.transpose = function (a, b) {
            if (a === b) {
                var d = b[1], c = b[2], g = b[3], f = b[6], h = b[7], l = b[11];
                a[1] = b[4];
                a[2] = b[8];
                a[3] = b[12];
                a[4] = d;
                a[6] = b[9];
                a[7] = b[13];
                a[8] = c;
                a[9] = f;
                a[11] = b[14];
                a[12] = g;
                a[13] = h;
                a[14] = l
            } else a[0] = b[0], a[1] = b[4], a[2] = b[8], a[3] = b[12], a[4] = b[1], a[5] = b[5], a[6] = b[9], a[7] = b[13], a[8] = b[2], a[9] = b[6], a[10] = b[10], a[11] = b[14], a[12] = b[3], a[13] = b[7], a[14] = b[11], a[15] = b[15];
            return a
        };
        c.SIMD.transpose = function (a, b) {
            var d, c, g, f, h, l, k;
            d = SIMD.Float32x4.load(b, 0);
            c = SIMD.Float32x4.load(b, 4);
            g = SIMD.Float32x4.load(b, 8);
            f = SIMD.Float32x4.load(b, 12);
            h = SIMD.Float32x4.shuffle(d, c, 0, 1, 4, 5);
            l = SIMD.Float32x4.shuffle(g, f, 0, 1, 4, 5);
            k = SIMD.Float32x4.shuffle(h, l, 0, 2, 4, 6);
            h = SIMD.Float32x4.shuffle(h, l, 1, 3, 5, 7);
            SIMD.Float32x4.store(a, 0, k);
            SIMD.Float32x4.store(a, 4, h);
            h = SIMD.Float32x4.shuffle(d, c, 2, 3, 6, 7);
            l = SIMD.Float32x4.shuffle(g, f, 2, 3, 6, 7);
            d = SIMD.Float32x4.shuffle(h, l, 0, 2, 4, 6);
            c = SIMD.Float32x4.shuffle(h,
                l, 1, 3, 5, 7);
            SIMD.Float32x4.store(a, 8, d);
            SIMD.Float32x4.store(a, 12, c);
            return a
        };
        c.transpose = n.USE_SIMD ? c.SIMD.transpose : c.scalar.transpose;
        c.scalar.invert = function (a, b) {
            var d = b[0], c = b[1], g = b[2], f = b[3], h = b[4], l = b[5], k = b[6], m = b[7], r = b[8], n = b[9], p = b[10], q = b[11], s = b[12], v = b[13], t = b[14], w = b[15], y = d * l - c * h, B = d * k - g * h, A = d * m - f * h, z = c * k - g * l, D = c * m - f * l, J = g * m - f * k, u = r * v - n * s, G = r * t - p * s, I = r * w - q * s, L = n * t - p * v, Q = n * w - q * v, N = p * w - q * t, H = y * N - B * Q + A * L + z * I - D * G + J * u;
            if (!H)return null;
            H = 1 / H;
            a[0] = (l * N - k * Q + m * L) * H;
            a[1] = (g * Q - c * N - f * L) * H;
            a[2] = (v * J - t * D + w * z) * H;
            a[3] = (p * D - n * J - q * z) * H;
            a[4] = (k * I - h * N - m * G) * H;
            a[5] = (d * N - g * I + f * G) * H;
            a[6] = (t * A - s * J - w * B) * H;
            a[7] = (r * J - p * A + q * B) * H;
            a[8] = (h * Q - l * I + m * u) * H;
            a[9] = (c * I - d * Q - f * u) * H;
            a[10] = (s * D - v * A + w * y) * H;
            a[11] = (n * A - r * D - q * y) * H;
            a[12] = (l * G - h * L - k * u) * H;
            a[13] = (d * L - c * G + g * u) * H;
            a[14] = (v * B - s * z - t * y) * H;
            a[15] = (r * z - n * B + p * y) * H;
            return a
        };
        c.SIMD.invert = function (a, b) {
            var d, c, g, f, h, l, k, m, r;
            l = SIMD.Float32x4.load(b, 0);
            k = SIMD.Float32x4.load(b, 4);
            m = SIMD.Float32x4.load(b, 8);
            r = SIMD.Float32x4.load(b, 12);
            h = SIMD.Float32x4.shuffle(l, k, 0, 1,
                4, 5);
            c = SIMD.Float32x4.shuffle(m, r, 0, 1, 4, 5);
            d = SIMD.Float32x4.shuffle(h, c, 0, 2, 4, 6);
            c = SIMD.Float32x4.shuffle(c, h, 1, 3, 5, 7);
            h = SIMD.Float32x4.shuffle(l, k, 2, 3, 6, 7);
            f = SIMD.Float32x4.shuffle(m, r, 2, 3, 6, 7);
            g = SIMD.Float32x4.shuffle(h, f, 0, 2, 4, 6);
            f = SIMD.Float32x4.shuffle(f, h, 1, 3, 5, 7);
            h = SIMD.Float32x4.mul(g, f);
            h = SIMD.Float32x4.swizzle(h, 1, 0, 3, 2);
            l = SIMD.Float32x4.mul(c, h);
            k = SIMD.Float32x4.mul(d, h);
            h = SIMD.Float32x4.swizzle(h, 2, 3, 0, 1);
            l = SIMD.Float32x4.sub(SIMD.Float32x4.mul(c, h), l);
            k = SIMD.Float32x4.sub(SIMD.Float32x4.mul(d,
                h), k);
            k = SIMD.Float32x4.swizzle(k, 2, 3, 0, 1);
            h = SIMD.Float32x4.mul(c, g);
            h = SIMD.Float32x4.swizzle(h, 1, 0, 3, 2);
            l = SIMD.Float32x4.add(SIMD.Float32x4.mul(f, h), l);
            r = SIMD.Float32x4.mul(d, h);
            h = SIMD.Float32x4.swizzle(h, 2, 3, 0, 1);
            l = SIMD.Float32x4.sub(l, SIMD.Float32x4.mul(f, h));
            r = SIMD.Float32x4.sub(SIMD.Float32x4.mul(d, h), r);
            r = SIMD.Float32x4.swizzle(r, 2, 3, 0, 1);
            h = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), f);
            h = SIMD.Float32x4.swizzle(h, 1, 0, 3, 2);
            g = SIMD.Float32x4.swizzle(g, 2, 3, 0, 1);
            l = SIMD.Float32x4.add(SIMD.Float32x4.mul(g,
                h), l);
            m = SIMD.Float32x4.mul(d, h);
            h = SIMD.Float32x4.swizzle(h, 2, 3, 0, 1);
            l = SIMD.Float32x4.sub(l, SIMD.Float32x4.mul(g, h));
            m = SIMD.Float32x4.sub(SIMD.Float32x4.mul(d, h), m);
            m = SIMD.Float32x4.swizzle(m, 2, 3, 0, 1);
            h = SIMD.Float32x4.mul(d, c);
            h = SIMD.Float32x4.swizzle(h, 1, 0, 3, 2);
            m = SIMD.Float32x4.add(SIMD.Float32x4.mul(f, h), m);
            r = SIMD.Float32x4.sub(SIMD.Float32x4.mul(g, h), r);
            h = SIMD.Float32x4.swizzle(h, 2, 3, 0, 1);
            m = SIMD.Float32x4.sub(SIMD.Float32x4.mul(f, h), m);
            r = SIMD.Float32x4.sub(r, SIMD.Float32x4.mul(g, h));
            h = SIMD.Float32x4.mul(d,
                f);
            h = SIMD.Float32x4.swizzle(h, 1, 0, 3, 2);
            k = SIMD.Float32x4.sub(k, SIMD.Float32x4.mul(g, h));
            m = SIMD.Float32x4.add(SIMD.Float32x4.mul(c, h), m);
            h = SIMD.Float32x4.swizzle(h, 2, 3, 0, 1);
            k = SIMD.Float32x4.add(SIMD.Float32x4.mul(g, h), k);
            m = SIMD.Float32x4.sub(m, SIMD.Float32x4.mul(c, h));
            h = SIMD.Float32x4.mul(d, g);
            h = SIMD.Float32x4.swizzle(h, 1, 0, 3, 2);
            k = SIMD.Float32x4.add(SIMD.Float32x4.mul(f, h), k);
            r = SIMD.Float32x4.sub(r, SIMD.Float32x4.mul(c, h));
            h = SIMD.Float32x4.swizzle(h, 2, 3, 0, 1);
            k = SIMD.Float32x4.sub(k, SIMD.Float32x4.mul(f,
                h));
            r = SIMD.Float32x4.add(SIMD.Float32x4.mul(c, h), r);
            d = SIMD.Float32x4.mul(d, l);
            d = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(d, 2, 3, 0, 1), d);
            d = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(d, 1, 0, 3, 2), d);
            h = SIMD.Float32x4.reciprocalApproximation(d);
            d = SIMD.Float32x4.sub(SIMD.Float32x4.add(h, h), SIMD.Float32x4.mul(d, SIMD.Float32x4.mul(h, h)));
            d = SIMD.Float32x4.swizzle(d, 0, 0, 0, 0);
            if (!d)return null;
            SIMD.Float32x4.store(a, 0, SIMD.Float32x4.mul(d, l));
            SIMD.Float32x4.store(a, 4, SIMD.Float32x4.mul(d, k));
            SIMD.Float32x4.store(a,
                8, SIMD.Float32x4.mul(d, m));
            SIMD.Float32x4.store(a, 12, SIMD.Float32x4.mul(d, r));
            return a
        };
        c.invert = n.USE_SIMD ? c.SIMD.invert : c.scalar.invert;
        c.scalar.adjoint = function (a, b) {
            var d = b[0], c = b[1], g = b[2], f = b[3], h = b[4], l = b[5], k = b[6], m = b[7], r = b[8], n = b[9], p = b[10], q = b[11], s = b[12], v = b[13], t = b[14], w = b[15];
            a[0] = l * (p * w - q * t) - n * (k * w - m * t) + v * (k * q - m * p);
            a[1] = -(c * (p * w - q * t) - n * (g * w - f * t) + v * (g * q - f * p));
            a[2] = c * (k * w - m * t) - l * (g * w - f * t) + v * (g * m - f * k);
            a[3] = -(c * (k * q - m * p) - l * (g * q - f * p) + n * (g * m - f * k));
            a[4] = -(h * (p * w - q * t) - r * (k * w - m * t) + s * (k * q - m *
            p));
            a[5] = d * (p * w - q * t) - r * (g * w - f * t) + s * (g * q - f * p);
            a[6] = -(d * (k * w - m * t) - h * (g * w - f * t) + s * (g * m - f * k));
            a[7] = d * (k * q - m * p) - h * (g * q - f * p) + r * (g * m - f * k);
            a[8] = h * (n * w - q * v) - r * (l * w - m * v) + s * (l * q - m * n);
            a[9] = -(d * (n * w - q * v) - r * (c * w - f * v) + s * (c * q - f * n));
            a[10] = d * (l * w - m * v) - h * (c * w - f * v) + s * (c * m - f * l);
            a[11] = -(d * (l * q - m * n) - h * (c * q - f * n) + r * (c * m - f * l));
            a[12] = -(h * (n * t - p * v) - r * (l * t - k * v) + s * (l * p - k * n));
            a[13] = d * (n * t - p * v) - r * (c * t - g * v) + s * (c * p - g * n);
            a[14] = -(d * (l * t - k * v) - h * (c * t - g * v) + s * (c * k - g * l));
            a[15] = d * (l * p - k * n) - h * (c * p - g * n) + r * (c * k - g * l);
            return a
        };
        c.SIMD.adjoint =
            function (a, b) {
                var d, c, g, f, h, l, k, m, r;
                d = SIMD.Float32x4.load(b, 0);
                c = SIMD.Float32x4.load(b, 4);
                g = SIMD.Float32x4.load(b, 8);
                f = SIMD.Float32x4.load(b, 12);
                k = SIMD.Float32x4.shuffle(d, c, 0, 1, 4, 5);
                l = SIMD.Float32x4.shuffle(g, f, 0, 1, 4, 5);
                h = SIMD.Float32x4.shuffle(k, l, 0, 2, 4, 6);
                l = SIMD.Float32x4.shuffle(l, k, 1, 3, 5, 7);
                k = SIMD.Float32x4.shuffle(d, c, 2, 3, 6, 7);
                c = SIMD.Float32x4.shuffle(g, f, 2, 3, 6, 7);
                d = SIMD.Float32x4.shuffle(k, c, 0, 2, 4, 6);
                c = SIMD.Float32x4.shuffle(c, k, 1, 3, 5, 7);
                k = SIMD.Float32x4.mul(d, c);
                k = SIMD.Float32x4.swizzle(k,
                    1, 0, 3, 2);
                g = SIMD.Float32x4.mul(l, k);
                f = SIMD.Float32x4.mul(h, k);
                k = SIMD.Float32x4.swizzle(k, 2, 3, 0, 1);
                g = SIMD.Float32x4.sub(SIMD.Float32x4.mul(l, k), g);
                f = SIMD.Float32x4.sub(SIMD.Float32x4.mul(h, k), f);
                f = SIMD.Float32x4.swizzle(f, 2, 3, 0, 1);
                k = SIMD.Float32x4.mul(l, d);
                k = SIMD.Float32x4.swizzle(k, 1, 0, 3, 2);
                g = SIMD.Float32x4.add(SIMD.Float32x4.mul(c, k), g);
                r = SIMD.Float32x4.mul(h, k);
                k = SIMD.Float32x4.swizzle(k, 2, 3, 0, 1);
                g = SIMD.Float32x4.sub(g, SIMD.Float32x4.mul(c, k));
                r = SIMD.Float32x4.sub(SIMD.Float32x4.mul(h, k), r);
                r = SIMD.Float32x4.swizzle(r,
                    2, 3, 0, 1);
                k = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(l, 2, 3, 0, 1), c);
                k = SIMD.Float32x4.swizzle(k, 1, 0, 3, 2);
                d = SIMD.Float32x4.swizzle(d, 2, 3, 0, 1);
                g = SIMD.Float32x4.add(SIMD.Float32x4.mul(d, k), g);
                m = SIMD.Float32x4.mul(h, k);
                k = SIMD.Float32x4.swizzle(k, 2, 3, 0, 1);
                g = SIMD.Float32x4.sub(g, SIMD.Float32x4.mul(d, k));
                m = SIMD.Float32x4.sub(SIMD.Float32x4.mul(h, k), m);
                m = SIMD.Float32x4.swizzle(m, 2, 3, 0, 1);
                k = SIMD.Float32x4.mul(h, l);
                k = SIMD.Float32x4.swizzle(k, 1, 0, 3, 2);
                m = SIMD.Float32x4.add(SIMD.Float32x4.mul(c, k), m);
                r = SIMD.Float32x4.sub(SIMD.Float32x4.mul(d,
                    k), r);
                k = SIMD.Float32x4.swizzle(k, 2, 3, 0, 1);
                m = SIMD.Float32x4.sub(SIMD.Float32x4.mul(c, k), m);
                r = SIMD.Float32x4.sub(r, SIMD.Float32x4.mul(d, k));
                k = SIMD.Float32x4.mul(h, c);
                k = SIMD.Float32x4.swizzle(k, 1, 0, 3, 2);
                f = SIMD.Float32x4.sub(f, SIMD.Float32x4.mul(d, k));
                m = SIMD.Float32x4.add(SIMD.Float32x4.mul(l, k), m);
                k = SIMD.Float32x4.swizzle(k, 2, 3, 0, 1);
                f = SIMD.Float32x4.add(SIMD.Float32x4.mul(d, k), f);
                m = SIMD.Float32x4.sub(m, SIMD.Float32x4.mul(l, k));
                k = SIMD.Float32x4.mul(h, d);
                k = SIMD.Float32x4.swizzle(k, 1, 0, 3, 2);
                f = SIMD.Float32x4.add(SIMD.Float32x4.mul(c,
                    k), f);
                r = SIMD.Float32x4.sub(r, SIMD.Float32x4.mul(l, k));
                k = SIMD.Float32x4.swizzle(k, 2, 3, 0, 1);
                f = SIMD.Float32x4.sub(f, SIMD.Float32x4.mul(c, k));
                r = SIMD.Float32x4.add(SIMD.Float32x4.mul(l, k), r);
                SIMD.Float32x4.store(a, 0, g);
                SIMD.Float32x4.store(a, 4, f);
                SIMD.Float32x4.store(a, 8, m);
                SIMD.Float32x4.store(a, 12, r);
                return a
            };
        c.adjoint = n.USE_SIMD ? c.SIMD.adjoint : c.scalar.adjoint;
        c.determinant = function (a) {
            var b = a[0], d = a[1], c = a[2], g = a[3], f = a[4], h = a[5], l = a[6], k = a[7], m = a[8], r = a[9], n = a[10], p = a[11], q = a[12], s = a[13], v = a[14];
            a = a[15];
            return (b * h - d * f) * (n * a - p * v) - (b * l - c * f) * (r * a - p * s) + (b * k - g * f) * (r * v - n * s) + (d * l - c * h) * (m * a - p * q) - (d * k - g * h) * (m * v - n * q) + (c * k - g * l) * (m * s - r * q)
        };
        c.SIMD.multiply = function (a, b, d) {
            var c = SIMD.Float32x4.load(b, 0), g = SIMD.Float32x4.load(b, 4), f = SIMD.Float32x4.load(b, 8);
            b = SIMD.Float32x4.load(b, 12);
            var h = SIMD.Float32x4.load(d, 0), h = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 0, 0, 0, 0), c), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 1, 1, 1, 1), g), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h,
                2, 2, 2, 2), f), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 3, 3, 3, 3), b))));
            SIMD.Float32x4.store(a, 0, h);
            h = SIMD.Float32x4.load(d, 4);
            h = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 0, 0, 0, 0), c), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 1, 1, 1, 1), g), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 2, 2, 2, 2), f), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 3, 3, 3, 3), b))));
            SIMD.Float32x4.store(a, 4, h);
            h = SIMD.Float32x4.load(d, 8);
            h = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h,
                0, 0, 0, 0), c), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 1, 1, 1, 1), g), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 2, 2, 2, 2), f), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 3, 3, 3, 3), b))));
            SIMD.Float32x4.store(a, 8, h);
            d = SIMD.Float32x4.load(d, 12);
            c = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(d, 0, 0, 0, 0), c), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(d, 1, 1, 1, 1), g), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(d, 2, 2, 2, 2),
                f), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(d, 3, 3, 3, 3), b))));
            SIMD.Float32x4.store(a, 12, c);
            return a
        };
        c.scalar.multiply = function (a, b, d) {
            var c = b[0], g = b[1], f = b[2], h = b[3], l = b[4], k = b[5], m = b[6], r = b[7], n = b[8], p = b[9], q = b[10], s = b[11], v = b[12], t = b[13], w = b[14];
            b = b[15];
            var y = d[0], B = d[1], A = d[2], z = d[3];
            a[0] = y * c + B * l + A * n + z * v;
            a[1] = y * g + B * k + A * p + z * t;
            a[2] = y * f + B * m + A * q + z * w;
            a[3] = y * h + B * r + A * s + z * b;
            y = d[4];
            B = d[5];
            A = d[6];
            z = d[7];
            a[4] = y * c + B * l + A * n + z * v;
            a[5] = y * g + B * k + A * p + z * t;
            a[6] = y * f + B * m + A * q + z * w;
            a[7] = y * h + B * r + A * s + z * b;
            y = d[8];
            B = d[9];
            A =
                d[10];
            z = d[11];
            a[8] = y * c + B * l + A * n + z * v;
            a[9] = y * g + B * k + A * p + z * t;
            a[10] = y * f + B * m + A * q + z * w;
            a[11] = y * h + B * r + A * s + z * b;
            y = d[12];
            B = d[13];
            A = d[14];
            z = d[15];
            a[12] = y * c + B * l + A * n + z * v;
            a[13] = y * g + B * k + A * p + z * t;
            a[14] = y * f + B * m + A * q + z * w;
            a[15] = y * h + B * r + A * s + z * b;
            return a
        };
        c.multiply = n.USE_SIMD ? c.SIMD.multiply : c.scalar.multiply;
        c.mul = c.multiply;
        c.scalar.translate = function (a, b, d) {
            var c = d[0], g = d[1];
            d = d[2];
            var f, h, l, k, m, r, n, p, q, s, v, t;
            b === a ? (a[12] = b[0] * c + b[4] * g + b[8] * d + b[12], a[13] = b[1] * c + b[5] * g + b[9] * d + b[13], a[14] = b[2] * c + b[6] * g + b[10] * d + b[14], a[15] =
                b[3] * c + b[7] * g + b[11] * d + b[15]) : (f = b[0], h = b[1], l = b[2], k = b[3], m = b[4], r = b[5], n = b[6], p = b[7], q = b[8], s = b[9], v = b[10], t = b[11], a[0] = f, a[1] = h, a[2] = l, a[3] = k, a[4] = m, a[5] = r, a[6] = n, a[7] = p, a[8] = q, a[9] = s, a[10] = v, a[11] = t, a[12] = f * c + m * g + q * d + b[12], a[13] = h * c + r * g + s * d + b[13], a[14] = l * c + n * g + v * d + b[14], a[15] = k * c + p * g + t * d + b[15]);
            return a
        };
        c.SIMD.translate = function (a, b, d) {
            var c = SIMD.Float32x4.load(b, 0), g = SIMD.Float32x4.load(b, 4), f = SIMD.Float32x4.load(b, 8), h = SIMD.Float32x4.load(b, 12);
            d = SIMD.Float32x4(d[0], d[1], d[2], 0);
            b !== a && (a[0] =
                b[0], a[1] = b[1], a[2] = b[2], a[3] = b[3], a[4] = b[4], a[5] = b[5], a[6] = b[6], a[7] = b[7], a[8] = b[8], a[9] = b[9], a[10] = b[10], a[11] = b[11]);
            c = SIMD.Float32x4.mul(c, SIMD.Float32x4.swizzle(d, 0, 0, 0, 0));
            g = SIMD.Float32x4.mul(g, SIMD.Float32x4.swizzle(d, 1, 1, 1, 1));
            f = SIMD.Float32x4.mul(f, SIMD.Float32x4.swizzle(d, 2, 2, 2, 2));
            b = SIMD.Float32x4.add(c, SIMD.Float32x4.add(g, SIMD.Float32x4.add(f, h)));
            SIMD.Float32x4.store(a, 12, b);
            return a
        };
        c.translate = n.USE_SIMD ? c.SIMD.translate : c.scalar.translate;
        c.scalar.scale = function (a, b, d) {
            var c = d[0],
                g = d[1];
            d = d[2];
            a[0] = b[0] * c;
            a[1] = b[1] * c;
            a[2] = b[2] * c;
            a[3] = b[3] * c;
            a[4] = b[4] * g;
            a[5] = b[5] * g;
            a[6] = b[6] * g;
            a[7] = b[7] * g;
            a[8] = b[8] * d;
            a[9] = b[9] * d;
            a[10] = b[10] * d;
            a[11] = b[11] * d;
            a[12] = b[12];
            a[13] = b[13];
            a[14] = b[14];
            a[15] = b[15];
            return a
        };
        c.SIMD.scale = function (a, b, d) {
            var c;
            d = SIMD.Float32x4(d[0], d[1], d[2], 0);
            c = SIMD.Float32x4.load(b, 0);
            SIMD.Float32x4.store(a, 0, SIMD.Float32x4.mul(c, SIMD.Float32x4.swizzle(d, 0, 0, 0, 0)));
            c = SIMD.Float32x4.load(b, 4);
            SIMD.Float32x4.store(a, 4, SIMD.Float32x4.mul(c, SIMD.Float32x4.swizzle(d, 1, 1,
                1, 1)));
            c = SIMD.Float32x4.load(b, 8);
            SIMD.Float32x4.store(a, 8, SIMD.Float32x4.mul(c, SIMD.Float32x4.swizzle(d, 2, 2, 2, 2)));
            a[12] = b[12];
            a[13] = b[13];
            a[14] = b[14];
            a[15] = b[15];
            return a
        };
        c.scale = n.USE_SIMD ? c.SIMD.scale : c.scalar.scale;
        c.rotate = function (a, b, d, c) {
            var g = c[0], f = c[1];
            c = c[2];
            var h = Math.sqrt(g * g + f * f + c * c), l, k, m, r, p, q, s, C, v, t, w, y, B, A, z, D, J, u, G, I;
            if (Math.abs(h) < n.EPSILON)return null;
            h = 1 / h;
            g *= h;
            f *= h;
            c *= h;
            l = Math.sin(d);
            k = Math.cos(d);
            m = 1 - k;
            d = b[0];
            h = b[1];
            r = b[2];
            p = b[3];
            q = b[4];
            s = b[5];
            C = b[6];
            v = b[7];
            t = b[8];
            w = b[9];
            y = b[10];
            B = b[11];
            A = g * g * m + k;
            z = f * g * m + c * l;
            D = c * g * m - f * l;
            J = g * f * m - c * l;
            u = f * f * m + k;
            G = c * f * m + g * l;
            I = g * c * m + f * l;
            g = f * c * m - g * l;
            f = c * c * m + k;
            a[0] = d * A + q * z + t * D;
            a[1] = h * A + s * z + w * D;
            a[2] = r * A + C * z + y * D;
            a[3] = p * A + v * z + B * D;
            a[4] = d * J + q * u + t * G;
            a[5] = h * J + s * u + w * G;
            a[6] = r * J + C * u + y * G;
            a[7] = p * J + v * u + B * G;
            a[8] = d * I + q * g + t * f;
            a[9] = h * I + s * g + w * f;
            a[10] = r * I + C * g + y * f;
            a[11] = p * I + v * g + B * f;
            b !== a && (a[12] = b[12], a[13] = b[13], a[14] = b[14], a[15] = b[15]);
            return a
        };
        c.scalar.rotateX = function (a, b, d) {
            var c = Math.sin(d);
            d = Math.cos(d);
            var g = b[4], f = b[5], h = b[6], l = b[7], k = b[8], m = b[9],
                r = b[10], n = b[11];
            b !== a && (a[0] = b[0], a[1] = b[1], a[2] = b[2], a[3] = b[3], a[12] = b[12], a[13] = b[13], a[14] = b[14], a[15] = b[15]);
            a[4] = g * d + k * c;
            a[5] = f * d + m * c;
            a[6] = h * d + r * c;
            a[7] = l * d + n * c;
            a[8] = k * d - g * c;
            a[9] = m * d - f * c;
            a[10] = r * d - h * c;
            a[11] = n * d - l * c;
            return a
        };
        c.SIMD.rotateX = function (a, b, d) {
            var c = SIMD.Float32x4.splat(Math.sin(d));
            d = SIMD.Float32x4.splat(Math.cos(d));
            b !== a && (a[0] = b[0], a[1] = b[1], a[2] = b[2], a[3] = b[3], a[12] = b[12], a[13] = b[13], a[14] = b[14], a[15] = b[15]);
            var g = SIMD.Float32x4.load(b, 4);
            b = SIMD.Float32x4.load(b, 8);
            SIMD.Float32x4.store(a,
                4, SIMD.Float32x4.add(SIMD.Float32x4.mul(g, d), SIMD.Float32x4.mul(b, c)));
            SIMD.Float32x4.store(a, 8, SIMD.Float32x4.sub(SIMD.Float32x4.mul(b, d), SIMD.Float32x4.mul(g, c)));
            return a
        };
        c.rotateX = n.USE_SIMD ? c.SIMD.rotateX : c.scalar.rotateX;
        c.scalar.rotateY = function (a, b, d) {
            var c = Math.sin(d);
            d = Math.cos(d);
            var g = b[0], f = b[1], h = b[2], l = b[3], k = b[8], m = b[9], r = b[10], n = b[11];
            b !== a && (a[4] = b[4], a[5] = b[5], a[6] = b[6], a[7] = b[7], a[12] = b[12], a[13] = b[13], a[14] = b[14], a[15] = b[15]);
            a[0] = g * d - k * c;
            a[1] = f * d - m * c;
            a[2] = h * d - r * c;
            a[3] = l * d - n *
                c;
            a[8] = g * c + k * d;
            a[9] = f * c + m * d;
            a[10] = h * c + r * d;
            a[11] = l * c + n * d;
            return a
        };
        c.SIMD.rotateY = function (a, b, d) {
            var c = SIMD.Float32x4.splat(Math.sin(d));
            d = SIMD.Float32x4.splat(Math.cos(d));
            b !== a && (a[4] = b[4], a[5] = b[5], a[6] = b[6], a[7] = b[7], a[12] = b[12], a[13] = b[13], a[14] = b[14], a[15] = b[15]);
            var g = SIMD.Float32x4.load(b, 0);
            b = SIMD.Float32x4.load(b, 8);
            SIMD.Float32x4.store(a, 0, SIMD.Float32x4.sub(SIMD.Float32x4.mul(g, d), SIMD.Float32x4.mul(b, c)));
            SIMD.Float32x4.store(a, 8, SIMD.Float32x4.add(SIMD.Float32x4.mul(g, c), SIMD.Float32x4.mul(b,
                d)));
            return a
        };
        c.rotateY = n.USE_SIMD ? c.SIMD.rotateY : c.scalar.rotateY;
        c.scalar.rotateZ = function (a, b, d) {
            var c = Math.sin(d);
            d = Math.cos(d);
            var g = b[0], f = b[1], h = b[2], l = b[3], k = b[4], m = b[5], r = b[6], n = b[7];
            b !== a && (a[8] = b[8], a[9] = b[9], a[10] = b[10], a[11] = b[11], a[12] = b[12], a[13] = b[13], a[14] = b[14], a[15] = b[15]);
            a[0] = g * d + k * c;
            a[1] = f * d + m * c;
            a[2] = h * d + r * c;
            a[3] = l * d + n * c;
            a[4] = k * d - g * c;
            a[5] = m * d - f * c;
            a[6] = r * d - h * c;
            a[7] = n * d - l * c;
            return a
        };
        c.SIMD.rotateZ = function (a, b, d) {
            var c = SIMD.Float32x4.splat(Math.sin(d));
            d = SIMD.Float32x4.splat(Math.cos(d));
            b !== a && (a[8] = b[8], a[9] = b[9], a[10] = b[10], a[11] = b[11], a[12] = b[12], a[13] = b[13], a[14] = b[14], a[15] = b[15]);
            var g = SIMD.Float32x4.load(b, 0);
            b = SIMD.Float32x4.load(b, 4);
            SIMD.Float32x4.store(a, 0, SIMD.Float32x4.add(SIMD.Float32x4.mul(g, d), SIMD.Float32x4.mul(b, c)));
            SIMD.Float32x4.store(a, 4, SIMD.Float32x4.sub(SIMD.Float32x4.mul(b, d), SIMD.Float32x4.mul(g, c)));
            return a
        };
        c.rotateZ = n.USE_SIMD ? c.SIMD.rotateZ : c.scalar.rotateZ;
        c.fromTranslation = function (a, b) {
            a[0] = 1;
            a[1] = 0;
            a[2] = 0;
            a[3] = 0;
            a[4] = 0;
            a[5] = 1;
            a[6] = 0;
            a[7] = 0;
            a[8] =
                0;
            a[9] = 0;
            a[10] = 1;
            a[11] = 0;
            a[12] = b[0];
            a[13] = b[1];
            a[14] = b[2];
            a[15] = 1;
            return a
        };
        c.fromScaling = function (a, b) {
            a[0] = b[0];
            a[1] = 0;
            a[2] = 0;
            a[3] = 0;
            a[4] = 0;
            a[5] = b[1];
            a[6] = 0;
            a[7] = 0;
            a[8] = 0;
            a[9] = 0;
            a[10] = b[2];
            a[11] = 0;
            a[12] = 0;
            a[13] = 0;
            a[14] = 0;
            a[15] = 1;
            return a
        };
        c.fromRotation = function (a, b, d) {
            var c = d[0], g = d[1];
            d = d[2];
            var f = Math.sqrt(c * c + g * g + d * d), h;
            if (Math.abs(f) < n.EPSILON)return null;
            f = 1 / f;
            c *= f;
            g *= f;
            d *= f;
            f = Math.sin(b);
            b = Math.cos(b);
            h = 1 - b;
            a[0] = c * c * h + b;
            a[1] = g * c * h + d * f;
            a[2] = d * c * h - g * f;
            a[3] = 0;
            a[4] = c * g * h - d * f;
            a[5] = g * g * h + b;
            a[6] =
                d * g * h + c * f;
            a[7] = 0;
            a[8] = c * d * h + g * f;
            a[9] = g * d * h - c * f;
            a[10] = d * d * h + b;
            a[11] = 0;
            a[12] = 0;
            a[13] = 0;
            a[14] = 0;
            a[15] = 1;
            return a
        };
        c.fromXRotation = function (a, b) {
            var c = Math.sin(b), e = Math.cos(b);
            a[0] = 1;
            a[1] = 0;
            a[2] = 0;
            a[3] = 0;
            a[4] = 0;
            a[5] = e;
            a[6] = c;
            a[7] = 0;
            a[8] = 0;
            a[9] = -c;
            a[10] = e;
            a[11] = 0;
            a[12] = 0;
            a[13] = 0;
            a[14] = 0;
            a[15] = 1;
            return a
        };
        c.fromYRotation = function (a, b) {
            var c = Math.sin(b), e = Math.cos(b);
            a[0] = e;
            a[1] = 0;
            a[2] = -c;
            a[3] = 0;
            a[4] = 0;
            a[5] = 1;
            a[6] = 0;
            a[7] = 0;
            a[8] = c;
            a[9] = 0;
            a[10] = e;
            a[11] = 0;
            a[12] = 0;
            a[13] = 0;
            a[14] = 0;
            a[15] = 1;
            return a
        };
        c.fromZRotation =
            function (a, b) {
                var c = Math.sin(b), e = Math.cos(b);
                a[0] = e;
                a[1] = c;
                a[2] = 0;
                a[3] = 0;
                a[4] = -c;
                a[5] = e;
                a[6] = 0;
                a[7] = 0;
                a[8] = 0;
                a[9] = 0;
                a[10] = 1;
                a[11] = 0;
                a[12] = 0;
                a[13] = 0;
                a[14] = 0;
                a[15] = 1;
                return a
            };
        c.fromRotationTranslation = function (a, b, c) {
            var e = b[0], g = b[1], f = b[2], h = b[3], l = e + e, k = g + g, m = f + f;
            b = e * l;
            var n = e * k, e = e * m, p = g * k, g = g * m, f = f * m, l = h * l, k = h * k, h = h * m;
            a[0] = 1 - (p + f);
            a[1] = n + h;
            a[2] = e - k;
            a[3] = 0;
            a[4] = n - h;
            a[5] = 1 - (b + f);
            a[6] = g + l;
            a[7] = 0;
            a[8] = e + k;
            a[9] = g - l;
            a[10] = 1 - (b + p);
            a[11] = 0;
            a[12] = c[0];
            a[13] = c[1];
            a[14] = c[2];
            a[15] = 1;
            return a
        };
        c.getTranslation =
            function (a, b) {
                a[0] = b[12];
                a[1] = b[13];
                a[2] = b[14];
                return a
            };
        c.getRotation = function (a, b) {
            var c = b[0] + b[5] + b[10], e = 0;
            0 < c ? (e = 2 * Math.sqrt(c + 1), a[3] = 0.25 * e, a[0] = (b[6] - b[9]) / e, a[1] = (b[8] - b[2]) / e, a[2] = (b[1] - b[4]) / e) : b[0] > b[5] & b[0] > b[10] ? (e = 2 * Math.sqrt(1 + b[0] - b[5] - b[10]), a[3] = (b[6] - b[9]) / e, a[0] = 0.25 * e, a[1] = (b[1] + b[4]) / e, a[2] = (b[8] + b[2]) / e) : b[5] > b[10] ? (e = 2 * Math.sqrt(1 + b[5] - b[0] - b[10]), a[3] = (b[8] - b[2]) / e, a[0] = (b[1] + b[4]) / e, a[1] = 0.25 * e, a[2] = (b[6] + b[9]) / e) : (e = 2 * Math.sqrt(1 + b[10] - b[0] - b[5]), a[3] = (b[1] - b[4]) / e, a[0] =
                (b[8] + b[2]) / e, a[1] = (b[6] + b[9]) / e, a[2] = 0.25 * e);
            return a
        };
        c.fromRotationTranslationScale = function (a, b, c, e) {
            var g = b[0], f = b[1], h = b[2], l = b[3], k = g + g, m = f + f, n = h + h;
            b = g * k;
            var p = g * m, g = g * n, q = f * m, f = f * n, h = h * n, k = l * k, m = l * m, l = l * n, n = e[0], s = e[1];
            e = e[2];
            a[0] = (1 - (q + h)) * n;
            a[1] = (p + l) * n;
            a[2] = (g - m) * n;
            a[3] = 0;
            a[4] = (p - l) * s;
            a[5] = (1 - (b + h)) * s;
            a[6] = (f + k) * s;
            a[7] = 0;
            a[8] = (g + m) * e;
            a[9] = (f - k) * e;
            a[10] = (1 - (b + q)) * e;
            a[11] = 0;
            a[12] = c[0];
            a[13] = c[1];
            a[14] = c[2];
            a[15] = 1;
            return a
        };
        c.fromRotationTranslationScaleOrigin = function (a, b, c, e, g) {
            var f = b[0],
                h = b[1], l = b[2], k = b[3], m = f + f, n = h + h, p = l + l;
            b = f * m;
            var q = f * n, f = f * p, s = h * n, h = h * p, l = l * p, m = k * m, n = k * n, k = k * p, p = e[0], C = e[1];
            e = e[2];
            var v = g[0], t = g[1];
            g = g[2];
            a[0] = (1 - (s + l)) * p;
            a[1] = (q + k) * p;
            a[2] = (f - n) * p;
            a[3] = 0;
            a[4] = (q - k) * C;
            a[5] = (1 - (b + l)) * C;
            a[6] = (h + m) * C;
            a[7] = 0;
            a[8] = (f + n) * e;
            a[9] = (h - m) * e;
            a[10] = (1 - (b + s)) * e;
            a[11] = 0;
            a[12] = c[0] + v - (a[0] * v + a[4] * t + a[8] * g);
            a[13] = c[1] + t - (a[1] * v + a[5] * t + a[9] * g);
            a[14] = c[2] + g - (a[2] * v + a[6] * t + a[10] * g);
            a[15] = 1;
            return a
        };
        c.fromQuat = function (a, b) {
            var c = b[0], e = b[1], g = b[2], f = b[3], h = c + c, l = e + e, k = g + g, c = c *
                h, m = e * h, e = e * l, n = g * h, p = g * l, g = g * k, h = f * h, l = f * l, f = f * k;
            a[0] = 1 - e - g;
            a[1] = m + f;
            a[2] = n - l;
            a[3] = 0;
            a[4] = m - f;
            a[5] = 1 - c - g;
            a[6] = p + h;
            a[7] = 0;
            a[8] = n + l;
            a[9] = p - h;
            a[10] = 1 - c - e;
            a[11] = 0;
            a[12] = 0;
            a[13] = 0;
            a[14] = 0;
            a[15] = 1;
            return a
        };
        c.frustum = function (a, b, c, e, g, f, h) {
            var l = 1 / (c - b), k = 1 / (g - e), m = 1 / (f - h);
            a[0] = 2 * f * l;
            a[1] = 0;
            a[2] = 0;
            a[3] = 0;
            a[4] = 0;
            a[5] = 2 * f * k;
            a[6] = 0;
            a[7] = 0;
            a[8] = (c + b) * l;
            a[9] = (g + e) * k;
            a[10] = (h + f) * m;
            a[11] = -1;
            a[12] = 0;
            a[13] = 0;
            a[14] = 2 * (h * f) * m;
            a[15] = 0;
            return a
        };
        c.perspective = function (a, b, c, e, g) {
            b = 1 / Math.tan(b / 2);
            var f = 1 / (e - g);
            a[0] =
                b / c;
            a[1] = 0;
            a[2] = 0;
            a[3] = 0;
            a[4] = 0;
            a[5] = b;
            a[6] = 0;
            a[7] = 0;
            a[8] = 0;
            a[9] = 0;
            a[10] = (g + e) * f;
            a[11] = -1;
            a[12] = 0;
            a[13] = 0;
            a[14] = 2 * g * e * f;
            a[15] = 0;
            return a
        };
        c.perspectiveFromFieldOfView = function (a, b, c, e) {
            var g = Math.tan(b.upDegrees * Math.PI / 180), f = Math.tan(b.downDegrees * Math.PI / 180), h = Math.tan(b.leftDegrees * Math.PI / 180);
            b = Math.tan(b.rightDegrees * Math.PI / 180);
            var l = 2 / (h + b), k = 2 / (g + f);
            a[0] = l;
            a[1] = 0;
            a[2] = 0;
            a[3] = 0;
            a[4] = 0;
            a[5] = k;
            a[6] = 0;
            a[7] = 0;
            a[8] = -(0.5 * (h - b) * l);
            a[9] = 0.5 * (g - f) * k;
            a[10] = e / (c - e);
            a[11] = -1;
            a[12] = 0;
            a[13] = 0;
            a[14] =
                e * c / (c - e);
            a[15] = 0;
            return a
        };
        c.ortho = function (a, b, c, e, g, f, h) {
            var l = 1 / (b - c), k = 1 / (e - g), m = 1 / (f - h);
            a[0] = -2 * l;
            a[1] = 0;
            a[2] = 0;
            a[3] = 0;
            a[4] = 0;
            a[5] = -2 * k;
            a[6] = 0;
            a[7] = 0;
            a[8] = 0;
            a[9] = 0;
            a[10] = 2 * m;
            a[11] = 0;
            a[12] = (b + c) * l;
            a[13] = (g + e) * k;
            a[14] = (h + f) * m;
            a[15] = 1;
            return a
        };
        c.lookAt = function (a, b, d, e) {
            var g, f, h, l, k, m, p, q, s = b[0], x = b[1];
            b = b[2];
            h = e[0];
            l = e[1];
            f = e[2];
            p = d[0];
            e = d[1];
            g = d[2];
            if (Math.abs(s - p) < n.EPSILON && Math.abs(x - e) < n.EPSILON && Math.abs(b - g) < n.EPSILON)return c.identity(a);
            d = s - p;
            e = x - e;
            p = b - g;
            q = 1 / Math.sqrt(d * d + e * e + p * p);
            d *= q;
            e *= q;
            p *= q;
            g = l * p - f * e;
            f = f * d - h * p;
            h = h * e - l * d;
            (q = Math.sqrt(g * g + f * f + h * h)) ? (q = 1 / q, g *= q, f *= q, h *= q) : h = f = g = 0;
            l = e * h - p * f;
            k = p * g - d * h;
            m = d * f - e * g;
            (q = Math.sqrt(l * l + k * k + m * m)) ? (q = 1 / q, l *= q, k *= q, m *= q) : m = k = l = 0;
            a[0] = g;
            a[1] = l;
            a[2] = d;
            a[3] = 0;
            a[4] = f;
            a[5] = k;
            a[6] = e;
            a[7] = 0;
            a[8] = h;
            a[9] = m;
            a[10] = p;
            a[11] = 0;
            a[12] = -(g * s + f * x + h * b);
            a[13] = -(l * s + k * x + m * b);
            a[14] = -(d * s + e * x + p * b);
            a[15] = 1;
            return a
        };
        c.str = function (a) {
            return "mat4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " +
                a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + ")"
        };
        c.frob = function (a) {
            return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2))
        };
        c.add = function (a, b, c) {
            a[0] = b[0] + c[0];
            a[1] = b[1] + c[1];
            a[2] = b[2] + c[2];
            a[3] = b[3] + c[3];
            a[4] = b[4] + c[4];
            a[5] = b[5] + c[5];
            a[6] = b[6] + c[6];
            a[7] =
                b[7] + c[7];
            a[8] = b[8] + c[8];
            a[9] = b[9] + c[9];
            a[10] = b[10] + c[10];
            a[11] = b[11] + c[11];
            a[12] = b[12] + c[12];
            a[13] = b[13] + c[13];
            a[14] = b[14] + c[14];
            a[15] = b[15] + c[15];
            return a
        };
        c.subtract = function (a, b, c) {
            a[0] = b[0] - c[0];
            a[1] = b[1] - c[1];
            a[2] = b[2] - c[2];
            a[3] = b[3] - c[3];
            a[4] = b[4] - c[4];
            a[5] = b[5] - c[5];
            a[6] = b[6] - c[6];
            a[7] = b[7] - c[7];
            a[8] = b[8] - c[8];
            a[9] = b[9] - c[9];
            a[10] = b[10] - c[10];
            a[11] = b[11] - c[11];
            a[12] = b[12] - c[12];
            a[13] = b[13] - c[13];
            a[14] = b[14] - c[14];
            a[15] = b[15] - c[15];
            return a
        };
        c.sub = c.subtract;
        c.multiplyScalar = function (a, b, c) {
            a[0] =
                b[0] * c;
            a[1] = b[1] * c;
            a[2] = b[2] * c;
            a[3] = b[3] * c;
            a[4] = b[4] * c;
            a[5] = b[5] * c;
            a[6] = b[6] * c;
            a[7] = b[7] * c;
            a[8] = b[8] * c;
            a[9] = b[9] * c;
            a[10] = b[10] * c;
            a[11] = b[11] * c;
            a[12] = b[12] * c;
            a[13] = b[13] * c;
            a[14] = b[14] * c;
            a[15] = b[15] * c;
            return a
        };
        c.multiplyScalarAndAdd = function (a, b, c, e) {
            a[0] = b[0] + c[0] * e;
            a[1] = b[1] + c[1] * e;
            a[2] = b[2] + c[2] * e;
            a[3] = b[3] + c[3] * e;
            a[4] = b[4] + c[4] * e;
            a[5] = b[5] + c[5] * e;
            a[6] = b[6] + c[6] * e;
            a[7] = b[7] + c[7] * e;
            a[8] = b[8] + c[8] * e;
            a[9] = b[9] + c[9] * e;
            a[10] = b[10] + c[10] * e;
            a[11] = b[11] + c[11] * e;
            a[12] = b[12] + c[12] * e;
            a[13] = b[13] + c[13] * e;
            a[14] =
                b[14] + c[14] * e;
            a[15] = b[15] + c[15] * e;
            return a
        };
        c.exactEquals = function (a, b) {
            return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15]
        };
        c.equals = function (a, b) {
            var c = a[0], e = a[1], g = a[2], f = a[3], h = a[4], l = a[5], k = a[6], m = a[7], p = a[8], q = a[9], s = a[10], x = a[11], C = a[12], v = a[13], t = a[14], w = a[15], y = b[0], B = b[1], A = b[2], z = b[3], D = b[4], J = b[5], u = b[6], G = b[7], I =
                b[8], L = b[9], Q = b[10], N = b[11], H = b[12], O = b[13], R = b[14], S = b[15];
            return Math.abs(c - y) <= n.EPSILON * Math.max(1, Math.abs(c), Math.abs(y)) && Math.abs(e - B) <= n.EPSILON * Math.max(1, Math.abs(e), Math.abs(B)) && Math.abs(g - A) <= n.EPSILON * Math.max(1, Math.abs(g), Math.abs(A)) && Math.abs(f - z) <= n.EPSILON * Math.max(1, Math.abs(f), Math.abs(z)) && Math.abs(h - D) <= n.EPSILON * Math.max(1, Math.abs(h), Math.abs(D)) && Math.abs(l - J) <= n.EPSILON * Math.max(1, Math.abs(l), Math.abs(J)) && Math.abs(k - u) <= n.EPSILON * Math.max(1, Math.abs(k), Math.abs(u)) &&
                Math.abs(m - G) <= n.EPSILON * Math.max(1, Math.abs(m), Math.abs(G)) && Math.abs(p - I) <= n.EPSILON * Math.max(1, Math.abs(p), Math.abs(I)) && Math.abs(q - L) <= n.EPSILON * Math.max(1, Math.abs(q), Math.abs(L)) && Math.abs(s - Q) <= n.EPSILON * Math.max(1, Math.abs(s), Math.abs(Q)) && Math.abs(x - N) <= n.EPSILON * Math.max(1, Math.abs(x), Math.abs(N)) && Math.abs(C - H) <= n.EPSILON * Math.max(1, Math.abs(C), Math.abs(H)) && Math.abs(v - O) <= n.EPSILON * Math.max(1, Math.abs(v), Math.abs(O)) && Math.abs(t - R) <= n.EPSILON * Math.max(1, Math.abs(t), Math.abs(R)) && Math.abs(w -
                    S) <= n.EPSILON * Math.max(1, Math.abs(w), Math.abs(S))
        };
        q.exports = c
    }, function (q, p, s) {
        var n = s(1), c = s(4), a = s(7);
        p = s(8);
        var b = {
            create: function () {
                var a = new n.ARRAY_TYPE(4);
                a[0] = 0;
                a[1] = 0;
                a[2] = 0;
                a[3] = 1;
                return a
            }
        };
        b.rotationTo = function () {
            var c = a.create(), e = a.fromValues(1, 0, 0), g = a.fromValues(0, 1, 0);
            return function (f, h, l) {
                var k = a.dot(h, l);
                if (-0.999999 > k)return a.cross(c, e, h), 1E-6 > a.length(c) && a.cross(c, g, h), a.normalize(c, c), b.setAxisAngle(f, c, Math.PI), f;
                if (0.999999 < k)return f[0] = 0, f[1] = 0, f[2] = 0, f[3] = 1, f;
                a.cross(c,
                    h, l);
                f[0] = c[0];
                f[1] = c[1];
                f[2] = c[2];
                f[3] = 1 + k;
                return b.normalize(f, f)
            }
        }();
        b.setAxes = function () {
            var a = c.create();
            return function (c, g, f, h) {
                a[0] = f[0];
                a[3] = f[1];
                a[6] = f[2];
                a[1] = h[0];
                a[4] = h[1];
                a[7] = h[2];
                a[2] = -g[0];
                a[5] = -g[1];
                a[8] = -g[2];
                return b.normalize(c, b.fromMat3(c, a))
            }
        }();
        b.clone = p.clone;
        b.fromValues = p.fromValues;
        b.copy = p.copy;
        b.set = p.set;
        b.identity = function (a) {
            a[0] = 0;
            a[1] = 0;
            a[2] = 0;
            a[3] = 1;
            return a
        };
        b.setAxisAngle = function (a, b, c) {
            c *= 0.5;
            var f = Math.sin(c);
            a[0] = f * b[0];
            a[1] = f * b[1];
            a[2] = f * b[2];
            a[3] = Math.cos(c);
            return a
        };
        b.getAxisAngle = function (a, b) {
            var c = 2 * Math.acos(b[3]), f = Math.sin(c / 2);
            0 != f ? (a[0] = b[0] / f, a[1] = b[1] / f, a[2] = b[2] / f) : (a[0] = 1, a[1] = 0, a[2] = 0);
            return c
        };
        b.add = p.add;
        b.multiply = function (a, b, c) {
            var f = b[0], h = b[1], l = b[2];
            b = b[3];
            var k = c[0], m = c[1], n = c[2];
            c = c[3];
            a[0] = f * c + b * k + h * n - l * m;
            a[1] = h * c + b * m + l * k - f * n;
            a[2] = l * c + b * n + f * m - h * k;
            a[3] = b * c - f * k - h * m - l * n;
            return a
        };
        b.mul = b.multiply;
        b.scale = p.scale;
        b.rotateX = function (a, b, c) {
            c *= 0.5;
            var f = b[0], h = b[1], l = b[2];
            b = b[3];
            var k = Math.sin(c);
            c = Math.cos(c);
            a[0] = f * c + b * k;
            a[1] = h *
                c + l * k;
            a[2] = l * c - h * k;
            a[3] = b * c - f * k;
            return a
        };
        b.rotateY = function (a, b, c) {
            c *= 0.5;
            var f = b[0], h = b[1], l = b[2];
            b = b[3];
            var k = Math.sin(c);
            c = Math.cos(c);
            a[0] = f * c - l * k;
            a[1] = h * c + b * k;
            a[2] = l * c + f * k;
            a[3] = b * c - h * k;
            return a
        };
        b.rotateZ = function (a, b, c) {
            c *= 0.5;
            var f = b[0], h = b[1], l = b[2];
            b = b[3];
            var k = Math.sin(c);
            c = Math.cos(c);
            a[0] = f * c + h * k;
            a[1] = h * c - f * k;
            a[2] = l * c + b * k;
            a[3] = b * c - l * k;
            return a
        };
        b.calculateW = function (a, b) {
            var c = b[0], f = b[1], h = b[2];
            a[0] = c;
            a[1] = f;
            a[2] = h;
            a[3] = Math.sqrt(Math.abs(1 - c * c - f * f - h * h));
            return a
        };
        b.dot = p.dot;
        b.lerp =
            p.lerp;
        b.slerp = function (a, b, c, f) {
            var h = b[0], l = b[1], k = b[2];
            b = b[3];
            var m = c[0], n = c[1], p = c[2];
            c = c[3];
            var q, s, C;
            s = h * m + l * n + k * p + b * c;
            0 > s && (s = -s, m = -m, n = -n, p = -p, c = -c);
            1E-6 < 1 - s ? (q = Math.acos(s), C = Math.sin(q), s = Math.sin((1 - f) * q) / C, f = Math.sin(f * q) / C) : s = 1 - f;
            a[0] = s * h + f * m;
            a[1] = s * l + f * n;
            a[2] = s * k + f * p;
            a[3] = s * b + f * c;
            return a
        };
        b.sqlerp = function () {
            var a = b.create(), c = b.create();
            return function (g, f, h, l, k, m) {
                b.slerp(a, f, k, m);
                b.slerp(c, h, l, m);
                b.slerp(g, a, c, 2 * m * (1 - m));
                return g
            }
        }();
        b.invert = function (a, b) {
            var c = b[0], f = b[1], h = b[2],
                l = b[3], k = c * c + f * f + h * h + l * l, k = k ? 1 / k : 0;
            a[0] = -c * k;
            a[1] = -f * k;
            a[2] = -h * k;
            a[3] = l * k;
            return a
        };
        b.conjugate = function (a, b) {
            a[0] = -b[0];
            a[1] = -b[1];
            a[2] = -b[2];
            a[3] = b[3];
            return a
        };
        b.length = p.length;
        b.len = b.length;
        b.squaredLength = p.squaredLength;
        b.sqrLen = b.squaredLength;
        b.normalize = p.normalize;
        b.fromMat3 = function (a, b) {
            var c = b[0] + b[4] + b[8];
            if (0 < c)c = Math.sqrt(c + 1), a[3] = 0.5 * c, c = 0.5 / c, a[0] = (b[5] - b[7]) * c, a[1] = (b[6] - b[2]) * c, a[2] = (b[1] - b[3]) * c; else {
                var f = 0;
                b[4] > b[0] && (f = 1);
                b[8] > b[3 * f + f] && (f = 2);
                var h = (f + 1) % 3, l = (f + 2) % 3, c = Math.sqrt(b[3 *
                    f + f] - b[3 * h + h] - b[3 * l + l] + 1);
                a[f] = 0.5 * c;
                c = 0.5 / c;
                a[3] = (b[3 * h + l] - b[3 * l + h]) * c;
                a[h] = (b[3 * h + f] + b[3 * f + h]) * c;
                a[l] = (b[3 * l + f] + b[3 * f + l]) * c
            }
            return a
        };
        b.str = function (a) {
            return "quat(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")"
        };
        b.exactEquals = p.exactEquals;
        b.equals = p.equals;
        q.exports = b
    }, function (q, p, s) {
        var n = s(1), c = {
            create: function () {
                var a = new n.ARRAY_TYPE(3);
                a[0] = 0;
                a[1] = 0;
                a[2] = 0;
                return a
            }, clone: function (a) {
                var b = new n.ARRAY_TYPE(3);
                b[0] = a[0];
                b[1] = a[1];
                b[2] = a[2];
                return b
            }, fromValues: function (a, b, c) {
                var e = new n.ARRAY_TYPE(3);
                e[0] = a;
                e[1] = b;
                e[2] = c;
                return e
            }, copy: function (a, b) {
                a[0] = b[0];
                a[1] = b[1];
                a[2] = b[2];
                return a
            }, set: function (a, b, c, e) {
                a[0] = b;
                a[1] = c;
                a[2] = e;
                return a
            }, add: function (a, b, c) {
                a[0] = b[0] + c[0];
                a[1] = b[1] + c[1];
                a[2] = b[2] + c[2];
                return a
            }, subtract: function (a, b, c) {
                a[0] = b[0] - c[0];
                a[1] = b[1] - c[1];
                a[2] = b[2] - c[2];
                return a
            }
        };
        c.sub = c.subtract;
        c.multiply = function (a, b, c) {
            a[0] = b[0] * c[0];
            a[1] = b[1] * c[1];
            a[2] = b[2] * c[2];
            return a
        };
        c.mul = c.multiply;
        c.divide = function (a, b, c) {
            a[0] = b[0] / c[0];
            a[1] = b[1] / c[1];
            a[2] = b[2] / c[2];
            return a
        };
        c.div =
            c.divide;
        c.ceil = function (a, b) {
            a[0] = Math.ceil(b[0]);
            a[1] = Math.ceil(b[1]);
            a[2] = Math.ceil(b[2]);
            return a
        };
        c.floor = function (a, b) {
            a[0] = Math.floor(b[0]);
            a[1] = Math.floor(b[1]);
            a[2] = Math.floor(b[2]);
            return a
        };
        c.min = function (a, b, c) {
            a[0] = Math.min(b[0], c[0]);
            a[1] = Math.min(b[1], c[1]);
            a[2] = Math.min(b[2], c[2]);
            return a
        };
        c.max = function (a, b, c) {
            a[0] = Math.max(b[0], c[0]);
            a[1] = Math.max(b[1], c[1]);
            a[2] = Math.max(b[2], c[2]);
            return a
        };
        c.round = function (a, b) {
            a[0] = Math.round(b[0]);
            a[1] = Math.round(b[1]);
            a[2] = Math.round(b[2]);
            return a
        };
        c.scale = function (a, b, c) {
            a[0] = b[0] * c;
            a[1] = b[1] * c;
            a[2] = b[2] * c;
            return a
        };
        c.scaleAndAdd = function (a, b, c, e) {
            a[0] = b[0] + c[0] * e;
            a[1] = b[1] + c[1] * e;
            a[2] = b[2] + c[2] * e;
            return a
        };
        c.distance = function (a, b) {
            var c = b[0] - a[0], e = b[1] - a[1], g = b[2] - a[2];
            return Math.sqrt(c * c + e * e + g * g)
        };
        c.dist = c.distance;
        c.squaredDistance = function (a, b) {
            var c = b[0] - a[0], e = b[1] - a[1], g = b[2] - a[2];
            return c * c + e * e + g * g
        };
        c.sqrDist = c.squaredDistance;
        c.length = function (a) {
            var b = a[0], c = a[1];
            a = a[2];
            return Math.sqrt(b * b + c * c + a * a)
        };
        c.len = c.length;
        c.squaredLength =
            function (a) {
                var b = a[0], c = a[1];
                a = a[2];
                return b * b + c * c + a * a
            };
        c.sqrLen = c.squaredLength;
        c.negate = function (a, b) {
            a[0] = -b[0];
            a[1] = -b[1];
            a[2] = -b[2];
            return a
        };
        c.inverse = function (a, b) {
            a[0] = 1 / b[0];
            a[1] = 1 / b[1];
            a[2] = 1 / b[2];
            return a
        };
        c.normalize = function (a, b) {
            var c = b[0], e = b[1], g = b[2], c = c * c + e * e + g * g;
            0 < c && (c = 1 / Math.sqrt(c), a[0] = b[0] * c, a[1] = b[1] * c, a[2] = b[2] * c);
            return a
        };
        c.dot = function (a, b) {
            return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
        };
        c.cross = function (a, b, c) {
            var e = b[0], g = b[1];
            b = b[2];
            var f = c[0], h = c[1];
            c = c[2];
            a[0] = g * c - b * h;
            a[1] =
                b * f - e * c;
            a[2] = e * h - g * f;
            return a
        };
        c.lerp = function (a, b, c, e) {
            var g = b[0], f = b[1];
            b = b[2];
            a[0] = g + e * (c[0] - g);
            a[1] = f + e * (c[1] - f);
            a[2] = b + e * (c[2] - b);
            return a
        };
        c.hermite = function (a, b, c, e, g, f) {
            var h = f * f, l = h * (2 * f - 3) + 1, k = h * (f - 2) + f, m = h * (f - 1);
            f = h * (3 - 2 * f);
            a[0] = b[0] * l + c[0] * k + e[0] * m + g[0] * f;
            a[1] = b[1] * l + c[1] * k + e[1] * m + g[1] * f;
            a[2] = b[2] * l + c[2] * k + e[2] * m + g[2] * f;
            return a
        };
        c.bezier = function (a, b, c, e, g, f) {
            var h = 1 - f, l = h * h, k = f * f, m = l * h, l = 3 * f * l, h = 3 * k * h;
            f *= k;
            a[0] = b[0] * m + c[0] * l + e[0] * h + g[0] * f;
            a[1] = b[1] * m + c[1] * l + e[1] * h + g[1] * f;
            a[2] = b[2] * m +
                c[2] * l + e[2] * h + g[2] * f;
            return a
        };
        c.random = function (a, b) {
            b = b || 1;
            var c = 2 * n.RANDOM() * Math.PI, e = 2 * n.RANDOM() - 1, g = Math.sqrt(1 - e * e) * b;
            a[0] = Math.cos(c) * g;
            a[1] = Math.sin(c) * g;
            a[2] = e * b;
            return a
        };
        c.transformMat4 = function (a, b, c) {
            var e = b[0], g = b[1];
            b = b[2];
            var f = c[3] * e + c[7] * g + c[11] * b + c[15], f = f || 1;
            a[0] = (c[0] * e + c[4] * g + c[8] * b + c[12]) / f;
            a[1] = (c[1] * e + c[5] * g + c[9] * b + c[13]) / f;
            a[2] = (c[2] * e + c[6] * g + c[10] * b + c[14]) / f;
            return a
        };
        c.transformMat3 = function (a, b, c) {
            var e = b[0], g = b[1];
            b = b[2];
            a[0] = e * c[0] + g * c[3] + b * c[6];
            a[1] = e * c[1] + g * c[4] +
                b * c[7];
            a[2] = e * c[2] + g * c[5] + b * c[8];
            return a
        };
        c.transformQuat = function (a, b, c) {
            var e = b[0], g = b[1], f = b[2];
            b = c[0];
            var h = c[1], l = c[2];
            c = c[3];
            var k = c * e + h * f - l * g, m = c * g + l * e - b * f, n = c * f + b * g - h * e, e = -b * e - h * g - l * f;
            a[0] = k * c + e * -b + m * -l - n * -h;
            a[1] = m * c + e * -h + n * -b - k * -l;
            a[2] = n * c + e * -l + k * -h - m * -b;
            return a
        };
        c.rotateX = function (a, b, c, e) {
            var g = [], f = [];
            g[0] = b[0] - c[0];
            g[1] = b[1] - c[1];
            g[2] = b[2] - c[2];
            f[0] = g[0];
            f[1] = g[1] * Math.cos(e) - g[2] * Math.sin(e);
            f[2] = g[1] * Math.sin(e) + g[2] * Math.cos(e);
            a[0] = f[0] + c[0];
            a[1] = f[1] + c[1];
            a[2] = f[2] + c[2];
            return a
        };
        c.rotateY = function (a, b, c, e) {
            var g = [], f = [];
            g[0] = b[0] - c[0];
            g[1] = b[1] - c[1];
            g[2] = b[2] - c[2];
            f[0] = g[2] * Math.sin(e) + g[0] * Math.cos(e);
            f[1] = g[1];
            f[2] = g[2] * Math.cos(e) - g[0] * Math.sin(e);
            a[0] = f[0] + c[0];
            a[1] = f[1] + c[1];
            a[2] = f[2] + c[2];
            return a
        };
        c.rotateZ = function (a, b, c, e) {
            var g = [], f = [];
            g[0] = b[0] - c[0];
            g[1] = b[1] - c[1];
            g[2] = b[2] - c[2];
            f[0] = g[0] * Math.cos(e) - g[1] * Math.sin(e);
            f[1] = g[0] * Math.sin(e) + g[1] * Math.cos(e);
            f[2] = g[2];
            a[0] = f[0] + c[0];
            a[1] = f[1] + c[1];
            a[2] = f[2] + c[2];
            return a
        };
        c.forEach = function () {
            var a = c.create();
            return function (b,
                             c, e, g, f, h) {
                c || (c = 3);
                e || (e = 0);
                for (g = g ? Math.min(g * c + e, b.length) : b.length; e < g; e += c)a[0] = b[e], a[1] = b[e + 1], a[2] = b[e + 2], f(a, a, h), b[e] = a[0], b[e + 1] = a[1], b[e + 2] = a[2];
                return b
            }
        }();
        c.angle = function (a, b) {
            var d = c.fromValues(a[0], a[1], a[2]), e = c.fromValues(b[0], b[1], b[2]);
            c.normalize(d, d);
            c.normalize(e, e);
            d = c.dot(d, e);
            return 1 < d ? 0 : Math.acos(d)
        };
        c.str = function (a) {
            return "vec3(" + a[0] + ", " + a[1] + ", " + a[2] + ")"
        };
        c.exactEquals = function (a, b) {
            return a[0] === b[0] && a[1] === b[1] && a[2] === b[2]
        };
        c.equals = function (a, b) {
            var c = a[0],
                e = a[1], g = a[2], f = b[0], h = b[1], l = b[2];
            return Math.abs(c - f) <= n.EPSILON * Math.max(1, Math.abs(c), Math.abs(f)) && Math.abs(e - h) <= n.EPSILON * Math.max(1, Math.abs(e), Math.abs(h)) && Math.abs(g - l) <= n.EPSILON * Math.max(1, Math.abs(g), Math.abs(l))
        };
        q.exports = c
    }, function (q, p, s) {
        var n = s(1), c = {
            create: function () {
                var a = new n.ARRAY_TYPE(4);
                a[0] = 0;
                a[1] = 0;
                a[2] = 0;
                a[3] = 0;
                return a
            }, clone: function (a) {
                var b = new n.ARRAY_TYPE(4);
                b[0] = a[0];
                b[1] = a[1];
                b[2] = a[2];
                b[3] = a[3];
                return b
            }, fromValues: function (a, b, c, e) {
                var g = new n.ARRAY_TYPE(4);
                g[0] = a;
                g[1] = b;
                g[2] = c;
                g[3] = e;
                return g
            }, copy: function (a, b) {
                a[0] = b[0];
                a[1] = b[1];
                a[2] = b[2];
                a[3] = b[3];
                return a
            }, set: function (a, b, c, e, g) {
                a[0] = b;
                a[1] = c;
                a[2] = e;
                a[3] = g;
                return a
            }, add: function (a, b, c) {
                a[0] = b[0] + c[0];
                a[1] = b[1] + c[1];
                a[2] = b[2] + c[2];
                a[3] = b[3] + c[3];
                return a
            }, subtract: function (a, b, c) {
                a[0] = b[0] - c[0];
                a[1] = b[1] - c[1];
                a[2] = b[2] - c[2];
                a[3] = b[3] - c[3];
                return a
            }
        };
        c.sub = c.subtract;
        c.multiply = function (a, b, c) {
            a[0] = b[0] * c[0];
            a[1] = b[1] * c[1];
            a[2] = b[2] * c[2];
            a[3] = b[3] * c[3];
            return a
        };
        c.mul = c.multiply;
        c.divide = function (a,
                             b, c) {
            a[0] = b[0] / c[0];
            a[1] = b[1] / c[1];
            a[2] = b[2] / c[2];
            a[3] = b[3] / c[3];
            return a
        };
        c.div = c.divide;
        c.ceil = function (a, b) {
            a[0] = Math.ceil(b[0]);
            a[1] = Math.ceil(b[1]);
            a[2] = Math.ceil(b[2]);
            a[3] = Math.ceil(b[3]);
            return a
        };
        c.floor = function (a, b) {
            a[0] = Math.floor(b[0]);
            a[1] = Math.floor(b[1]);
            a[2] = Math.floor(b[2]);
            a[3] = Math.floor(b[3]);
            return a
        };
        c.min = function (a, b, c) {
            a[0] = Math.min(b[0], c[0]);
            a[1] = Math.min(b[1], c[1]);
            a[2] = Math.min(b[2], c[2]);
            a[3] = Math.min(b[3], c[3]);
            return a
        };
        c.max = function (a, b, c) {
            a[0] = Math.max(b[0], c[0]);
            a[1] = Math.max(b[1], c[1]);
            a[2] = Math.max(b[2], c[2]);
            a[3] = Math.max(b[3], c[3]);
            return a
        };
        c.round = function (a, b) {
            a[0] = Math.round(b[0]);
            a[1] = Math.round(b[1]);
            a[2] = Math.round(b[2]);
            a[3] = Math.round(b[3]);
            return a
        };
        c.scale = function (a, b, c) {
            a[0] = b[0] * c;
            a[1] = b[1] * c;
            a[2] = b[2] * c;
            a[3] = b[3] * c;
            return a
        };
        c.scaleAndAdd = function (a, b, c, e) {
            a[0] = b[0] + c[0] * e;
            a[1] = b[1] + c[1] * e;
            a[2] = b[2] + c[2] * e;
            a[3] = b[3] + c[3] * e;
            return a
        };
        c.distance = function (a, b) {
            var c = b[0] - a[0], e = b[1] - a[1], g = b[2] - a[2], f = b[3] - a[3];
            return Math.sqrt(c * c + e * e + g *
                g + f * f)
        };
        c.dist = c.distance;
        c.squaredDistance = function (a, b) {
            var c = b[0] - a[0], e = b[1] - a[1], g = b[2] - a[2], f = b[3] - a[3];
            return c * c + e * e + g * g + f * f
        };
        c.sqrDist = c.squaredDistance;
        c.length = function (a) {
            var b = a[0], c = a[1], e = a[2];
            a = a[3];
            return Math.sqrt(b * b + c * c + e * e + a * a)
        };
        c.len = c.length;
        c.squaredLength = function (a) {
            var b = a[0], c = a[1], e = a[2];
            a = a[3];
            return b * b + c * c + e * e + a * a
        };
        c.sqrLen = c.squaredLength;
        c.negate = function (a, b) {
            a[0] = -b[0];
            a[1] = -b[1];
            a[2] = -b[2];
            a[3] = -b[3];
            return a
        };
        c.inverse = function (a, b) {
            a[0] = 1 / b[0];
            a[1] = 1 / b[1];
            a[2] =
                1 / b[2];
            a[3] = 1 / b[3];
            return a
        };
        c.normalize = function (a, b) {
            var c = b[0], e = b[1], g = b[2], f = b[3], h = c * c + e * e + g * g + f * f;
            0 < h && (h = 1 / Math.sqrt(h), a[0] = c * h, a[1] = e * h, a[2] = g * h, a[3] = f * h);
            return a
        };
        c.dot = function (a, b) {
            return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3]
        };
        c.lerp = function (a, b, c, e) {
            var g = b[0], f = b[1], h = b[2];
            b = b[3];
            a[0] = g + e * (c[0] - g);
            a[1] = f + e * (c[1] - f);
            a[2] = h + e * (c[2] - h);
            a[3] = b + e * (c[3] - b);
            return a
        };
        c.random = function (a, b) {
            b = b || 1;
            a[0] = n.RANDOM();
            a[1] = n.RANDOM();
            a[2] = n.RANDOM();
            a[3] = n.RANDOM();
            c.normalize(a, a);
            c.scale(a,
                a, b);
            return a
        };
        c.transformMat4 = function (a, b, c) {
            var e = b[0], g = b[1], f = b[2];
            b = b[3];
            a[0] = c[0] * e + c[4] * g + c[8] * f + c[12] * b;
            a[1] = c[1] * e + c[5] * g + c[9] * f + c[13] * b;
            a[2] = c[2] * e + c[6] * g + c[10] * f + c[14] * b;
            a[3] = c[3] * e + c[7] * g + c[11] * f + c[15] * b;
            return a
        };
        c.transformQuat = function (a, b, c) {
            var e = b[0], g = b[1], f = b[2], h = c[0], l = c[1], k = c[2];
            c = c[3];
            var m = c * e + l * f - k * g, n = c * g + k * e - h * f, p = c * f + h * g - l * e, e = -h * e - l * g - k * f;
            a[0] = m * c + e * -h + n * -k - p * -l;
            a[1] = n * c + e * -l + p * -h - m * -k;
            a[2] = p * c + e * -k + m * -l - n * -h;
            a[3] = b[3];
            return a
        };
        c.forEach = function () {
            var a = c.create();
            return function (b, c, e, g, f, h) {
                c || (c = 4);
                e || (e = 0);
                for (g = g ? Math.min(g * c + e, b.length) : b.length; e < g; e += c)a[0] = b[e], a[1] = b[e + 1], a[2] = b[e + 2], a[3] = b[e + 3], f(a, a, h), b[e] = a[0], b[e + 1] = a[1], b[e + 2] = a[2], b[e + 3] = a[3];
                return b
            }
        }();
        c.str = function (a) {
            return "vec4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")"
        };
        c.exactEquals = function (a, b) {
            return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3]
        };
        c.equals = function (a, b) {
            var c = a[0], e = a[1], g = a[2], f = a[3], h = b[0], l = b[1], k = b[2], m = b[3];
            return Math.abs(c - h) <= n.EPSILON * Math.max(1, Math.abs(c),
                    Math.abs(h)) && Math.abs(e - l) <= n.EPSILON * Math.max(1, Math.abs(e), Math.abs(l)) && Math.abs(g - k) <= n.EPSILON * Math.max(1, Math.abs(g), Math.abs(k)) && Math.abs(f - m) <= n.EPSILON * Math.max(1, Math.abs(f), Math.abs(m))
        };
        q.exports = c
    }, function (q, p, s) {
        var n = s(1), c = {
            create: function () {
                var a = new n.ARRAY_TYPE(2);
                a[0] = 0;
                a[1] = 0;
                return a
            }, clone: function (a) {
                var b = new n.ARRAY_TYPE(2);
                b[0] = a[0];
                b[1] = a[1];
                return b
            }, fromValues: function (a, b) {
                var c = new n.ARRAY_TYPE(2);
                c[0] = a;
                c[1] = b;
                return c
            }, copy: function (a, b) {
                a[0] = b[0];
                a[1] = b[1];
                return a
            },
            set: function (a, b, c) {
                a[0] = b;
                a[1] = c;
                return a
            }, add: function (a, b, c) {
                a[0] = b[0] + c[0];
                a[1] = b[1] + c[1];
                return a
            }, subtract: function (a, b, c) {
                a[0] = b[0] - c[0];
                a[1] = b[1] - c[1];
                return a
            }
        };
        c.sub = c.subtract;
        c.multiply = function (a, b, c) {
            a[0] = b[0] * c[0];
            a[1] = b[1] * c[1];
            return a
        };
        c.mul = c.multiply;
        c.divide = function (a, b, c) {
            a[0] = b[0] / c[0];
            a[1] = b[1] / c[1];
            return a
        };
        c.div = c.divide;
        c.ceil = function (a, b) {
            a[0] = Math.ceil(b[0]);
            a[1] = Math.ceil(b[1]);
            return a
        };
        c.floor = function (a, b) {
            a[0] = Math.floor(b[0]);
            a[1] = Math.floor(b[1]);
            return a
        };
        c.min =
            function (a, b, c) {
                a[0] = Math.min(b[0], c[0]);
                a[1] = Math.min(b[1], c[1]);
                return a
            };
        c.max = function (a, b, c) {
            a[0] = Math.max(b[0], c[0]);
            a[1] = Math.max(b[1], c[1]);
            return a
        };
        c.round = function (a, b) {
            a[0] = Math.round(b[0]);
            a[1] = Math.round(b[1]);
            return a
        };
        c.scale = function (a, b, c) {
            a[0] = b[0] * c;
            a[1] = b[1] * c;
            return a
        };
        c.scaleAndAdd = function (a, b, c, e) {
            a[0] = b[0] + c[0] * e;
            a[1] = b[1] + c[1] * e;
            return a
        };
        c.distance = function (a, b) {
            var c = b[0] - a[0], e = b[1] - a[1];
            return Math.sqrt(c * c + e * e)
        };
        c.dist = c.distance;
        c.squaredDistance = function (a, b) {
            var c =
                b[0] - a[0], e = b[1] - a[1];
            return c * c + e * e
        };
        c.sqrDist = c.squaredDistance;
        c.length = function (a) {
            var b = a[0];
            a = a[1];
            return Math.sqrt(b * b + a * a)
        };
        c.len = c.length;
        c.squaredLength = function (a) {
            var b = a[0];
            a = a[1];
            return b * b + a * a
        };
        c.sqrLen = c.squaredLength;
        c.negate = function (a, b) {
            a[0] = -b[0];
            a[1] = -b[1];
            return a
        };
        c.inverse = function (a, b) {
            a[0] = 1 / b[0];
            a[1] = 1 / b[1];
            return a
        };
        c.normalize = function (a, b) {
            var c = b[0], e = b[1], c = c * c + e * e;
            0 < c && (c = 1 / Math.sqrt(c), a[0] = b[0] * c, a[1] = b[1] * c);
            return a
        };
        c.dot = function (a, b) {
            return a[0] * b[0] + a[1] *
                b[1]
        };
        c.cross = function (a, b, c) {
            b = b[0] * c[1] - b[1] * c[0];
            a[0] = a[1] = 0;
            a[2] = b;
            return a
        };
        c.lerp = function (a, b, c, e) {
            var g = b[0];
            b = b[1];
            a[0] = g + e * (c[0] - g);
            a[1] = b + e * (c[1] - b);
            return a
        };
        c.random = function (a, b) {
            b = b || 1;
            var c = 2 * n.RANDOM() * Math.PI;
            a[0] = Math.cos(c) * b;
            a[1] = Math.sin(c) * b;
            return a
        };
        c.transformMat2 = function (a, b, c) {
            var e = b[0];
            b = b[1];
            a[0] = c[0] * e + c[2] * b;
            a[1] = c[1] * e + c[3] * b;
            return a
        };
        c.transformMat2d = function (a, b, c) {
            var e = b[0];
            b = b[1];
            a[0] = c[0] * e + c[2] * b + c[4];
            a[1] = c[1] * e + c[3] * b + c[5];
            return a
        };
        c.transformMat3 = function (a,
                                    b, c) {
            var e = b[0];
            b = b[1];
            a[0] = c[0] * e + c[3] * b + c[6];
            a[1] = c[1] * e + c[4] * b + c[7];
            return a
        };
        c.transformMat4 = function (a, b, c) {
            var e = b[0];
            b = b[1];
            a[0] = c[0] * e + c[4] * b + c[12];
            a[1] = c[1] * e + c[5] * b + c[13];
            return a
        };
        c.forEach = function () {
            var a = c.create();
            return function (b, c, e, g, f, h) {
                c || (c = 2);
                e || (e = 0);
                for (g = g ? Math.min(g * c + e, b.length) : b.length; e < g; e += c)a[0] = b[e], a[1] = b[e + 1], f(a, a, h), b[e] = a[0], b[e + 1] = a[1];
                return b
            }
        }();
        c.str = function (a) {
            return "vec2(" + a[0] + ", " + a[1] + ")"
        };
        c.exactEquals = function (a, b) {
            return a[0] === b[0] && a[1] === b[1]
        };
        c.equals = function (a, b) {
            var c = a[0], e = a[1], g = b[0], f = b[1];
            return Math.abs(c - g) <= n.EPSILON * Math.max(1, Math.abs(c), Math.abs(g)) && Math.abs(e - f) <= n.EPSILON * Math.max(1, Math.abs(e), Math.abs(f))
        };
        q.exports = c
    }])
});

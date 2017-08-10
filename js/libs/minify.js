/**
 * Created by Suhan on 08/03/2017.
 */
(function () {
    var c = "undefined" !== typeof module && module.exports, a = "undefined" !== typeof Element && "ALLOW_KEYBOARD_INPUT"in Element, b = function () {
        var a, b, c = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "), "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "),
            "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")], d = 0;
        b = c.length;
        for (var m = {}; d < b; d++)if ((a = c[d]) && a[1]in document) {
            d = 0;
            for (b = a.length; d < b; d++)m[c[0][d]] = a[d];
            return m
        }
        return !1
    }(), d = {
        request: function (c) {
            var d = b.requestFullscreen;
            c = c || document.documentElement;
            if (/5\.1[\.\d]* Safari/.test(navigator.userAgent))c[d]();
            else c[d](a && Element.ALLOW_KEYBOARD_INPUT)
        }, exit: function () {
            document[b.exitFullscreen]()
        }, toggle: function (a) {
            this.isFullscreen ? this.exit() : this.request(a)
        }, raw: b
    };
    b ? (Object.defineProperties(d, {
        isFullscreen: {
            get: function () {
                return Boolean(document[b.fullscreenElement])
            }
        }, element: {
            enumerable: !0, get: function () {
                return document[b.fullscreenElement]
            }
        }, enabled: {
            enumerable: !0, get: function () {
                return Boolean(document[b.fullscreenEnabled])
            }
        }
    }), c ? module.exports = d : window.screenfull = d) : c ? module.exports = !1 : window.screenfull = !1
})();
Point = function (c, a) {
    this.x = c;
    this.y = a;
    return this
};
var CMUtiles = CMUtiles || function () {
        function c(a, b, c, e) {
            a = c - a;
            b = e - b;
            return Math.sqrt(a * a + b * b)
        }

        return {
            domLoadScript: function (a, b) {
                var c;
                c = document.createElement("script");
                c.type = "text/javascript";
                c.src = a;
                c.onload = b;
                document.getElementsByTagName("head")[0].appendChild(c);
                return c
            }, getFullSize: function (a, b, c, e) {
                var f = a, h = b, g = 0, m = 0;
                c / e > a / b ? (f = 0.5 + c * (b / e) | 0, g = 0.5 + (a - f) / 2 | 0) : (h = 0.5 + e * (a / c) | 0, m = 0.5 + (b - h) / 2 | 0);
                return {w: f, h: h, x: g, y: m}
            }, getFitSize: function (a, b, c, e) {
                var f = a, h = b, g = 0, m = 0, l;
                c / e < a / b ? (l = b / e, f = 0.5 +
                    c * l | 0, g = 0.5 + (a - f) / 2 | 0) : (l = a / c, h = 0.5 + e * l | 0, m = 0.5 + (b - h) / 2 | 0);
                return {w: f, h: h, x: g, y: m, scale: l}
            }, getInsideMax: function (a, b) {
                return (a + b * (Math.abs(a / 10 | 0) + 1)) % b
            }, openPopup: function (a, b, c, e) {
                window.open(a, b, "top=" + (screen.height - e >> 1) + ",left=" + (screen.width - c >> 1) + ",width=" + c + ",height=" + e)
            }, addZeros: function (a, b) {
                var c = a.toString(), e = "", f = c.length, h = b + 1;
                if (f < h) {
                    f = h - f;
                    for (h = 1; h <= f; h++)e += "0";
                    c = e + c
                }
                return c
            }, addDots: function (a, b) {
                for (var c = a.toString().split(""), e = c.length, f = e / 3, h = f << 0, h = h == f ? h : h + 1, f = 1; f < h; f++)c.splice(e -
                    3 * f, 0, b);
                return c.join("")
            }, getCurrent: function (a, b, c, e, f) {
                a = (f - e) / (c - b) * (a - b) + e;
                e < f ? a < e ? a = e : a > f && (a = f) : a > e ? a = e : a < f && (a = f);
                return a
            }, getWallPosition: function (a, b, c, e) {
                return {x: a % b * c, y: (a / b | 0) * e}
            }, randomInteger: function (a, b) {
                return 0.5 + (Math.random() * (b - a) + a) | 0
            }, randomFloat: function (a, b) {
                return a + Math.random() * (b - a)
            }, isArray: function (a) {
                return "[object Array]" === Object.prototype.toString.call(a)
            }, isObject: function (a) {
                return "[object Object]" === Object.prototype.toString.call(a)
            }, shuffle: function (a) {
                a =
                    a.slice();
                for (var b = a.length, c = b, e, f; c--;)e = Math.random() * b | 0, f = a[c], a[c] = a[e], a[e] = f;
                return a
            }, removeDom: function (a) {
                var b = a.parentNode;
                b && b.removeChild(a)
            }, getQueryParams: function (a) {
                a = a.split("+").join(" ");
                for (var b = {}, c, e = /[?&]?([^=]+)=([^&]*)/g; c = e.exec(a);)b[decodeURIComponent(c[1])] = decodeURIComponent(c[2]);
                return b
            }, loadJSON: function (a, b) {
                var c = new XMLHttpRequest;
                c.overrideMimeType("application/json");
                c.open("GET", a, !0);
                c.onreadystatechange = function () {
                    if (4 == c.readyState && "200" == c.status) {
                        var a =
                            JSON.parse(c.responseText);
                        b(a)
                    }
                };
                c.send(null)
            }, getMax: function (a, b, d, e) {
                var f = c(0, 0, d, e), h = c(a, 0, d, e), g = c(0, b, d, e);
                a = c(a, b, d, e);
                f = Math.max(f, h);
                g = Math.max(g, a);
                return Math.max(f, g) + 0.5 | 0
            }, isBlankString: function (a) {
                return !a || /^\s*$/.test(a)
            }, escapeRegExChars: function (a) {
                return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            }, IsNumeric: function (a) {
                return Number(parseFloat(a)) == a
            }, getPointOnQuad: function (a, b, c, e) {
                var f = (b.x - a.x) * e + a.x;
                a = (b.y - a.y) * e + a.y;
                return new Point(((c.x - b.x) * e + b.x - f) * e +
                    f, ((c.y - b.y) * e + b.y - a) * e + a)
            }, pointCircle: function (a, b, c, e, f) {
                a -= c;
                b -= e;
                return Math.sqrt(a * a + b * b) <= f ? !0 : !1
            }, circleCircle: function (a, b, c, e, f, h) {
                a -= e;
                b -= f;
                return Math.sqrt(a * a + b * b) <= c + h ? !0 : !1
            }, linePoint: function (a, b, d, e, f, h, g) {
                var m = c(f, h, a, b);
                f = c(f, h, d, e);
                a = c(a, b, d, e);
                return m + f >= a - g && m + f <= a + g ? !0 : !1
            }
        }
    }();
(function (c) {
    function a(a) {
        var b = Array.prototype.slice.call(arguments, 1), c, d, g = b.length;
        for (d = 0; d < g; d++)if (c = typeof a[b[d]], !/^(?:function|object|unknown)$/.test(c))return !1;
        return !0
    }

    function b(a, b) {
        return function (c) {
            b.call(f(a), c || window.event)
        }
    }

    function d(a, b) {
        return function (c) {
            if (q[a] && q[a][b])for (var d = q[a][b], g = 0, e = d.length; g < e; g++)d[g].call(this, c || window.event)
        }
    }

    var e = function () {
        if ("undefined" !== typeof document.documentElement.uniqueID)return function (a) {
            return a.uniqueID
        };
        var a = 0;
        return function (b) {
            return b.__uniqueID ||
                (b.__uniqueID = "uniqueID__" + a++)
        }
    }(), f, h;
    (function () {
        var a = {};
        f = function (b) {
            return a[b]
        };
        h = function (b, c) {
            a[b] = c
        }
    })();
    var g, m;
    g = a(document.documentElement, "addEventListener", "removeEventListener") && a(window, "addEventListener", "removeEventListener");
    var l = a(document.documentElement, "attachEvent", "detachEvent") && a(window, "attachEvent", "detachEvent"), p = {}, q = {};
    g ? (g = function (a, b, c) {
        a.addEventListener(b, c, !1);
        a.eventHolder || (a.eventHolder = []);
        a.eventHolder[a.eventHolder.length] = [b, c]
    }, m = function (a, b, c) {
        a.removeEventListener(b,
            c, !1)
    }) : l ? (g = function (a, c, d) {
        var g = e(a);
        h(g, a);
        p[g] || (p[g] = {});
        p[g][c] || (p[g][c] = []);
        d = {handler: d, wrappedHandler: b(g, d)};
        p[g][c].push(d);
        a.attachEvent("on" + c, d.wrappedHandler)
    }, m = function (a, b, c) {
        var d = e(a), g;
        if (p[d] && p[d][b])for (var f = 0, m = p[d][b].length; f < m; f++)(g = p[d][b][f]) && g.handler === c && (a.detachEvent("on" + b, g.wrappedHandler), p[d][b][f] = null)
    }) : (g = function (a, b, c) {
        var g = e(a);
        q[g] || (q[g] = {});
        if (!q[g][b]) {
            q[g][b] = [];
            var f = a["on" + b];
            f && q[g][b].push(f);
            a["on" + b] = d(g, b)
        }
        q[g][b].push(c)
    }, m = function (a,
                     b, c) {
        a = e(a);
        if (q[a] && q[a][b]) {
            b = q[a][b];
            a = 0;
            for (var d = b.length; a < d; a++)b[a] === c && b.splice(a, 1)
        }
    });
    c.addListener = g;
    c.removeListener = m;
    c.hasListener = function (a, b, c) {
        if (a.eventHolder)if (c)for (var d = 0; d < a.eventHolder.length; d++) {
            if (a.eventHolder[d][0] == b && String(a.eventHolder[d][1]) == String(c))return !0
        } else for (d = 0; d < a.eventHolder.length; d++)if (a.eventHolder[d][0] == b)return !0;
        return !1
    };
    c.removeListenerByType = function (a, b) {
        if (a.eventHolder) {
            for (var c = 0, d = 0; d < a.eventHolder.length; d++)a.eventHolder[d][0] ==
            b && (m(a, b, a.eventHolder[d][1]), a.eventHolder.splice(d, 1), c++, d--);
            return 0 < c ? !0 : !1
        }
        return !1
    }
})(this);
var CMDetect = new function () {
    this.isTouch = !1;
    if ("ontouchstart"in window || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints)this.isTouch = !0;
    this.DEVICE = "pc";
    this.RATIO = 2;
    if (Modernizr.csstransforms3d && Modernizr.canvas && Modernizr.webgl) {
        var c = window.getComputedStyle(document.documentElement, "");
        this.VENDOR = (Array.prototype.slice.call(c).join("").match(/-(moz|webkit|ms)-/) || "" === c.OLink && ["", "o"])[1];
        "moz" == this.VENDOR && (this.VENDOR = "Moz");
        this.TRANSFORM = this.VENDOR + "Transform";
        this.TIMING = this.VENDOR +
            "TransitionTimingFunction";
        this.DURATION = this.VENDOR + "TransitionDuration";
        this.DELAY = this.VENDOR + "TransitionDelay"
    } else this.VENDOR = ""
};
var StageController = StageController || function () {
        function c() {
            a()
        }

        function a() {
            var a = f.getBoundingClientRect(), c = a.width, a = a.height;
            0 < b.maxWidth && (c = c > b.maxWidth ? b.maxWidth : c);
            0 < b.maxHeight && (a = a > b.maxHeight ? b.maxHeight : a);
            0 < b.minWidth && (c = c < b.minWidth ? b.minWidth : c);
            0 < b.minHeight && (a = a < b.minHeight ? b.minHeight : a);
            if (b.stageWidth != c || b.stageHeight != a)for (b.stageWidth = c, b.stageHeight = a, "pc" != CMDetect.DEVICE && (h.style.width = c + "px", h.style.height = a + "px"), c = e.length; c--;)e[c]()
        }

        var b = {
            stageWidth: 0, stageHeight: 0,
            maxWidth: 0, maxHeight: 0
        }, d = [], e = [], f, h;
        b.init = function (d, e) {
            f = document.createElement("div");
            f.id = "check";
            h = d;
            document.body.appendChild(f);
            e && (b.maxWidth = e.maxw || 0, b.maxHeight = e.maxh || 0, b.minWidth = e.minw || 0, b.minHeight = e.minh || 0);
            window.addEventListener("resize", c, !0);
            a();
            window.DeviceOrientationEvent && window.addEventListener("orientationchange", c, !1)
        };
        b.resize = a;
        b.addResize = function (a, b) {
            -1 < d.indexOf(a) || (d.unshift(a), e.unshift(b), b())
        };
        b.removeResize = function (a) {
            a = d.indexOf(a);
            -1 < a && (d.splice(a, 1),
                e.splice(a, 1))
        };
        return b
    }();
var Address = Address || function () {
        function c(a) {
            102 == a.keyCode && screenfull.toggle(m)
        }

        function a() {
            Menu.show(p);
            d();
            f()
        }

        function b(a) {
            q && a != p && (h(), p = a, Menu.check(p), h(), Drawing.pause(), Transition.show(p, g.BG_COLOR[p]))
        }

        function d() {
            m.style.backgroundColor = g.BG_COLOR[p];
            Drawing.show(p)
        }

        function e() {
            Transition.hide();
            TweenLite.delayedCall(0.2, f)
        }

        function f() {
            q = 1;
            l.className = ""
        }

        function h() {
            q = 0;
            l.className = "uab"
        }

        var g = {
            URL_ABOUT: "about", URL_HAIRY: "hairy", URL_STICKY: "sticky", URL_PEEPY: "peepy", curURL: null,
            prevURL: null, BG_COLOR: ["#113063", "#3a052c", "#191919", "#e91e63"]
        }, m, l, p = 1, q = 1;
        g.init = function (b) {
            CMDetect.DEVICE = b;
            CMDetect.RATIO = 1 >= window.devicePixelRatio ? 1 : 2;
            m = document.getElementById("root");
            StageController.init(m, {minw: 320, minh: 320});
            3600 < StageController.stageWidth && 2E3 < StageController.stageHeight && (CMDetect.RATIO = 1);
            CMDetect.RATIO = 2;
            l = document.getElementById("menu");
            "webkit" != CMDetect.VENDOR && "Moz" != CMDetect.VENDOR && "ms" != CMDetect.VENDOR ? (document.body.innerHTML = "", document.body.appendChild(m),
                m.className = "admin", m.innerHTML = '<h1>Oops!</h1><div class="message">MON was created with HTML5 and CSS3, especially <a href="https://webkit.org/" target="_blank">WebKit</a> features.<br>It\'s a Chrome experiment and you can see perfectly on Chrome browser.<br>Please use <a href="http://www.google.com/chrome" target="_blank">Google Chrome browser</a>.</div>') : (CMDetect.isTouch && FastClick.attach(document.body), Scroll.init(m), Drawing.init(m), Transition.init(m), Menu.init(l), TweenLite.delayedCall(0.5,
                a), "pc" == CMDetect.DEVICE && addListener(window, "keypress", c))
        };
        g.able = f;
        g.change = b;
        g.endHide = function () {
            d();
            TweenLite.delayedCall(0.1, e)
        };
        g.unable = h;
        g.isAble = function () {
            return q
        };
        g.goNext = function () {
            var a = CMUtiles.getInsideMax(p + 1, 4);
            b(a)
        };
        return g
    }();
var Scroll = Scroll || function () {
        function c() {
            y = StageController.stageWidth;
            t = StageController.stageHeight;
            A = y >> 1;
            z = t - 54;
            n.x = y >> 1;
            n.y = t >> 1;
            s = Math.min(y, t) / 10
        }

        function a(b) {
            k = window.requestAnimationFrame(a);
            n.x += n.vx;
            n.y += n.vy;
            n.x > y - s ? n.vx *= -1 : n.x < s && (n.vx *= -1);
            n.y > t - s ? n.vy *= -1 : n.y < s && (n.vy *= -1);
            d(n.x, n.y)
        }

        function b(a) {
            var b = a.center.x;
            a = a.center.y;
            d(b, a);
            if (!CMUtiles.pointCircle(b, a, A, z, v))for (var c = x.length; c--;)x[c](b, a)
        }

        function d(a, b) {
            UI.mouseX2 += 0.2 * (a - UI.mouseX2);
            UI.mouseY2 += 0.2 * (b - UI.mouseY2)
        }

        function e(a) {
            var b = a.center.x;
            a = a.center.y;
            d(b, a);
            CMUtiles.pointCircle(b, a, A, z, v) || (p = 1, UI.mouseX = b, UI.mouseY = a, k && r && (window.cancelAnimationFrame(k), k = null))
        }

        function f(a) {
            var b = a.center.x;
            a = a.center.y;
            d(b, a);
            p && (UI.mouseX = b, UI.mouseY = a)
        }

        function h(b) {
            p = 0;
            UI.mouseX = -5E3;
            UI.mouseY = -5E3;
            !k && r && (k = window.requestAnimationFrame(a))
        }

        function g(a) {
            d(a.pageX, a.pageY)
        }

        function m(a) {
            a.preventDefault()
        }

        var l, p = 0, q, r = 0, k, n = {x: 0, y: 0, vx: 3, vy: 3}, s, u = [], x = [], y, t, A, z, v = 30;
        return {
            init: function (d) {
                l = d;
                q = new Hammer.Manager(l);
                q.add(new Hammer.Press);
                q.add(new Hammer.Pan({threshold: 0, pointers: 0}));
                q.on("panstart", e);
                q.on("panmove", f);
                q.on("panend", h);
                q.on("press", b);
                CMDetect.isTouch && addListener(l, "touchmove", m);
                addListener(l, "mousemove", g);
                StageController.addResize("Scroll", c);
                "pc" != CMDetect.DEVICE && (r = 1, k = window.requestAnimationFrame(a))
            }, getIsDown: function () {
                return p
            }, addDown: function (a, b) {
                -1 < u.indexOf(a) || (u.unshift(a), x.unshift(b))
            }, removeDown: function (a) {
                a = u.indexOf(a);
                -1 < a && (u.splice(a, 1), x.splice(a, 1))
            }
        }
    }();
var Menu = Menu || function () {
        function c(a) {
            Address.goNext()
        }

        var a, b, d = [], e, f, h;
        return {
            init: function (e) {
                a = e;
                addListener(a, "click", c);
                b = a.getElementsByTagName("ul")[0];
                e = b.getElementsByTagName("li");
                h = e.length;
                var f, l;
                for (f = 0; f < h; f++)l = e[f], d[f] = new UI.menu(l)
            }, show: function (b) {
                f = b;
                TweenLite.delayedCall(3, function () {
                    a.style[CMDetect.TRANSFORM] = "translate3d(0px, 0px, 0px)";
                    d[f].show()
                })
            }, check: function (a) {
                e = f;
                f = a;
                d[e].hide();
                d[f].show()
            }
        }
    }();
var Transition = Transition || function () {
        var c, a, b, d, e, f, h, g, m;

        function l() {
            g = h = B;
            m = 0;
            d = -G;
            e = C + G;
            f = B;
            c = 0;
            a = C;
            b = B;
            TweenLite.to(y, 1.6, {y: 1, ease: Expo.easeInOut});
            TweenLite.delayedCall(1.6, p);
            x = window.requestAnimationFrame(q);
            TweenLite.delayedCall(0.1, function () {
                n.appendChild(s)
            })
        }

        function p() {
            Drawing.hide();
            TweenLite.delayedCall(0.5, Address.endHide)
        }

        function q(l) {
            x = window.requestAnimationFrame(q);
            k.clearRect(0, 0, w, C);
            c = (h - d) * y.y + d;
            a = (g - e) * y.y + e;
            b = (m - f) * y.y + f;
            l = c - b;
            var p = a + b, D, n;
            k.save();
            for (D = 1; D < t; D++)n =
                CMUtiles.getPointOnQuad({x: 0, y: c}, {x: F, y: l}, {
                    x: w,
                    y: c
                }, D / t), D % 2 && r(n, 1), n = CMUtiles.getPointOnQuad({x: 0, y: a}, {x: F, y: p}, {
                x: w,
                y: a
            }, D / t), 0 == D % 2 && r(n, 0);
            k.restore();
            k.beginPath();
            k.moveTo(0, 0);
            k.lineTo(w, 0);
            k.lineTo(w, c);
            k.quadraticCurveTo(F, l, 0, c);
            k.lineTo(0, 0);
            k.closePath();
            k.fill();
            k.beginPath();
            k.moveTo(0, C);
            k.lineTo(w, C);
            k.lineTo(w, a);
            k.quadraticCurveTo(F, p, 0, a);
            k.lineTo(0, C);
            k.closePath();
            k.fill()
        }

        function r(a, b) {
            var c = a.x, d = c + (v >> 1), f, e;
            b ? (f = a.y - 20, e = z) : (f = a.y + 20, e = -z);
            k.fillStyle = "#fff";
            k.beginPath();
            k.moveTo(c, f);
            k.lineTo(c + v, f);
            k.lineTo(c, f + e);
            k.lineTo(c - v, f);
            k.lineTo(c, f);
            k.closePath();
            k.fill();
            k.fillStyle = "#ccc";
            k.beginPath();
            k.moveTo(d, f);
            k.lineTo(c + v, f);
            k.lineTo(c, f + e);
            k.lineTo(d, f);
            k.closePath();
            k.fill()
        }

        var k, n, s, u, x, y = {y: 0}, t = 10, A = 120, z = 80, v = A >> 1, F, B, G, w, C;
        return {
            init: function (a) {
                n = a;
                s = document.createElement("canvas");
                s.className = "tl"
            }, show: function (a, b) {
                u = b;
                w = StageController.stageWidth;
                C = StageController.stageHeight;
                F = w >> 1;
                B = C >> 1;
                G = B >> 1;
                y.y = 0;
                var c = 0.1 * CMUtiles.getCurrent(w, 900, 320, 10,
                        5);
                A = CMUtiles.randomInteger(40, 200) * c;
                z = CMUtiles.randomInteger(60, 160) * c;
                t = 2 * CMUtiles.randomInteger(3, 40);
                v = A >> 1;
                s.width = w;
                s.height = C;
                k = s.getContext("2d");
                k.fillStyle = u;
                TweenLite.delayedCall(0.1, l)
            }, hide: function () {
                x && (window.cancelAnimationFrame(x), x = null);
                k.clearRect(0, 0, w, C);
                CMUtiles.removeDom(s)
            }
        }
    }();
var UI = {mouseX: -5E3, mouseY: -5E3, mouseX2: 0, mouseY2: 0};
UI.PI = Math.PI;
UI.PI2M = 2 * Math.PI;
UI.PI2H = Math.PI / 2;
UI.BoneGroup = function (c, a, b, d, e, f, h, g, m, l, p, q, r, k, n) {
    this.ctx = a;
    this.boneList = [];
    this.color = e;
    this.tx = b;
    this.ty = d;
    this.BONE_TOTAL = f;
    this.topLock = 1;
    this.CLENGTH = h;
    this.RADIUS = g;
    this.DERIVATION = m;
    this.GRAVITY = l;
    this.ROTATION_RATE = p;
    this.VERTICAL_RATE = q;
    this.MOUSE_PULL_RATE = r;
    this.FRICTION = k;
    this.MOUSE_MOVE_FRICTION = n;
    this.isDown = this.checked = 0;
    this.checkMax = 100 * Math.random() + 10;
    this.init();
    return this
};
UI.BoneGroup.prototype = {
    init: function () {
        var c;
        for (c = 0; c < this.BONE_TOTAL; c++) {
            var a = new UI.BoneCircle(this.RADIUS, this.CLENGTH);
            a.y = a.saveY = this.ty;
            a.x = this.tx;
            this.boneList.push(a)
        }
    }, engin: function () {
        var c;
        for (c = 0; c < this.DERIVATION; c++)this.rotate(), this.foce(), this.move();
        this.draw()
    }, rotate: function () {
        var c = this.boneList.length, a, b, d;
        for (a = 0; a < c; a++)b = this.boneList[a], d = this.boneList[a + 1], a + 1 < c && (this.calcConnectRForce(b, d, 0), this.calcConnectRForce(d, b, UI.PI)), b.vr *= this.FRICTION
    }, calcConnectRForce: function (c,
                                    a, b) {
        a = Math.atan2(a.y - c.y, a.x - c.x);
        c.vr += this.ajustRadian(a - (b + c.radian)) * this.ROTATION_RATE
    }, ajustRadian: function (c) {
        return c - UI.PI2M * Math.floor(0.5 + c / UI.PI2M)
    }, foce: function () {
        var c, a = this.boneList.length, b, d = 0;
        for (c = 0; c < a; c++)b = this.boneList[c], b.vy += this.GRAVITY, this.pointCircle(b.x, b.y, UI.mouseX, UI.mouseY, 150) && (d = this.pullForce(b.x, b.y, UI.mouseX, UI.mouseY, this.MOUSE_PULL_RATE), b.vx += d.x, b.vy += d.y, d = 1), c + 1 < a && (this.calcConnectFoce(b, this.boneList[c + 1], 0), this.calcConnectFoce(this.boneList[c +
        1], b, UI.PI)), b = this.boneList[c], b.vx *= this.FRICTION, b.vy *= this.FRICTION, d && (b.vx *= this.MOUSE_MOVE_FRICTION, b.vy *= this.MOUSE_MOVE_FRICTION);
        d && !this.isDown ? (this.checked += 1, this.isDown = 1) : d || (this.isDown = 0);
        this.checked > this.checkMax && (this.topLock = 0)
    }, pointCircle: function (c, a, b, d, e) {
        c -= b;
        a -= d;
        return Math.sqrt(c * c + a * a) <= e ? !0 : !1
    }, calcConnectFoce: function (c, a, b) {
        var d = this.ajustRadian(b + c.radian);
        b = c.x + Math.cos(d) * c.connectLength;
        d = c.y + Math.sin(d) * c.connectLength;
        b = (a.x - b) * this.VERTICAL_RATE;
        d = (a.y -
            d) * this.VERTICAL_RATE;
        c.vx += b;
        c.vy += d;
        a.vx -= b;
        a.vy -= d
    }, pullForce: function (c, a, b, d, e) {
        var f = new Point, h = this.calcDistance(c, a, b, d);
        c = Math.atan2(d - a, b - c);
        f.x = Math.cos(c) * h * e;
        f.y = Math.sin(c) * h * e;
        return f
    }, calcDistance: function (c, a, b, d) {
        return Math.sqrt(Math.pow(b - c, 2) + Math.pow(d - a, 2))
    }, move: function () {
        var c, a;
        for (c = 0; c < this.boneList.length; c++)a = this.boneList[c], c != this.boneList.length - 1 && (a.x += a.vx), a.y += a.vy, a.radian += a.vr, a.rotation = 180 * a.radian / UI.PI;
        this.topLock && (a = this.boneList[this.boneList.length -
        1], a.vy = 0, a.y = a.saveY)
    }, draw: function () {
        var c = [], a = [], b, d, e = this.boneList.length, f, h, g;
        for (d = 0; d < e; d++)b = this.boneList[d], f = Math.cos(b.radian + UI.PI2H) * b.radius, h = Math.sin(b.radian + UI.PI2H) * b.radius, c.push(b.x + f), a.push(b.y + h), c.unshift(b.x - f), a.unshift(b.y - h);
        e = c.length - 1;
        d = 0;
        b = (c[d] + c[d + 1]) / 2;
        f = (a[d] + a[d + 1]) / 2;
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.moveTo(b, f);
        for (d = 1; d < e; d++)h = (c[d] + c[d + 1]) / 2, g = (a[d] + a[d + 1]) / 2, this.ctx.quadraticCurveTo(c[d], a[d], h, g);
        this.ctx.quadraticCurveTo(c[e],
            a[e], b, f);
        this.ctx.closePath();
        this.ctx.fill()
    }
};
UI.BoneCircle = function (c, a) {
    this.radius = c;
    this.connectLength = a;
    this.saveY = this.y = this.x = this.vr = this.vy = this.vx = this.radian = 0;
    return this
};
UI.BoneCircle.prototype = {};
UI.Ball = function (c, a, b) {
    this.r = 6 + 60 * Math.random();
    800 > b && (b = 0.1 * CMUtiles.getCurrent(b, 800, 320, 10, 3), this.r *= b);
    this.x = c;
    this.y = a;
    this.angle = 2 * Math.PI * Math.random();
    this.vx = (1.3 + 0.3 * Math.random()) * Math.cos(this.angle);
    this.vy = (1.3 + 0.3 * Math.random()) * Math.sin(this.angle);
    this.scale = 0;
    return this
};
UI.Ball.prototype = {
    update: function () {
        this.x += this.vx;
        this.y += this.vy;
        this.scale += 0.008;
        this.r -= Math.sin(this.scale)
    }
};
UI.line = function (c, a, b, d, e, f) {
    this.x0 = e;
    this.y0 = f;
    this.x1 = this.saveX = c;
    this.y1 = a;
    this.x2 = b;
    this.y2 = d;
    this.isDetect = this.v = 0;
    return this
};
UI.line.prototype = {
    update: function (c) {
        this.checkPos();
        c.quadraticCurveTo(this.x1, this.y1, this.x2, this.y2)
    }, checkPos: function () {
        var c = this.saveX;
        this.isDetect ? CMUtiles.pointCircle(UI.mouseX2, UI.mouseY2, this.saveX, this.y1, 80) ? c += UI.mouseX2 - c : this.isDetect = 0 : CMUtiles.linePoint(this.x0, this.y0, this.x2, this.y2, UI.mouseX2, UI.mouseY2, 3) && (this.isDetect = 1);
        this.v += c - this.x1;
        this.v *= 0.75;
        this.x1 += this.v
    }
};
UI.menu = function (c) {
    this.dom = c;
    this.sita = 1;
    this.rotate();
    return this
};
UI.menu.prototype = {
    show: function () {
        this.sita = 2;
        this.rotate();
        var c = this;
        TweenLite.to(this, 1.5, {
            delay: 0.2,
            sita: 1.5,
            ease: Elastic.easeOut,
            easeParams: [0.7],
            onUpdate: function () {
                c.rotate()
            }
        })
    }, hide: function () {
        var c = this;
        TweenLite.to(this, 1.5, {
            sita: 1, ease: Elastic.easeOut, easeParams: [0.7], onUpdate: function () {
                c.rotate()
            }
        })
    }, rotate: function () {
        this.sita = (this.sita + 360) % 360;
        var c = this.circlePos(this.sita);
        this.dom.style[CMDetect.TRANSFORM] = "translate3d(" + c.x + "px, " + c.y + "px, 0px)"
    }, circlePos: function (c) {
        var a =
            Math.cos(c * UI.PI);
        c = Math.sin(c * UI.PI);
        return {x: 140 * a, y: 140 * c + 140}
    }
};
var Eye = {
    DOUBLE_EM: 2E3, DOUBLE_IM: 1200, SOLO_EM: 5E3, SOLO_IM: 1E3, Solo: function (c, a) {
        this.irisPath = [[0, -4, 20], [3, -3, 20], [4, 0, 20], [3, 3, 20], [0, 4, 20], [-3, 3, 20], [-4, 0, 20], [-3, -3, 20], [0, -4, 20]];
        this.eyePath = [[0, -56, 20], [24, -52, 20], [45, -36, 20], [60, 0, 20], [45, 36, 20], [24, 52, 20], [0, 57, 20], [-24, 52, 20], [-45, 36, 20], [-60, 0, 20], [-45, -36, 20], [-24, -52, 20], [0, -56, 20]];
        this.eyePath2 = this.eyePath.map(function (a) {
            return a.slice()
        });
        this.irisPath2 = this.irisPath.map(function (a) {
            return a.slice()
        });
        this.eye = new Eye.Item(1, 1,
            c);
        -1 < a && this.eye.open(a, 0.2);
        this.isAdded = 1;
        return this
    }
};
Eye.Solo.prototype = {
    resize: function (c, a, b, d, e) {
        this.ctx = c;
        this.x = a;
        this.y = b;
        c = this.eyePath.length;
        for (a = 0; a < c; a++)this.eyePath2[a][0] = this.eyePath[a][0] * d, this.eyePath2[a][1] = this.eyePath[a][1] * d, this.eyePath2[a][2] = this.eyePath[a][2] * d;
        c = this.irisPath.length;
        for (a = 0; a < c; a++)this.irisPath2[a][0] = this.irisPath[a][0] * e, this.irisPath2[a][1] = this.irisPath[a][1] * e, this.irisPath2[a][2] = this.irisPath[a][2] * e;
        this.r = 56 * d;
        this.eye.scale = d
    }, update: function () {
        this.eye.draw(this.ctx, this.x, this.y, Eye.SOLO_EM,
            Eye.SOLO_IM, this.eyePath2, this.irisPath2)
    }, close: function () {
        var c = this;
        TweenLite.to(this.eye, 0.1, {
            closeEye: 0, ease: Sine.easeIn, onComplete: function () {
                c.isAdded = 0
            }
        })
    }, reset: function () {
        this.eye.dispose()
    }, dispose: function () {
        this.eye.dispose();
        this.eye = null
    }
};
Eye.Item = function (c, a, b) {
    this.scale = c || 1;
    this.isBlink = a || 0;
    this.isWrinkle = b || 0;
    this.v = vec3.create();
    vec3.set(this.v, 10, 10, 10);
    this.m = mat4.create();
    mat4.translate(this.m, this.m, this.v);
    mat4.rotateX(this.m, this.m, UI.PI);
    this.v1 = vec3.create();
    vec3.set(this.v1, 0, 0, 10);
    vec3.transformMat4(this.v1, this.v1, this.m);
    this.max = 1;
    this.isStart = this.closeEye = 0;
    return this
};
Eye.Item.prototype = {
    open: function (c, a) {
        var b = this;
        TweenLite.to(this, a, {
            delay: c, closeEye: 1, ease: Cubic.easeOut, onStart: function () {
                b.isStart = 1
            }, onComplete: function () {
                b.isBlink && b.blink()
            }
        })
    }, blink: function () {
        var c = 12 * Math.random() + 0.6;
        this.closeEye = 1;
        TweenLite.delayedCall(c, this.delayBlink, [this])
    }, delayBlink: function (c) {
        c.blinkFn(c);
        c.blink()
    }, blinkFn: function (c) {
        c = c || this;
        c.closeEye = 1;
        TweenLite.to(c, 0.25, {closeEye: -1})
    }, dispose: function () {
        TweenLite.killTweensOf(this);
        TweenLite.killTweensOf(this.delayBlink);
        this.isStart = this.closeEye = 0
    }, draw: function (c, a, b, d, e, f, h) {
        this.isStart && (this.closeEye = Math.abs(this.closeEye), f = f.map(function (a) {
            return a.slice()
        }), c.save(), c.fillStyle = "#FFF", c.beginPath(), this.drawPath(c, this.createPath(f, d, a, b, UI.mouseX2, UI.mouseY2, 1)), c.closePath(), c.fill(), c.restore(), c.save(), c.globalCompositeOperation = "source-atop", c.fillStyle = "#25211e", c.beginPath(), this.drawPath(c, this.createPath(h, e, a, b, UI.mouseX2, UI.mouseY2, 0)), c.closePath(), c.fill(), c.restore(), this.isWrinkle && (c.save(),
            c.strokeStyle = "#c61350", c.lineCap = "round", this.drawPath2(c, this.createPath(f, d, a, b, UI.mouseX2, UI.mouseY2, 1)), c.restore()))
    }, drawPath: function (c, a) {
        var b, d = a.length;
        for (b = 0; b < d; b++)0 == b ? c.moveTo(a[b][0], a[b][1]) : b < d - 2 ? c.quadraticCurveTo(a[b][0], a[b][1], (a[b + 1][0] + a[b][0]) / 2, (a[b + 1][1] + a[b][1]) / 2) : c.quadraticCurveTo(a[b][0], a[b][1], (a[0][0] + a[b][0]) / 2, (a[0][1] + a[b][1]) / 2)
    }, drawPath2: function (c, a) {
        var b, d = a.length, e = 10 * this.scale, f = 20 * this.scale, h, g;
        c.lineWidth = 6 * this.scale;
        c.beginPath();
        for (b = 0; b < d; b++)3 <
        b && 8 > b ? c.quadraticCurveTo(a[b][0], a[b][1] + e, (a[b + 1][0] + a[b][0]) / 2, (a[b + 1][1] + a[b][1]) / 2 + e) : 7 == b && c.quadraticCurveTo(a[b][0], a[b][1] + e, (a[0][0] + a[b][0]) / 2, (a[0][1] + a[b][1]) / 2 + e);
        c.stroke();
        c.beginPath();
        for (b = 0; b < d; b++)h = CMUtiles.getInsideMax(b - 3, d), g = CMUtiles.getInsideMax(h + 1, d), 5 > b && c.quadraticCurveTo(a[h][0], a[h][1] - e, (a[g][0] + a[h][0]) / 2, (a[g][1] + a[h][1]) / 2 - e);
        c.stroke();
        c.lineWidth = 4 * this.scale;
        c.beginPath();
        for (b = 0; b < d; b++)4 < b && 7 > b ? c.quadraticCurveTo(a[b][0], a[b][1] + f, (a[b + 1][0] + a[b][0]) / 2, (a[b +
            1][1] + a[b][1]) / 2 + f) : 6 == b && c.quadraticCurveTo(a[b][0], a[b][1] + f, (a[0][0] + a[b][0]) / 2, (a[0][1] + a[b][1]) / 2 + f);
        c.stroke()
    }, createPath: function (c, a, b, d, e, f, h) {
        var g = vec3.create(), m = mat4.create();
        e = -(b - e) / a;
        var l = (d - f) / a;
        a = [];
        f = c.length;
        vec3.set(g, b, d, 0);
        e < -this.max ? e = -this.max : e > this.max && (e = this.max);
        l < -this.max ? l = -this.max : l > this.max && (l = this.max);
        mat4.translate(m, m, g);
        mat4.rotateY(m, m, e);
        mat4.rotateX(m, m, l);
        for (b = 0; b < f; b++)d = c[b], h && (d[1] *= this.closeEye), g = vec3.create(), vec3.set(g, d[0], d[1], d[2]), vec3.transformMat4(g,
            g, m), a.push(g);
        return a
    }
};
var Drawing = Drawing || function () {
        function c() {
            p = StageController.stageWidth;
            q = StageController.stageHeight;
            r = p >> 1;
            k = q >> 1;
            e.width = p * CMDetect.RATIO;
            e.height = q * CMDetect.RATIO;
            f = e.getContext("2d");
            f.scale(CMDetect.RATIO, CMDetect.RATIO);
            var a = 0.1 * CMUtiles.getCurrent(p, 1E3, 320, 10, 5);
            Eye.DOUBLE_EM = 2E3 * a;
            Eye.DOUBLE_IM = 1200 * a;
            Eye.SOLO_EM = 5E3 * a;
            Eye.SOLO_IM = 1E3 * a;
            -1 != h && g[h].resize(f, p, q, r, k)
        }

        function a() {
            l && (window.cancelAnimationFrame(l), l = null)
        }

        function b(a) {
            l = window.requestAnimationFrame(b);
            -1 != h && g[h].animate()
        }

        var d, e, f, h = -1, g = [], m, l, p, q, r, k;
        return {
            init: function (a) {
                d = a;
                e = d.getElementsByClassName("cl")[0];
                g.push(About);
                g.push(Hairy);
                g.push(Sticky);
                g.push(Peepy);
                m = g.length;
                var b, f;
                for (b = 0; b < m; b++)f = g[b], f.init(a);
                StageController.addResize("Drawing", c)
            }, show: function (a, c) {
                h = a;
                g[h].show(f, p, q, r, k, c);
                l = window.requestAnimationFrame(b)
            }, pause: a, hide: function () {
                a();
                g[h].dispose()
            }
        }
    }();
var Hairy = Hairy || function () {
        function c(c, e, h, D, w) {
            E = e;
            J = h;
            K = D;
            L = w;
            f.width = E;
            f.height = J;
            d = f.getContext("2d");
            c = 1;
            1600 < E ? c = 0.1 * CMUtiles.getCurrent(E, 1600, 2400, 10, 20) : 1E3 > E && (c = 0.1 * CMUtiles.getCurrent(E, 1E3, 320, 10, 7));
            2 < c && (c = 2);
            g = 80 * c;
            m = 40 * c;
            l = 80 * c;
            z = 30 * c;
            F = 16 * c;
            v = 10 * c | 0;
            10 < v && (v = 10);
            p = (E + 2 * g) / g | 0;
            q = (J + 100) / l | 0;
            c = CMUtiles.getCurrent(E, 768, 500, 180, 120);
            500 > E ? (s = c = 0, n.dispose()) : s = 1;
            u = K - c;
            x = K + c;
            y = L - (L >> 2);
            b();
            e = p * q;
            h = 200 / e;
            for (c = 0; c < e; c++)TweenLite.delayedCall(0.002 * c, a, [c, h]);
            k.open(2, 1);
            s && n.open(2,
                1)
        }

        function a(a, c) {
            var b = CMUtiles.getWallPosition(a, p, g, l), b = new UI.BoneGroup(a, d, b.x + m * ((a / p | 0) % 2), b.y - 100, "rgb(" + (220 - (a * c | 0)) + ", " + (70 - (a * c | 0)) + ", 59)", v, z, F, B, G, w, C, H, I, D);
            r.push(b);
            h = r.length
        }

        function b() {
            TweenLite.killDelayedCallsTo(a);
            d.clearRect(0, 0, E, J);
            r = [];
            h = 0;
            k.dispose();
            n.dispose()
        }

        var d, e, f, h = 0, g = 80, m = 40, l = 80, p = 0, q = 0, r = [], k, n, s = 1, u, x, y, t = [[-100, 0, 0], [-87, -8, 12], [-67, -16, 20], [-47, -23, 25], [-27, -28, 28], [0, -32, 30], [27, -28, 28], [47, -23, 25], [67, -16, 20], [87, -8, 12], [100, 0, 0], [87, -4, 12], [67, -7,
            20], [47, -9, 25], [27, -11, 28], [0, -13, 30], [-27, -11, 28], [-47, -9, 25], [-67, -7, 20], [-87, -4, 12], [-100, 0, 0]], A = [[0, -46, 20], [12, -44, 20], [19, -36, 20], [22, -25, 20], [19, -14, 20], [12, -6, 20], [0, -3, 20], [-12, -6, 20], [-19, -14, 20], [-22, -25, 20], [-19, -36, 20], [-12, -44, 20], [0, -46, 20]], z = 30, v = 10, F = 16, B = 3, G = 0.8 / B, w = 0.05 / B, C = 0.5 / B, H = 0.1 / B, I = 1 - 0.1 / B, D = 1 - 0.5 / B, E, J, K, L;
        return {
            init: function (a) {
                e = a;
                k = new Eye.Item;
                n = new Eye.Item;
                f = document.createElement("canvas");
                f.className = "hl"
            }, resize: c, show: function (a, b, d, g, h) {
                c(a, b, d, g, h);
                e.appendChild(f)
            },
            dispose: function () {
                b();
                CMUtiles.removeDom(f)
            }, animate: function () {
                d.clearRect(0, 0, E, J);
                k.draw(d, u, y, Eye.DOUBLE_EM, Eye.DOUBLE_IM, t, A);
                s && n.draw(d, x, y, Eye.DOUBLE_EM, Eye.DOUBLE_IM, t, A);
                var a;
                for (a = h - 1; 0 <= a; a--)r[a].engin()
            }
        }
    }();
var Sticky = Sticky || function () {
        function c(c, d, m, l, s) {
            t = d;
            A = m;
            z = l;
            v = s;
            h = c;
            y = 800 > d ? CMUtiles.getCurrent(d, 800, 320, 50, 30) | 0 : "pc" == CMDetect.DEVICE ? 150 : 50;
            g.width = t;
            g.height = A;
            f = g.getContext("webgl") || g.getContext("experimental-webgl");
            if (null === f) {
                if (null !== g.getContext("webgl"))throw"Error creating WebGL context with your selected attributes.";
                throw"Error creating WebGL context.";
            }
            f.viewport && f.viewport(0, 0, f.canvas.width, f.canvas.height);
            c = CMUtiles.getCurrent(t, 768, 320, 140, 80);
            r = z - c;
            k = z + c;
            n = v - (v >> 2);
            a();
            x = e(f, t, A, y);
            p.open(0.5, 0.3);
            q.open(0.5, 0.3);
            b()
        }

        function a() {
            TweenLite.killDelayedCallsTo(d);
            h.clearRect(0, 0, t, A);
            l = []
        }

        function b() {
            var a = 10 * Math.random() + 1;
            TweenLite.delayedCall(a, d)
        }

        function d() {
            p.blinkFn();
            q.blinkFn();
            b()
        }

        function e(a, c, b, d) {
            function f(a, c, b) {
                b = a.createShader(b);
                a.shaderSource(b, c);
                a.compileShader(b);
                if (!a.getShaderParameter(b, a.COMPILE_STATUS))throw"Shader compile failed with: " + a.getShaderInfoLog(b);
                return b
            }

            var e = f(a, "attribute vec2 position;void main() {gl_Position = vec4(position, 0.0, 1.0);}",
                a.VERTEX_SHADER);
            c = f(a, "precision highp float;uniform vec3 metaballs[" + d + "];const float WIDTH = " + c + ".0;const float HEIGHT = " + b + ".0;void main(){float x = gl_FragCoord.x;float y = gl_FragCoord.y;float v = 0.0;for (int i = 0; i < " + d + "; i++) {vec3 mb = metaballs[i];float dx = mb.x - x;float dy = mb.y - y;float r = mb.z;v += r*r/(dx*dx + dy*dy);}if (v > 1.0) {gl_FragColor = vec4(1, y/HEIGHT, 0.1, 1.0);} else {gl_FragColor = vec4(0.1, 0.1, 0.1, 1.0);}}", a.FRAGMENT_SHADER);
            var g = a.createProgram();
            a.attachShader(g,
                e);
            a.attachShader(g, c);
            a.linkProgram(g);
            a.useProgram(g);
            e = new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1]);
            c = a.createBuffer();
            a.bindBuffer(a.ARRAY_BUFFER, c);
            a.bufferData(a.ARRAY_BUFFER, e, a.STATIC_DRAW);
            e = function (c, b) {
                var d = a.getAttribLocation(c, b);
                if (-1 === d)throw"Can not find attribute " + b + ".";
                return d
            }(g, "position");
            a.enableVertexAttribArray(e);
            a.vertexAttribPointer(e, 2, a.FLOAT, a.FALSE, 8, 0);
            return function () {
                var c = a.getUniformLocation(g, "metaballs");
                if (-1 === c)throw"Can not find uniform metaballs.";
                return c
            }()
        }

        var f, h, g, m, l = [], p, q, r, k, n, s = [[0, -6, 30], [1, -3, 30], [3, -1, 30], [6, 0, 30], [2, 1, 30], [1, 3, 30], [0, 6, 30], [-1, 3, 30], [-3, 1, 30], [-6, 0, 30], [-3, -1, 30], [-1, -3, 30], [0, -6, 30]], u = [[0, -21, 30], [12, -19, 30], [19, -11, 30], [22, 0, 30], [19, 11, 30], [12, 19, 30], [0, 22, 30], [-12, 19, 30], [-19, 11, 30], [-22, 0, 30], [-19, -11, 30], [-12, -19, 30], [0, -21, 30]], x, y = 150, t, A, z, v;
        return {
            init: function (a) {
                m = a;
                p = new Eye.Item;
                q = new Eye.Item;
                g = document.createElement("canvas");
                g.className = "gl"
            }, resize: c, show: function (a, b, d, f, e, h) {
                c(a, b, d, f, e, h);
                m.appendChild(g)
            },
            dispose: function () {
                a();
                f.enable(f.SCISSOR_TEST);
                f.scissor(0, 0, t, A);
                f.clearColor(0, 0, 0, 0);
                f.clear(f.COLOR_BUFFER_BIT | f.DEPTH_BUFFER_BIT);
                f.disable(f.SCISSOR_TEST);
                p.dispose();
                q.dispose();
                CMUtiles.removeDom(g)
            }, animate: function () {
                h.clearRect(0, 0, t, A);
                p.draw(h, r, n, Eye.DOUBLE_EM, Eye.DOUBLE_IM, u, s);
                q.draw(h, k, n, Eye.DOUBLE_EM, Eye.DOUBLE_IM, u, s);
                var a, c = l.length, b, d, e;
                CMDetect.isTouch ? (z = UI.mouseX2, v = UI.mouseY2) : (z += 0.2 * (UI.mouseX2 - z), v += 0.2 * (UI.mouseY2 - v));
                Scroll.getIsDown() && c < y && l.push(new UI.Ball(z,
                    A - v));
                for (a = 0; a < c; a++)b = l[a], b.update();
                d = new Float32Array(3 * y);
                for (a = 0; a < c; a++)e = 3 * a, b = l[a], d[e + 0] = b.x, d[e + 1] = b.y, d[e + 2] = b.r;
                f.uniform3fv(x, d);
                f.drawArrays(f.TRIANGLE_STRIP, 0, 4);
                for (a = c - 1; 0 <= a; a--)b = l[a], (0 > b.x + b.r || b.x - b.r > t || 0 > b.y + b.r || b.y - b.r > A || 0 > b.r) && l.splice(a, 1)
            }
        }
    }();
var Peepy = Peepy || function () {
        function c(a, b, c, f, r) {
            h = b;
            g = c;
            d = a;
            c = e.length;
            for (a = 0; a < c; a++)b = e[a], b.dispose();
            e = []
        }

        function a() {
            b(h >> 1, g >> 1);
            Scroll.addDown("Peepy", b)
        }

        function b(a, b) {
            var c, g = e.length, r, k = 0, n = 0, s = [], u, x;
            if (!(g > f)) {
                r = 2 * Math.random() + 0.5;
                800 > h && (c = CMUtiles.getCurrent(h, 800, 320, 1, 0.4), r *= c);
                x = 56 * r;
                for (c = 0; c < g; c++) {
                    u = e[c];
                    if (CMUtiles.pointCircle(a, b, u.x, u.y, u.r)) {
                        k = 1;
                        s[0] = c;
                        break
                    }
                    CMUtiles.circleCircle(a, b, x + 0.2 * x, u.x, u.y, u.r + 0.2 * u.r) && (n = 1, s.push(c))
                }
                if (k)e[s[0]].close(); else {
                    if (n) {
                        g = s.length;
                        for (c = 0; c < g; c++)e[s[c]].close();
                        g = new Eye.Solo(1, 0.2)
                    } else g = new Eye.Solo(1, 0);
                    g.resize(d, a, b, r, 1);
                    e.push(g)
                }
            }
        }

        var d, e = [], f = 50, h, g;
        return {
            init: function (a) {
            }, resize: c, show: function (b, d, e, f, g) {
                c(b, d, e, f, g);
                TweenLite.delayedCall(0.2, a)
            }, dispose: function () {
                d.clearRect(0, 0, h, g);
                Scroll.removeDown("Peepy")
            }, animate: function () {
                d.clearRect(0, 0, h, g);
                var a, b, c = e.length;
                for (a = 0; a < c; a++)b = e[a], b.update();
                for (a = c - 1; 0 <= a; a--)b = e[a], b.isAdded || (b.dispose(), e.splice(a, 1))
            }
        }
    }();
var About = About || function () {
        function c(a, b, c, e, f) {
            w = b;
            C = c;
            H = e;
            I = f;
            g = a;
            a = 20;
            n = 1;
            500 > w && (a = CMUtiles.getCurrent(w, 500, 320, 0, 40), b = 0.01 * CMUtiles.getCurrent(w, 500, 320, 100, 65), n *= b);
            s = 56 * n;
            r = H + 5;
            k = I - s - 20 - a;
            q.resize(g, r, k, 1.2 * n, 2);
            b = p.getBoundingClientRect();
            p.style[CMDetect.TRANSFORM] = "translate3d(" + (H - (b.width >> 1)) + "px, " + (I - a) + "px, 0px)";
            g.fillStyle = Address.BG_COLOR[0];
            g.strokeStyle = "#e91e63";
            g.lineCap = "square";
            g.lineWidth = 4;
            a = t.length;
            c = CMUtiles.getCurrent(w, 500, 320, 220, 140);
            e = CMUtiles.getCurrent(w,
                500, 320, 62, 41);
            b = r - c;
            e = k - e;
            u = h(t, b, e);
            c = CMUtiles.getCurrent(w, 500, 320, 94, 57);
            x = h(A, r + c, e);
            y = [{x: -80 + b, y: e + (t[0][1] - 6) * n, w: t[a - 1][0] * n + 520, h: 50}, {
                x: -80 + b,
                y: e + (t[1][1] - 6) * n - 46,
                w: t[a - 1][0] * n + 520,
                h: 50
            }];
            d()
        }

        function a(a, c, d) {
            var e = c.length, f = d, g = 1;
            a.push({x: c[0].x1, y: c[0].y1});
            for (d = 0; d < e; d++)g = 0 == d % 2 ? 0 : F, G.push(b(d, g, f, c, a)), f += g;
            return f
        }

        function b(a, b, c, d, e) {
            var f = a + 1, g = {x: d[a].x0, y: d[a].y0};
            a = d[a];
            TweenLite.to(g, b, {
                delay: c, x: a.x2, y: a.y2, ease: Sine.easeNone, onUpdate: function () {
                    e[f] = {x: g.x, y: g.y}
                }
            });
            return g
        }

        function d() {
            TweenLite.killDelayedCallsTo(d);
            B && (l.style[CMDetect.DELAY] = "0.5s", l.style.opacity = 1, q.eye.open(0.1, 0.35));
            var a, b = G.length, c;
            for (a = 0; a < b; a++)c = G[a], TweenLite.killTweensOf(c);
            G = [];
            z = [];
            v = [];
            B = 0
        }

        function e(a) {
            var b, c = a.length, d;
            g.beginPath();
            g.moveTo(a[0].x, a[0].y);
            for (b = 0; b < c; b++)d = a[b], g.lineTo(d.x, d.y);
            g.stroke()
        }

        function f(a) {
            var b, c = a.length, d;
            g.beginPath();
            g.moveTo(a[0].x1, a[0].y1);
            for (b = 0; b < c; b++)d = a[b], 0 == b % 2 ? g.lineTo(d.x2, d.y2) : d.update(g);
            g.stroke()
        }

        function h(a, b, c) {
            var d,
                e = a.length, f, g, h, k, l, m, p = [];
            f = a[0][0] * n + b;
            g = a[0][1] * n + c;
            p.push({x1: f, y1: g});
            for (d = 1; d < e; d++)f = a[d][0] * n + b, g = a[d][1] * n + c, h = a[d - 1][0] * n + b, k = a[d - 1][1] * n + c, l = (f + h) / 2, m = (g + k) / 2, 0 == d % 2 ? p.push({
                x2: f,
                y2: g,
                x0: f,
                y0: g
            }) : p.push(new UI.line(l, m, f, g, h, k));
            return p
        }

        var g, m, l, p, q, r, k, n, s, u, x, y, t = [[0, 136], [20, 0], [22, 0], [67, 116], [69, 116], [114, 0], [116, 0], [136, 136]], A = [[0, 136], [0, 0], [2, 0], [100, 128], [102, 128], [102, -10]], z = [], v = [], F = 0.4, B = 0, G = [], w, C, H, I;
        return {
            init: function (a) {
                m = a;
                l = document.getElementById("about");
                p =
                    l.getElementsByTagName("p")[0];
                CMUtiles.removeDom(l);
                q = new Eye.Solo(0, -1)
            }, resize: c, show: function (b, e, f, g, h) {
                l.style.opacity = 0;
                m.appendChild(l);
                c(b, e, f, g, h);
                B = 1;
                b = a(z, u, 0.4);
                b = a(v, x, b);
                q.eye.open(b + 0.1, 0.35);
                TweenLite.delayedCall(b + 0.6, d)
            }, dispose: function () {
                d();
                g.clearRect(0, 0, w, C);
                CMUtiles.removeDom(l);
                q.reset();
                l.style[CMDetect.DELAY] = "0s";
                l.style.opacity = 0
            }, animate: function () {
                g.clearRect(0, 0, w, C);
                B ? (e(z), e(v)) : (f(u), f(x));
                var a, b = y.length, c;
                g.beginPath();
                for (a = 0; a < b; a++)c = y[a], g.fillRect(c.x,
                    c.y, c.w, c.h);
                q.update()
            }
        }
    }();

_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [11], {
        "+0iv": function(t, e, n) {
            "use strict";
            var i = n("qDJ8");

            function r(t) {
                return !0 === i(t) && "[object Object]" === Object.prototype.toString.call(t)
            }
            t.exports = function(t) {
                var e, n;
                return !1 !== r(t) && ("function" === typeof(e = t.constructor) && (!1 !== r(n = e.prototype) && !1 !== n.hasOwnProperty("isPrototypeOf")))
            }
        },
        "+r3O": function(t, e, n) {
            t.exports = {
                component: "label_component__1EQx5",
                introduction: "label_introduction__2-NqB",
                header: "label_header__2lwMW",
                poster_1: "label_poster_1__PEvLJ",
                poster_2: "label_poster_2__10dXq",
                discover: "label_discover__-z8uy",
                content: "label_content__1BjkT",
                seeMore: "label_seeMore__1YDcw",
                projects: "label_projects__2Q5NJ",
                planet: "label_planet__30nfz",
                triangle: "label_triangle__wC1y9",
                eye: "label_eye__2CEOp",
                ball: "label_ball__81K2m",
                star: "label_star__1GeI6",
                hat: "label_hat__MeP93",
                projectsList: "label_projectsList__1jNA6",
                back: "label_back__sGjfH"
            }
        },
        "/0+H": function(t, e, n) {
            "use strict";
            e.__esModule = !0, e.isInAmpMode = a, e.useAmp = function() {
                return a(r.default.useContext(o.AmpStateContext))
            };
            var i, r = (i = n("q1tI")) && i.__esModule ? i : {
                    default: i
                },
                o = n("lwAK");

            function a() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = t.ampFirst,
                    n = void 0 !== e && e,
                    i = t.hybrid,
                    r = void 0 !== i && i,
                    o = t.hasQuery,
                    a = void 0 !== o && o;
                return n || r && a
            }
        },
        "/dyv": function(t, e, n) {
            "use strict";
            var i = n("Qetd"),
                r = n("8c+Z").filter,
                o = n("eX1s").map,
                a = n("s+BN"),
                s = n("l3Vq"),
                c = n("qS3u"),
                u = n("flg0"),
                l = n("Ji/L"),
                h = n("3mOt"),
                f = n("6wuA"),
                d = n("vHaw"),
                p = n("xHEm"),
                m = n("C5f4"),
                g = n("4ZSR"),
                v = g.defaultConfig,
                y = g.initConfig;

            function b() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v;
                if (!(this instanceof b)) return new b(t);
                if (this.config(t), this.assets = new h(this), this.datasets = new u(this), this.projects = new l(this), this.users = new f(this), this.auth = new d(this), this.clientConfig.isPromiseAPI) {
                    var e = i({}, this.clientConfig, {
                        isPromiseAPI: !1
                    });
                    this.observable = new b(e)
                }
            }
            i(b.prototype, c), i(b.prototype, {
                clone: function() {
                    return new b(this.config())
                },
                config: function(t) {
                    if ("undefined" === typeof t) return i({}, this.clientConfig);
                    if (this.observable) {
                        var e = i({}, t, {
                            isPromiseAPI: !1
                        });
                        this.observable.config(e)
                    }
                    return this.clientConfig = y(t, this.clientConfig || {}), this
                },
                getUrl: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = e ? this.clientConfig.cdnUrl : this.clientConfig.url;
                    return "".concat(n, "/").concat(t.replace(/^\//, ""))
                },
                isPromiseAPI: function() {
                    return this.clientConfig.isPromiseAPI
                },
                _requestObservable: function(t) {
                    var e = t.url || t.uri,
                        n = this.clientConfig.useCdn && ["GET", "HEAD"].indexOf(t.method || "GET") >= 0 && 0 === e.indexOf("/data/"),
                        r = m(this.clientConfig, i({}, t, {
                            url: this.getUrl(e, n)
                        }));
                    return p(r, this.clientConfig.requester)
                },
                request: function(t) {
                    var e = this._requestObservable(t).pipe(r((function(t) {
                        return "response" === t.type
                    })), o((function(t) {
                        return t.body
                    })));
                    return this.isPromiseAPI() ? function(t) {
                        return t.toPromise()
                    }(e) : e
                }
            }), b.Patch = a, b.Transaction = s, b.ClientError = p.ClientError, b.ServerError = p.ServerError, b.requester = p.defaultRequester, t.exports = b
        },
        "0j7I": function(t, e, n) {
            "use strict";
            t.exports = n("equ0")
        },
        "1OyB": function(t, e, n) {
            "use strict";

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            n.d(e, "a", (function() {
                return i
            }))
        },
        "1Z+e": function(t, e, n) {
            "use strict";
            var i = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function i() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n("FWf1");
            e.defaultIfEmpty = function(t) {
                return void 0 === t && (t = null),
                    function(e) {
                        return e.lift(new o(t))
                    }
            };
            var o = function() {
                    function t(t) {
                        this.defaultValue = t
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new a(t, this.defaultValue))
                    }, t
                }(),
                a = function(t) {
                    function e(e, n) {
                        var i = t.call(this, e) || this;
                        return i.defaultValue = n, i.isEmpty = !0, i
                    }
                    return i(e, t), e.prototype._next = function(t) {
                        this.isEmpty = !1, this.destination.next(t)
                    }, e.prototype._complete = function() {
                        this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete()
                    }, e
                }(r.Subscriber)
        },
        "1dv8": function(t, e, n) {
            t.exports = {
                content: "index_content__35pjB"
            }
        },
        "1eSL": function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                return function(e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e
                }
            }();

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            var o = function() {
                function t(e, n, i) {
                    void 0 === n && (n = !1), r(this, t), this._fn = e, this._once = n, this._thisArg = i, this._next = this._prev = this._owner = null
                }
                return i(t, [{
                    key: "detach",
                    value: function() {
                        return null !== this._owner && (this._owner.detach(this), !0)
                    }
                }]), t
            }();

            function a(t, e) {
                return t._head ? (t._tail._next = e, e._prev = t._tail, t._tail = e) : (t._head = e, t._tail = e), e._owner = t, e
            }
            var s = function() {
                function t() {
                    r(this, t), this._head = this._tail = void 0
                }
                return i(t, [{
                    key: "handlers",
                    value: function() {
                        var t = !(arguments.length <= 0 || void 0 === arguments[0]) && arguments[0],
                            e = this._head;
                        if (t) return !!e;
                        for (var n = []; e;) n.push(e), e = e._next;
                        return n
                    }
                }, {
                    key: "has",
                    value: function(t) {
                        if (!(t instanceof o)) throw new Error("MiniSignal#has(): First arg must be a MiniSignalBinding object.");
                        return t._owner === this
                    }
                }, {
                    key: "dispatch",
                    value: function() {
                        var t = this._head;
                        if (!t) return !1;
                        for (; t;) t._once && this.detach(t), t._fn.apply(t._thisArg, arguments), t = t._next;
                        return !0
                    }
                }, {
                    key: "add",
                    value: function(t) {
                        var e = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                        if ("function" !== typeof t) throw new Error("MiniSignal#add(): First arg must be a Function.");
                        return a(this, new o(t, !1, e))
                    }
                }, {
                    key: "once",
                    value: function(t) {
                        var e = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                        if ("function" !== typeof t) throw new Error("MiniSignal#once(): First arg must be a Function.");
                        return a(this, new o(t, !0, e))
                    }
                }, {
                    key: "detach",
                    value: function(t) {
                        if (!(t instanceof o)) throw new Error("MiniSignal#detach(): First arg must be a MiniSignalBinding object.");
                        return t._owner !== this || (t._prev && (t._prev._next = t._next), t._next && (t._next._prev = t._prev), t === this._head ? (this._head = t._next, null === t._next && (this._tail = null)) : t === this._tail && (this._tail = t._prev, this._tail._next = null), t._owner = null), this
                    }
                }, {
                    key: "detachAll",
                    value: function() {
                        var t = this._head;
                        if (!t) return this;
                        for (this._head = this._tail = null; t;) t._owner = null, t = t._next;
                        return this
                    }
                }]), t
            }();
            s.MiniSignalBinding = o, e.default = s, t.exports = e.default
        },
        "1rxJ": function(t, e, n) {
            "use strict";
            var i = n("1eSL"),
                r = new(n.n(i).a);
            r.state = !1, r.add((function(t) {
                r.state = t
            })), e.a = r
        },
        "2qu3": function(t, e, n) {
            "use strict";
            var i = n("lSNA"),
                r = n("lwsE"),
                o = n("W8MJ");

            function a(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function s(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? a(Object(n), !0).forEach((function(e) {
                        i(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function c(t, e) {
                var n;
                if ("undefined" === typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (n = function(t, e) {
                            if (!t) return;
                            if ("string" === typeof t) return u(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(t, e)
                        }(t)) || e && t && "number" === typeof t.length) {
                        n && (t = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, a = !0,
                    s = !1;
                return {
                    s: function() {
                        n = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = n.next();
                        return a = t.done, t
                    },
                    e: function(t) {
                        s = !0, o = t
                    },
                    f: function() {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                }
            }

            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i
            }
            e.__esModule = !0, e.default = void 0;
            var l, h = (l = n("q1tI")) && l.__esModule ? l : {
                    default: l
                },
                f = n("8L3h"),
                d = n("jwwS");
            var p = [],
                m = [],
                g = !1;

            function v(t) {
                var e = t(),
                    n = {
                        loading: !0,
                        loaded: null,
                        error: null
                    };
                return n.promise = e.then((function(t) {
                    return n.loading = !1, n.loaded = t, t
                })).catch((function(t) {
                    throw n.loading = !1, n.error = t, t
                })), n
            }

            function y(t) {
                var e = {
                        loading: !1,
                        loaded: {},
                        error: null
                    },
                    n = [];
                try {
                    Object.keys(t).forEach((function(i) {
                        var r = v(t[i]);
                        r.loading ? e.loading = !0 : (e.loaded[i] = r.loaded, e.error = r.error), n.push(r.promise), r.promise.then((function(t) {
                            e.loaded[i] = t
                        })).catch((function(t) {
                            e.error = t
                        }))
                    }))
                } catch (i) {
                    e.error = i
                }
                return e.promise = Promise.all(n).then((function(t) {
                    return e.loading = !1, t
                })).catch((function(t) {
                    throw e.loading = !1, t
                })), e
            }

            function b(t, e) {
                return h.default.createElement(function(t) {
                    return t && t.__esModule ? t.default : t
                }(t), e)
            }

            function _(t, e) {
                var n = Object.assign({
                        loader: null,
                        loading: null,
                        delay: 200,
                        timeout: null,
                        render: b,
                        webpack: null,
                        modules: null
                    }, e),
                    i = null;

                function r() {
                    if (!i) {
                        var e = new w(t, n);
                        i = {
                            getCurrentValue: e.getCurrentValue.bind(e),
                            subscribe: e.subscribe.bind(e),
                            retry: e.retry.bind(e),
                            promise: e.promise.bind(e)
                        }
                    }
                    return i.promise()
                }
                if (!g && "function" === typeof n.webpack) {
                    var o = n.webpack();
                    m.push((function(t) {
                        var e, n = c(o);
                        try {
                            for (n.s(); !(e = n.n()).done;) {
                                var i = e.value;
                                if (-1 !== t.indexOf(i)) return r()
                            }
                        } catch (a) {
                            n.e(a)
                        } finally {
                            n.f()
                        }
                    }))
                }
                var a = function(t, e) {
                    r();
                    var o = h.default.useContext(d.LoadableContext),
                        a = (0, f.useSubscription)(i);
                    return h.default.useImperativeHandle(e, (function() {
                        return {
                            retry: i.retry
                        }
                    }), []), o && Array.isArray(n.modules) && n.modules.forEach((function(t) {
                        o(t)
                    })), h.default.useMemo((function() {
                        return a.loading || a.error ? h.default.createElement(n.loading, {
                            isLoading: a.loading,
                            pastDelay: a.pastDelay,
                            timedOut: a.timedOut,
                            error: a.error,
                            retry: i.retry
                        }) : a.loaded ? n.render(a.loaded, t) : null
                    }), [t, a])
                };
                return a.preload = function() {
                    return r()
                }, a.displayName = "LoadableComponent", h.default.forwardRef(a)
            }
            var w = function() {
                function t(e, n) {
                    r(this, t), this._loadFn = e, this._opts = n, this._callbacks = new Set, this._delay = null, this._timeout = null, this.retry()
                }
                return o(t, [{
                    key: "promise",
                    value: function() {
                        return this._res.promise
                    }
                }, {
                    key: "retry",
                    value: function() {
                        var t = this;
                        this._clearTimeouts(), this._res = this._loadFn(this._opts.loader), this._state = {
                            pastDelay: !1,
                            timedOut: !1
                        };
                        var e = this._res,
                            n = this._opts;
                        e.loading && ("number" === typeof n.delay && (0 === n.delay ? this._state.pastDelay = !0 : this._delay = setTimeout((function() {
                            t._update({
                                pastDelay: !0
                            })
                        }), n.delay)), "number" === typeof n.timeout && (this._timeout = setTimeout((function() {
                            t._update({
                                timedOut: !0
                            })
                        }), n.timeout))), this._res.promise.then((function() {
                            t._update({}), t._clearTimeouts()
                        })).catch((function(e) {
                            t._update({}), t._clearTimeouts()
                        })), this._update({})
                    }
                }, {
                    key: "_update",
                    value: function(t) {
                        this._state = s(s({}, this._state), {}, {
                            error: this._res.error,
                            loaded: this._res.loaded,
                            loading: this._res.loading
                        }, t), this._callbacks.forEach((function(t) {
                            return t()
                        }))
                    }
                }, {
                    key: "_clearTimeouts",
                    value: function() {
                        clearTimeout(this._delay), clearTimeout(this._timeout)
                    }
                }, {
                    key: "getCurrentValue",
                    value: function() {
                        return this._state
                    }
                }, {
                    key: "subscribe",
                    value: function(t) {
                        var e = this;
                        return this._callbacks.add(t),
                            function() {
                                e._callbacks.delete(t)
                            }
                    }
                }]), t
            }();

            function x(t) {
                return _(v, t)
            }

            function k(t, e) {
                for (var n = []; t.length;) {
                    var i = t.pop();
                    n.push(i(e))
                }
                return Promise.all(n).then((function() {
                    if (t.length) return k(t, e)
                }))
            }
            x.Map = function(t) {
                if ("function" !== typeof t.render) throw new Error("LoadableMap requires a `render(loaded, props)` function");
                return _(y, t)
            }, x.preloadAll = function() {
                return new Promise((function(t, e) {
                    k(p).then(t, e)
                }))
            }, x.preloadReady = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return new Promise((function(e) {
                    var n = function() {
                        return g = !0, e()
                    };
                    k(m, t).then(n, n)
                }))
            }, window.__NEXT_PRELOADREADY = x.preloadReady;
            var O = x;
            e.default = O
        },
        "3mOt": function(t, e, n) {
            "use strict";

            function i(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(t))) return;
                    var n = [],
                        i = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var a, s = t[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); i = !0);
                    } catch (c) {
                        r = !0, o = c
                    } finally {
                        try {
                            i || null == s.return || s.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                    return n
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" === typeof t) return r(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function r(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i
            }
            var o = n("Qetd"),
                a = n("eX1s").map,
                s = n("8c+Z").filter,
                c = n("YIS7"),
                u = n("VmPP");

            function l(t) {
                this.client = t
            }

            function h(t) {
                var e = t.document;
                return Object.defineProperty(e, "document", {
                    enumerable: !1,
                    get: function() {
                        return console.warn("The promise returned from client.asset.upload(...) now resolves with the asset document"), e
                    }
                }), e
            }

            function f(t, e) {
                return "undefined" !== typeof window && e instanceof window.File ? o({
                    filename: !1 === t.preserveFilename ? void 0 : e.name,
                    contentType: e.type
                }, t) : t
            }
            o(l.prototype, {
                upload: function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    u.validateAssetType(t);
                    var i = n.extract || void 0;
                    i && !i.length && (i = ["none"]);
                    var r = u.hasDataset(this.client.clientConfig),
                        o = "image" === t ? "images" : "files",
                        c = f(n, e),
                        l = c.label,
                        d = c.title,
                        p = c.description,
                        m = c.creditLine,
                        g = c.filename,
                        v = c.source,
                        y = {
                            label: l,
                            title: d,
                            description: p,
                            filename: g,
                            meta: i,
                            creditLine: m
                        };
                    v && (y.sourceId = v.id, y.sourceName = v.name, y.sourceUrl = v.url);
                    var b = this.client._requestObservable({
                        method: "POST",
                        timeout: c.timeout || 0,
                        uri: "/assets/".concat(o, "/").concat(r),
                        headers: c.contentType ? {
                            "Content-Type": c.contentType
                        } : {},
                        query: y,
                        body: e
                    });
                    return this.client.isPromiseAPI() ? b.pipe(s((function(t) {
                        return "response" === t.type
                    })), a((function(t) {
                        return h(t.body)
                    }))).toPromise() : b
                },
                delete: function(t, e) {
                    console.warn("client.assets.delete() is deprecated, please use client.delete(<document-id>)");
                    var n = e || "";
                    return /^(image|file)-/.test(n) ? t._id && (n = t._id) : n = "".concat(t, "-").concat(n), u.hasDataset(this.client.clientConfig), this.client.delete(n)
                },
                getImageUrl: function(t, e) {
                    var n = t._ref || t;
                    if ("string" !== typeof n) throw new Error("getImageUrl() needs either an object with a _ref, or a string with an asset document ID");
                    if (!/^image-[A-Za-z0-9_]+-\d+x\d+-[a-z]{1,5}$/.test(n)) throw new Error('Unsupported asset ID "'.concat(n, '". URL generation only works for auto-generated IDs.'));
                    var r = i(n.split("-"), 4),
                        o = r[1],
                        a = r[2],
                        s = r[3];
                    u.hasDataset(this.client.clientConfig);
                    var l = this.client.clientConfig,
                        h = l.projectId,
                        f = l.dataset,
                        d = e ? c(e) : "";
                    return "https://cdn.sanity.io/images/".concat(h, "/").concat(f, "/").concat(o, "-").concat(a, ".").concat(s).concat(d)
                }
            }), t.exports = l
        },
        "3ocN": function(t, e, n) {
            "use strict";
            var i = n("Q1FS").Observable,
                r = n("Qetd"),
                o = n("eX1s").map,
                a = n("8c+Z").filter,
                s = n("9bx3").reduce;

            function c() {
                i.apply(this, arguments)
            }

            function u(t, e) {
                var n = !1;
                return function() {
                    return n || (n = !0, console.warn(new Error("Calling observable.".concat(t, "(...) is deprecated. Please use observable.pipe(").concat(t, "(...)) instead")))), this.pipe(e.apply(this, arguments))
                }
            }
            c.prototype = Object.create(r(Object.create(null), i.prototype)), Object.defineProperty(c.prototype, "constructor", {
                value: c,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }), c.prototype.lift = function(t) {
                var e = new c;
                return e.source = this, e.operator = t, e
            }, c.prototype.map = u("map", o), c.prototype.filter = u("filter", a), c.prototype.reduce = u("filter", s), t.exports = c
        },
        "3uxB": function(t, e, n) {
            t.exports = {
                component: "sticker_component__NsF3E"
            }
        },
        "4JlD": function(t, e, n) {
            "use strict";
            var i = function(t) {
                switch (typeof t) {
                    case "string":
                        return t;
                    case "boolean":
                        return t ? "true" : "false";
                    case "number":
                        return isFinite(t) ? t : "";
                    default:
                        return ""
                }
            };
            t.exports = function(t, e, n, s) {
                return e = e || "&", n = n || "=", null === t && (t = void 0), "object" === typeof t ? o(a(t), (function(a) {
                    var s = encodeURIComponent(i(a)) + n;
                    return r(t[a]) ? o(t[a], (function(t) {
                        return s + encodeURIComponent(i(t))
                    })).join(e) : s + encodeURIComponent(i(t[a]))
                })).join(e) : s ? encodeURIComponent(i(s)) + n + encodeURIComponent(i(t)) : ""
            };
            var r = Array.isArray || function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            };

            function o(t, e) {
                if (t.map) return t.map(e);
                for (var n = [], i = 0; i < t.length; i++) n.push(e(t[i], i));
                return n
            }
            var a = Object.keys || function(t) {
                var e = [];
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
                return e
            }
        },
        "4ZSR": function(t, e, n) {
            "use strict";
            var i = n("N2s1"),
                r = n("Qetd"),
                o = n("VmPP"),
                a = n("pU/T"),
                s = {
                    apiHost: "https://api.sanity.io",
                    useProjectHostname: !0,
                    gradientMode: !1,
                    isPromiseAPI: !0
                },
                c = ["localhost", "127.0.0.1", "0.0.0.0"],
                u = function(t) {
                    return a((function() {
                        return console.warn(t.join(" "))
                    }))
                },
                l = u(["You are not using the Sanity CDN. That means your data is always fresh, but the CDN is faster and", "cheaper. Think about it! For more info, see ".concat(i("js-client-cdn-configuration"), "."), "To hide this warning, please set the `useCdn` option to either `true` or `false` when creating", "the client."]),
                h = u(["You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.", "See ".concat(i("js-client-browser-token"), " for more information and how to hide this warning.")]),
                f = u(["You have set `useCdn` to `true` while also specifying a token. This is usually not what you", "want. The CDN cannot be used with an authorization token, since private data cannot be cached.", "See ".concat(i("js-client-usecdn-token"), " for more information.")]);
            e.defaultConfig = s, e.initConfig = function(t, e) {
                var n = r({}, s, e, t),
                    a = n.gradientMode,
                    u = !a && n.useProjectHostname;
                if ("undefined" === typeof Promise) {
                    var d = i("js-client-promise-polyfill");
                    throw new Error("No native Promise-implementation found, polyfill needed - see ".concat(d))
                }
                if (a && !n.namespace) throw new Error("Configuration must contain `namespace` when running in gradient mode");
                if (u && !n.projectId) throw new Error("Configuration must contain `projectId`");
                var p = "undefined" !== typeof window && window.location && window.location.hostname,
                    m = p && function(t) {
                        return -1 !== c.indexOf(t)
                    }(window.location.hostname);
                if (p && m && n.token && !0 !== n.ignoreBrowserTokenWarning ? h() : (!p || m) && n.useCdn && n.token ? f() : "undefined" === typeof n.useCdn && l(), u && o.projectId(n.projectId), !a && n.dataset && o.dataset(n.dataset, n.gradientMode), n.isDefaultApi = n.apiHost === s.apiHost, n.useCdn = Boolean(n.useCdn) && !n.token && !n.withCredentials, n.gradientMode) n.url = n.apiHost, n.cdnUrl = n.apiHost;
                else {
                    var g = n.apiHost.split("://", 2),
                        v = g[0],
                        y = g[1],
                        b = n.isDefaultApi ? "apicdn.sanity.io" : y;
                    n.useProjectHostname ? (n.url = "".concat(v, "://").concat(n.projectId, ".").concat(y, "/v1"), n.cdnUrl = "".concat(v, "://").concat(n.projectId, ".").concat(b, "/v1")) : (n.url = "".concat(n.apiHost, "/v1"), n.cdnUrl = n.url)
                }
                return n
            }
        },
        "4ik+": function(t, e, n) {
            "use strict";
            var i = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function i() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n("FWf1");
            e.filter = function(t, e) {
                return function(n) {
                    return n.lift(new o(t, e))
                }
            };
            var o = function() {
                    function t(t, e) {
                        this.predicate = t, this.thisArg = e
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new a(t, this.predicate, this.thisArg))
                    }, t
                }(),
                a = function(t) {
                    function e(e, n, i) {
                        var r = t.call(this, e) || this;
                        return r.predicate = n, r.thisArg = i, r.count = 0, r
                    }
                    return i(e, t), e.prototype._next = function(t) {
                        var e;
                        try {
                            e = this.predicate.call(this.thisArg, t, this.count++)
                        } catch (n) {
                            return void this.destination.error(n)
                        }
                        e && this.destination.next(t)
                    }, e
                }(r.Subscriber)
        },
        "6wuA": function(t, e, n) {
            "use strict";

            function i(t) {
                this.client = t
            }
            n("Qetd")(i.prototype, {
                getById: function(t) {
                    return this.client.request({
                        uri: "/users/".concat(t)
                    })
                }
            }), t.exports = i
        },
        "76/Q": function(t, e, n) {
            "use strict";
            var i = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function i() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n("FWf1"),
                o = n("IKal"),
                a = n("aJGj");
            e.takeLast = function(t) {
                return function(e) {
                    return 0 === t ? a.empty() : e.lift(new s(t))
                }
            };
            var s = function() {
                    function t(t) {
                        if (this.total = t, this.total < 0) throw new o.ArgumentOutOfRangeError
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new c(t, this.total))
                    }, t
                }(),
                c = function(t) {
                    function e(e, n) {
                        var i = t.call(this, e) || this;
                        return i.total = n, i.ring = new Array, i.count = 0, i
                    }
                    return i(e, t), e.prototype._next = function(t) {
                        var e = this.ring,
                            n = this.total,
                            i = this.count++;
                        e.length < n ? e.push(t) : e[i % n] = t
                    }, e.prototype._complete = function() {
                        var t = this.destination,
                            e = this.count;
                        if (e > 0)
                            for (var n = this.count >= this.total ? this.total : this.count, i = this.ring, r = 0; r < n; r++) {
                                var o = e++ % n;
                                t.next(i[o])
                            }
                        t.complete()
                    }, e
                }(r.Subscriber)
        },
        "7D1f": function(t, e, n) {
            t.exports = {
                header: "partyDesign_header__2iBPr",
                gridLeft: "partyDesign_gridLeft__2WRGd",
                "aspect-ratio": "partyDesign_aspect-ratio__3vWd4",
                gridRight: "partyDesign_gridRight__2WcAk",
                introduction: "partyDesign_introduction__3TrFc",
                gallery: "partyDesign_gallery__3fD1D",
                balloons: "partyDesign_balloons__1mX_j",
                projects: "partyDesign_projects__2yGg0",
                projectsList: "partyDesign_projectsList__3_G0l",
                texts: "partyDesign_texts__3mBLR",
                outro: "partyDesign_outro__2YbfM"
            }
        },
        "7Q5a": function(t, e, n) {
            var i, r, o;
            "undefined" === typeof self || self, r = [], void 0 === (o = "function" === typeof(i = function() {
                var t = function(t, e) {
                    if (!t || "string" != typeof t) throw new SyntaxError("Not enough arguments");
                    this.URL = t, this.setOptions(e);
                    var n = this;
                    setTimeout((function() {
                        n.poll()
                    }), 0)
                };
                if (t.prototype = {
                        CONNECTING: 0,
                        OPEN: 1,
                        CLOSED: 2,
                        defaultOptions: {
                            loggingEnabled: !1,
                            loggingPrefix: "eventsource",
                            interval: 500,
                            bufferSizeLimit: 262144,
                            silentTimeout: 3e5,
                            getArgs: {
                                evs_buffer_size_limit: 262144
                            },
                            xhrHeaders: {
                                Accept: "text/event-stream",
                                "Cache-Control": "no-cache",
                                "X-Requested-With": "XMLHttpRequest"
                            }
                        },
                        setOptions: function(t) {
                            var e, n = this.defaultOptions;
                            for (e in n) n.hasOwnProperty(e) && (this[e] = n[e]);
                            for (e in t) e in n && t.hasOwnProperty(e) && (this[e] = t[e]);
                            this.getArgs && this.bufferSizeLimit && (this.getArgs.evs_buffer_size_limit = this.bufferSizeLimit), "undefined" !== typeof console && "undefined" !== typeof console.log || (this.loggingEnabled = !1)
                        },
                        log: function(t) {
                            this.loggingEnabled && console.log("[" + this.loggingPrefix + "]:" + t)
                        },
                        poll: function() {
                            try {
                                if (this.readyState == this.CLOSED) return;
                                this.cleanup(), this.readyState = this.CONNECTING, this.cursor = 0, this.cache = "", this._xhr = new this.XHR(this), this.resetNoActivityTimer()
                            } catch (t) {
                                this.log("There were errors inside the pool try-catch"), this.dispatchEvent("error", {
                                    type: "error",
                                    data: t.message
                                })
                            }
                        },
                        pollAgain: function(t) {
                            var e = this;
                            e.readyState = e.CONNECTING, e.dispatchEvent("error", {
                                type: "error",
                                data: "Reconnecting "
                            }), this._pollTimer = setTimeout((function() {
                                e.poll()
                            }), t || 0)
                        },
                        cleanup: function() {
                            this.log("evs cleaning up"), this._pollTimer && (clearInterval(this._pollTimer), this._pollTimer = null), this._noActivityTimer && (clearInterval(this._noActivityTimer), this._noActivityTimer = null), this._xhr && (this._xhr.abort(), this._xhr = null)
                        },
                        resetNoActivityTimer: function() {
                            if (this.silentTimeout) {
                                this._noActivityTimer && clearInterval(this._noActivityTimer);
                                var t = this;
                                this._noActivityTimer = setTimeout((function() {
                                    t.log("Timeout! silentTImeout:" + t.silentTimeout), t.pollAgain()
                                }), this.silentTimeout)
                            }
                        },
                        close: function() {
                            this.readyState = this.CLOSED, this.log("Closing connection. readyState: " + this.readyState), this.cleanup()
                        },
                        _onxhrdata: function() {
                            var t = this._xhr;
                            if (t.isReady() && !t.hasError()) {
                                this.resetNoActivityTimer(), this.readyState == this.CONNECTING && (this.readyState = this.OPEN, this.dispatchEvent("open", {
                                    type: "open"
                                }));
                                var e = t.getBuffer();
                                e.length > this.bufferSizeLimit && (this.log("buffer.length > this.bufferSizeLimit"), this.pollAgain()), 0 == this.cursor && e.length > 0 && "\ufeff" == e.substring(0, 1) && (this.cursor = 1);
                                var n = this.lastMessageIndex(e);
                                if (n[0] >= this.cursor) {
                                    var i = n[1],
                                        r = e.substring(this.cursor, i);
                                    this.parseStream(r), this.cursor = i
                                }
                                t.isDone() && (this.log("request.isDone(). reopening the connection"), this.pollAgain(this.interval))
                            } else this.readyState !== this.CLOSED && (this.log("this.readyState !== this.CLOSED"), this.pollAgain(this.interval))
                        },
                        parseStream: function(t) {
                            var e, i, r, o, a, s, c = (t = this.cache + this.normalizeToLF(t)).split("\n\n");
                            for (e = 0; e < c.length - 1; e++) {
                                r = "message", o = [];
                                var u = c[e].split("\n");
                                for (i = 0; i < u.length; i++) 0 == (a = this.trimWhiteSpace(u[i])).indexOf("event") ? r = a.replace(/event:?\s*/, "") : 0 == a.indexOf("retry") ? (s = parseInt(a.replace(/retry:?\s*/, ""), 10), isNaN(s) || (this.interval = s)) : 0 == a.indexOf("data") ? o.push(a.replace(/data:?\s*/, "")) : 0 == a.indexOf("id:") ? this.lastEventId = a.replace(/id:?\s*/, "") : 0 == a.indexOf("id") && (this.lastEventId = null);
                                if (o.length && this.readyState != this.CLOSED) {
                                    var l = new n(r, o.join("\n"), "undefined" !== typeof window && "undefined" !== typeof window.location ? window.location.origin : null, this.lastEventId);
                                    this.dispatchEvent(r, l)
                                }
                            }
                            this.cache = c[c.length - 1]
                        },
                        dispatchEvent: function(t, e) {
                            var n = this["_" + t + "Handlers"];
                            if (n)
                                for (var i = 0; i < n.length; i++) n[i].call(this, e);
                            this["on" + t] && this["on" + t].call(this, e)
                        },
                        addEventListener: function(t, e) {
                            this["_" + t + "Handlers"] || (this["_" + t + "Handlers"] = []), this["_" + t + "Handlers"].push(e)
                        },
                        removeEventListener: function(t, e) {
                            var n = this["_" + t + "Handlers"];
                            if (n)
                                for (var i = n.length - 1; i >= 0; --i)
                                    if (n[i] === e) {
                                        n.splice(i, 1);
                                        break
                                    }
                        },
                        _pollTimer: null,
                        _noactivityTimer: null,
                        _xhr: null,
                        lastEventId: null,
                        cache: "",
                        cursor: 0,
                        onerror: null,
                        onmessage: null,
                        onopen: null,
                        readyState: 0,
                        urlWithParams: function(t, e) {
                            var n = [];
                            if (e) {
                                var i, r, o = encodeURIComponent;
                                for (i in e) e.hasOwnProperty(i) && (r = o(i) + "=" + o(e[i]), n.push(r))
                            }
                            return n.length > 0 ? -1 == t.indexOf("?") ? t + "?" + n.join("&") : t + "&" + n.join("&") : t
                        },
                        lastMessageIndex: function(t) {
                            var e = t.lastIndexOf("\n\n"),
                                n = t.lastIndexOf("\r\r"),
                                i = t.lastIndexOf("\r\n\r\n");
                            return i > Math.max(e, n) ? [i, i + 4] : [Math.max(e, n), Math.max(e, n) + 2]
                        },
                        trimWhiteSpace: function(t) {
                            var e = /^(\s|\u00A0)+|(\s|\u00A0)+$/g;
                            return t.replace(e, "")
                        },
                        normalizeToLF: function(t) {
                            return t.replace(/\r\n|\r/g, "\n")
                        }
                    }, i()) {
                    t.isPolyfill = "IE_8-9";
                    var e = t.prototype.defaultOptions;
                    e.xhrHeaders = null, e.getArgs.evs_preamble = 2056, t.prototype.XHR = function(t) {
                        var e = new XDomainRequest;
                        this._request = e, e.onprogress = function() {
                            e._ready = !0, t._onxhrdata()
                        }, e.onload = function() {
                            this._loaded = !0, t._onxhrdata()
                        }, e.onerror = function() {
                            this._failed = !0, t.readyState = t.CLOSED, t.dispatchEvent("error", {
                                type: "error",
                                data: "XDomainRequest error"
                            })
                        }, e.ontimeout = function() {
                            this._failed = !0, t.readyState = t.CLOSED, t.dispatchEvent("error", {
                                type: "error",
                                data: "XDomainRequest timed out"
                            })
                        };
                        var n = {};
                        if (t.getArgs) {
                            var i = t.getArgs;
                            for (var r in i) i.hasOwnProperty(r) && (n[r] = i[r]);
                            t.lastEventId && (n.evs_last_event_id = t.lastEventId)
                        }
                        e.open("GET", t.urlWithParams(t.URL, n)), e.send()
                    }, t.prototype.XHR.prototype = {
                        useXDomainRequest: !0,
                        _request: null,
                        _ready: !1,
                        _loaded: !1,
                        _failed: !1,
                        isReady: function() {
                            return this._request._ready
                        },
                        isDone: function() {
                            return this._request._loaded
                        },
                        hasError: function() {
                            return this._request._failed
                        },
                        getBuffer: function() {
                            var t = "";
                            try {
                                t = this._request.responseText || ""
                            } catch (e) {}
                            return t
                        },
                        abort: function() {
                            this._request && this._request.abort()
                        }
                    }
                } else t.isPolyfill = "XHR", t.prototype.XHR = function(t) {
                    var e = new XMLHttpRequest;
                    this._request = e, t._xhr = this, e.onreadystatechange = function() {
                        e.readyState > 1 && t.readyState != t.CLOSED && (200 == e.status || e.status >= 300 && e.status < 400 ? t._onxhrdata() : (e._failed = !0, t.readyState = t.CLOSED, t.dispatchEvent("error", {
                            type: "error",
                            data: "The server responded with " + e.status
                        }), t.close()))
                    }, e.onprogress = function() {}, e.open("GET", t.urlWithParams(t.URL, t.getArgs), !0);
                    var n = t.xhrHeaders;
                    for (var i in n) n.hasOwnProperty(i) && e.setRequestHeader(i, n[i]);
                    t.lastEventId && e.setRequestHeader("Last-Event-Id", t.lastEventId), e.send()
                }, t.prototype.XHR.prototype = {
                    useXDomainRequest: !1,
                    _request: null,
                    _failed: !1,
                    isReady: function() {
                        return this._request.readyState >= 2
                    },
                    isDone: function() {
                        return 4 == this._request.readyState
                    },
                    hasError: function() {
                        return this._failed || this._request.status >= 400
                    },
                    getBuffer: function() {
                        var t = "";
                        try {
                            t = this._request.responseText || ""
                        } catch (e) {}
                        return t
                    },
                    abort: function() {
                        this._request && this._request.abort()
                    }
                };

                function n(t, e, n, i) {
                    this.bubbles = !1, this.cancelBubble = !1, this.cancelable = !1, this.data = e || null, this.origin = n || "", this.lastEventId = i || "", this.type = t || "message"
                }

                function i() {
                    return Boolean("undefined" !== typeof window && window.XDomainRequest && window.XMLHttpRequest && void 0 === (new XMLHttpRequest).responseType)
                }
                return t
            }) ? i.apply(e, r) : i) || (t.exports = o)
        },
        "7W2i": function(t, e, n) {
            var i = n("SksO");
            t.exports = function(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && i(t, e)
            }
        },
        "82qm": function(t, e) {
            t.exports = function() {
                var t = [];
                return {
                    subscribe: function(e) {
                        return t.push(e),
                            function() {
                                var n = t.indexOf(e);
                                n > -1 && t.splice(n, 1)
                            }
                    },
                    publish: function() {
                        for (var e = 0; e < t.length; e++) t[e].apply(null, arguments)
                    }
                }
            }
        },
        "8Kt/": function(t, e, n) {
            "use strict";
            n("lSNA");
            e.__esModule = !0, e.defaultHead = l, e.default = void 0;
            var i, r = function(t) {
                    if (t && t.__esModule) return t;
                    if (null === t || "object" !== typeof t && "function" !== typeof t) return {
                        default: t
                    };
                    var e = u();
                    if (e && e.has(t)) return e.get(t);
                    var n = {},
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in t)
                        if (Object.prototype.hasOwnProperty.call(t, r)) {
                            var o = i ? Object.getOwnPropertyDescriptor(t, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(n, r, o) : n[r] = t[r]
                        } n.default = t, e && e.set(t, n);
                    return n
                }(n("q1tI")),
                o = (i = n("Xuae")) && i.__esModule ? i : {
                    default: i
                },
                a = n("lwAK"),
                s = n("FYa8"),
                c = n("/0+H");

            function u() {
                if ("function" !== typeof WeakMap) return null;
                var t = new WeakMap;
                return u = function() {
                    return t
                }, t
            }

            function l() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    e = [r.default.createElement("meta", {
                        charSet: "utf-8"
                    })];
                return t || e.push(r.default.createElement("meta", {
                    name: "viewport",
                    content: "width=device-width"
                })), e
            }

            function h(t, e) {
                return "string" === typeof e || "number" === typeof e ? t : e.type === r.default.Fragment ? t.concat(r.default.Children.toArray(e.props.children).reduce((function(t, e) {
                    return "string" === typeof e || "number" === typeof e ? t : t.concat(e)
                }), [])) : t.concat(e)
            }
            var f = ["name", "httpEquiv", "charSet", "itemProp"];

            function d(t, e) {
                return t.reduce((function(t, e) {
                    var n = r.default.Children.toArray(e.props.children);
                    return t.concat(n)
                }), []).reduce(h, []).reverse().concat(l(e.inAmpMode)).filter(function() {
                    var t = new Set,
                        e = new Set,
                        n = new Set,
                        i = {};
                    return function(r) {
                        var o = !0;
                        if (r.key && "number" !== typeof r.key && r.key.indexOf("$") > 0) {
                            var a = r.key.slice(r.key.indexOf("$") + 1);
                            t.has(a) ? o = !1 : t.add(a)
                        }
                        switch (r.type) {
                            case "title":
                            case "base":
                                e.has(r.type) ? o = !1 : e.add(r.type);
                                break;
                            case "meta":
                                for (var s = 0, c = f.length; s < c; s++) {
                                    var u = f[s];
                                    if (r.props.hasOwnProperty(u))
                                        if ("charSet" === u) n.has(u) ? o = !1 : n.add(u);
                                        else {
                                            var l = r.props[u],
                                                h = i[u] || new Set;
                                            h.has(l) ? o = !1 : (h.add(l), i[u] = h)
                                        }
                                }
                        }
                        return o
                    }
                }()).reverse().map((function(t, e) {
                    var n = t.key || e;
                    return r.default.cloneElement(t, {
                        key: n
                    })
                }))
            }

            function p(t) {
                var e = t.children,
                    n = (0, r.useContext)(a.AmpStateContext),
                    i = (0, r.useContext)(s.HeadManagerContext);
                return r.default.createElement(o.default, {
                    reduceComponentsToState: d,
                    headManager: i,
                    inAmpMode: (0, c.isInAmpMode)(n)
                }, e)
            }
            p.rewind = function() {};
            var m = p;
            e.default = m
        },
        "8Uid": function(t, e, n) {
            "use strict";
            var i = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                r = n("Qetd"),
                o = n("+0iv"),
                a = ["boolean", "string", "number"];
            t.exports = function() {
                return {
                    processOptions: function(t) {
                        var e, n = t.body;
                        return n && !("function" === typeof n.pipe) && !((e = n).constructor && "function" === typeof e.constructor.isBuffer && e.constructor.isBuffer(e)) && (-1 !== a.indexOf("undefined" === typeof n ? "undefined" : i(n)) || Array.isArray(n) || o(n)) ? r({}, t, {
                            body: JSON.stringify(t.body),
                            headers: r({}, t.headers, {
                                "Content-Type": "application/json"
                            })
                        }) : t
                    }
                }
            }
        },
        "8c+Z": function(t, e, n) {
            e.filter = n("4ik+").filter
        },
        "9AGB": function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n("yoF8");

            function r(t) {
                return 0 === t.length ? i.identity : 1 === t.length ? t[0] : function(e) {
                    return t.reduce((function(t, e) {
                        return e(t)
                    }), e)
                }
            }
            e.pipe = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return r(t)
            }, e.pipeFromArray = r
        },
        "9bx3": function(t, e, n) {
            e.reduce = n("YK4L").reduce
        },
        Bcqf: function(t, e, n) {
            "use strict";
            (function(e) {
                "undefined" !== typeof window ? t.exports = window : "undefined" !== typeof e ? t.exports = e : "undefined" !== typeof self ? t.exports = self : t.exports = {}
            }).call(this, n("yLpj"))
        },
        Bnag: function(t, e) {
            t.exports = function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
        },
        C5f4: function(t, e, n) {
            "use strict";
            var i = n("Qetd");
            t.exports = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = {},
                    r = e.token || t.token;
                r && (n.Authorization = "Bearer ".concat(r)), e.useGlobalApi || t.useProjectHostname || !t.projectId || (n["X-Sanity-Project-ID"] = t.projectId);
                var o = Boolean("undefined" === typeof e.withCredentials ? t.token || t.withCredentials : e.withCredentials),
                    a = "undefined" === typeof e.timeout ? t.timeout : e.timeout;
                return i({}, e, {
                    headers: i({}, n, e.headers || {}),
                    timeout: "undefined" === typeof a ? 3e5 : a,
                    json: !0,
                    withCredentials: o
                })
            }
        },
        CoN9: function(t, e, n) {
            "use strict";
            var i = n("Qetd"),
                r = n("RT5d");
            t.exports = function(t, e) {
                var n = e || {
                    useDashedStyles: !1
                };

                function o(e, n) {
                    return t(e, null, n.children)
                }
                return {
                    defaultSerializers: {
                        types: {
                            block: function(e) {
                                var n = e.node.style || "normal";
                                return /^h\d/.test(n) ? t(n, null, e.children) : t("blockquote" === n ? "blockquote" : "p", null, e.children)
                            },
                            image: function(e) {
                                if (!e.node.asset) return null;
                                var n = t("img", {
                                    src: r(e)
                                });
                                return e.isInline ? n : t("figure", null, n)
                            }
                        },
                        marks: {
                            strong: o.bind(null, "strong"),
                            em: o.bind(null, "em"),
                            code: o.bind(null, "code"),
                            underline: function(e) {
                                var i = n.useDashedStyles ? {
                                    "text-decoration": "underline"
                                } : {
                                    textDecoration: "underline"
                                };
                                return t("span", {
                                    style: i
                                }, e.children)
                            },
                            "strike-through": function(e) {
                                return t("del", null, e.children)
                            },
                            link: function(e) {
                                return t("a", {
                                    href: e.mark.href
                                }, e.children)
                            }
                        },
                        list: function(e) {
                            var n = "bullet" === e.type ? "ul" : "ol";
                            return t(n, null, e.children)
                        },
                        listItem: function(e) {
                            var n = e.node.style && "normal" !== e.node.style ? t(e.serializers.types.block, e, e.children) : e.children;
                            return t("li", null, n)
                        },
                        block: function(e) {
                            var n = e.node,
                                i = e.serializers,
                                r = e.options,
                                o = e.isInline,
                                a = e.children,
                                s = n._type,
                                c = i.types[s];
                            if (!c) throw new Error('Unknown block type "'.concat(s, '", please specify a serializer for it in the `serializers.types` prop'));
                            return t(c, {
                                node: n,
                                options: r,
                                isInline: o
                            }, a)
                        },
                        span: function(e) {
                            var n = e.node,
                                i = n.mark,
                                r = n.children,
                                o = "string" === typeof i ? i : i._type,
                                a = e.serializers.marks[o];
                            return a ? t(a, e.node, r) : (console.warn('Unknown mark type "'.concat(o, '", please specify a serializer for it in the `serializers.marks` prop')), t(e.serializers.markFallback, null, r))
                        },
                        hardBreak: function() {
                            return t("br")
                        },
                        container: "div",
                        markFallback: "span",
                        text: void 0,
                        empty: ""
                    },
                    serializeSpan: function(e, n, r, o) {
                        if ("\n" === e && n.hardBreak) return t(n.hardBreak, {
                            key: "hb-".concat(r)
                        });
                        if ("string" === typeof e) return n.text ? t(n.text, {
                            key: "text-".concat(r)
                        }, e) : e;
                        var a;
                        e.children && (a = {
                            children: e.children.map((function(t, n) {
                                return o.serializeNode(t, n, e.children, !0)
                            }))
                        });
                        var s = i({}, e, a);
                        return t(n.span, {
                            key: e._key || "span-".concat(r),
                            node: s,
                            serializers: n
                        })
                    }
                }
            }
        },
        D2Oh: function(t, e, n) {
            t.exports = {
                component: "illustration_component__3eoM8"
            }
        },
        DCZw: function(t, e, n) {
            "use strict";
            var i = n("q1tI"),
                r = (0, n("DEm0").getSerializers)(i.createElement),
                o = r.defaultSerializers,
                a = r.serializeSpan;
            t.exports = {
                serializeSpan: a,
                serializers: o,
                renderProps: {
                    nestMarks: !0
                }
            }
        },
        DEm0: function(t, e, n) {
            t.exports = n("ctZY")
        },
        DRjL: function(t, e, n) {
            "use strict";
            t.exports = function(t, e) {
                return e.reduce((function(e, n) {
                    return "undefined" === typeof t[n] || (e[n] = t[n]), e
                }), {})
            }
        },
        E6ma: function(t, e, n) {
            "use strict";
            var i = n("Qetd"),
                r = n("GBY4"),
                o = "undefined" !== typeof navigator && "ReactNative" === navigator.product,
                a = Object.prototype.hasOwnProperty,
                s = {
                    timeout: o ? 6e4 : 12e4
                };

            function c(t) {
                var e = [];
                for (var n in t) a.call(t, n) && i(n, t[n]);
                return e.length ? e.join("&") : "";

                function i(t, n) {
                    Array.isArray(n) ? n.forEach((function(e) {
                        return i(t, e)
                    })) : e.push([t, n].map(encodeURIComponent).join("="))
                }
            }
            t.exports = function(t) {
                var e = "string" === typeof t ? i({
                        url: t
                    }, s) : i({}, s, t),
                    n = r(e.url, {}, !0);
                return e.timeout = function t(e) {
                    if (!1 === e || 0 === e) return !1;
                    if (e.connect || e.socket) return e;
                    var n = Number(e);
                    if (isNaN(n)) return t(s.timeout);
                    return {
                        connect: n,
                        socket: n
                    }
                }(e.timeout), e.query && (n.query = i({}, n.query, function(t) {
                    var e = {};
                    for (var n in t) void 0 !== t[n] && (e[n] = t[n]);
                    return e
                }(e.query))), e.method = e.body && !e.method ? "POST" : (e.method || "GET").toUpperCase(), e.url = n.toString(c), e
            }
        },
        E8zQ: function(t, e, n) {
            t.exports = {
                description: "artisticDirection_description__bacWJ",
                lamp: "artisticDirection_lamp__1Pq7R",
                light: "artisticDirection_light__3F9nC",
                descriptionLeft: "artisticDirection_descriptionLeft__YIjb-",
                textBackground: "artisticDirection_textBackground__2odYX",
                textArtistic: "artisticDirection_textArtistic__ktWqV",
                textDirection: "artisticDirection_textDirection__1415v",
                descriptionRight: "artisticDirection_descriptionRight__1ntBx",
                descriptionRightContent: "artisticDirection_descriptionRightContent__1G0U2",
                descriptionRightBackground: "artisticDirection_descriptionRightBackground__17tjs",
                projects: "artisticDirection_projects__HhDha",
                projectsList: "artisticDirection_projectsList__3bIG3",
                outro: "artisticDirection_outro__M4pf-"
            }
        },
        EbDI: function(t, e) {
            t.exports = function(t) {
                if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
            }
        },
        FWf1: function(t, e, n) {
            "use strict";
            var i = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function i() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n("pshJ"),
                o = n("GiSu"),
                a = n("zB/H"),
                s = n("p//D"),
                c = n("n3uD"),
                u = n("MkmW"),
                l = function(t) {
                    function e(n, i, r) {
                        var a = t.call(this) || this;
                        switch (a.syncErrorValue = null, a.syncErrorThrown = !1, a.syncErrorThrowable = !1, a.isStopped = !1, arguments.length) {
                            case 0:
                                a.destination = o.empty;
                                break;
                            case 1:
                                if (!n) {
                                    a.destination = o.empty;
                                    break
                                }
                                if ("object" === typeof n) {
                                    n instanceof e ? (a.syncErrorThrowable = n.syncErrorThrowable, a.destination = n, n.add(a)) : (a.syncErrorThrowable = !0, a.destination = new h(a, n));
                                    break
                                }
                                default:
                                    a.syncErrorThrowable = !0, a.destination = new h(a, n, i, r)
                        }
                        return a
                    }
                    return i(e, t), e.prototype[s.rxSubscriber] = function() {
                        return this
                    }, e.create = function(t, n, i) {
                        var r = new e(t, n, i);
                        return r.syncErrorThrowable = !1, r
                    }, e.prototype.next = function(t) {
                        this.isStopped || this._next(t)
                    }, e.prototype.error = function(t) {
                        this.isStopped || (this.isStopped = !0, this._error(t))
                    }, e.prototype.complete = function() {
                        this.isStopped || (this.isStopped = !0, this._complete())
                    }, e.prototype.unsubscribe = function() {
                        this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this))
                    }, e.prototype._next = function(t) {
                        this.destination.next(t)
                    }, e.prototype._error = function(t) {
                        this.destination.error(t), this.unsubscribe()
                    }, e.prototype._complete = function() {
                        this.destination.complete(), this.unsubscribe()
                    }, e.prototype._unsubscribeAndRecycle = function() {
                        var t = this._parentOrParents;
                        return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = t, this
                    }, e
                }(a.Subscription);
            e.Subscriber = l;
            var h = function(t) {
                function e(e, n, i, a) {
                    var s, c = t.call(this) || this;
                    c._parentSubscriber = e;
                    var u = c;
                    return r.isFunction(n) ? s = n : n && (s = n.next, i = n.error, a = n.complete, n !== o.empty && (u = Object.create(n), r.isFunction(u.unsubscribe) && c.add(u.unsubscribe.bind(u)), u.unsubscribe = c.unsubscribe.bind(c))), c._context = u, c._next = s, c._error = i, c._complete = a, c
                }
                return i(e, t), e.prototype.next = function(t) {
                    if (!this.isStopped && this._next) {
                        var e = this._parentSubscriber;
                        c.config.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t)
                    }
                }, e.prototype.error = function(t) {
                    if (!this.isStopped) {
                        var e = this._parentSubscriber,
                            n = c.config.useDeprecatedSynchronousErrorHandling;
                        if (this._error) n && e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
                        else if (e.syncErrorThrowable) n ? (e.syncErrorValue = t, e.syncErrorThrown = !0) : u.hostReportError(t), this.unsubscribe();
                        else {
                            if (this.unsubscribe(), n) throw t;
                            u.hostReportError(t)
                        }
                    }
                }, e.prototype.complete = function() {
                    var t = this;
                    if (!this.isStopped) {
                        var e = this._parentSubscriber;
                        if (this._complete) {
                            var n = function() {
                                return t._complete.call(t._context)
                            };
                            c.config.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? (this.__tryOrSetError(e, n), this.unsubscribe()) : (this.__tryOrUnsub(n), this.unsubscribe())
                        } else this.unsubscribe()
                    }
                }, e.prototype.__tryOrUnsub = function(t, e) {
                    try {
                        t.call(this._context, e)
                    } catch (n) {
                        if (this.unsubscribe(), c.config.useDeprecatedSynchronousErrorHandling) throw n;
                        u.hostReportError(n)
                    }
                }, e.prototype.__tryOrSetError = function(t, e, n) {
                    if (!c.config.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
                    try {
                        e.call(this._context, n)
                    } catch (i) {
                        return c.config.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = i, t.syncErrorThrown = !0, !0) : (u.hostReportError(i), !0)
                    }
                    return !1
                }, e.prototype._unsubscribe = function() {
                    var t = this._parentSubscriber;
                    this._context = null, this._parentSubscriber = null, t.unsubscribe()
                }, e
            }(l);
            e.SafeSubscriber = h
        },
        FYa8: function(t, e, n) {
            "use strict";
            var i;
            e.__esModule = !0, e.HeadManagerContext = void 0;
            var r = ((i = n("q1tI")) && i.__esModule ? i : {
                default: i
            }).default.createContext({});
            e.HeadManagerContext = r
        },
        GBY4: function(t, e, n) {
            "use strict";
            (function(e) {
                var i = n("RA0T"),
                    r = n("nFlj"),
                    o = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
                    a = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
                    s = new RegExp("^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+");

                function c(t) {
                    return (t || "").toString().replace(s, "")
                }
                var u = [
                        ["#", "hash"],
                        ["?", "query"],
                        function(t) {
                            return t.replace("\\", "/")
                        },
                        ["/", "pathname"],
                        ["@", "auth", 1],
                        [NaN, "host", void 0, 1, 1],
                        [/:(\d+)$/, "port", void 0, 1],
                        [NaN, "hostname", void 0, 1, 1]
                    ],
                    l = {
                        hash: 1,
                        query: 1
                    };

                function h(t) {
                    var n, i = ("undefined" !== typeof window ? window : "undefined" !== typeof e ? e : "undefined" !== typeof self ? self : {}).location || {},
                        r = {},
                        a = typeof(t = t || i);
                    if ("blob:" === t.protocol) r = new d(unescape(t.pathname), {});
                    else if ("string" === a)
                        for (n in r = new d(t, {}), l) delete r[n];
                    else if ("object" === a) {
                        for (n in t) n in l || (r[n] = t[n]);
                        void 0 === r.slashes && (r.slashes = o.test(t.href))
                    }
                    return r
                }

                function f(t) {
                    t = c(t);
                    var e = a.exec(t);
                    return {
                        protocol: e[1] ? e[1].toLowerCase() : "",
                        slashes: !!e[2],
                        rest: e[3]
                    }
                }

                function d(t, e, n) {
                    if (t = c(t), !(this instanceof d)) return new d(t, e, n);
                    var o, a, s, l, p, m, g = u.slice(),
                        v = typeof e,
                        y = this,
                        b = 0;
                    for ("object" !== v && "string" !== v && (n = e, e = null), n && "function" !== typeof n && (n = r.parse), e = h(e), o = !(a = f(t || "")).protocol && !a.slashes, y.slashes = a.slashes || o && e.slashes, y.protocol = a.protocol || e.protocol || "", t = a.rest, a.slashes || (g[3] = [/(.*)/, "pathname"]); b < g.length; b++) "function" !== typeof(l = g[b]) ? (s = l[0], m = l[1], s !== s ? y[m] = t : "string" === typeof s ? ~(p = t.indexOf(s)) && ("number" === typeof l[2] ? (y[m] = t.slice(0, p), t = t.slice(p + l[2])) : (y[m] = t.slice(p), t = t.slice(0, p))) : (p = s.exec(t)) && (y[m] = p[1], t = t.slice(0, p.index)), y[m] = y[m] || o && l[3] && e[m] || "", l[4] && (y[m] = y[m].toLowerCase())) : t = l(t);
                    n && (y.query = n(y.query)), o && e.slashes && "/" !== y.pathname.charAt(0) && ("" !== y.pathname || "" !== e.pathname) && (y.pathname = function(t, e) {
                        if ("" === t) return e;
                        for (var n = (e || "/").split("/").slice(0, -1).concat(t.split("/")), i = n.length, r = n[i - 1], o = !1, a = 0; i--;) "." === n[i] ? n.splice(i, 1) : ".." === n[i] ? (n.splice(i, 1), a++) : a && (0 === i && (o = !0), n.splice(i, 1), a--);
                        return o && n.unshift(""), "." !== r && ".." !== r || n.push(""), n.join("/")
                    }(y.pathname, e.pathname)), i(y.port, y.protocol) || (y.host = y.hostname, y.port = ""), y.username = y.password = "", y.auth && (l = y.auth.split(":"), y.username = l[0] || "", y.password = l[1] || ""), y.origin = y.protocol && y.host && "file:" !== y.protocol ? y.protocol + "//" + y.host : "null", y.href = y.toString()
                }
                d.prototype = {
                    set: function(t, e, n) {
                        var o = this;
                        switch (t) {
                            case "query":
                                "string" === typeof e && e.length && (e = (n || r.parse)(e)), o[t] = e;
                                break;
                            case "port":
                                o[t] = e, i(e, o.protocol) ? e && (o.host = o.hostname + ":" + e) : (o.host = o.hostname, o[t] = "");
                                break;
                            case "hostname":
                                o[t] = e, o.port && (e += ":" + o.port), o.host = e;
                                break;
                            case "host":
                                o[t] = e, /:\d+$/.test(e) ? (e = e.split(":"), o.port = e.pop(), o.hostname = e.join(":")) : (o.hostname = e, o.port = "");
                                break;
                            case "protocol":
                                o.protocol = e.toLowerCase(), o.slashes = !n;
                                break;
                            case "pathname":
                            case "hash":
                                if (e) {
                                    var a = "pathname" === t ? "/" : "#";
                                    o[t] = e.charAt(0) !== a ? a + e : e
                                } else o[t] = e;
                                break;
                            default:
                                o[t] = e
                        }
                        for (var s = 0; s < u.length; s++) {
                            var c = u[s];
                            c[4] && (o[c[1]] = o[c[1]].toLowerCase())
                        }
                        return o.origin = o.protocol && o.host && "file:" !== o.protocol ? o.protocol + "//" + o.host : "null", o.href = o.toString(), o
                    },
                    toString: function(t) {
                        t && "function" === typeof t || (t = r.stringify);
                        var e, n = this,
                            i = n.protocol;
                        i && ":" !== i.charAt(i.length - 1) && (i += ":");
                        var o = i + (n.slashes ? "//" : "");
                        return n.username && (o += n.username, n.password && (o += ":" + n.password), o += "@"), o += n.host + n.pathname, (e = "object" === typeof n.query ? t(n.query) : n.query) && (o += "?" !== e.charAt(0) ? "?" + e : e), n.hash && (o += n.hash), o
                    }
                }, d.extractProtocol = f, d.location = h, d.trimLeft = c, d.qs = r, t.exports = d
            }).call(this, n("yLpj"))
        },
        GMZp: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.isObject = function(t) {
                return null !== t && "object" === typeof t
            }
        },
        GiSu: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n("n3uD"),
                r = n("MkmW");
            e.empty = {
                closed: !0,
                next: function(t) {},
                error: function(t) {
                    if (i.config.useDeprecatedSynchronousErrorHandling) throw t;
                    r.hostReportError(t)
                },
                complete: function() {}
            }
        },
        I97X: function(t, e, n) {
            "use strict";
            var i = n("p+I8"),
                r = Object.prototype.hasOwnProperty,
                o = Object.prototype.propertyIsEnumerable;

            function a(t) {
                if (null === t || void 0 === t) throw new TypeError("Sources cannot be null or undefined");
                return Object(t)
            }

            function s(t, e, n) {
                var o = e[n];
                if (void 0 !== o && null !== o) {
                    if (r.call(t, n) && (void 0 === t[n] || null === t[n])) throw new TypeError("Cannot convert undefined or null to object (" + n + ")");
                    r.call(t, n) && i(o) ? t[n] = c(Object(t[n]), e[n]) : t[n] = o
                }
            }

            function c(t, e) {
                if (t === e) return t;
                for (var n in e = Object(e)) r.call(e, n) && s(t, e, n);
                if (Object.getOwnPropertySymbols)
                    for (var i = Object.getOwnPropertySymbols(e), a = 0; a < i.length; a++) o.call(e, i[a]) && s(t, e, i[a]);
                return t
            }
            t.exports = function(t) {
                t = a(t);
                for (var e = 1; e < arguments.length; e++) c(t, arguments[e]);
                return t
            }
        },
        IKal: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = function() {
                function t() {
                    return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this
                }
                return t.prototype = Object.create(Error.prototype), t
            }();
            e.ArgumentOutOfRangeError = i
        },
        Ijbi: function(t, e, n) {
            var i = n("WkPL");
            t.exports = function(t) {
                if (Array.isArray(t)) return i(t)
            }
        },
        J4rj: function(t, e, n) {
            "undefined" != typeof self && self, t.exports = function(t) {
                function e(i) {
                    if (n[i]) return n[i].exports;
                    var r = n[i] = {
                        i: i,
                        l: !1,
                        exports: {}
                    };
                    return t[i].call(r.exports, r, r.exports, e), r.l = !0, r.exports
                }
                var n = {};
                return e.m = t, e.c = n, e.d = function(t, n, i) {
                    e.o(t, n) || Object.defineProperty(t, n, {
                        configurable: !1,
                        enumerable: !0,
                        get: i
                    })
                }, e.n = function(t) {
                    var n = t && t.__esModule ? function() {
                        return t.default
                    } : function() {
                        return t
                    };
                    return e.d(n, "a", n), n
                }, e.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }, e.p = "", e(e.s = 29)
            }([function(t, e, n) {
                var i = n(24)("wks"),
                    r = n(12),
                    o = n(1).Symbol,
                    a = "function" == typeof o;
                (t.exports = function(t) {
                    return i[t] || (i[t] = a && o[t] || (a ? o : r)("Symbol." + t))
                }).store = i
            }, function(t, e) {
                var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
                "number" == typeof __g && (__g = n)
            }, function(t, e) {
                var n = t.exports = {
                    version: "2.5.6"
                };
                "number" == typeof __e && (__e = n)
            }, function(t, e, n) {
                var i = n(4),
                    r = n(11);
                t.exports = n(6) ? function(t, e, n) {
                    return i.f(t, e, r(1, n))
                } : function(t, e, n) {
                    return t[e] = n, t
                }
            }, function(t, e, n) {
                var i = n(5),
                    r = n(34),
                    o = n(35),
                    a = Object.defineProperty;
                e.f = n(6) ? Object.defineProperty : function(t, e, n) {
                    if (i(t), e = o(e, !0), i(n), r) try {
                        return a(t, e, n)
                    } catch (t) {}
                    if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                    return "value" in n && (t[e] = n.value), t
                }
            }, function(t, e, n) {
                var i = n(10);
                t.exports = function(t) {
                    if (!i(t)) throw TypeError(t + " is not an object!");
                    return t
                }
            }, function(t, e, n) {
                t.exports = !n(17)((function() {
                    return 7 != Object.defineProperty({}, "a", {
                        get: function() {
                            return 7
                        }
                    }).a
                }))
            }, function(t, e) {
                var n = {}.hasOwnProperty;
                t.exports = function(t, e) {
                    return n.call(t, e)
                }
            }, function(t, e) {
                var n = Math.ceil,
                    i = Math.floor;
                t.exports = function(t) {
                    return isNaN(t = +t) ? 0 : (t > 0 ? i : n)(t)
                }
            }, function(t, e) {
                t.exports = function(t) {
                    if (void 0 == t) throw TypeError("Can't call method on  " + t);
                    return t
                }
            }, function(t, e) {
                t.exports = function(t) {
                    return "object" == typeof t ? null !== t : "function" == typeof t
                }
            }, function(t, e) {
                t.exports = function(t, e) {
                    return {
                        enumerable: !(1 & t),
                        configurable: !(2 & t),
                        writable: !(4 & t),
                        value: e
                    }
                }
            }, function(t, e) {
                var n = 0,
                    i = Math.random();
                t.exports = function(t) {
                    return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + i).toString(36))
                }
            }, function(t, e) {
                t.exports = {}
            }, function(t, e, n) {
                var i = n(24)("keys"),
                    r = n(12);
                t.exports = function(t) {
                    return i[t] || (i[t] = r(t))
                }
            }, function(t, e) {
                t.exports = !1
            }, function(t, e, n) {
                var i = n(1),
                    r = n(2),
                    o = n(3),
                    a = n(19),
                    s = n(20),
                    c = function(t, e, n) {
                        var u, l, h, f, d = t & c.F,
                            p = t & c.G,
                            m = t & c.S,
                            g = t & c.P,
                            v = t & c.B,
                            y = p ? i : m ? i[e] || (i[e] = {}) : (i[e] || {}).prototype,
                            b = p ? r : r[e] || (r[e] = {}),
                            _ = b.prototype || (b.prototype = {});
                        for (u in p && (n = e), n) h = ((l = !d && y && void 0 !== y[u]) ? y : n)[u], f = v && l ? s(h, i) : g && "function" == typeof h ? s(Function.call, h) : h, y && a(y, u, h, t & c.U), b[u] != h && o(b, u, f), g && _[u] != h && (_[u] = h)
                    };
                i.core = r, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c
            }, function(t, e) {
                t.exports = function(t) {
                    try {
                        return !!t()
                    } catch (t) {
                        return !0
                    }
                }
            }, function(t, e, n) {
                var i = n(10),
                    r = n(1).document,
                    o = i(r) && i(r.createElement);
                t.exports = function(t) {
                    return o ? r.createElement(t) : {}
                }
            }, function(t, e, n) {
                var i = n(1),
                    r = n(3),
                    o = n(7),
                    a = n(12)("src"),
                    s = Function.toString,
                    c = ("" + s).split("toString");
                n(2).inspectSource = function(t) {
                    return s.call(t)
                }, (t.exports = function(t, e, n, s) {
                    var u = "function" == typeof n;
                    u && (o(n, "name") || r(n, "name", e)), t[e] !== n && (u && (o(n, a) || r(n, a, t[e] ? "" + t[e] : c.join(String(e)))), t === i ? t[e] = n : s ? t[e] ? t[e] = n : r(t, e, n) : (delete t[e], r(t, e, n)))
                })(Function.prototype, "toString", (function() {
                    return "function" == typeof this && this[a] || s.call(this)
                }))
            }, function(t, e, n) {
                var i = n(36);
                t.exports = function(t, e, n) {
                    if (i(t), void 0 === e) return t;
                    switch (n) {
                        case 1:
                            return function(n) {
                                return t.call(e, n)
                            };
                        case 2:
                            return function(n, i) {
                                return t.call(e, n, i)
                            };
                        case 3:
                            return function(n, i, r) {
                                return t.call(e, n, i, r)
                            }
                    }
                    return function() {
                        return t.apply(e, arguments)
                    }
                }
            }, function(t, e, n) {
                var i = n(42),
                    r = n(9);
                t.exports = function(t) {
                    return i(r(t))
                }
            }, function(t, e) {
                var n = {}.toString;
                t.exports = function(t) {
                    return n.call(t).slice(8, -1)
                }
            }, function(t, e, n) {
                var i = n(8),
                    r = Math.min;
                t.exports = function(t) {
                    return t > 0 ? r(i(t), 9007199254740991) : 0
                }
            }, function(t, e, n) {
                var i = n(2),
                    r = n(1),
                    o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
                (t.exports = function(t, e) {
                    return o[t] || (o[t] = void 0 !== e ? e : {})
                })("versions", []).push({
                    version: i.version,
                    mode: n(15) ? "pure" : "global",
                    copyright: "\xa9 2018 Denis Pushkarev (zloirock.ru)"
                })
            }, function(t, e) {
                t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
            }, function(t, e, n) {
                var i = n(4).f,
                    r = n(7),
                    o = n(0)("toStringTag");
                t.exports = function(t, e, n) {
                    t && !r(t = n ? t : t.prototype, o) && i(t, o, {
                        configurable: !0,
                        value: e
                    })
                }
            }, function(t, e, n) {
                var i = n(9);
                t.exports = function(t) {
                    return Object(i(t))
                }
            }, function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var i = Math.PI / 180;
                e.default = function(t) {
                    return t * i
                }
            }, function(t, e, n) {
                "use strict";
                n(30);
                var i = function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }(n(54));
                t.exports = i.default
            }, function(t, e, n) {
                n(31), n(47), t.exports = n(2).Array.from
            }, function(t, e, n) {
                "use strict";
                var i = n(32)(!0);
                n(33)(String, "String", (function(t) {
                    this._t = String(t), this._i = 0
                }), (function() {
                    var t, e = this._t,
                        n = this._i;
                    return n >= e.length ? {
                        value: void 0,
                        done: !0
                    } : (t = i(e, n), this._i += t.length, {
                        value: t,
                        done: !1
                    })
                }))
            }, function(t, e, n) {
                var i = n(8),
                    r = n(9);
                t.exports = function(t) {
                    return function(e, n) {
                        var o, a, s = String(r(e)),
                            c = i(n),
                            u = s.length;
                        return c < 0 || c >= u ? t ? "" : void 0 : (o = s.charCodeAt(c)) < 55296 || o > 56319 || c + 1 === u || (a = s.charCodeAt(c + 1)) < 56320 || a > 57343 ? t ? s.charAt(c) : o : t ? s.slice(c, c + 2) : a - 56320 + (o - 55296 << 10) + 65536
                    }
                }
            }, function(t, e, n) {
                "use strict";
                var i = n(15),
                    r = n(16),
                    o = n(19),
                    a = n(3),
                    s = n(13),
                    c = n(37),
                    u = n(26),
                    l = n(46),
                    h = n(0)("iterator"),
                    f = !([].keys && "next" in [].keys()),
                    d = function() {
                        return this
                    };
                t.exports = function(t, e, n, p, m, g, v) {
                    c(n, e, p);
                    var y, b, _, w = function(t) {
                            if (!f && t in T) return T[t];
                            switch (t) {
                                case "keys":
                                case "values":
                                    return function() {
                                        return new n(this, t)
                                    }
                            }
                            return function() {
                                return new n(this, t)
                            }
                        },
                        x = e + " Iterator",
                        k = "values" == m,
                        O = !1,
                        T = t.prototype,
                        S = T[h] || T["@@iterator"] || m && T[m],
                        E = S || w(m),
                        M = m ? k ? w("entries") : E : void 0,
                        C = "Array" == e && T.entries || S;
                    if (C && (_ = l(C.call(new t))) !== Object.prototype && _.next && (u(_, x, !0), i || "function" == typeof _[h] || a(_, h, d)), k && S && "values" !== S.name && (O = !0, E = function() {
                            return S.call(this)
                        }), i && !v || !f && !O && T[h] || a(T, h, E), s[e] = E, s[x] = d, m)
                        if (y = {
                                values: k ? E : w("values"),
                                keys: g ? E : w("keys"),
                                entries: M
                            }, v)
                            for (b in y) b in T || o(T, b, y[b]);
                        else r(r.P + r.F * (f || O), e, y);
                    return y
                }
            }, function(t, e, n) {
                t.exports = !n(6) && !n(17)((function() {
                    return 7 != Object.defineProperty(n(18)("div"), "a", {
                        get: function() {
                            return 7
                        }
                    }).a
                }))
            }, function(t, e, n) {
                var i = n(10);
                t.exports = function(t, e) {
                    if (!i(t)) return t;
                    var n, r;
                    if (e && "function" == typeof(n = t.toString) && !i(r = n.call(t))) return r;
                    if ("function" == typeof(n = t.valueOf) && !i(r = n.call(t))) return r;
                    if (!e && "function" == typeof(n = t.toString) && !i(r = n.call(t))) return r;
                    throw TypeError("Can't convert object to primitive value")
                }
            }, function(t, e) {
                t.exports = function(t) {
                    if ("function" != typeof t) throw TypeError(t + " is not a function!");
                    return t
                }
            }, function(t, e, n) {
                "use strict";
                var i = n(38),
                    r = n(11),
                    o = n(26),
                    a = {};
                n(3)(a, n(0)("iterator"), (function() {
                    return this
                })), t.exports = function(t, e, n) {
                    t.prototype = i(a, {
                        next: r(1, n)
                    }), o(t, e + " Iterator")
                }
            }, function(t, e, n) {
                var i = n(5),
                    r = n(39),
                    o = n(25),
                    a = n(14)("IE_PROTO"),
                    s = function() {},
                    c = function() {
                        var t, e = n(18)("iframe"),
                            i = o.length;
                        for (e.style.display = "none", n(45).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), c = t.F; i--;) delete c.prototype[o[i]];
                        return c()
                    };
                t.exports = Object.create || function(t, e) {
                    var n;
                    return null !== t ? (s.prototype = i(t), n = new s, s.prototype = null, n[a] = t) : n = c(), void 0 === e ? n : r(n, e)
                }
            }, function(t, e, n) {
                var i = n(4),
                    r = n(5),
                    o = n(40);
                t.exports = n(6) ? Object.defineProperties : function(t, e) {
                    r(t);
                    for (var n, a = o(e), s = a.length, c = 0; s > c;) i.f(t, n = a[c++], e[n]);
                    return t
                }
            }, function(t, e, n) {
                var i = n(41),
                    r = n(25);
                t.exports = Object.keys || function(t) {
                    return i(t, r)
                }
            }, function(t, e, n) {
                var i = n(7),
                    r = n(21),
                    o = n(43)(!1),
                    a = n(14)("IE_PROTO");
                t.exports = function(t, e) {
                    var n, s = r(t),
                        c = 0,
                        u = [];
                    for (n in s) n != a && i(s, n) && u.push(n);
                    for (; e.length > c;) i(s, n = e[c++]) && (~o(u, n) || u.push(n));
                    return u
                }
            }, function(t, e, n) {
                var i = n(22);
                t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
                    return "String" == i(t) ? t.split("") : Object(t)
                }
            }, function(t, e, n) {
                var i = n(21),
                    r = n(23),
                    o = n(44);
                t.exports = function(t) {
                    return function(e, n, a) {
                        var s, c = i(e),
                            u = r(c.length),
                            l = o(a, u);
                        if (t && n != n) {
                            for (; u > l;)
                                if ((s = c[l++]) != s) return !0
                        } else
                            for (; u > l; l++)
                                if ((t || l in c) && c[l] === n) return t || l || 0;
                        return !t && -1
                    }
                }
            }, function(t, e, n) {
                var i = n(8),
                    r = Math.max,
                    o = Math.min;
                t.exports = function(t, e) {
                    return (t = i(t)) < 0 ? r(t + e, 0) : o(t, e)
                }
            }, function(t, e, n) {
                var i = n(1).document;
                t.exports = i && i.documentElement
            }, function(t, e, n) {
                var i = n(7),
                    r = n(27),
                    o = n(14)("IE_PROTO"),
                    a = Object.prototype;
                t.exports = Object.getPrototypeOf || function(t) {
                    return t = r(t), i(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
                }
            }, function(t, e, n) {
                "use strict";
                var i = n(20),
                    r = n(16),
                    o = n(27),
                    a = n(48),
                    s = n(49),
                    c = n(23),
                    u = n(50),
                    l = n(51);
                r(r.S + r.F * !n(53)((function(t) {
                    Array.from(t)
                })), "Array", {
                    from: function(t) {
                        var e, n, r, h, f = o(t),
                            d = "function" == typeof this ? this : Array,
                            p = arguments.length,
                            m = p > 1 ? arguments[1] : void 0,
                            g = void 0 !== m,
                            v = 0,
                            y = l(f);
                        if (g && (m = i(m, p > 2 ? arguments[2] : void 0, 2)), void 0 == y || d == Array && s(y))
                            for (n = new d(e = c(f.length)); e > v; v++) u(n, v, g ? m(f[v], v) : f[v]);
                        else
                            for (h = y.call(f), n = new d; !(r = h.next()).done; v++) u(n, v, g ? a(h, m, [r.value, v], !0) : r.value);
                        return n.length = v, n
                    }
                })
            }, function(t, e, n) {
                var i = n(5);
                t.exports = function(t, e, n, r) {
                    try {
                        return r ? e(i(n)[0], n[1]) : e(n)
                    } catch (e) {
                        var o = t.return;
                        throw void 0 !== o && i(o.call(t)), e
                    }
                }
            }, function(t, e, n) {
                var i = n(13),
                    r = n(0)("iterator"),
                    o = Array.prototype;
                t.exports = function(t) {
                    return void 0 !== t && (i.Array === t || o[r] === t)
                }
            }, function(t, e, n) {
                "use strict";
                var i = n(4),
                    r = n(11);
                t.exports = function(t, e, n) {
                    e in t ? i.f(t, e, r(0, n)) : t[e] = n
                }
            }, function(t, e, n) {
                var i = n(52),
                    r = n(0)("iterator"),
                    o = n(13);
                t.exports = n(2).getIteratorMethod = function(t) {
                    if (void 0 != t) return t[r] || t["@@iterator"] || o[i(t)]
                }
            }, function(t, e, n) {
                var i = n(22),
                    r = n(0)("toStringTag"),
                    o = "Arguments" == i(function() {
                        return arguments
                    }()),
                    a = function(t, e) {
                        try {
                            return t[e]
                        } catch (t) {}
                    };
                t.exports = function(t) {
                    var e, n, s;
                    return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = a(e = Object(t), r)) ? n : o ? i(e) : "Object" == (s = i(e)) && "function" == typeof e.callee ? "Arguments" : s
                }
            }, function(t, e, n) {
                var i = n(0)("iterator"),
                    r = !1;
                try {
                    var o = [7][i]();
                    o.return = function() {
                        r = !0
                    }, Array.from(o, (function() {
                        throw 2
                    }))
                } catch (t) {}
                t.exports = function(t, e) {
                    if (!e && !r) return !1;
                    var n = !1;
                    try {
                        var o = [7],
                            a = o[i]();
                        a.next = function() {
                            return {
                                done: n = !0
                            }
                        }, o[i] = function() {
                            return a
                        }, t(o)
                    } catch (t) {}
                    return n
                }
            }, function(t, e, n) {
                "use strict";

                function i(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }

                function r(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var o = function() {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var i = e[n];
                                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                            }
                        }
                        return function(e, n, i) {
                            return n && t(e.prototype, n), i && t(e, i), e
                        }
                    }(),
                    a = i(n(55)),
                    s = i(n(56)),
                    c = i(n(57)),
                    u = i(n(58)),
                    l = i(n(59)),
                    h = Math.PI,
                    f = Math.max,
                    d = Math.min,
                    p = function() {
                        function t(e, n) {
                            r(this, t), this.element = e, this.originalHTML = this.element.innerHTML;
                            var i = document.createElement("div"),
                                o = document.createDocumentFragment();
                            i.setAttribute("aria-label", e.innerText), i.style.position = "relative", this.container = i, this._letters = (0, s.default)(e, n), this._letters.forEach((function(t) {
                                return o.appendChild(t)
                            })), i.appendChild(o), this.element.innerHTML = "", this.element.appendChild(i);
                            var c = window.getComputedStyle(this.element),
                                u = c.fontSize,
                                l = c.lineHeight;
                            this._fontSize = parseFloat(u), this._lineHeight = parseFloat(l) || this._fontSize, this._metrics = this._letters.map(a.default);
                            var f = this._metrics.reduce((function(t, e) {
                                return t + e.width
                            }), 0);
                            this._minRadius = f / h / 2 + this._lineHeight, this._dir = 1, this._forceWidth = !1, this._forceHeight = !0, this._radius = this._minRadius, this._invalidate()
                        }
                        return o(t, [{
                            key: "radius",
                            value: function(t) {
                                return void 0 !== t ? (this._radius = f(this._minRadius, t), this._invalidate(), this) : this._radius
                            }
                        }, {
                            key: "dir",
                            value: function(t) {
                                return void 0 !== t ? (this._dir = t, this._invalidate(), this) : this._dir
                            }
                        }, {
                            key: "forceWidth",
                            value: function(t) {
                                return void 0 !== t ? (this._forceWidth = t, this._invalidate(), this) : this._forceWidth
                            }
                        }, {
                            key: "forceHeight",
                            value: function(t) {
                                return void 0 !== t ? (this._forceHeight = t, this._invalidate(), this) : this._forceHeight
                            }
                        }, {
                            key: "refresh",
                            value: function() {
                                return this._invalidate()
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                return this.element.innerHTML = this.originalHTML, this
                            }
                        }, {
                            key: "_invalidate",
                            value: function() {
                                var t = this;
                                return cancelAnimationFrame(this._raf), this._raf = requestAnimationFrame((function() {
                                    t._layout()
                                })), this
                            }
                        }, {
                            key: "_layout",
                            value: function() {
                                var t = this,
                                    e = this._radius,
                                    n = this._dir,
                                    i = "center " + (-1 === n ? -e + this._lineHeight : e) / this._fontSize + "em",
                                    r = e - this._lineHeight,
                                    o = (0, l.default)(this._metrics, r),
                                    a = o.rotations,
                                    s = o.\u03b8;
                                if (this._letters.forEach((function(e, r) {
                                        var o = e.style,
                                            c = (-.5 * s + a[r]) * n,
                                            u = "translateX(" + -.5 * t._metrics[r].width / t._fontSize + "em) rotate(" + c + "deg)";
                                        o.position = "absolute", o.bottom = -1 === n ? 0 : "auto", o.left = "50%", o.transform = u, o.transformOrigin = i, o.webkitTransform = u, o.webkitTransformOrigin = i
                                    })), this._forceHeight) {
                                    var h = s > 180 ? (0, c.default)(e, s) : (0, c.default)(r, s) + this._lineHeight;
                                    this.container.style.height = h / this._fontSize + "em"
                                }
                                if (this._forceWidth) {
                                    var f = (0, u.default)(e, d(180, s));
                                    this.container.style.width = f / this._fontSize + "em"
                                }
                                return this
                            }
                        }]), t
                    }();
                e.default = p
            }, function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = function(t) {
                    var e = t.getBoundingClientRect();
                    return {
                        height: e.height,
                        left: e.left + window.pageXOffset,
                        top: e.top + window.pageYOffset,
                        width: e.width
                    }
                }
            }, function(t, e, n) {
                "use strict";

                function i(t) {
                    if (Array.isArray(t)) {
                        for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                        return n
                    }
                    return Array.from(t)
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = function(t, e) {
                    var n = document.createElement("span"),
                        r = t.innerText.trim();
                    return (e ? e(r) : [].concat(i(r))).map((function(t) {
                        var e = n.cloneNode();
                        return e.insertAdjacentHTML("afterbegin", " " === t ? "&nbsp;" : t), e
                    }))
                }
            }, function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var i = function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }(n(28));
                e.default = function(t, e) {
                    return t * (1 - Math.cos((0, i.default)(e / 2)))
                }
            }, function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var i = function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }(n(28));
                e.default = function(t, e) {
                    return 2 * t * Math.sin((0, i.default)(e / 2))
                }
            }, function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var i = function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }(n(60));
                e.default = function(t, e) {
                    return t.reduce((function(t, n) {
                        var r = n.width,
                            o = (0, i.default)(r / e);
                        return {
                            "\u03b8": t.\u03b8 + o,
                            rotations: t.rotations.concat([t.\u03b8 + o / 2])
                        }
                    }), {
                        "\u03b8": 0,
                        rotations: []
                    })
                }
            }, function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var i = 180 / Math.PI;
                e.default = function(t) {
                    return t * i
                }
            }])
        },
        JX7q: function(t, e, n) {
            "use strict";

            function i(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }
            n.d(e, "a", (function() {
                return i
            }))
        },
        "Ji/L": function(t, e, n) {
            "use strict";

            function i(t) {
                this.client = t
            }
            n("Qetd")(i.prototype, {
                list: function() {
                    return this.client.request({
                        uri: "/projects"
                    })
                },
                getById: function(t) {
                    return this.client.request({
                        uri: "/projects/".concat(t)
                    })
                }
            }), t.exports = i
        },
        Ji7U: function(t, e, n) {
            "use strict";

            function i(t, e) {
                return (i = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function r(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && i(t, e)
            }
            n.d(e, "a", (function() {
                return r
            }))
        },
        JvqE: function(t, e, n) {
            t.exports = {
                contactHeader: "contact_contactHeader__1a-fR",
                informations: "contact_informations__281at",
                text: "contact_text__2swsL",
                social: "contact_social__37lG6",
                wave: "contact_wave__3UtEc",
                contactUs: "contact_contactUs__1kBRw",
                credits: ""
            }
        },
        LBXl: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = function() {
                function t(t) {
                    return Error.call(this), this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map((function(t, e) {
                        return e + 1 + ") " + t.toString()
                    })).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t, this
                }
                return t.prototype = Object.create(Error.prototype), t
            }();
            e.UnsubscriptionError = i
        },
        LMKn: function(t, e, n) {
            "use strict";
            t.exports = function(t) {
                if ("string" === typeof t || Array.isArray(t)) return {
                    id: t
                };
                if (t && t.query) return {
                    query: t.query
                };
                var e = ["* Document ID (<docId>)", "* Array of document IDs", "* Object containing `query`"].join("\n");
                throw new Error("Unknown selection - must be one of:\n\n".concat(e))
            }
        },
        "MB/A": function(t, e, n) {
            "use strict";
            var i = n("b1HN"),
                r = n("Qetd");

            function o(t) {
                var e = s(t);
                o.super.call(this, e.message), r(this, e)
            }

            function a(t) {
                var e = s(t);
                a.super.call(this, e.message), r(this, e)
            }

            function s(t) {
                var e = t.body,
                    n = {
                        response: t,
                        statusCode: t.statusCode,
                        responseBody: c(e, t)
                    };
                return e.error && e.message ? (n.message = "".concat(e.error, " - ").concat(e.message), n) : e.error && e.error.description ? (n.message = e.error.description, n.details = e.error, n) : (n.message = e.error || e.message || function(t) {
                    var e = t.statusMessage ? " ".concat(t.statusMessage) : "";
                    return "".concat(t.method, "-request to ").concat(t.url, " resulted in HTTP ").concat(t.statusCode).concat(e)
                }(t), n)
            }

            function c(t, e) {
                return -1 !== (e.headers["content-type"] || "").toLowerCase().indexOf("application/json") ? JSON.stringify(t, null, 2) : t
            }
            i(o), i(a), e.ClientError = o, e.ServerError = a
        },
        MkmW: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.hostReportError = function(t) {
                setTimeout((function() {
                    throw t
                }), 0)
            }
        },
        N2s1: function(t, e) {
            t.exports = function(t) {
                return "https://docs.sanity.io/help/" + t
            }
        },
        Nsbk: function(t, e) {
            function n(e) {
                return t.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, n(e)
            }
            t.exports = n
        },
        PJYZ: function(t, e) {
            t.exports = function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }
        },
        Q1FS: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n("yx2s"),
                r = n("Xwq/"),
                o = n("zfKp"),
                a = n("9AGB"),
                s = n("n3uD"),
                c = function() {
                    function t(t) {
                        this._isScalar = !1, t && (this._subscribe = t)
                    }
                    return t.prototype.lift = function(e) {
                        var n = new t;
                        return n.source = this, n.operator = e, n
                    }, t.prototype.subscribe = function(t, e, n) {
                        var i = this.operator,
                            o = r.toSubscriber(t, e, n);
                        if (i ? o.add(i.call(o, this.source)) : o.add(this.source || s.config.useDeprecatedSynchronousErrorHandling && !o.syncErrorThrowable ? this._subscribe(o) : this._trySubscribe(o)), s.config.useDeprecatedSynchronousErrorHandling && o.syncErrorThrowable && (o.syncErrorThrowable = !1, o.syncErrorThrown)) throw o.syncErrorValue;
                        return o
                    }, t.prototype._trySubscribe = function(t) {
                        try {
                            return this._subscribe(t)
                        } catch (e) {
                            s.config.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0, t.syncErrorValue = e), i.canReportError(t) ? t.error(e) : console.warn(e)
                        }
                    }, t.prototype.forEach = function(t, e) {
                        var n = this;
                        return new(e = u(e))((function(e, i) {
                            var r;
                            r = n.subscribe((function(e) {
                                try {
                                    t(e)
                                } catch (n) {
                                    i(n), r && r.unsubscribe()
                                }
                            }), i, e)
                        }))
                    }, t.prototype._subscribe = function(t) {
                        var e = this.source;
                        return e && e.subscribe(t)
                    }, t.prototype[o.observable] = function() {
                        return this
                    }, t.prototype.pipe = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        return 0 === t.length ? this : a.pipeFromArray(t)(this)
                    }, t.prototype.toPromise = function(t) {
                        var e = this;
                        return new(t = u(t))((function(t, n) {
                            var i;
                            e.subscribe((function(t) {
                                return i = t
                            }), (function(t) {
                                return n(t)
                            }), (function() {
                                return t(i)
                            }))
                        }))
                    }, t.create = function(e) {
                        return new t(e)
                    }, t
                }();

            function u(t) {
                if (t || (t = s.config.Promise || Promise), !t) throw new Error("no Promise impl found");
                return t
            }
            e.Observable = c
        },
        QmWs: function(t, e, n) {
            var i, r = (i = n("s4NR")) && "object" == typeof i && "default" in i ? i.default : i,
                o = /https?|ftp|gopher|file/;

            function a(t) {
                "string" == typeof t && (t = b(t));
                var e = function(t, e, n) {
                    var i = t.auth,
                        r = t.hostname,
                        o = t.protocol || "",
                        a = t.pathname || "",
                        s = t.hash || "",
                        c = t.query || "",
                        u = !1;
                    i = i ? encodeURIComponent(i).replace(/%3A/i, ":") + "@" : "", t.host ? u = i + t.host : r && (u = i + (~r.indexOf(":") ? "[" + r + "]" : r), t.port && (u += ":" + t.port)), c && "object" == typeof c && (c = e.encode(c));
                    var l = t.search || c && "?" + c || "";
                    return o && ":" !== o.substr(-1) && (o += ":"), t.slashes || (!o || n.test(o)) && !1 !== u ? (u = "//" + (u || ""), a && "/" !== a[0] && (a = "/" + a)) : u || (u = ""), s && "#" !== s[0] && (s = "#" + s), l && "?" !== l[0] && (l = "?" + l), {
                        protocol: o,
                        host: u,
                        pathname: a = a.replace(/[?#]/g, encodeURIComponent),
                        search: l = l.replace("#", "%23"),
                        hash: s
                    }
                }(t, r, o);
                return "" + e.protocol + e.host + e.pathname + e.search + e.hash
            }
            var s = "http://",
                c = "w.w",
                u = s + c,
                l = /^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,
                h = /https?|ftp|gopher|file/;

            function f(t, e) {
                var n = "string" == typeof t ? b(t) : t;
                t = "object" == typeof t ? a(t) : t;
                var i = b(e),
                    r = "";
                n.protocol && !n.slashes && (r = n.protocol, t = t.replace(n.protocol, ""), r += "/" === e[0] || "/" === t[0] ? "/" : ""), r && i.protocol && (r = "", i.slashes || (r = i.protocol, e = e.replace(i.protocol, "")));
                var o = t.match(l);
                o && !i.protocol && (t = t.substr((r = o[1] + (o[2] || "")).length), /^\/\/[^/]/.test(e) && (r = r.slice(0, -1)));
                var c = new URL(t, u + "/"),
                    f = new URL(e, c).toString().replace(u, ""),
                    d = i.protocol || n.protocol;
                return d += n.slashes || i.slashes ? "//" : "", !r && d ? f = f.replace(s, d) : r && (f = f.replace(s, "")), h.test(f) || ~e.indexOf(".") || "/" === t.slice(-1) || "/" === e.slice(-1) || "/" !== f.slice(-1) || (f = f.slice(0, -1)), r && (f = r + ("/" === f[0] ? f.substr(1) : f)), f
            }

            function d() {}
            d.prototype.parse = b, d.prototype.format = a, d.prototype.resolve = f, d.prototype.resolveObject = f;
            var p = /^https?|ftp|gopher|file/,
                m = /^(.*?)([#?].*)/,
                g = /^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,
                v = /^([a-z0-9.+-]*:)?\/\/\/*/i,
                y = /^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;

            function b(t, e, n) {
                if (void 0 === e && (e = !1), void 0 === n && (n = !1), t && "object" == typeof t && t instanceof d) return t;
                var i = (t = t.trim()).match(m);
                t = i ? i[1].replace(/\\/g, "/") + i[2] : t.replace(/\\/g, "/"), y.test(t) && "/" !== t.slice(-1) && (t += "/");
                var o = !/(^javascript)/.test(t) && t.match(g),
                    s = v.test(t),
                    l = "";
                o && (p.test(o[1]) || (l = o[1].toLowerCase(), t = "" + o[2] + o[3]), o[2] || (s = !1, p.test(o[1]) ? (l = o[1], t = "" + o[3]) : t = "//" + o[3]), 3 !== o[2].length && 1 !== o[2].length || (l = o[1], t = "/" + o[3]));
                var h, f = (i ? i[1] : t).match(/^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/),
                    b = f && f[1],
                    _ = new d,
                    w = "",
                    x = "";
                try {
                    h = new URL(t)
                } catch (r) {
                    w = r, l || n || !/^\/\//.test(t) || /^\/\/.+[@.]/.test(t) || (x = "/", t = t.substr(1));
                    try {
                        h = new URL(t, u)
                    } catch (t) {
                        return _.protocol = l, _.href = l, _
                    }
                }
                _.slashes = s && !x, _.host = h.host === c ? "" : h.host, _.hostname = h.hostname === c ? "" : h.hostname.replace(/(\[|\])/g, ""), _.protocol = w ? l || null : h.protocol, _.search = h.search.replace(/\\/g, "%5C"), _.hash = h.hash.replace(/\\/g, "%5C");
                var k = t.split("#");
                !_.search && ~k[0].indexOf("?") && (_.search = "?"), _.hash || "" !== k[1] || (_.hash = "#"), _.query = e ? r.decode(h.search.substr(1)) : _.search.substr(1), _.pathname = x + (o ? function(t) {
                    return t.replace(/['^|`]/g, (function(t) {
                        return "%" + t.charCodeAt().toString(16).toUpperCase()
                    })).replace(/((?:%[0-9A-F]{2})+)/g, (function(t, e) {
                        try {
                            return decodeURIComponent(e).split("").map((function(t) {
                                var e = t.charCodeAt();
                                return e > 256 || /^[a-z0-9]$/i.test(t) ? t : "%" + e.toString(16).toUpperCase()
                            })).join("")
                        } catch (t) {
                            return e
                        }
                    }))
                }(h.pathname) : h.pathname), "about:" === _.protocol && "blank" === _.pathname && (_.protocol = "", _.pathname = ""), w && "/" !== t[0] && (_.pathname = _.pathname.substr(1)), l && !p.test(l) && "/" !== t.slice(-1) && "/" === _.pathname && (_.pathname = ""), _.path = _.pathname + _.search, _.auth = [h.username, h.password].map(decodeURIComponent).filter(Boolean).join(":"), _.port = h.port, b && !_.host.endsWith(b) && (_.host += b, _.port = b.slice(1)), _.href = x ? "" + _.pathname + _.search + _.hash : a(_);
                var O = /^(file)/.test(_.href) ? ["host", "hostname"] : [];
                return Object.keys(_).forEach((function(t) {
                    ~O.indexOf(t) || (_[t] = _[t] || null)
                })), _
            }
            e.parse = b, e.format = a, e.resolve = f, e.resolveObject = function(t, e) {
                return b(f(t, e))
            }, e.Url = d
        },
        RA0T: function(t, e, n) {
            "use strict";
            t.exports = function(t, e) {
                if (e = e.split(":")[0], !(t = +t)) return !1;
                switch (e) {
                    case "http":
                    case "ws":
                        return 80 !== t;
                    case "https":
                    case "wss":
                        return 443 !== t;
                    case "ftp":
                        return 21 !== t;
                    case "gopher":
                        return 70 !== t;
                    case "file":
                        return !1
                }
                return 0 !== t
            }
        },
        RIqP: function(t, e, n) {
            var i = n("Ijbi"),
                r = n("EbDI"),
                o = n("ZhPi"),
                a = n("Bnag");
            t.exports = function(t) {
                return i(t) || r(t) || o(t) || a()
            }
        },
        RNiq: function(t, e, n) {
            "use strict";
            n.r(e);
            var i = n("o0o1"),
                r = n.n(i);

            function o(t, e, n, i, r, o, a) {
                try {
                    var s = t[o](a),
                        c = s.value
                } catch (u) {
                    return void n(u)
                }
                s.done ? e(c) : Promise.resolve(c).then(i, r)
            }
            var a = n("1OyB"),
                s = n("JX7q"),
                c = n("vuIU"),
                u = n("Ji7U"),
                l = n("md7G"),
                h = n("foSv"),
                f = n("q1tI"),
                d = n.n(f),
                p = n("a6RD"),
                m = n.n(p),
                g = n("z/o8"),
                v = n("1dv8"),
                y = n.n(v),
                b = n("8Kt/"),
                _ = n.n(b),
                w = n("bYjO"),
                x = n.n(w),
                k = n("bCJ/"),
                O = n.n(k),
                T = n("D2Oh"),
                S = n.n(T),
                E = d.a.createElement,
                M = m()((function() {
                    return Promise.all([n.e(4), n.e(3), n.e(14)]).then(n.bind(null, "Rx7j"))
                }), {
                    ssr: !1,
                    loadableGenerated: {
                        webpack: function() {
                            return ["Rx7j"]
                        },
                        modules: ["webgl"]
                    }
                }),
                C = function() {
                    return E("section", {
                        className: S.a.component + " lazy-bg",
                        id: "illustration"
                    }, E(M, null))
                },
                j = n("n6vY"),
                P = n.n(j),
                A = n("T7iU"),
                I = n.n(A),
                N = n("lPHp"),
                R = n.n(N),
                D = n("U+FB"),
                L = n.n(D),
                q = n("rOcY");

            function z(t) {
                void 0 === t && (t = {}), this.initial = t.initial || 0, this.value = this.initial, this.previous = this.initial, this.velocity = 0, this.onStart = t.onStart, this.onStop = t.onStop, this.precisionStop = t.precisionStop || 1e-4, this.perfectStop = !!t.perfectStop, this.setValue(this.initial), this.setTarget(this.initial), this.setMass(t.mass || 1), this.setTension(t.tension || .1), this.setFriction(t.friction || .2), this.setStep(t.step || 10)
            }
            z.prototype.setValue = function(t) {
                this.value = t, Math.abs(this.target - this.value) > this.precisionStop ? this.start() : this.stop()
            }, z.prototype.setTarget = function(t) {
                this.target = t, Math.abs(this.target - this.value) > this.precisionStop ? this.start() : this.stop()
            }, z.prototype.setTension = function(t) {
                this._K = t
            }, z.prototype.setFriction = function(t) {
                this._D = t, this._dampingAdjuster = Math.pow(1 - this._D, this._stepAdjuster)
            }, z.prototype.setMass = function(t) {
                this.mass = t, this._inverseMass = 1 / this.mass
            }, z.prototype.setStep = function(t) {
                this._step = t, this._stepAdjuster = this._step / 16.67, this.setFriction(this._D)
            }, z.prototype.start = function() {
                this.stopped = !1, this.onStart && this.onStart()
            }, z.prototype.stop = function() {
                this.stopped || (this.perfectStop && Math.abs(this.target - this.value) <= this.precisionStop && (this.value = this.target), this.acceleration = 0, this.velocity = 0, this._accumulator = 0, this._prevStepVel = 0, this._prevStepValue = this.value, this._adjusted = !1, this.stopped = !0, this.onStop && this.onStop())
            }, z.prototype.update = function(t) {
                if (!this.stopped) {
                    for (this._accumulator += t, this.previous = this.value, this._adjusted && (this._adjusted = !1, this.velocity = this._prevStepVel, this.value = this._prevStepValue), t < this._step && (this._adjusted = !0, this._accumulator += this._step); this._accumulator >= this._step;) this.acceleration = -this._K * (this.value - this.target) * this._inverseMass, this._prevStepVel = this.velocity, this.velocity = (this.velocity + this.acceleration * this._stepAdjuster) * this._dampingAdjuster, this._prevStepValue = this.value, this.value = this.value + this.velocity * this._stepAdjuster, this._accumulator -= this._step;
                    if (this._adjusted) {
                        var e = this._accumulator / this._step;
                        this.value = this.value * e + this._prevStepValue * (1 - e)
                    }
                    Math.abs(this.target - this.value) <= this.precisionStop && this.stop()
                }
            }, z.prototype.dispose = function() {
                this.stop(), this.onStart = null, this.onStop = null
            };
            var F = z,
                H = n("t0wW"),
                B = n("W7kf"),
                U = n("koiF"),
                V = n("1eSL"),
                W = n.n(V),
                Y = new W.a,
                X = d.a.createElement,
                G = function(t) {
                    var e = Object(f.useRef)(),
                        n = [],
                        i = Object(f.useState)(!1),
                        r = i[0],
                        o = i[1],
                        a = Object(f.useState)(!1),
                        s = a[0],
                        c = a[1],
                        u = [];
                    ! function() {
                        for (var t = 0; t < 7; t++) u.push({
                            ref: Object(f.useRef)(null)
                        }), n.push({
                            x: 0,
                            y: 0,
                            rotateX: 0,
                            rotateY: 0,
                            rotateZ: 0,
                            skewX: 0,
                            skewY: 0
                        })
                    }();
                    var l = !1,
                        h = 0,
                        d = t.multiplier || .1,
                        p = t.angle || 0,
                        m = {
                            x: 0,
                            y: 0,
                            dir: Math.random() < .5 ? -1 : 1,
                            speed: g.a.utils.random(.5, 1),
                            time: g.a.utils.random(-Math.PI, Math.PI),
                            multiplier: 0,
                            multiplierRatio: t.offsetMultiplier || .01
                        },
                        v = {
                            x: new F({
                                initial: 0,
                                tension: .1,
                                friction: .15,
                                step: 10
                            }),
                            y: new F({
                                initial: 0,
                                tension: .1,
                                friction: .15,
                                step: 10
                            }),
                            targetX: 0,
                            targetY: 0
                        },
                        y = {
                            x: 0,
                            y: 0
                        },
                        b = function() {
                            return q.a.scroll && q.a.scroll.scroll ? q.a.scroll.scroll.instance.scroll.y : 0
                        };
                    Object(f.useEffect)((function() {
                        Y.add(x), U.a.add(k)
                    }), []);
                    var _, w, x = function() {
                            c(!0), O(), k(), Object(H.a)(E)
                        },
                        k = function() {
                            o(q.a.is.mobile), q.a.is.mobile ? e.current.removeAttribute("style") : (h = 1 * U.a.width, m.multiplier = U.a.width * m.multiplierRatio, O())
                        },
                        O = function() {
                            var t = e.current;
                            v.x.setValue(0), v.y.setValue(0), g.a.set(t, {
                                x: "-50%",
                                y: 0
                            });
                            var n = t.getBoundingClientRect();
                            y.x = n.left + .5 * n.width, y.y = n.top + b() + .5 * n.height, n.width, n.height
                        },
                        T = function(t, e) {
                            v.targetX = (t - y.x) * d, v.targetY = (e - y.y) * d * 1.5
                        },
                        S = function() {
                            g.a.to(v, {
                                duration: .4,
                                targetX: 0,
                                targetY: 0
                            })
                        },
                        E = function(t) {
                            if (!q.a.is.mobile) {
                                var e = y.y - b() - .5 * U.a.height;
                                if (e < 1 * U.a.height && e > -1 * U.a.height && (function(t, e) {
                                        var n = t - y.x,
                                            i = e - y.y;
                                        Math.sqrt(n * n + i * i) < h ? (l || (l = !0), T(t, e)) : l && (S(), l = !1)
                                    }(B.a.point.x, B.a.point.y + b()), v.x.setTarget(v.targetX), v.y.setTarget(v.targetY), v.x.update(t), v.y.update(t), (_ = u[0]) && _.ref && _.ref.current)) {
                                    m.time += .001 * t * m.speed;
                                    var i = g.a.utils.clamp(0, 20, Math.abs(v.x.velocity)),
                                        r = g.a.utils.interpolate(n[0].x, v.x.value, .2) + Math.cos(m.time * m.dir) * m.multiplier,
                                        o = g.a.utils.interpolate(n[0].y, v.y.value, .2) + Math.sin(m.time * m.dir) * m.multiplier,
                                        a = g.a.utils.interpolate(n[0].rotateX, 2 * v.y.velocity, .2),
                                        s = 0,
                                        c = g.a.utils.interpolate(n[0].rotateZ, -1 * v.x.velocity, .2) + g.a.utils.mapRange(0, 20, 1, 0, i) * p,
                                        f = g.a.utils.interpolate(n[0].skewX, 1 * v.x.velocity, .2),
                                        d = g.a.utils.interpolate(n[0].skewY, 1 * v.y.velocity, .2),
                                        x = q.a.device.browser && "Safari" == q.a.device.browser.name;
                                    x ? g.a.set(_.ref.current, {
                                        x: r,
                                        y: o,
                                        rotateY: s,
                                        rotateZ: c,
                                        skewX: f + "deg",
                                        skewY: d + "deg"
                                    }) : (s = g.a.utils.interpolate(n[0].rotateY, 2 * v.x.velocity, .2), g.a.set(_.ref.current, {
                                        x: r,
                                        y: o,
                                        rotateY: s,
                                        rotateX: a,
                                        rotateZ: c,
                                        skewX: f + "deg",
                                        skewY: d + "deg"
                                    }));
                                    for (var k = n.length - 1; k > 0; k--) w = n[k - 1], n[k].x = g.a.utils.interpolate(n[k].x, w.x, .2), n[k].y = g.a.utils.interpolate(n[k].y, w.y, .2), n[k].rotateX = g.a.utils.interpolate(n[k].rotateX, w.rotateX, .2), n[k].rotateY = g.a.utils.interpolate(n[k].rotateY, w.rotateY, .2), n[k].rotateZ = g.a.utils.interpolate(n[k].rotateZ, w.rotateZ, .2), n[k].skewX = g.a.utils.interpolate(n[k].skewX, w.skewX, .2), n[k].skewY = g.a.utils.interpolate(n[k].skewY, w.skewY, .2);
                                    n[0].x = r, n[0].y = o, n[0].rotateX = a, n[0].rotateY = s, n[0].rotateZ = c, n[0].skewX = f, n[0].skewY = d;
                                    for (var O = 1; O < 7; O++) _ = u[O], w = n[O], _.ref && _.ref.current && (x ? g.a.set(_.ref.current, {
                                        x: w.x,
                                        y: w.y,
                                        rotateY: w.rotateY,
                                        rotateZ: w.rotateZ,
                                        skewX: f + "deg",
                                        skewY: d + "deg"
                                    }) : g.a.set(_.ref.current, {
                                        x: w.x,
                                        y: w.y,
                                        rotateX: w.rotateX,
                                        rotateY: w.rotateY,
                                        rotateZ: w.rotateZ,
                                        skewX: w.skewX + "deg",
                                        skewY: w.skewY + "deg"
                                    }))
                                }
                            }
                        };
                    return X("div", {
                        className: "springTitle",
                        ref: e
                    }, r ? X("img", {
                        src: " "
                    }) : s && u.map((function(e, n) {
                        return X("span", {
                            ref: e.ref,
                            key: "springTitle_".concat(n),
                            style: {
                                zIndex: u.length - n
                            },
                            dangerouslySetInnerHTML: {
                                __html: t.text
                            }
                        })
                    })))
                },
                J = d.a.createElement,
                Q = function(t) {
                    for (var e, n = Object(f.useRef)(), i = [], r = [], o = 0, a = t.reverse ? 1 : -1, s = t.speed || Math.max(g.a.utils.random(.3, .5) / t.text.length, .02), c = a > 0 ? -200 : -100, u = {
                            x: 0,
                            y: 0
                        }, l = 0; l < t.count; l++) e = Object(f.useRef)(), r.push(e), i.push(J("span", {
                        ref: e,
                        key: "infiniteText_".concat(l),
                        dangerouslySetInnerHTML: {
                            __html: t.text
                        }
                    }));
                    var h = function() {
                        return q.a.scroll && q.a.scroll.scroll ? q.a.scroll.scroll.instance.scroll.y : 0
                    };
                    Object(f.useEffect)((function() {
                        Y.add(d), U.a.add(p)
                    }), []);
                    var d = function() {
                            m(), q.a.gpu.quality >= 1 || q.a.is.mobile ? Object(H.a)(v) : y()
                        },
                        p = function() {
                            m()
                        },
                        m = function() {
                            var t = n.current;
                            g.a.set(t, {
                                x: 0,
                                y: 0
                            });
                            var e = t.getBoundingClientRect();
                            u.x = e.left + .5 * e.width, u.y = e.top + h() + .5 * e.height, e.width, e.height
                        },
                        v = function(t) {
                            var e = u.y - h() - .5 * U.a.height;
                            e < 1 * U.a.height && e > -1 * U.a.height && (o += .001 * t * s * a, o %= 1, y())
                        },
                        y = function() {
                            for (var t, e = 0; e < i.length; e++) t = r[e], g.a.set(t.current, {
                                x: 100 * o + c + "%"
                            })
                        };
                    return J("div", {
                        className: "infiniteText",
                        ref: n
                    }, i)
                },
                K = n("J4rj"),
                Z = n.n(K),
                $ = d.a.createElement,
                tt = function(t) {
                    var e, n = Object(f.useRef)(),
                        i = 0,
                        r = {
                            x: 0,
                            y: 0
                        },
                        o = function() {
                            return q.a.scroll && q.a.scroll.scroll ? q.a.scroll.scroll.instance.scroll.y : 0
                        };
                    Object(f.useEffect)((function() {
                        Y.add(a), U.a.add(s)
                    }), []);
                    var a = function() {
                            setTimeout((function() {
                                new Z.a(n.current), t.autoRotate && (c(), (q.a.gpu.quality >= 1 || q.a.is.mobile) && Object(H.a)(u))
                            }), 500)
                        },
                        s = function() {
                            c()
                        },
                        c = function() {
                            if (e = (e = n.current).children[0]) {
                                g.a.set(e, {
                                    x: 0,
                                    y: 0
                                });
                                var t = e.getBoundingClientRect();
                                r.x = t.left + .5 * t.width, r.y = t.top + o() + .5 * t.height, t.width, t.height
                            }
                        },
                        u = function(t) {
                            if (e) {
                                var n = r.y - o() - .5 * U.a.height;
                                n < 1 * U.a.height && n > -1 * U.a.height && (i += .001 * t * .07 * 1, i %= 1, g.a.set(e, {
                                    rotate: 360 * i + "deg"
                                }))
                            }
                        };
                    return $("div", {
                        className: "textCircle" + (t.autoRotate ? " rotate" : ""),
                        ref: n
                    }, $("p", {
                        dangerouslySetInnerHTML: {
                            __html: t.text
                        }
                    }))
                },
                et = d.a.createElement,
                nt = function(t) {
                    var e, n = t.data || {},
                        i = Object(f.useRef)(),
                        r = Object(f.useRef)(null),
                        o = !1,
                        a = n.showreel ? n.showreel.url : "",
                        s = P()(a),
                        c = {
                            loop: 1,
                            modestbranding: 1,
                            showinfo: 0,
                            rel: 0,
                            iv_load_policy: 3,
                            disablekb: 0,
                            controls: 0
                        },
                        u = {
                            x: 0,
                            y: 0,
                            vx: 0,
                            vy: 0
                        },
                        l = {
                            x: 0,
                            y: 0
                        },
                        h = function() {
                            return q.a.scroll && q.a.scroll.scroll ? q.a.scroll.scroll.instance.scroll.y : 0
                        };
                    Object(f.useEffect)((function() {
                        new I.a(r.current, {
                            settings: ["quality"],
                            loop: {
                                active: !0
                            },
                            invertTime: !1,
                            debug: !1,
                            controls: ["play", "current-time", "progress", "volume", "fullscreen"],
                            youtube: c
                        }).on("pause", v), (e = R.a.loadAnimation({
                            container: i.current,
                            renderer: "svg",
                            loop: !1,
                            autoplay: !1,
                            path: "img/icon/play.json"
                        })).setSpeed(1.5), Y.add(d), U.a.add(p)
                    }), []);
                    var d = function() {
                            q.a.gpu.quality >= 2 && (m(), Object(H.a)(b))
                        },
                        p = function() {
                            m()
                        },
                        m = function() {
                            var t = i.current;
                            g.a.set(t, {
                                x: 0,
                                y: 0
                            });
                            var e = t.getBoundingClientRect();
                            l.x = e.left + .5 * e.width, l.y = e.top + h() + .5 * e.height, e.width, e.height
                        },
                        v = function() {
                            y(), e.setDirection(-1), e.play()
                        },
                        y = function() {
                            g.a.to(i.current, {
                                duration: .4,
                                scale: 1,
                                ease: "back.out(1.7)"
                            })
                        },
                        b = function(t) {
                            if (!q.a.is.mobile && i.current) {
                                var e = l.y - h() - .5 * U.a.height;
                                if (e < 1 * U.a.height && e > -1 * U.a.height) {
                                    u.vx = u.x - B.a.pointFromCenter.x, u.vy = -1 * (u.y - B.a.pointFromCenter.y), u.x = g.a.utils.interpolate(u.x, B.a.pointFromCenter.x, .1), u.y = g.a.utils.interpolate(u.y, .5 * B.a.pointFromCenter.y, .1);
                                    var n = g.a.utils.mapRange(-1, 1, -30, 30, u.vy + u.vx);
                                    g.a.set(i.current, {
                                        x: 100 * u.x + "%",
                                        y: -100 * u.y + "%",
                                        rotateZ: n
                                    })
                                }
                            }
                        };
                    return et("section", {
                        className: L.a.component,
                        id: "about"
                    }, et("div", {
                        className: L.a.introduction
                    }, et("p", null, document.getElementById("yy").value)), et("div", {
                        className: L.a.description
                    }, et("div", {
                        className: L.a.descriptionLeft
                    }, et("div", {
                        className: L.a.textBackground
                    }, et("div", {
                        className: L.a.textGoliath
                    }, et(Q, {
                        count: 4,
                        text: "22222"
                    })), et("div", {
                        className: L.a.textEntertainment
                    }, et(Q, {
                        count: 4,
                        text: "22222",
                        reverse: !0
                    })), et("div", {
                        className: L.a.textGoliath
                    }, et(Q, {
                        count: 4,
                        text: "Goliath"
                    })), et("div", {
                        className: L.a.textEntertainment
                    }, et(Q, {
                        count: 4,
                        text: "22222",
                               
                        reverse: !0
                    })), et("div", {
                        className: L.a.textGoliath
                    }, et(Q, {
                        count: 4,
                        text: "Goliath"
                    })), et("div", {
                        className: L.a.textEntertainment
                    }, et(Q, {
                        count: 0,
                        text: "Entertainment",
                        reverse: !0
                    }))), et(G, {
                        img: "about/title.png",
                        text: document.getElementById("yy1").value,
                        angle: -5
                    })), et("div", {
                        className: L.a.descriptionRight
                    }, et("div", null, et(tt, {
                        text: "t Astakhova Tattoo Studio",
                        autoRotate: !0
                    }), et("h2", null, document.getElementById("yy21").value, et("br", null), document.getElementById("yy22").value)), et("p", {
                        className: L.a.descriptionRightContent
                    }, n.description)), et("img", {
                        className: L.a.statue,
                        src: "img/about/statue.png",
                        alt: "statue illustration",
                        loading: "lazy"
                    }), et("img", {
                        className: L.a.statueShadow,
                        src: "img/about/statue_shadow.png",
                        alt: "statue shadow illustration",
                        loading: "lazy"
                    })), et("div", {
                        className: L.a.sentence
                    }, et("p", null, document.getElementById("yy3").value)), et("div", {
                        className: L.a.description_2
                    }, et("div", {
                        className: L.a.descriptionLeft_2
                    }, et("p", null, et("strong", null, document.getElementById("yy41").value)), et("p", null, document.getElementById("yy42").value)), et("div", {
                        className: L.a.descriptionRight_2 + " lazy-bg"
                    }, et("img", {
                        className: L.a.statue,
                        src: "img/about/goliath_background_2.png",
                        alt: "multiples statues illustration",
                        loading: "lazy"
                    }), et(G, {
                        img: "about/title2.png",
                        text: document.getElementById("yy5").value,
                        angle: -2
                    }))), et("div", {
                        className: L.a.videoContainer
                    }, et("div", {
                        className: L.a.videoText
                    }, et(Q, {
                        count: 0,
                        text: ""
                    })), s ? et("div", {
                        className: L.a.iframeContainer,
                        onClick: function() {
                            o || (e.setDirection(1), e.play()), o = !o
                        },
                        onMouseEnter: y,
                        onMouseLeave: function() {
                            g.a.to(i.current, {
                                duration: .2,
                                scale: 0
                            })
                        }
                    }, et("div", {
                        ref: r,
                        "data-plyr-provider": "youtube",
                        "data-plyr-embed-id": s,
                        onPause: v
                    }), et("div", {
                        className: L.a.playButton
                    }, et("div", {
                        ref: i,
                        className: L.a.playButtonContainer
                    }))) : null))
                },
                it = n("+r3O"),
                rt = n.n(it),
                ot = n("q92F"),
                at = n.n(ot),
                st = n("3uxB"),
                ct = n.n(st),
                ut = d.a.createElement,
                lt = function(t) {
                    return ut("span", {
                        className: ct.a.component,
                        dangerouslySetInnerHTML: {
                            __html: t.text
                        }
                    })
                },
                ht = new W.a,
                ft = n("osSN"),
                dt = n.n(ft),
                pt = d.a.createElement,
                mt = x()(O.a),
                gt = {
                    marks: {
                        link: function(t) {
                            var e = t.mark,
                                n = t.children,
                                i = e.blank,
                                r = e.href;
                            return pt("a", i ? {
                                href: r,
                                target: "_blank",
                                rel: "noreferrer noopener"
                            } : {
                                href: r
                            }, n)
                        }
                    }
                },
                vt = function(t) {
                    var e = t.data,
                        n = Object(f.useRef)(),
                        i = Object(f.useRef)(),
                        r = Object(f.useRef)(),
                        o = Object(f.useRef)(),
                        a = {
                            move: {
                                tx: 0,
                                ty: 0,
                                x: 0,
                                y: 0,
                                lerp: .1
                            },
                            rotate: {
                                tz: 0,
                                z: 0,
                                lerp: .1
                            }
                        };
                    Object(f.useEffect)((function() {
                        Y.add(s)
                    }), []);
                    var s = function() {
                            q.a.gpu.quality >= 2 && !q.a.is.mobile && new IntersectionObserver((function(t, e) {
                                t.forEach((function(t) {
                                    t.isIntersecting ? Object(H.a)(c) : Object(H.b)(c)
                                }))
                            }), {
                                rootMargin: "0px",
                                threshold: 0
                            }).observe(n.current)
                        },
                        c = function() {
                            if (!q.a.is.mobile) {
                                a.move.vx = a.move.x - a.move.tx, a.move.vy = a.move.y - a.move.ty, a.move.tx = .02 * B.a.pointFromCenter.x, a.move.ty = -.02 * B.a.pointFromCenter.y, a.move.x = g.a.utils.interpolate(a.move.x, a.move.tx, a.move.lerp), a.move.y = g.a.utils.interpolate(a.move.y, a.move.ty, a.move.lerp);
                                a.rotate.tz = g.a.utils.mapRange(-1, 1, -100, 100, a.move.vy + a.move.vx), a.rotate.z = g.a.utils.interpolate(a.rotate.z, a.rotate.tz, a.rotate.lerp), g.a.set(i.current, {
                                    x: 100 * a.move.x + "%",
                                    y: 100 * a.move.y + "%",
                                    rotateZ: a.rotate.z
                                }), g.a.set(r.current, {
                                    x: -100 * a.move.x + "%",
                                    y: 100 * a.move.y + "%",
                                    rotateZ: -1 * a.rotate.z
                                }), g.a.set(o.current, {
                                    x: -500 * a.move.x + "%",
                                    y: 300 * a.move.y + "%",
                                    rotateZ: 10 * a.rotate.z
                                })
                            }
                        },
                        u = function() {
                            ht.dispatch({
                                state: "out"
                            })
                        },
                        l = function() {
                            ht.dispatch({
                                state: "in",
                                id: "drag"
                            })
                        };
                    return pt("div", {
                        className: at.a.component,
                        ref: n
                    }, pt("div", {
                        className: at.a.left
                    }, pt("div", {
                        ref: i
                    }, pt("img", {
                        className: at.a.leftBackground,
                        src: "img/label/slider/background-content.png",
                        alt: "background project",
                        loading: "lazy"
                    }), pt("div", {
                        className: at.a.content
                    }, pt("p", {
                        className: at.a.title
                    }, pt(lt, {
                        text: e.title
                    })), pt("p", {
                        className: at.a.artist
                    }, pt(lt, {
                        text: e.artist
                    })), e.description && pt(dt.a, {
                        className: at.a.description,
                        blocks: e.description,
                        serializers: gt
                    })), pt("a", {
                        className: at.a.listenMobile,
                        href: e.link,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        onMouseEnter: u,
                        onMouseLeave: l
                    }, pt("img", {
                        src: "img/label/slider/listen.png",
                        alt: "listen to me",
                        loading: "lazy"
                    })))), pt("div", {
                        ref: r,
                        className: at.a.right + " lazy-bg",
                        style: {
                            backgroundImage: "url(".concat(mt.image(e.image).size(530, 530).quality(80).auto("format"), ")")
                        }
                    }, pt("a", {
                        ref: o,
                        className: at.a.listen,
                        href: e.link,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        onMouseEnter: u,
                        onMouseLeave: l
                    }, pt("img", {
                        src: "img/label/slider/listen.png",
                        alt: "listen to me",
                        loading: "lazy"
                    }))))
                },
                yt = n("ZpPj"),
                bt = n("eJpK"),
                _t = d.a.createElement,
                wt = function(t) {
                    var e, n = t.data || {},
                        i = Object(f.useRef)(),
                        r = Object(f.useRef)(),
                        o = Object(f.useRef)(),
                        a = function() {
                            return g.a.utils.random(.2, .5) * (Math.random() < .5 ? -1 : 1)
                        },
                        s = function() {
                            return g.a.utils.random(.01, .1)
                        },
                        c = {
                            planet: {
                                ref: Object(f.useRef)(),
                                lerp: s(),
                                move: {
                                    mx: a(),
                                    my: a(),
                                    tx: 0,
                                    ty: 0,
                                    x: 0,
                                    y: 0
                                }
                            },
                            triangle: {
                                ref: Object(f.useRef)(),
                                lerp: s(),
                                move: {
                                    mx: a(),
                                    my: a(),
                                    tx: 0,
                                    ty: 0,
                                    x: 0,
                                    y: 0
                                }
                            },
                            eye: {
                                ref: Object(f.useRef)(),
                                lerp: s(),
                                move: {
                                    mx: a(),
                                    my: a(),
                                    tx: 0,
                                    ty: 0,
                                    x: 0,
                                    y: 0
                                }
                            },
                            ball: {
                                ref: Object(f.useRef)(),
                                lerp: s(),
                                move: {
                                    mx: a(),
                                    my: a(),
                                    tx: 0,
                                    ty: 0,
                                    x: 0,
                                    y: 0
                                }
                            },
                            star: {
                                ref: Object(f.useRef)(),
                                lerp: s(),
                                move: {
                                    mx: a(),
                                    my: a(),
                                    tx: 0,
                                    ty: 0,
                                    x: 0,
                                    y: 0
                                }
                            },
                            hat: {
                                ref: Object(f.useRef)(),
                                lerp: s(),
                                move: {
                                    mx: a(),
                                    my: a(),
                                    tx: 0,
                                    ty: 0,
                                    x: 0,
                                    y: 0
                                }
                            }
                        },
                        u = n.prods ? n.prods.length : 0,
                        l = u > 1,
                        h = !1,
                        d = !1,
                        p = !1,
                        m = {
                            point: new bt.a,
                            start: 0,
                            current: 0,
                            diff: 0
                        },
                        v = 0,
                        y = 0,
                        b = new F({
                            initial: 0,
                            tension: 0,
                            friction: .4,
                            step: 10
                        });
                    Object(f.useEffect)((function() {
                        e = R.a.loadAnimation({
                            container: o.current,
                            renderer: "svg",
                            loop: !1,
                            autoplay: !1,
                            path: "img/label/see-more.json"
                        }), l && (T(), Y.add(_), U.a.add(E))
                    }), []);
                    var _ = function() {
                            new IntersectionObserver((function(t, e) {
                                t.forEach((function(t) {
                                    t.isIntersecting ? Object(H.a)(S) : Object(H.b)(S)
                                }))
                            }), {
                                rootMargin: "0px",
                                threshold: 0
                            }).observe(i.current)
                        },
                        w = function() {
                            return g.a.utils.clamp(y, 0, v + m.diff)
                        },
                        x = function(t) {
                            l && d && (h = !0, yt.a.toPoint(t, m.point), m.start = m.point.x)
                        },
                        k = function(t) {
                            h && l && d && (yt.a.toPoint(t, m.point), m.current = m.point.x, m.diff = m.current - m.start)
                        },
                        O = function(t) {
                            l && (h = !1, v = w(), m.diff = 0, v == y ? ht.dispatch({
                                id: "drag",
                                direction: -1
                            }) : 0 == v && ht.dispatch({
                                id: "drag",
                                direction: 1
                            }))
                        },
                        T = function() {
                            y = r.current.clientWidth * (u - 1) * -1
                        },
                        S = function(t) {
                            var e;
                            if (h ? b.setTarget(w()) : b.setTarget(v), b.update(t), r && g.a.set(r.current, {
                                    x: b.value
                                }), p && !q.a.is.mobile && q.a.gpu.quality >= 2)
                                for (var n in c)(e = c[n]).move.tx = e.move.mx * B.a.pointFromCenter.x, e.move.ty = e.move.my * B.a.pointFromCenter.y, e.move.x = g.a.utils.interpolate(e.move.x, e.move.tx, e.lerp), e.move.y = g.a.utils.interpolate(e.move.y, e.move.ty, e.lerp), g.a.set(e.ref.current, {
                                    x: 100 * e.move.x + "%",
                                    y: -100 * e.move.y + "%"
                                })
                        },
                        E = function() {
                            b.setFriction(q.a.is.mobile ? .4 : .5), r.current && (T(), v = w())
                        };
                    return _t("section", {
                        className: rt.a.component,
                        ref: i,
                        id: "label"
                    }, _t("div", {
                        className: rt.a.introduction
                    }, _t("div", {
                        className: rt.a.header
                    }, _t("img", {
                        className: rt.a.poster_1,
                        src: "img/label/poster_1.png",
                        alt: "first poster label",
                        loading: "lazy"
                    }), _t("img", {
                        className: rt.a.poster_2,
                        src: "img/label/poster_2.png",
                        alt: "second poster label",
                        loading: "lazy"
                    }), _t("div", {
                        className: rt.a.discover
                    }, _t(tt, {
                        text: "r discover discove",
                        autoRotate: !0
                    })), _t(G, {
                        img: "label/title.png",
                        text: document.getElementById("yy6").value,
                        offsetMultiplier: .005,
                        transform: {
                            start: {
                                rotation: -45,
                                x: 0,
                                y: 0
                            },
                            end: {
                                rotation: 0,
                                x: 0,
                                y: 0
                            }
                        }
                    })), _t("div", {
                        className: rt.a.content
                    }, _t("p", null, document.getElementById("yy7").value), u > 0 ? _t("button", {
                        className: rt.a.seeMore,
                        ref: o,
                        onClick: function(t) {
                            t && t.preventDefault(), p = !0, g.a.to(i.current, {
                                delay: 0,
                                duration: 1,
                                x: "-100%",
                                ease: "quint.out",
                                onComplete: function() {
                                    d = !0
                                }
                            })
                        },
                        onMouseEnter: function() {
                            e.setDirection(1), e.play()
                        },
                        onMouseLeave: function() {
                            e.setDirection(-1), e.play()
                        },
                        "aria-label": "See productions"
                    }) : "")), _t("div", {
                        className: rt.a.projects
                    }, _t("div", {
                        className: rt.a.back,
                        onClick: function() {
                            d = !1, p = !1, v = 0, g.a.to(i.current, {
                                duration: 1,
                                x: "0%",
                                ease: "quint.out"
                            })
                        }
                    }, _t(lt, {
                        text: "back"
                    })), _t("img", {
                        ref: c.planet.ref,
                        className: rt.a.planet,
                        src: "img/label/slider/planet.png",
                        alt: "planet illustration",
                        loading: "lazy"
                    }), _t("img", {
                        ref: c.triangle.ref,
                        className: rt.a.triangle,
                        src: "img/label/slider/triangle.png",
                        alt: "triangle illustration",
                        loading: "lazy"
                    }), _t("img", {
                        ref: c.eye.ref,
                        className: rt.a.eye,
                        src: "img/label/slider/eye.png",
                        alt: "eye illustration",
                        loading: "lazy"
                    }), _t("img", {
                        ref: c.ball.ref,
                        className: rt.a.ball,
                        src: "img/label/slider/ball.png",
                        alt: "ball illustration",
                        loading: "lazy"
                    }), _t("img", {
                        ref: c.star.ref,
                        className: rt.a.star,
                        src: "img/label/slider/star.png",
                        alt: "star illustration",
                        loading: "lazy"
                    }), _t("img", {
                        ref: c.hat.ref,
                        className: rt.a.hat,
                        src: "img/label/slider/hat.png",
                        alt: "hat illustration",
                        loading: "lazy"
                    }), _t("div", {
                        ref: r,
                        className: rt.a.projectsList + (l ? " is-draggable" : ""),
                        onMouseEnter: function() {
                            l && ht.dispatch({
                                id: "drag",
                                state: "in",
                                direction: v == y ? -1 : 1
                            })
                        },
                        onMouseDown: x,
                        onMouseMove: k,
                        onMouseUp: O,
                        onMouseLeave: function() {
                            l && (O(), ht.dispatch({
                                id: "drag",
                                state: "out"
                            }))
                        },
                        onTouchStart: x,
                        onTouchMove: k,
                        onTouchEnd: O,
                        onTouchCancel: O
                    }, n.prods && n.prods.map((function(t, e) {
                        return _t(vt, {
                            key: "project_".concat(e),
                            data: t
                        })
                    })))))
                };

            function xt(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i
            }

            function kt(t) {
                return function(t) {
                    if (Array.isArray(t)) return xt(t)
                }(t) || function(t) {
                    if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" === typeof t) return xt(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? xt(t, e) : void 0
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Ot = n("UYQp"),
                Tt = n.n(Ot),
                St = n("f84q"),
                Et = n.n(St),
                Mt = d.a.createElement,
                Ct = x()(O.a),
                jt = {
                    marks: {
                        link: function(t) {
                            var e = t.mark,
                                n = t.children,
                                i = e.blank,
                                r = e.href;
                            return Mt("a", i ? {
                                href: r,
                                target: "_blank",
                                rel: "noreferrer noopener"
                            } : {
                                href: r
                            }, n)
                        }
                    }
                },
                Pt = function(t) {
                    var e = t.data || {},
                        n = Object(f.useRef)(),
                        i = Object(f.useRef)(),
                        r = e.name,
                        o = "",
                        a = 2 * r.length - 12;
                    if (a <= 0) {
                        o = r;
                        var s = Math.abs(a);
                        s % 2 != 0 && s++;
                        for (var c = 0; c < .5 * s; c++) o = "&nbsp;" + (o += "&nbsp;");
                        o += "&nbsp;" + r.substring(0, r.length - 1), o = r[r.length - 1] + "&nbsp;" + o
                    } else o = r;
                    var u = Math.max(10 - r.length, 2) + 1,
                        l = u * r.length * 1 + "s";
                    return Object(f.useEffect)((function() {
                        [].slice.call(i.current.querySelectorAll("p")).map((function(t) {
                            t.style.animationDuration = l
                        }))
                    }), []), Mt("div", {
                        className: Et.a.component,
                        ref: n
                    }, Mt("div", {
                        className: Et.a.description
                    }, e.description && Mt(dt.a, {
                        blocks: e.description,
                        serializers: jt
                    })), Mt("div", {
                        ref: i,
                        className: Et.a.infiniteText
                    }, Mt(Q, {
                        count: u,
                        text: r + "&nbsp;"
                    })), Mt("div", {
                        className: Et.a.photo + " lazy-bg",
                        style: {
                            backgroundImage: "url(".concat(Ct.image(e.image).size(450, 560).quality(80).auto("format"), ")")
                        }
                    }), Mt("div", {
                        className: Et.a.title
                    }, Mt("div", {
                        className: Et.a.name
                    }, Mt(tt, {
                        text: o,
                        autoRotate: !0
                    }))))
                },
                At = d.a.createElement,
                It = function(t) {
                    var e = t.data || {},
                        n = Object(f.useRef)(),
                        i = Object(f.useRef)(),
                        r = e.artists ? e.artists.length : 0,
                        o = r > 1,
                        a = !1,
                        s = {
                            point: new bt.a,
                            start: 0,
                            current: 0,
                            diff: 0
                        },
                        c = 0,
                        u = 0,
                        l = new F({
                            initial: 0,
                            tension: 0,
                            friction: .4,
                            step: 10
                        });
                    Object(f.useEffect)((function() {
                        (o = !q.a.is.mobile && r > 1 || q.a.is.mobile) && (b(), new IntersectionObserver((function(t, e) {
                            t.forEach((function(t) {
                                t.isIntersecting ? Object(H.a)(_) : Object(H.b)(_)
                            }))
                        }), {
                            rootMargin: "0px",
                            threshold: 0
                        }).observe(n.current), U.a.add(w));
                        kt(i.current.querySelectorAll("a")).map((function(t) {
                            t.addEventListener("mouseenter", y), t.addEventListener("mouseleave", v)
                        }))
                    }), []);
                    var h = function() {
                            return g.a.utils.clamp(u, 0, c + s.diff)
                        },
                        d = function(t) {
                            o && (a = !0, yt.a.toPoint(t, s.point), s.start = s.point.x)
                        },
                        p = function(t) {
                            a && o && (yt.a.toPoint(t, s.point), s.current = s.point.x, s.diff = s.current - s.start)
                        },
                        m = function(t) {
                            o && (a = !1, c = h(), s.diff = 0, c == u ? ht.dispatch({
                                id: "drag",
                                direction: -1
                            }) : 0 == c && ht.dispatch({
                                id: "drag",
                                direction: 1
                            }))
                        },
                        v = function() {
                            o && ht.dispatch({
                                id: "drag",
                                state: "in",
                                direction: c == u ? -1 : 1
                            })
                        },
                        y = function() {
                            o && (m(), ht.dispatch({
                                id: "drag",
                                state: "out"
                            }))
                        },
                        b = function() {
                            q.a.is && q.a.is.mobile ? (u = i.current.firstChild.clientWidth * (r - 1) + (i.current.firstChild.clientWidth - U.a.width), u *= -1) : u = -1 * (i.current.clientWidth - i.current.clientWidth / r)
                        },
                        _ = function(t) {
                            a ? l.setTarget(h()) : l.setTarget(c), l.update(t), i && g.a.set(i.current, {
                                x: l.value
                            })
                        },
                        w = function() {
                            l.setFriction(q.a.is.mobile ? .4 : .5), i.current && (b(), c = h())
                        };
                    return At("section", {
                        className: Tt.a.component,
                        ref: n,
                        id: "management"
                    }, At("div", {
                        className: Tt.a.eyes + " lazy-bg"
                    }), At("div", {
                        className: Tt.a.title
                    }, At(G, {
                        img: "management/title.png",
                        text: document.getElementById("yy10").value,
                        angle: 2,
                        offsetMultiplier: .005,
                        transform: {
                            start: {
                                rotation: -45,
                                x: 0,
                                y: 0
                            },
                            end: {
                                rotation: 0,
                                x: 0,
                                y: 0
                            }
                        }
                    })), At("div", {
                        ref: i,
                        className: Tt.a.artists + (o ? " is-draggable" : ""),
                        onMouseEnter: v,
                        onMouseDown: d,
                        onMouseMove: p,
                        onMouseUp: m,
                        onMouseLeave: y,
                        onTouchStart: d,
                        onTouchMove: p,
                        onTouchEnd: m,
                        onTouchCancel: m
                    }, e.artists && e.artists.map((function(t, e) {
                        return At(Pt, {
                            key: "artist_".concat(e),
                            data: t
                        })
                    }))))
                },
                Nt = n("E8zQ"),
                Rt = n.n(Nt),
                Dt = n("cyGw"),
                Lt = n.n(Dt),
                qt = d.a.createElement,
                zt = {
                    marks: {
                        link: function(t) {
                            var e = t.mark,
                                n = t.children,
                                i = e.blank,
                                r = e.href;
                            return qt("a", i ? {
                                href: r,
                                target: "_blank",
                                rel: "noreferrer noopener"
                            } : {
                                href: r
                            }, n)
                        }
                    }
                },
                Ft = x()(O.a),
                Ht = function(t) {
                    var e = t.data,
                        n = Object(f.useRef)(),
                        i = e.location,
                        r = "";
                    if (i && i.length) {
                        var o = 2 * i.length - 12;
                        if (o <= 0) {
                            r = i;
                            var a = Math.abs(o);
                            a % 2 != 0 && a++;
                            for (var s = 0; s < .5 * a; s++) r = "&nbsp;" + (r += "&nbsp;");
                            r += "&nbsp;" + i.substring(0, i.length - 1), r = i[i.length - 1] + "&nbsp;" + r
                        } else r = i
                    }
                    return Object(f.useEffect)((function() {}), []), qt("div", {
                        className: Lt.a.component,
                        ref: n
                    }, qt("div", {
                        className: Lt.a.content
                    }, qt("div", {
                        className: Lt.a.left
                    }, qt("div", {
                        className: Lt.a.location
                    }, qt(tt, {
                        text: r,
                        autoRotate: !0
                    })), qt("p", {
                        className: Lt.a.name
                    }, qt(lt, {
                        text: e.title
                    })), qt("div", {
                        className: Lt.a.description
                    }, e.description && qt(dt.a, {
                        blocks: e.description,
                        serializers: zt
                    }))), qt("div", {
                        className: Lt.a.right + " lazy-bg",
                        style: {
                            backgroundImage: "url(".concat(Ft.image(e.image).size(836, 556).quality(80).auto("format"), ")")
                        }
                    })))
                },
                Bt = d.a.createElement,
                Ut = function(t) {
                    var e = t.data || {},
                        n = Object(f.useRef)(),
                        i = Object(f.useRef)(),
                        r = e.projects ? e.projects.length : 0,
                        o = r > 1,
                        a = !1,
                        s = {
                            point: new bt.a,
                            start: 0,
                            current: 0,
                            diff: 0
                        },
                        c = 0,
                        u = 0,
                        l = new F({
                            initial: 0,
                            tension: 0,
                            friction: .4,
                            step: 10
                        });
                    Object(f.useEffect)((function() {
                        o && (b(), new IntersectionObserver((function(t, e) {
                            t.forEach((function(t) {
                                t.isIntersecting ? Object(H.a)(_) : Object(H.b)(_)
                            }))
                        }), {
                            rootMargin: "0px",
                            threshold: 0
                        }).observe(n.current), U.a.add(w));
                        i.current && kt(i.current.querySelectorAll("a")).map((function(t) {
                            t.addEventListener("mouseenter", y), t.addEventListener("mouseleave", v)
                        }))
                    }), []);
                    var h = function() {
                            return g.a.utils.clamp(u, 0, c + s.diff)
                        },
                        d = function(t) {
                            o && (a = !0, yt.a.toPoint(t, s.point), s.start = s.point.x)
                        },
                        p = function(t) {
                            a && o && (yt.a.toPoint(t, s.point), s.current = s.point.x, s.diff = s.current - s.start)
                        },
                        m = function(t) {
                            o && (a = !1, c = h(), s.diff = 0, c == u ? ht.dispatch({
                                id: "drag",
                                direction: -1
                            }) : 0 == c && ht.dispatch({
                                id: "drag",
                                direction: 1
                            }))
                        },
                        v = function() {
                            o && ht.dispatch({
                                id: "drag",
                                state: "in",
                                direction: c == u ? -1 : 1
                            })
                        },
                        y = function() {
                            o && (m(), ht.dispatch({
                                id: "drag",
                                state: "out"
                            }))
                        },
                        b = function() {
                            u = i.current.clientWidth * (r - 1) * -1
                        },
                        _ = function(t) {
                            a ? l.setTarget(h()) : l.setTarget(c), l.update(t), i && g.a.set(i.current, {
                                x: l.value
                            })
                        },
                        w = function() {
                            l.setFriction(q.a.is.mobile ? .4 : .5), i.current && (b(), c = h())
                        };
                    return Bt("section", {
                        className: Rt.a.component,
                        id: "artDirection",
                        ref: n
                    }, Bt("div", {
                        className: Rt.a.description
                    }, Bt("div", {
                        className: Rt.a.descriptionLeft
                    }, Bt("div", {
                        className: Rt.a.textBackground
                    }, Bt("div", {
                        className: Rt.a.textArtistic
                    }, Bt(Q, {
                        count: 8,
                        text: "Art"
                    })), Bt("div", {
                        className: Rt.a.textDirection
                    }, Bt(Q, {
                        count: 4,
                        text: "Direction",
                        reverse: !0
                    })), Bt("div", {
                        className: Rt.a.textArtistic
                    }, Bt(Q, {
                        count: 8,
                        text: "Art"
                    })), Bt("div", {
                        className: Rt.a.textDirection
                    }, Bt(Q, {
                        count: 4,
                        text: "Direction",
                        reverse: !0
                    })), Bt("div", {
                        className: Rt.a.textArtistic
                    }, Bt(Q, {
                        count: 8,
                        text: "Art"
                    })), Bt("div", {
                        className: Rt.a.textDirection
                    }, Bt(Q, {
                        count: 4,
                        text: "Direction",
                        reverse: !0
                    })), Bt("div", {
                        className: Rt.a.textArtistic
                    }, Bt(Q, {
                        count: 8,
                        text: "Art"
                    })), Bt("div", {
                        className: Rt.a.textDirection
                    }, Bt(Q, {
                        count: 4,
                        text: "Direction",
                        reverse: !0
                    })), Bt("div", {
                        className: Rt.a.textArtistic
                    }, Bt(Q, {
                        count: 8,
                        text: "Art"
                    }))), Bt(G, {
                        img: "artisticDirection/title.png",
                        text: document.getElementById("yy8").value,
                        angle: -5,
                        transform: {
                            start: {
                                rotation: -45,
                                x: 0,
                                y: 0
                            },
                            end: {
                                rotation: 0,
                                x: 0,
                                y: 0
                            }
                        }
                    })), Bt("div", {
                        className: Rt.a.descriptionRight
                    }, Bt("div", {
                        className: Rt.a.descriptionRightBackground
                    }), Bt("div", null, Bt(tt, {
                        text: "n\xa0\xa0\xa0\xa0Art\xa0\xa0\xa0\xa0Directio",
                        autoRotate: !0
                    }), Bt("h2", null, document.getElementById("yy91").value, Bt("br", null), document.getElementById("yy92").value)), Bt("p", {
                        className: Rt.a.descriptionRightContent
                    }, e.description)), Bt("img", {
                        className: Rt.a.lamp,
                        src: "img/artisticDirection/lamp.png",
                        alt: "lamp illustration",
                        loading: "lazy"
                    }), Bt("img", {
                        className: Rt.a.light,
                        src: "img/artisticDirection/light.png",
                        alt: "lamp light illustration",
                        loading: "lazy"
                    })), r > 0 ? Bt("div", {
                        className: Rt.a.projects + " lazy-bg"
                    }, Bt("div", {
                        ref: i,
                        className: Rt.a.projectsList + (o ? " is-draggable" : ""),
                        onMouseEnter: v,
                        onMouseDown: d,
                        onMouseMove: p,
                        onMouseUp: m,
                        onMouseLeave: y,
                        onTouchStart: d,
                        onTouchMove: p,
                        onTouchEnd: m,
                        onTouchCancel: m
                    }, e.projects && e.projects.map((function(t, e) {
                        return Bt(Ht, {
                            key: "project_".concat(e),
                            data: t
                        })
                    })))) : "", Bt("div", {
                        className: Rt.a.outro
                    }, Bt("p", null, document.getElementById("yy11").value)))
                },
                Vt = n("7D1f"),
                Wt = n.n(Vt),
                Yt = d.a.createElement,
                Xt = x()(O.a),
                Gt = function(t) {
                    var e = t.data || {};
                    e.gridImages || (e.gridImages = []);
                    var n = Object(f.useRef)(),
                        i = Object(f.useRef)(),
                        r = e.projects ? e.projects.length : 0,
                        o = r > 1,
                        a = !1,
                        s = {
                            point: new bt.a,
                            start: 0,
                            current: 0,
                            diff: 0
                        },
                        c = 0,
                        u = 0,
                        l = new F({
                            initial: 0,
                            tension: 0,
                            friction: .4,
                            step: 10
                        }),
                        h = "";
                    if (e.titles)
                        for (var d = 0; d < e.titles.length; d++) h += "&nbsp;-&nbsp;", h += e.titles[d], e.titles[d].length;
                    Object(f.useEffect)((function() {
                        o && (w(), new IntersectionObserver((function(t, e) {
                            t.forEach((function(t) {
                                t.isIntersecting ? Object(H.a)(x) : Object(H.b)(x)
                            }))
                        }), {
                            rootMargin: "0px",
                            threshold: 0
                        }).observe(n.current), U.a.add(k));
                        i.current && kt(i.current.querySelectorAll("a")).map((function(t) {
                            t.addEventListener("mouseenter", _), t.addEventListener("mouseleave", b)
                        }))
                    }), []);
                    var p = function() {
                            return g.a.utils.clamp(u, 0, c + s.diff)
                        },
                        m = function(t) {
                            o && (a = !0, yt.a.toPoint(t, s.point), s.start = s.point.x)
                        },
                        v = function(t) {
                            a && o && (yt.a.toPoint(t, s.point), s.current = s.point.x, s.diff = s.current - s.start)
                        },
                        y = function(t) {
                            o && (a = !1, c = p(), s.diff = 0, c == u ? ht.dispatch({
                                id: "drag",
                                direction: -1
                            }) : 0 == c && ht.dispatch({
                                id: "drag",
                                direction: 1
                            }))
                        },
                        b = function() {
                            o && ht.dispatch({
                                id: "drag",
                                state: "in",
                                direction: c == u ? -1 : 1
                            })
                        },
                        _ = function() {
                            o && (y(), ht.dispatch({
                                id: "drag",
                                state: "out"
                            }))
                        },
                        w = function() {
                            u = i.current.clientWidth * (r - 1) * -1
                        },
                        x = function(t) {
                            a ? l.setTarget(p()) : l.setTarget(c), l.update(t), i && g.a.set(i.current, {
                                x: l.value
                            })
                        },
                        k = function() {
                            l.setFriction(q.a.is.mobile ? .4 : .5), i.current && (w(), c = p())
                        };
                    return Yt("section", {
                        className: Wt.a.component,
                        id: "partyDesign",
                        ref: n
                    }, Yt("div", {
                        className: Wt.a.header
                    }, Yt("div", {
                        className: Wt.a.gridLeft
                    }, Yt("div", {
                        style: {
                            backgroundImage: "url(".concat(Xt.image(e.gridImages[0]), ")")
                        }
                    })), Yt("div", {
                        className: Wt.a.gridRight
                    }, Yt("div", {
                        className: "lazy-bg",
                        style: {
                            backgroundImage: "url(".concat(Xt.image(e.gridImages[1]), ")")
                        }
                    }), Yt("div", {
                        className: "lazy-bg",
                        style: {
                            backgroundImage: "url(".concat(Xt.image(e.gridImages[2]), ")")
                        }
                    }), Yt("div", {
                        className: "lazy-bg",
                        style: {
                            backgroundImage: "url(".concat(Xt.image(e.gridImages[3]), ")")
                        }
                    }), Yt("div", {
                        className: "lazy-bg",
                        style: {
                            backgroundImage: "url(".concat(Xt.image(e.gridImages[4]), ")")
                        }
                    }), Yt("div", {
                        className: "lazy-bg",
                        style: {
                            backgroundImage: "url(".concat(Xt.image(e.gridImages[5]), ")")
                        }
                    })), Yt(G, {
                        img: "partydesign/title.png",
                        text: document.getElementById("yy12").value,
                        angle: 2,
                        transform: {
                            start: {
                                rotation: -45,
                                x: 0,
                                y: 0
                            },
                            end: {
                                rotation: 0,
                                x: 0,
                                y: 0
                            }
                        }
                    })), Yt("div", {
                        className: Wt.a.introduction
                    }, Yt("h3", null, document.getElementById("yy131").value), Yt("p", null, document.getElementById("yy132").value)), Yt("div", {
                        className: Wt.a.gallery
                    }, r > 0 ? Yt("div", {
                        className: Wt.a.projects
                    }, Yt("div", {
                        ref: i,
                        className: Wt.a.projectsList + (o ? " is-draggable" : ""),
                        onMouseEnter: b,
                        onMouseDown: m,
                        onMouseMove: v,
                        onMouseUp: y,
                        onMouseLeave: _,
                        onTouchStart: m,
                        onTouchMove: v,
                        onTouchEnd: y,
                        onTouchCancel: y
                    }, e.projects && e.projects.map((function(t, e) {
                        return Yt(Ht, {
                            key: "project_".concat(e),
                            data: t
                        })
                    })))) : "", Yt("img", {
                        className: Wt.a.balloons,
                        src: "img/partydesign/balloons.png",
                        alt: "balloons",
                        loading: "lazy"
                    })), Yt("div", {
                        className: Wt.a.texts
                    }, Yt(Q, {
                        count: 3,
                        text: h
                    })), Yt("div", {
                        className: Wt.a.outro
                    }, Yt("p", null, document.getElementById("yy15").value)))
                },
                Jt = n("JvqE"),
                Qt = n.n(Jt),
                Kt = d.a.createElement,
                Zt = function(t) {
                    for (var e = t.data || {}, n = Object(f.useRef)(), i = Object(f.useRef)(), r = Object(f.useRef)(), o = [], a = 0; a < 5; a++) o.push({
                        ref: Object(f.useRef)(null),
                        circle: Object(f.useRef)(null),
                        content: Object(f.useRef)(null),
                        angle: g.a.utils.random(0, 360),
                        steps: 0,
                        progress: 0,
                        active: !0
                    });
                    Object(f.useEffect)((function() {
                        setTimeout((function() {
                            new IntersectionObserver((function(t, e) {
                                t.forEach((function(t) {
                                    t.isIntersecting ? Object(H.a)(s) : Object(H.b)(s)
                                }))
                            }), {
                                rootMargin: "0px",
                                threshold: 0
                            }).observe(n.current)
                        }), 1e3)
                    }), []);
                    var s = function(t) {
                            for (var e, n = 0; n < o.length; n++)(e = o[n]).circle && e.circle.current && e.active && (e.progress = g.a.utils.interpolate(e.progress, e.steps, .05), e.angle += .05 * t * e.progress, g.a.set(e.circle.current, {
                                rotate: e.angle
                            }))
                        },
                        c = function(t, e) {
                            t && (t.active = !0, t.steps = 1)
                        },
                        u = function(t, e) {
                            t && (t.steps = 0)
                        };
                    return Kt("section", {
                        className: Qt.a.component,
                        id: "contact",
                        ref: n
                    }, Kt("div", {
                        className: Qt.a.contactHeader + " lazy-bg"
                    }, Kt(G, {
                        img: "contact/title.png",
                        text: document.getElementById("yy16").value,
                        angle: -2,
                        offsetMultiplier: .005,
                        transform: {
                            start: {
                                rotation: -45,
                                x: 0,
                                y: 0
                            },
                            end: {
                                rotation: 0,
                                x: 0,
                                y: 0
                            }
                        }
                    })), Kt("div", {
                        className: Qt.a.informations
                    }, Kt("div", {
                        className: Qt.a.text
                    }, Kt("p", null, e.email), Kt("p", null, e.location), Kt("p", null, e.telephone)), Kt("div", {
                        className: Qt.a.social
                    }, Kt("ul", null, Kt("li", null, Kt("a", {
                        href: e.instagram,
                        target: "_blank",
                        rel: "noreferer noopener",
                        ref: o[0].ref,
                        onMouseEnter: c.bind(undefined, o[0]),
                        onMouseLeave: u.bind(undefined, o[0])
                    }, Kt("div", {
                        ref: o[0].circle
                    }, Kt(tt, {
                        text: "m\xa0\xa0\xa0instagram\xa0\xa0\xa0instagra"
                    })), Kt("svg", {
                        ref: o[0].content,
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        x: "0px",
                        y: "0px",
                        width: "24.2px",
                        height: "24.2px",
                        viewBox: "0 0 24.2 24.2"
                    }, Kt("g", null, Kt("g", null, Kt("path", {
                        className: "st0",
                        d: "M18.6,4.2C18.6,4.2,18.6,4.2,18.6,4.2c0.8,0,1.5,0.7,1.5,1.5c0,0.8-0.7,1.4-1.5,1.4c-0.8,0-1.4-0.7-1.4-1.5 C17.1,4.8,17.8,4.2,18.6,4.2z"
                    })), Kt("g", null, Kt("path", {
                        className: "st0",
                        d: "M24,6.1c0.2,1.9,0.3,10.9-0.3,13c-0.7,2.8-2.5,4.4-5.3,4.8c-1,0.2-3.9,0.3-6.7,0.3c-2.9,0-5.8-0.1-6.7-0.4 c-2.7-0.7-4.4-2.5-4.8-5.3C-0.1,16.5-0.1,7,0.5,5C1.2,2.3,3,0.7,5.7,0.3C7,0.1,9.4,0,11.8,0c2.3,0,4.5,0.1,5.9,0.1 c1.7,0.1,3.2,0.6,4.4,1.8C23.3,3.1,23.9,4.5,24,6.1z M21.7,18.1c0.3-2.1,0.3-9.9,0.1-11.9c-0.2-2.1-1.5-3.5-3.6-3.9 c-1-0.2-3.5-0.2-6-0.2c-2.4,0-4.8,0.1-5.9,0.2C4.2,2.6,2.8,3.9,2.5,6C2.1,8.2,2.1,16.5,2.4,18.2c0.3,1.7,1.2,2.9,3,3.4 c0.9,0.3,3.7,0.4,6.5,0.4c2.5,0,5-0.1,6-0.2C20,21.6,21.4,20.3,21.7,18.1"
                    })), Kt("g", null, Kt("path", {
                        className: "st0",
                        d: "M12.1,5.9c3.4,0,6.2,2.8,6.1,6.2c0,3.4-2.8,6.2-6.2,6.2c-3.4,0-6.2-2.8-6.1-6.2C5.9,8.7,8.7,5.9,12.1,5.9z M12.1,16.1c2.2,0,4-1.8,4-4c0-2.2-1.7-4-3.9-4c0,0,0,0,0,0c-2.2,0-4,1.8-4,4C8,14.3,9.8,16.1,12.1,16.1 C12,16.1,12,16.1,12.1,16.1"
                    })))))), Kt("li", null, Kt("a", {
                        href: e.facebook,
                        target: "_blank",
                        rel: "noreferer noopener",
                        ref: o[1].ref,
                        onMouseEnter: c.bind(undefined, o[1]),
                        onMouseLeave: u.bind(undefined, o[1])
                    }, Kt("div", {
                        ref: o[1].circle
                    }, Kt(tt, {
                        text: "k\xa0\xa0\xa0\xa0facebook\xa0\xa0\xa0\xa0faceboo"
                    })), Kt("svg", {
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        x: "0px",
                        y: "0px",
                        width: "14.4px",
                        height: "27.3px",
                        viewBox: "0 0 14.4 27.3"
                    }, Kt("g", null, Kt("path", {
                        className: "st0",
                        d: "M10.8,0c0.7,0,1.5,0,2.2,0.1c0.5,0,1,0.1,1.4,0.1l0,4.4c-0.1,0-0.2,0-0.3,0c-0.5,0-1,0-1.4,0 c-0.4,0-0.7,0-1.1,0c-1.2,0-2,0.5-2.1,1.9c0,1-0.1,3.4-0.1,3.5c0.1,0,1.2,0,2.4,0c0.6,0,1.1,0,1.5,0c0.3,0,0.6,0,0.9,0 c-0.2,1.7-0.5,3.3-0.7,4.9H9.3L9.2,27.3H4.1L4.2,15H0L0,10h4.2l0-0.4c0-1,0-2,0-3c0-0.6,0-1.3,0.2-1.9c0.3-1.5,1-2.8,2.2-3.7 C7.8,0.4,9,0,10.4,0C10.5,0,10.6,0,10.8,0z"
                    }))))), Kt("li", null, Kt("a", {
                        href: e.youtube,
                        target: "_blank",
                        rel: "noreferer noopener",
                        ref: o[3].ref,
                        onMouseEnter: c.bind(undefined, o[3]),
                        onMouseLeave: u.bind(undefined, o[3])
                    }, Kt("div", {
                        ref: o[3].circle
                    }, Kt(tt, {
                        text: "e\xa0\xa0\xa0\xa0\xa0\xa0youtube\xa0\xa0\xa0\xa0\xa0youtub"
                    })), Kt("svg", {
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        x: "0px",
                        y: "0px",
                        width: "25px",
                        height: "17.5px",
                        viewBox: "0 0 25 17.5"
                    }, Kt("g", null, Kt("path", {
                        className: "st0",
                        d: "M24.3,2.3c0.9,2.4,0.9,10.9-0.2,13.2c-0.3,0.6-0.8,1-1.4,1.4c-0.8,0.4-5.7,0.6-10.5,0.6 c-4.4,0-8.7-0.2-9.7-0.5c-0.9-0.3-1.6-0.9-1.9-1.9c-0.8-2.3-1-11.8,0.6-13.7c0.5-0.6,1.3-1,2.1-1.1C5.2,0.1,9,0,12.6,0 c4.6,0,9,0.2,9.9,0.5C23.4,0.8,24,1.4,24.3,2.3z M9.4,12.5c2.6-1.3,5.2-2.7,7.8-4c-2.6-1.4-5.2-2.7-7.7-4C9.4,7.1,9.4,9.8,9.4,12.5 "
                    }))))), Kt("li", null, Kt("a", {
                        href: e.soundcloud,
                        target: "_blank",
                        rel: "noreferer noopener",
                        ref: o[4].ref,
                        onMouseEnter: c.bind(undefined, o[4]),
                        onMouseLeave: u.bind(undefined, o[4])
                    }, Kt("div", {
                        ref: o[4].circle
                    }, Kt(tt, {
                        text: "d\xa0soundcloud\xa0soundclou"
                    })), Kt("svg", {
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        x: "0px",
                        y: "0px",
                        width: "31.1px",
                        height: "17.7px",
                        viewBox: "0 0 31.1 17.7"
                    }, Kt("path", {
                        className: "st0",
                        d: "M0.4,8.1c-0.1,0-0.1,0.1-0.1,0.1L0,9.9l0.2,1.7c0,0.1,0.1,0.1,0.1,0.1c0.1,0,0.1,0,0.1-0.1l0,0v0c0,0,0,0,0,0 l0.3-1.7L0.5,8.2C0.5,8.1,0.4,8.1,0.4,8.1z M1.6,7.1C1.6,7,1.6,7,1.5,7C1.4,7,1.4,7.1,1.4,7.1c0,0-0.3,2.8-0.3,2.8l0.3,2.7 c0,0.1,0.1,0.1,0.1,0.1c0.1,0,0.1-0.1,0.1-0.1L2,9.9L1.6,7.1z M6.4,4.6c-0.1,0-0.2,0.1-0.2,0.2L6,9.9l0.2,3.3c0,0.1,0.1,0.2,0.2,0.2 c0.1,0,0.2-0.1,0.2-0.2v0l0.3-3.3L6.7,4.8C6.7,4.7,6.6,4.6,6.4,4.6z M3.9,6.3c-0.1,0-0.2,0.1-0.2,0.2L3.5,9.9l0.3,3.3 c0,0.1,0.1,0.2,0.2,0.2c0.1,0,0.2-0.1,0.2-0.2l0.3-3.3L4.1,6.5C4.1,6.4,4,6.3,3.9,6.3z M9,13.5c0.2,0,0.3-0.1,0.3-0.3l0.2-3.3 L9.3,3.1c0-0.2-0.1-0.3-0.3-0.3c-0.2,0-0.3,0.1-0.3,0.3c0,0-0.2,6.8-0.2,6.8l0.2,3.3C8.7,13.3,8.8,13.5,9,13.5z M14.1,13.5 c0.2,0,0.4-0.2,0.4-0.4v0v0l0.2-3.2L14.5,2c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4l-0.1,7.9c0,0,0.1,3.2,0.1,3.2 C13.8,13.3,13.9,13.5,14.1,13.5z M11.5,13.5c0.2,0,0.3-0.1,0.3-0.3v0l0.2-3.2L11.9,3c0-0.2-0.2-0.3-0.3-0.3c-0.2,0-0.3,0.1-0.3,0.3 L11,9.9l0.2,3.2C11.2,13.3,11.4,13.5,11.5,13.5z M5.2,13.4c0.1,0,0.2-0.1,0.2-0.2l0.3-3.3L5.4,6.8c0-0.1-0.1-0.2-0.2-0.2 C5.1,6.6,5,6.6,5,6.8L4.7,9.9L5,13.2C5,13.3,5.1,13.4,5.2,13.4z M2.7,13.3c0.1,0,0.1-0.1,0.2-0.2l0.3-3.2L2.9,6.6 c0-0.1-0.1-0.2-0.2-0.2c-0.1,0-0.1,0.1-0.2,0.2c0,0-0.3,3.3-0.3,3.3l0.3,3.2C2.6,13.2,2.6,13.3,2.7,13.3z M12.8,2.9 c-0.2,0-0.4,0.2-0.4,0.4l-0.2,6.6l0.2,3.2c0,0.2,0.2,0.4,0.4,0.4c0.2,0,0.4-0.2,0.4-0.4v0l0.2-3.2l-0.2-6.6 C13.2,3.1,13,2.9,12.8,2.9z M7.7,13.5c0.1,0,0.3-0.1,0.3-0.3l0.3-3.3L8,3.6c0-0.1-0.1-0.3-0.3-0.3c-0.1,0-0.3,0.1-0.3,0.3 c0,0-0.2,6.3-0.2,6.3l0.2,3.3C7.4,13.4,7.6,13.5,7.7,13.5z M10.6,13.2L10.6,13.2l0.2-3.2l-0.2-7.1c0-0.2-0.1-0.3-0.3-0.3 c-0.2,0-0.3,0.1-0.3,0.3L9.7,9.9l0.2,3.2c0,0.2,0.1,0.3,0.3,0.3C10.4,13.5,10.6,13.3,10.6,13.2L10.6,13.2z M27.2,5.8 c-0.5,0-1,0.1-1.5,0.3C25.5,2.7,22.6,0,19,0c-0.9,0-1.7,0.2-2.4,0.5c-0.3,0.1-0.4,0.2-0.4,0.4V13c0,0.2,0.2,0.4,0.4,0.5 c0,0,10.5,0,10.6,0c2.1,0,3.8-1.7,3.8-3.8C31.1,7.6,29.3,5.8,27.2,5.8z M15.5,0.9c-0.2,0-0.4,0.2-0.4,0.4l-0.2,8.6L15,13 c0,0.2,0.2,0.4,0.4,0.4c0.2,0,0.4-0.2,0.4-0.4v0l0.2-3.1l-0.2-8.6C15.9,1.1,15.7,0.9,15.5,0.9z M3.1,15.9c-0.5-0.1-0.6-0.2-0.6-0.3 c0-0.1,0.1-0.3,0.4-0.3c0.3,0,0.5,0.1,0.6,0.3L4,15.2c-0.3-0.3-0.6-0.4-1-0.4c-0.6,0-1,0.3-1,0.8c0,0.6,0.4,0.7,0.9,0.9 c0.5,0.1,0.6,0.2,0.6,0.4c0,0.2-0.2,0.3-0.5,0.3c-0.3,0-0.5-0.1-0.7-0.3l-0.4,0.4c0.2,0.3,0.6,0.5,1.1,0.5c0.8,0,1.1-0.4,1.1-0.9 C4,16.2,3.5,16,3.1,15.9z M5.7,14.8c-0.8,0-1.2,0.6-1.2,1.5c0,0.9,0.5,1.5,1.2,1.5c0.8,0,1.2-0.6,1.2-1.5 C6.9,15.4,6.5,14.8,5.7,14.8z M5.7,17.1c-0.5,0-0.7-0.4-0.7-0.9c0-0.5,0.2-0.9,0.7-0.9c0.5,0,0.7,0.4,0.7,0.9 C6.4,16.7,6.2,17.1,5.7,17.1z M9.2,16.4c0,0.5-0.2,0.7-0.6,0.7c-0.4,0-0.6-0.3-0.6-0.7v-1.6H7.5v1.6c0,0.8,0.5,1.3,1.2,1.3 c0.7,0,1.2-0.5,1.2-1.3v-1.6H9.2V16.4z M12.3,16c0,0.2,0,0.5,0,0.6c0-0.1-0.1-0.2-0.2-0.3l-1-1.5h-0.5v2.9h0.6v-1.3 c0-0.2,0-0.5,0-0.6c0,0.1,0.1,0.2,0.2,0.3l1,1.6h0.5v-2.9h-0.6V16z M14.5,14.8h-0.9v2.9h0.9c0.7,0,1.5-0.4,1.5-1.4 C15.9,15.2,15.3,14.8,14.5,14.8z M14.4,17.1h-0.3v-1.7h0.3c0.6,0,0.9,0.3,0.9,0.9C15.3,16.8,15,17.1,14.4,17.1z M17.6,15.3 c0.3,0,0.4,0.1,0.5,0.3l0.5-0.2c-0.2-0.4-0.5-0.6-1-0.6c-0.7,0-1.3,0.6-1.3,1.5c0,0.9,0.5,1.5,1.2,1.5c0.5,0,0.9-0.2,1.1-0.6 l-0.5-0.3c-0.2,0.3-0.3,0.4-0.6,0.4c-0.4,0-0.7-0.4-0.7-0.9C17,15.7,17.2,15.3,17.6,15.3z M19.8,14.8h-0.6v2.9h1.7v-0.6h-1.1V14.8z M22.4,14.8c-0.8,0-1.2,0.6-1.2,1.5c0,0.9,0.5,1.5,1.2,1.5c0.8,0,1.2-0.6,1.2-1.5C23.6,15.4,23.2,14.8,22.4,14.8z M22.4,17.1 c-0.5,0-0.7-0.4-0.7-0.9c0-0.5,0.2-0.9,0.7-0.9c0.5,0,0.7,0.4,0.7,0.9C23.1,16.7,22.9,17.1,22.4,17.1z M25.9,16.4 c0,0.5-0.2,0.7-0.6,0.7c-0.4,0-0.6-0.3-0.6-0.7v-1.6h-0.6v1.6c0,0.8,0.5,1.3,1.2,1.3c0.7,0,1.2-0.5,1.2-1.3v-1.6h-0.6V16.4z M28.1,14.8h-0.9v2.9h0.9c0.7,0,1.5-0.4,1.5-1.4C29.5,15.2,28.9,14.8,28.1,14.8z M28.1,17.1h-0.3v-1.7h0.3c0.6,0,0.9,0.3,0.9,0.9 C28.9,16.8,28.7,17.1,28.1,17.1z"
                    })))), Kt("li", null, Kt("a", {
                        href: e.twitch,
                        target: "_blank",
                        rel: "noreferer noopener",
                        ref: o[2].ref,
                        onMouseEnter: c.bind(undefined, o[2]),
                        onMouseLeave: u.bind(undefined, o[2])
                    }, Kt("div", {
                        ref: o[2].circle
                    }, Kt(tt, {
                        text: "h\xa0\xa0\xa0\xa0twitch\xa0\xa0\xa0\xa0twitch\xa0\xa0\xa0\xa0twitc"
                    })), Kt("svg", {
                        version: "1.1",
                        x: "0px",
                        y: "0px",
                        width: "22.9px",
                        height: "24px",
                        viewBox: "0 0 22.9 24"
                    }, Kt("path", {
                        d: "M1.6,0L0,4.1V21h5.7v3H9l3-3h4.7l6.3-6.3V0H1.6z M20.8,13.6l-3.6,3.6h-5.7l-3,3v-3H3.6v-15h17.2V13.6z M17.2,6.3v6.3H15V6.3L17.2,6.3z M11.5,6.3v6.3H9.3V6.3L11.5,6.3z"
                    })))))), Kt("img", {
                        className: Qt.a.wave,
                        src: "img/contact/wave.svg",
                        alt: "wave illustration",
                        loading: "lazy"
                    }), Kt("div", {
                        className: Qt.a.contactUs
                    }, Kt(Q, {
                        count: 5,
                        text: "contact us\xa0",
                        speed: .2
                    }))), Kt("div", {
                        className: Qt.a.credits
                    }, Kt("ul", null, Kt("li", {
                        onMouseEnter: function() {
                            i.current.classList.add("hover"), r.current.classList.add("hover")
                        },
                        onMouseLeave: function() {
                            i.current.classList.remove("hover"), r.current.classList.remove("hover")
                        }
                    }, ))))
                },
                $t = n("lYXn"),
                te = n.n($t),
                ee = n("1rxJ"),
                ne = d.a.createElement,
                ie = function(t) {
                    var e = t.elementId,
                        n = !1;
                    return ne("a", {
                        ref: t.forwardedRef,
                        className: "anchorLink",
                        href: "#".concat(t.elementId),
                        onClick: function(t) {
                            t.preventDefault(), n || (n = !0, setTimeout((function() {
                                q.a.scroll.scrollTo(document.getElementById(e)), n = !1
                            }), 300), ee.a.dispatch(!1))
                        },
                        onMouseEnter: t.onMouseEnter ? t.onMouseEnter : null,
                        onMouseLeave: t.onMouseLeave ? t.onMouseLeave : null
                    }, ne("span", {
                        dangerouslySetInnerHTML: {
                            __html: t.text
                        }
                    }))
                },
                re = d.a.createElement,
                oe = function(t) {
                    var e, n = Object(f.useRef)(),
                        i = Object(f.useRef)(),
                        r = Object(f.useRef)(),
                        o = Object(f.useRef)(),
                        a = Object(f.useRef)(),
                        s = Object(f.useRef)(),
                        c = Object(f.useRef)(),
                        u = !1,
                        l = [{
                            text: "About",
                            id: "about",
                            image: "img/about/goliath_menu.png",
                            ref: i,
                            refImage: Object(f.useRef)()
                        }, {
                            text: "Black Jack Records",
                            id: "label",
                            image: "img/label/poster_menu.png",
                            ref: r,
                            refImage: Object(f.useRef)()
                        }, {
                            text: "Management",
                            id: "management",
                            image: "img/management/management_about.png",
                            ref: o,
                            refImage: Object(f.useRef)()
                        }, {
                            text: "Art Direction",
                            id: "artDirection",
                            image: "img/artisticDirection/lamp_menu.png",
                            ref: a,
                            refImage: Object(f.useRef)()
                        }, {
                            text: "Party Design",
                            id: "partyDesign",
                            image: "img/partyDesign/balloon_menu.png",
                            ref: s,
                            refImage: Object(f.useRef)()
                        }, {
                            text: "Contact",
                            id: "contact",
                            image: "img/contact/contact_menu.png",
                            ref: c,
                            refImage: Object(f.useRef)()
                        }],
                        h = {
                            lerp: .1,
                            x: 0,
                            y: 0,
                            tx: 0,
                            ty: 0
                        };
                    Object(f.useEffect)((function() {
                        ee.a.add(p), Y.add(d)
                    }), []);
                    var d = function() {
                            g.a.set(n.current, {
                                autoAlpha: 1,
                                x: "-50%"
                            })
                        },
                        p = function(t) {
                            t ? (u || Object(H.a)(y), u = !0, e = g.a.timeline(), q.a.scroll && q.a.scroll.stop(), e.set(".anchorLink span", {
                                y: "100%"
                            }).to(n.current, {
                                duration: .8,
                                x: "0%",
                                ease: "quint.inOut"
                            }).to("#content", {
                                duration: .8,
                                x: "100%",
                                ease: "quint.inOut"
                            }, 0).to(".anchorLink span", {
                                duration: .6,
                                y: "0%",
                                ease: "quint.out",
                                stagger: {
                                    each: .05
                                }
                            }, .4)) : (e = g.a.timeline()).to(n.current, {
                                duration: .6,
                                x: "-50%",
                                ease: "quint.inOut"
                            }).to("#content", {
                                duration: .6,
                                x: "0%",
                                ease: "quint.inOut"
                            }, 0).call((function() {
                                u = !1, Object(H.b)(y), q.a.scroll && q.a.scroll.start()
                            }))
                        },
                        m = function(t) {
                            n.current.classList.add("hover"), l.map((function(e) {
                                e.ref.current != t.currentTarget ? e.ref.current.classList.add("hover") : e.refImage.current.classList.add("hover")
                            }))
                        },
                        v = function(t) {
                            n.current.classList.remove("hover"), l.map((function(t) {
                                t.ref.current.classList.remove("hover"), t.refImage.current.classList.remove("hover")
                            }))
                        },
                        y = function() {
                            var t;
                            if (ee.a.state) {
                                h.tx = .03 * B.a.pointFromCenter.x, h.ty = .03 * B.a.pointFromCenter.y, h.x = g.a.utils.interpolate(h.x, h.tx, h.lerp), h.y = g.a.utils.interpolate(h.y, h.ty, h.lerp);
                                for (var e = 0; e < l.length; e++) t = l[e], g.a.set(t.refImage.current, {
                                    x: 100 * h.x + "%"
                                })
                            }
                        };
                    return re("section", {
                        ref: n,
                        className: "menu"
                    }, re("div", {
                        className: "menuImages"
                    }, l.map((function(t, e) {
                        return re("div", {
                            key: "image_".concat(e)
                        }, re("img", {
                            ref: t.refImage,
                            src: t.image,
                            alt: t.text,
                            loading: "lazy"
                        }))
                    }))), re("div", {
                        className: te.a.links
                    }, l.map((function(t, e) {
                        return re(ie, {
                            key: "anchor_".concat(e),
                            forwardedRef: t.ref,
                            onMouseEnter: m,
                            onMouseLeave: v,
                            elementId: t.id,
                            text: t.text
                        })
                    }))))
                },
                ae = n("ZH8p"),
                se = n.n(ae),
                ce = d.a.createElement,
                ue = function(t) {
                    var e, n = !1,
                        i = Object(f.useRef)(),
                        r = !1;
                    Object(f.useEffect)((function() {
                        e = R.a.loadAnimation({
                            container: i.current,
                            renderer: "svg",
                            loop: !1,
                            autoplay: !1,
                            path: "img/global/menu.json"
                        }), Y.add(o), ee.a.add(a)
                    }), []);
                    var o = function() {
                            g.a.to(i.current, {
                                duration: .4,
                                autoAlpha: 1
                            })
                        },
                        a = function(t) {
                            (n = t) ? (e.setDirection(1), e.play()) : (e.setDirection(-1), e.play())
                        };
                    return ce("a", {
                        ref: i,
                        className: se.a.component,
                        href: "#",
                        onClick: function(t) {
                            t.preventDefault(), r || (r = !0, n = !n, ee.a.dispatch(n), setTimeout((function() {
                                r = !1
                            }), 600))
                        },
                        onMouseEnter: function() {
                            g.a.to(i.current, {
                                duration: .2,
                                scale: 1.05
                            })
                        },
                        onMouseLeave: function() {
                            g.a.to(i.current, {
                                duration: .2,
                                scale: 1
                            })
                        }
                    })
                },
                le = n("kN/J"),
                he = n.n(le),
                fe = d.a.createElement,
                de = function(t) {
                    for (var e = Object(f.useRef)(), n = [], i = 0; i < 20; i++) n.push({
                        ref: Object(f.useRef)(),
                        lottie: null
                    });
                    Object(f.useEffect)((function() {
                        Y.add(r)
                    }), []);
                    var r = function() {
                            if (q.a.gpu.quality >= 2)
                                for (var t = q.a.is.mobile ? 10 : 20, e = 0; e < t; e++) o(e)
                        },
                        o = function(t) {
                            var e = R.a.loadAnimation({
                                container: n[t].ref.current,
                                renderer: "svg",
                                loop: !1,
                                autoplay: !1,
                                animationData: q.a.resources.lottie_star.data
                            });
                            e.addEventListener("complete", (function(i) {
                                a(e, n[t].ref.current, i)
                            })), a(e, n[t].ref.current), n[t].lottie = e
                        },
                        a = function(t, e, n) {
                            setTimeout((function() {
                                ! function(t, e) {
                                    t.setSpeed(g.a.utils.random(.8, 1.5)), t.goToAndPlay(0), e && g.a.set(e, {
                                        x: g.a.utils.random(0, U.a.width),
                                        y: g.a.utils.random(0, q.a.scroll.scroll.instance.limit),
                                        scale: g.a.utils.random(1, 2)
                                    })
                                }(t, e)
                            }), 1e3 * g.a.utils.random(1, 5))
                        };
                    return fe("div", {
                        ref: e,
                        className: he.a.component
                    }, n.map((function(t, e) {
                        return fe("div", {
                            key: "ref_".concat(e),
                            ref: t.ref
                        })
                    })))
                },
                pe = d.a.createElement,
                me = function(t) {
                    var e = Object(f.useRef)(),
                        n = Object(f.useRef)(),
                        i = Object(f.useRef)(),
                        r = Object(f.useRef)(),
                        o = Object(f.useRef)(),
                        a = Object(f.useRef)(),
                        s = Object(f.useRef)(),
                        c = Object(f.useRef)(),
                        u = Object(f.useRef)(),
                        l = !1,
                        h = g.a.timeline(),
                        d = {
                            x: 0,
                            y: 0,
                            bx: 0,
                            by: 0,
                            vx: 0,
                            vy: 0
                        },
                        p = {
                            offset: 0,
                            target: 0
                        },
                        m = null,
                        v = {
                            stretch: new F({
                                initial: 0,
                                tension: .1,
                                friction: .15,
                                step: 10
                            }),
                            x: new F({
                                initial: 0,
                                tension: .1,
                                friction: .55,
                                step: 10
                            }),
                            y: new F({
                                initial: 0,
                                tension: .1,
                                friction: .55,
                                step: 10
                            })
                        };
                    Object(f.useEffect)((function() {
                        b(), ht.add(_), Y.add(y)
                    }), []);
                    var y = function() {
                            g.a.set(u.current, {
                                opacity: 1
                            })
                        },
                        b = function() {
                            return new Promise((function(t) {
                                h.clear().to(i.current, {
                                    duration: .15,
                                    delay: .1,
                                    scale: 0
                                }, 0).to(o.current, {
                                    duration: .3,
                                    scale: 0,
                                    rotateZ: 40,
                                    ease: "quint.out"
                                }, 0).to(a.current, {
                                    duration: .15,
                                    opacity: 0
                                }, 0).call((function() {
                                    l = !1, Object(H.b)(w), t()
                                }))
                            }))
                        },
                        _ = function(t) {
                            var n = t.id,
                                r = t.state,
                                u = t.direction,
                                f = void 0 === u ? 1 : u,
                                y = t.followEl;
                            "in" == r ? (l || Object(H.a)(w), l = !0, v.x.setValue(B.a.point.x), v.y.setValue(B.a.point.y), d.x = B.a.point.x, d.y = B.a.point.y, h.clear().to(i.current, {
                                duration: .3,
                                delay: 0,
                                scale: 1
                            }, 0).to(o.current, {
                                duration: .3,
                                scale: 1,
                                rotateZ: 0,
                                ease: "back.easeOut"
                            }, 0).to(a.current, {
                                duration: .3,
                                opacity: 1
                            }, 0), "drag" == n ? (g.a.set(s.current, {
                                opacity: 1
                            }), g.a.set(c.current, {
                                opacity: 0
                            })) : "drag2" == n ? (e.current.classList.add("desaturate"), g.a.set(s.current, {
                                opacity: 1
                            }), g.a.set(c.current, {
                                opacity: 0
                            })) : "follow" == n && (m = y, g.a.set(s.current, {
                                opacity: 0
                            }), g.a.set(c.current, {
                                opacity: 1
                            }))) : "out" == r && b().then((function() {
                                "drag2" == n && e.current.classList.remove("desaturate"), m = null
                            })), f && (p.target = f > 0 ? 0 : 180)
                        },
                        w = function(t) {
                            if (!q.a.is.mobile) {
                                d.vx = d.x - B.a.point.x, d.vy = d.y - B.a.point.y, d.x = g.a.utils.interpolate(d.x, B.a.point.x, .1), d.y = g.a.utils.interpolate(d.y, B.a.point.y, .1), d.bx = g.a.utils.interpolate(d.bx, B.a.point.x, .11), d.by = g.a.utils.interpolate(d.by, B.a.point.y, .11), v.x.setTarget(B.a.point.x), v.y.setTarget(B.a.point.y), v.x.update(t), v.y.update(t);
                                var i = Math.sqrt(Math.pow(d.x - B.a.point.x, 2) + Math.pow(d.y - B.a.point.y, 2));
                                i = Math.min(.001 * i, .3);
                                var o = 180 * Math.atan2(B.a.point.y - d.y, B.a.point.x - d.x) / Math.PI;
                                v.stretch.setTarget(i), v.stretch.update(t);
                                var a = 0;
                                if (m) {
                                    var s = m.getBoundingClientRect(),
                                        c = s.x + .5 * s.width,
                                        u = s.y + .5 * s.height,
                                        l = 180 * Math.atan2(B.a.point.y - u, B.a.point.x - c) / Math.PI;
                                    a = l += 180
                                } else p.offset = g.a.utils.interpolate(p.offset, p.target, .1), a = g.a.utils.mapRange(-200, 200, -30, 30, d.vy + d.vx), a += p.offset;
                                g.a.set(e.current, {
                                    x: d.x + 25,
                                    y: d.y + 25
                                }), g.a.set(n.current, {
                                    x: v.x.value + 25,
                                    y: v.y.value + 25,
                                    rotate: o,
                                    scaleX: 1 + v.stretch.value,
                                    scaleY: 1 - v.stretch.value
                                }), g.a.set(r.current, {
                                    rotateZ: a
                                })
                            }
                        };
                    return pe("div", {
                        ref: u,
                        className: "cursor"
                    }, pe("div", {
                        ref: n
                    }, pe("div", {
                        ref: i,
                        className: "background"
                    })), pe("div", {
                        ref: e,
                        className: "content"
                    }, pe("div", {
                        ref: r
                    }, pe("img", {
                        ref: o,
                        src: "img/global/drag.svg",
                        alt: "Finger"
                    })), pe("div", {
                        ref: a
                    }, pe("div", {
                        ref: s
                    }, pe(tt, {
                        text: "g drag drag drag dra",
                        autoRotate: !0
                    })), pe("div", {
                        ref: c,
                        className: "textFollow"
                    }, pe(tt, {
                        text: "t\xa0more\xa0conten",
                        autoRotate: !0
                    })))))
                },
                ge = n("qfMk"),
                ve = d.a.createElement,
                ye = function(t) {
                    var e = Object(f.useRef)(),
                        n = Object(f.useRef)(),
                        i = Object(f.useRef)(),
                        r = Object(f.useRef)(),
                        o = Object(f.useRef)(),
                        a = Object(f.useRef)(),
                        s = Object(f.useRef)(),
                        c = (Object(f.useRef)(), Object(f.useRef)()),
                        u = {
                            angle: g.a.utils.random(0, 360),
                            anglePrev: -1,
                            steps: 0,
                            progress: 0,
                            active: !0
                        },
                        l = !1,
                        h = g.a.timeline();
                    new F({
                        initial: 0,
                        tension: .1,
                        friction: .15,
                        step: 10
                    }), new F({
                        initial: 0,
                        tension: .1,
                        friction: .55,
                        step: 10
                    }), new F({
                        initial: 0,
                        tension: .1,
                        friction: .55,
                        step: 10
                    });
                    Object(f.useEffect)((function() {
                        p(), Y.add(d)
                    }), []);
                    var d = function() {
                            Object(H.a)(m), g.a.set(c.current, {
                                opacity: 1
                            })
                        },
                        p = function() {
                            l = !1, h.clear().to(i.current, {
                                duration: .15,
                                delay: .1,
                                scale: 0
                            }, 0).to(o.current, {
                                duration: .3,
                                scale: 0,
                                ease: "quint.out"
                            }, 0).to(a.current, {
                                duration: .15,
                                opacity: 0
                            }, 0).call((function() {
                                c.current.classList.add("none")
                            }))
                        },
                        m = function(t) {
                            if (!q.a.is.mobile) {
                                var e = q.a.scroll && q.a.scroll.scroll ? q.a.scroll.scroll.instance.scroll.y : 0,
                                    n = .5 * window.innerHeight;
                                e < n && l ? p() : e > n && !l && (l = !0, c.current.classList.remove("none"), h.clear().to(i.current, {
                                    duration: .3,
                                    delay: 0,
                                    scale: 1
                                }, 0).to(o.current, {
                                    duration: .3,
                                    scale: 1,
                                    ease: "back.easeOut"
                                }, 0).to(a.current, {
                                    duration: .3,
                                    opacity: 1
                                }, 0)), u.progress = g.a.utils.interpolate(u.progress, u.steps, .05), u.progress = ge.a.roundFloat(u.progress, 4), u.angle += .05 * t * u.progress, u.angle != u.anglePrev && g.a.set(s.current, {
                                    rotate: u.angle
                                }), u.anglePrev = u.angle
                            }
                        };
                    return ve("div", {
                        ref: c,
                        className: "backToTop",
                        onClick: function() {
                            q.a.scroll.scrollTo(document.getElementById("illustration"))
                        },
                        onMouseEnter: function(t) {
                            u.active = !0, u.steps = 1
                        },
                        onMouseLeave: function(t) {
                            u.steps = 0
                        }
                    }, ve("div", {
                        ref: n
                    }, ve("div", {
                        ref: i,
                        className: "background"
                    })), ve("div", {
                        ref: e,
                        className: "content"
                    }, ve("div", {
                        ref: r
                    }, ve("img", {
                        ref: o,
                        src: "img/global/backToTop.svg",
                        alt: "finger"
                    })), ve("div", {
                        ref: a,
                        className: "text"
                    }, ve("div", {
                        ref: s
                    }, ve("img", {
                        src: "img/global/backToTopText.svg",
                        alt: "Back to top"
                    })))))
                };
            var be = new(function() {
                    function t() {
                        Object(a.a)(this, t), this.data = {
                            siteConfig: {},
                            about: {},
                            label: {},
                            management: {},
                            artDirection: {},
                            partyDesign: {},
                            contact: {}
                        }
                    }
                    return Object(c.a)(t, [{
                        key: "get",
                        value: function(t, e) {
                            var n = this;
                            return new Promise((function(i) {
                                O.a.fetch(e).then((function(e) {
                                    e && (n.data[t] = e), i(e)
                                }))
                            }))
                        }
                    }, {
                        key: "getAll",
                        value: function() {
                            var t = this;
                            return new Promise((function(e) {
                                var n = [];
                                n.push(new Promise((function(e) {
                                    t.getConfig().then(e)
                                }))), n.push(new Promise((function(e) {
                                    t.getAbout().then(e)
                                }))), n.push(new Promise((function(e) {
                                    t.getLabel().then(e)
                                }))), n.push(new Promise((function(e) {
                                    t.getManagement().then(e)
                                }))), n.push(new Promise((function(e) {
                                    t.getArtisticDirection().then(e)
                                }))), n.push(new Promise((function(e) {
                                    t.getPartyDesign().then(e)
                                }))), n.push(new Promise((function(e) {
                                    t.getContact().then(e)
                                }))), Promise.all(n).then((function() {
                                    e(t.data)
                                }))
                            }))
                        }
                    }, {
                        key: "getAbout",
                        value: function() {
                            return this.get("about", '*[_id == "about"][0]')
                        }
                    }, {
                        key: "getLabel",
                        value: function() {
                            return this.get("label", '*[_id == "blackJack"][0]')
                        }
                    }, {
                        key: "getManagement",
                        value: function() {
                            return this.get("management", '*[_id == "management"][0]')
                        }
                    }, {
                        key: "getArtisticDirection",
                        value: function() {
                            return this.get("artDirection", '*[_id == "artisticDirection"][0]')
                        }
                    }, {
                        key: "getPartyDesign",
                        value: function() {
                            return this.get("partyDesign", '*[_id == "partyDesign"][0]')
                        }
                    }, {
                        key: "getContact",
                        value: function() {
                            return this.get("contact", '*[_id == "contact"][0]')
                        }
                    }, {
                        key: "getConfig",
                        value: function() {
                            return this.get("siteConfig", '*[_id == "settings"][0]')
                        }
                    }]), t
                }()),
                _e = d.a.createElement;

            function we(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, i = Object(h.a)(t);
                    if (e) {
                        var r = Object(h.a)(this).constructor;
                        n = Reflect.construct(i, arguments, r)
                    } else n = i.apply(this, arguments);
                    return Object(l.a)(this, n)
                }
            }
            var xe = x()(O.a),
                ke = m()((function() {
                    return Promise.all([n.e(4), n.e(3), n.e(13)]).then(n.bind(null, "F2YI"))
                }), {
                    ssr: !1,
                    loadableGenerated: {
                        webpack: function() {
                            return ["F2YI"]
                        },
                        modules: ["sections/loader"]
                    }
                }),
                Oe = m()((function() {
                    return Promise.all([n.e(3), n.e(15)]).then(n.bind(null, "H7oY"))
                }), {
                    ssr: !1,
                    loadableGenerated: {
                        webpack: function() {
                            return ["H7oY"]
                        },
                        modules: ["tools/scroll/scroll"]
                    }
                }),
                Te = function(t) {
                    Object(u.a)(n, t);
                    var e = we(n);

                    function n(t) {
                        var i;
                        return Object(a.a)(this, n), (i = e.call(this, t)).loadComplete = i.loadComplete.bind(Object(s.a)(i)), i
                    }
                    return Object(c.a)(n, null, [{
                        key: "getInitialProps",
                        value: function() {
                            var t, e = (t = r.a.mark((function t(e) {
                                var n;
                                return r.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return e.Component, e.ctx, n = {}, t.abrupt("return", be.getAll().then((function(t) {
                                                return q.a.imageBuilder = xe, n.api = t, n
                                            })));
                                        case 3:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })), function() {
                                var e = this,
                                    n = arguments;
                                return new Promise((function(i, r) {
                                    var a = t.apply(e, n);

                                    function s(t) {
                                        o(a, i, r, s, c, "next", t)
                                    }

                                    function c(t) {
                                        o(a, i, r, s, c, "throw", t)
                                    }
                                    s(void 0)
                                }))
                            });
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }]), Object(c.a)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            console.log("%cRONIN161", "padding: 5px 5px 5px 33px; color: #fff; display: block; font-weight: 800; font-size: 14px; background: #000 url(" + window.location.origin + "/img/global/ronin.gif) 5px center; background-repeat: no-repeat; background-size: 20px;"), console.log("https://www.ronin161.com"), Object(B.b)(), Object(U.b)(), q.a.needReload && document.location.reload(!0), q.a.needReload = !0, q.a.is = {
                                mobile: U.a.width < 1024
                            }, U.a.add(this.onResize), this.onResize(), this.loadLazyImages()
                        }
                    }, {
                        key: "onResize",
                        value: function() {
                            var t = .01 * U.a.height;
                            document.documentElement.style.setProperty("--vh", "".concat(t, "px")), document.documentElement.style.setProperty("--wh", "".concat(U.a.height, "px"))
                        }
                    }, {
                        key: "loadComplete",
                        value: function() {
                            g.a.set(this.contentRef, {
                                opacity: 1
                            }), g.a.fromTo(this.contentRef, {
                                y: U.a.height
                            }, {
                                duration: 1,
                                y: 0,
                                ease: "quint.inOut",
                                onComplete: function() {
                                    q.a.scroll && (q.a.scroll.start(), q.a.scroll.update()), Y.dispatch(), q.a.is.mobile && g.a.set("html, body", {
                                        overflowY: "auto"
                                    })
                                }
                            })
                        }
                    }, {
                        key: "loadLazyImages",
                        value: function() {
                            var t;
                            if ("IntersectionObserver" in window) {
                                t = document.querySelectorAll(".lazy-bg");
                                var e = new IntersectionObserver((function(t, n) {
                                    t.forEach((function(t) {
                                        if (t.isIntersecting) {
                                            var n = t.target;
                                            n.classList.remove("lazy-bg"), e.unobserve(n)
                                        }
                                    }))
                                }));
                                t.forEach((function(t) {
                                    e.observe(t)
                                }))
                            } else {
                                t = document.querySelectorAll(".lazy-bg")
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this;
                            return _e("div", {
                                ref: function(e) {
                                    return t.el = e
                                }
                            }, _e(_.a, null, _e("title", null, this.props.api.siteConfig.title ? this.props.api.siteConfig.title : ""), _e("meta", {
                                name: "description",
                                content: this.props.api.siteConfig.description
                            }), _e("meta", {
                                property: "og:title",
                                content: this.props.api.siteConfig.title
                            }), _e("meta", {
                                property: "og:type",
                                content: "website"
                            }), _e("meta", {
                                property: "og:url",
                                content: this.props.api.siteConfig.url
                            }), _e("meta", {
                                property: "og:image",
                                content: this.props.api && xe.image(this.props.api.siteConfig.shareImage).url()
                            }), _e("meta", {
                                property: "og:description",
                                content: this.props.api.siteConfig.description
                            }), _e("link", {
                                rel: "canonical",
                                href: this.props.api.siteConfig.url
                            })), _e(Oe, null), _e(ke, {
                                loadComplete: this.loadComplete
                            }), _e(ue, null), _e(oe, null), _e(me, null), _e("div", {
                                ref: function(e) {
                                    return t.contentRef = e
                                },
                                className: y.a.content,
                                id: "content"
                            }, _e("div", {
                                id: "scrollContainer"
                            }, _e(C, null), _e(nt, {
                                data: this.props.api.about
                            }), _e(wt, {
                                data: this.props.api.label
                            }), _e(It, {
                                data: this.props.api.management
                            }), _e(Ut, {
                                data: this.props.api.artDirection
                            }), _e(Gt, {
                                data: this.props.api.partyDesign
                            }), _e(Zt, {
                                data: this.props.api.contact
                            }), _e(de, null)), _e(ye, null)))
                        }
                    }]), n
                }(d.a.Component);
            e.default = Te
        },
        RT5d: function(t, e, n) {
            "use strict";
            var i = n("pmlw"),
                r = n("bYjO"),
                o = n("Qetd"),
                a = encodeURIComponent,
                s = "You must either:\n  - Pass `projectId` and `dataset` to the block renderer\n  - Materialize images to include the `url` field.\n\nFor more information, see ".concat(i("block-content-image-materializing"));
            t.exports = function(t) {
                var e = t.node,
                    n = t.options,
                    i = n.projectId,
                    c = n.dataset,
                    u = e.asset;
                if (!u) throw new Error("Image does not have required `asset` property");
                if (u.url) return u.url + function(t) {
                    var e = t.imageOptions,
                        n = Object.keys(e);
                    if (!n.length) return "";
                    var i = n.map((function(t) {
                        return "".concat(a(t), "=").concat(a(e[t]))
                    }));
                    return "?".concat(i.join("&"))
                }(n);
                if (!i || !c) throw new Error(s);
                if (!u._ref) throw new Error("Invalid image reference in block, no `_ref` found on `asset`");
                return r(o({
                    projectId: i,
                    dataset: c
                }, n.imageOptions || {})).image(e).toString()
            }
        },
        RfbL: function(t, e, n) {
            "use strict";
            var i = n("Qetd");

            function r(t) {
                try {
                    return JSON.parse(t)
                } catch (e) {
                    throw e.message = "Failed to parsed response body as JSON: " + e.message, e
                }
            }
            t.exports = function(t) {
                return {
                    onResponse: function(e) {
                        var n = e.headers["content-type"] || "",
                            o = t && t.force || -1 !== n.indexOf("application/json");
                        return e.body && n && o ? i({}, e, {
                            body: r(e.body)
                        }) : e
                    },
                    processOptions: function(t) {
                        return i({}, t, {
                            headers: i({
                                Accept: "application/json"
                            }, t.headers)
                        })
                    }
                }
            }
        },
        T7iU: function(t, e, n) {
            (function(e) {
                "object" == typeof navigator && (t.exports = function() {
                    "use strict";

                    function t(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function n(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                        }
                    }

                    function i(t, e, i) {
                        return e && n(t.prototype, e), i && n(t, i), t
                    }

                    function r(t, e, n) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n, t
                    }

                    function o(t, e) {
                        var n = Object.keys(t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(t);
                            e && (i = i.filter((function(e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                            }))), n.push.apply(n, i)
                        }
                        return n
                    }

                    function a(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? o(Object(n), !0).forEach((function(e) {
                                r(t, e, n[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                            }))
                        }
                        return t
                    }

                    function s(t, e) {
                        if (null == t) return {};
                        var n, i, r = function(t, e) {
                            if (null == t) return {};
                            var n, i, r = {},
                                o = Object.keys(t);
                            for (i = 0; i < o.length; i++) n = o[i], e.indexOf(n) >= 0 || (r[n] = t[n]);
                            return r
                        }(t, e);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(t);
                            for (i = 0; i < o.length; i++) n = o[i], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n])
                        }
                        return r
                    }

                    function c(t, e) {
                        return function(t) {
                            if (Array.isArray(t)) return t
                        }(t) || function(t, e) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                                var n = [],
                                    i = !0,
                                    r = !1,
                                    o = void 0;
                                try {
                                    for (var a, s = t[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); i = !0);
                                } catch (t) {
                                    r = !0, o = t
                                } finally {
                                    try {
                                        i || null == s.return || s.return()
                                    } finally {
                                        if (r) throw o
                                    }
                                }
                                return n
                            }
                        }(t, e) || l(t, e) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function u(t) {
                        return function(t) {
                            if (Array.isArray(t)) return h(t)
                        }(t) || function(t) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                        }(t) || l(t) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function l(t, e) {
                        if (t) {
                            if ("string" == typeof t) return h(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? h(t, e) : void 0
                        }
                    }

                    function h(t, e) {
                        (null == e || e > t.length) && (e = t.length);
                        for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                        return i
                    }

                    function f(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                        }
                    }

                    function d(t, e, n) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n, t
                    }

                    function p(t, e) {
                        var n = Object.keys(t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(t);
                            e && (i = i.filter((function(e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                            }))), n.push.apply(n, i)
                        }
                        return n
                    }

                    function m(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? p(Object(n), !0).forEach((function(e) {
                                d(t, e, n[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                            }))
                        }
                        return t
                    }
                    var g = {
                        addCSS: !0,
                        thumbWidth: 15,
                        watch: !0
                    };

                    function v(t, e) {
                        return function() {
                            return Array.from(document.querySelectorAll(e)).includes(this)
                        }.call(t, e)
                    }
                    var y = function(t) {
                            return null != t ? t.constructor : null
                        },
                        b = function(t, e) {
                            return !!(t && e && t instanceof e)
                        },
                        _ = function(t) {
                            return null == t
                        },
                        w = function(t) {
                            return y(t) === Object
                        },
                        x = function(t) {
                            return y(t) === String
                        },
                        k = function(t) {
                            return Array.isArray(t)
                        },
                        O = function(t) {
                            return b(t, NodeList)
                        },
                        T = x,
                        S = k,
                        E = O,
                        M = function(t) {
                            return b(t, Element)
                        },
                        C = function(t) {
                            return b(t, Event)
                        },
                        j = function(t) {
                            return _(t) || (x(t) || k(t) || O(t)) && !t.length || w(t) && !Object.keys(t).length
                        };

                    function P(t, e) {
                        if (1 > e) {
                            var n = function(t) {
                                var e = "".concat(t).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                                return e ? Math.max(0, (e[1] ? e[1].length : 0) - (e[2] ? +e[2] : 0)) : 0
                            }(e);
                            return parseFloat(t.toFixed(n))
                        }
                        return Math.round(t / e) * e
                    }
                    var A, I, N, R = function() {
                            function t(e, n) {
                                (function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                })(this, t), M(e) ? this.element = e : T(e) && (this.element = document.querySelector(e)), M(this.element) && j(this.element.rangeTouch) && (this.config = m({}, g, {}, n), this.init())
                            }
                            return function(t, e, n) {
                                e && f(t.prototype, e), n && f(t, n)
                            }(t, [{
                                key: "init",
                                value: function() {
                                    t.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(!0), this.element.rangeTouch = this)
                                }
                            }, {
                                key: "destroy",
                                value: function() {
                                    t.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(!1), this.element.rangeTouch = null)
                                }
                            }, {
                                key: "listeners",
                                value: function(t) {
                                    var e = this,
                                        n = t ? "addEventListener" : "removeEventListener";
                                    ["touchstart", "touchmove", "touchend"].forEach((function(t) {
                                        e.element[n](t, (function(t) {
                                            return e.set(t)
                                        }), !1)
                                    }))
                                }
                            }, {
                                key: "get",
                                value: function(e) {
                                    if (!t.enabled || !C(e)) return null;
                                    var n, i = e.target,
                                        r = e.changedTouches[0],
                                        o = parseFloat(i.getAttribute("min")) || 0,
                                        a = parseFloat(i.getAttribute("max")) || 100,
                                        s = parseFloat(i.getAttribute("step")) || 1,
                                        c = i.getBoundingClientRect(),
                                        u = 100 / c.width * (this.config.thumbWidth / 2) / 100;
                                    return 0 > (n = 100 / c.width * (r.clientX - c.left)) ? n = 0 : 100 < n && (n = 100), 50 > n ? n -= (100 - 2 * n) * u : 50 < n && (n += 2 * (n - 50) * u), o + P(n / 100 * (a - o), s)
                                }
                            }, {
                                key: "set",
                                value: function(e) {
                                    t.enabled && C(e) && !e.target.disabled && (e.preventDefault(), e.target.value = this.get(e), function(t, e) {
                                        if (t && e) {
                                            var n = new Event(e, {
                                                bubbles: !0
                                            });
                                            t.dispatchEvent(n)
                                        }
                                    }(e.target, "touchend" === e.type ? "change" : "input"))
                                }
                            }], [{
                                key: "setup",
                                value: function(e) {
                                    var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                                        i = null;
                                    if (j(e) || T(e) ? i = Array.from(document.querySelectorAll(T(e) ? e : 'input[type="range"]')) : M(e) ? i = [e] : E(e) ? i = Array.from(e) : S(e) && (i = e.filter(M)), j(i)) return null;
                                    var r = m({}, g, {}, n);
                                    return T(e) && r.watch && new MutationObserver((function(n) {
                                        Array.from(n).forEach((function(n) {
                                            Array.from(n.addedNodes).forEach((function(n) {
                                                M(n) && v(n, e) && new t(n, r)
                                            }))
                                        }))
                                    })).observe(document.body, {
                                        childList: !0,
                                        subtree: !0
                                    }), i.map((function(e) {
                                        return new t(e, n)
                                    }))
                                }
                            }, {
                                key: "enabled",
                                get: function() {
                                    return "ontouchstart" in document.documentElement
                                }
                            }]), t
                        }(),
                        D = function(t) {
                            return null != t ? t.constructor : null
                        },
                        L = function(t, e) {
                            return Boolean(t && e && t instanceof e)
                        },
                        q = function(t) {
                            return null == t
                        },
                        z = function(t) {
                            return D(t) === Object
                        },
                        F = function(t) {
                            return D(t) === String
                        },
                        H = function(t) {
                            return D(t) === Function
                        },
                        B = function(t) {
                            return Array.isArray(t)
                        },
                        U = function(t) {
                            return L(t, NodeList)
                        },
                        V = function(t) {
                            return q(t) || (F(t) || B(t) || U(t)) && !t.length || z(t) && !Object.keys(t).length
                        },
                        W = q,
                        Y = z,
                        X = function(t) {
                            return D(t) === Number && !Number.isNaN(t)
                        },
                        G = F,
                        J = function(t) {
                            return D(t) === Boolean
                        },
                        Q = H,
                        K = B,
                        Z = U,
                        $ = function(t) {
                            return L(t, Element)
                        },
                        tt = function(t) {
                            return L(t, Event)
                        },
                        et = function(t) {
                            return L(t, KeyboardEvent)
                        },
                        nt = function(t) {
                            return L(t, TextTrack) || !q(t) && F(t.kind)
                        },
                        it = function(t) {
                            return L(t, Promise) && H(t.then)
                        },
                        rt = function(t) {
                            if (L(t, window.URL)) return !0;
                            if (!F(t)) return !1;
                            var e = t;
                            t.startsWith("http://") && t.startsWith("https://") || (e = "http://".concat(t));
                            try {
                                return !V(new URL(e).hostname)
                            } catch (t) {
                                return !1
                            }
                        },
                        ot = V,
                        at = (A = document.createElement("span"), I = {
                            WebkitTransition: "webkitTransitionEnd",
                            MozTransition: "transitionend",
                            OTransition: "oTransitionEnd otransitionend",
                            transition: "transitionend"
                        }, N = Object.keys(I).find((function(t) {
                            return void 0 !== A.style[t]
                        })), !!G(N) && I[N]);

                    function st(t, e) {
                        setTimeout((function() {
                            try {
                                t.hidden = !0, t.offsetHeight, t.hidden = !1
                            } catch (t) {}
                        }), e)
                    }
                    var ct = {
                        isIE: !!document.documentMode,
                        isEdge: window.navigator.userAgent.includes("Edge"),
                        isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent),
                        isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
                        isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform)
                    };

                    function ut(t, e) {
                        return e.split(".").reduce((function(t, e) {
                            return t && t[e]
                        }), t)
                    }

                    function lt() {
                        for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
                        if (!n.length) return t;
                        var o = n.shift();
                        return Y(o) ? (Object.keys(o).forEach((function(e) {
                            Y(o[e]) ? (Object.keys(t).includes(e) || Object.assign(t, r({}, e, {})), lt(t[e], o[e])) : Object.assign(t, r({}, e, o[e]))
                        })), lt.apply(void 0, [t].concat(n))) : t
                    }

                    function ht(t, e) {
                        var n = t.length ? t : [t];
                        Array.from(n).reverse().forEach((function(t, n) {
                            var i = n > 0 ? e.cloneNode(!0) : e,
                                r = t.parentNode,
                                o = t.nextSibling;
                            i.appendChild(t), o ? r.insertBefore(i, o) : r.appendChild(i)
                        }))
                    }

                    function ft(t, e) {
                        $(t) && !ot(e) && Object.entries(e).filter((function(t) {
                            var e = c(t, 2)[1];
                            return !W(e)
                        })).forEach((function(e) {
                            var n = c(e, 2),
                                i = n[0],
                                r = n[1];
                            return t.setAttribute(i, r)
                        }))
                    }

                    function dt(t, e, n) {
                        var i = document.createElement(t);
                        return Y(e) && ft(i, e), G(n) && (i.innerText = n), i
                    }

                    function pt(t, e, n, i) {
                        $(e) && e.appendChild(dt(t, n, i))
                    }

                    function mt(t) {
                        Z(t) || K(t) ? Array.from(t).forEach(mt) : $(t) && $(t.parentNode) && t.parentNode.removeChild(t)
                    }

                    function gt(t) {
                        if ($(t))
                            for (var e = t.childNodes.length; e > 0;) t.removeChild(t.lastChild), e -= 1
                    }

                    function vt(t, e) {
                        return $(e) && $(e.parentNode) && $(t) ? (e.parentNode.replaceChild(t, e), t) : null
                    }

                    function yt(t, e) {
                        if (!G(t) || ot(t)) return {};
                        var n = {},
                            i = lt({}, e);
                        return t.split(",").forEach((function(t) {
                            var e = t.trim(),
                                r = e.replace(".", ""),
                                o = e.replace(/[[\]]/g, "").split("="),
                                a = c(o, 1)[0],
                                s = o.length > 1 ? o[1].replace(/["']/g, "") : "";
                            switch (e.charAt(0)) {
                                case ".":
                                    G(i.class) ? n.class = "".concat(i.class, " ").concat(r) : n.class = r;
                                    break;
                                case "#":
                                    n.id = e.replace("#", "");
                                    break;
                                case "[":
                                    n[a] = s
                            }
                        })), lt(i, n)
                    }

                    function bt(t, e) {
                        if ($(t)) {
                            var n = e;
                            J(n) || (n = !t.hidden), t.hidden = n
                        }
                    }

                    function _t(t, e, n) {
                        if (Z(t)) return Array.from(t).map((function(t) {
                            return _t(t, e, n)
                        }));
                        if ($(t)) {
                            var i = "toggle";
                            return void 0 !== n && (i = n ? "add" : "remove"), t.classList[i](e), t.classList.contains(e)
                        }
                        return !1
                    }

                    function wt(t, e) {
                        return $(t) && t.classList.contains(e)
                    }

                    function xt(t, e) {
                        var n = Element.prototype;
                        return (n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector || function() {
                            return Array.from(document.querySelectorAll(e)).includes(this)
                        }).call(t, e)
                    }

                    function kt(t) {
                        return this.elements.container.querySelectorAll(t)
                    }

                    function Ot(t) {
                        return this.elements.container.querySelector(t)
                    }

                    function Tt() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        $(t) && (t.focus({
                            preventScroll: !0
                        }), e && _t(t, this.config.classNames.tabFocus))
                    }
                    var St, Et = {
                            "audio/ogg": "vorbis",
                            "audio/wav": "1",
                            "video/webm": "vp8, vorbis",
                            "video/mp4": "avc1.42E01E, mp4a.40.2",
                            "video/ogg": "theora"
                        },
                        Mt = {
                            audio: "canPlayType" in document.createElement("audio"),
                            video: "canPlayType" in document.createElement("video"),
                            check: function(t, e, n) {
                                var i = ct.isIPhone && n && Mt.playsinline,
                                    r = Mt[t] || "html5" !== e;
                                return {
                                    api: r,
                                    ui: r && Mt.rangeInput && ("video" !== t || !ct.isIPhone || i)
                                }
                            },
                            pip: !(ct.isIPhone || !Q(dt("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || dt("video").disablePictureInPicture)),
                            airplay: Q(window.WebKitPlaybackTargetAvailabilityEvent),
                            playsinline: "playsInline" in document.createElement("video"),
                            mime: function(t) {
                                if (ot(t)) return !1;
                                var e = c(t.split("/"), 1)[0],
                                    n = t;
                                if (!this.isHTML5 || e !== this.type) return !1;
                                Object.keys(Et).includes(n) && (n += '; codecs="'.concat(Et[t], '"'));
                                try {
                                    return Boolean(n && this.media.canPlayType(n).replace(/no/, ""))
                                } catch (t) {
                                    return !1
                                }
                            },
                            textTracks: "textTracks" in document.createElement("video"),
                            rangeInput: (St = document.createElement("input"), St.type = "range", "range" === St.type),
                            touch: "ontouchstart" in document.documentElement,
                            transitions: !1 !== at,
                            reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
                        },
                        Ct = function() {
                            var t = !1;
                            try {
                                var e = Object.defineProperty({}, "passive", {
                                    get: function() {
                                        return t = !0, null
                                    }
                                });
                                window.addEventListener("test", null, e), window.removeEventListener("test", null, e)
                            } catch (t) {}
                            return t
                        }();

                    function jt(t, e, n) {
                        var i = this,
                            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                            o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                            a = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                        if (t && "addEventListener" in t && !ot(e) && Q(n)) {
                            var s = e.split(" "),
                                c = a;
                            Ct && (c = {
                                passive: o,
                                capture: a
                            }), s.forEach((function(e) {
                                i && i.eventListeners && r && i.eventListeners.push({
                                    element: t,
                                    type: e,
                                    callback: n,
                                    options: c
                                }), t[r ? "addEventListener" : "removeEventListener"](e, n, c)
                            }))
                        }
                    }

                    function Pt(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            n = arguments.length > 2 ? arguments[2] : void 0,
                            i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                            r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                        jt.call(this, t, e, n, !0, i, r)
                    }

                    function At(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            n = arguments.length > 2 ? arguments[2] : void 0,
                            i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                            r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                        jt.call(this, t, e, n, !1, i, r)
                    }

                    function It(t) {
                        var e = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            i = arguments.length > 2 ? arguments[2] : void 0,
                            r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                            o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                            a = function a() {
                                At(t, n, a, r, o);
                                for (var s = arguments.length, c = new Array(s), u = 0; u < s; u++) c[u] = arguments[u];
                                i.apply(e, c)
                            };
                        jt.call(this, t, n, a, !0, r, o)
                    }

                    function Nt(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        if ($(t) && !ot(e)) {
                            var r = new CustomEvent(e, {
                                bubbles: n,
                                detail: a(a({}, i), {}, {
                                    plyr: this
                                })
                            });
                            t.dispatchEvent(r)
                        }
                    }

                    function Rt() {
                        this && this.eventListeners && (this.eventListeners.forEach((function(t) {
                            var e = t.element,
                                n = t.type,
                                i = t.callback,
                                r = t.options;
                            e.removeEventListener(n, i, r)
                        })), this.eventListeners = [])
                    }

                    function Dt() {
                        var t = this;
                        return new Promise((function(e) {
                            return t.ready ? setTimeout(e, 0) : Pt.call(t, t.elements.container, "ready", e)
                        })).then((function() {}))
                    }

                    function Lt(t) {
                        it(t) && t.then(null, (function() {}))
                    }

                    function qt(t) {
                        return !!(K(t) || G(t) && t.includes(":")) && (K(t) ? t : t.split(":")).map(Number).every(X)
                    }

                    function zt(t) {
                        if (!K(t) || !t.every(X)) return null;
                        var e = c(t, 2),
                            n = e[0],
                            i = e[1],
                            r = function t(e, n) {
                                return 0 === n ? e : t(n, e % n)
                            }(n, i);
                        return [n / r, i / r]
                    }

                    function Ft(t) {
                        var e = function(t) {
                                return qt(t) ? t.split(":").map(Number) : null
                            },
                            n = e(t);
                        if (null === n && (n = e(this.config.ratio)), null === n && !ot(this.embed) && K(this.embed.ratio) && (n = this.embed.ratio), null === n && this.isHTML5) {
                            var i = this.media;
                            n = zt([i.videoWidth, i.videoHeight])
                        }
                        return n
                    }

                    function Ht(t) {
                        if (!this.isVideo) return {};
                        var e = this.elements.wrapper,
                            n = Ft.call(this, t),
                            i = c(K(n) ? n : [0, 0], 2),
                            r = 100 / i[0] * i[1];
                        if (e.style.paddingBottom = "".concat(r, "%"), this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
                            var o = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10),
                                a = (o - r) / (o / 50);
                            this.media.style.transform = "translateY(-".concat(a, "%)")
                        } else this.isHTML5 && e.classList.toggle(this.config.classNames.videoFixedRatio, null !== n);
                        return {
                            padding: r,
                            ratio: n
                        }
                    }
                    var Bt = {
                        getSources: function() {
                            var t = this;
                            return this.isHTML5 ? Array.from(this.media.querySelectorAll("source")).filter((function(e) {
                                var n = e.getAttribute("type");
                                return !!ot(n) || Mt.mime.call(t, n)
                            })) : []
                        },
                        getQualityOptions: function() {
                            return this.config.quality.forced ? this.config.quality.options : Bt.getSources.call(this).map((function(t) {
                                return Number(t.getAttribute("size"))
                            })).filter(Boolean)
                        },
                        setup: function() {
                            if (this.isHTML5) {
                                var t = this;
                                t.options.speed = t.config.speed.options, ot(this.config.ratio) || Ht.call(t), Object.defineProperty(t.media, "quality", {
                                    get: function() {
                                        var e = Bt.getSources.call(t).find((function(e) {
                                            return e.getAttribute("src") === t.source
                                        }));
                                        return e && Number(e.getAttribute("size"))
                                    },
                                    set: function(e) {
                                        if (t.quality !== e) {
                                            if (t.config.quality.forced && Q(t.config.quality.onChange)) t.config.quality.onChange(e);
                                            else {
                                                var n = Bt.getSources.call(t).find((function(t) {
                                                    return Number(t.getAttribute("size")) === e
                                                }));
                                                if (!n) return;
                                                var i = t.media,
                                                    r = i.currentTime,
                                                    o = i.paused,
                                                    a = i.preload,
                                                    s = i.readyState,
                                                    c = i.playbackRate;
                                                t.media.src = n.getAttribute("src"), ("none" !== a || s) && (t.once("loadedmetadata", (function() {
                                                    t.speed = c, t.currentTime = r, o || Lt(t.play())
                                                })), t.media.load())
                                            }
                                            Nt.call(t, t.media, "qualitychange", !1, {
                                                quality: e
                                            })
                                        }
                                    }
                                })
                            }
                        },
                        cancelRequests: function() {
                            this.isHTML5 && (mt(Bt.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"))
                        }
                    };

                    function Ut(t) {
                        return K(t) ? t.filter((function(e, n) {
                            return t.indexOf(e) === n
                        })) : t
                    }

                    function Vt(t) {
                        for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
                        return ot(t) ? t : t.toString().replace(/{(\d+)}/g, (function(t, e) {
                            return n[e].toString()
                        }))
                    }
                    var Wt = function() {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                                e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                            return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), e.toString())
                        },
                        Yt = function() {
                            return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString().replace(/\w\S*/g, (function(t) {
                                return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase()
                            }))
                        };

                    function Xt() {
                        var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();
                        return t = Wt(t, "-", " "), t = Wt(t, "_", " "), t = Yt(t), Wt(t, " ", "")
                    }

                    function Gt(t) {
                        var e = document.createElement("div");
                        return e.appendChild(t), e.innerHTML
                    }
                    var Jt = {
                            pip: "PIP",
                            airplay: "AirPlay",
                            html5: "HTML5",
                            vimeo: "Vimeo",
                            youtube: "YouTube"
                        },
                        Qt = function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (ot(t) || ot(e)) return "";
                            var n = ut(e.i18n, t);
                            if (ot(n)) return Object.keys(Jt).includes(t) ? Jt[t] : "";
                            var i = {
                                "{seektime}": e.seekTime,
                                "{title}": e.title
                            };
                            return Object.entries(i).forEach((function(t) {
                                var e = c(t, 2),
                                    i = e[0],
                                    r = e[1];
                                n = Wt(n, i, r)
                            })), n
                        },
                        Kt = function() {
                            function e(n) {
                                t(this, e), this.enabled = n.config.storage.enabled, this.key = n.config.storage.key
                            }
                            return i(e, [{
                                key: "get",
                                value: function(t) {
                                    if (!e.supported || !this.enabled) return null;
                                    var n = window.localStorage.getItem(this.key);
                                    if (ot(n)) return null;
                                    var i = JSON.parse(n);
                                    return G(t) && t.length ? i[t] : i
                                }
                            }, {
                                key: "set",
                                value: function(t) {
                                    if (e.supported && this.enabled && Y(t)) {
                                        var n = this.get();
                                        ot(n) && (n = {}), lt(n, t), window.localStorage.setItem(this.key, JSON.stringify(n))
                                    }
                                }
                            }], [{
                                key: "supported",
                                get: function() {
                                    try {
                                        return "localStorage" in window && (window.localStorage.setItem("___test", "___test"), window.localStorage.removeItem("___test"), !0)
                                    } catch (t) {
                                        return !1
                                    }
                                }
                            }]), e
                        }();

                    function Zt(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "text";
                        return new Promise((function(n, i) {
                            try {
                                var r = new XMLHttpRequest;
                                if (!("withCredentials" in r)) return;
                                r.addEventListener("load", (function() {
                                    if ("text" === e) try {
                                        n(JSON.parse(r.responseText))
                                    } catch (t) {
                                        n(r.responseText)
                                    } else n(r.response)
                                })), r.addEventListener("error", (function() {
                                    throw new Error(r.status)
                                })), r.open("GET", t, !0), r.responseType = e, r.send()
                            } catch (t) {
                                i(t)
                            }
                        }))
                    }

                    function $t(t, e) {
                        if (G(t)) {
                            var n = G(e),
                                i = function() {
                                    return null !== document.getElementById(e)
                                },
                                r = function(t, e) {
                                    t.innerHTML = e, n && i() || document.body.insertAdjacentElement("afterbegin", t)
                                };
                            if (!n || !i()) {
                                var o = Kt.supported,
                                    a = document.createElement("div");
                                if (a.setAttribute("hidden", ""), n && a.setAttribute("id", e), o) {
                                    var s = window.localStorage.getItem("".concat("cache", "-").concat(e));
                                    if (null !== s) {
                                        var c = JSON.parse(s);
                                        r(a, c.content)
                                    }
                                }
                                Zt(t).then((function(t) {
                                    ot(t) || (o && window.localStorage.setItem("".concat("cache", "-").concat(e), JSON.stringify({
                                        content: t
                                    })), r(a, t))
                                })).catch((function() {}))
                            }
                        }
                    }
                    var te = function(t) {
                            return Math.trunc(t / 60 / 60 % 60, 10)
                        },
                        ee = function(t) {
                            return Math.trunc(t / 60 % 60, 10)
                        },
                        ne = function(t) {
                            return Math.trunc(t % 60, 10)
                        };

                    function ie() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        if (!X(t)) return ie(void 0, e, n);
                        var i = function(t) {
                                return "0".concat(t).slice(-2)
                            },
                            r = te(t),
                            o = ee(t),
                            a = ne(t);
                        return r = e || r > 0 ? "".concat(r, ":") : "", "".concat(n && t > 0 ? "-" : "").concat(r).concat(i(o), ":").concat(i(a))
                    }
                    var re = {
                        getIconUrl: function() {
                            var t = new URL(this.config.iconUrl, window.location).host !== window.location.host || ct.isIE && !window.svg4everybody;
                            return {
                                url: this.config.iconUrl,
                                cors: t
                            }
                        },
                        findElements: function() {
                            try {
                                return this.elements.controls = Ot.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = {
                                    play: kt.call(this, this.config.selectors.buttons.play),
                                    pause: Ot.call(this, this.config.selectors.buttons.pause),
                                    restart: Ot.call(this, this.config.selectors.buttons.restart),
                                    rewind: Ot.call(this, this.config.selectors.buttons.rewind),
                                    fastForward: Ot.call(this, this.config.selectors.buttons.fastForward),
                                    mute: Ot.call(this, this.config.selectors.buttons.mute),
                                    pip: Ot.call(this, this.config.selectors.buttons.pip),
                                    airplay: Ot.call(this, this.config.selectors.buttons.airplay),
                                    settings: Ot.call(this, this.config.selectors.buttons.settings),
                                    captions: Ot.call(this, this.config.selectors.buttons.captions),
                                    fullscreen: Ot.call(this, this.config.selectors.buttons.fullscreen)
                                }, this.elements.progress = Ot.call(this, this.config.selectors.progress), this.elements.inputs = {
                                    seek: Ot.call(this, this.config.selectors.inputs.seek),
                                    volume: Ot.call(this, this.config.selectors.inputs.volume)
                                }, this.elements.display = {
                                    buffer: Ot.call(this, this.config.selectors.display.buffer),
                                    currentTime: Ot.call(this, this.config.selectors.display.currentTime),
                                    duration: Ot.call(this, this.config.selectors.display.duration)
                                }, $(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(".".concat(this.config.classNames.tooltip))), !0
                            } catch (t) {
                                return this.debug.warn("It looks like there is a problem with your custom controls HTML", t), this.toggleNativeControls(!0), !1
                            }
                        },
                        createIcon: function(t, e) {
                            var n = re.getIconUrl.call(this),
                                i = "".concat(n.cors ? "" : n.url, "#").concat(this.config.iconPrefix),
                                r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                            ft(r, lt(e, {
                                "aria-hidden": "true",
                                focusable: "false"
                            }));
                            var o = document.createElementNS("http://www.w3.org/2000/svg", "use"),
                                a = "".concat(i, "-").concat(t);
                            return "href" in o && o.setAttributeNS("http://www.w3.org/1999/xlink", "href", a), o.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a), r.appendChild(o), r
                        },
                        createLabel: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = Qt(t, this.config);
                            return dt("span", a(a({}, e), {}, {
                                class: [e.class, this.config.classNames.hidden].filter(Boolean).join(" ")
                            }), n)
                        },
                        createBadge: function(t) {
                            if (ot(t)) return null;
                            var e = dt("span", {
                                class: this.config.classNames.menu.value
                            });
                            return e.appendChild(dt("span", {
                                class: this.config.classNames.menu.badge
                            }, t)), e
                        },
                        createButton: function(t, e) {
                            var n = this,
                                i = lt({}, e),
                                r = function() {
                                    var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();
                                    return (t = Xt(t)).charAt(0).toLowerCase() + t.slice(1)
                                }(t),
                                o = {
                                    element: "button",
                                    toggle: !1,
                                    label: null,
                                    icon: null,
                                    labelPressed: null,
                                    iconPressed: null
                                };
                            switch (["element", "icon", "label"].forEach((function(t) {
                                    Object.keys(i).includes(t) && (o[t] = i[t], delete i[t])
                                })), "button" !== o.element || Object.keys(i).includes("type") || (i.type = "button"), Object.keys(i).includes("class") ? i.class.split(" ").some((function(t) {
                                    return t === n.config.classNames.control
                                })) || lt(i, {
                                    class: "".concat(i.class, " ").concat(this.config.classNames.control)
                                }) : i.class = this.config.classNames.control, t) {
                                case "play":
                                    o.toggle = !0, o.label = "play", o.labelPressed = "pause", o.icon = "play", o.iconPressed = "pause";
                                    break;
                                case "mute":
                                    o.toggle = !0, o.label = "mute", o.labelPressed = "unmute", o.icon = "volume", o.iconPressed = "muted";
                                    break;
                                case "captions":
                                    o.toggle = !0, o.label = "enableCaptions", o.labelPressed = "disableCaptions", o.icon = "captions-off", o.iconPressed = "captions-on";
                                    break;
                                case "fullscreen":
                                    o.toggle = !0, o.label = "enterFullscreen", o.labelPressed = "exitFullscreen", o.icon = "enter-fullscreen", o.iconPressed = "exit-fullscreen";
                                    break;
                                case "play-large":
                                    i.class += " ".concat(this.config.classNames.control, "--overlaid"), r = "play", o.label = "play", o.icon = "play";
                                    break;
                                default:
                                    ot(o.label) && (o.label = r), ot(o.icon) && (o.icon = t)
                            }
                            var a = dt(o.element);
                            return o.toggle ? (a.appendChild(re.createIcon.call(this, o.iconPressed, {
                                class: "icon--pressed"
                            })), a.appendChild(re.createIcon.call(this, o.icon, {
                                class: "icon--not-pressed"
                            })), a.appendChild(re.createLabel.call(this, o.labelPressed, {
                                class: "label--pressed"
                            })), a.appendChild(re.createLabel.call(this, o.label, {
                                class: "label--not-pressed"
                            }))) : (a.appendChild(re.createIcon.call(this, o.icon)), a.appendChild(re.createLabel.call(this, o.label))), lt(i, yt(this.config.selectors.buttons[r], i)), ft(a, i), "play" === r ? (K(this.elements.buttons[r]) || (this.elements.buttons[r] = []), this.elements.buttons[r].push(a)) : this.elements.buttons[r] = a, a
                        },
                        createRange: function(t, e) {
                            var n = dt("input", lt(yt(this.config.selectors.inputs[t]), {
                                type: "range",
                                min: 0,
                                max: 100,
                                step: .01,
                                value: 0,
                                autocomplete: "off",
                                role: "slider",
                                "aria-label": Qt(t, this.config),
                                "aria-valuemin": 0,
                                "aria-valuemax": 100,
                                "aria-valuenow": 0
                            }, e));
                            return this.elements.inputs[t] = n, re.updateRangeFill.call(this, n), R.setup(n), n
                        },
                        createProgress: function(t, e) {
                            var n = dt("progress", lt(yt(this.config.selectors.display[t]), {
                                min: 0,
                                max: 100,
                                value: 0,
                                role: "progressbar",
                                "aria-hidden": !0
                            }, e));
                            if ("volume" !== t) {
                                n.appendChild(dt("span", null, "0"));
                                var i = {
                                        played: "played",
                                        buffer: "buffered"
                                    } [t],
                                    r = i ? Qt(i, this.config) : "";
                                n.innerText = "% ".concat(r.toLowerCase())
                            }
                            return this.elements.display[t] = n, n
                        },
                        createTime: function(t, e) {
                            var n = yt(this.config.selectors.display[t], e),
                                i = dt("div", lt(n, {
                                    class: "".concat(n.class ? n.class : "", " ").concat(this.config.classNames.display.time, " ").trim(),
                                    "aria-label": Qt(t, this.config)
                                }), "00:00");
                            return this.elements.display[t] = i, i
                        },
                        bindMenuItemShortcuts: function(t, e) {
                            var n = this;
                            Pt.call(this, t, "keydown keyup", (function(i) {
                                if ([32, 38, 39, 40].includes(i.which) && (i.preventDefault(), i.stopPropagation(), "keydown" !== i.type)) {
                                    var r, o = xt(t, '[role="menuitemradio"]');
                                    !o && [32, 39].includes(i.which) ? re.showMenuPanel.call(n, e, !0) : 32 !== i.which && (40 === i.which || o && 39 === i.which ? (r = t.nextElementSibling, $(r) || (r = t.parentNode.firstElementChild)) : (r = t.previousElementSibling, $(r) || (r = t.parentNode.lastElementChild)), Tt.call(n, r, !0))
                                }
                            }), !1), Pt.call(this, t, "keyup", (function(t) {
                                13 === t.which && re.focusFirstMenuItem.call(n, null, !0)
                            }))
                        },
                        createMenuItem: function(t) {
                            var e = this,
                                n = t.value,
                                i = t.list,
                                r = t.type,
                                o = t.title,
                                a = t.badge,
                                s = void 0 === a ? null : a,
                                c = t.checked,
                                u = void 0 !== c && c,
                                l = yt(this.config.selectors.inputs[r]),
                                h = dt("button", lt(l, {
                                    type: "button",
                                    role: "menuitemradio",
                                    class: "".concat(this.config.classNames.control, " ").concat(l.class ? l.class : "").trim(),
                                    "aria-checked": u,
                                    value: n
                                })),
                                f = dt("span");
                            f.innerHTML = o, $(s) && f.appendChild(s), h.appendChild(f), Object.defineProperty(h, "checked", {
                                enumerable: !0,
                                get: function() {
                                    return "true" === h.getAttribute("aria-checked")
                                },
                                set: function(t) {
                                    t && Array.from(h.parentNode.children).filter((function(t) {
                                        return xt(t, '[role="menuitemradio"]')
                                    })).forEach((function(t) {
                                        return t.setAttribute("aria-checked", "false")
                                    })), h.setAttribute("aria-checked", t ? "true" : "false")
                                }
                            }), this.listeners.bind(h, "click keyup", (function(t) {
                                if (!et(t) || 32 === t.which) {
                                    switch (t.preventDefault(), t.stopPropagation(), h.checked = !0, r) {
                                        case "language":
                                            e.currentTrack = Number(n);
                                            break;
                                        case "quality":
                                            e.quality = n;
                                            break;
                                        case "speed":
                                            e.speed = parseFloat(n)
                                    }
                                    re.showMenuPanel.call(e, "home", et(t))
                                }
                            }), r, !1), re.bindMenuItemShortcuts.call(this, h, r), i.appendChild(h)
                        },
                        formatTime: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            return X(t) ? ie(t, te(this.duration) > 0, e) : t
                        },
                        updateTimeDisplay: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            $(t) && X(e) && (t.innerText = re.formatTime(e, n))
                        },
                        updateVolume: function() {
                            this.supported.ui && ($(this.elements.inputs.volume) && re.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), $(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume))
                        },
                        setRange: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            $(t) && (t.value = e, re.updateRangeFill.call(this, t))
                        },
                        updateProgress: function(t) {
                            var e = this;
                            if (this.supported.ui && tt(t)) {
                                var n, i, r = 0;
                                if (t) switch (t.type) {
                                    case "timeupdate":
                                    case "seeking":
                                    case "seeked":
                                        n = this.currentTime, i = this.duration, r = 0 === n || 0 === i || Number.isNaN(n) || Number.isNaN(i) ? 0 : (n / i * 100).toFixed(2), "timeupdate" === t.type && re.setRange.call(this, this.elements.inputs.seek, r);
                                        break;
                                    case "playing":
                                    case "progress":
                                        ! function(t, n) {
                                            var i = X(n) ? n : 0,
                                                r = $(t) ? t : e.elements.display.buffer;
                                            if ($(r)) {
                                                r.value = i;
                                                var o = r.getElementsByTagName("span")[0];
                                                $(o) && (o.childNodes[0].nodeValue = i)
                                            }
                                        }(this.elements.display.buffer, 100 * this.buffered)
                                }
                            }
                        },
                        updateRangeFill: function(t) {
                            var e = tt(t) ? t.target : t;
                            if ($(e) && "range" === e.getAttribute("type")) {
                                if (xt(e, this.config.selectors.inputs.seek)) {
                                    e.setAttribute("aria-valuenow", this.currentTime);
                                    var n = re.formatTime(this.currentTime),
                                        i = re.formatTime(this.duration),
                                        r = Qt("seekLabel", this.config);
                                    e.setAttribute("aria-valuetext", r.replace("{currentTime}", n).replace("{duration}", i))
                                } else if (xt(e, this.config.selectors.inputs.volume)) {
                                    var o = 100 * e.value;
                                    e.setAttribute("aria-valuenow", o), e.setAttribute("aria-valuetext", "".concat(o.toFixed(1), "%"))
                                } else e.setAttribute("aria-valuenow", e.value);
                                ct.isWebkit && e.style.setProperty("--value", "".concat(e.value / e.max * 100, "%"))
                            }
                        },
                        updateSeekTooltip: function(t) {
                            var e = this;
                            if (this.config.tooltips.seek && $(this.elements.inputs.seek) && $(this.elements.display.seekTooltip) && 0 !== this.duration) {
                                var n = "".concat(this.config.classNames.tooltip, "--visible"),
                                    i = function(t) {
                                        return _t(e.elements.display.seekTooltip, n, t)
                                    };
                                if (this.touch) i(!1);
                                else {
                                    var r = 0,
                                        o = this.elements.progress.getBoundingClientRect();
                                    if (tt(t)) r = 100 / o.width * (t.pageX - o.left);
                                    else {
                                        if (!wt(this.elements.display.seekTooltip, n)) return;
                                        r = parseFloat(this.elements.display.seekTooltip.style.left, 10)
                                    }
                                    r < 0 ? r = 0 : r > 100 && (r = 100), re.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * r), this.elements.display.seekTooltip.style.left = "".concat(r, "%"), tt(t) && ["mouseenter", "mouseleave"].includes(t.type) && i("mouseenter" === t.type)
                                }
                            }
                        },
                        timeUpdate: function(t) {
                            var e = !$(this.elements.display.duration) && this.config.invertTime;
                            re.updateTimeDisplay.call(this, this.elements.display.currentTime, e ? this.duration - this.currentTime : this.currentTime, e), t && "timeupdate" === t.type && this.media.seeking || re.updateProgress.call(this, t)
                        },
                        durationUpdate: function() {
                            if (this.supported.ui && (this.config.invertTime || !this.currentTime)) {
                                if (this.duration >= Math.pow(2, 32)) return bt(this.elements.display.currentTime, !0), void bt(this.elements.progress, !0);
                                $(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
                                var t = $(this.elements.display.duration);
                                !t && this.config.displayDuration && this.paused && re.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), t && re.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), re.updateSeekTooltip.call(this)
                            }
                        },
                        toggleMenuButton: function(t, e) {
                            bt(this.elements.settings.buttons[t], !e)
                        },
                        updateSetting: function(t, e, n) {
                            var i = this.elements.settings.panels[t],
                                r = null,
                                o = e;
                            if ("captions" === t) r = this.currentTrack;
                            else {
                                if (r = ot(n) ? this[t] : n, ot(r) && (r = this.config[t].default), !ot(this.options[t]) && !this.options[t].includes(r)) return void this.debug.warn("Unsupported value of '".concat(r, "' for ").concat(t));
                                if (!this.config[t].options.includes(r)) return void this.debug.warn("Disabled value of '".concat(r, "' for ").concat(t))
                            }
                            if ($(o) || (o = i && i.querySelector('[role="menu"]')), $(o)) {
                                this.elements.settings.buttons[t].querySelector(".".concat(this.config.classNames.menu.value)).innerHTML = re.getLabel.call(this, t, r);
                                var a = o && o.querySelector('[value="'.concat(r, '"]'));
                                $(a) && (a.checked = !0)
                            }
                        },
                        getLabel: function(t, e) {
                            switch (t) {
                                case "speed":
                                    return 1 === e ? Qt("normal", this.config) : "".concat(e, "&times;");
                                case "quality":
                                    if (X(e)) {
                                        var n = Qt("qualityLabel.".concat(e), this.config);
                                        return n.length ? n : "".concat(e, "p")
                                    }
                                    return Yt(e);
                                case "captions":
                                    return se.getLabel.call(this);
                                default:
                                    return null
                            }
                        },
                        setQualityMenu: function(t) {
                            var e = this;
                            if ($(this.elements.settings.panels.quality)) {
                                var n = this.elements.settings.panels.quality.querySelector('[role="menu"]');
                                K(t) && (this.options.quality = Ut(t).filter((function(t) {
                                    return e.config.quality.options.includes(t)
                                })));
                                var i = !ot(this.options.quality) && this.options.quality.length > 1;
                                if (re.toggleMenuButton.call(this, "quality", i), gt(n), re.checkMenu.call(this), i) {
                                    var r = function(t) {
                                        var n = Qt("qualityBadge.".concat(t), e.config);
                                        return n.length ? re.createBadge.call(e, n) : null
                                    };
                                    this.options.quality.sort((function(t, n) {
                                        var i = e.config.quality.options;
                                        return i.indexOf(t) > i.indexOf(n) ? 1 : -1
                                    })).forEach((function(t) {
                                        re.createMenuItem.call(e, {
                                            value: t,
                                            list: n,
                                            type: "quality",
                                            title: re.getLabel.call(e, "quality", t),
                                            badge: r(t)
                                        })
                                    })), re.updateSetting.call(this, "quality", n)
                                }
                            }
                        },
                        setCaptionsMenu: function() {
                            var t = this;
                            if ($(this.elements.settings.panels.captions)) {
                                var e = this.elements.settings.panels.captions.querySelector('[role="menu"]'),
                                    n = se.getTracks.call(this),
                                    i = Boolean(n.length);
                                if (re.toggleMenuButton.call(this, "captions", i), gt(e), re.checkMenu.call(this), i) {
                                    var r = n.map((function(n, i) {
                                        return {
                                            value: i,
                                            checked: t.captions.toggled && t.currentTrack === i,
                                            title: se.getLabel.call(t, n),
                                            badge: n.language && re.createBadge.call(t, n.language.toUpperCase()),
                                            list: e,
                                            type: "language"
                                        }
                                    }));
                                    r.unshift({
                                        value: -1,
                                        checked: !this.captions.toggled,
                                        title: Qt("disabled", this.config),
                                        list: e,
                                        type: "language"
                                    }), r.forEach(re.createMenuItem.bind(this)), re.updateSetting.call(this, "captions", e)
                                }
                            }
                        },
                        setSpeedMenu: function() {
                            var t = this;
                            if ($(this.elements.settings.panels.speed)) {
                                var e = this.elements.settings.panels.speed.querySelector('[role="menu"]');
                                this.options.speed = this.options.speed.filter((function(e) {
                                    return e >= t.minimumSpeed && e <= t.maximumSpeed
                                }));
                                var n = !ot(this.options.speed) && this.options.speed.length > 1;
                                re.toggleMenuButton.call(this, "speed", n), gt(e), re.checkMenu.call(this), n && (this.options.speed.forEach((function(n) {
                                    re.createMenuItem.call(t, {
                                        value: n,
                                        list: e,
                                        type: "speed",
                                        title: re.getLabel.call(t, "speed", n)
                                    })
                                })), re.updateSetting.call(this, "speed", e))
                            }
                        },
                        checkMenu: function() {
                            var t = this.elements.settings.buttons,
                                e = !ot(t) && Object.values(t).some((function(t) {
                                    return !t.hidden
                                }));
                            bt(this.elements.settings.menu, !e)
                        },
                        focusFirstMenuItem: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            if (!this.elements.settings.popup.hidden) {
                                var n = t;
                                $(n) || (n = Object.values(this.elements.settings.panels).find((function(t) {
                                    return !t.hidden
                                })));
                                var i = n.querySelector('[role^="menuitem"]');
                                Tt.call(this, i, e)
                            }
                        },
                        toggleMenu: function(t) {
                            var e = this.elements.settings.popup,
                                n = this.elements.buttons.settings;
                            if ($(e) && $(n)) {
                                var i = e.hidden,
                                    r = i;
                                if (J(t)) r = t;
                                else if (et(t) && 27 === t.which) r = !1;
                                else if (tt(t)) {
                                    var o = Q(t.composedPath) ? t.composedPath()[0] : t.target,
                                        a = e.contains(o);
                                    if (a || !a && t.target !== n && r) return
                                }
                                n.setAttribute("aria-expanded", r), bt(e, !r), _t(this.elements.container, this.config.classNames.menu.open, r), r && et(t) ? re.focusFirstMenuItem.call(this, null, !0) : r || i || Tt.call(this, n, et(t))
                            }
                        },
                        getMenuSize: function(t) {
                            var e = t.cloneNode(!0);
                            e.style.position = "absolute", e.style.opacity = 0, e.removeAttribute("hidden"), t.parentNode.appendChild(e);
                            var n = e.scrollWidth,
                                i = e.scrollHeight;
                            return mt(e), {
                                width: n,
                                height: i
                            }
                        },
                        showMenuPanel: function() {
                            var t = this,
                                e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                i = this.elements.container.querySelector("#plyr-settings-".concat(this.id, "-").concat(e));
                            if ($(i)) {
                                var r = i.parentNode,
                                    o = Array.from(r.children).find((function(t) {
                                        return !t.hidden
                                    }));
                                if (Mt.transitions && !Mt.reducedMotion) {
                                    r.style.width = "".concat(o.scrollWidth, "px"), r.style.height = "".concat(o.scrollHeight, "px");
                                    var a = re.getMenuSize.call(this, i),
                                        s = function e(n) {
                                            n.target === r && ["width", "height"].includes(n.propertyName) && (r.style.width = "", r.style.height = "", At.call(t, r, at, e))
                                        };
                                    Pt.call(this, r, at, s), r.style.width = "".concat(a.width, "px"), r.style.height = "".concat(a.height, "px")
                                }
                                bt(o, !0), bt(i, !1), re.focusFirstMenuItem.call(this, i, n)
                            }
                        },
                        setDownloadUrl: function() {
                            var t = this.elements.buttons.download;
                            $(t) && t.setAttribute("href", this.download)
                        },
                        create: function(t) {
                            var e = this,
                                n = re.bindMenuItemShortcuts,
                                i = re.createButton,
                                r = re.createProgress,
                                o = re.createRange,
                                a = re.createTime,
                                s = re.setQualityMenu,
                                c = re.setSpeedMenu,
                                u = re.showMenuPanel;
                            this.elements.controls = null, K(this.config.controls) && this.config.controls.includes("play-large") && this.elements.container.appendChild(i.call(this, "play-large"));
                            var l = dt("div", yt(this.config.selectors.controls.wrapper));
                            this.elements.controls = l;
                            var h = {
                                class: "plyr__controls__item"
                            };
                            return Ut(K(this.config.controls) ? this.config.controls : []).forEach((function(s) {
                                if ("restart" === s && l.appendChild(i.call(e, "restart", h)), "rewind" === s && l.appendChild(i.call(e, "rewind", h)), "play" === s && l.appendChild(i.call(e, "play", h)), "fast-forward" === s && l.appendChild(i.call(e, "fast-forward", h)), "progress" === s) {
                                    var c = dt("div", {
                                            class: "".concat(h.class, " plyr__progress__container")
                                        }),
                                        f = dt("div", yt(e.config.selectors.progress));
                                    if (f.appendChild(o.call(e, "seek", {
                                            id: "plyr-seek-".concat(t.id)
                                        })), f.appendChild(r.call(e, "buffer")), e.config.tooltips.seek) {
                                        var d = dt("span", {
                                            class: e.config.classNames.tooltip
                                        }, "00:00");
                                        f.appendChild(d), e.elements.display.seekTooltip = d
                                    }
                                    e.elements.progress = f, c.appendChild(e.elements.progress), l.appendChild(c)
                                }
                                if ("current-time" === s && l.appendChild(a.call(e, "currentTime", h)), "duration" === s && l.appendChild(a.call(e, "duration", h)), "mute" === s || "volume" === s) {
                                    var p = e.elements.volume;
                                    if ($(p) && l.contains(p) || (p = dt("div", lt({}, h, {
                                            class: "".concat(h.class, " plyr__volume").trim()
                                        })), e.elements.volume = p, l.appendChild(p)), "mute" === s && p.appendChild(i.call(e, "mute")), "volume" === s && !ct.isIos) {
                                        var m = {
                                            max: 1,
                                            step: .05,
                                            value: e.config.volume
                                        };
                                        p.appendChild(o.call(e, "volume", lt(m, {
                                            id: "plyr-volume-".concat(t.id)
                                        })))
                                    }
                                }
                                if ("captions" === s && l.appendChild(i.call(e, "captions", h)), "settings" === s && !ot(e.config.settings)) {
                                    var g = dt("div", lt({}, h, {
                                        class: "".concat(h.class, " plyr__menu").trim(),
                                        hidden: ""
                                    }));
                                    g.appendChild(i.call(e, "settings", {
                                        "aria-haspopup": !0,
                                        "aria-controls": "plyr-settings-".concat(t.id),
                                        "aria-expanded": !1
                                    }));
                                    var v = dt("div", {
                                            class: "plyr__menu__container",
                                            id: "plyr-settings-".concat(t.id),
                                            hidden: ""
                                        }),
                                        y = dt("div"),
                                        b = dt("div", {
                                            id: "plyr-settings-".concat(t.id, "-home")
                                        }),
                                        _ = dt("div", {
                                            role: "menu"
                                        });
                                    b.appendChild(_), y.appendChild(b), e.elements.settings.panels.home = b, e.config.settings.forEach((function(i) {
                                        var r = dt("button", lt(yt(e.config.selectors.buttons.settings), {
                                            type: "button",
                                            class: "".concat(e.config.classNames.control, " ").concat(e.config.classNames.control, "--forward"),
                                            role: "menuitem",
                                            "aria-haspopup": !0,
                                            hidden: ""
                                        }));
                                        n.call(e, r, i), Pt.call(e, r, "click", (function() {
                                            u.call(e, i, !1)
                                        }));
                                        var o = dt("span", null, Qt(i, e.config)),
                                            a = dt("span", {
                                                class: e.config.classNames.menu.value
                                            });
                                        a.innerHTML = t[i], o.appendChild(a), r.appendChild(o), _.appendChild(r);
                                        var s = dt("div", {
                                                id: "plyr-settings-".concat(t.id, "-").concat(i),
                                                hidden: ""
                                            }),
                                            c = dt("button", {
                                                type: "button",
                                                class: "".concat(e.config.classNames.control, " ").concat(e.config.classNames.control, "--back")
                                            });
                                        c.appendChild(dt("span", {
                                            "aria-hidden": !0
                                        }, Qt(i, e.config))), c.appendChild(dt("span", {
                                            class: e.config.classNames.hidden
                                        }, Qt("menuBack", e.config))), Pt.call(e, s, "keydown", (function(t) {
                                            37 === t.which && (t.preventDefault(), t.stopPropagation(), u.call(e, "home", !0))
                                        }), !1), Pt.call(e, c, "click", (function() {
                                            u.call(e, "home", !1)
                                        })), s.appendChild(c), s.appendChild(dt("div", {
                                            role: "menu"
                                        })), y.appendChild(s), e.elements.settings.buttons[i] = r, e.elements.settings.panels[i] = s
                                    })), v.appendChild(y), g.appendChild(v), l.appendChild(g), e.elements.settings.popup = v, e.elements.settings.menu = g
                                }
                                if ("pip" === s && Mt.pip && l.appendChild(i.call(e, "pip", h)), "airplay" === s && Mt.airplay && l.appendChild(i.call(e, "airplay", h)), "download" === s) {
                                    var w = lt({}, h, {
                                        element: "a",
                                        href: e.download,
                                        target: "_blank"
                                    });
                                    e.isHTML5 && (w.download = "");
                                    var x = e.config.urls.download;
                                    !rt(x) && e.isEmbed && lt(w, {
                                        icon: "logo-".concat(e.provider),
                                        label: e.provider
                                    }), l.appendChild(i.call(e, "download", w))
                                }
                                "fullscreen" === s && l.appendChild(i.call(e, "fullscreen", h))
                            })), this.isHTML5 && s.call(this, Bt.getQualityOptions.call(this)), c.call(this), l
                        },
                        inject: function() {
                            var t = this;
                            if (this.config.loadSprite) {
                                var e = re.getIconUrl.call(this);
                                e.cors && $t(e.url, "sprite-plyr")
                            }
                            this.id = Math.floor(1e4 * Math.random());
                            var n = null;
                            this.elements.controls = null;
                            var i, r, o = {
                                    id: this.id,
                                    seektime: this.config.seekTime,
                                    title: this.config.title
                                },
                                a = !0;
                            if (Q(this.config.controls) && (this.config.controls = this.config.controls.call(this, o)), this.config.controls || (this.config.controls = []), $(this.config.controls) || G(this.config.controls) ? n = this.config.controls : (n = re.create.call(this, {
                                    id: this.id,
                                    seektime: this.config.seekTime,
                                    speed: this.speed,
                                    quality: this.quality,
                                    captions: se.getLabel.call(this)
                                }), a = !1), a && G(this.config.controls) && (i = n, Object.entries(o).forEach((function(t) {
                                    var e = c(t, 2),
                                        n = e[0],
                                        r = e[1];
                                    i = Wt(i, "{".concat(n, "}"), r)
                                })), n = i), G(this.config.selectors.controls.container) && (r = document.querySelector(this.config.selectors.controls.container)), $(r) || (r = this.elements.container), r[$(n) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", n), $(this.elements.controls) || re.findElements.call(this), !ot(this.elements.buttons)) {
                                var s = function(e) {
                                    var n = t.config.classNames.controlPressed;
                                    Object.defineProperty(e, "pressed", {
                                        enumerable: !0,
                                        get: function() {
                                            return wt(e, n)
                                        },
                                        set: function() {
                                            _t(e, n, arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
                                        }
                                    })
                                };
                                Object.values(this.elements.buttons).filter(Boolean).forEach((function(t) {
                                    K(t) || Z(t) ? Array.from(t).filter(Boolean).forEach(s) : s(t)
                                }))
                            }
                            if (ct.isEdge && st(r), this.config.tooltips.controls) {
                                var u = this.config,
                                    l = u.classNames,
                                    h = u.selectors,
                                    f = "".concat(h.controls.wrapper, " ").concat(h.labels, " .").concat(l.hidden),
                                    d = kt.call(this, f);
                                Array.from(d).forEach((function(e) {
                                    _t(e, t.config.classNames.hidden, !1), _t(e, t.config.classNames.tooltip, !0)
                                }))
                            }
                        }
                    };

                    function oe(t) {
                        var e = t;
                        if (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) {
                            var n = document.createElement("a");
                            n.href = e, e = n.href
                        }
                        try {
                            return new URL(e)
                        } catch (t) {
                            return null
                        }
                    }

                    function ae(t) {
                        var e = new URLSearchParams;
                        return Y(t) && Object.entries(t).forEach((function(t) {
                            var n = c(t, 2),
                                i = n[0],
                                r = n[1];
                            e.set(i, r)
                        })), e
                    }
                    var se = {
                            setup: function() {
                                if (this.supported.ui)
                                    if (!this.isVideo || this.isYouTube || this.isHTML5 && !Mt.textTracks) K(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && re.setCaptionsMenu.call(this);
                                    else {
                                        if ($(this.elements.captions) || (this.elements.captions = dt("div", yt(this.config.selectors.captions)), function(t, e) {
                                                $(t) && $(e) && e.parentNode.insertBefore(t, e.nextSibling)
                                            }(this.elements.captions, this.elements.wrapper)), ct.isIE && window.URL) {
                                            var t = this.media.querySelectorAll("track");
                                            Array.from(t).forEach((function(t) {
                                                var e = t.getAttribute("src"),
                                                    n = oe(e);
                                                null !== n && n.hostname !== window.location.href.hostname && ["http:", "https:"].includes(n.protocol) && Zt(e, "blob").then((function(e) {
                                                    t.setAttribute("src", window.URL.createObjectURL(e))
                                                })).catch((function() {
                                                    mt(t)
                                                }))
                                            }))
                                        }
                                        var e = Ut((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map((function(t) {
                                                return t.split("-")[0]
                                            }))),
                                            n = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
                                        "auto" === n && (n = c(e, 1)[0]);
                                        var i = this.storage.get("captions");
                                        if (J(i) || (i = this.config.captions.active), Object.assign(this.captions, {
                                                toggled: !1,
                                                active: i,
                                                language: n,
                                                languages: e
                                            }), this.isHTML5) {
                                            var r = this.config.captions.update ? "addtrack removetrack" : "removetrack";
                                            Pt.call(this, this.media.textTracks, r, se.update.bind(this))
                                        }
                                        setTimeout(se.update.bind(this), 0)
                                    }
                            },
                            update: function() {
                                var t = this,
                                    e = se.getTracks.call(this, !0),
                                    n = this.captions,
                                    i = n.active,
                                    r = n.language,
                                    o = n.meta,
                                    a = n.currentTrackNode,
                                    s = Boolean(e.find((function(t) {
                                        return t.language === r
                                    })));
                                this.isHTML5 && this.isVideo && e.filter((function(t) {
                                    return !o.get(t)
                                })).forEach((function(e) {
                                    t.debug.log("Track added", e), o.set(e, {
                                        default: "showing" === e.mode
                                    }), "showing" === e.mode && (e.mode = "hidden"), Pt.call(t, e, "cuechange", (function() {
                                        return se.updateCues.call(t)
                                    }))
                                })), (s && this.language !== r || !e.includes(a)) && (se.setLanguage.call(this, r), se.toggle.call(this, i && s)), _t(this.elements.container, this.config.classNames.captions.enabled, !ot(e)), K(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && re.setCaptionsMenu.call(this)
                            },
                            toggle: function(t) {
                                var e = this,
                                    n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                if (this.supported.ui) {
                                    var i = this.captions.toggled,
                                        r = this.config.classNames.captions.active,
                                        o = W(t) ? !i : t;
                                    if (o !== i) {
                                        if (n || (this.captions.active = o, this.storage.set({
                                                captions: o
                                            })), !this.language && o && !n) {
                                            var a = se.getTracks.call(this),
                                                s = se.findTrack.call(this, [this.captions.language].concat(u(this.captions.languages)), !0);
                                            return this.captions.language = s.language, void se.set.call(this, a.indexOf(s))
                                        }
                                        this.elements.buttons.captions && (this.elements.buttons.captions.pressed = o), _t(this.elements.container, r, o), this.captions.toggled = o, re.updateSetting.call(this, "captions"), Nt.call(this, this.media, o ? "captionsenabled" : "captionsdisabled")
                                    }
                                    setTimeout((function() {
                                        o && e.captions.toggled && (e.captions.currentTrackNode.mode = "hidden")
                                    }))
                                }
                            },
                            set: function(t) {
                                var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                    n = se.getTracks.call(this);
                                if (-1 !== t)
                                    if (X(t))
                                        if (t in n) {
                                            if (this.captions.currentTrack !== t) {
                                                this.captions.currentTrack = t;
                                                var i = n[t],
                                                    r = (i || {}).language;
                                                this.captions.currentTrackNode = i, re.updateSetting.call(this, "captions"), e || (this.captions.language = r, this.storage.set({
                                                    language: r
                                                })), this.isVimeo && this.embed.enableTextTrack(r), Nt.call(this, this.media, "languagechange")
                                            }
                                            se.toggle.call(this, !0, e), this.isHTML5 && this.isVideo && se.updateCues.call(this)
                                        } else this.debug.warn("Track not found", t);
                                else this.debug.warn("Invalid caption argument", t);
                                else se.toggle.call(this, !1, e)
                            },
                            setLanguage: function(t) {
                                var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                if (G(t)) {
                                    var n = t.toLowerCase();
                                    this.captions.language = n;
                                    var i = se.getTracks.call(this),
                                        r = se.findTrack.call(this, [n]);
                                    se.set.call(this, i.indexOf(r), e)
                                } else this.debug.warn("Invalid language argument", t)
                            },
                            getTracks: function() {
                                var t = this,
                                    e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                return Array.from((this.media || {}).textTracks || []).filter((function(n) {
                                    return !t.isHTML5 || e || t.captions.meta.has(n)
                                })).filter((function(t) {
                                    return ["captions", "subtitles"].includes(t.kind)
                                }))
                            },
                            findTrack: function(t) {
                                var e, n = this,
                                    i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    r = se.getTracks.call(this),
                                    o = function(t) {
                                        return Number((n.captions.meta.get(t) || {}).default)
                                    },
                                    a = Array.from(r).sort((function(t, e) {
                                        return o(e) - o(t)
                                    }));
                                return t.every((function(t) {
                                    return !(e = a.find((function(e) {
                                        return e.language === t
                                    })))
                                })), e || (i ? a[0] : void 0)
                            },
                            getCurrentTrack: function() {
                                return se.getTracks.call(this)[this.currentTrack]
                            },
                            getLabel: function(t) {
                                var e = t;
                                return !nt(e) && Mt.textTracks && this.captions.toggled && (e = se.getCurrentTrack.call(this)), nt(e) ? ot(e.label) ? ot(e.language) ? Qt("enabled", this.config) : t.language.toUpperCase() : e.label : Qt("disabled", this.config)
                            },
                            updateCues: function(t) {
                                if (this.supported.ui)
                                    if ($(this.elements.captions))
                                        if (W(t) || Array.isArray(t)) {
                                            var e = t;
                                            if (!e) {
                                                var n = se.getCurrentTrack.call(this);
                                                e = Array.from((n || {}).activeCues || []).map((function(t) {
                                                    return t.getCueAsHTML()
                                                })).map(Gt)
                                            }
                                            var i = e.map((function(t) {
                                                return t.trim()
                                            })).join("\n");
                                            if (i !== this.elements.captions.innerHTML) {
                                                gt(this.elements.captions);
                                                var r = dt("span", yt(this.config.selectors.caption));
                                                r.innerHTML = i, this.elements.captions.appendChild(r), Nt.call(this, this.media, "cuechange")
                                            }
                                        } else this.debug.warn("updateCues: Invalid input", t);
                                else this.debug.warn("No captions element to render to")
                            }
                        },
                        ce = {
                            enabled: !0,
                            title: "",
                            debug: !1,
                            autoplay: !1,
                            autopause: !0,
                            playsinline: !0,
                            seekTime: 10,
                            volume: 1,
                            muted: !1,
                            duration: null,
                            displayDuration: !0,
                            invertTime: !0,
                            toggleInvert: !0,
                            ratio: null,
                            clickToPlay: !0,
                            hideControls: !0,
                            resetOnEnd: !1,
                            disableContextMenu: !0,
                            loadSprite: !0,
                            iconPrefix: "plyr",
                            iconUrl: "https://cdn.plyr.io/3.6.2/plyr.svg",
                            blankVideo: "https://cdn.plyr.io/static/blank.mp4",
                            quality: {
                                default: 576,
                                options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
                                forced: !1,
                                onChange: null
                            },
                            loop: {
                                active: !1
                            },
                            speed: {
                                selected: 1,
                                options: [.5, .75, 1, 1.25, 1.5, 1.75, 2, 4]
                            },
                            keyboard: {
                                focused: !0,
                                global: !1
                            },
                            tooltips: {
                                controls: !1,
                                seek: !0
                            },
                            captions: {
                                active: !1,
                                language: "auto",
                                update: !1
                            },
                            fullscreen: {
                                enabled: !0,
                                fallback: !0,
                                iosNative: !1
                            },
                            storage: {
                                enabled: !0,
                                key: "plyr"
                            },
                            controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
                            settings: ["captions", "quality", "speed"],
                            i18n: {
                                restart: "Restart",
                                rewind: "Rewind {seektime}s",
                                play: "Play",
                                pause: "Pause",
                                fastForward: "Forward {seektime}s",
                                seek: "Seek",
                                seekLabel: "{currentTime} of {duration}",
                                played: "Played",
                                buffered: "Buffered",
                                currentTime: "Current time",
                                duration: "Duration",
                                volume: "Volume",
                                mute: "Mute",
                                unmute: "Unmute",
                                enableCaptions: "Enable captions",
                                disableCaptions: "Disable captions",
                                download: "Download",
                                enterFullscreen: "Enter fullscreen",
                                exitFullscreen: "Exit fullscreen",
                                frameTitle: "Player for {title}",
                                captions: "Captions",
                                settings: "Settings",
                                pip: "PIP",
                                menuBack: "Go back to previous menu",
                                speed: "Speed",
                                normal: "Normal",
                                quality: "Quality",
                                loop: "Loop",
                                start: "Start",
                                end: "End",
                                all: "All",
                                reset: "Reset",
                                disabled: "Disabled",
                                enabled: "Enabled",
                                advertisement: "Ad",
                                qualityBadge: {
                                    2160: "4K",
                                    1440: "HD",
                                    1080: "HD",
                                    720: "HD",
                                    576: "SD",
                                    480: "SD"
                                }
                            },
                            urls: {
                                download: null,
                                vimeo: {
                                    sdk: "https://player.vimeo.com/api/player.js",
                                    iframe: "https://player.vimeo.com/video/{0}?{1}",
                                    api: "https://vimeo.com/api/v2/video/{0}.json"
                                },
                                youtube: {
                                    sdk: "https://www.youtube.com/iframe_api",
                                    api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"
                                },
                                googleIMA: {
                                    sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
                                }
                            },
                            listeners: {
                                seek: null,
                                play: null,
                                pause: null,
                                restart: null,
                                rewind: null,
                                fastForward: null,
                                mute: null,
                                volume: null,
                                captions: null,
                                download: null,
                                fullscreen: null,
                                pip: null,
                                airplay: null,
                                speed: null,
                                quality: null,
                                loop: null,
                                language: null
                            },
                            events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"],
                            selectors: {
                                editable: "input, textarea, select, [contenteditable]",
                                container: ".plyr",
                                controls: {
                                    container: null,
                                    wrapper: ".plyr__controls"
                                },
                                labels: "[data-plyr]",
                                buttons: {
                                    play: '[data-plyr="play"]',
                                    pause: '[data-plyr="pause"]',
                                    restart: '[data-plyr="restart"]',
                                    rewind: '[data-plyr="rewind"]',
                                    fastForward: '[data-plyr="fast-forward"]',
                                    mute: '[data-plyr="mute"]',
                                    captions: '[data-plyr="captions"]',
                                    download: '[data-plyr="download"]',
                                    fullscreen: '[data-plyr="fullscreen"]',
                                    pip: '[data-plyr="pip"]',
                                    airplay: '[data-plyr="airplay"]',
                                    settings: '[data-plyr="settings"]',
                                    loop: '[data-plyr="loop"]'
                                },
                                inputs: {
                                    seek: '[data-plyr="seek"]',
                                    volume: '[data-plyr="volume"]',
                                    speed: '[data-plyr="speed"]',
                                    language: '[data-plyr="language"]',
                                    quality: '[data-plyr="quality"]'
                                },
                                display: {
                                    currentTime: ".plyr__time--current",
                                    duration: ".plyr__time--duration",
                                    buffer: ".plyr__progress__buffer",
                                    loop: ".plyr__progress__loop",
                                    volume: ".plyr__volume--display"
                                },
                                progress: ".plyr__progress",
                                captions: ".plyr__captions",
                                caption: ".plyr__caption"
                            },
                            classNames: {
                                type: "plyr--{0}",
                                provider: "plyr--{0}",
                                video: "plyr__video-wrapper",
                                embed: "plyr__video-embed",
                                videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
                                embedContainer: "plyr__video-embed__container",
                                poster: "plyr__poster",
                                posterEnabled: "plyr__poster-enabled",
                                ads: "plyr__ads",
                                control: "plyr__control",
                                controlPressed: "plyr__control--pressed",
                                playing: "plyr--playing",
                                paused: "plyr--paused",
                                stopped: "plyr--stopped",
                                loading: "plyr--loading",
                                hover: "plyr--hover",
                                tooltip: "plyr__tooltip",
                                cues: "plyr__cues",
                                hidden: "plyr__sr-only",
                                hideControls: "plyr--hide-controls",
                                isIos: "plyr--is-ios",
                                isTouch: "plyr--is-touch",
                                uiSupported: "plyr--full-ui",
                                noTransition: "plyr--no-transition",
                                display: {
                                    time: "plyr__time"
                                },
                                menu: {
                                    value: "plyr__menu__value",
                                    badge: "plyr__badge",
                                    open: "plyr--menu-open"
                                },
                                captions: {
                                    enabled: "plyr--captions-enabled",
                                    active: "plyr--captions-active"
                                },
                                fullscreen: {
                                    enabled: "plyr--fullscreen-enabled",
                                    fallback: "plyr--fullscreen-fallback"
                                },
                                pip: {
                                    supported: "plyr--pip-supported",
                                    active: "plyr--pip-active"
                                },
                                airplay: {
                                    supported: "plyr--airplay-supported",
                                    active: "plyr--airplay-active"
                                },
                                tabFocus: "plyr__tab-focus",
                                previewThumbnails: {
                                    thumbContainer: "plyr__preview-thumb",
                                    thumbContainerShown: "plyr__preview-thumb--is-shown",
                                    imageContainer: "plyr__preview-thumb__image-container",
                                    timeContainer: "plyr__preview-thumb__time-container",
                                    scrubbingContainer: "plyr__preview-scrubbing",
                                    scrubbingContainerShown: "plyr__preview-scrubbing--is-shown"
                                }
                            },
                            attributes: {
                                embed: {
                                    provider: "data-plyr-provider",
                                    id: "data-plyr-embed-id"
                                }
                            },
                            ads: {
                                enabled: !1,
                                publisherId: "",
                                tagUrl: ""
                            },
                            previewThumbnails: {
                                enabled: !1,
                                src: ""
                            },
                            vimeo: {
                                byline: !1,
                                portrait: !1,
                                title: !1,
                                speed: !0,
                                transparent: !1,
                                premium: !1,
                                referrerPolicy: null
                            },
                            youtube: {
                                noCookie: !0,
                                rel: 0,
                                showinfo: 0,
                                iv_load_policy: 3,
                                modestbranding: 1
                            }
                        },
                        ue = "picture-in-picture",
                        le = "inline",
                        he = {
                            html5: "html5",
                            youtube: "youtube",
                            vimeo: "vimeo"
                        },
                        fe = "audio",
                        de = "video",
                        pe = function() {},
                        me = function() {
                            function e() {
                                var n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                t(this, e), this.enabled = window.console && n, this.enabled && this.log("Debugging enabled")
                            }
                            return i(e, [{
                                key: "log",
                                get: function() {
                                    return this.enabled ? Function.prototype.bind.call(console.log, console) : pe
                                }
                            }, {
                                key: "warn",
                                get: function() {
                                    return this.enabled ? Function.prototype.bind.call(console.warn, console) : pe
                                }
                            }, {
                                key: "error",
                                get: function() {
                                    return this.enabled ? Function.prototype.bind.call(console.error, console) : pe
                                }
                            }]), e
                        }(),
                        ge = function() {
                            function e(n) {
                                var i = this;
                                t(this, e), this.player = n, this.prefix = e.prefix, this.property = e.property, this.scrollPosition = {
                                    x: 0,
                                    y: 0
                                }, this.forceFallback = "force" === n.config.fullscreen.fallback, this.player.elements.fullscreen = n.config.fullscreen.container && function(t, e) {
                                    return (Element.prototype.closest || function() {
                                        var t = this;
                                        do {
                                            if (xt.matches(t, e)) return t;
                                            t = t.parentElement || t.parentNode
                                        } while (null !== t && 1 === t.nodeType);
                                        return null
                                    }).call(t, e)
                                }(this.player.elements.container, n.config.fullscreen.container), Pt.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : "".concat(this.prefix, "fullscreenchange"), (function() {
                                    i.onChange()
                                })), Pt.call(this.player, this.player.elements.container, "dblclick", (function(t) {
                                    $(i.player.elements.controls) && i.player.elements.controls.contains(t.target) || i.toggle()
                                })), Pt.call(this, this.player.elements.container, "keydown", (function(t) {
                                    return i.trapFocus(t)
                                })), this.update()
                            }
                            return i(e, [{
                                key: "onChange",
                                value: function() {
                                    if (this.enabled) {
                                        var t = this.player.elements.buttons.fullscreen;
                                        $(t) && (t.pressed = this.active), Nt.call(this.player, this.target, this.active ? "enterfullscreen" : "exitfullscreen", !0)
                                    }
                                }
                            }, {
                                key: "toggleFallback",
                                value: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                    if (t ? this.scrollPosition = {
                                            x: window.scrollX || 0,
                                            y: window.scrollY || 0
                                        } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = t ? "hidden" : "", _t(this.target, this.player.config.classNames.fullscreen.fallback, t), ct.isIos) {
                                        var e = document.head.querySelector('meta[name="viewport"]'),
                                            n = "viewport-fit=cover";
                                        e || (e = document.createElement("meta")).setAttribute("name", "viewport");
                                        var i = G(e.content) && e.content.includes(n);
                                        t ? (this.cleanupViewport = !i, i || (e.content += ",".concat(n))) : this.cleanupViewport && (e.content = e.content.split(",").filter((function(t) {
                                            return t.trim() !== n
                                        })).join(","))
                                    }
                                    this.onChange()
                                }
                            }, {
                                key: "trapFocus",
                                value: function(t) {
                                    if (!ct.isIos && this.active && "Tab" === t.key && 9 === t.keyCode) {
                                        var e = document.activeElement,
                                            n = kt.call(this.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"),
                                            i = c(n, 1)[0],
                                            r = n[n.length - 1];
                                        e !== r || t.shiftKey ? e === i && t.shiftKey && (r.focus(), t.preventDefault()) : (i.focus(), t.preventDefault())
                                    }
                                }
                            }, {
                                key: "update",
                                value: function() {
                                    var t;
                                    this.enabled ? (t = this.forceFallback ? "Fallback (forced)" : e.native ? "Native" : "Fallback", this.player.debug.log("".concat(t, " fullscreen enabled"))) : this.player.debug.log("Fullscreen not supported and fallback disabled"), _t(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled)
                                }
                            }, {
                                key: "enter",
                                value: function() {
                                    this.enabled && (ct.isIos && this.player.config.fullscreen.iosNative ? this.target.webkitEnterFullscreen() : !e.native || this.forceFallback ? this.toggleFallback(!0) : this.prefix ? ot(this.prefix) || this.target["".concat(this.prefix, "Request").concat(this.property)]() : this.target.requestFullscreen({
                                        navigationUI: "hide"
                                    }))
                                }
                            }, {
                                key: "exit",
                                value: function() {
                                    if (this.enabled)
                                        if (ct.isIos && this.player.config.fullscreen.iosNative) this.target.webkitExitFullscreen(), Lt(this.player.play());
                                        else if (!e.native || this.forceFallback) this.toggleFallback(!1);
                                    else if (this.prefix) {
                                        if (!ot(this.prefix)) {
                                            var t = "moz" === this.prefix ? "Cancel" : "Exit";
                                            document["".concat(this.prefix).concat(t).concat(this.property)]()
                                        }
                                    } else(document.cancelFullScreen || document.exitFullscreen).call(document)
                                }
                            }, {
                                key: "toggle",
                                value: function() {
                                    this.active ? this.exit() : this.enter()
                                }
                            }, {
                                key: "usingNative",
                                get: function() {
                                    return e.native && !this.forceFallback
                                }
                            }, {
                                key: "enabled",
                                get: function() {
                                    return (e.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo
                                }
                            }, {
                                key: "active",
                                get: function() {
                                    if (!this.enabled) return !1;
                                    if (!e.native || this.forceFallback) return wt(this.target, this.player.config.classNames.fullscreen.fallback);
                                    var t = this.prefix ? document["".concat(this.prefix).concat(this.property, "Element")] : document.fullscreenElement;
                                    return t && t.shadowRoot ? t === this.target.getRootNode().host : t === this.target
                                }
                            }, {
                                key: "target",
                                get: function() {
                                    return ct.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.fullscreen || this.player.elements.container
                                }
                            }], [{
                                key: "native",
                                get: function() {
                                    return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
                                }
                            }, {
                                key: "prefix",
                                get: function() {
                                    if (Q(document.exitFullscreen)) return "";
                                    var t = "";
                                    return ["webkit", "moz", "ms"].some((function(e) {
                                        return !(!Q(document["".concat(e, "ExitFullscreen")]) && !Q(document["".concat(e, "CancelFullScreen")])) && (t = e, !0)
                                    })), t
                                }
                            }, {
                                key: "property",
                                get: function() {
                                    return "moz" === this.prefix ? "FullScreen" : "Fullscreen"
                                }
                            }]), e
                        }();

                    function ve(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                        return new Promise((function(n, i) {
                            var r = new Image,
                                o = function() {
                                    delete r.onload, delete r.onerror, (r.naturalWidth >= e ? n : i)(r)
                                };
                            Object.assign(r, {
                                onload: o,
                                onerror: o,
                                src: t
                            })
                        }))
                    }
                    var ye = {
                            addStyleHook: function() {
                                _t(this.elements.container, this.config.selectors.container.replace(".", ""), !0), _t(this.elements.container, this.config.classNames.uiSupported, this.supported.ui)
                            },
                            toggleNativeControls: function() {
                                arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls")
                            },
                            build: function() {
                                var t = this;
                                if (this.listeners.media(), !this.supported.ui) return this.debug.warn("Basic support only for ".concat(this.provider, " ").concat(this.type)), void ye.toggleNativeControls.call(this, !0);
                                $(this.elements.controls) || (re.inject.call(this), this.listeners.controls()), ye.toggleNativeControls.call(this), this.isHTML5 && se.setup.call(this), this.volume = null, this.muted = null, this.loop = null, this.quality = null, this.speed = null, re.updateVolume.call(this), re.timeUpdate.call(this), ye.checkPlaying.call(this), _t(this.elements.container, this.config.classNames.pip.supported, Mt.pip && this.isHTML5 && this.isVideo), _t(this.elements.container, this.config.classNames.airplay.supported, Mt.airplay && this.isHTML5), _t(this.elements.container, this.config.classNames.isIos, ct.isIos), _t(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout((function() {
                                    Nt.call(t, t.media, "ready")
                                }), 0), ye.setTitle.call(this), this.poster && ye.setPoster.call(this, this.poster, !1).catch((function() {})), this.config.duration && re.durationUpdate.call(this)
                            },
                            setTitle: function() {
                                var t = Qt("play", this.config);
                                if (G(this.config.title) && !ot(this.config.title) && (t += ", ".concat(this.config.title)), Array.from(this.elements.buttons.play || []).forEach((function(e) {
                                        e.setAttribute("aria-label", t)
                                    })), this.isEmbed) {
                                    var e = Ot.call(this, "iframe");
                                    if (!$(e)) return;
                                    var n = ot(this.config.title) ? "video" : this.config.title,
                                        i = Qt("frameTitle", this.config);
                                    e.setAttribute("title", i.replace("{title}", n))
                                }
                            },
                            togglePoster: function(t) {
                                _t(this.elements.container, this.config.classNames.posterEnabled, t)
                            },
                            setPoster: function(t) {
                                var e = this;
                                return arguments.length > 1 && void 0 !== arguments[1] && !arguments[1] || !this.poster ? (this.media.setAttribute("data-poster", t), Dt.call(this).then((function() {
                                    return ve(t)
                                })).catch((function(n) {
                                    throw t === e.poster && ye.togglePoster.call(e, !1), n
                                })).then((function() {
                                    if (t !== e.poster) throw new Error("setPoster cancelled by later call to setPoster")
                                })).then((function() {
                                    return Object.assign(e.elements.poster.style, {
                                        backgroundImage: "url('".concat(t, "')"),
                                        backgroundSize: ""
                                    }), ye.togglePoster.call(e, !0), t
                                }))) : Promise.reject(new Error("Poster already set"))
                            },
                            checkPlaying: function(t) {
                                var e = this;
                                _t(this.elements.container, this.config.classNames.playing, this.playing), _t(this.elements.container, this.config.classNames.paused, this.paused), _t(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach((function(t) {
                                    Object.assign(t, {
                                        pressed: e.playing
                                    }), t.setAttribute("aria-label", Qt(e.playing ? "pause" : "play", e.config))
                                })), tt(t) && "timeupdate" === t.type || ye.toggleControls.call(this)
                            },
                            checkLoading: function(t) {
                                var e = this;
                                this.loading = ["stalled", "waiting"].includes(t.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout((function() {
                                    _t(e.elements.container, e.config.classNames.loading, e.loading), ye.toggleControls.call(e)
                                }), this.loading ? 250 : 0)
                            },
                            toggleControls: function(t) {
                                var e = this.elements.controls;
                                if (e && this.config.hideControls) {
                                    var n = this.touch && this.lastSeekTime + 2e3 > Date.now();
                                    this.toggleControls(Boolean(t || this.loading || this.paused || e.pressed || e.hover || n))
                                }
                            },
                            migrateStyles: function() {
                                var t = this;
                                Object.values(a({}, this.media.style)).filter((function(t) {
                                    return !ot(t) && t.startsWith("--plyr")
                                })).forEach((function(e) {
                                    t.elements.container.style.setProperty(e, t.media.style.getPropertyValue(e)), t.media.style.removeProperty(e)
                                })), ot(this.media.style) && this.media.removeAttribute("style")
                            }
                        },
                        be = function() {
                            function e(n) {
                                t(this, e), this.player = n, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.setTabFocus = this.setTabFocus.bind(this), this.firstTouch = this.firstTouch.bind(this)
                            }
                            return i(e, [{
                                key: "handleKey",
                                value: function(t) {
                                    var e = this.player,
                                        n = e.elements,
                                        i = t.keyCode ? t.keyCode : t.which,
                                        r = "keydown" === t.type,
                                        o = r && i === this.lastKey;
                                    if (!(t.altKey || t.ctrlKey || t.metaKey || t.shiftKey) && X(i))
                                        if (r) {
                                            var a = document.activeElement;
                                            if ($(a)) {
                                                var s = e.config.selectors.editable;
                                                if (a !== n.inputs.seek && xt(a, s)) return;
                                                if (32 === t.which && xt(a, 'button, [role^="menuitem"]')) return
                                            }
                                            switch ([32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57, 67, 70, 73, 75, 76, 77, 79].includes(i) && (t.preventDefault(), t.stopPropagation()), i) {
                                                case 48:
                                                case 49:
                                                case 50:
                                                case 51:
                                                case 52:
                                                case 53:
                                                case 54:
                                                case 55:
                                                case 56:
                                                case 57:
                                                    o || (e.currentTime = e.duration / 10 * (i - 48));
                                                    break;
                                                case 32:
                                                case 75:
                                                    o || Lt(e.togglePlay());
                                                    break;
                                                case 38:
                                                    e.increaseVolume(.1);
                                                    break;
                                                case 40:
                                                    e.decreaseVolume(.1);
                                                    break;
                                                case 77:
                                                    o || (e.muted = !e.muted);
                                                    break;
                                                case 39:
                                                    e.forward();
                                                    break;
                                                case 37:
                                                    e.rewind();
                                                    break;
                                                case 70:
                                                    e.fullscreen.toggle();
                                                    break;
                                                case 67:
                                                    o || e.toggleCaptions();
                                                    break;
                                                case 76:
                                                    e.loop = !e.loop
                                            }
                                            27 === i && !e.fullscreen.usingNative && e.fullscreen.active && e.fullscreen.toggle(), this.lastKey = i
                                        } else this.lastKey = null
                                }
                            }, {
                                key: "toggleMenu",
                                value: function(t) {
                                    re.toggleMenu.call(this.player, t)
                                }
                            }, {
                                key: "firstTouch",
                                value: function() {
                                    var t = this.player,
                                        e = t.elements;
                                    t.touch = !0, _t(e.container, t.config.classNames.isTouch, !0)
                                }
                            }, {
                                key: "setTabFocus",
                                value: function(t) {
                                    var e = this.player,
                                        n = e.elements;
                                    if (clearTimeout(this.focusTimer), "keydown" !== t.type || 9 === t.which) {
                                        "keydown" === t.type && (this.lastKeyDown = t.timeStamp);
                                        var i, r = t.timeStamp - this.lastKeyDown <= 20;
                                        ("focus" !== t.type || r) && (i = e.config.classNames.tabFocus, _t(kt.call(e, ".".concat(i)), i, !1), "focusout" !== t.type && (this.focusTimer = setTimeout((function() {
                                            var t = document.activeElement;
                                            n.container.contains(t) && _t(document.activeElement, e.config.classNames.tabFocus, !0)
                                        }), 10)))
                                    }
                                }
                            }, {
                                key: "global",
                                value: function() {
                                    var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                                        e = this.player;
                                    e.config.keyboard.global && jt.call(e, window, "keydown keyup", this.handleKey, t, !1), jt.call(e, document.body, "click", this.toggleMenu, t), It.call(e, document.body, "touchstart", this.firstTouch), jt.call(e, document.body, "keydown focus blur focusout", this.setTabFocus, t, !1, !0)
                                }
                            }, {
                                key: "container",
                                value: function() {
                                    var t = this.player,
                                        e = t.config,
                                        n = t.elements,
                                        i = t.timers;
                                    !e.keyboard.global && e.keyboard.focused && Pt.call(t, n.container, "keydown keyup", this.handleKey, !1), Pt.call(t, n.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", (function(e) {
                                        var r = n.controls;
                                        r && "enterfullscreen" === e.type && (r.pressed = !1, r.hover = !1);
                                        var o = 0;
                                        ["touchstart", "touchmove", "mousemove"].includes(e.type) && (ye.toggleControls.call(t, !0), o = t.touch ? 3e3 : 2e3), clearTimeout(i.controls), i.controls = setTimeout((function() {
                                            return ye.toggleControls.call(t, !1)
                                        }), o)
                                    }));
                                    var r = function(e) {
                                            if (!e) return Ht.call(t);
                                            var i = n.container.getBoundingClientRect(),
                                                r = i.width,
                                                o = i.height;
                                            return Ht.call(t, "".concat(r, ":").concat(o))
                                        },
                                        o = function() {
                                            clearTimeout(i.resized), i.resized = setTimeout(r, 50)
                                        };
                                    Pt.call(t, n.container, "enterfullscreen exitfullscreen", (function(e) {
                                        var i = t.fullscreen,
                                            a = i.target,
                                            s = i.usingNative;
                                        if (a === n.container && (t.isEmbed || !ot(t.config.ratio))) {
                                            var u = "enterfullscreen" === e.type,
                                                l = r(u);
                                            l.padding,
                                                function(e, n, i) {
                                                    if (t.isVimeo && !t.config.vimeo.premium) {
                                                        var r = t.elements.wrapper.firstChild,
                                                            o = c(e, 2)[1],
                                                            a = c(Ft.call(t), 2),
                                                            s = a[0],
                                                            u = a[1];
                                                        r.style.maxWidth = i ? "".concat(o / u * s, "px") : null, r.style.margin = i ? "0 auto" : null
                                                    }
                                                }(l.ratio, 0, u), s || (u ? Pt.call(t, window, "resize", o) : At.call(t, window, "resize", o))
                                        }
                                    }))
                                }
                            }, {
                                key: "media",
                                value: function() {
                                    var t = this,
                                        e = this.player,
                                        n = e.elements;
                                    if (Pt.call(e, e.media, "timeupdate seeking seeked", (function(t) {
                                            return re.timeUpdate.call(e, t)
                                        })), Pt.call(e, e.media, "durationchange loadeddata loadedmetadata", (function(t) {
                                            return re.durationUpdate.call(e, t)
                                        })), Pt.call(e, e.media, "ended", (function() {
                                            e.isHTML5 && e.isVideo && e.config.resetOnEnd && (e.restart(), e.pause())
                                        })), Pt.call(e, e.media, "progress playing seeking seeked", (function(t) {
                                            return re.updateProgress.call(e, t)
                                        })), Pt.call(e, e.media, "volumechange", (function(t) {
                                            return re.updateVolume.call(e, t)
                                        })), Pt.call(e, e.media, "playing play pause ended emptied timeupdate", (function(t) {
                                            return ye.checkPlaying.call(e, t)
                                        })), Pt.call(e, e.media, "waiting canplay seeked playing", (function(t) {
                                            return ye.checkLoading.call(e, t)
                                        })), e.supported.ui && e.config.clickToPlay && !e.isAudio) {
                                        var i = Ot.call(e, ".".concat(e.config.classNames.video));
                                        if (!$(i)) return;
                                        Pt.call(e, n.container, "click", (function(r) {
                                            ([n.container, i].includes(r.target) || i.contains(r.target)) && (e.touch && e.config.hideControls || (e.ended ? (t.proxy(r, e.restart, "restart"), t.proxy(r, (function() {
                                                Lt(e.play())
                                            }), "play")) : t.proxy(r, (function() {
                                                Lt(e.togglePlay())
                                            }), "play")))
                                        }))
                                    }
                                    e.supported.ui && e.config.disableContextMenu && Pt.call(e, n.wrapper, "contextmenu", (function(t) {
                                        t.preventDefault()
                                    }), !1), Pt.call(e, e.media, "volumechange", (function() {
                                        e.storage.set({
                                            volume: e.volume,
                                            muted: e.muted
                                        })
                                    })), Pt.call(e, e.media, "ratechange", (function() {
                                        re.updateSetting.call(e, "speed"), e.storage.set({
                                            speed: e.speed
                                        })
                                    })), Pt.call(e, e.media, "qualitychange", (function(t) {
                                        re.updateSetting.call(e, "quality", null, t.detail.quality)
                                    })), Pt.call(e, e.media, "ready qualitychange", (function() {
                                        re.setDownloadUrl.call(e)
                                    }));
                                    var r = e.config.events.concat(["keyup", "keydown"]).join(" ");
                                    Pt.call(e, e.media, r, (function(t) {
                                        var i = t.detail,
                                            r = void 0 === i ? {} : i;
                                        "error" === t.type && (r = e.media.error), Nt.call(e, n.container, t.type, !0, r)
                                    }))
                                }
                            }, {
                                key: "proxy",
                                value: function(t, e, n) {
                                    var i = this.player,
                                        r = i.config.listeners[n],
                                        o = !0;
                                    Q(r) && (o = r.call(i, t)), !1 !== o && Q(e) && e.call(i, t)
                                }
                            }, {
                                key: "bind",
                                value: function(t, e, n, i) {
                                    var r = this,
                                        o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                                        a = this.player,
                                        s = a.config.listeners[i],
                                        c = Q(s);
                                    Pt.call(a, t, e, (function(t) {
                                        return r.proxy(t, n, i)
                                    }), o && !c)
                                }
                            }, {
                                key: "controls",
                                value: function() {
                                    var t = this,
                                        e = this.player,
                                        n = e.elements,
                                        i = ct.isIE ? "change" : "input";
                                    if (n.buttons.play && Array.from(n.buttons.play).forEach((function(n) {
                                            t.bind(n, "click", (function() {
                                                Lt(e.togglePlay())
                                            }), "play")
                                        })), this.bind(n.buttons.restart, "click", e.restart, "restart"), this.bind(n.buttons.rewind, "click", e.rewind, "rewind"), this.bind(n.buttons.fastForward, "click", e.forward, "fastForward"), this.bind(n.buttons.mute, "click", (function() {
                                            e.muted = !e.muted
                                        }), "mute"), this.bind(n.buttons.captions, "click", (function() {
                                            return e.toggleCaptions()
                                        })), this.bind(n.buttons.download, "click", (function() {
                                            Nt.call(e, e.media, "download")
                                        }), "download"), this.bind(n.buttons.fullscreen, "click", (function() {
                                            e.fullscreen.toggle()
                                        }), "fullscreen"), this.bind(n.buttons.pip, "click", (function() {
                                            e.pip = "toggle"
                                        }), "pip"), this.bind(n.buttons.airplay, "click", e.airplay, "airplay"), this.bind(n.buttons.settings, "click", (function(t) {
                                            t.stopPropagation(), t.preventDefault(), re.toggleMenu.call(e, t)
                                        }), null, !1), this.bind(n.buttons.settings, "keyup", (function(t) {
                                            var n = t.which;
                                            [13, 32].includes(n) && (13 !== n ? (t.preventDefault(), t.stopPropagation(), re.toggleMenu.call(e, t)) : re.focusFirstMenuItem.call(e, null, !0))
                                        }), null, !1), this.bind(n.settings.menu, "keydown", (function(t) {
                                            27 === t.which && re.toggleMenu.call(e, t)
                                        })), this.bind(n.inputs.seek, "mousedown mousemove", (function(t) {
                                            var e = n.progress.getBoundingClientRect(),
                                                i = 100 / e.width * (t.pageX - e.left);
                                            t.currentTarget.setAttribute("seek-value", i)
                                        })), this.bind(n.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", (function(t) {
                                            var n = t.currentTarget,
                                                i = t.keyCode ? t.keyCode : t.which;
                                            if (!et(t) || 39 === i || 37 === i) {
                                                e.lastSeekTime = Date.now();
                                                var r = n.hasAttribute("play-on-seeked"),
                                                    o = ["mouseup", "touchend", "keyup"].includes(t.type);
                                                r && o ? (n.removeAttribute("play-on-seeked"), Lt(e.play())) : !o && e.playing && (n.setAttribute("play-on-seeked", ""), e.pause())
                                            }
                                        })), ct.isIos) {
                                        var r = kt.call(e, 'input[type="range"]');
                                        Array.from(r).forEach((function(e) {
                                            return t.bind(e, i, (function(t) {
                                                return st(t.target)
                                            }))
                                        }))
                                    }
                                    this.bind(n.inputs.seek, i, (function(t) {
                                        var n = t.currentTarget,
                                            i = n.getAttribute("seek-value");
                                        ot(i) && (i = n.value), n.removeAttribute("seek-value"), e.currentTime = i / n.max * e.duration
                                    }), "seek"), this.bind(n.progress, "mouseenter mouseleave mousemove", (function(t) {
                                        return re.updateSeekTooltip.call(e, t)
                                    })), this.bind(n.progress, "mousemove touchmove", (function(t) {
                                        var n = e.previewThumbnails;
                                        n && n.loaded && n.startMove(t)
                                    })), this.bind(n.progress, "mouseleave touchend click", (function() {
                                        var t = e.previewThumbnails;
                                        t && t.loaded && t.endMove(!1, !0)
                                    })), this.bind(n.progress, "mousedown touchstart", (function(t) {
                                        var n = e.previewThumbnails;
                                        n && n.loaded && n.startScrubbing(t)
                                    })), this.bind(n.progress, "mouseup touchend", (function(t) {
                                        var n = e.previewThumbnails;
                                        n && n.loaded && n.endScrubbing(t)
                                    })), ct.isWebkit && Array.from(kt.call(e, 'input[type="range"]')).forEach((function(n) {
                                        t.bind(n, "input", (function(t) {
                                            return re.updateRangeFill.call(e, t.target)
                                        }))
                                    })), e.config.toggleInvert && !$(n.display.duration) && this.bind(n.display.currentTime, "click", (function() {
                                        0 !== e.currentTime && (e.config.invertTime = !e.config.invertTime, re.timeUpdate.call(e))
                                    })), this.bind(n.inputs.volume, i, (function(t) {
                                        e.volume = t.target.value
                                    }), "volume"), this.bind(n.controls, "mouseenter mouseleave", (function(t) {
                                        n.controls.hover = !e.touch && "mouseenter" === t.type
                                    })), n.fullscreen && Array.from(n.fullscreen.children).filter((function(t) {
                                        return !t.contains(n.container)
                                    })).forEach((function(i) {
                                        t.bind(i, "mouseenter mouseleave", (function(t) {
                                            n.controls.hover = !e.touch && "mouseenter" === t.type
                                        }))
                                    })), this.bind(n.controls, "mousedown mouseup touchstart touchend touchcancel", (function(t) {
                                        n.controls.pressed = ["mousedown", "touchstart"].includes(t.type)
                                    })), this.bind(n.controls, "focusin", (function() {
                                        var i = e.config,
                                            r = e.timers;
                                        _t(n.controls, i.classNames.noTransition, !0), ye.toggleControls.call(e, !0), setTimeout((function() {
                                            _t(n.controls, i.classNames.noTransition, !1)
                                        }), 0);
                                        var o = t.touch ? 3e3 : 4e3;
                                        clearTimeout(r.controls), r.controls = setTimeout((function() {
                                            return ye.toggleControls.call(e, !1)
                                        }), o)
                                    })), this.bind(n.inputs.volume, "wheel", (function(t) {
                                        var n = t.webkitDirectionInvertedFromDevice,
                                            i = c([t.deltaX, -t.deltaY].map((function(t) {
                                                return n ? -t : t
                                            })), 2),
                                            r = i[0],
                                            o = i[1],
                                            a = Math.sign(Math.abs(r) > Math.abs(o) ? r : o);
                                        e.increaseVolume(a / 50);
                                        var s = e.media.volume;
                                        (1 === a && s < 1 || -1 === a && s > 0) && t.preventDefault()
                                    }), "volume", !1)
                                }
                            }]), e
                        }();
                    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof e || "undefined" != typeof self && self;
                    var _e = function(t, e) {
                        return t(e = {
                            exports: {}
                        }, e.exports), e.exports
                    }((function(t, e) {
                        t.exports = function() {
                            var t = function() {},
                                e = {},
                                n = {},
                                i = {};

                            function r(t, e) {
                                if (t) {
                                    var r = i[t];
                                    if (n[t] = e, r)
                                        for (; r.length;) r[0](t, e), r.splice(0, 1)
                                }
                            }

                            function o(e, n) {
                                e.call && (e = {
                                    success: e
                                }), n.length ? (e.error || t)(n) : (e.success || t)(e)
                            }

                            function a(e, n, i, r) {
                                var o, s, c = document,
                                    u = i.async,
                                    l = (i.numRetries || 0) + 1,
                                    h = i.before || t,
                                    f = e.replace(/[\?|#].*$/, ""),
                                    d = e.replace(/^(css|img)!/, "");
                                r = r || 0, /(^css!|\.css$)/.test(f) ? ((s = c.createElement("link")).rel = "stylesheet", s.href = d, (o = "hideFocus" in s) && s.relList && (o = 0, s.rel = "preload", s.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(f) ? (s = c.createElement("img")).src = d : ((s = c.createElement("script")).src = e, s.async = void 0 === u || u), s.onload = s.onerror = s.onbeforeload = function(t) {
                                    var c = t.type[0];
                                    if (o) try {
                                        s.sheet.cssText.length || (c = "e")
                                    } catch (t) {
                                        18 != t.code && (c = "e")
                                    }
                                    if ("e" == c) {
                                        if ((r += 1) < l) return a(e, n, i, r)
                                    } else if ("preload" == s.rel && "style" == s.as) return s.rel = "stylesheet";
                                    n(e, c, t.defaultPrevented)
                                }, !1 !== h(e, s) && c.head.appendChild(s)
                            }

                            function s(t, n, i) {
                                var s, c;
                                if (n && n.trim && (s = n), c = (s ? i : n) || {}, s) {
                                    if (s in e) throw "LoadJS";
                                    e[s] = !0
                                }

                                function u(e, n) {
                                    ! function(t, e, n) {
                                        var i, r, o = (t = t.push ? t : [t]).length,
                                            s = o,
                                            c = [];
                                        for (i = function(t, n, i) {
                                                if ("e" == n && c.push(t), "b" == n) {
                                                    if (!i) return;
                                                    c.push(t)
                                                }--o || e(c)
                                            }, r = 0; r < s; r++) a(t[r], i, n)
                                    }(t, (function(t) {
                                        o(c, t), e && o({
                                            success: e,
                                            error: n
                                        }, t), r(s, t)
                                    }), c)
                                }
                                if (c.returnPromise) return new Promise(u);
                                u()
                            }
                            return s.ready = function(t, e) {
                                return function(t, e) {
                                    t = t.push ? t : [t];
                                    var r, o, a, s = [],
                                        c = t.length,
                                        u = c;
                                    for (r = function(t, n) {
                                            n.length && s.push(t), --u || e(s)
                                        }; c--;) o = t[c], (a = n[o]) ? r(o, a) : (i[o] = i[o] || []).push(r)
                                }(t, (function(t) {
                                    o(e, t)
                                })), s
                            }, s.done = function(t) {
                                r(t, [])
                            }, s.reset = function() {
                                e = {}, n = {}, i = {}
                            }, s.isDefined = function(t) {
                                return t in e
                            }, s
                        }()
                    }));

                    function we(t) {
                        return new Promise((function(e, n) {
                            _e(t, {
                                success: e,
                                error: n
                            })
                        }))
                    }

                    function xe(t) {
                        t && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === t && (this.media.paused = !t, Nt.call(this, this.media, t ? "play" : "pause"))
                    }
                    var ke = {
                        setup: function() {
                            var t = this;
                            _t(t.elements.wrapper, t.config.classNames.embed, !0), t.options.speed = t.config.speed.options, Ht.call(t), Y(window.Vimeo) ? ke.ready.call(t) : we(t.config.urls.vimeo.sdk).then((function() {
                                ke.ready.call(t)
                            })).catch((function(e) {
                                t.debug.warn("Vimeo SDK (player.js) failed to load", e)
                            }))
                        },
                        ready: function() {
                            var t = this,
                                e = this,
                                n = e.config.vimeo,
                                i = n.premium,
                                r = n.referrerPolicy,
                                o = s(n, ["premium", "referrerPolicy"]);
                            i && Object.assign(o, {
                                controls: !1,
                                sidedock: !1
                            });
                            var u = ae(a({
                                    loop: e.config.loop.active,
                                    autoplay: e.autoplay,
                                    muted: e.muted,
                                    gesture: "media",
                                    playsinline: !this.config.fullscreen.iosNative
                                }, o)),
                                l = e.media.getAttribute("src");
                            ot(l) && (l = e.media.getAttribute(e.config.attributes.embed.id));
                            var h, f = ot(h = l) ? null : X(Number(h)) ? h : h.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : h,
                                d = dt("iframe"),
                                p = Vt(e.config.urls.vimeo.iframe, f, u);
                            d.setAttribute("src", p), d.setAttribute("allowfullscreen", ""), d.setAttribute("allow", "autoplay,fullscreen,picture-in-picture"), ot(r) || d.setAttribute("referrerPolicy", r);
                            var m = e.poster;
                            if (i) d.setAttribute("data-poster", m), e.media = vt(d, e.media);
                            else {
                                var g = dt("div", {
                                    class: e.config.classNames.embedContainer,
                                    "data-poster": m
                                });
                                g.appendChild(d), e.media = vt(g, e.media)
                            }
                            Zt(Vt(e.config.urls.vimeo.api, f), "json").then((function(t) {
                                if (!ot(t)) {
                                    var n = new URL(t[0].thumbnail_large);
                                    n.pathname = "".concat(n.pathname.split("_")[0], ".jpg"), ye.setPoster.call(e, n.href).catch((function() {}))
                                }
                            })), e.embed = new window.Vimeo.Player(d, {
                                autopause: e.config.autopause,
                                muted: e.muted
                            }), e.media.paused = !0, e.media.currentTime = 0, e.supported.ui && e.embed.disableTextTrack(), e.media.play = function() {
                                return xe.call(e, !0), e.embed.play()
                            }, e.media.pause = function() {
                                return xe.call(e, !1), e.embed.pause()
                            }, e.media.stop = function() {
                                e.pause(), e.currentTime = 0
                            };
                            var v = e.media.currentTime;
                            Object.defineProperty(e.media, "currentTime", {
                                get: function() {
                                    return v
                                },
                                set: function(t) {
                                    var n = e.embed,
                                        i = e.media,
                                        r = e.paused,
                                        o = e.volume,
                                        a = r && !n.hasPlayed;
                                    i.seeking = !0, Nt.call(e, i, "seeking"), Promise.resolve(a && n.setVolume(0)).then((function() {
                                        return n.setCurrentTime(t)
                                    })).then((function() {
                                        return a && n.pause()
                                    })).then((function() {
                                        return a && n.setVolume(o)
                                    })).catch((function() {}))
                                }
                            });
                            var y = e.config.speed.selected;
                            Object.defineProperty(e.media, "playbackRate", {
                                get: function() {
                                    return y
                                },
                                set: function(t) {
                                    e.embed.setPlaybackRate(t).then((function() {
                                        y = t, Nt.call(e, e.media, "ratechange")
                                    })).catch((function() {
                                        e.options.speed = [1]
                                    }))
                                }
                            });
                            var b = e.config.volume;
                            Object.defineProperty(e.media, "volume", {
                                get: function() {
                                    return b
                                },
                                set: function(t) {
                                    e.embed.setVolume(t).then((function() {
                                        b = t, Nt.call(e, e.media, "volumechange")
                                    }))
                                }
                            });
                            var _ = e.config.muted;
                            Object.defineProperty(e.media, "muted", {
                                get: function() {
                                    return _
                                },
                                set: function(t) {
                                    var n = !!J(t) && t;
                                    e.embed.setVolume(n ? 0 : e.config.volume).then((function() {
                                        _ = n, Nt.call(e, e.media, "volumechange")
                                    }))
                                }
                            });
                            var w, x = e.config.loop;
                            Object.defineProperty(e.media, "loop", {
                                get: function() {
                                    return x
                                },
                                set: function(t) {
                                    var n = J(t) ? t : e.config.loop.active;
                                    e.embed.setLoop(n).then((function() {
                                        x = n
                                    }))
                                }
                            }), e.embed.getVideoUrl().then((function(t) {
                                w = t, re.setDownloadUrl.call(e)
                            })).catch((function(e) {
                                t.debug.warn(e)
                            })), Object.defineProperty(e.media, "currentSrc", {
                                get: function() {
                                    return w
                                }
                            }), Object.defineProperty(e.media, "ended", {
                                get: function() {
                                    return e.currentTime === e.duration
                                }
                            }), Promise.all([e.embed.getVideoWidth(), e.embed.getVideoHeight()]).then((function(n) {
                                var i = c(n, 2),
                                    r = i[0],
                                    o = i[1];
                                e.embed.ratio = [r, o], Ht.call(t)
                            })), e.embed.setAutopause(e.config.autopause).then((function(t) {
                                e.config.autopause = t
                            })), e.embed.getVideoTitle().then((function(n) {
                                e.config.title = n, ye.setTitle.call(t)
                            })), e.embed.getCurrentTime().then((function(t) {
                                v = t, Nt.call(e, e.media, "timeupdate")
                            })), e.embed.getDuration().then((function(t) {
                                e.media.duration = t, Nt.call(e, e.media, "durationchange")
                            })), e.embed.getTextTracks().then((function(t) {
                                e.media.textTracks = t, se.setup.call(e)
                            })), e.embed.on("cuechange", (function(t) {
                                var n = t.cues,
                                    i = (void 0 === n ? [] : n).map((function(t) {
                                        return function(t) {
                                            var e = document.createDocumentFragment(),
                                                n = document.createElement("div");
                                            return e.appendChild(n), n.innerHTML = t, e.firstChild.innerText
                                        }(t.text)
                                    }));
                                se.updateCues.call(e, i)
                            })), e.embed.on("loaded", (function() {
                                e.embed.getPaused().then((function(t) {
                                    xe.call(e, !t), t || Nt.call(e, e.media, "playing")
                                })), $(e.embed.element) && e.supported.ui && e.embed.element.setAttribute("tabindex", -1)
                            })), e.embed.on("bufferstart", (function() {
                                Nt.call(e, e.media, "waiting")
                            })), e.embed.on("bufferend", (function() {
                                Nt.call(e, e.media, "playing")
                            })), e.embed.on("play", (function() {
                                xe.call(e, !0), Nt.call(e, e.media, "playing")
                            })), e.embed.on("pause", (function() {
                                xe.call(e, !1)
                            })), e.embed.on("timeupdate", (function(t) {
                                e.media.seeking = !1, v = t.seconds, Nt.call(e, e.media, "timeupdate")
                            })), e.embed.on("progress", (function(t) {
                                e.media.buffered = t.percent, Nt.call(e, e.media, "progress"), 1 === parseInt(t.percent, 10) && Nt.call(e, e.media, "canplaythrough"), e.embed.getDuration().then((function(t) {
                                    t !== e.media.duration && (e.media.duration = t, Nt.call(e, e.media, "durationchange"))
                                }))
                            })), e.embed.on("seeked", (function() {
                                e.media.seeking = !1, Nt.call(e, e.media, "seeked")
                            })), e.embed.on("ended", (function() {
                                e.media.paused = !0, Nt.call(e, e.media, "ended")
                            })), e.embed.on("error", (function(t) {
                                e.media.error = t, Nt.call(e, e.media, "error")
                            })), setTimeout((function() {
                                return ye.build.call(e)
                            }), 0)
                        }
                    };

                    function Oe(t) {
                        t && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === t && (this.media.paused = !t, Nt.call(this, this.media, t ? "play" : "pause"))
                    }

                    function Te(t) {
                        return t.noCookie ? "https://www.youtube-nocookie.com" : "http:" === window.location.protocol ? "http://www.youtube.com" : void 0
                    }
                    var Se, Ee = {
                            setup: function() {
                                var t = this;
                                if (_t(this.elements.wrapper, this.config.classNames.embed, !0), Y(window.YT) && Q(window.YT.Player)) Ee.ready.call(this);
                                else {
                                    var e = window.onYouTubeIframeAPIReady;
                                    window.onYouTubeIframeAPIReady = function() {
                                        Q(e) && e(), Ee.ready.call(t)
                                    }, we(this.config.urls.youtube.sdk).catch((function(e) {
                                        t.debug.warn("YouTube API failed to load", e)
                                    }))
                                }
                            },
                            getTitle: function(t) {
                                var e = this;
                                Zt(Vt(this.config.urls.youtube.api, t)).then((function(t) {
                                    if (Y(t)) {
                                        var n = t.title,
                                            i = t.height,
                                            r = t.width;
                                        e.config.title = n, ye.setTitle.call(e), e.embed.ratio = [r, i]
                                    }
                                    Ht.call(e)
                                })).catch((function() {
                                    Ht.call(e)
                                }))
                            },
                            ready: function() {
                                var t = this,
                                    e = t.media && t.media.getAttribute("id");
                                if (ot(e) || !e.startsWith("youtube-")) {
                                    var n = t.media.getAttribute("src");
                                    ot(n) && (n = t.media.getAttribute(this.config.attributes.embed.id));
                                    var i, r, o = ot(i = n) ? null : i.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : i,
                                        a = (r = t.provider, "".concat(r, "-").concat(Math.floor(1e4 * Math.random()))),
                                        s = dt("div", {
                                            id: a,
                                            "data-poster": t.poster
                                        });
                                    t.media = vt(s, t.media);
                                    var c = function(t) {
                                        return "https://i.ytimg.com/vi/".concat(o, "/").concat(t, "default.jpg")
                                    };
                                    ve(c("maxres"), 121).catch((function() {
                                        return ve(c("sd"), 121)
                                    })).catch((function() {
                                        return ve(c("hq"))
                                    })).then((function(e) {
                                        return ye.setPoster.call(t, e.src)
                                    })).then((function(e) {
                                        e.includes("maxres") || (t.elements.poster.style.backgroundSize = "cover")
                                    })).catch((function() {}));
                                    var u = t.config.youtube;
                                    t.embed = new window.YT.Player(a, {
                                        videoId: o,
                                        host: Te(u),
                                        playerVars: lt({}, {
                                            autoplay: t.config.autoplay ? 1 : 0,
                                            hl: t.config.hl,
                                            controls: t.supported.ui ? 0 : 1,
                                            disablekb: 1,
                                            playsinline: t.config.fullscreen.iosNative ? 0 : 1,
                                            cc_load_policy: t.captions.active ? 1 : 0,
                                            cc_lang_pref: t.config.captions.language,
                                            widget_referrer: window ? window.location.href : null
                                        }, u),
                                        events: {
                                            onError: function(e) {
                                                if (!t.media.error) {
                                                    var n = e.data,
                                                        i = {
                                                            2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                                                            5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                                                            100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                                                            101: "The owner of the requested video does not allow it to be played in embedded players.",
                                                            150: "The owner of the requested video does not allow it to be played in embedded players."
                                                        } [n] || "An unknown error occured";
                                                    t.media.error = {
                                                        code: n,
                                                        message: i
                                                    }, Nt.call(t, t.media, "error")
                                                }
                                            },
                                            onPlaybackRateChange: function(e) {
                                                var n = e.target;
                                                t.media.playbackRate = n.getPlaybackRate(), Nt.call(t, t.media, "ratechange")
                                            },
                                            onReady: function(e) {
                                                if (!Q(t.media.play)) {
                                                    var n = e.target;
                                                    Ee.getTitle.call(t, o), t.media.play = function() {
                                                        Oe.call(t, !0), n.playVideo()
                                                    }, t.media.pause = function() {
                                                        Oe.call(t, !1), n.pauseVideo()
                                                    }, t.media.stop = function() {
                                                        n.stopVideo()
                                                    }, t.media.duration = n.getDuration(), t.media.paused = !0, t.media.currentTime = 0, Object.defineProperty(t.media, "currentTime", {
                                                        get: function() {
                                                            return Number(n.getCurrentTime())
                                                        },
                                                        set: function(e) {
                                                            t.paused && !t.embed.hasPlayed && t.embed.mute(), t.media.seeking = !0, Nt.call(t, t.media, "seeking"), n.seekTo(e)
                                                        }
                                                    }), Object.defineProperty(t.media, "playbackRate", {
                                                        get: function() {
                                                            return n.getPlaybackRate()
                                                        },
                                                        set: function(t) {
                                                            n.setPlaybackRate(t)
                                                        }
                                                    });
                                                    var i = t.config.volume;
                                                    Object.defineProperty(t.media, "volume", {
                                                        get: function() {
                                                            return i
                                                        },
                                                        set: function(e) {
                                                            i = e, n.setVolume(100 * i), Nt.call(t, t.media, "volumechange")
                                                        }
                                                    });
                                                    var r = t.config.muted;
                                                    Object.defineProperty(t.media, "muted", {
                                                        get: function() {
                                                            return r
                                                        },
                                                        set: function(e) {
                                                            var i = J(e) ? e : r;
                                                            r = i, n[i ? "mute" : "unMute"](), Nt.call(t, t.media, "volumechange")
                                                        }
                                                    }), Object.defineProperty(t.media, "currentSrc", {
                                                        get: function() {
                                                            return n.getVideoUrl()
                                                        }
                                                    }), Object.defineProperty(t.media, "ended", {
                                                        get: function() {
                                                            return t.currentTime === t.duration
                                                        }
                                                    });
                                                    var a = n.getAvailablePlaybackRates();
                                                    t.options.speed = a.filter((function(e) {
                                                        return t.config.speed.options.includes(e)
                                                    })), t.supported.ui && t.media.setAttribute("tabindex", -1), Nt.call(t, t.media, "timeupdate"), Nt.call(t, t.media, "durationchange"), clearInterval(t.timers.buffering), t.timers.buffering = setInterval((function() {
                                                        t.media.buffered = n.getVideoLoadedFraction(), (null === t.media.lastBuffered || t.media.lastBuffered < t.media.buffered) && Nt.call(t, t.media, "progress"), t.media.lastBuffered = t.media.buffered, 1 === t.media.buffered && (clearInterval(t.timers.buffering), Nt.call(t, t.media, "canplaythrough"))
                                                    }), 200), setTimeout((function() {
                                                        return ye.build.call(t)
                                                    }), 50)
                                                }
                                            },
                                            onStateChange: function(e) {
                                                var n = e.target;
                                                switch (clearInterval(t.timers.playing), t.media.seeking && [1, 2].includes(e.data) && (t.media.seeking = !1, Nt.call(t, t.media, "seeked")), e.data) {
                                                    case -1:
                                                        Nt.call(t, t.media, "timeupdate"), t.media.buffered = n.getVideoLoadedFraction(), Nt.call(t, t.media, "progress");
                                                        break;
                                                    case 0:
                                                        Oe.call(t, !1), t.media.loop ? (n.stopVideo(), n.playVideo()) : Nt.call(t, t.media, "ended");
                                                        break;
                                                    case 1:
                                                        t.config.autoplay || !t.media.paused || t.embed.hasPlayed ? (Oe.call(t, !0), Nt.call(t, t.media, "playing"), t.timers.playing = setInterval((function() {
                                                            Nt.call(t, t.media, "timeupdate")
                                                        }), 50), t.media.duration !== n.getDuration() && (t.media.duration = n.getDuration(), Nt.call(t, t.media, "durationchange"))) : t.media.pause();
                                                        break;
                                                    case 2:
                                                        t.muted || t.embed.unMute(), Oe.call(t, !1);
                                                        break;
                                                    case 3:
                                                        Nt.call(t, t.media, "waiting")
                                                }
                                                Nt.call(t, t.elements.container, "statechange", !1, {
                                                    code: e.data
                                                })
                                            }
                                        }
                                    })
                                }
                            }
                        },
                        Me = {
                            setup: function() {
                                this.media ? (_t(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), _t(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && _t(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = dt("div", {
                                    class: this.config.classNames.video
                                }), ht(this.media, this.elements.wrapper), this.elements.poster = dt("div", {
                                    class: this.config.classNames.poster
                                }), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? Bt.setup.call(this) : this.isYouTube ? Ee.setup.call(this) : this.isVimeo && ke.setup.call(this)) : this.debug.warn("No media element found!")
                            }
                        },
                        Ce = function() {
                            function e(n) {
                                var i = this;
                                t(this, e), this.player = n, this.config = n.config.ads, this.playing = !1, this.initialized = !1, this.elements = {
                                    container: null,
                                    displayContainer: null
                                }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise((function(t, e) {
                                    i.on("loaded", t), i.on("error", e)
                                })), this.load()
                            }
                            return i(e, [{
                                key: "load",
                                value: function() {
                                    var t = this;
                                    this.enabled && (Y(window.google) && Y(window.google.ima) ? this.ready() : we(this.player.config.urls.googleIMA.sdk).then((function() {
                                        t.ready()
                                    })).catch((function() {
                                        t.trigger("error", new Error("Google IMA SDK failed to load"))
                                    })))
                                }
                            }, {
                                key: "ready",
                                value: function() {
                                    var t, e = this;
                                    this.enabled || ((t = this).manager && t.manager.destroy(), t.elements.displayContainer && t.elements.displayContainer.destroy(), t.elements.container.remove()), this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then((function() {
                                        e.clearSafetyTimer("onAdsManagerLoaded()")
                                    })), this.listeners(), this.setupIMA()
                                }
                            }, {
                                key: "setupIMA",
                                value: function() {
                                    var t = this;
                                    this.elements.container = dt("div", {
                                        class: this.player.config.classNames.ads
                                    }), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container, this.player.media), this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, (function(e) {
                                        return t.onAdsManagerLoaded(e)
                                    }), !1), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (function(e) {
                                        return t.onAdError(e)
                                    }), !1), this.requestAds()
                                }
                            }, {
                                key: "requestAds",
                                value: function() {
                                    var t = this.player.elements.container;
                                    try {
                                        var e = new google.ima.AdsRequest;
                                        e.adTagUrl = this.tagUrl, e.linearAdSlotWidth = t.offsetWidth, e.linearAdSlotHeight = t.offsetHeight, e.nonLinearAdSlotWidth = t.offsetWidth, e.nonLinearAdSlotHeight = t.offsetHeight, e.forceNonLinearFullSlot = !1, e.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(e)
                                    } catch (t) {
                                        this.onAdError(t)
                                    }
                                }
                            }, {
                                key: "pollCountdown",
                                value: function() {
                                    var t = this;
                                    if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0])) return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");
                                    var e = function() {
                                        var e = ie(Math.max(t.manager.getRemainingTime(), 0)),
                                            n = "".concat(Qt("advertisement", t.player.config), " - ").concat(e);
                                        t.elements.container.setAttribute("data-badge-text", n)
                                    };
                                    this.countdownTimer = setInterval(e, 100)
                                }
                            }, {
                                key: "onAdsManagerLoaded",
                                value: function(t) {
                                    var e = this;
                                    if (this.enabled) {
                                        var n = new google.ima.AdsRenderingSettings;
                                        n.restoreCustomPlaybackStateOnAdBreakComplete = !0, n.enablePreloading = !0, this.manager = t.getAdsManager(this.player, n), this.cuePoints = this.manager.getCuePoints(), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (function(t) {
                                            return e.onAdError(t)
                                        })), Object.keys(google.ima.AdEvent.Type).forEach((function(t) {
                                            e.manager.addEventListener(google.ima.AdEvent.Type[t], (function(t) {
                                                return e.onAdEvent(t)
                                            }))
                                        })), this.trigger("loaded")
                                    }
                                }
                            }, {
                                key: "addCuePoints",
                                value: function() {
                                    var t = this;
                                    ot(this.cuePoints) || this.cuePoints.forEach((function(e) {
                                        if (0 !== e && -1 !== e && e < t.player.duration) {
                                            var n = t.player.elements.progress;
                                            if ($(n)) {
                                                var i = 100 / t.player.duration * e,
                                                    r = dt("span", {
                                                        class: t.player.config.classNames.cues
                                                    });
                                                r.style.left = "".concat(i.toString(), "%"), n.appendChild(r)
                                            }
                                        }
                                    }))
                                }
                            }, {
                                key: "onAdEvent",
                                value: function(t) {
                                    var e = this,
                                        n = this.player.elements.container,
                                        i = t.getAd(),
                                        r = t.getAdData();
                                    switch (function(t) {
                                            Nt.call(e.player, e.player.media, "ads".concat(t.replace(/_/g, "").toLowerCase()))
                                        }(t.type), t.type) {
                                        case google.ima.AdEvent.Type.LOADED:
                                            this.trigger("loaded"), this.pollCountdown(!0), i.isLinear() || (i.width = n.offsetWidth, i.height = n.offsetHeight);
                                            break;
                                        case google.ima.AdEvent.Type.STARTED:
                                            this.manager.setVolume(this.player.volume);
                                            break;
                                        case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                                            this.player.ended ? this.loadAds() : this.loader.contentComplete();
                                            break;
                                        case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                                            this.pauseContent();
                                            break;
                                        case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                                            this.pollCountdown(), this.resumeContent();
                                            break;
                                        case google.ima.AdEvent.Type.LOG:
                                            r.adError && this.player.debug.warn("Non-fatal ad error: ".concat(r.adError.getMessage()))
                                    }
                                }
                            }, {
                                key: "onAdError",
                                value: function(t) {
                                    this.cancel(), this.player.debug.warn("Ads error", t)
                                }
                            }, {
                                key: "listeners",
                                value: function() {
                                    var t, e = this,
                                        n = this.player.elements.container;
                                    this.player.on("canplay", (function() {
                                        e.addCuePoints()
                                    })), this.player.on("ended", (function() {
                                        e.loader.contentComplete()
                                    })), this.player.on("timeupdate", (function() {
                                        t = e.player.currentTime
                                    })), this.player.on("seeked", (function() {
                                        var n = e.player.currentTime;
                                        ot(e.cuePoints) || e.cuePoints.forEach((function(i, r) {
                                            t < i && i < n && (e.manager.discardAdBreak(), e.cuePoints.splice(r, 1))
                                        }))
                                    })), window.addEventListener("resize", (function() {
                                        e.manager && e.manager.resize(n.offsetWidth, n.offsetHeight, google.ima.ViewMode.NORMAL)
                                    }))
                                }
                            }, {
                                key: "play",
                                value: function() {
                                    var t = this,
                                        e = this.player.elements.container;
                                    this.managerPromise || this.resumeContent(), this.managerPromise.then((function() {
                                        t.manager.setVolume(t.player.volume), t.elements.displayContainer.initialize();
                                        try {
                                            t.initialized || (t.manager.init(e.offsetWidth, e.offsetHeight, google.ima.ViewMode.NORMAL), t.manager.start()), t.initialized = !0
                                        } catch (e) {
                                            t.onAdError(e)
                                        }
                                    })).catch((function() {}))
                                }
                            }, {
                                key: "resumeContent",
                                value: function() {
                                    this.elements.container.style.zIndex = "", this.playing = !1, Lt(this.player.media.play())
                                }
                            }, {
                                key: "pauseContent",
                                value: function() {
                                    this.elements.container.style.zIndex = 3, this.playing = !0, this.player.media.pause()
                                }
                            }, {
                                key: "cancel",
                                value: function() {
                                    this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds()
                                }
                            }, {
                                key: "loadAds",
                                value: function() {
                                    var t = this;
                                    this.managerPromise.then((function() {
                                        t.manager && t.manager.destroy(), t.managerPromise = new Promise((function(e) {
                                            t.on("loaded", e), t.player.debug.log(t.manager)
                                        })), t.initialized = !1, t.requestAds()
                                    })).catch((function() {}))
                                }
                            }, {
                                key: "trigger",
                                value: function(t) {
                                    for (var e = this, n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                                    var o = this.events[t];
                                    K(o) && o.forEach((function(t) {
                                        Q(t) && t.apply(e, i)
                                    }))
                                }
                            }, {
                                key: "on",
                                value: function(t, e) {
                                    return K(this.events[t]) || (this.events[t] = []), this.events[t].push(e), this
                                }
                            }, {
                                key: "startSafetyTimer",
                                value: function(t, e) {
                                    var n = this;
                                    this.player.debug.log("Safety timer invoked from: ".concat(e)), this.safetyTimer = setTimeout((function() {
                                        n.cancel(), n.clearSafetyTimer("startSafetyTimer()")
                                    }), t)
                                }
                            }, {
                                key: "clearSafetyTimer",
                                value: function(t) {
                                    W(this.safetyTimer) || (this.player.debug.log("Safety timer cleared from: ".concat(t)), clearTimeout(this.safetyTimer), this.safetyTimer = null)
                                }
                            }, {
                                key: "enabled",
                                get: function() {
                                    var t = this.config;
                                    return this.player.isHTML5 && this.player.isVideo && t.enabled && (!ot(t.publisherId) || rt(t.tagUrl))
                                }
                            }, {
                                key: "tagUrl",
                                get: function() {
                                    var t = this.config;
                                    if (rt(t.tagUrl)) return t.tagUrl;
                                    var e = {
                                        AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
                                        AV_CHANNELID: "5a0458dc28a06145e4519d21",
                                        AV_URL: window.location.hostname,
                                        cb: Date.now(),
                                        AV_WIDTH: 640,
                                        AV_HEIGHT: 480,
                                        AV_CDIM2: t.publisherId
                                    };
                                    return "".concat("https://go.aniview.com/api/adserver6/vast/", "?").concat(ae(e))
                                }
                            }]), e
                        }(),
                        je = function(t, e) {
                            var n = {};
                            return t > e.width / e.height ? (n.width = e.width, n.height = 1 / t * e.width) : (n.height = e.height, n.width = t * e.height), n
                        },
                        Pe = function() {
                            function e(n) {
                                t(this, e), this.player = n, this.thumbnails = [], this.loaded = !1, this.lastMouseMoveTime = Date.now(), this.mouseDown = !1, this.loadedImages = [], this.elements = {
                                    thumb: {},
                                    scrubbing: {}
                                }, this.load()
                            }
                            return i(e, [{
                                key: "load",
                                value: function() {
                                    var t = this;
                                    this.player.elements.display.seekTooltip && (this.player.elements.display.seekTooltip.hidden = this.enabled), this.enabled && this.getThumbnails().then((function() {
                                        t.enabled && (t.render(), t.determineContainerAutoSizing(), t.loaded = !0)
                                    }))
                                }
                            }, {
                                key: "getThumbnails",
                                value: function() {
                                    var t = this;
                                    return new Promise((function(e) {
                                        var n = t.player.config.previewThumbnails.src;
                                        if (ot(n)) throw new Error("Missing previewThumbnails.src config attribute");
                                        var i = function() {
                                            t.thumbnails.sort((function(t, e) {
                                                return t.height - e.height
                                            })), t.player.debug.log("Preview thumbnails", t.thumbnails), e()
                                        };
                                        if (Q(n)) n((function(e) {
                                            t.thumbnails = e, i()
                                        }));
                                        else {
                                            var r = (G(n) ? [n] : n).map((function(e) {
                                                return t.getThumbnail(e)
                                            }));
                                            Promise.all(r).then(i)
                                        }
                                    }))
                                }
                            }, {
                                key: "getThumbnail",
                                value: function(t) {
                                    var e = this;
                                    return new Promise((function(n) {
                                        Zt(t).then((function(i) {
                                            var r, o, a = {
                                                frames: (r = i, o = [], r.split(/\r\n\r\n|\n\n|\r\r/).forEach((function(t) {
                                                    var e = {};
                                                    t.split(/\r\n|\n|\r/).forEach((function(t) {
                                                        if (X(e.startTime)) {
                                                            if (!ot(t.trim()) && ot(e.text)) {
                                                                var n = t.trim().split("#xywh="),
                                                                    i = c(n, 1);
                                                                if (e.text = i[0], n[1]) {
                                                                    var r = c(n[1].split(","), 4);
                                                                    e.x = r[0], e.y = r[1], e.w = r[2], e.h = r[3]
                                                                }
                                                            }
                                                        } else {
                                                            var o = t.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
                                                            o && (e.startTime = 60 * Number(o[1] || 0) * 60 + 60 * Number(o[2]) + Number(o[3]) + Number("0.".concat(o[4])), e.endTime = 60 * Number(o[6] || 0) * 60 + 60 * Number(o[7]) + Number(o[8]) + Number("0.".concat(o[9])))
                                                        }
                                                    })), e.text && o.push(e)
                                                })), o),
                                                height: null,
                                                urlPrefix: ""
                                            };
                                            a.frames[0].text.startsWith("/") || a.frames[0].text.startsWith("http://") || a.frames[0].text.startsWith("https://") || (a.urlPrefix = t.substring(0, t.lastIndexOf("/") + 1));
                                            var s = new Image;
                                            s.onload = function() {
                                                a.height = s.naturalHeight, a.width = s.naturalWidth, e.thumbnails.push(a), n()
                                            }, s.src = a.urlPrefix + a.frames[0].text
                                        }))
                                    }))
                                }
                            }, {
                                key: "startMove",
                                value: function(t) {
                                    if (this.loaded && tt(t) && ["touchmove", "mousemove"].includes(t.type) && this.player.media.duration) {
                                        if ("touchmove" === t.type) this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100);
                                        else {
                                            var e = this.player.elements.progress.getBoundingClientRect(),
                                                n = 100 / e.width * (t.pageX - e.left);
                                            this.seekTime = this.player.media.duration * (n / 100), this.seekTime < 0 && (this.seekTime = 0), this.seekTime > this.player.media.duration - 1 && (this.seekTime = this.player.media.duration - 1), this.mousePosX = t.pageX, this.elements.thumb.time.innerText = ie(this.seekTime)
                                        }
                                        this.showImageAtCurrentTime()
                                    }
                                }
                            }, {
                                key: "endMove",
                                value: function() {
                                    this.toggleThumbContainer(!1, !0)
                                }
                            }, {
                                key: "startScrubbing",
                                value: function(t) {
                                    (W(t.button) || !1 === t.button || 0 === t.button) && (this.mouseDown = !0, this.player.media.duration && (this.toggleScrubbingContainer(!0), this.toggleThumbContainer(!1, !0), this.showImageAtCurrentTime()))
                                }
                            }, {
                                key: "endScrubbing",
                                value: function() {
                                    var t = this;
                                    this.mouseDown = !1, Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime) ? this.toggleScrubbingContainer(!1) : It.call(this.player, this.player.media, "timeupdate", (function() {
                                        t.mouseDown || t.toggleScrubbingContainer(!1)
                                    }))
                                }
                            }, {
                                key: "listeners",
                                value: function() {
                                    var t = this;
                                    this.player.on("play", (function() {
                                        t.toggleThumbContainer(!1, !0)
                                    })), this.player.on("seeked", (function() {
                                        t.toggleThumbContainer(!1)
                                    })), this.player.on("timeupdate", (function() {
                                        t.lastTime = t.player.media.currentTime
                                    }))
                                }
                            }, {
                                key: "render",
                                value: function() {
                                    this.elements.thumb.container = dt("div", {
                                        class: this.player.config.classNames.previewThumbnails.thumbContainer
                                    }), this.elements.thumb.imageContainer = dt("div", {
                                        class: this.player.config.classNames.previewThumbnails.imageContainer
                                    }), this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
                                    var t = dt("div", {
                                        class: this.player.config.classNames.previewThumbnails.timeContainer
                                    });
                                    this.elements.thumb.time = dt("span", {}, "00:00"), t.appendChild(this.elements.thumb.time), this.elements.thumb.container.appendChild(t), $(this.player.elements.progress) && this.player.elements.progress.appendChild(this.elements.thumb.container), this.elements.scrubbing.container = dt("div", {
                                        class: this.player.config.classNames.previewThumbnails.scrubbingContainer
                                    }), this.player.elements.wrapper.appendChild(this.elements.scrubbing.container)
                                }
                            }, {
                                key: "destroy",
                                value: function() {
                                    this.elements.thumb.container && this.elements.thumb.container.remove(), this.elements.scrubbing.container && this.elements.scrubbing.container.remove()
                                }
                            }, {
                                key: "showImageAtCurrentTime",
                                value: function() {
                                    var t = this;
                                    this.mouseDown ? this.setScrubbingContainerSize() : this.setThumbContainerSizeAndPos();
                                    var e = this.thumbnails[0].frames.findIndex((function(e) {
                                            return t.seekTime >= e.startTime && t.seekTime <= e.endTime
                                        })),
                                        n = e >= 0,
                                        i = 0;
                                    this.mouseDown || this.toggleThumbContainer(n), n && (this.thumbnails.forEach((function(n, r) {
                                        t.loadedImages.includes(n.frames[e].text) && (i = r)
                                    })), e !== this.showingThumb && (this.showingThumb = e, this.loadImage(i)))
                                }
                            }, {
                                key: "loadImage",
                                value: function() {
                                    var t = this,
                                        e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                        n = this.showingThumb,
                                        i = this.thumbnails[e],
                                        r = i.urlPrefix,
                                        o = i.frames[n],
                                        a = i.frames[n].text,
                                        s = r + a;
                                    if (this.currentImageElement && this.currentImageElement.dataset.filename === a) this.showImage(this.currentImageElement, o, e, n, a, !1), this.currentImageElement.dataset.index = n, this.removeOldImages(this.currentImageElement);
                                    else {
                                        this.loadingImage && this.usingSprites && (this.loadingImage.onload = null);
                                        var c = new Image;
                                        c.src = s, c.dataset.index = n, c.dataset.filename = a, this.showingThumbFilename = a, this.player.debug.log("Loading image: ".concat(s)), c.onload = function() {
                                            return t.showImage(c, o, e, n, a, !0)
                                        }, this.loadingImage = c, this.removeOldImages(c)
                                    }
                                }
                            }, {
                                key: "showImage",
                                value: function(t, e, n, i, r) {
                                    var o = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
                                    this.player.debug.log("Showing thumb: ".concat(r, ". num: ").concat(i, ". qual: ").concat(n, ". newimg: ").concat(o)), this.setImageSizeAndOffset(t, e), o && (this.currentImageContainer.appendChild(t), this.currentImageElement = t, this.loadedImages.includes(r) || this.loadedImages.push(r)), this.preloadNearby(i, !0).then(this.preloadNearby(i, !1)).then(this.getHigherQuality(n, t, e, r))
                                }
                            }, {
                                key: "removeOldImages",
                                value: function(t) {
                                    var e = this;
                                    Array.from(this.currentImageContainer.children).forEach((function(n) {
                                        if ("img" === n.tagName.toLowerCase()) {
                                            var i = e.usingSprites ? 500 : 1e3;
                                            if (n.dataset.index !== t.dataset.index && !n.dataset.deleting) {
                                                n.dataset.deleting = !0;
                                                var r = e.currentImageContainer;
                                                setTimeout((function() {
                                                    r.removeChild(n), e.player.debug.log("Removing thumb: ".concat(n.dataset.filename))
                                                }), i)
                                            }
                                        }
                                    }))
                                }
                            }, {
                                key: "preloadNearby",
                                value: function(t) {
                                    var e = this,
                                        n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                    return new Promise((function(i) {
                                        setTimeout((function() {
                                            var r = e.thumbnails[0].frames[t].text;
                                            if (e.showingThumbFilename === r) {
                                                var o;
                                                o = n ? e.thumbnails[0].frames.slice(t) : e.thumbnails[0].frames.slice(0, t).reverse();
                                                var a = !1;
                                                o.forEach((function(t) {
                                                    var n = t.text;
                                                    if (n !== r && !e.loadedImages.includes(n)) {
                                                        a = !0, e.player.debug.log("Preloading thumb filename: ".concat(n));
                                                        var o = e.thumbnails[0].urlPrefix + n,
                                                            s = new Image;
                                                        s.src = o, s.onload = function() {
                                                            e.player.debug.log("Preloaded thumb filename: ".concat(n)), e.loadedImages.includes(n) || e.loadedImages.push(n), i()
                                                        }
                                                    }
                                                })), a || i()
                                            }
                                        }), 300)
                                    }))
                                }
                            }, {
                                key: "getHigherQuality",
                                value: function(t, e, n, i) {
                                    var r = this;
                                    if (t < this.thumbnails.length - 1) {
                                        var o = e.naturalHeight;
                                        this.usingSprites && (o = n.h), o < this.thumbContainerHeight && setTimeout((function() {
                                            r.showingThumbFilename === i && (r.player.debug.log("Showing higher quality thumb for: ".concat(i)), r.loadImage(t + 1))
                                        }), 300)
                                    }
                                }
                            }, {
                                key: "toggleThumbContainer",
                                value: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                        e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                        n = this.player.config.classNames.previewThumbnails.thumbContainerShown;
                                    this.elements.thumb.container.classList.toggle(n, t), !t && e && (this.showingThumb = null, this.showingThumbFilename = null)
                                }
                            }, {
                                key: "toggleScrubbingContainer",
                                value: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                        e = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
                                    this.elements.scrubbing.container.classList.toggle(e, t), t || (this.showingThumb = null, this.showingThumbFilename = null)
                                }
                            }, {
                                key: "determineContainerAutoSizing",
                                value: function() {
                                    (this.elements.thumb.imageContainer.clientHeight > 20 || this.elements.thumb.imageContainer.clientWidth > 20) && (this.sizeSpecifiedInCSS = !0)
                                }
                            }, {
                                key: "setThumbContainerSizeAndPos",
                                value: function() {
                                    if (this.sizeSpecifiedInCSS) {
                                        if (this.elements.thumb.imageContainer.clientHeight > 20 && this.elements.thumb.imageContainer.clientWidth < 20) {
                                            var t = Math.floor(this.elements.thumb.imageContainer.clientHeight * this.thumbAspectRatio);
                                            this.elements.thumb.imageContainer.style.width = "".concat(t, "px")
                                        } else if (this.elements.thumb.imageContainer.clientHeight < 20 && this.elements.thumb.imageContainer.clientWidth > 20) {
                                            var e = Math.floor(this.elements.thumb.imageContainer.clientWidth / this.thumbAspectRatio);
                                            this.elements.thumb.imageContainer.style.height = "".concat(e, "px")
                                        }
                                    } else {
                                        var n = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
                                        this.elements.thumb.imageContainer.style.height = "".concat(this.thumbContainerHeight, "px"), this.elements.thumb.imageContainer.style.width = "".concat(n, "px")
                                    }
                                    this.setThumbContainerPos()
                                }
                            }, {
                                key: "setThumbContainerPos",
                                value: function() {
                                    var t = this.player.elements.progress.getBoundingClientRect(),
                                        e = this.player.elements.container.getBoundingClientRect(),
                                        n = this.elements.thumb.container,
                                        i = e.left - t.left + 10,
                                        r = e.right - t.left - n.clientWidth - 10,
                                        o = this.mousePosX - t.left - n.clientWidth / 2;
                                    o < i && (o = i), o > r && (o = r), n.style.left = "".concat(o, "px")
                                }
                            }, {
                                key: "setScrubbingContainerSize",
                                value: function() {
                                    var t = je(this.thumbAspectRatio, {
                                            width: this.player.media.clientWidth,
                                            height: this.player.media.clientHeight
                                        }),
                                        e = t.width,
                                        n = t.height;
                                    this.elements.scrubbing.container.style.width = "".concat(e, "px"), this.elements.scrubbing.container.style.height = "".concat(n, "px")
                                }
                            }, {
                                key: "setImageSizeAndOffset",
                                value: function(t, e) {
                                    if (this.usingSprites) {
                                        var n = this.thumbContainerHeight / e.h;
                                        t.style.height = "".concat(t.naturalHeight * n, "px"), t.style.width = "".concat(t.naturalWidth * n, "px"), t.style.left = "-".concat(e.x * n, "px"), t.style.top = "-".concat(e.y * n, "px")
                                    }
                                }
                            }, {
                                key: "enabled",
                                get: function() {
                                    return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled
                                }
                            }, {
                                key: "currentImageContainer",
                                get: function() {
                                    return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer
                                }
                            }, {
                                key: "usingSprites",
                                get: function() {
                                    return Object.keys(this.thumbnails[0].frames[0]).includes("w")
                                }
                            }, {
                                key: "thumbAspectRatio",
                                get: function() {
                                    return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height
                                }
                            }, {
                                key: "thumbContainerHeight",
                                get: function() {
                                    return this.mouseDown ? je(this.thumbAspectRatio, {
                                        width: this.player.media.clientWidth,
                                        height: this.player.media.clientHeight
                                    }).height : this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4)
                                }
                            }, {
                                key: "currentImageElement",
                                get: function() {
                                    return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement
                                },
                                set: function(t) {
                                    this.mouseDown ? this.currentScrubbingImageElement = t : this.currentThumbnailImageElement = t
                                }
                            }]), e
                        }(),
                        Ae = {
                            insertElements: function(t, e) {
                                var n = this;
                                G(e) ? pt(t, this.media, {
                                    src: e
                                }) : K(e) && e.forEach((function(e) {
                                    pt(t, n.media, e)
                                }))
                            },
                            change: function(t) {
                                var e = this;
                                ut(t, "sources.length") ? (Bt.cancelRequests.call(this), this.destroy.call(this, (function() {
                                    e.options.quality = [], mt(e.media), e.media = null, $(e.elements.container) && e.elements.container.removeAttribute("class");
                                    var n = t.sources,
                                        i = t.type,
                                        r = c(n, 1)[0],
                                        o = r.provider,
                                        a = void 0 === o ? he.html5 : o,
                                        s = r.src,
                                        u = "html5" === a ? i : "div",
                                        l = "html5" === a ? {} : {
                                            src: s
                                        };
                                    Object.assign(e, {
                                        provider: a,
                                        type: i,
                                        supported: Mt.check(i, a, e.config.playsinline),
                                        media: dt(u, l)
                                    }), e.elements.container.appendChild(e.media), J(t.autoplay) && (e.config.autoplay = t.autoplay), e.isHTML5 && (e.config.crossorigin && e.media.setAttribute("crossorigin", ""), e.config.autoplay && e.media.setAttribute("autoplay", ""), ot(t.poster) || (e.poster = t.poster), e.config.loop.active && e.media.setAttribute("loop", ""), e.config.muted && e.media.setAttribute("muted", ""), e.config.playsinline && e.media.setAttribute("playsinline", "")), ye.addStyleHook.call(e), e.isHTML5 && Ae.insertElements.call(e, "source", n), e.config.title = t.title, Me.setup.call(e), e.isHTML5 && Object.keys(t).includes("tracks") && Ae.insertElements.call(e, "track", t.tracks), (e.isHTML5 || e.isEmbed && !e.supported.ui) && ye.build.call(e), e.isHTML5 && e.media.load(), ot(t.previewThumbnails) || (Object.assign(e.config.previewThumbnails, t.previewThumbnails), e.previewThumbnails && e.previewThumbnails.loaded && (e.previewThumbnails.destroy(), e.previewThumbnails = null), e.config.previewThumbnails.enabled && (e.previewThumbnails = new Pe(e))), e.fullscreen.update()
                                }), !0)) : this.debug.warn("Invalid source format")
                            }
                        },
                        Ie = function() {
                            function e(n, i) {
                                var r = this;
                                if (t(this, e), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = Mt.touch, this.media = n, G(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || Z(this.media) || K(this.media)) && (this.media = this.media[0]), this.config = lt({}, ce, e.defaults, i || {}, function() {
                                        try {
                                            return JSON.parse(r.media.getAttribute("data-plyr-config"))
                                        } catch (t) {
                                            return {}
                                        }
                                    }()), this.elements = {
                                        container: null,
                                        fullscreen: null,
                                        captions: null,
                                        buttons: {},
                                        display: {},
                                        progress: {},
                                        inputs: {},
                                        settings: {
                                            popup: null,
                                            menu: null,
                                            panels: {},
                                            buttons: {}
                                        }
                                    }, this.captions = {
                                        active: null,
                                        currentTrack: -1,
                                        meta: new WeakMap
                                    }, this.fullscreen = {
                                        active: !1
                                    }, this.options = {
                                        speed: [],
                                        quality: []
                                    }, this.debug = new me(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", Mt), !W(this.media) && $(this.media))
                                    if (this.media.plyr) this.debug.warn("Target already setup");
                                    else if (this.config.enabled)
                                    if (Mt.check().api) {
                                        var o = this.media.cloneNode(!0);
                                        o.autoplay = !1, this.elements.original = o;
                                        var a = this.media.tagName.toLowerCase(),
                                            s = null,
                                            c = null;
                                        switch (a) {
                                            case "div":
                                                if (s = this.media.querySelector("iframe"), $(s)) {
                                                    if (c = oe(s.getAttribute("src")), this.provider = function(t) {
                                                            return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(t) ? he.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(t) ? he.vimeo : null
                                                        }(c.toString()), this.elements.container = this.media, this.media = s, this.elements.container.className = "", c.search.length) {
                                                        var u = ["1", "true"];
                                                        u.includes(c.searchParams.get("autoplay")) && (this.config.autoplay = !0), u.includes(c.searchParams.get("loop")) && (this.config.loop.active = !0), this.isYouTube ? (this.config.playsinline = u.includes(c.searchParams.get("playsinline")), this.config.youtube.hl = c.searchParams.get("hl")) : this.config.playsinline = !0
                                                    }
                                                } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
                                                if (ot(this.provider) || !Object.keys(he).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
                                                this.type = de;
                                                break;
                                            case "video":
                                            case "audio":
                                                this.type = a, this.provider = he.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
                                                break;
                                            default:
                                                return void this.debug.error("Setup failed: unsupported type")
                                        }
                                        this.supported = Mt.check(this.type, this.provider, this.config.playsinline), this.supported.api ? (this.eventListeners = [], this.listeners = new be(this), this.storage = new Kt(this), this.media.plyr = this, $(this.elements.container) || (this.elements.container = dt("div", {
                                            tabindex: 0
                                        }), ht(this.media, this.elements.container)), ye.migrateStyles.call(this), ye.addStyleHook.call(this), Me.setup.call(this), this.config.debug && Pt.call(this, this.elements.container, this.config.events.join(" "), (function(t) {
                                            r.debug.log("event: ".concat(t.type))
                                        })), this.fullscreen = new ge(this), (this.isHTML5 || this.isEmbed && !this.supported.ui) && ye.build.call(this), this.listeners.container(), this.listeners.global(), this.config.ads.enabled && (this.ads = new Ce(this)), this.isHTML5 && this.config.autoplay && setTimeout((function() {
                                            return Lt(r.play())
                                        }), 10), this.lastSeekTime = 0, this.config.previewThumbnails.enabled && (this.previewThumbnails = new Pe(this))) : this.debug.error("Setup failed: no support")
                                    } else this.debug.error("Setup failed: no support");
                                else this.debug.error("Setup failed: disabled by config");
                                else this.debug.error("Setup failed: no suitable element passed")
                            }
                            return i(e, [{
                                key: "play",
                                value: function() {
                                    var t = this;
                                    return Q(this.media.play) ? (this.ads && this.ads.enabled && this.ads.managerPromise.then((function() {
                                        return t.ads.play()
                                    })).catch((function() {
                                        return Lt(t.media.play())
                                    })), this.media.play()) : null
                                }
                            }, {
                                key: "pause",
                                value: function() {
                                    return this.playing && Q(this.media.pause) ? this.media.pause() : null
                                }
                            }, {
                                key: "togglePlay",
                                value: function(t) {
                                    return (J(t) ? t : !this.playing) ? this.play() : this.pause()
                                }
                            }, {
                                key: "stop",
                                value: function() {
                                    this.isHTML5 ? (this.pause(), this.restart()) : Q(this.media.stop) && this.media.stop()
                                }
                            }, {
                                key: "restart",
                                value: function() {
                                    this.currentTime = 0
                                }
                            }, {
                                key: "rewind",
                                value: function(t) {
                                    this.currentTime -= X(t) ? t : this.config.seekTime
                                }
                            }, {
                                key: "forward",
                                value: function(t) {
                                    this.currentTime += X(t) ? t : this.config.seekTime
                                }
                            }, {
                                key: "increaseVolume",
                                value: function(t) {
                                    var e = this.media.muted ? 0 : this.volume;
                                    this.volume = e + (X(t) ? t : 0)
                                }
                            }, {
                                key: "decreaseVolume",
                                value: function(t) {
                                    this.increaseVolume(-t)
                                }
                            }, {
                                key: "toggleCaptions",
                                value: function(t) {
                                    se.toggle.call(this, t, !1)
                                }
                            }, {
                                key: "airplay",
                                value: function() {
                                    Mt.airplay && this.media.webkitShowPlaybackTargetPicker()
                                }
                            }, {
                                key: "toggleControls",
                                value: function(t) {
                                    if (this.supported.ui && !this.isAudio) {
                                        var e = wt(this.elements.container, this.config.classNames.hideControls),
                                            n = void 0 === t ? void 0 : !t,
                                            i = _t(this.elements.container, this.config.classNames.hideControls, n);
                                        if (i && K(this.config.controls) && this.config.controls.includes("settings") && !ot(this.config.settings) && re.toggleMenu.call(this, !1), i !== e) {
                                            var r = i ? "controlshidden" : "controlsshown";
                                            Nt.call(this, this.media, r)
                                        }
                                        return !i
                                    }
                                    return !1
                                }
                            }, {
                                key: "on",
                                value: function(t, e) {
                                    Pt.call(this, this.elements.container, t, e)
                                }
                            }, {
                                key: "once",
                                value: function(t, e) {
                                    It.call(this, this.elements.container, t, e)
                                }
                            }, {
                                key: "off",
                                value: function(t, e) {
                                    At(this.elements.container, t, e)
                                }
                            }, {
                                key: "destroy",
                                value: function(t) {
                                    var e = this,
                                        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                    if (this.ready) {
                                        var i = function() {
                                            document.body.style.overflow = "", e.embed = null, n ? (Object.keys(e.elements).length && (mt(e.elements.buttons.play), mt(e.elements.captions), mt(e.elements.controls), mt(e.elements.wrapper), e.elements.buttons.play = null, e.elements.captions = null, e.elements.controls = null, e.elements.wrapper = null), Q(t) && t()) : (Rt.call(e), vt(e.elements.original, e.elements.container), Nt.call(e, e.elements.original, "destroyed", !0), Q(t) && t.call(e.elements.original), e.ready = !1, setTimeout((function() {
                                                e.elements = null, e.media = null
                                            }), 200))
                                        };
                                        this.stop(), clearTimeout(this.timers.loading), clearTimeout(this.timers.controls), clearTimeout(this.timers.resized), this.isHTML5 ? (ye.toggleNativeControls.call(this, !0), i()) : this.isYouTube ? (clearInterval(this.timers.buffering), clearInterval(this.timers.playing), null !== this.embed && Q(this.embed.destroy) && this.embed.destroy(), i()) : this.isVimeo && (null !== this.embed && this.embed.unload().then(i), setTimeout(i, 200))
                                    }
                                }
                            }, {
                                key: "supports",
                                value: function(t) {
                                    return Mt.mime.call(this, t)
                                }
                            }, {
                                key: "isHTML5",
                                get: function() {
                                    return this.provider === he.html5
                                }
                            }, {
                                key: "isEmbed",
                                get: function() {
                                    return this.isYouTube || this.isVimeo
                                }
                            }, {
                                key: "isYouTube",
                                get: function() {
                                    return this.provider === he.youtube
                                }
                            }, {
                                key: "isVimeo",
                                get: function() {
                                    return this.provider === he.vimeo
                                }
                            }, {
                                key: "isVideo",
                                get: function() {
                                    return this.type === de
                                }
                            }, {
                                key: "isAudio",
                                get: function() {
                                    return this.type === fe
                                }
                            }, {
                                key: "playing",
                                get: function() {
                                    return Boolean(this.ready && !this.paused && !this.ended)
                                }
                            }, {
                                key: "paused",
                                get: function() {
                                    return Boolean(this.media.paused)
                                }
                            }, {
                                key: "stopped",
                                get: function() {
                                    return Boolean(this.paused && 0 === this.currentTime)
                                }
                            }, {
                                key: "ended",
                                get: function() {
                                    return Boolean(this.media.ended)
                                }
                            }, {
                                key: "currentTime",
                                set: function(t) {
                                    if (this.duration) {
                                        var e = X(t) && t > 0;
                                        this.media.currentTime = e ? Math.min(t, this.duration) : 0, this.debug.log("Seeking to ".concat(this.currentTime, " seconds"))
                                    }
                                },
                                get: function() {
                                    return Number(this.media.currentTime)
                                }
                            }, {
                                key: "buffered",
                                get: function() {
                                    var t = this.media.buffered;
                                    return X(t) ? t : t && t.length && this.duration > 0 ? t.end(0) / this.duration : 0
                                }
                            }, {
                                key: "seeking",
                                get: function() {
                                    return Boolean(this.media.seeking)
                                }
                            }, {
                                key: "duration",
                                get: function() {
                                    var t = parseFloat(this.config.duration),
                                        e = (this.media || {}).duration,
                                        n = X(e) && e !== 1 / 0 ? e : 0;
                                    return t || n
                                }
                            }, {
                                key: "volume",
                                set: function(t) {
                                    var e = t;
                                    G(e) && (e = Number(e)), X(e) || (e = this.storage.get("volume")), X(e) || (e = this.config.volume), e > 1 && (e = 1), e < 0 && (e = 0), this.config.volume = e, this.media.volume = e, !ot(t) && this.muted && e > 0 && (this.muted = !1)
                                },
                                get: function() {
                                    return Number(this.media.volume)
                                }
                            }, {
                                key: "muted",
                                set: function(t) {
                                    var e = t;
                                    J(e) || (e = this.storage.get("muted")), J(e) || (e = this.config.muted), this.config.muted = e, this.media.muted = e
                                },
                                get: function() {
                                    return Boolean(this.media.muted)
                                }
                            }, {
                                key: "hasAudio",
                                get: function() {
                                    return !this.isHTML5 || !!this.isAudio || Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length)
                                }
                            }, {
                                key: "speed",
                                set: function(t) {
                                    var e = this,
                                        n = null;
                                    X(t) && (n = t), X(n) || (n = this.storage.get("speed")), X(n) || (n = this.config.speed.selected);
                                    var i = this.minimumSpeed,
                                        r = this.maximumSpeed;
                                    n = function() {
                                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 255;
                                        return Math.min(Math.max(t, e), n)
                                    }(n, i, r), this.config.speed.selected = n, setTimeout((function() {
                                        e.media.playbackRate = n
                                    }), 0)
                                },
                                get: function() {
                                    return Number(this.media.playbackRate)
                                }
                            }, {
                                key: "minimumSpeed",
                                get: function() {
                                    return this.isYouTube ? Math.min.apply(Math, u(this.options.speed)) : this.isVimeo ? .5 : .0625
                                }
                            }, {
                                key: "maximumSpeed",
                                get: function() {
                                    return this.isYouTube ? Math.max.apply(Math, u(this.options.speed)) : this.isVimeo ? 2 : 16
                                }
                            }, {
                                key: "quality",
                                set: function(t) {
                                    var e = this.config.quality,
                                        n = this.options.quality;
                                    if (n.length) {
                                        var i = [!ot(t) && Number(t), this.storage.get("quality"), e.selected, e.default].find(X),
                                            r = !0;
                                        if (!n.includes(i)) {
                                            var o = function(t, e) {
                                                return K(t) && t.length ? t.reduce((function(t, n) {
                                                    return Math.abs(n - e) < Math.abs(t - e) ? n : t
                                                })) : null
                                            }(n, i);
                                            this.debug.warn("Unsupported quality option: ".concat(i, ", using ").concat(o, " instead")), i = o, r = !1
                                        }
                                        e.selected = i, this.media.quality = i, r && this.storage.set({
                                            quality: i
                                        })
                                    }
                                },
                                get: function() {
                                    return this.media.quality
                                }
                            }, {
                                key: "loop",
                                set: function(t) {
                                    var e = J(t) ? t : this.config.loop.active;
                                    this.config.loop.active = e, this.media.loop = e
                                },
                                get: function() {
                                    return Boolean(this.media.loop)
                                }
                            }, {
                                key: "source",
                                set: function(t) {
                                    Ae.change.call(this, t)
                                },
                                get: function() {
                                    return this.media.currentSrc
                                }
                            }, {
                                key: "download",
                                get: function() {
                                    var t = this.config.urls.download;
                                    return rt(t) ? t : this.source
                                },
                                set: function(t) {
                                    rt(t) && (this.config.urls.download = t, re.setDownloadUrl.call(this))
                                }
                            }, {
                                key: "poster",
                                set: function(t) {
                                    this.isVideo ? ye.setPoster.call(this, t, !1).catch((function() {})) : this.debug.warn("Poster can only be set for video")
                                },
                                get: function() {
                                    return this.isVideo ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster") : null
                                }
                            }, {
                                key: "ratio",
                                get: function() {
                                    if (!this.isVideo) return null;
                                    var t = zt(Ft.call(this));
                                    return K(t) ? t.join(":") : t
                                },
                                set: function(t) {
                                    this.isVideo ? G(t) && qt(t) ? (this.config.ratio = t, Ht.call(this)) : this.debug.error("Invalid aspect ratio specified (".concat(t, ")")) : this.debug.warn("Aspect ratio can only be set for video")
                                }
                            }, {
                                key: "autoplay",
                                set: function(t) {
                                    var e = J(t) ? t : this.config.autoplay;
                                    this.config.autoplay = e
                                },
                                get: function() {
                                    return Boolean(this.config.autoplay)
                                }
                            }, {
                                key: "currentTrack",
                                set: function(t) {
                                    se.set.call(this, t, !1)
                                },
                                get: function() {
                                    var t = this.captions,
                                        e = t.toggled,
                                        n = t.currentTrack;
                                    return e ? n : -1
                                }
                            }, {
                                key: "language",
                                set: function(t) {
                                    se.setLanguage.call(this, t, !1)
                                },
                                get: function() {
                                    return (se.getCurrentTrack.call(this) || {}).language
                                }
                            }, {
                                key: "pip",
                                set: function(t) {
                                    if (Mt.pip) {
                                        var e = J(t) ? t : !this.pip;
                                        Q(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(e ? ue : le), Q(this.media.requestPictureInPicture) && (!this.pip && e ? this.media.requestPictureInPicture() : this.pip && !e && document.exitPictureInPicture())
                                    }
                                },
                                get: function() {
                                    return Mt.pip ? ot(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === ue : null
                                }
                            }], [{
                                key: "supported",
                                value: function(t, e, n) {
                                    return Mt.check(t, e, n)
                                }
                            }, {
                                key: "loadSprite",
                                value: function(t, e) {
                                    return $t(t, e)
                                }
                            }, {
                                key: "setup",
                                value: function(t) {
                                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                        i = null;
                                    return G(t) ? i = Array.from(document.querySelectorAll(t)) : Z(t) ? i = Array.from(t) : K(t) && (i = t.filter($)), ot(i) ? null : i.map((function(t) {
                                        return new e(t, n)
                                    }))
                                }
                            }]), e
                        }();
                    return Ie.defaults = (Se = ce, JSON.parse(JSON.stringify(Se))), Ie
                }())
            }).call(this, n("yLpj"))
        },
        "U+FB": function(t, e, n) {
            t.exports = {
                introduction: "about_introduction__2081-",
                description: "about_description__TDW1n",
                statue: "about_statue__bM2iT",
                statueShadow: "about_statueShadow__3t9s5",
                descriptionLeft: "about_descriptionLeft__N5Yzx",
                textBackground: "about_textBackground__Pqiq1",
                textGoliath: "about_textGoliath__3C5xz",
                textEntertainment: "about_textEntertainment__2p0Qg",
                descriptionRight: "about_descriptionRight__1YSVz",
                descriptionRightContent: "about_descriptionRightContent__14U9K",
                sentence: "about_sentence__3-Pfy",
                description_2: "about_description_2__2rhrO",
                descriptionLeft_2: "about_descriptionLeft_2__2aTpE",
                descriptionRight_2: "about_descriptionRight_2__49q9Z",
                videoContainer: "about_videoContainer__3O3vj",
                iframeContainer: "about_iframeContainer__2pFOS",
                playButton: "about_playButton__Qi9rf",
                playButtonContainer: "about_playButtonContainer__2MVp_",
                videoText: "about_videoText__1OtwQ"
            }
        },
        UYQp: function(t, e, n) {
            t.exports = {
                component: "management_component__2E3vr",
                title: "management_title__2AdN6",
                eyes: "management_eyes__17Pea",
                artists: "management_artists__MdJgD"
            }
        },
        V1Fd: function(t, e, n) {
            "use strict";
            var i = n("Qetd"),
                r = n("ftCV"),
                o = n("ueIO"),
                a = n("xM0z"),
                s = n("cIWD"),
                c = ["projectId", "dataset", "imageOptions"],
                u = {
                    imageOptions: {}
                };

            function l(t) {
                return "block" === t._type && t.listItem
            }
            t.exports = function(t, e, n, h) {
                var f = i({}, u, e),
                    d = Array.isArray(f.blocks) ? f.blocks : [f.blocks],
                    p = a(d),
                    m = o(p, f.listNestMode),
                    g = s(n, f.serializers || {}),
                    v = c.reduce((function(t, e) {
                        var n = f[e];
                        return "undefined" !== typeof n && (t[e] = n), t
                    }), {});

                function y(e, n, i, o) {
                    return "list" === (a = e)._type && a.listItem ? function(e) {
                        var n = e.listItem,
                            i = e.level,
                            r = e._key,
                            o = e.children.map(y);
                        return t(g.list, {
                            key: r,
                            level: i,
                            type: n,
                            options: v
                        }, o)
                    }(e) : l(e) ? function(e, n) {
                        var i = e._key,
                            o = r(e).map(y);
                        return t(g.listItem, {
                            node: e,
                            serializers: g,
                            index: n,
                            key: i,
                            options: v
                        }, o)
                    }(e, function(t, e) {
                        for (var n = 0, i = 0; i < e.length; i++) {
                            if (e[i] === t) return n;
                            l(e[i]) && n++
                        }
                        return n
                    }(e, i)) : function(t) {
                        return "string" === typeof t || t.marks || "span" === t._type
                    }(e) ? h(e, g, n, {
                        serializeNode: y
                    }) : function(e, n, i) {
                        var o = r(e).map((function(t, e, n) {
                                return y(t, e, n, !0)
                            })),
                            a = {
                                key: e._key || "block-".concat(n),
                                node: e,
                                isInline: i,
                                serializers: g,
                                options: v
                            };
                        return t(g.block, a, o)
                    }(e, n, o);
                    var a
                }
                var b = Boolean(f.renderContainerOnSingleChild),
                    _ = m.map(y);
                if (b || _.length > 1) {
                    var w = f.className ? {
                        className: f.className
                    } : {};
                    return t(g.container, w, _)
                }
                return _[0] ? _[0] : "function" === typeof g.empty ? t(g.empty) : g.empty
            }
        },
        VmPP: function(t, e, n) {
            "use strict";

            function i(t) {
                return (i = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            var r = ["image", "file"],
                o = ["before", "after", "replace"];
            e.dataset = function(t) {
                if (!/^[-\w]{1,128}$/.test(t)) throw new Error("Datasets can only contain lowercase characters, numbers, underscores and dashes")
            }, e.projectId = function(t) {
                if (!/^[-a-z0-9]+$/i.test(t)) throw new Error("`projectId` can only contain only a-z, 0-9 and dashes")
            }, e.validateAssetType = function(t) {
                if (-1 === r.indexOf(t)) throw new Error("Invalid asset type: ".concat(t, ". Must be one of ").concat(r.join(", ")))
            }, e.validateObject = function(t, e) {
                if (null === e || "object" !== i(e) || Array.isArray(e)) throw new Error("".concat(t, "() takes an object of properties"))
            }, e.requireDocumentId = function(t, n) {
                if (!n._id) throw new Error("".concat(t, '() requires that the document contains an ID ("_id" property)'));
                e.validateDocumentId(t, n._id)
            }, e.validateDocumentId = function(t, e) {
                if ("string" !== typeof e || !/^[a-z0-9_.-]+$/i.test(e)) throw new Error("".concat(t, '(): "').concat(e, '" is not a valid document ID'))
            }, e.validateInsert = function(t, e, n) {
                var i = "insert(at, selector, items)";
                if (-1 === o.indexOf(t)) {
                    var r = o.map((function(t) {
                        return '"'.concat(t, '"')
                    })).join(", ");
                    throw new Error("".concat(i, ' takes an "at"-argument which is one of: ').concat(r))
                }
                if ("string" !== typeof e) throw new Error("".concat(i, ' takes a "selector"-argument which must be a string'));
                if (!Array.isArray(n)) throw new Error("".concat(i, ' takes an "items"-argument which must be an array'))
            }, e.hasDataset = function(t) {
                if (!t.gradientMode && !t.dataset) throw new Error("`dataset` must be provided to perform queries");
                return t.dataset || ""
            }
        },
        W7kf: function(t, e, n) {
            "use strict";
            n.d(e, "b", (function() {
                return m
            }));
            var i, r = n("1eSL"),
                o = n.n(r),
                a = n("eJpK"),
                s = n("ZpPj"),
                c = null,
                u = new o.a,
                l = new a.a(0, 0),
                h = new a.a(0, 0),
                f = new a.a(0, 0),
                d = new a.a(0, 0),
                p = function(t) {
                    u.preventDefault && t.preventDefault && t.preventDefault(), h.x = l.x, h.y = l.y, h.time = u.time, s.a.toPoint(t, l), u.time = Date.now(), d.x = l.x / window.innerWidth * 2 - 1, d.y = -l.y / window.innerHeight * 2 + 1, i = Math.max(1, u.time - h.time), f.x = (l.x - h.x) / i, f.y = (l.y - h.y) / i, u.dispatch(l, d, f, t)
                };

            function m() {
                c = document.querySelector(".app") || document.body, l.x = h.x = .5 * window.innerWidth, l.y = h.y = .5 * window.innerHeight, u.enable = function(t) {
                    t && (c.addEventListener("mousemove", p, {
                        passive: !1
                    }), c.addEventListener("touchmove", p, {
                        passive: !1
                    }))
                }, u.enable(!0)
            }
            u.point = l, u.pointFromCenter = d, u.vector = f, u.time = 0, e.a = u
        },
        Xuae: function(t, e, n) {
            "use strict";
            var i = n("RIqP"),
                r = n("lwsE"),
                o = n("W8MJ"),
                a = (n("PJYZ"), n("7W2i")),
                s = n("a1gu"),
                c = n("Nsbk");

            function u(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, i = c(t);
                    if (e) {
                        var r = c(this).constructor;
                        n = Reflect.construct(i, arguments, r)
                    } else n = i.apply(this, arguments);
                    return s(this, n)
                }
            }
            e.__esModule = !0, e.default = void 0;
            var l = n("q1tI"),
                h = function(t) {
                    a(n, t);
                    var e = u(n);

                    function n(t) {
                        var o;
                        return r(this, n), (o = e.call(this, t))._hasHeadManager = void 0, o.emitChange = function() {
                            o._hasHeadManager && o.props.headManager.updateHead(o.props.reduceComponentsToState(i(o.props.headManager.mountedInstances), o.props))
                        }, o._hasHeadManager = o.props.headManager && o.props.headManager.mountedInstances, o
                    }
                    return o(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this._hasHeadManager && this.props.headManager.mountedInstances.add(this), this.emitChange()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.emitChange()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this._hasHeadManager && this.props.headManager.mountedInstances.delete(this), this.emitChange()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return null
                        }
                    }]), n
                }(l.Component);
            e.default = h
        },
        "Xwq/": function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n("FWf1"),
                r = n("p//D"),
                o = n("GiSu");
            e.toSubscriber = function(t, e, n) {
                if (t) {
                    if (t instanceof i.Subscriber) return t;
                    if (t[r.rxSubscriber]) return t[r.rxSubscriber]()
                }
                return t || e || n ? new i.Subscriber(t, e, n) : new i.Subscriber(o.empty)
            }
        },
        YIS7: function(t, e, n) {
            "use strict";
            t.exports = function(t) {
                var e = [];
                for (var n in t) t.hasOwnProperty(n) && e.push("".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(t[n])));
                return e.length > 0 ? "?".concat(e.join("&")) : ""
            }
        },
        YK4L: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n("vrE+"),
                r = n("76/Q"),
                o = n("1Z+e"),
                a = n("9AGB");
            e.reduce = function(t, e) {
                return arguments.length >= 2 ? function(n) {
                    return a.pipe(i.scan(t, e), r.takeLast(1), o.defaultIfEmpty(e))(n)
                } : function(e) {
                    return a.pipe(i.scan((function(e, n, i) {
                        return t(e, n, i + 1)
                    })), r.takeLast(1))(e)
                }
            }
        },
        ZESv: function(t, e) {
            var n = function(t) {
                return t.replace(/^\s+|\s+$/g, "")
            };
            t.exports = function(t) {
                if (!t) return {};
                for (var e, i = {}, r = n(t).split("\n"), o = 0; o < r.length; o++) {
                    var a = r[o],
                        s = a.indexOf(":"),
                        c = n(a.slice(0, s)).toLowerCase(),
                        u = n(a.slice(s + 1));
                    "undefined" === typeof i[c] ? i[c] = u : (e = i[c], "[object Array]" === Object.prototype.toString.call(e) ? i[c].push(u) : i[c] = [i[c], u])
                }
                return i
            }
        },
        ZH8p: function(t, e, n) {
            t.exports = {
                component: "menuIcon_component__3qkFP"
            }
        },
        ZeDx: function(t, e, n) {
            var i = n("7Q5a");
            t.exports = window.EventSource || i.EventSource
        },
        ZpPj: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return a
            }));
            var i = n("1OyB"),
                r = n("vuIU"),
                o = n("eJpK"),
                a = function() {
                    function t() {
                        Object(i.a)(this, t)
                    }
                    return Object(r.a)(t, null, [{
                        key: "toPoint",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.a,
                                n = t.changedTouches ? t.changedTouches[0] : t.touches ? t.touches[0] : t;
                            return e.x = n.clientX, e.y = n.clientY, e
                        }
                    }]), t
                }()
        },
        a1gu: function(t, e, n) {
            var i = n("cDf5"),
                r = n("PJYZ");
            t.exports = function(t, e) {
                return !e || "object" !== i(e) && "function" !== typeof e ? r(t) : e
            }
        },
        a6RD: function(t, e, n) {
            "use strict";
            var i = n("lSNA");

            function r(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function o(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? r(Object(n), !0).forEach((function(e) {
                        i(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            e.__esModule = !0, e.noSSR = c, e.default = function(t, e) {
                var n = a.default,
                    i = {
                        loading: function(t) {
                            t.error, t.isLoading;
                            return t.pastDelay, null
                        }
                    };
                t instanceof Promise ? i.loader = function() {
                    return t
                } : "function" === typeof t ? i.loader = t : "object" === typeof t && (i = o(o({}, i), t));
                if (i = o(o({}, i), e), "object" === typeof t && !(t instanceof Promise) && (t.render && (i.render = function(e, n) {
                        return t.render(n, e)
                    }), t.modules)) {
                    n = a.default.Map;
                    var r = {},
                        s = t.modules();
                    Object.keys(s).forEach((function(t) {
                        var e = s[t];
                        "function" !== typeof e.then ? r[t] = e : r[t] = function() {
                            return e.then((function(t) {
                                return t.default || t
                            }))
                        }
                    })), i.loader = r
                }
                i.loadableGenerated && delete(i = o(o({}, i), i.loadableGenerated)).loadableGenerated;
                if ("boolean" === typeof i.ssr) {
                    if (!i.ssr) return delete i.ssr, c(n, i);
                    delete i.ssr
                }
                return n(i)
            };
            s(n("q1tI"));
            var a = s(n("2qu3"));

            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function c(t, e) {
                return delete e.webpack, delete e.modules, t(e)
            }
        },
        a7GE: function(t, e, n) {
            "use strict";
            var i = n("fXrF"),
                r = n("ZESv"),
                o = window,
                a = o.XMLHttpRequest || function() {},
                s = "withCredentials" in new a ? a : o.XDomainRequest;
            t.exports = function(t, e) {
                var n = t.options,
                    c = t.applyMiddleware("finalizeOptions", n),
                    u = {},
                    l = o && o.location && !i(o.location.href, c.url),
                    h = t.applyMiddleware("interceptRequest", void 0, {
                        adapter: "xhr",
                        context: t
                    });
                if (h) {
                    var f = setTimeout(e, 0, null, h);
                    return {
                        abort: function() {
                            return clearTimeout(f)
                        }
                    }
                }
                var d = l ? new s : new a,
                    p = o.XDomainRequest && d instanceof o.XDomainRequest,
                    m = c.headers,
                    g = !1,
                    v = !1,
                    y = !1;
                if (d.onerror = k, d.ontimeout = k, d.onabort = function() {
                        g = !0
                    }, d.onprogress = function() {}, d[p ? "onload" : "onreadystatechange"] = function() {
                        ! function() {
                            if (!_) return;
                            x(), u.socket = setTimeout((function() {
                                return w("ESOCKETTIMEDOUT")
                            }), _.socket)
                        }(), g || 4 !== d.readyState && !p || 0 !== d.status && function() {
                            if (g || v || y) return;
                            if (0 === d.status) return void k(new Error("Unknown XHR error"));
                            x(), v = !0, e(null, function() {
                                var t = d.status,
                                    e = d.statusText;
                                if (p && void 0 === t) t = 200;
                                else {
                                    if (t > 12e3 && t < 12156) return k();
                                    t = 1223 === d.status ? 204 : d.status, e = 1223 === d.status ? "No Content" : e
                                }
                                return {
                                    body: d.response || d.responseText,
                                    url: c.url,
                                    method: c.method,
                                    headers: p ? {} : r(d.getAllResponseHeaders()),
                                    statusCode: t,
                                    statusMessage: e
                                }
                            }())
                        }()
                    }, d.open(c.method, c.url, !0), d.withCredentials = !!c.withCredentials, m && d.setRequestHeader)
                    for (var b in m) m.hasOwnProperty(b) && d.setRequestHeader(b, m[b]);
                else if (m && p) throw new Error("Headers cannot be set on an XDomainRequest object");
                c.rawBody && (d.responseType = "arraybuffer"), t.applyMiddleware("onRequest", {
                    options: c,
                    adapter: "xhr",
                    request: d,
                    context: t
                }), d.send(c.body || null);
                var _ = c.timeout;
                return _ && (u.connect = setTimeout((function() {
                    return w("ETIMEDOUT")
                }), _.connect)), {
                    abort: function() {
                        g = !0, d && d.abort()
                    }
                };

                function w(e) {
                    y = !0, d.abort();
                    var n = new Error("ESOCKETTIMEDOUT" === e ? "Socket timed out on request to " + c.url : "Connection timed out on request to " + c.url);
                    n.code = e, t.channels.error.publish(n)
                }

                function x() {
                    (g || d.readyState >= 2 && u.connect) && clearTimeout(u.connect), u.socket && clearTimeout(u.socket)
                }

                function k() {
                    if (!v) {
                        x(), v = !0, d = null;
                        var t = new Error("Network error while attempting to reach " + c.url);
                        t.isNetworkError = !0, t.request = c, e(t)
                    }
                }
            }
        },
        aJGj: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n("Q1FS");
            e.EMPTY = new i.Observable((function(t) {
                return t.complete()
            })), e.empty = function(t) {
                return t ? function(t) {
                    return new i.Observable((function(e) {
                        return t.schedule((function() {
                            return e.complete()
                        }))
                    }))
                }(t) : e.EMPTY
            }
        },
        b1HN: function(t, e, n) {
            "use strict";
            var i = "undefined" !== typeof Reflect ? Reflect.construct : void 0,
                r = Object.defineProperty,
                o = Error.captureStackTrace;

            function a(t) {
                void 0 !== t && r(this, "message", {
                    configurable: !0,
                    value: t,
                    writable: !0
                });
                var e = this.constructor.name;
                void 0 !== e && e !== this.name && r(this, "name", {
                    configurable: !0,
                    value: e,
                    writable: !0
                }), o(this, this.constructor)
            }
            void 0 === o && (o = function(t) {
                var e = new Error;
                r(t, "stack", {
                    configurable: !0,
                    get: function() {
                        var t = e.stack;
                        return r(this, "stack", {
                            configurable: !0,
                            value: t,
                            writable: !0
                        }), t
                    },
                    set: function(e) {
                        r(t, "stack", {
                            configurable: !0,
                            value: e,
                            writable: !0
                        })
                    }
                })
            }), a.prototype = Object.create(Error.prototype, {
                constructor: {
                    configurable: !0,
                    value: a,
                    writable: !0
                }
            });
            var s = function() {
                function t(t, e) {
                    return r(t, "name", {
                        configurable: !0,
                        value: e
                    })
                }
                try {
                    var e = function() {};
                    if (t(e, "foo"), "foo" === e.name) return t
                } catch (n) {}
            }();
            (t.exports = function(t, e) {
                if (null == e || e === Error) e = a;
                else if ("function" !== typeof e) throw new TypeError("super_ should be a function");
                var n;
                if ("string" === typeof t) n = t, t = void 0 !== i ? function() {
                    return i(e, arguments, this.constructor)
                } : function() {
                    e.apply(this, arguments)
                }, void 0 !== s && (s(t, n), n = void 0);
                else if ("function" !== typeof t) throw new TypeError("constructor should be either a string or a function");
                t.super_ = t.super = e;
                var r = {
                    constructor: {
                        configurable: !0,
                        value: t,
                        writable: !0
                    }
                };
                return void 0 !== n && (r.name = {
                    configurable: !0,
                    value: n,
                    writable: !0
                }), t.prototype = Object.create(e.prototype, r), t
            }).BaseError = a
        },
        "bCJ/": function(t, e, n) {
            var i = n("/dyv")({
                projectId: "xuvobo40",
                dataset: "production",
                token: "",
                useCdn: !1
            });
            t.exports = i
        },
        bYjO: function(t, e, n) {
            t.exports = function() {
                function t() {
                    return (t = Object.assign || function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = arguments[e];
                            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                        }
                        return t
                    }).apply(this, arguments)
                }

                function e(t, e) {
                    if (t) {
                        if ("string" === typeof t) return n(t, e);
                        var i = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? n(t, e) : void 0
                    }
                }

                function n(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                    return i
                }

                function i(t) {
                    var n = 0;
                    if ("undefined" === typeof Symbol || null == t[Symbol.iterator]) {
                        if (Array.isArray(t) || (t = e(t))) return function() {
                            return n >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[n++]
                            }
                        };
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    return (n = t[Symbol.iterator]()).next.bind(n)
                }
                var r = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";

                function o(t) {
                    var e = t.split("-"),
                        n = e[1],
                        i = e[2],
                        o = e[3];
                    if (!n || !i || !o) throw new Error("Malformed asset _ref '" + t + "'. Expected an id like \"" + r + '".');
                    var a = i.split("x"),
                        s = +a[0],
                        c = +a[1];
                    if (!isFinite(s) || !isFinite(c)) throw new Error("Malformed asset _ref '" + t + "'. Expected an id like \"" + r + '".');
                    return {
                        id: n,
                        width: s,
                        height: c,
                        format: o
                    }
                }
                var a = function(t) {
                        return !!t && "string" === typeof t._ref
                    },
                    s = function(t) {
                        return !!t && "string" === typeof t._id
                    },
                    c = function(t) {
                        var e = t;
                        return !(!e || !e.asset) && "string" === typeof e.asset.url
                    };

                function u(t) {
                    if (!t) return null;
                    var e;
                    if ("string" === typeof t && l(t)) e = {
                        asset: {
                            _ref: h(t)
                        }
                    };
                    else if ("string" === typeof t) e = {
                        asset: {
                            _ref: t
                        }
                    };
                    else if (a(t)) e = {
                        asset: t
                    };
                    else if (s(t)) e = {
                        asset: {
                            _ref: t._id || ""
                        }
                    };
                    else if (c(t)) e = {
                        asset: {
                            _ref: h(t.asset.url)
                        }
                    };
                    else {
                        if ("object" !== typeof t.asset) return null;
                        e = t
                    }
                    var n = t;
                    return n.crop && (e.crop = n.crop), n.hotspot && (e.hotspot = n.hotspot), f(e)
                }

                function l(t) {
                    return /^https?:\/\//.test("" + t)
                }

                function h(t) {
                    return ("image-" + t.split("/").slice(-1)[0]).replace(/\.([a-z]+)$/, "-$1")
                }

                function f(e) {
                    if (e.crop && e.hotspot) return e;
                    var n = t({}, e);
                    return n.crop || (n.crop = {
                        left: 0,
                        top: 0,
                        bottom: 0,
                        right: 0
                    }), n.hotspot || (n.hotspot = {
                        x: .5,
                        y: .5,
                        height: 1,
                        width: 1
                    }), n
                }
                var d = [
                    ["width", "w"],
                    ["height", "h"],
                    ["format", "fm"],
                    ["download", "dl"],
                    ["blur", "blur"],
                    ["sharpen", "sharp"],
                    ["invert", "invert"],
                    ["orientation", "or"],
                    ["minHeight", "min-h"],
                    ["maxHeight", "max-h"],
                    ["minWidth", "min-w"],
                    ["maxWidth", "max-w"],
                    ["quality", "q"],
                    ["fit", "fit"],
                    ["crop", "crop"],
                    ["saturation", "sat"],
                    ["auto", "auto"],
                    ["dpr", "dpr"]
                ];

                function p(e) {
                    var n = t({}, e || {}),
                        i = n.source;
                    delete n.source;
                    var r = u(i);
                    if (!r) return null;
                    var a = o(r.asset._ref || r.asset._id || ""),
                        s = Math.round(r.crop.left * a.width),
                        c = Math.round(r.crop.top * a.height),
                        l = {
                            left: s,
                            top: c,
                            width: Math.round(a.width - r.crop.right * a.width - s),
                            height: Math.round(a.height - r.crop.bottom * a.height - c)
                        },
                        h = r.hotspot.height * a.height / 2,
                        f = r.hotspot.width * a.width / 2,
                        d = r.hotspot.x * a.width,
                        p = r.hotspot.y * a.height,
                        v = {
                            left: d - f,
                            top: p - h,
                            right: d + f,
                            bottom: p + h
                        };
                    return n.rect || n.focalPoint || n.ignoreImageParams || n.crop || (n = t(t({}, n), g({
                        crop: l,
                        hotspot: v
                    }, n))), m(t(t({}, n), {}, {
                        asset: a
                    }))
                }

                function m(t) {
                    var e = t.baseUrl || "https://cdn.sanity.io",
                        n = t.asset.id + "-" + t.asset.width + "x" + t.asset.height + "." + t.asset.format,
                        i = e + "/images/" + t.projectId + "/" + t.dataset + "/" + n,
                        r = [];
                    if (t.rect) {
                        var o = t.rect,
                            a = o.left,
                            s = o.top,
                            c = o.width,
                            u = o.height;
                        (0 !== a || 0 !== s || u !== t.asset.height || c !== t.asset.width) && r.push("rect=" + a + "," + s + "," + c + "," + u)
                    }
                    t.bg && r.push("bg=" + t.bg), t.focalPoint && (r.push("fp-x=" + t.focalPoint.x), r.push("fp-y=" + t.focalPoint.y));
                    var l = [t.flipHorizontal && "h", t.flipVertical && "v"].filter(Boolean).join("");
                    return l && r.push("flip=" + l), d.forEach((function(e) {
                        var n = e[0],
                            i = e[1];
                        "undefined" !== typeof t[n] ? r.push(i + "=" + encodeURIComponent(t[n])) : "undefined" !== typeof t[i] && r.push(i + "=" + encodeURIComponent(t[i]))
                    })), 0 === r.length ? i : i + "?" + r.join("&")
                }

                function g(t, e) {
                    var n, i = e.width,
                        r = e.height;
                    if (!i || !r) return {
                        width: i,
                        height: r,
                        rect: t.crop
                    };
                    var o = t.crop,
                        a = t.hotspot,
                        s = i / r;
                    if (o.width / o.height > s) {
                        var c = o.height,
                            u = c * s,
                            l = o.top,
                            h = (a.right - a.left) / 2 + a.left - u / 2;
                        h < o.left ? h = o.left : h + u > o.left + o.width && (h = o.left + o.width - u), n = {
                            left: Math.round(h),
                            top: Math.round(l),
                            width: Math.round(u),
                            height: Math.round(c)
                        }
                    } else {
                        var f = o.width,
                            d = f / s,
                            p = o.left,
                            m = (a.bottom - a.top) / 2 + a.top - d / 2;
                        m < o.top ? m = o.top : m + d > o.top + o.height && (m = o.top + o.height - d), n = {
                            left: Math.max(0, Math.floor(p)),
                            top: Math.max(0, Math.floor(m)),
                            width: Math.round(f),
                            height: Math.round(d)
                        }
                    }
                    return {
                        width: i,
                        height: r,
                        rect: n
                    }
                }
                var v = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"],
                    y = ["top", "bottom", "left", "right", "center", "focalpoint", "entropy"],
                    b = ["format"];

                function _(t) {
                    return !!t && "object" === typeof t.clientConfig
                }

                function w(t) {
                    for (var e, n = i(d); !(e = n()).done;) {
                        var r = e.value,
                            o = r[0],
                            a = r[1];
                        if (t === o || t === a) return o
                    }
                    return t
                }

                function x(t) {
                    var e = t;
                    if (_(e)) {
                        var n = e.clientConfig,
                            i = n.apiHost,
                            r = n.projectId,
                            o = n.dataset;
                        return new k(null, {
                            baseUrl: (i || "https://api.sanity.io").replace(/^https:\/\/api\./, "https://cdn."),
                            projectId: r,
                            dataset: o
                        })
                    }
                    return new k(null, t)
                }
                var k = function() {
                    function e(e, n) {
                        this.options = t(e ? t({}, e.options || {}) : {}, n || {})
                    }
                    var n = e.prototype;
                    return n.withOptions = function(n) {
                        var i = n.baseUrl || this.options.baseUrl,
                            r = {
                                baseUrl: i
                            };
                        for (var o in n) n.hasOwnProperty(o) && (r[w(o)] = n[o]);
                        return new e(this, t({
                            baseUrl: i
                        }, r))
                    }, n.image = function(t) {
                        return this.withOptions({
                            source: t
                        })
                    }, n.dataset = function(t) {
                        return this.withOptions({
                            dataset: t
                        })
                    }, n.projectId = function(t) {
                        return this.withOptions({
                            projectId: t
                        })
                    }, n.bg = function(t) {
                        return this.withOptions({
                            bg: t
                        })
                    }, n.dpr = function(t) {
                        return this.withOptions({
                            dpr: t
                        })
                    }, n.width = function(t) {
                        return this.withOptions({
                            width: t
                        })
                    }, n.height = function(t) {
                        return this.withOptions({
                            height: t
                        })
                    }, n.focalPoint = function(t, e) {
                        return this.withOptions({
                            focalPoint: {
                                x: t,
                                y: e
                            }
                        })
                    }, n.maxWidth = function(t) {
                        return this.withOptions({
                            maxWidth: t
                        })
                    }, n.minWidth = function(t) {
                        return this.withOptions({
                            minWidth: t
                        })
                    }, n.maxHeight = function(t) {
                        return this.withOptions({
                            maxHeight: t
                        })
                    }, n.minHeight = function(t) {
                        return this.withOptions({
                            minHeight: t
                        })
                    }, n.size = function(t, e) {
                        return this.withOptions({
                            width: t,
                            height: e
                        })
                    }, n.blur = function(t) {
                        return this.withOptions({
                            blur: t
                        })
                    }, n.sharpen = function(t) {
                        return this.withOptions({
                            sharpen: t
                        })
                    }, n.rect = function(t, e, n, i) {
                        return this.withOptions({
                            rect: {
                                left: t,
                                top: e,
                                width: n,
                                height: i
                            }
                        })
                    }, n.format = function(t) {
                        return this.withOptions({
                            format: t
                        })
                    }, n.invert = function(t) {
                        return this.withOptions({
                            invert: t
                        })
                    }, n.orientation = function(t) {
                        return this.withOptions({
                            orientation: t
                        })
                    }, n.quality = function(t) {
                        return this.withOptions({
                            quality: t
                        })
                    }, n.forceDownload = function(t) {
                        return this.withOptions({
                            download: t
                        })
                    }, n.flipHorizontal = function() {
                        return this.withOptions({
                            flipHorizontal: !0
                        })
                    }, n.flipVertical = function() {
                        return this.withOptions({
                            flipVertical: !0
                        })
                    }, n.ignoreImageParams = function() {
                        return this.withOptions({
                            ignoreImageParams: !0
                        })
                    }, n.fit = function(t) {
                        if (-1 === v.indexOf(t)) throw new Error('Invalid fit mode "' + t + '"');
                        return this.withOptions({
                            fit: t
                        })
                    }, n.crop = function(t) {
                        if (-1 === y.indexOf(t)) throw new Error('Invalid crop mode "' + t + '"');
                        return this.withOptions({
                            crop: t
                        })
                    }, n.saturation = function(t) {
                        return this.withOptions({
                            saturation: t
                        })
                    }, n.auto = function(t) {
                        if (-1 === b.indexOf(t)) throw new Error('Invalid auto mode "' + t + '"');
                        return this.withOptions({
                            auto: t
                        })
                    }, n.url = function() {
                        return p(this.options)
                    }, n.toString = function() {
                        return this.url()
                    }, e
                }();
                return x
            }()
        },
        "c8+P": function(t, e, n) {
            "use strict";
            var i = n("82qm"),
                r = n("pY8y"),
                o = n("E6ma"),
                a = n("jD2y"),
                s = n("pNVt"),
                c = ["request", "response", "progress", "error", "abort"],
                u = ["processOptions", "validateOptions", "interceptRequest", "finalizeOptions", "onRequest", "onResponse", "onError", "onReturn", "onHeaders"];
            t.exports = function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    n = [],
                    l = u.reduce((function(t, e) {
                        return t[e] = t[e] || [], t
                    }), {
                        processOptions: [o],
                        validateOptions: [a]
                    });

                function h(t) {
                    var e = c.reduce((function(t, e) {
                            return t[e] = i(), t
                        }), {}),
                        n = r(l),
                        o = n("processOptions", t);
                    n("validateOptions", o);
                    var a = {
                            options: o,
                            channels: e,
                            applyMiddleware: n
                        },
                        u = null,
                        h = e.request.subscribe((function(t) {
                            u = s(t, (function(i, r) {
                                return function(t, r, o) {
                                    var a = t,
                                        s = r;
                                    if (!a) try {
                                        s = n("onResponse", r, o)
                                    } catch (i) {
                                        s = null, a = i
                                    }(a = a && n("onError", a, o)) ? e.error.publish(a) : s && e.response.publish(s)
                                }(i, r, t)
                            }))
                        }));
                    e.abort.subscribe((function() {
                        h(), u && u.abort()
                    }));
                    var f = n("onReturn", e, a);
                    return f === e && e.request.publish(a), f
                }
                return h.use = function(t) {
                    if (!t) throw new Error("Tried to add middleware that resolved to falsey value");
                    if ("function" === typeof t) throw new Error("Tried to add middleware that was a function. It probably expects you to pass options to it.");
                    if (t.onReturn && l.onReturn.length > 0) throw new Error("Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event");
                    return u.forEach((function(e) {
                        t[e] && l[e].push(t[e])
                    })), n.push(t), h
                }, h.clone = function() {
                    return t(n)
                }, e.forEach(h.use), h
            }
        },
        cIWD: function(t, e, n) {
            "use strict";

            function i(t) {
                return (i = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            var r = n("Qetd");
            t.exports = function(t, e) {
                return Object.keys(t).reduce((function(n, o) {
                    var a = i(t[o]);
                    return n[o] = "function" === a ? "undefined" !== typeof e[o] ? e[o] : t[o] : "object" === a ? r({}, t[o], e[o]) : "undefined" === typeof e[o] ? t[o] : e[o], n
                }), {})
            }
        },
        ctZY: function(t, e, n) {
            "use strict";
            var i = n("CoN9"),
                r = n("V1Fd"),
                o = n("RT5d"),
                a = n("cIWD");
            t.exports = {
                blocksToNodes: function(t, e, n, o) {
                    if (n) return r(t, e, n, o);
                    var a = i(t);
                    return r(t, e, a.defaultSerializers, a.serializeSpan)
                },
                getSerializers: i,
                getImageUrl: o,
                mergeSerializers: a
            }
        },
        cyGw: function(t, e, n) {
            t.exports = {
                component: "artisticDirectionProject_component__34ZYT",
                content: "artisticDirectionProject_content__Ml66d",
                left: "artisticDirectionProject_left__jdDWg",
                location: "artisticDirectionProject_location__1hj0j",
                name: "artisticDirectionProject_name__1DgMZ",
                description: "artisticDirectionProject_description__3Gcc5",
                right: "artisticDirectionProject_right__1kLn7"
            }
        },
        eJpK: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return o
            }));
            var i = n("1OyB"),
                r = n("vuIU"),
                o = function() {
                    function t(e, n, r) {
                        Object(i.a)(this, t), this.x = parseFloat(e) || 0, this.y = parseFloat(n) || 0, this.z = parseFloat(r) || 0
                    }
                    return Object(r.a)(t, [{
                        key: "clone",
                        value: function() {
                            return new t(this.x, this.y, this.z)
                        }
                    }, {
                        key: "distance",
                        value: function(t) {
                            return Math.sqrt(this.distanceSquared(t))
                        }
                    }, {
                        key: "distanceSquared",
                        value: function(t) {
                            return Math.pow(this.x - t.x, 2) + Math.pow(this.y - t.y, 2) + Math.pow(this.z - t.z, 2)
                        }
                    }, {
                        key: "vectorWithPoint",
                        value: function(e) {
                            return new t(e.x - this.x, e.y - this.y)
                        }
                    }, {
                        key: "angleWithPoints",
                        value: function(t, e) {
                            var n = t.distance(e),
                                i = this.distance(t),
                                r = this.distance(e);
                            return Math.acos((Math.pow(n, 2) - Math.pow(i, 2) - Math.pow(r, 2)) / (-2 * i * r))
                        }
                    }, {
                        key: "pointWithVectorAndDistance",
                        value: function(e, n) {
                            var i = Math.atan2(e.y, e.x);
                            return new t(n * Math.cos(i) + this.x, n * Math.sin(i) + this.y)
                        }
                    }, {
                        key: "distanceWithSegment",
                        value: function(t, e) {
                            return this.distance(this.pointWithSegement(t, e))
                        }
                    }, {
                        key: "pointWithSegement",
                        value: function(e, n) {
                            var i = e.distanceSquared(n);
                            if (0 == i) return e;
                            var r = ((this.x - e.x) * (n.x - e.x) + (this.y - e.y) * (n.y - e.y)) / i;
                            return r < 0 ? e : r > 1 ? n : new t(e.x + r * (n.x - e.x), e.y + r * (n.y - e.y))
                        }
                    }, {
                        key: "pointWithRotation",
                        value: function(e) {
                            return new t(this.x * Math.cos(e) + this.y * Math.sin(e), -this.x * Math.sin(e) + this.y * Math.cos(e))
                        }
                    }, {
                        key: "isInTriangle",
                        value: function(t, e, n) {
                            var i = this._sign(this, t, e) < 0,
                                r = this._sign(this, e, n) < 0,
                                o = this._sign(this, n, t) < 0;
                            return i == r && r == o
                        }
                    }, {
                        key: "_sign",
                        value: function(t, e, n) {
                            return (t.x - n.x) * (e.y - n.y) - (e.x - n.x) * (t.y - n.y)
                        }
                    }, {
                        key: "norm",
                        get: function() {
                            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
                        }
                    }], [{
                        key: "intersectionWith2Segments",
                        value: function(e, n, i, r) {
                            var o = (r.y - i.y) * (n.x - e.x) - (r.x - i.x) * (n.y - e.y);
                            if (0 == o) return null;
                            var a = ((r.x - i.x) * (e.y - i.y) - (r.y - i.y) * (e.x - i.x)) / o,
                                s = ((n.x - e.x) * (e.y - i.y) - (n.y - e.y) * (e.x - i.x)) / o;
                            return a >= 0 && a <= 1 && s >= 0 && s <= 1 ? new t(e.x + a * (n.x - e.x), e.y + a * (n.y - e.y)) : null
                        }
                    }]), t
                }()
        },
        eX1s: function(t, e, n) {
            e.map = n("q3Kh").map
        },
        equ0: function(t, e, n) {
            "use strict";
            t.exports = function() {
                return {
                    onRequest: function(t) {
                        if ("xhr" === t.adapter) {
                            var e = t.request,
                                n = t.context;
                            "upload" in e && "onprogress" in e.upload && (e.upload.onprogress = i("upload")), "onprogress" in e && (e.onprogress = i("download"))
                        }

                        function i(t) {
                            return function(e) {
                                var i = e.lengthComputable ? e.loaded / e.total * 100 : -1;
                                n.channels.progress.publish({
                                    stage: t,
                                    percent: i,
                                    total: e.total,
                                    loaded: e.loaded,
                                    lengthComputable: e.lengthComputable
                                })
                            }
                        }
                    }
                }
            }
        },
        f84q: function(t, e, n) {
            t.exports = {
                component: "manageArtist_component__ne54i",
                description: "manageArtist_description__2kOV7",
                infiniteText: "manageArtist_infiniteText__3SqAy",
                photo: "manageArtist_photo__1cfxM",
                title: "manageArtist_title__37yLB",
                name: "manageArtist_name__1R5FH"
            }
        },
        fXrF: function(t, e, n) {
            "use strict";
            var i = n("QmWs");
            t.exports = function(t, e, n) {
                if (t === e) return !0;
                var r = i.parse(t, !1, !0),
                    o = i.parse(e, !1, !0),
                    a = 0 | r.port || ("https" === r.protocol ? 443 : 80),
                    s = 0 | o.port || ("https" === o.protocol ? 443 : 80),
                    c = {
                        proto: r.protocol === o.protocol,
                        hostname: r.hostname === o.hostname,
                        port: a === s
                    };
                return c.proto && c.hostname && (c.port || n)
            }
        },
        flg0: function(t, e, n) {
            "use strict";
            var i = n("Qetd"),
                r = n("VmPP");

            function o(t) {
                this.request = t.request.bind(t)
            }
            i(o.prototype, {
                create: function(t, e) {
                    return this._modify("PUT", t, e)
                },
                edit: function(t, e) {
                    return this._modify("PATCH", t, e)
                },
                delete: function(t) {
                    return this._modify("DELETE", t)
                },
                list: function() {
                    return this.request({
                        uri: "/datasets"
                    })
                },
                _modify: function(t, e, n) {
                    return r.dataset(e), this.request({
                        method: t,
                        uri: "/datasets/".concat(e),
                        body: n
                    })
                }
            }), t.exports = o
        },
        fmMd: function(t, e, n) {
            "use strict";
            var i = n("Qetd"),
                r = n("kLGu"),
                o = n("ZeDx"),
                a = n("DRjL"),
                s = n("rHvv"),
                c = n("xhG/"),
                u = n("N2s1"),
                l = n("pU/T"),
                h = ["Using token with listeners is not supported in browsers. ", "For more info, see ".concat(u("js-client-listener-tokens-browser"), ".")],
                f = l((function() {
                    return console.warn(h.join(" "))
                })),
                d = Boolean("undefined" !== typeof window && window.EventSource),
                p = d ? window.EventSource : o,
                m = ["includePreviousRevision", "includeResult", "visibility", "effectFormat"],
                g = {
                    includeResult: !0
                };

            function v(t) {
                try {
                    var e = t.data && JSON.parse(t.data) || {};
                    return i({
                        type: t.type
                    }, e)
                } catch (n) {
                    return n
                }
            }

            function y(t) {
                if (t instanceof Error) return t;
                var e = v(t);
                return e instanceof Error ? e : new Error(function(t) {
                    if (!t.error) return t.message || "Unknown listener error";
                    if (t.error.description) return t.error.description;
                    return "string" === typeof t.error ? t.error : JSON.stringify(t.error, null, 2)
                }(e))
            }
            t.exports = function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    i = s(n, g),
                    o = a(i, m),
                    u = c({
                        query: t,
                        params: e,
                        options: o
                    }),
                    l = this.clientConfig,
                    h = l.url,
                    b = l.token,
                    _ = l.withCredentials,
                    w = "".concat(h).concat(this.getDataUrl("listen", u)),
                    x = i.events ? i.events : ["mutation"],
                    k = -1 !== x.indexOf("reconnect");
                b && d && f();
                var O = {};
                return (b || _) && (O.withCredentials = !0), b && (O.headers = {
                    Authorization: "Bearer ".concat(b)
                }), new r((function(t) {
                    var e, n = u(),
                        i = !1;

                    function r() {
                        i || (k && t.next({
                            type: "reconnect"
                        }), i || n.readyState === p.CLOSED && (c(), clearTimeout(e), e = setTimeout(l, 100)))
                    }

                    function o(e) {
                        t.error(y(e))
                    }

                    function a(e) {
                        var n = v(e);
                        return n instanceof Error ? t.error(n) : t.next(n)
                    }

                    function s(e) {
                        i = !0, c(), t.complete()
                    }

                    function c() {
                        n.removeEventListener("error", r, !1), n.removeEventListener("channelError", o, !1), n.removeEventListener("disconnect", s, !1), x.forEach((function(t) {
                            return n.removeEventListener(t, a, !1)
                        })), n.close()
                    }

                    function u() {
                        var t = new p(w, O);
                        return t.addEventListener("error", r, !1), t.addEventListener("channelError", o, !1), t.addEventListener("disconnect", s, !1), x.forEach((function(e) {
                            return t.addEventListener(e, a, !1)
                        })), t
                    }

                    function l() {
                        n = u()
                    }
                    return function() {
                        i = !0, c()
                    }
                }))
            }
        },
        foSv: function(t, e, n) {
            "use strict";

            function i(t) {
                return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            n.d(e, "a", (function() {
                return i
            }))
        },
        ftCV: function(t, e, n) {
            "use strict";
            var i = ["strong", "em", "code", "underline", "strike-through"];

            function r(t, e, n) {
                if (!t.marks || 0 === t.marks.length) return t.marks || [];
                var i = t.marks.reduce((function(t, i) {
                        t[i] = t[i] ? t[i] + 1 : 1;
                        for (var r = e + 1; r < n.length; r++) {
                            var o = n[r];
                            if (!o.marks || !Array.isArray(o.marks) || -1 === o.marks.indexOf(i)) break;
                            t[i]++
                        }
                        return t
                    }), {}),
                    r = o.bind(null, i);
                return t.marks.slice().sort(r)
            }

            function o(t, e, n) {
                var r = t[e] || 0,
                    o = t[n] || 0;
                if (r !== o) return o - r;
                var a = i.indexOf(e),
                    s = i.indexOf(n);
                return a !== s ? a - s : e < n ? -1 : e > n ? 1 : 0
            }
            t.exports = function(t) {
                var e = t.children,
                    n = t.markDefs;
                if (!e || !e.length) return [];
                var i = e.map(r),
                    o = {
                        _type: "span",
                        children: []
                    },
                    a = [o];
                return e.forEach((function(t, e) {
                    var r = i[e];
                    if (r) {
                        var o = 1;
                        if (a.length > 1)
                            for (; o < a.length; o++) {
                                var s = a[o].markKey,
                                    c = r.indexOf(s);
                                if (-1 === c) break;
                                r.splice(c, 1)
                            }
                        var u, l = function(t) {
                            for (var e = t.length - 1; e >= 0; e--) {
                                var n = t[e];
                                if ("span" === n._type && n.children) return n
                            }
                            return
                        }(a = a.slice(0, o));
                        if (r.forEach((function(e) {
                                var i = {
                                    _type: "span",
                                    _key: t._key,
                                    children: [],
                                    mark: n.find((function(t) {
                                        return t._key === e
                                    })) || e,
                                    markKey: e
                                };
                                l.children.push(i), a.push(i), l = i
                            })), "span" !== (u = t)._type || "string" !== typeof u.text || !Array.isArray(u.marks) && "undefined" !== typeof u.marks) l.children = l.children.concat(t);
                        else {
                            for (var h = t.text.split("\n"), f = h.length; f-- > 1;) h.splice(f, 0, "\n");
                            l.children = l.children.concat(h)
                        }
                    } else {
                        a[a.length - 1].children.push(t)
                    }
                })), o.children
            }
        },
        h1JA: function(t, e, n) {
            "use strict";
            var i = n("Bcqf"),
                r = n("Qetd");
            t.exports = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = t.implementation || i.Observable;
                if (!e) throw new Error("`Observable` is not available in global scope, and no implementation was passed");
                return {
                    onReturn: function(t, n) {
                        return new e((function(e) {
                            return t.error.subscribe((function(t) {
                                    return e.error(t)
                                })), t.progress.subscribe((function(t) {
                                    return e.next(r({
                                        type: "progress"
                                    }, t))
                                })), t.response.subscribe((function(t) {
                                    e.next(r({
                                        type: "response"
                                    }, t)), e.complete()
                                })), t.request.publish(n),
                                function() {
                                    return t.abort.publish()
                                }
                        }))
                    }
                }
            }
        },
        "hWg+": function(t, e, n) {
            ! function(t) {
                "use strict";
                var e = "undefined" == typeof window,
                    n = (i.prototype.match = function(t, e) {
                        return (e = this.userAgent.match(e)) && 1 < e.length && e[t] || ""
                    }, Object.defineProperty(i.prototype, "isMobile", {
                        get: function() {
                            return !this.isTablet && (/[^-]mobi/i.test(this.userAgent) || "iphone" === this.iOSDevice || "ipod" === this.iOSDevice || this.isAndroidDevice || /nexus\s*[0-6]\s*/i.test(this.userAgent))
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(i.prototype, "isTablet", {
                        get: function() {
                            return /tablet/i.test(this.userAgent) && !/tablet pc/i.test(this.userAgent) || "ipad" === this.iOSDevice || this.isAndroidDevice && !/[^-]mobi/i.test(this.userAgent) || !/nexus\s*[0-6]\s*/i.test(this.userAgent) && /nexus\s*[0-9]+/i.test(this.userAgent)
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(i.prototype, "isDesktop", {
                        get: function() {
                            return !this.isMobile && !this.isTablet
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(i.prototype, "isMacOS", {
                        get: function() {
                            return /macintosh/i.test(this.userAgent) && {
                                version: this.match(1, /mac os x (\d+(\.?_?\d+)+)/i).replace(/[_\s]/g, ".").split(".").map((function(t) {
                                    return t
                                }))[1]
                            }
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(i.prototype, "isWindows", {
                        get: function() {
                            return /windows /i.test(this.userAgent) && {
                                version: this.match(1, /Windows ((NT|XP)( \d\d?.\d)?)/i)
                            }
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(i.prototype, "isiOS", {
                        get: function() {
                            return !!this.iOSDevice && {
                                version: this.match(1, /os (\d+([_\s]\d+)*) like mac os x/i).replace(/[_\s]/g, ".") || this.match(1, /version\/(\d+(\.\d+)?)/i)
                            }
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(i.prototype, "isAndroid", {
                        get: function() {
                            return this.isAndroidDevice && {
                                version: this.match(1, /android[ \/-](\d+(\.\d+)*)/i)
                            }
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(i.prototype, "browser", {
                        get: function() {
                            var t = this.match(1, /version\/(\d+(\.\d+)?)/i);
                            return /opera/i.test(this.userAgent) ? {
                                name: "Opera",
                                version: t || this.match(1, /(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
                            } : /opr\/|opios/i.test(this.userAgent) ? {
                                name: "Opera",
                                version: this.match(1, /(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || t
                            } : /SamsungBrowser/i.test(this.userAgent) ? {
                                name: "Samsung Internet for Android",
                                version: t || this.match(1, /(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
                            } : /yabrowser/i.test(this.userAgent) ? {
                                name: "Yandex Browser",
                                version: t || this.match(1, /(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
                            } : /ucbrowser/i.test(this.userAgent) ? {
                                name: "UC Browser",
                                version: this.match(1, /(?:ucbrowser)[\s\/](\d+(\.\d+)?)/i)
                            } : /msie|trident/i.test(this.userAgent) ? {
                                name: "Internet Explorer",
                                version: this.match(1, /(?:msie |rv:)(\d+(\.\d+)?)/i)
                            } : /(edge|edgios|edga|edg)/i.test(this.userAgent) ? {
                                name: "Microsoft Edge",
                                version: this.match(2, /(edge|edgios|edga|edg)\/(\d+(\.\d+)?)/i)
                            } : /firefox|iceweasel|fxios/i.test(this.userAgent) ? {
                                name: "Firefox",
                                version: this.match(1, /(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
                            } : /chromium/i.test(this.userAgent) ? {
                                name: "Chromium",
                                version: this.match(1, /(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || t
                            } : /chrome|crios|crmo/i.test(this.userAgent) ? {
                                name: "Chrome",
                                version: this.match(1, /(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
                            } : /safari|applewebkit/i.test(this.userAgent) ? {
                                name: "Safari",
                                version: t
                            } : {
                                name: this.match(1, /^(.*)\/(.*) /),
                                version: this.match(2, /^(.*)\/(.*) /)
                            }
                        },
                        enumerable: !1,
                        configurable: !0
                    }), i);

                function i(t) {
                    this.userAgent = t || (!e && window.navigator ? window.navigator.userAgent : ""), this.isAndroidDevice = !/like android/i.test(this.userAgent) && /android/i.test(this.userAgent), this.iOSDevice = this.match(1, /(iphone|ipod|ipad)/i).toLowerCase(), !e && "MacIntel" === navigator.platform && 2 < navigator.maxTouchPoints && !window.MSStream && (this.iOSDevice = "ipad")
                }
                t.DetectUA = n, Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }(e)
        },
        i6MQ: function(t, e, n) {
            "use strict";
            t.exports = []
        },
        jD2y: function(t, e, n) {
            "use strict";
            var i = /^https?:\/\//i;
            t.exports = function(t) {
                if (!i.test(t.url)) throw new Error('"' + t.url + '" is not a valid URL')
            }
        },
        jwwS: function(t, e, n) {
            "use strict";
            var i;
            e.__esModule = !0, e.LoadableContext = void 0;
            var r = ((i = n("q1tI")) && i.__esModule ? i : {
                default: i
            }).default.createContext(null);
            e.LoadableContext = r
        },
        kLGu: function(t, e, n) {
            t.exports = n("3ocN")
        },
        "kN/J": function(t, e, n) {
            t.exports = {
                component: "stars_component__1EjKn"
            }
        },
        kd2E: function(t, e, n) {
            "use strict";

            function i(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
            t.exports = function(t, e, n, o) {
                e = e || "&", n = n || "=";
                var a = {};
                if ("string" !== typeof t || 0 === t.length) return a;
                var s = /\+/g;
                t = t.split(e);
                var c = 1e3;
                o && "number" === typeof o.maxKeys && (c = o.maxKeys);
                var u = t.length;
                c > 0 && u > c && (u = c);
                for (var l = 0; l < u; ++l) {
                    var h, f, d, p, m = t[l].replace(s, "%20"),
                        g = m.indexOf(n);
                    g >= 0 ? (h = m.substr(0, g), f = m.substr(g + 1)) : (h = m, f = ""), d = decodeURIComponent(h), p = decodeURIComponent(f), i(a, d) ? r(a[d]) ? a[d].push(p) : a[d] = [a[d], p] : a[d] = p
                }
                return a
            };
            var r = Array.isArray || function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }
        },
        koiF: function(t, e, n) {
            "use strict";
            n.d(e, "b", (function() {
                return s
            }));
            var i, r = n("1eSL"),
                o = new(n.n(r).a);

            function a() {
                clearTimeout(i), i = setTimeout((function() {
                    o.width = window.innerWidth, o.height = window.innerHeight, o.dispatch(o.width, o.height)
                }), 250)
            }

            function s() {
                window,
                o.resize = a,
                o.width = window.innerWidth,
                o.height = window.innerHeight,
                a(),
                window.addEventListener("resize", a),
                window.addEventListener("orientationchange", a)
            }
            o.width = 0, o.height = 0, e.a = o
        },
        l3Vq: function(t, e, n) {
            "use strict";

            function i(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var r = n("Qetd"),
                o = n("VmPP"),
                a = n("s+BN"),
                s = {
                    returnDocuments: !1
                };

            function c() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    e = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                this.trxId = n, this.operations = t, this.client = e
            }
            r(c.prototype, {
                clone: function() {
                    return new c(this.operations.slice(0), this.client, this.trxId)
                },
                create: function(t) {
                    return o.validateObject("create", t), this._add({
                        create: t
                    })
                },
                createIfNotExists: function(t) {
                    var e = "createIfNotExists";
                    return o.validateObject(e, t), o.requireDocumentId(e, t), this._add(i({}, e, t))
                },
                createOrReplace: function(t) {
                    var e = "createOrReplace";
                    return o.validateObject(e, t), o.requireDocumentId(e, t), this._add(i({}, e, t))
                },
                delete: function(t) {
                    return o.validateDocumentId("delete", t), this._add({
                        delete: {
                            id: t
                        }
                    })
                },
                patch: function(t, e) {
                    var n = "function" === typeof e;
                    if (t instanceof a) return this._add({
                        patch: t.serialize()
                    });
                    if (n) {
                        var i = e(new a(t, {}, this.client));
                        if (!(i instanceof a)) throw new Error("function passed to `patch()` must return the patch");
                        return this._add({
                            patch: i.serialize()
                        })
                    }
                    return this._add({
                        patch: r({
                            id: t
                        }, e)
                    })
                },
                transactionId: function(t) {
                    return t ? (this.trxId = t, this) : this.trxId
                },
                serialize: function() {
                    return this.operations.slice()
                },
                toJSON: function() {
                    return this.serialize()
                },
                commit: function(t) {
                    if (!this.client) throw new Error("No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method");
                    return this.client.mutate(this.serialize(), r({
                        transactionId: this.trxId
                    }, s, t || {}))
                },
                reset: function() {
                    return this.operations = [], this
                },
                _add: function(t) {
                    return this.operations.push(t), this
                }
            }), t.exports = c
        },
        lSNA: function(t, e) {
            t.exports = function(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
        },
        lYXn: function(t, e, n) {
            t.exports = {
                links: "menu_links__IPpww"
            }
        },
        lwAK: function(t, e, n) {
            "use strict";
            var i;
            e.__esModule = !0, e.AmpStateContext = void 0;
            var r = ((i = n("q1tI")) && i.__esModule ? i : {
                default: i
            }).default.createContext({});
            e.AmpStateContext = r
        },
        mbIT: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.isArray = Array.isArray || function(t) {
                return t && "number" === typeof t.length
            }
        },
        md7G: function(t, e, n) {
            "use strict";

            function i(t) {
                return (i = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            n.d(e, "a", (function() {
                return o
            }));
            var r = n("JX7q");

            function o(t, e) {
                return !e || "object" !== i(e) && "function" !== typeof e ? Object(r.a)(t) : e
            }
        },
        n3uD: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = !1;
            e.config = {
                Promise: void 0,
                set useDeprecatedSynchronousErrorHandling(t) {
                    if (t) {
                        var e = new Error;
                        console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + e.stack)
                    } else i && console.log("RxJS: Back to a better error behavior. Thank you. <3");
                    i = t
                },
                get useDeprecatedSynchronousErrorHandling() {
                    return i
                }
            }
        },
        n6vY: function(t, e, n) {
            t.exports = function(t, e) {
                if (void 0 == e && (e = {
                        fuzzy: !0
                    }), /youtu\.?be/.test(t)) {
                    var n, i = [/youtu\.be\/([^#\&\?]{11})/, /\?v=([^#\&\?]{11})/, /\&v=([^#\&\?]{11})/, /embed\/([^#\&\?]{11})/, /\/v\/([^#\&\?]{11})/];
                    for (n = 0; n < i.length; ++n)
                        if (i[n].test(t)) return i[n].exec(t)[1];
                    if (e.fuzzy) {
                        var r = t.split(/[\/\&\?=#\.\s]/g);
                        for (n = 0; n < r.length; ++n)
                            if (/^[^#\&\?]{11}$/.test(r[n])) return r[n]
                    }
                }
                return null
            }
        },
        nFlj: function(t, e, n) {
            "use strict";
            var i = Object.prototype.hasOwnProperty;

            function r(t) {
                try {
                    return decodeURIComponent(t.replace(/\+/g, " "))
                } catch (e) {
                    return null
                }
            }

            function o(t) {
                try {
                    return encodeURIComponent(t)
                } catch (e) {
                    return null
                }
            }
            e.stringify = function(t, e) {
                e = e || "";
                var n, r, a = [];
                for (r in "string" !== typeof e && (e = "?"), t)
                    if (i.call(t, r)) {
                        if ((n = t[r]) || null !== n && undefined !== n && !isNaN(n) || (n = ""), r = o(r), n = o(n), null === r || null === n) continue;
                        a.push(r + "=" + n)
                    } return a.length ? e + a.join("&") : ""
            }, e.parse = function(t) {
                for (var e, n = /([^=?#&]+)=?([^&]*)/g, i = {}; e = n.exec(t);) {
                    var o = r(e[1]),
                        a = r(e[2]);
                    null === o || null === a || o in i || (i[o] = a)
                }
                return i
            }
        },
        osSN: function(t, e, n) {
            "use strict";
            var i = n("q1tI"),
                r = n("17x9"),
                o = n("DEm0"),
                a = n("DCZw"),
                s = a.serializers,
                c = a.serializeSpan,
                u = a.renderProps,
                l = o.getImageUrl,
                h = o.blocksToNodes,
                f = o.mergeSerializers,
                d = i.createElement,
                p = function t(e) {
                    var n = f(t.defaultSerializers, e.serializers),
                        i = Object.assign({}, u, e, {
                            serializers: n,
                            blocks: e.blocks || []
                        });
                    return h(d, i, s, c)
                };
            p.defaultSerializers = s, p.getImageUrl = l, p.propTypes = {
                className: r.string,
                renderContainerOnSingleChild: r.bool,
                projectId: r.string,
                dataset: r.string,
                imageOptions: r.object,
                serializers: r.shape({
                    types: r.object,
                    marks: r.object,
                    list: r.func,
                    listItem: r.func,
                    block: r.func,
                    span: r.func
                }),
                blocks: r.oneOfType([r.arrayOf(r.shape({
                    _type: r.string.isRequired
                })), r.shape({
                    _type: r.string.isRequired
                })]).isRequired
            }, p.defaultProps = {
                renderContainerOnSingleChild: !1,
                serializers: {},
                imageOptions: {}
            }, t.exports = p
        },
        "p+I8": function(t, e, n) {
            "use strict";
            t.exports = function(t) {
                var e = typeof t;
                return null !== t && ("object" === e || "function" === e)
            }
        },
        "p//D": function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.rxSubscriber = "function" === typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random(), e.$$rxSubscriber = e.rxSubscriber
        },
        pNVt: function(t, e, n) {
            "use strict";
            t.exports = n("a7GE")
        },
        "pU/T": function(t, e, n) {
            "use strict";
            t.exports = function(t) {
                var e, n = !1;
                return function() {
                    return n || (e = t.apply(void 0, arguments), n = !0), e
                }
            }
        },
        pY8y: function(t, e, n) {
            "use strict";
            t.exports = function(t) {
                return function(e, n) {
                    for (var i = arguments.length, r = Array(i > 2 ? i - 2 : 0), o = 2; o < i; o++) r[o - 2] = arguments[o];
                    for (var a = "onError" === e, s = n, c = 0; c < t[e].length; c++) {
                        var u = t[e][c];
                        if (s = u.apply(void 0, [s].concat(r)), a && !s) break
                    }
                    return s
                }
            }
        },
        pmlw: function(t, e) {
            t.exports = function(t) {
                return "https://docs.sanity.io/help/" + t
            }
        },
        pshJ: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.isFunction = function(t) {
                return "function" === typeof t
            }
        },
        q3Kh: function(t, e, n) {
            "use strict";
            var i = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function i() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n("FWf1");
            e.map = function(t, e) {
                return function(n) {
                    if ("function" !== typeof t) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
                    return n.lift(new o(t, e))
                }
            };
            var o = function() {
                function t(t, e) {
                    this.project = t, this.thisArg = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new a(t, this.project, this.thisArg))
                }, t
            }();
            e.MapOperator = o;
            var a = function(t) {
                function e(e, n, i) {
                    var r = t.call(this, e) || this;
                    return r.project = n, r.count = 0, r.thisArg = i || r, r
                }
                return i(e, t), e.prototype._next = function(t) {
                    var e;
                    try {
                        e = this.project.call(this.thisArg, t, this.count++)
                    } catch (n) {
                        return void this.destination.error(n)
                    }
                    this.destination.next(e)
                }, e
            }(r.Subscriber)
        },
        q92F: function(t, e, n) {
            t.exports = {
                component: "labelProject_component__30pxa",
                left: "labelProject_left__IFY18",
                leftBackground: "labelProject_leftBackground__2zfE_",
                content: "labelProject_content__1mrJ7",
                title: "labelProject_title__2ghzW",
                artist: "labelProject_artist__5B21c",
                description: "labelProject_description__1yxwV",
                right: "labelProject_right__2tjK_",
                listen: "labelProject_listen__1FTAK",
                listenMobile: "labelProject_listenMobile__2YOUS"
            }
        },
        qDJ8: function(t, e, n) {
            "use strict";
            t.exports = function(t) {
                return null != t && "object" === typeof t && !1 === Array.isArray(t)
            }
        },
        qS3u: function(t, e, n) {
            "use strict";

            function i(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var r = n("Qetd"),
                o = n("8c+Z").filter,
                a = n("eX1s").map,
                s = n("VmPP"),
                c = n("LMKn"),
                u = n("xhG/"),
                l = n("l3Vq"),
                h = n("s+BN"),
                f = n("fmMd"),
                d = function(t, e) {
                    return !1 === t ? void 0 : "undefined" === typeof t ? e : t
                },
                p = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return {
                        returnIds: !0,
                        returnDocuments: d(t.returnDocuments, !0),
                        visibility: t.visibility || "sync"
                    }
                },
                m = function(t) {
                    return "response" === t.type
                },
                g = function(t) {
                    return t.body
                },
                v = function(t) {
                    return t.toPromise()
                };
            t.exports = {
                listen: f,
                getDataUrl: function(t, e) {
                    var n = this.clientConfig,
                        i = n.gradientMode ? n.namespace : s.hasDataset(n),
                        r = "/".concat(t, "/").concat(i),
                        o = e ? "".concat(r, "/").concat(e) : r;
                    return (this.clientConfig.gradientMode ? o : "/data".concat(o)).replace(/\/($|\?)/, "$1")
                },
                fetch: function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        i = !1 === n.filterResponse ? function(t) {
                            return t
                        } : function(t) {
                            return t.result
                        },
                        r = this._dataRequest("query", {
                            query: t,
                            params: e
                        }, n).pipe(a(i));
                    return this.isPromiseAPI() ? v(r) : r
                },
                getDocument: function(t) {
                    var e = {
                            uri: this.getDataUrl("doc", t),
                            json: !0
                        },
                        n = this._requestObservable(e).pipe(o(m), a((function(t) {
                            return t.body.documents && t.body.documents[0]
                        })));
                    return this.isPromiseAPI() ? v(n) : n
                },
                getDocuments: function(t) {
                    var e = {
                            uri: this.getDataUrl("doc", t.join(",")),
                            json: !0
                        },
                        n = this._requestObservable(e).pipe(o(m), a((function(e) {
                            var n, i, r = (n = e.body.documents || [], i = function(t) {
                                return t._id
                            }, n.reduce((function(t, e) {
                                return t[i(e)] = e, t
                            }), Object.create(null)));
                            return t.map((function(t) {
                                return r[t] || null
                            }))
                        })));
                    return this.isPromiseAPI() ? v(n) : n
                },
                create: function(t, e) {
                    return this._create(t, "create", e)
                },
                createIfNotExists: function(t, e) {
                    return s.requireDocumentId("createIfNotExists", t), this._create(t, "createIfNotExists", e)
                },
                createOrReplace: function(t, e) {
                    return s.requireDocumentId("createOrReplace", t), this._create(t, "createOrReplace", e)
                },
                patch: function(t, e) {
                    return new h(t, e, this)
                },
                delete: function(t, e) {
                    return this.dataRequest("mutate", {
                        mutations: [{
                            delete: c(t)
                        }]
                    }, e)
                },
                mutate: function(t, e) {
                    var n = t instanceof h || t instanceof l ? t.serialize() : t,
                        i = Array.isArray(n) ? n : [n],
                        r = e && e.transactionId;
                    return this.dataRequest("mutate", {
                        mutations: i,
                        transactionId: r
                    }, e)
                },
                transaction: function(t) {
                    return new l(t, this)
                },
                dataRequest: function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        i = this._dataRequest(t, e, n);
                    return this.isPromiseAPI() ? v(i) : i
                },
                _dataRequest: function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = "mutate" === t,
                        s = !r && u(e),
                        c = !r && s.length < 11264,
                        l = c ? s : "",
                        h = n.returnFirst,
                        f = n.timeout,
                        d = n.token,
                        v = this.getDataUrl(t, l),
                        y = {
                            method: c ? "GET" : "POST",
                            uri: v,
                            json: !0,
                            body: c ? void 0 : e,
                            query: r && p(n),
                            timeout: f,
                            token: d
                        };
                    return this._requestObservable(y).pipe(o(m), a(g), a((function(t) {
                        if (!r) return t;
                        var e = t.results || [];
                        if (n.returnDocuments) return h ? e[0] && e[0].document : e.map((function(t) {
                            return t.document
                        }));
                        var o = h ? "documentId" : "documentIds",
                            a = h ? e[0] && e[0].id : e.map((function(t) {
                                return t.id
                            }));
                        return i({
                            transactionId: t.transactionId,
                            results: e
                        }, o, a)
                    })))
                },
                _create: function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        o = i({}, e, t),
                        a = r({
                            returnFirst: !0,
                            returnDocuments: !0
                        }, n);
                    return this.dataRequest("mutate", {
                        mutations: [o]
                    }, a)
                }
            }
        },
        qfMk: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return o
            }));
            var i = n("1OyB"),
                r = n("vuIU"),
                o = function() {
                    function t() {
                        Object(i.a)(this, t)
                    }
                    return Object(r.a)(t, null, [{
                        key: "format",
                        value: function(t, e) {
                            for (var n = "" + t; n.length < e;) n = "0" + n;
                            return n
                        }
                    }, {
                        key: "truncate",
                        value: function(t, e) {
                            var n = 10 * e;
                            return Math.floor(t * n) / n
                        }
                    }, {
                        key: "loop",
                        value: function(t, e) {
                            return t < 0 ? t = (e + t % e) % e : t > e - 1 && (t %= e), t
                        }
                    }, {
                        key: "roundFloat",
                        value: function(t, e) {
                            var n = Math.pow(10, e);
                            return Math.round(t * n) * (1 / n)
                        }
                    }]), t
                }()
        },
        rHvv: function(t, e, n) {
            "use strict";
            t.exports = function(t, e) {
                return Object.keys(e).concat(Object.keys(t)).reduce((function(n, i) {
                    return n[i] = "undefined" === typeof t[i] ? e[i] : t[i], n
                }), {})
            }
        },
        rOcY: function(t, e, n) {
            "use strict";
            var i = n("hWg+"),
                r = new i.DetectUA;
            e.a = {
                api: {},
                device: r,
                needReload: !1
            }
        },
        "s+BN": function(t, e, n) {
            "use strict";

            function i(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var r = n("I97X"),
                o = n("Qetd"),
                a = n("LMKn"),
                s = n("VmPP"),
                c = s.validateObject,
                u = s.validateInsert;

            function l(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                this.selection = t, this.operations = o({}, e), this.client = n
            }
            o(l.prototype, {
                clone: function() {
                    return new l(this.selection, o({}, this.operations), this.client)
                },
                merge: function(t) {
                    c("merge", t);
                    var e = (new Error).stack.toString().split("\n").filter((function(t) {
                        return t.trim()
                    })).slice(2);
                    return console.warn('The "merge" patch has been deprecated and will be removed in the future\n'.concat(e.join("\n"))), this._assign("merge", r(this.operations.merge || {}, t))
                },
                set: function(t) {
                    return this._assign("set", t)
                },
                diffMatchPatch: function(t) {
                    return c("diffMatchPatch", t), this._assign("diffMatchPatch", t)
                },
                unset: function(t) {
                    if (!Array.isArray(t)) throw new Error("unset(attrs) takes an array of attributes to unset, non-array given");
                    return this.operations = o({}, this.operations, {
                        unset: t
                    }), this
                },
                setIfMissing: function(t) {
                    return this._assign("setIfMissing", t)
                },
                replace: function(t) {
                    return c("replace", t), this._set("set", {
                        $: t
                    })
                },
                inc: function(t) {
                    return this._assign("inc", t)
                },
                dec: function(t) {
                    return this._assign("dec", t)
                },
                insert: function(t, e, n) {
                    var r;
                    return u(t, e, n), this._assign("insert", (i(r = {}, t, e), i(r, "items", n), r))
                },
                append: function(t, e) {
                    return this.insert("after", "".concat(t, "[-1]"), e)
                },
                prepend: function(t, e) {
                    return this.insert("before", "".concat(t, "[0]"), e)
                },
                splice: function(t, e, n, i) {
                    var r = e < 0 ? e - 1 : e,
                        o = "undefined" === typeof n || -1 === n ? -1 : Math.max(0, e + n),
                        a = r < 0 && o >= 0 ? "" : o,
                        s = "".concat(t, "[").concat(r, ":").concat(a, "]");
                    return this.insert("replace", s, i || [])
                },
                ifRevisionId: function(t) {
                    return this.operations.ifRevisionID = t, this
                },
                serialize: function() {
                    return o(a(this.selection), this.operations)
                },
                toJSON: function() {
                    return this.serialize()
                },
                commit: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (!this.client) throw new Error("No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method");
                    var e = "string" === typeof this.selection,
                        n = o({
                            returnFirst: e,
                            returnDocuments: !0
                        }, t);
                    return this.client.mutate({
                        patch: this.serialize()
                    }, n)
                },
                reset: function() {
                    return this.operations = {}, this
                },
                _set: function(t, e) {
                    return this._assign(t, e, !1)
                },
                _assign: function(t, e) {
                    var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    return c(t, e), this.operations = o({}, this.operations, i({}, t, o({}, n && this.operations[t] || {}, e))), this
                }
            }), t.exports = l
        },
        s4NR: function(t, e, n) {
            "use strict";
            e.decode = e.parse = n("kd2E"), e.encode = e.stringify = n("4JlD")
        },
        t0wW: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return f
            })), n.d(e, "b", (function() {
                return d
            }));
            var i, r, o, a = window.requestAnimationFrame,
                s = window.cancelAnimationFrame,
                c = [],
                u = -1,
                l = -1;

            function h() {
                for (i = Date.now(), r = Math.min(i - l, 100), u = a(h), o = 0; o < c.length; o++) c[o](r);
                l = i
            }

            function f(t) {
                -1 === c.indexOf(t) && (c.push(t), 1 === c.length && -1 === u && (l = Date.now(), i = l, u = a(h)))
            }

            function d(t) {
                var e = c.indexOf(t); - 1 !== e && (c.splice(e, 1), 0 === c.length && -1 !== u && (s(u), u = -1))
            }
        },
        ueIO: function(t, e, n) {
            "use strict";
            var i = n("Qetd");

            function r(t) {
                return Boolean(t.listItem)
            }

            function o(t, e) {
                return t.level === e.level && t.listItem === e.listItem
            }

            function a(t) {
                return {
                    _type: "list",
                    _key: "".concat(t._key, "-parent"),
                    level: t.level,
                    listItem: t.listItem,
                    children: [t]
                }
            }

            function s(t) {
                return t.children && t.children[t.children.length - 1]
            }

            function c(t, e) {
                var n = "string" === typeof e.listItem;
                if ("list" === t._type && t.level === e.level && n && t.listItem === e.listItem) return t;
                var i = s(t);
                return !!i && c(i, e)
            }
            t.exports = function(t) {
                for (var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "html", u = [], l = 0; l < t.length; l++) {
                    var h = t[l];
                    if (r(h))
                        if (e)
                            if (o(h, e)) e.children.push(h);
                            else if (h.level > e.level) {
                        var f = a(h);
                        if ("html" === n) {
                            var d = s(e),
                                p = i({}, d, {
                                    children: d.children.concat(f)
                                });
                            e.children[e.children.length - 1] = p
                        } else e.children.push(f);
                        e = f
                    } else if (h.level < e.level) {
                        var m = c(u[u.length - 1], h);
                        if (m) {
                            (e = m).children.push(h);
                            continue
                        }
                        e = a(h), u.push(e)
                    } else if (h.listItem === e.listItem) console.warn("Unknown state encountered for block", h), u.push(h);
                    else {
                        var g = c(u[u.length - 1], {
                            level: h.level
                        });
                        if (g && g.listItem === h.listItem) {
                            (e = g).children.push(h);
                            continue
                        }
                        e = a(h), u.push(e)
                    } else e = a(h), u.push(e);
                    else u.push(h), e = null
                }
                return u
            }
        },
        vHaw: function(t, e, n) {
            "use strict";

            function i(t) {
                this.client = t
            }
            n("Qetd")(i.prototype, {
                getLoginProviders: function() {
                    return this.client.request({
                        uri: "/auth/providers"
                    })
                },
                logout: function() {
                    return this.client.request({
                        uri: "/auth/logout",
                        method: "POST"
                    })
                }
            }), t.exports = i
        },
        vlRD: function(t, e, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return n("RNiq")
            }])
        },
        "vrE+": function(t, e, n) {
            "use strict";
            var i = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function i() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n("FWf1");
            e.scan = function(t, e) {
                var n = !1;
                return arguments.length >= 2 && (n = !0),
                    function(i) {
                        return i.lift(new o(t, e, n))
                    }
            };
            var o = function() {
                    function t(t, e, n) {
                        void 0 === n && (n = !1), this.accumulator = t, this.seed = e, this.hasSeed = n
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new a(t, this.accumulator, this.seed, this.hasSeed))
                    }, t
                }(),
                a = function(t) {
                    function e(e, n, i, r) {
                        var o = t.call(this, e) || this;
                        return o.accumulator = n, o._seed = i, o.hasSeed = r, o.index = 0, o
                    }
                    return i(e, t), Object.defineProperty(e.prototype, "seed", {
                        get: function() {
                            return this._seed
                        },
                        set: function(t) {
                            this.hasSeed = !0, this._seed = t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype._next = function(t) {
                        if (this.hasSeed) return this._tryNext(t);
                        this.seed = t, this.destination.next(t)
                    }, e.prototype._tryNext = function(t) {
                        var e, n = this.index++;
                        try {
                            e = this.accumulator(this.seed, t, n)
                        } catch (i) {
                            this.destination.error(i)
                        }
                        this.seed = e, this.destination.next(e)
                    }, e
                }(r.Subscriber)
        },
        vuIU: function(t, e, n) {
            "use strict";

            function i(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            function r(t, e, n) {
                return e && i(t.prototype, e), n && i(t, n), t
            }
            n.d(e, "a", (function() {
                return r
            }))
        },
        "wH9+": function(t, e, n) {
            t.exports = n("c8+P")
        },
        xHEm: function(t, e, n) {
            "use strict";
            var i = n("wH9+"),
                r = n("Qetd"),
                o = n("h1JA"),
                a = n("8Uid"),
                s = n("RfbL"),
                c = n("0j7I"),
                u = n("kLGu"),
                l = n("MB/A"),
                h = l.ClientError,
                f = l.ServerError,
                d = {
                    onResponse: function(t) {
                        if (t.statusCode >= 500) throw new f(t);
                        if (t.statusCode >= 400) throw new h(t);
                        return t
                    }
                },
                p = i(n("i6MQ").concat([a(), s(), c(), d, o({
                    implementation: u
                })]));

            function m(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p;
                return e(r({
                    maxRedirects: 0
                }, t))
            }
            m.defaultRequester = p, m.ClientError = h, m.ServerError = f, t.exports = m
        },
        xM0z: function(t, e, n) {
            "use strict";
            var i = n("Qetd");

            function r(t) {
                var e = 0,
                    n = t.length;
                if (0 === n) return e;
                for (var i = 0; i < n; i++) e = (e << 5) - e + t.charCodeAt(i), e &= e;
                return e
            }
            t.exports = function(t) {
                return t.map((function(t) {
                    return t._key ? t : i({
                        _key: (e = t, r(JSON.stringify(e)).toString(36).replace(/[^A-Za-z0-9]/g, ""))
                    }, t);
                    var e
                }))
            }
        },
        "xhG/": function(t, e, n) {
            "use strict";
            var i = encodeURIComponent;
            t.exports = function(t) {
                var e = t.query,
                    n = t.params,
                    r = void 0 === n ? {} : n,
                    o = t.options,
                    a = void 0 === o ? {} : o,
                    s = "?query=".concat(i(e)),
                    c = Object.keys(r).reduce((function(t, e) {
                        return "".concat(t, "&").concat(i("$".concat(e)), "=").concat(i(JSON.stringify(r[e])))
                    }), s);
                return Object.keys(a).reduce((function(t, e) {
                    return a[e] ? "".concat(t, "&").concat(i(e), "=").concat(i(a[e])) : t
                }), c)
            }
        },
        yLpj: function(t, e) {
            var n;
            n = function() {
                return this
            }();
            try {
                n = n || new Function("return this")()
            } catch (i) {
                "object" === typeof window && (n = window)
            }
            t.exports = n
        },
        yoF8: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.identity = function(t) {
                return t
            }
        },
        yx2s: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n("FWf1");
            e.canReportError = function(t) {
                for (; t;) {
                    var e = t,
                        n = e.closed,
                        r = e.destination,
                        o = e.isStopped;
                    if (n || o) return !1;
                    t = r && r instanceof i.Subscriber ? r : null
                }
                return !0
            }
        },
        "z/o8": function(t, e, n) {
            "use strict";

            function i(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function r(t, e) {
                t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
            }
            n.d(e, "a", (function() {
                return ai
            }));
            var o, a, s, c, u, l, h, f, d = {
                    autoSleep: 120,
                    force3D: "auto",
                    nullTargetWarn: 1,
                    units: {
                        lineHeight: ""
                    }
                },
                p = {
                    duration: .5,
                    overwrite: !1,
                    delay: 0
                },
                m = 1e8,
                g = 2 * Math.PI,
                v = g / 4,
                y = 0,
                b = Math.sqrt,
                _ = Math.cos,
                w = Math.sin,
                x = function(t) {
                    return "string" === typeof t
                },
                k = function(t) {
                    return "function" === typeof t
                },
                O = function(t) {
                    return "number" === typeof t
                },
                T = function(t) {
                    return "undefined" === typeof t
                },
                S = function(t) {
                    return "object" === typeof t
                },
                E = function(t) {
                    return !1 !== t
                },
                M = function() {
                    return "undefined" !== typeof window
                },
                C = function(t) {
                    return k(t) || x(t)
                },
                j = "function" === typeof ArrayBuffer && ArrayBuffer.isView || function() {},
                P = Array.isArray,
                A = /(?:-?\.?\d|\.)+/gi,
                I = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
                N = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
                R = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
                D = /[+-]=-?[\.\d]+/,
                L = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
                q = {},
                z = {},
                F = function(t) {
                    return (z = ft(t, q)) && Ge
                },
                H = function(t, e) {
                    return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
                },
                B = function(t, e) {
                    return !e && console.warn(t)
                },
                U = function(t, e) {
                    return t && (q[t] = e) && z && (z[t] = e) || q
                },
                V = function() {
                    return 0
                },
                W = {},
                Y = [],
                X = {},
                G = {},
                J = {},
                Q = 30,
                K = [],
                Z = "",
                $ = function(t) {
                    var e, n, i = t[0];
                    if (S(i) || k(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
                        for (n = K.length; n-- && !K[n].targetTest(i););
                        e = K[n]
                    }
                    for (n = t.length; n--;) t[n] && (t[n]._gsap || (t[n]._gsap = new be(t[n], e))) || t.splice(n, 1);
                    return t
                },
                tt = function(t) {
                    return t._gsap || $(zt(t))[0]._gsap
                },
                et = function(t, e, n) {
                    return (n = t[e]) && k(n) ? t[e]() : T(n) && t.getAttribute && t.getAttribute(e) || n
                },
                nt = function(t, e) {
                    return (t = t.split(",")).forEach(e) || t
                },
                it = function(t) {
                    return Math.round(1e5 * t) / 1e5 || 0
                },
                rt = function(t, e) {
                    for (var n = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < n;);
                    return i < n
                },
                ot = function(t, e, n) {
                    var i, r = O(t[1]),
                        o = (r ? 2 : 1) + (e < 2 ? 0 : 1),
                        a = t[o];
                    if (r && (a.duration = t[1]), a.parent = n, e) {
                        for (i = a; n && !("immediateRender" in i);) i = n.vars.defaults || {}, n = E(n.vars.inherit) && n.parent;
                        a.immediateRender = E(i.immediateRender), e < 2 ? a.runBackwards = 1 : a.startAt = t[o - 1]
                    }
                    return a
                },
                at = function() {
                    var t, e, n = Y.length,
                        i = Y.slice(0);
                    for (X = {}, Y.length = 0, t = 0; t < n; t++)(e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
                },
                st = function(t, e, n, i) {
                    Y.length && at(), t.render(e, n, i), Y.length && at()
                },
                ct = function(t) {
                    var e = parseFloat(t);
                    return (e || 0 === e) && (t + "").match(L).length < 2 ? e : x(t) ? t.trim() : t
                },
                ut = function(t) {
                    return t
                },
                lt = function(t, e) {
                    for (var n in e) n in t || (t[n] = e[n]);
                    return t
                },
                ht = function(t, e) {
                    for (var n in e) n in t || "duration" === n || "ease" === n || (t[n] = e[n])
                },
                ft = function(t, e) {
                    for (var n in e) t[n] = e[n];
                    return t
                },
                dt = function t(e, n) {
                    for (var i in n) e[i] = S(n[i]) ? t(e[i] || (e[i] = {}), n[i]) : n[i];
                    return e
                },
                pt = function(t, e) {
                    var n, i = {};
                    for (n in t) n in e || (i[n] = t[n]);
                    return i
                },
                mt = function(t) {
                    var e = t.parent || o,
                        n = t.keyframes ? ht : lt;
                    if (E(t.inherit))
                        for (; e;) n(t, e.vars.defaults), e = e.parent || e._dp;
                    return t
                },
                gt = function(t, e, n, i) {
                    void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
                    var r = e._prev,
                        o = e._next;
                    r ? r._next = o : t[n] === e && (t[n] = o), o ? o._prev = r : t[i] === e && (t[i] = r), e._next = e._prev = e.parent = null
                },
                vt = function(t, e) {
                    t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0
                },
                yt = function(t, e) {
                    if (t && (!e || e._end > t._dur || e._start < 0))
                        for (var n = t; n;) n._dirty = 1, n = n.parent;
                    return t
                },
                bt = function(t) {
                    for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
                    return t
                },
                _t = function(t) {
                    return t._repeat ? wt(t._tTime, t = t.duration() + t._rDelay) * t : 0
                },
                wt = function(t, e) {
                    return (t /= e) && ~~t === t ? ~~t - 1 : ~~t
                },
                xt = function(t, e) {
                    return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
                },
                kt = function(t) {
                    return t._end = it(t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0))
                },
                Ot = function(t, e) {
                    var n = t._dp;
                    return n && n.smoothChildTiming && t._ts && (t._start = it(t._dp._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), kt(t), n._dirty || yt(n, t)), t
                },
                Tt = function(t, e) {
                    var n;
                    if ((e._time || e._initted && !e._dur) && (n = xt(t.rawTime(), e), (!e._dur || Nt(0, e.totalDuration(), n) - e._tTime > 1e-8) && e.render(n, !0)), yt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
                        if (t._dur < t.duration())
                            for (n = t; n._dp;) n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
                        t._zTime = -1e-8
                    }
                },
                St = function(t, e, n, i) {
                    return e.parent && vt(e), e._start = it(n + e._delay), e._end = it(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
                        function(t, e, n, i, r) {
                            void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
                            var o, a = t[i];
                            if (r)
                                for (o = e[r]; a && a[r] > o;) a = a._prev;
                            a ? (e._next = a._next, a._next = e) : (e._next = t[n], t[n] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = a, e.parent = e._dp = t
                        }(t, e, "_first", "_last", t._sort ? "_start" : 0), t._recent = e, i || Tt(t, e), t
                },
                Et = function(t, e) {
                    return (q.ScrollTrigger || H("scrollTrigger", e)) && q.ScrollTrigger.create(e, t)
                },
                Mt = function(t, e, n, i) {
                    return Se(t, e), t._initted ? !n && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && l !== ae.frame ? (Y.push(t), t._lazy = [e, i], 1) : void 0 : 1
                },
                Ct = function(t, e, n, i) {
                    var r = t._repeat,
                        o = it(e) || 0,
                        a = t._tTime / t._tDur;
                    return a && !i && (t._time *= o / t._dur), t._dur = o, t._tDur = r ? r < 0 ? 1e10 : it(o * (r + 1) + t._rDelay * r) : o, a && !i ? Ot(t, t._tTime = t._tDur * a) : t.parent && kt(t), n || yt(t.parent, t), t
                },
                jt = function(t) {
                    return t instanceof we ? yt(t) : Ct(t, t._dur)
                },
                Pt = {
                    _start: 0,
                    endTime: V
                },
                At = function t(e, n) {
                    var i, r, o = e.labels,
                        a = e._recent || Pt,
                        s = e.duration() >= m ? a.endTime(!1) : e._dur;
                    return x(n) && (isNaN(n) || n in o) ? "<" === (i = n.charAt(0)) || ">" === i ? ("<" === i ? a._start : a.endTime(a._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) : (i = n.indexOf("=")) < 0 ? (n in o || (o[n] = s), o[n]) : (r = +(n.charAt(i - 1) + n.substr(i + 1)), i > 1 ? t(e, n.substr(0, i - 1)) + r : s + r) : null == n ? s : +n
                },
                It = function(t, e) {
                    return t || 0 === t ? e(t) : e
                },
                Nt = function(t, e, n) {
                    return n < t ? t : n > e ? e : n
                },
                Rt = function(t) {
                    return (t = (t + "").substr((parseFloat(t) + "").length)) && isNaN(t) ? t : ""
                },
                Dt = [].slice,
                Lt = function(t, e) {
                    return t && S(t) && "length" in t && (!e && !t.length || t.length - 1 in t && S(t[0])) && !t.nodeType && t !== a
                },
                qt = function(t, e, n) {
                    return void 0 === n && (n = []), t.forEach((function(t) {
                        var i;
                        return x(t) && !e || Lt(t, 1) ? (i = n).push.apply(i, zt(t)) : n.push(t)
                    })) || n
                },
                zt = function(t, e) {
                    return !x(t) || e || !s && se() ? P(t) ? qt(t, e) : Lt(t) ? Dt.call(t, 0) : t ? [t] : [] : Dt.call(c.querySelectorAll(t), 0)
                },
                Ft = function(t) {
                    return t.sort((function() {
                        return .5 - Math.random()
                    }))
                },
                Ht = function(t) {
                    if (k(t)) return t;
                    var e = S(t) ? t : {
                            each: t
                        },
                        n = pe(e.ease),
                        i = e.from || 0,
                        r = parseFloat(e.base) || 0,
                        o = {},
                        a = i > 0 && i < 1,
                        s = isNaN(i) || a,
                        c = e.axis,
                        u = i,
                        l = i;
                    return x(i) ? u = l = {
                            center: .5,
                            edges: .5,
                            end: 1
                        } [i] || 0 : !a && s && (u = i[0], l = i[1]),
                        function(t, a, h) {
                            var f, d, p, g, v, y, _, w, x, k = (h || e).length,
                                O = o[k];
                            if (!O) {
                                if (!(x = "auto" === e.grid ? 0 : (e.grid || [1, m])[1])) {
                                    for (_ = -m; _ < (_ = h[x++].getBoundingClientRect().left) && x < k;);
                                    x--
                                }
                                for (O = o[k] = [], f = s ? Math.min(x, k) * u - .5 : i % x, d = s ? k * l / x - .5 : i / x | 0, _ = 0, w = m, y = 0; y < k; y++) p = y % x - f, g = d - (y / x | 0), O[y] = v = c ? Math.abs("y" === c ? g : p) : b(p * p + g * g), v > _ && (_ = v), v < w && (w = v);
                                "random" === i && Ft(O), O.max = _ - w, O.min = w, O.v = k = (parseFloat(e.amount) || parseFloat(e.each) * (x > k ? k - 1 : c ? "y" === c ? k / x : x : Math.max(x, k / x)) || 0) * ("edges" === i ? -1 : 1), O.b = k < 0 ? r - k : r, O.u = Rt(e.amount || e.each) || 0, n = n && k < 0 ? fe(n) : n
                            }
                            return k = (O[t] - O.min) / O.max || 0, it(O.b + (n ? n(k) : k) * O.v) + O.u
                        }
                },
                Bt = function(t) {
                    var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
                    return function(n) {
                        return Math.floor(Math.round(parseFloat(n) / t) * t * e) / e + (O(n) ? 0 : Rt(n))
                    }
                },
                Ut = function(t, e) {
                    var n, i, r = P(t);
                    return !r && S(t) && (n = r = t.radius || m, t.values ? (t = zt(t.values), (i = !O(t[0])) && (n *= n)) : t = Bt(t.increment)), It(e, r ? k(t) ? function(e) {
                        return i = t(e), Math.abs(i - e) <= n ? i : e
                    } : function(e) {
                        for (var r, o, a = parseFloat(i ? e.x : e), s = parseFloat(i ? e.y : 0), c = m, u = 0, l = t.length; l--;)(r = i ? (r = t[l].x - a) * r + (o = t[l].y - s) * o : Math.abs(t[l] - a)) < c && (c = r, u = l);
                        return u = !n || c <= n ? t[u] : e, i || u === e || O(e) ? u : u + Rt(e)
                    } : Bt(t))
                },
                Vt = function(t, e, n, i) {
                    return It(P(t) ? !e : !0 === n ? !!(n = 0) : !i, (function() {
                        return P(t) ? t[~~(Math.random() * t.length)] : (n = n || 1e-5) && (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((t + Math.random() * (e - t)) / n) * n * i) / i
                    }))
                },
                Wt = function(t, e, n) {
                    return It(n, (function(n) {
                        return t[~~e(n)]
                    }))
                },
                Yt = function(t) {
                    for (var e, n, i, r, o = 0, a = ""; ~(e = t.indexOf("random(", o));) i = t.indexOf(")", e), r = "[" === t.charAt(e + 7), n = t.substr(e + 7, i - e - 7).match(r ? L : A), a += t.substr(o, e - o) + Vt(r ? n : +n[0], r ? 0 : +n[1], +n[2] || 1e-5), o = i + 1;
                    return a + t.substr(o, t.length - o)
                },
                Xt = function(t, e, n, i, r) {
                    var o = e - t,
                        a = i - n;
                    return It(r, (function(e) {
                        return n + ((e - t) / o * a || 0)
                    }))
                },
                Gt = function(t, e, n) {
                    var i, r, o, a = t.labels,
                        s = m;
                    for (i in a)(r = a[i] - e) < 0 === !!n && r && s > (r = Math.abs(r)) && (o = i, s = r);
                    return o
                },
                Jt = function(t, e, n) {
                    var i, r, o = t.vars,
                        a = o[e];
                    if (a) return i = o[e + "Params"], r = o.callbackScope || t, n && Y.length && at(), i ? a.apply(r, i) : a.call(r)
                },
                Qt = function(t) {
                    return vt(t), t.progress() < 1 && Jt(t, "onInterrupt"), t
                },
                Kt = function(t) {
                    var e = (t = !t.name && t.default || t).name,
                        n = k(t),
                        i = e && !n && t.init ? function() {
                            this._props = []
                        } : t,
                        r = {
                            init: V,
                            render: ze,
                            add: Oe,
                            kill: He,
                            modifier: Fe,
                            rawVars: 0
                        },
                        o = {
                            targetTest: 0,
                            get: 0,
                            getSetter: Re,
                            aliases: {},
                            register: 0
                        };
                    if (se(), t !== i) {
                        if (G[e]) return;
                        lt(i, lt(pt(t, r), o)), ft(i.prototype, ft(r, pt(t, o))), G[i.prop = e] = i, t.targetTest && (K.push(i), W[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                    }
                    U(e, i), t.register && t.register(Ge, i, Ve)
                },
                Zt = {
                    aqua: [0, 255, 255],
                    lime: [0, 255, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, 255],
                    navy: [0, 0, 128],
                    white: [255, 255, 255],
                    olive: [128, 128, 0],
                    yellow: [255, 255, 0],
                    orange: [255, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [255, 0, 0],
                    pink: [255, 192, 203],
                    cyan: [0, 255, 255],
                    transparent: [255, 255, 255, 0]
                },
                $t = function(t, e, n) {
                    return 255 * (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (n - e) * t * 6 : t < .5 ? n : 3 * t < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                },
                te = function(t, e, n) {
                    var i, r, o, a, s, c, u, l, h, f, d = t ? O(t) ? [t >> 16, t >> 8 & 255, 255 & t] : 0 : Zt.black;
                    if (!d) {
                        if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Zt[t]) d = Zt[t];
                        else if ("#" === t.charAt(0)) 4 === t.length && (i = t.charAt(1), r = t.charAt(2), o = t.charAt(3), t = "#" + i + i + r + r + o + o), d = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
                        else if ("hsl" === t.substr(0, 3))
                            if (d = f = t.match(A), e) {
                                if (~t.indexOf("=")) return d = t.match(I), n && d.length < 4 && (d[3] = 1), d
                            } else a = +d[0] % 360 / 360, s = +d[1] / 100, i = 2 * (c = +d[2] / 100) - (r = c <= .5 ? c * (s + 1) : c + s - c * s), d.length > 3 && (d[3] *= 1), d[0] = $t(a + 1 / 3, i, r), d[1] = $t(a, i, r), d[2] = $t(a - 1 / 3, i, r);
                        else d = t.match(A) || Zt.transparent;
                        d = d.map(Number)
                    }
                    return e && !f && (i = d[0] / 255, r = d[1] / 255, o = d[2] / 255, c = ((u = Math.max(i, r, o)) + (l = Math.min(i, r, o))) / 2, u === l ? a = s = 0 : (h = u - l, s = c > .5 ? h / (2 - u - l) : h / (u + l), a = u === i ? (r - o) / h + (r < o ? 6 : 0) : u === r ? (o - i) / h + 2 : (i - r) / h + 4, a *= 60), d[0] = ~~(a + .5), d[1] = ~~(100 * s + .5), d[2] = ~~(100 * c + .5)), n && d.length < 4 && (d[3] = 1), d
                },
                ee = function(t) {
                    var e = [],
                        n = [],
                        i = -1;
                    return t.split(ie).forEach((function(t) {
                        var r = t.match(N) || [];
                        e.push.apply(e, r), n.push(i += r.length + 1)
                    })), e.c = n, e
                },
                ne = function(t, e, n) {
                    var i, r, o, a, s = "",
                        c = (t + s).match(ie),
                        u = e ? "hsla(" : "rgba(",
                        l = 0;
                    if (!c) return t;
                    if (c = c.map((function(t) {
                            return (t = te(t, e, 1)) && u + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
                        })), n && (o = ee(t), (i = n.c).join(s) !== o.c.join(s)))
                        for (a = (r = t.replace(ie, "1").split(N)).length - 1; l < a; l++) s += r[l] + (~i.indexOf(l) ? c.shift() || u + "0,0,0,0)" : (o.length ? o : c.length ? c : n).shift());
                    if (!r)
                        for (a = (r = t.split(ie)).length - 1; l < a; l++) s += r[l] + c[l];
                    return s + r[a]
                },
                ie = function() {
                    var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                    for (t in Zt) e += "|" + t + "\\b";
                    return new RegExp(e + ")", "gi")
                }(),
                re = /hsl[a]?\(/,
                oe = function(t) {
                    var e, n = t.join(" ");
                    if (ie.lastIndex = 0, ie.test(n)) return e = re.test(n), t[1] = ne(t[1], e), t[0] = ne(t[0], e, ee(t[1])), !0
                },
                ae = function() {
                    var t, e, n, i, r, o, l = Date.now,
                        h = 500,
                        d = 33,
                        p = l(),
                        m = p,
                        g = 1e3 / 240,
                        v = g,
                        y = [],
                        b = function n(a) {
                            var s, c, u, f, b = l() - m,
                                _ = !0 === a;
                            if (b > h && (p += b - d), ((s = (u = (m += b) - p) - v) > 0 || _) && (f = ++i.frame, r = u - 1e3 * i.time, i.time = u /= 1e3, v += s + (s >= g ? 4 : g - s), c = 1), _ || (t = e(n)), c)
                                for (o = 0; o < y.length; o++) y[o](u, r, f, a)
                        };
                    return i = {
                        time: 0,
                        frame: 0,
                        tick: function() {
                            b(!0)
                        },
                        deltaRatio: function(t) {
                            return r / (1e3 / (t || 60))
                        },
                        wake: function() {
                            u && (!s && M() && (a = s = window, c = a.document || {}, q.gsap = Ge, (a.gsapVersions || (a.gsapVersions = [])).push(Ge.version), F(z || a.GreenSockGlobals || !a.gsap && a || {}), n = a.requestAnimationFrame), t && i.sleep(), e = n || function(t) {
                                return setTimeout(t, v - 1e3 * i.time + 1 | 0)
                            }, f = 1, b(2))
                        },
                        sleep: function() {
                            (n ? a.cancelAnimationFrame : clearTimeout)(t), f = 0, e = V
                        },
                        lagSmoothing: function(t, e) {
                            h = t || 1 / 1e-8, d = Math.min(e, h, 0)
                        },
                        fps: function(t) {
                            g = 1e3 / (t || 240), v = 1e3 * i.time + g
                        },
                        add: function(t) {
                            y.indexOf(t) < 0 && y.push(t), se()
                        },
                        remove: function(t) {
                            var e;
                            ~(e = y.indexOf(t)) && y.splice(e, 1) && o >= e && o--
                        },
                        _listeners: y
                    }
                }(),
                se = function() {
                    return !f && ae.wake()
                },
                ce = {},
                ue = /^[\d.\-M][\d.\-,\s]/,
                le = /["']/g,
                he = function(t) {
                    for (var e, n, i, r = {}, o = t.substr(1, t.length - 3).split(":"), a = o[0], s = 1, c = o.length; s < c; s++) n = o[s], e = s !== c - 1 ? n.lastIndexOf(",") : n.length, i = n.substr(0, e), r[a] = isNaN(i) ? i.replace(le, "").trim() : +i, a = n.substr(e + 1).trim();
                    return r
                },
                fe = function(t) {
                    return function(e) {
                        return 1 - t(1 - e)
                    }
                },
                de = function t(e, n) {
                    for (var i, r = e._first; r;) r instanceof we ? t(r, n) : !r.vars.yoyoEase || r._yoyo && r._repeat || r._yoyo === n || (r.timeline ? t(r.timeline, n) : (i = r._ease, r._ease = r._yEase, r._yEase = i, r._yoyo = n)), r = r._next
                },
                pe = function(t, e) {
                    return t && (k(t) ? t : ce[t] || function(t) {
                        var e = (t + "").split("("),
                            n = ce[e[0]];
                        return n && e.length > 1 && n.config ? n.config.apply(null, ~t.indexOf("{") ? [he(e[1])] : function(t) {
                            var e = t.indexOf("(") + 1,
                                n = t.indexOf(")"),
                                i = t.indexOf("(", e);
                            return t.substring(e, ~i && i < n ? t.indexOf(")", n + 1) : n)
                        }(t).split(",").map(ct)) : ce._CE && ue.test(t) ? ce._CE("", t) : n
                    }(t)) || e
                },
                me = function(t, e, n, i) {
                    void 0 === n && (n = function(t) {
                        return 1 - e(1 - t)
                    }), void 0 === i && (i = function(t) {
                        return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
                    });
                    var r, o = {
                        easeIn: e,
                        easeOut: n,
                        easeInOut: i
                    };
                    return nt(t, (function(t) {
                        for (var e in ce[t] = q[t] = o, ce[r = t.toLowerCase()] = n, o) ce[r + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = ce[t + "." + e] = o[e]
                    })), o
                },
                ge = function(t) {
                    return function(e) {
                        return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
                    }
                },
                ve = function t(e, n, i) {
                    var r = n >= 1 ? n : 1,
                        o = (i || (e ? .3 : .45)) / (n < 1 ? n : 1),
                        a = o / g * (Math.asin(1 / r) || 0),
                        s = function(t) {
                            return 1 === t ? 1 : r * Math.pow(2, -10 * t) * w((t - a) * o) + 1
                        },
                        c = "out" === e ? s : "in" === e ? function(t) {
                            return 1 - s(1 - t)
                        } : ge(s);
                    return o = g / o, c.config = function(n, i) {
                        return t(e, n, i)
                    }, c
                },
                ye = function t(e, n) {
                    void 0 === n && (n = 1.70158);
                    var i = function(t) {
                            return t ? --t * t * ((n + 1) * t + n) + 1 : 0
                        },
                        r = "out" === e ? i : "in" === e ? function(t) {
                            return 1 - i(1 - t)
                        } : ge(i);
                    return r.config = function(n) {
                        return t(e, n)
                    }, r
                };
            nt("Linear,Quad,Cubic,Quart,Quint,Strong", (function(t, e) {
                    var n = e < 5 ? e + 1 : e;
                    me(t + ",Power" + (n - 1), e ? function(t) {
                        return Math.pow(t, n)
                    } : function(t) {
                        return t
                    }, (function(t) {
                        return 1 - Math.pow(1 - t, n)
                    }), (function(t) {
                        return t < .5 ? Math.pow(2 * t, n) / 2 : 1 - Math.pow(2 * (1 - t), n) / 2
                    }))
                })), ce.Linear.easeNone = ce.none = ce.Linear.easeIn, me("Elastic", ve("in"), ve("out"), ve()),
                function(t, e) {
                    var n = 1 / e,
                        i = function(i) {
                            return i < n ? t * i * i : i < .7272727272727273 ? t * Math.pow(i - 1.5 / e, 2) + .75 : i < .9090909090909092 ? t * (i -= 2.25 / e) * i + .9375 : t * Math.pow(i - 2.625 / e, 2) + .984375
                        };
                    me("Bounce", (function(t) {
                        return 1 - i(1 - t)
                    }), i)
                }(7.5625, 2.75), me("Expo", (function(t) {
                    return t ? Math.pow(2, 10 * (t - 1)) : 0
                })), me("Circ", (function(t) {
                    return -(b(1 - t * t) - 1)
                })), me("Sine", (function(t) {
                    return 1 === t ? 1 : 1 - _(t * v)
                })), me("Back", ye("in"), ye("out"), ye()), ce.SteppedEase = ce.steps = q.SteppedEase = {
                    config: function(t, e) {
                        void 0 === t && (t = 1);
                        var n = 1 / t,
                            i = t + (e ? 0 : 1),
                            r = e ? 1 : 0;
                        return function(t) {
                            return ((i * Nt(0, .99999999, t) | 0) + r) * n
                        }
                    }
                }, p.ease = ce["quad.out"], nt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(t) {
                    return Z += t + "," + t + "Params,"
                }));
            var be = function(t, e) {
                    this.id = y++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : et, this.set = e ? e.getSetter : Re
                },
                _e = function() {
                    function t(t, e) {
                        var n = t.parent || o;
                        this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Ct(this, +t.duration, 1, 1), this.data = t.data, f || ae.wake(), n && St(n, this, e || 0 === e ? e : n._time, 1), t.reversed && this.reverse(), t.paused && this.paused(!0)
                    }
                    var e = t.prototype;
                    return e.delay = function(t) {
                        return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
                    }, e.duration = function(t) {
                        return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
                    }, e.totalDuration = function(t) {
                        return arguments.length ? (this._dirty = 0, Ct(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
                    }, e.totalTime = function(t, e) {
                        if (se(), !arguments.length) return this._tTime;
                        var n = this._dp;
                        if (n && n.smoothChildTiming && this._ts) {
                            for (Ot(this, t); n.parent;) n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
                            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && St(this._dp, this, this._start - this._delay)
                        }
                        return (this._tTime !== t || !this._dur && !e || this._initted && 1e-8 === Math.abs(this._zTime) || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), st(this, t, e)), this
                    }, e.time = function(t, e) {
                        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + _t(this)) % this._dur || (t ? this._dur : 0), e) : this._time
                    }, e.totalProgress = function(t, e) {
                        return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
                    }, e.progress = function(t, e) {
                        return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + _t(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
                    }, e.iteration = function(t, e) {
                        var n = this.duration() + this._rDelay;
                        return arguments.length ? this.totalTime(this._time + (t - 1) * n, e) : this._repeat ? wt(this._tTime, n) + 1 : 1
                    }, e.timeScale = function(t) {
                        if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
                        if (this._rts === t) return this;
                        var e = this.parent && this._ts ? xt(this.parent._time, this) : this._tTime;
                        return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, bt(this.totalTime(Nt(-this._delay, this._tDur, e), !0))
                    }, e.paused = function(t) {
                        return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (se(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= 1e-8) && 1e-8 !== Math.abs(this._zTime)))), this) : this._ps
                    }, e.startTime = function(t) {
                        if (arguments.length) {
                            this._start = t;
                            var e = this.parent || this._dp;
                            return e && (e._sort || !this.parent) && St(e, this, t - this._delay), this
                        }
                        return this._start
                    }, e.endTime = function(t) {
                        return this._start + (E(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
                    }, e.rawTime = function(t) {
                        var e = this.parent || this._dp;
                        return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? xt(e.rawTime(t), this) : this._tTime : this._tTime
                    }, e.globalTime = function(t) {
                        for (var e = this, n = arguments.length ? t : e.rawTime(); e;) n = e._start + n / (e._ts || 1), e = e._dp;
                        return n
                    }, e.repeat = function(t) {
                        return arguments.length ? (this._repeat = t, jt(this)) : this._repeat
                    }, e.repeatDelay = function(t) {
                        return arguments.length ? (this._rDelay = t, jt(this)) : this._rDelay
                    }, e.yoyo = function(t) {
                        return arguments.length ? (this._yoyo = t, this) : this._yoyo
                    }, e.seek = function(t, e) {
                        return this.totalTime(At(this, t), E(e))
                    }, e.restart = function(t, e) {
                        return this.play().totalTime(t ? -this._delay : 0, E(e))
                    }, e.play = function(t, e) {
                        return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
                    }, e.reverse = function(t, e) {
                        return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
                    }, e.pause = function(t, e) {
                        return null != t && this.seek(t, e), this.paused(!0)
                    }, e.resume = function() {
                        return this.paused(!1)
                    }, e.reversed = function(t) {
                        return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0
                    }, e.invalidate = function() {
                        return this._initted = 0, this._zTime = -1e-8, this
                    }, e.isActive = function() {
                        var t, e = this.parent || this._dp,
                            n = this._start;
                        return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= n && t < this.endTime(!0) - 1e-8))
                    }, e.eventCallback = function(t, e, n) {
                        var i = this.vars;
                        return arguments.length > 1 ? (e ? (i[t] = e, n && (i[t + "Params"] = n), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t]
                    }, e.then = function(t) {
                        var e = this;
                        return new Promise((function(n) {
                            var i = k(t) ? t : ut,
                                r = function() {
                                    var t = e.then;
                                    e.then = null, k(i) && (i = i(e)) && (i.then || i === e) && (e.then = t), n(i), e.then = t
                                };
                            e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? r() : e._prom = r
                        }))
                    }, e.kill = function() {
                        Qt(this)
                    }, t
                }();
            lt(_e.prototype, {
                _time: 0,
                _start: 0,
                _end: 0,
                _tTime: 0,
                _tDur: 0,
                _dirty: 0,
                _repeat: 0,
                _yoyo: !1,
                parent: null,
                _initted: !1,
                _rDelay: 0,
                _ts: 1,
                _dp: 0,
                ratio: 0,
                _zTime: -1e-8,
                _prom: 0,
                _ps: !1,
                _rts: 1
            });
            var we = function(t) {
                function e(e, n) {
                    var r;
                    return void 0 === e && (e = {}), (r = t.call(this, e, n) || this).labels = {}, r.smoothChildTiming = !!e.smoothChildTiming, r.autoRemoveChildren = !!e.autoRemoveChildren, r._sort = E(e.sortChildren), r.parent && Tt(r.parent, i(r)), e.scrollTrigger && Et(i(r), e.scrollTrigger), r
                }
                r(e, t);
                var n = e.prototype;
                return n.to = function(t, e, n) {
                    return new je(t, ot(arguments, 0, this), At(this, O(e) ? arguments[3] : n)), this
                }, n.from = function(t, e, n) {
                    return new je(t, ot(arguments, 1, this), At(this, O(e) ? arguments[3] : n)), this
                }, n.fromTo = function(t, e, n, i) {
                    return new je(t, ot(arguments, 2, this), At(this, O(e) ? arguments[4] : i)), this
                }, n.set = function(t, e, n) {
                    return e.duration = 0, e.parent = this, mt(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new je(t, e, At(this, n), 1), this
                }, n.call = function(t, e, n) {
                    return St(this, je.delayedCall(0, t, e), At(this, n))
                }, n.staggerTo = function(t, e, n, i, r, o, a) {
                    return n.duration = e, n.stagger = n.stagger || i, n.onComplete = o, n.onCompleteParams = a, n.parent = this, new je(t, n, At(this, r)), this
                }, n.staggerFrom = function(t, e, n, i, r, o, a) {
                    return n.runBackwards = 1, mt(n).immediateRender = E(n.immediateRender), this.staggerTo(t, e, n, i, r, o, a)
                }, n.staggerFromTo = function(t, e, n, i, r, o, a, s) {
                    return i.startAt = n, mt(i).immediateRender = E(i.immediateRender), this.staggerTo(t, e, i, r, o, a, s)
                }, n.render = function(t, e, n) {
                    var i, r, a, s, c, u, l, h, f, d, p, m, g = this._time,
                        v = this._dirty ? this.totalDuration() : this._tDur,
                        y = this._dur,
                        b = this !== o && t > v - 1e-8 && t >= 0 ? v : t < 1e-8 ? 0 : t,
                        _ = this._zTime < 0 !== t < 0 && (this._initted || !y);
                    if (b !== this._tTime || n || _) {
                        if (g !== this._time && y && (b += this._time - g, t += this._time - g), i = b, f = this._start, u = !(h = this._ts), _ && (y || (g = this._zTime), (t || !e) && (this._zTime = t)), this._repeat && (p = this._yoyo, c = y + this._rDelay, i = it(b % c), b === v ? (s = this._repeat, i = y) : ((s = ~~(b / c)) && s === b / c && (i = y, s--), i > y && (i = y)), d = wt(this._tTime, c), !g && this._tTime && d !== s && (d = s), p && 1 & s && (i = y - i, m = 1), s !== d && !this._lock)) {
                            var w = p && 1 & d,
                                x = w === (p && 1 & s);
                            if (s < d && (w = !w), g = w ? 0 : y, this._lock = 1, this.render(g || (m ? 0 : it(s * c)), e, !y)._lock = 0, !e && this.parent && Jt(this, "onRepeat"), this.vars.repeatRefresh && !m && (this.invalidate()._lock = 1), g !== this._time || u !== !this._ts) return this;
                            if (y = this._dur, v = this._tDur, x && (this._lock = 2, g = w ? y : -1e-4, this.render(g, !0), this.vars.repeatRefresh && !m && this.invalidate()), this._lock = 0, !this._ts && !u) return this;
                            de(this, m)
                        }
                        if (this._hasPause && !this._forcing && this._lock < 2 && (l = function(t, e, n) {
                                var i;
                                if (n > e)
                                    for (i = t._first; i && i._start <= n;) {
                                        if (!i._dur && "isPause" === i.data && i._start > e) return i;
                                        i = i._next
                                    } else
                                        for (i = t._last; i && i._start >= n;) {
                                            if (!i._dur && "isPause" === i.data && i._start < e) return i;
                                            i = i._prev
                                        }
                            }(this, it(g), it(i))) && (b -= i - (i = l._start)), this._tTime = b, this._time = i, this._act = !h, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t), !g && i && !e && Jt(this, "onStart"), i >= g && t >= 0)
                            for (r = this._first; r;) {
                                if (a = r._next, (r._act || i >= r._start) && r._ts && l !== r) {
                                    if (r.parent !== this) return this.render(t, e, n);
                                    if (r.render(r._ts > 0 ? (i - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (i - r._start) * r._ts, e, n), i !== this._time || !this._ts && !u) {
                                        l = 0, a && (b += this._zTime = -1e-8);
                                        break
                                    }
                                }
                                r = a
                            } else {
                                r = this._last;
                                for (var k = t < 0 ? t : i; r;) {
                                    if (a = r._prev, (r._act || k <= r._end) && r._ts && l !== r) {
                                        if (r.parent !== this) return this.render(t, e, n);
                                        if (r.render(r._ts > 0 ? (k - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (k - r._start) * r._ts, e, n), i !== this._time || !this._ts && !u) {
                                            l = 0, a && (b += this._zTime = k ? -1e-8 : 1e-8);
                                            break
                                        }
                                    }
                                    r = a
                                }
                            }
                        if (l && !e && (this.pause(), l.render(i >= g ? 0 : -1e-8)._zTime = i >= g ? 1 : -1, this._ts)) return this._start = f, kt(this), this.render(t, e, n);
                        this._onUpdate && !e && Jt(this, "onUpdate", !0), (b === v && v >= this.totalDuration() || !b && g) && (f !== this._start && Math.abs(h) === Math.abs(this._ts) || this._lock || ((t || !y) && (b === v && this._ts > 0 || !b && this._ts < 0) && vt(this, 1), e || t < 0 && !g || !b && !g || (Jt(this, b === v ? "onComplete" : "onReverseComplete", !0), this._prom && !(b < v && this.timeScale() > 0) && this._prom())))
                    }
                    return this
                }, n.add = function(t, e) {
                    var n = this;
                    if (O(e) || (e = At(this, e)), !(t instanceof _e)) {
                        if (P(t)) return t.forEach((function(t) {
                            return n.add(t, e)
                        })), this;
                        if (x(t)) return this.addLabel(t, e);
                        if (!k(t)) return this;
                        t = je.delayedCall(0, t)
                    }
                    return this !== t ? St(this, t, e) : this
                }, n.getChildren = function(t, e, n, i) {
                    void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === n && (n = !0), void 0 === i && (i = -m);
                    for (var r = [], o = this._first; o;) o._start >= i && (o instanceof je ? e && r.push(o) : (n && r.push(o), t && r.push.apply(r, o.getChildren(!0, e, n)))), o = o._next;
                    return r
                }, n.getById = function(t) {
                    for (var e = this.getChildren(1, 1, 1), n = e.length; n--;)
                        if (e[n].vars.id === t) return e[n]
                }, n.remove = function(t) {
                    return x(t) ? this.removeLabel(t) : k(t) ? this.killTweensOf(t) : (gt(this, t), t === this._recent && (this._recent = this._last), yt(this))
                }, n.totalTime = function(e, n) {
                    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = it(ae.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, n), this._forcing = 0, this) : this._tTime
                }, n.addLabel = function(t, e) {
                    return this.labels[t] = At(this, e), this
                }, n.removeLabel = function(t) {
                    return delete this.labels[t], this
                }, n.addPause = function(t, e, n) {
                    var i = je.delayedCall(0, e || V, n);
                    return i.data = "isPause", this._hasPause = 1, St(this, i, At(this, t))
                }, n.removePause = function(t) {
                    var e = this._first;
                    for (t = At(this, t); e;) e._start === t && "isPause" === e.data && vt(e), e = e._next
                }, n.killTweensOf = function(t, e, n) {
                    for (var i = this.getTweensOf(t, n), r = i.length; r--;) xe !== i[r] && i[r].kill(t, e);
                    return this
                }, n.getTweensOf = function(t, e) {
                    for (var n, i = [], r = zt(t), o = this._first, a = O(e); o;) o instanceof je ? rt(o._targets, r) && (a ? (!xe || o._initted && o._ts) && o.globalTime(0) <= e && o.globalTime(o.totalDuration()) > e : !e || o.isActive()) && i.push(o) : (n = o.getTweensOf(r, e)).length && i.push.apply(i, n), o = o._next;
                    return i
                }, n.tweenTo = function(t, e) {
                    e = e || {};
                    var n = this,
                        i = At(n, t),
                        r = e,
                        o = r.startAt,
                        a = r.onStart,
                        s = r.onStartParams,
                        c = je.to(n, lt(e, {
                            ease: "none",
                            lazy: !1,
                            time: i,
                            overwrite: "auto",
                            duration: e.duration || Math.abs((i - (o && "time" in o ? o.time : n._time)) / n.timeScale()) || 1e-8,
                            onStart: function() {
                                n.pause();
                                var t = e.duration || Math.abs((i - n._time) / n.timeScale());
                                c._dur !== t && Ct(c, t, 0, 1).render(c._time, !0, !0), a && a.apply(c, s || [])
                            }
                        }));
                    return c
                }, n.tweenFromTo = function(t, e, n) {
                    return this.tweenTo(e, lt({
                        startAt: {
                            time: At(this, t)
                        }
                    }, n))
                }, n.recent = function() {
                    return this._recent
                }, n.nextLabel = function(t) {
                    return void 0 === t && (t = this._time), Gt(this, At(this, t))
                }, n.previousLabel = function(t) {
                    return void 0 === t && (t = this._time), Gt(this, At(this, t), 1)
                }, n.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + 1e-8)
                }, n.shiftChildren = function(t, e, n) {
                    void 0 === n && (n = 0);
                    for (var i, r = this._first, o = this.labels; r;) r._start >= n && (r._start += t, r._end += t), r = r._next;
                    if (e)
                        for (i in o) o[i] >= n && (o[i] += t);
                    return yt(this)
                }, n.invalidate = function() {
                    var e = this._first;
                    for (this._lock = 0; e;) e.invalidate(), e = e._next;
                    return t.prototype.invalidate.call(this)
                }, n.clear = function(t) {
                    void 0 === t && (t = !0);
                    for (var e, n = this._first; n;) e = n._next, this.remove(n), n = e;
                    return this._time = this._tTime = this._pTime = 0, t && (this.labels = {}), yt(this)
                }, n.totalDuration = function(t) {
                    var e, n, i, r = 0,
                        a = this,
                        s = a._last,
                        c = m;
                    if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));
                    if (a._dirty) {
                        for (i = a.parent; s;) e = s._prev, s._dirty && s.totalDuration(), (n = s._start) > c && a._sort && s._ts && !a._lock ? (a._lock = 1, St(a, s, n - s._delay, 1)._lock = 0) : c = n, n < 0 && s._ts && (r -= n, (!i && !a._dp || i && i.smoothChildTiming) && (a._start += n / a._ts, a._time -= n, a._tTime -= n), a.shiftChildren(-n, !1, -Infinity), c = 0), s._end > r && s._ts && (r = s._end), s = e;
                        Ct(a, a === o && a._time > r ? a._time : r, 1, 1), a._dirty = 0
                    }
                    return a._tDur
                }, e.updateRoot = function(t) {
                    if (o._ts && (st(o, xt(t, o)), l = ae.frame), ae.frame >= Q) {
                        Q += d.autoSleep || 120;
                        var e = o._first;
                        if ((!e || !e._ts) && d.autoSleep && ae._listeners.length < 2) {
                            for (; e && !e._ts;) e = e._next;
                            e || ae.sleep()
                        }
                    }
                }, e
            }(_e);
            lt(we.prototype, {
                _lock: 0,
                _hasPause: 0,
                _forcing: 0
            });
            var xe, ke = function(t, e, n, i, r, o, a) {
                    var s, c, u, l, h, f, d, p, m = new Ve(this._pt, t, e, 0, 1, qe, null, r),
                        g = 0,
                        v = 0;
                    for (m.b = n, m.e = i, n += "", (d = ~(i += "").indexOf("random(")) && (i = Yt(i)), o && (o(p = [n, i], t, e), n = p[0], i = p[1]), c = n.match(R) || []; s = R.exec(i);) l = s[0], h = i.substring(g, s.index), u ? u = (u + 1) % 5 : "rgba(" === h.substr(-5) && (u = 1), l !== c[v++] && (f = parseFloat(c[v - 1]) || 0, m._pt = {
                        _next: m._pt,
                        p: h || 1 === v ? h : ",",
                        s: f,
                        c: "=" === l.charAt(1) ? parseFloat(l.substr(2)) * ("-" === l.charAt(0) ? -1 : 1) : parseFloat(l) - f,
                        m: u && u < 4 ? Math.round : 0
                    }, g = R.lastIndex);
                    return m.c = g < i.length ? i.substring(g, i.length) : "", m.fp = a, (D.test(i) || d) && (m.e = 0), this._pt = m, m
                },
                Oe = function(t, e, n, i, r, o, a, s, c) {
                    k(i) && (i = i(r || 0, t, o));
                    var u, l = t[e],
                        h = "get" !== n ? n : k(l) ? c ? t[e.indexOf("set") || !k(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](c) : t[e]() : l,
                        f = k(l) ? c ? Ie : Ae : Pe;
                    if (x(i) && (~i.indexOf("random(") && (i = Yt(i)), "=" === i.charAt(1) && (i = parseFloat(h) + parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) + (Rt(h) || 0))), h !== i) return isNaN(h * i) ? (!l && !(e in t) && H(e, i), ke.call(this, t, e, h, i, f, s || d.stringFilter, c)) : (u = new Ve(this._pt, t, e, +h || 0, i - (h || 0), "boolean" === typeof l ? Le : De, 0, f), c && (u.fp = c), a && u.modifier(a, this, t), this._pt = u)
                },
                Te = function(t, e, n, i, r, o) {
                    var a, s, c, u;
                    if (G[t] && !1 !== (a = new G[t]).init(r, a.rawVars ? e[t] : function(t, e, n, i, r) {
                            if (k(t) && (t = Ee(t, r, e, n, i)), !S(t) || t.style && t.nodeType || P(t) || j(t)) return x(t) ? Ee(t, r, e, n, i) : t;
                            var o, a = {};
                            for (o in t) a[o] = Ee(t[o], r, e, n, i);
                            return a
                        }(e[t], i, r, o, n), n, i, o) && (n._pt = s = new Ve(n._pt, r, t, 0, 1, a.render, a, 0, a.priority), n !== h))
                        for (c = n._ptLookup[n._targets.indexOf(r)], u = a._props.length; u--;) c[a._props[u]] = s;
                    return a
                },
                Se = function t(e, n) {
                    var i, r, a, s, c, u, l, h, f, d, m, g, v, y = e.vars,
                        b = y.ease,
                        _ = y.startAt,
                        w = y.immediateRender,
                        x = y.lazy,
                        k = y.onUpdate,
                        O = y.onUpdateParams,
                        T = y.callbackScope,
                        S = y.runBackwards,
                        M = y.yoyoEase,
                        C = y.keyframes,
                        j = y.autoRevert,
                        P = e._dur,
                        A = e._startAt,
                        I = e._targets,
                        N = e.parent,
                        R = N && "nested" === N.data ? N.parent._targets : I,
                        D = "auto" === e._overwrite,
                        L = e.timeline;
                    if (L && (!C || !b) && (b = "none"), e._ease = pe(b, p.ease), e._yEase = M ? fe(pe(!0 === M ? b : M, p.ease)) : 0, M && e._yoyo && !e._repeat && (M = e._yEase, e._yEase = e._ease, e._ease = M), !L) {
                        if (g = (h = I[0] ? tt(I[0]).harness : 0) && y[h.prop], i = pt(y, W), A && A.render(-1, !0).kill(), _) {
                            if (vt(e._startAt = je.set(I, lt({
                                    data: "isStart",
                                    overwrite: !1,
                                    parent: N,
                                    immediateRender: !0,
                                    lazy: E(x),
                                    startAt: null,
                                    delay: 0,
                                    onUpdate: k,
                                    onUpdateParams: O,
                                    callbackScope: T,
                                    stagger: 0
                                }, _))), w)
                                if (n > 0) j || (e._startAt = 0);
                                else if (P && !(n < 0 && A)) return void(n && (e._zTime = n))
                        } else if (S && P)
                            if (A) !j && (e._startAt = 0);
                            else if (n && (w = !1), a = lt({
                                overwrite: !1,
                                data: "isFromStart",
                                lazy: w && E(x),
                                immediateRender: w,
                                stagger: 0,
                                parent: N
                            }, i), g && (a[h.prop] = g), vt(e._startAt = je.set(I, a)), w) {
                            if (!n) return
                        } else t(e._startAt, 1e-8);
                        for (e._pt = 0, x = P && E(x) || x && !P, r = 0; r < I.length; r++) {
                            if (l = (c = I[r])._gsap || $(I)[r]._gsap, e._ptLookup[r] = d = {}, X[l.id] && Y.length && at(), m = R === I ? r : R.indexOf(c), h && !1 !== (f = new h).init(c, g || i, e, m, R) && (e._pt = s = new Ve(e._pt, c, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach((function(t) {
                                    d[t] = s
                                })), f.priority && (u = 1)), !h || g)
                                for (a in i) G[a] && (f = Te(a, i, e, m, c, R)) ? f.priority && (u = 1) : d[a] = s = Oe.call(e, c, a, "get", i[a], m, R, 0, y.stringFilter);
                            e._op && e._op[r] && e.kill(c, e._op[r]), D && e._pt && (xe = e, o.killTweensOf(c, d, e.globalTime(0)), v = !e.parent, xe = 0), e._pt && x && (X[l.id] = 1)
                        }
                        u && Ue(e), e._onInit && e._onInit(e)
                    }
                    e._from = !L && !!y.runBackwards, e._onUpdate = k, e._initted = (!e._op || e._pt) && !v
                },
                Ee = function(t, e, n, i, r) {
                    return k(t) ? t.call(e, n, i, r) : x(t) && ~t.indexOf("random(") ? Yt(t) : t
                },
                Me = Z + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
                Ce = (Me + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
                je = function(t) {
                    function e(e, n, r, a) {
                        var s;
                        "number" === typeof n && (r.duration = n, n = r, r = null);
                        var c, u, l, h, f, p, m, g, v = (s = t.call(this, a ? n : mt(n), r) || this).vars,
                            y = v.duration,
                            b = v.delay,
                            _ = v.immediateRender,
                            w = v.stagger,
                            x = v.overwrite,
                            k = v.keyframes,
                            T = v.defaults,
                            M = v.scrollTrigger,
                            A = v.yoyoEase,
                            I = s.parent,
                            N = (P(e) || j(e) ? O(e[0]) : "length" in n) ? [e] : zt(e);
                        if (s._targets = N.length ? $(N) : B("GSAP target " + e + " not found. https://greensock.com", !d.nullTargetWarn) || [], s._ptLookup = [], s._overwrite = x, k || w || C(y) || C(b)) {
                            if (n = s.vars, (c = s.timeline = new we({
                                    data: "nested",
                                    defaults: T || {}
                                })).kill(), c.parent = i(s), k) lt(c.vars.defaults, {
                                ease: "none"
                            }), k.forEach((function(t) {
                                return c.to(N, t, ">")
                            }));
                            else {
                                if (h = N.length, m = w ? Ht(w) : V, S(w))
                                    for (f in w) ~Me.indexOf(f) && (g || (g = {}), g[f] = w[f]);
                                for (u = 0; u < h; u++) {
                                    for (f in l = {}, n) Ce.indexOf(f) < 0 && (l[f] = n[f]);
                                    l.stagger = 0, A && (l.yoyoEase = A), g && ft(l, g), p = N[u], l.duration = +Ee(y, i(s), u, p, N), l.delay = (+Ee(b, i(s), u, p, N) || 0) - s._delay, !w && 1 === h && l.delay && (s._delay = b = l.delay, s._start += b, l.delay = 0), c.to(p, l, m(u, p, N))
                                }
                                c.duration() ? y = b = 0 : s.timeline = 0
                            }
                            y || s.duration(y = c.duration())
                        } else s.timeline = 0;
                        return !0 === x && (xe = i(s), o.killTweensOf(N), xe = 0), I && Tt(I, i(s)), (_ || !y && !k && s._start === it(I._time) && E(_) && function t(e) {
                            return !e || e._ts && t(e.parent)
                        }(i(s)) && "nested" !== I.data) && (s._tTime = -1e-8, s.render(Math.max(0, -b))), M && Et(i(s), M), s
                    }
                    r(e, t);
                    var n = e.prototype;
                    return n.render = function(t, e, n) {
                        var i, r, o, a, s, c, u, l, h, f = this._time,
                            d = this._tDur,
                            p = this._dur,
                            m = t > d - 1e-8 && t >= 0 ? d : t < 1e-8 ? 0 : t;
                        if (p) {
                            if (m !== this._tTime || !t || n || this._startAt && this._zTime < 0 !== t < 0) {
                                if (i = m, l = this.timeline, this._repeat) {
                                    if (a = p + this._rDelay, i = it(m % a), m === d ? (o = this._repeat, i = p) : ((o = ~~(m / a)) && o === m / a && (i = p, o--), i > p && (i = p)), (c = this._yoyo && 1 & o) && (h = this._yEase, i = p - i), s = wt(this._tTime, a), i === f && !n && this._initted) return this;
                                    o !== s && (l && this._yEase && de(l, c), !this.vars.repeatRefresh || c || this._lock || (this._lock = n = 1, this.render(it(a * o), !0).invalidate()._lock = 0))
                                }
                                if (!this._initted) {
                                    if (Mt(this, t < 0 ? t : i, n, e)) return this._tTime = 0, this;
                                    if (p !== this._dur) return this.render(t, e, n)
                                }
                                for (this._tTime = m, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = u = (h || this._ease)(i / p), this._from && (this.ratio = u = 1 - u), i && !f && !e && Jt(this, "onStart"), r = this._pt; r;) r.r(u, r.d), r = r._next;
                                l && l.render(t < 0 ? t : !i && c ? -1e-8 : l._dur * u, e, n) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, n), Jt(this, "onUpdate")), this._repeat && o !== s && this.vars.onRepeat && !e && this.parent && Jt(this, "onRepeat"), m !== this._tDur && m || this._tTime !== m || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), (t || !p) && (m === this._tDur && this._ts > 0 || !m && this._ts < 0) && vt(this, 1), e || t < 0 && !f || !m && !f || (Jt(this, m === d ? "onComplete" : "onReverseComplete", !0), this._prom && !(m < d && this.timeScale() > 0) && this._prom()))
                            }
                        } else ! function(t, e, n, i) {
                            var r, o, a = t.ratio,
                                s = e < 0 || !e && a && !t._start && t._zTime > 1e-8 && !t._dp._lock || (t._ts < 0 || t._dp._ts < 0) && "isFromStart" !== t.data && "isStart" !== t.data ? 0 : 1,
                                c = t._rDelay,
                                u = 0;
                            if (c && t._repeat && (u = Nt(0, t._tDur, e), wt(u, c) !== (o = wt(t._tTime, c)) && (a = 1 - s, t.vars.repeatRefresh && t._initted && t.invalidate())), s !== a || i || 1e-8 === t._zTime || !e && t._zTime) {
                                if (!t._initted && Mt(t, e, i, n)) return;
                                for (o = t._zTime, t._zTime = e || (n ? 1e-8 : 0), n || (n = e && !o), t.ratio = s, t._from && (s = 1 - s), t._time = 0, t._tTime = u, n || Jt(t, "onStart"), r = t._pt; r;) r.r(s, r.d), r = r._next;
                                t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !n && Jt(t, "onUpdate"), u && t._repeat && !n && t.parent && Jt(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === s && (s && vt(t, 1), n || (Jt(t, s ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                            } else t._zTime || (t._zTime = e)
                        }(this, t, e, n);
                        return this
                    }, n.targets = function() {
                        return this._targets
                    }, n.invalidate = function() {
                        return this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this)
                    }, n.kill = function(t, e) {
                        if (void 0 === e && (e = "all"), !t && (!e || "all" === e) && (this._lazy = 0, this.parent)) return Qt(this);
                        if (this.timeline) {
                            var n = this.timeline.totalDuration();
                            return this.timeline.killTweensOf(t, e, xe && !0 !== xe.vars.overwrite)._first || Qt(this), this.parent && n !== this.timeline.totalDuration() && Ct(this, this._dur * this.timeline._tDur / n, 0, 1), this
                        }
                        var i, r, o, a, s, c, u, l = this._targets,
                            h = t ? zt(t) : l,
                            f = this._ptLookup,
                            d = this._pt;
                        if ((!e || "all" === e) && function(t, e) {
                                for (var n = t.length, i = n === e.length; i && n-- && t[n] === e[n];);
                                return n < 0
                            }(l, h)) return "all" === e && (this._pt = 0), Qt(this);
                        for (i = this._op = this._op || [], "all" !== e && (x(e) && (s = {}, nt(e, (function(t) {
                                return s[t] = 1
                            })), e = s), e = function(t, e) {
                                var n, i, r, o, a = t[0] ? tt(t[0]).harness : 0,
                                    s = a && a.aliases;
                                if (!s) return e;
                                for (i in n = ft({}, e), s)
                                    if (i in n)
                                        for (r = (o = s[i].split(",")).length; r--;) n[o[r]] = n[i];
                                return n
                            }(l, e)), u = l.length; u--;)
                            if (~h.indexOf(l[u]))
                                for (s in r = f[u], "all" === e ? (i[u] = e, a = r, o = {}) : (o = i[u] = i[u] || {}, a = e), a)(c = r && r[s]) && ("kill" in c.d && !0 !== c.d.kill(s) || gt(this, c, "_pt"), delete r[s]), "all" !== o && (o[s] = 1);
                        return this._initted && !this._pt && d && Qt(this), this
                    }, e.to = function(t, n) {
                        return new e(t, n, arguments[2])
                    }, e.from = function(t, n) {
                        return new e(t, ot(arguments, 1))
                    }, e.delayedCall = function(t, n, i, r) {
                        return new e(n, 0, {
                            immediateRender: !1,
                            lazy: !1,
                            overwrite: !1,
                            delay: t,
                            onComplete: n,
                            onReverseComplete: n,
                            onCompleteParams: i,
                            onReverseCompleteParams: i,
                            callbackScope: r
                        })
                    }, e.fromTo = function(t, n, i) {
                        return new e(t, ot(arguments, 2))
                    }, e.set = function(t, n) {
                        return n.duration = 0, n.repeatDelay || (n.repeat = 0), new e(t, n)
                    }, e.killTweensOf = function(t, e, n) {
                        return o.killTweensOf(t, e, n)
                    }, e
                }(_e);
            lt(je.prototype, {
                _targets: [],
                _lazy: 0,
                _startAt: 0,
                _op: 0,
                _onInit: 0
            }), nt("staggerTo,staggerFrom,staggerFromTo", (function(t) {
                je[t] = function() {
                    var e = new we,
                        n = Dt.call(arguments, 0);
                    return n.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, n)
                }
            }));
            var Pe = function(t, e, n) {
                    return t[e] = n
                },
                Ae = function(t, e, n) {
                    return t[e](n)
                },
                Ie = function(t, e, n, i) {
                    return t[e](i.fp, n)
                },
                Ne = function(t, e, n) {
                    return t.setAttribute(e, n)
                },
                Re = function(t, e) {
                    return k(t[e]) ? Ae : T(t[e]) && t.setAttribute ? Ne : Pe
                },
                De = function(t, e) {
                    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e)
                },
                Le = function(t, e) {
                    return e.set(e.t, e.p, !!(e.s + e.c * t), e)
                },
                qe = function(t, e) {
                    var n = e._pt,
                        i = "";
                    if (!t && e.b) i = e.b;
                    else if (1 === t && e.e) i = e.e;
                    else {
                        for (; n;) i = n.p + (n.m ? n.m(n.s + n.c * t) : Math.round(1e4 * (n.s + n.c * t)) / 1e4) + i, n = n._next;
                        i += e.c
                    }
                    e.set(e.t, e.p, i, e)
                },
                ze = function(t, e) {
                    for (var n = e._pt; n;) n.r(t, n.d), n = n._next
                },
                Fe = function(t, e, n, i) {
                    for (var r, o = this._pt; o;) r = o._next, o.p === i && o.modifier(t, e, n), o = r
                },
                He = function(t) {
                    for (var e, n, i = this._pt; i;) n = i._next, i.p === t && !i.op || i.op === t ? gt(this, i, "_pt") : i.dep || (e = 1), i = n;
                    return !e
                },
                Be = function(t, e, n, i) {
                    i.mSet(t, e, i.m.call(i.tween, n, i.mt), i)
                },
                Ue = function(t) {
                    for (var e, n, i, r, o = t._pt; o;) {
                        for (e = o._next, n = i; n && n.pr > o.pr;) n = n._next;
                        (o._prev = n ? n._prev : r) ? o._prev._next = o: i = o, (o._next = n) ? n._prev = o : r = o, o = e
                    }
                    t._pt = i
                },
                Ve = function() {
                    function t(t, e, n, i, r, o, a, s, c) {
                        this.t = e, this.s = i, this.c = r, this.p = n, this.r = o || De, this.d = a || this, this.set = s || Pe, this.pr = c || 0, this._next = t, t && (t._prev = this)
                    }
                    return t.prototype.modifier = function(t, e, n) {
                        this.mSet = this.mSet || this.set, this.set = Be, this.m = t, this.mt = n, this.tween = e
                    }, t
                }();
            nt(Z + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function(t) {
                return W[t] = 1
            })), q.TweenMax = q.TweenLite = je, q.TimelineLite = q.TimelineMax = we, o = new we({
                sortChildren: !1,
                defaults: p,
                autoRemoveChildren: !0,
                id: "root",
                smoothChildTiming: !0
            }), d.stringFilter = oe;
            var We = {
                registerPlugin: function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    e.forEach((function(t) {
                        return Kt(t)
                    }))
                },
                timeline: function(t) {
                    return new we(t)
                },
                getTweensOf: function(t, e) {
                    return o.getTweensOf(t, e)
                },
                getProperty: function(t, e, n, i) {
                    x(t) && (t = zt(t)[0]);
                    var r = tt(t || {}).get,
                        o = n ? ut : ct;
                    return "native" === n && (n = ""), t ? e ? o((G[e] && G[e].get || r)(t, e, n, i)) : function(e, n, i) {
                        return o((G[e] && G[e].get || r)(t, e, n, i))
                    } : t
                },
                quickSetter: function(t, e, n) {
                    if ((t = zt(t)).length > 1) {
                        var i = t.map((function(t) {
                                return Ge.quickSetter(t, e, n)
                            })),
                            r = i.length;
                        return function(t) {
                            for (var e = r; e--;) i[e](t)
                        }
                    }
                    t = t[0] || {};
                    var o = G[e],
                        a = tt(t),
                        s = a.harness && (a.harness.aliases || {})[e] || e,
                        c = o ? function(e) {
                            var i = new o;
                            h._pt = 0, i.init(t, n ? e + n : e, h, 0, [t]), i.render(1, i), h._pt && ze(1, h)
                        } : a.set(t, s);
                    return o ? c : function(e) {
                        return c(t, s, n ? e + n : e, a, 1)
                    }
                },
                isTweening: function(t) {
                    return o.getTweensOf(t, !0).length > 0
                },
                defaults: function(t) {
                    return t && t.ease && (t.ease = pe(t.ease, p.ease)), dt(p, t || {})
                },
                config: function(t) {
                    return dt(d, t || {})
                },
                registerEffect: function(t) {
                    var e = t.name,
                        n = t.effect,
                        i = t.plugins,
                        r = t.defaults,
                        o = t.extendTimeline;
                    (i || "").split(",").forEach((function(t) {
                        return t && !G[t] && !q[t] && B(e + " effect requires " + t + " plugin.")
                    })), J[e] = function(t, e, i) {
                        return n(zt(t), lt(e || {}, r), i)
                    }, o && (we.prototype[e] = function(t, n, i) {
                        return this.add(J[e](t, S(n) ? n : (i = n) && {}, this), i)
                    })
                },
                registerEase: function(t, e) {
                    ce[t] = pe(e)
                },
                parseEase: function(t, e) {
                    return arguments.length ? pe(t, e) : ce
                },
                getById: function(t) {
                    return o.getById(t)
                },
                exportRoot: function(t, e) {
                    void 0 === t && (t = {});
                    var n, i, r = new we(t);
                    for (r.smoothChildTiming = E(t.smoothChildTiming), o.remove(r), r._dp = 0, r._time = r._tTime = o._time, n = o._first; n;) i = n._next, !e && !n._dur && n instanceof je && n.vars.onComplete === n._targets[0] || St(r, n, n._start - n._delay), n = i;
                    return St(o, r, 0), r
                },
                utils: {
                    wrap: function t(e, n, i) {
                        var r = n - e;
                        return P(e) ? Wt(e, t(0, e.length), n) : It(i, (function(t) {
                            return (r + (t - e) % r) % r + e
                        }))
                    },
                    wrapYoyo: function t(e, n, i) {
                        var r = n - e,
                            o = 2 * r;
                        return P(e) ? Wt(e, t(0, e.length - 1), n) : It(i, (function(t) {
                            return e + ((t = (o + (t - e) % o) % o || 0) > r ? o - t : t)
                        }))
                    },
                    distribute: Ht,
                    random: Vt,
                    snap: Ut,
                    normalize: function(t, e, n) {
                        return Xt(t, e, 0, 1, n)
                    },
                    getUnit: Rt,
                    clamp: function(t, e, n) {
                        return It(n, (function(n) {
                            return Nt(t, e, n)
                        }))
                    },
                    splitColor: te,
                    toArray: zt,
                    mapRange: Xt,
                    pipe: function() {
                        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        return function(t) {
                            return e.reduce((function(t, e) {
                                return e(t)
                            }), t)
                        }
                    },
                    unitize: function(t, e) {
                        return function(n) {
                            return t(parseFloat(n)) + (e || Rt(n))
                        }
                    },
                    interpolate: function t(e, n, i, r) {
                        var o = isNaN(e + n) ? 0 : function(t) {
                            return (1 - t) * e + t * n
                        };
                        if (!o) {
                            var a, s, c, u, l, h = x(e),
                                f = {};
                            if (!0 === i && (r = 1) && (i = null), h) e = {
                                p: e
                            }, n = {
                                p: n
                            };
                            else if (P(e) && !P(n)) {
                                for (c = [], u = e.length, l = u - 2, s = 1; s < u; s++) c.push(t(e[s - 1], e[s]));
                                u--, o = function(t) {
                                    t *= u;
                                    var e = Math.min(l, ~~t);
                                    return c[e](t - e)
                                }, i = n
                            } else r || (e = ft(P(e) ? [] : {}, e));
                            if (!c) {
                                for (a in n) Oe.call(f, e, a, "get", n[a]);
                                o = function(t) {
                                    return ze(t, f) || (h ? e.p : e)
                                }
                            }
                        }
                        return It(i, o)
                    },
                    shuffle: Ft
                },
                install: F,
                effects: J,
                ticker: ae,
                updateRoot: we.updateRoot,
                plugins: G,
                globalTimeline: o,
                core: {
                    PropTween: Ve,
                    globals: U,
                    Tween: je,
                    Timeline: we,
                    Animation: _e,
                    getCache: tt,
                    _removeLinkedListItem: gt
                }
            };
            nt("to,from,fromTo,delayedCall,set,killTweensOf", (function(t) {
                return We[t] = je[t]
            })), ae.add(we.updateRoot), h = We.to({}, {
                duration: 0
            });
            var Ye = function(t, e) {
                    for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e;) n = n._next;
                    return n
                },
                Xe = function(t, e) {
                    return {
                        name: t,
                        rawVars: 1,
                        init: function(t, n, i) {
                            i._onInit = function(t) {
                                var i, r;
                                if (x(n) && (i = {}, nt(n, (function(t) {
                                        return i[t] = 1
                                    })), n = i), e) {
                                    for (r in i = {}, n) i[r] = e(n[r]);
                                    n = i
                                }! function(t, e) {
                                    var n, i, r, o = t._targets;
                                    for (n in e)
                                        for (i = o.length; i--;)(r = t._ptLookup[i][n]) && (r = r.d) && (r._pt && (r = Ye(r, n)), r && r.modifier && r.modifier(e[n], t, o[i], n))
                                }(t, n)
                            }
                        }
                    }
                },
                Ge = We.registerPlugin({
                    name: "attr",
                    init: function(t, e, n, i, r) {
                        var o, a;
                        for (o in e)(a = this.add(t, "setAttribute", (t.getAttribute(o) || 0) + "", e[o], i, r, 0, 0, o)) && (a.op = o), this._props.push(o)
                    }
                }, {
                    name: "endArray",
                    init: function(t, e) {
                        for (var n = e.length; n--;) this.add(t, n, t[n] || 0, e[n])
                    }
                }, Xe("roundProps", Bt), Xe("modifiers"), Xe("snap", Ut)) || We;
            je.version = we.version = Ge.version = "3.5.1", u = 1, M() && se();
            ce.Power0, ce.Power1, ce.Power2, ce.Power3, ce.Power4, ce.Linear, ce.Quad, ce.Cubic, ce.Quart, ce.Quint, ce.Strong, ce.Elastic, ce.Back, ce.SteppedEase, ce.Bounce, ce.Sine, ce.Expo, ce.Circ;
            var Je, Qe, Ke, Ze, $e, tn, en, nn, rn = {},
                on = 180 / Math.PI,
                an = Math.PI / 180,
                sn = Math.atan2,
                cn = /([A-Z])/g,
                un = /(?:left|right|width|margin|padding|x)/i,
                ln = /[\s,\(]\S/,
                hn = {
                    autoAlpha: "opacity,visibility",
                    scale: "scaleX,scaleY",
                    alpha: "opacity"
                },
                fn = function(t, e) {
                    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
                },
                dn = function(t, e) {
                    return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
                },
                pn = function(t, e) {
                    return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
                },
                mn = function(t, e) {
                    var n = e.s + e.c * t;
                    e.set(e.t, e.p, ~~(n + (n < 0 ? -.5 : .5)) + e.u, e)
                },
                gn = function(t, e) {
                    return e.set(e.t, e.p, t ? e.e : e.b, e)
                },
                vn = function(t, e) {
                    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
                },
                yn = function(t, e, n) {
                    return t.style[e] = n
                },
                bn = function(t, e, n) {
                    return t.style.setProperty(e, n)
                },
                _n = function(t, e, n) {
                    return t._gsap[e] = n
                },
                wn = function(t, e, n) {
                    return t._gsap.scaleX = t._gsap.scaleY = n
                },
                xn = function(t, e, n, i, r) {
                    var o = t._gsap;
                    o.scaleX = o.scaleY = n, o.renderTransform(r, o)
                },
                kn = function(t, e, n, i, r) {
                    var o = t._gsap;
                    o[e] = n, o.renderTransform(r, o)
                },
                On = "transform",
                Tn = On + "Origin",
                Sn = function(t, e) {
                    var n = Qe.createElementNS ? Qe.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Qe.createElement(t);
                    return n.style ? n : Qe.createElement(t)
                },
                En = function t(e, n, i) {
                    var r = getComputedStyle(e);
                    return r[n] || r.getPropertyValue(n.replace(cn, "-$1").toLowerCase()) || r.getPropertyValue(n) || !i && t(e, Cn(n) || n, 1) || ""
                },
                Mn = "O,Moz,ms,Ms,Webkit".split(","),
                Cn = function(t, e, n) {
                    var i = (e || $e).style,
                        r = 5;
                    if (t in i && !n) return t;
                    for (t = t.charAt(0).toUpperCase() + t.substr(1); r-- && !(Mn[r] + t in i););
                    return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? Mn[r] : "") + t
                },
                jn = function() {
                    "undefined" !== typeof window && window.document && (Je = window, Qe = Je.document, Ke = Qe.documentElement, $e = Sn("div") || {
                        style: {}
                    }, tn = Sn("div"), On = Cn(On), Tn = On + "Origin", $e.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", nn = !!Cn("perspective"), Ze = 1)
                },
                Pn = function t(e) {
                    var n, i = Sn("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                        r = this.parentNode,
                        o = this.nextSibling,
                        a = this.style.cssText;
                    if (Ke.appendChild(i), i.appendChild(this), this.style.display = "block", e) try {
                        n = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
                    } catch (s) {} else this._gsapBBox && (n = this._gsapBBox());
                    return r && (o ? r.insertBefore(this, o) : r.appendChild(this)), Ke.removeChild(i), this.style.cssText = a, n
                },
                An = function(t, e) {
                    for (var n = e.length; n--;)
                        if (t.hasAttribute(e[n])) return t.getAttribute(e[n])
                },
                In = function(t) {
                    var e;
                    try {
                        e = t.getBBox()
                    } catch (n) {
                        e = Pn.call(t, !0)
                    }
                    return e && (e.width || e.height) || t.getBBox === Pn || (e = Pn.call(t, !0)), !e || e.width || e.x || e.y ? e : {
                        x: +An(t, ["x", "cx", "x1"]) || 0,
                        y: +An(t, ["y", "cy", "y1"]) || 0,
                        width: 0,
                        height: 0
                    }
                },
                Nn = function(t) {
                    return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !In(t))
                },
                Rn = function(t, e) {
                    if (e) {
                        var n = t.style;
                        e in rn && e !== Tn && (e = On), n.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), n.removeProperty(e.replace(cn, "-$1").toLowerCase())) : n.removeAttribute(e)
                    }
                },
                Dn = function(t, e, n, i, r, o) {
                    var a = new Ve(t._pt, e, n, 0, 1, o ? vn : gn);
                    return t._pt = a, a.b = i, a.e = r, t._props.push(n), a
                },
                Ln = {
                    deg: 1,
                    rad: 1,
                    turn: 1
                },
                qn = function t(e, n, i, r) {
                    var o, a, s, c, u = parseFloat(i) || 0,
                        l = (i + "").trim().substr((u + "").length) || "px",
                        h = $e.style,
                        f = un.test(n),
                        d = "svg" === e.tagName.toLowerCase(),
                        p = (d ? "client" : "offset") + (f ? "Width" : "Height"),
                        m = "px" === r,
                        g = "%" === r;
                    return r === l || !u || Ln[r] || Ln[l] ? u : ("px" !== l && !m && (u = t(e, n, i, "px")), c = e.getCTM && Nn(e), g && (rn[n] || ~n.indexOf("adius")) ? it(u / (c ? e.getBBox()[f ? "width" : "height"] : e[p]) * 100) : (h[f ? "width" : "height"] = 100 + (m ? l : r), a = ~n.indexOf("adius") || "em" === r && e.appendChild && !d ? e : e.parentNode, c && (a = (e.ownerSVGElement || {}).parentNode), a && a !== Qe && a.appendChild || (a = Qe.body), (s = a._gsap) && g && s.width && f && s.time === ae.time ? it(u / s.width * 100) : ((g || "%" === l) && (h.position = En(e, "position")), a === e && (h.position = "static"), a.appendChild($e), o = $e[p], a.removeChild($e), h.position = "absolute", f && g && ((s = tt(a)).time = ae.time, s.width = a[p]), it(m ? o * u / 100 : o && u ? 100 / o * u : 0))))
                },
                zn = function(t, e, n, i) {
                    var r;
                    return Ze || jn(), e in hn && "transform" !== e && ~(e = hn[e]).indexOf(",") && (e = e.split(",")[0]), rn[e] && "transform" !== e ? (r = Kn(t, i), r = "transformOrigin" !== e ? r[e] : Zn(En(t, Tn)) + " " + r.zOrigin + "px") : (!(r = t.style[e]) || "auto" === r || i || ~(r + "").indexOf("calc(")) && (r = Vn[e] && Vn[e](t, e, n) || En(t, e) || et(t, e) || ("opacity" === e ? 1 : 0)), n && !~(r + "").indexOf(" ") ? qn(t, e, r, n) + n : r
                },
                Fn = function(t, e, n, i) {
                    if (!n || "none" === n) {
                        var r = Cn(e, t, 1),
                            o = r && En(t, r, 1);
                        o && o !== n ? (e = r, n = o) : "borderColor" === e && (n = En(t, "borderTopColor"))
                    }
                    var a, s, c, u, l, h, f, p, m, g, v, y, b = new Ve(this._pt, t.style, e, 0, 1, qe),
                        _ = 0,
                        w = 0;
                    if (b.b = n, b.e = i, n += "", "auto" === (i += "") && (t.style[e] = i, i = En(t, e) || i, t.style[e] = n), oe(a = [n, i]), i = a[1], c = (n = a[0]).match(N) || [], (i.match(N) || []).length) {
                        for (; s = N.exec(i);) f = s[0], m = i.substring(_, s.index), l ? l = (l + 1) % 5 : "rgba(" !== m.substr(-5) && "hsla(" !== m.substr(-5) || (l = 1), f !== (h = c[w++] || "") && (u = parseFloat(h) || 0, v = h.substr((u + "").length), (y = "=" === f.charAt(1) ? +(f.charAt(0) + "1") : 0) && (f = f.substr(2)), p = parseFloat(f), g = f.substr((p + "").length), _ = N.lastIndex - g.length, g || (g = g || d.units[e] || v, _ === i.length && (i += g, b.e += g)), v !== g && (u = qn(t, e, h, g) || 0), b._pt = {
                            _next: b._pt,
                            p: m || 1 === w ? m : ",",
                            s: u,
                            c: y ? y * p : p - u,
                            m: l && l < 4 ? Math.round : 0
                        });
                        b.c = _ < i.length ? i.substring(_, i.length) : ""
                    } else b.r = "display" === e && "none" === i ? vn : gn;
                    return D.test(i) && (b.e = 0), this._pt = b, b
                },
                Hn = {
                    top: "0%",
                    bottom: "100%",
                    left: "0%",
                    right: "100%",
                    center: "50%"
                },
                Bn = function(t) {
                    var e = t.split(" "),
                        n = e[0],
                        i = e[1] || "50%";
                    return "top" !== n && "bottom" !== n && "left" !== i && "right" !== i || (t = n, n = i, i = t), e[0] = Hn[n] || n, e[1] = Hn[i] || i, e.join(" ")
                },
                Un = function(t, e) {
                    if (e.tween && e.tween._time === e.tween._dur) {
                        var n, i, r, o = e.t,
                            a = o.style,
                            s = e.u,
                            c = o._gsap;
                        if ("all" === s || !0 === s) a.cssText = "", i = 1;
                        else
                            for (r = (s = s.split(",")).length; --r > -1;) n = s[r], rn[n] && (i = 1, n = "transformOrigin" === n ? Tn : On), Rn(o, n);
                        i && (Rn(o, On), c && (c.svg && o.removeAttribute("transform"), Kn(o, 1), c.uncache = 1))
                    }
                },
                Vn = {
                    clearProps: function(t, e, n, i, r) {
                        if ("isFromStart" !== r.data) {
                            var o = t._pt = new Ve(t._pt, e, n, 0, 0, Un);
                            return o.u = i, o.pr = -10, o.tween = r, t._props.push(n), 1
                        }
                    }
                },
                Wn = [1, 0, 0, 1, 0, 0],
                Yn = {},
                Xn = function(t) {
                    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
                },
                Gn = function(t) {
                    var e = En(t, On);
                    return Xn(e) ? Wn : e.substr(7).match(I).map(it)
                },
                Jn = function(t, e) {
                    var n, i, r, o, a = t._gsap || tt(t),
                        s = t.style,
                        c = Gn(t);
                    return a.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (c = [(r = t.transform.baseVal.consolidate().matrix).a, r.b, r.c, r.d, r.e, r.f]).join(",") ? Wn : c : (c !== Wn || t.offsetParent || t === Ke || a.svg || (r = s.display, s.display = "block", (n = t.parentNode) && t.offsetParent || (o = 1, i = t.nextSibling, Ke.appendChild(t)), c = Gn(t), r ? s.display = r : Rn(t, "display"), o && (i ? n.insertBefore(t, i) : n ? n.appendChild(t) : Ke.removeChild(t))), e && c.length > 6 ? [c[0], c[1], c[4], c[5], c[12], c[13]] : c)
                },
                Qn = function(t, e, n, i, r, o) {
                    var a, s, c, u = t._gsap,
                        l = r || Jn(t, !0),
                        h = u.xOrigin || 0,
                        f = u.yOrigin || 0,
                        d = u.xOffset || 0,
                        p = u.yOffset || 0,
                        m = l[0],
                        g = l[1],
                        v = l[2],
                        y = l[3],
                        b = l[4],
                        _ = l[5],
                        w = e.split(" "),
                        x = parseFloat(w[0]) || 0,
                        k = parseFloat(w[1]) || 0;
                    n ? l !== Wn && (s = m * y - g * v) && (c = x * (-g / s) + k * (m / s) - (m * _ - g * b) / s, x = x * (y / s) + k * (-v / s) + (v * _ - y * b) / s, k = c) : (x = (a = In(t)).x + (~w[0].indexOf("%") ? x / 100 * a.width : x), k = a.y + (~(w[1] || w[0]).indexOf("%") ? k / 100 * a.height : k)), i || !1 !== i && u.smooth ? (b = x - h, _ = k - f, u.xOffset = d + (b * m + _ * v) - b, u.yOffset = p + (b * g + _ * y) - _) : u.xOffset = u.yOffset = 0, u.xOrigin = x, u.yOrigin = k, u.smooth = !!i, u.origin = e, u.originIsAbsolute = !!n, t.style[Tn] = "0px 0px", o && (Dn(o, u, "xOrigin", h, x), Dn(o, u, "yOrigin", f, k), Dn(o, u, "xOffset", d, u.xOffset), Dn(o, u, "yOffset", p, u.yOffset)), t.setAttribute("data-svg-origin", x + " " + k)
                },
                Kn = function(t, e) {
                    var n = t._gsap || new be(t);
                    if ("x" in n && !e && !n.uncache) return n;
                    var i, r, o, a, s, c, u, l, h, f, p, m, g, v, y, b, _, w, x, k, O, T, S, E, M, C, j, P, A, I, N, R, D = t.style,
                        L = n.scaleX < 0,
                        q = En(t, Tn) || "0";
                    return i = r = o = c = u = l = h = f = p = 0, a = s = 1, n.svg = !(!t.getCTM || !Nn(t)), v = Jn(t, n.svg), n.svg && (E = !n.uncache && t.getAttribute("data-svg-origin"), Qn(t, E || q, !!E || n.originIsAbsolute, !1 !== n.smooth, v)), m = n.xOrigin || 0, g = n.yOrigin || 0, v !== Wn && (w = v[0], x = v[1], k = v[2], O = v[3], i = T = v[4], r = S = v[5], 6 === v.length ? (a = Math.sqrt(w * w + x * x), s = Math.sqrt(O * O + k * k), c = w || x ? sn(x, w) * on : 0, (h = k || O ? sn(k, O) * on + c : 0) && (s *= Math.cos(h * an)), n.svg && (i -= m - (m * w + g * k), r -= g - (m * x + g * O))) : (R = v[6], I = v[7], j = v[8], P = v[9], A = v[10], N = v[11], i = v[12], r = v[13], o = v[14], u = (y = sn(R, A)) * on, y && (E = T * (b = Math.cos(-y)) + j * (_ = Math.sin(-y)), M = S * b + P * _, C = R * b + A * _, j = T * -_ + j * b, P = S * -_ + P * b, A = R * -_ + A * b, N = I * -_ + N * b, T = E, S = M, R = C), l = (y = sn(-k, A)) * on, y && (b = Math.cos(-y), N = O * (_ = Math.sin(-y)) + N * b, w = E = w * b - j * _, x = M = x * b - P * _, k = C = k * b - A * _), c = (y = sn(x, w)) * on, y && (E = w * (b = Math.cos(y)) + x * (_ = Math.sin(y)), M = T * b + S * _, x = x * b - w * _, S = S * b - T * _, w = E, T = M), u && Math.abs(u) + Math.abs(c) > 359.9 && (u = c = 0, l = 180 - l), a = it(Math.sqrt(w * w + x * x + k * k)), s = it(Math.sqrt(S * S + R * R)), y = sn(T, S), h = Math.abs(y) > 2e-4 ? y * on : 0, p = N ? 1 / (N < 0 ? -N : N) : 0), n.svg && (E = t.getAttribute("transform"), n.forceCSS = t.setAttribute("transform", "") || !Xn(En(t, On)), E && t.setAttribute("transform", E))), Math.abs(h) > 90 && Math.abs(h) < 270 && (L ? (a *= -1, h += c <= 0 ? 180 : -180, c += c <= 0 ? 180 : -180) : (s *= -1, h += h <= 0 ? 180 : -180)), n.x = ((n.xPercent = i && Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0) ? 0 : i) + "px", n.y = ((n.yPercent = r && Math.round(t.offsetHeight / 2) === Math.round(-r) ? -50 : 0) ? 0 : r) + "px", n.z = o + "px", n.scaleX = it(a), n.scaleY = it(s), n.rotation = it(c) + "deg", n.rotationX = it(u) + "deg", n.rotationY = it(l) + "deg", n.skewX = h + "deg", n.skewY = f + "deg", n.transformPerspective = p + "px", (n.zOrigin = parseFloat(q.split(" ")[2]) || 0) && (D[Tn] = Zn(q)), n.xOffset = n.yOffset = 0, n.force3D = d.force3D, n.renderTransform = n.svg ? ni : nn ? ei : ti, n.uncache = 0, n
                },
                Zn = function(t) {
                    return (t = t.split(" "))[0] + " " + t[1]
                },
                $n = function(t, e, n) {
                    var i = Rt(e);
                    return it(parseFloat(e) + parseFloat(qn(t, "x", n + "px", i))) + i
                },
                ti = function(t, e) {
                    e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, ei(t, e)
                },
                ei = function(t, e) {
                    var n = e || this,
                        i = n.xPercent,
                        r = n.yPercent,
                        o = n.x,
                        a = n.y,
                        s = n.z,
                        c = n.rotation,
                        u = n.rotationY,
                        l = n.rotationX,
                        h = n.skewX,
                        f = n.skewY,
                        d = n.scaleX,
                        p = n.scaleY,
                        m = n.transformPerspective,
                        g = n.force3D,
                        v = n.target,
                        y = n.zOrigin,
                        b = "",
                        _ = "auto" === g && t && 1 !== t || !0 === g;
                    if (y && ("0deg" !== l || "0deg" !== u)) {
                        var w, x = parseFloat(u) * an,
                            k = Math.sin(x),
                            O = Math.cos(x);
                        x = parseFloat(l) * an, w = Math.cos(x), o = $n(v, o, k * w * -y), a = $n(v, a, -Math.sin(x) * -y), s = $n(v, s, O * w * -y + y)
                    }
                    "0px" !== m && (b += "perspective(" + m + ") "), (i || r) && (b += "translate(" + i + "%, " + r + "%) "), (_ || "0px" !== o || "0px" !== a || "0px" !== s) && (b += "0px" !== s || _ ? "translate3d(" + o + ", " + a + ", " + s + ") " : "translate(" + o + ", " + a + ") "), "0deg" !== c && (b += "rotate(" + c + ") "), "0deg" !== u && (b += "rotateY(" + u + ") "), "0deg" !== l && (b += "rotateX(" + l + ") "), "0deg" === h && "0deg" === f || (b += "skew(" + h + ", " + f + ") "), 1 === d && 1 === p || (b += "scale(" + d + ", " + p + ") "), v.style[On] = b || "translate(0, 0)"
                },
                ni = function(t, e) {
                    var n, i, r, o, a, s = e || this,
                        c = s.xPercent,
                        u = s.yPercent,
                        l = s.x,
                        h = s.y,
                        f = s.rotation,
                        d = s.skewX,
                        p = s.skewY,
                        m = s.scaleX,
                        g = s.scaleY,
                        v = s.target,
                        y = s.xOrigin,
                        b = s.yOrigin,
                        _ = s.xOffset,
                        w = s.yOffset,
                        x = s.forceCSS,
                        k = parseFloat(l),
                        O = parseFloat(h);
                    f = parseFloat(f), d = parseFloat(d), (p = parseFloat(p)) && (d += p = parseFloat(p), f += p), f || d ? (f *= an, d *= an, n = Math.cos(f) * m, i = Math.sin(f) * m, r = Math.sin(f - d) * -g, o = Math.cos(f - d) * g, d && (p *= an, a = Math.tan(d - p), r *= a = Math.sqrt(1 + a * a), o *= a, p && (a = Math.tan(p), n *= a = Math.sqrt(1 + a * a), i *= a)), n = it(n), i = it(i), r = it(r), o = it(o)) : (n = m, o = g, i = r = 0), (k && !~(l + "").indexOf("px") || O && !~(h + "").indexOf("px")) && (k = qn(v, "x", l, "px"), O = qn(v, "y", h, "px")), (y || b || _ || w) && (k = it(k + y - (y * n + b * r) + _), O = it(O + b - (y * i + b * o) + w)), (c || u) && (a = v.getBBox(), k = it(k + c / 100 * a.width), O = it(O + u / 100 * a.height)), a = "matrix(" + n + "," + i + "," + r + "," + o + "," + k + "," + O + ")", v.setAttribute("transform", a), x && (v.style[On] = a)
                },
                ii = function(t, e, n, i, r, o) {
                    var a, s, c = x(r),
                        u = parseFloat(r) * (c && ~r.indexOf("rad") ? on : 1),
                        l = o ? u * o : u - i,
                        h = i + l + "deg";
                    return c && ("short" === (a = r.split("_")[1]) && (l %= 360) !== l % 180 && (l += l < 0 ? 360 : -360), "cw" === a && l < 0 ? l = (l + 36e9) % 360 - 360 * ~~(l / 360) : "ccw" === a && l > 0 && (l = (l - 36e9) % 360 - 360 * ~~(l / 360))), t._pt = s = new Ve(t._pt, e, n, i, l, dn), s.e = h, s.u = "deg", t._props.push(n), s
                },
                ri = function(t, e, n) {
                    var i, r, o, a, s, c, u, l = tn.style,
                        h = n._gsap;
                    for (r in l.cssText = getComputedStyle(n).cssText + ";position:absolute;display:block;", l[On] = e, Qe.body.appendChild(tn), i = Kn(tn, 1), rn)(o = h[r]) !== (a = i[r]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 && (s = Rt(o) !== (u = Rt(a)) ? qn(n, r, o, u) : parseFloat(o), c = parseFloat(a), t._pt = new Ve(t._pt, h, r, s, c - s, fn), t._pt.u = u || 0, t._props.push(r));
                    Qe.body.removeChild(tn)
                };
            nt("padding,margin,Width,Radius", (function(t, e) {
                var n = "Top",
                    i = "Right",
                    r = "Bottom",
                    o = "Left",
                    a = (e < 3 ? [n, i, r, o] : [n + o, n + i, r + i, r + o]).map((function(n) {
                        return e < 2 ? t + n : "border" + n + t
                    }));
                Vn[e > 1 ? "border" + t : t] = function(t, e, n, i, r) {
                    var o, s;
                    if (arguments.length < 4) return o = a.map((function(e) {
                        return zn(t, e, n)
                    })), 5 === (s = o.join(" ")).split(o[0]).length ? o[0] : s;
                    o = (i + "").split(" "), s = {}, a.forEach((function(t, e) {
                        return s[t] = o[e] = o[e] || o[(e - 1) / 2 | 0]
                    })), t.init(e, s, r)
                }
            }));
            var oi = {
                name: "css",
                register: jn,
                targetTest: function(t) {
                    return t.style && t.nodeType
                },
                init: function(t, e, n, i, r) {
                    var o, a, s, c, u, l, h, f, p, m, g, v, y, b, _, w = this._props,
                        x = t.style;
                    for (h in Ze || jn(), e)
                        if ("autoRound" !== h && (a = e[h], !G[h] || !Te(h, e, n, i, t, r)))
                            if (u = typeof a, l = Vn[h], "function" === u && (u = typeof(a = a.call(n, i, t, r))), "string" === u && ~a.indexOf("random(") && (a = Yt(a)), l) l(this, t, h, a, n) && (_ = 1);
                            else if ("--" === h.substr(0, 2)) this.add(x, "setProperty", getComputedStyle(t).getPropertyValue(h) + "", a + "", i, r, 0, 0, h);
                    else if ("undefined" !== u) {
                        if (o = zn(t, h), c = parseFloat(o), (m = "string" === u && "=" === a.charAt(1) ? +(a.charAt(0) + "1") : 0) && (a = a.substr(2)), s = parseFloat(a), h in hn && ("autoAlpha" === h && (1 === c && "hidden" === zn(t, "visibility") && s && (c = 0), Dn(this, x, "visibility", c ? "inherit" : "hidden", s ? "inherit" : "hidden", !s)), "scale" !== h && "transform" !== h && ~(h = hn[h]).indexOf(",") && (h = h.split(",")[0])), g = h in rn)
                            if (v || ((y = t._gsap).renderTransform || Kn(t), b = !1 !== e.smoothOrigin && y.smooth, (v = this._pt = new Ve(this._pt, x, On, 0, 1, y.renderTransform, y, 0, -1)).dep = 1), "scale" === h) this._pt = new Ve(this._pt, y, "scaleY", y.scaleY, m ? m * s : s - y.scaleY), w.push("scaleY", h), h += "X";
                            else {
                                if ("transformOrigin" === h) {
                                    a = Bn(a), y.svg ? Qn(t, a, 0, b, 0, this) : ((p = parseFloat(a.split(" ")[2]) || 0) !== y.zOrigin && Dn(this, y, "zOrigin", y.zOrigin, p), Dn(this, x, h, Zn(o), Zn(a)));
                                    continue
                                }
                                if ("svgOrigin" === h) {
                                    Qn(t, a, 1, b, 0, this);
                                    continue
                                }
                                if (h in Yn) {
                                    ii(this, y, h, c, a, m);
                                    continue
                                }
                                if ("smoothOrigin" === h) {
                                    Dn(this, y, "smooth", y.smooth, a);
                                    continue
                                }
                                if ("force3D" === h) {
                                    y[h] = a;
                                    continue
                                }
                                if ("transform" === h) {
                                    ri(this, a, t);
                                    continue
                                }
                            }
                        else h in x || (h = Cn(h) || h);
                        if (g || (s || 0 === s) && (c || 0 === c) && !ln.test(a) && h in x) s || (s = 0), (f = (o + "").substr((c + "").length)) !== (p = Rt(a) || (h in d.units ? d.units[h] : f)) && (c = qn(t, h, o, p)), this._pt = new Ve(this._pt, g ? y : x, h, c, m ? m * s : s - c, "px" !== p || !1 === e.autoRound || g ? fn : mn), this._pt.u = p || 0, f !== p && (this._pt.b = o, this._pt.r = pn);
                        else if (h in x) Fn.call(this, t, h, o, a);
                        else {
                            if (!(h in t)) {
                                H(h, a);
                                continue
                            }
                            this.add(t, h, t[h], a, i, r)
                        }
                        w.push(h)
                    }
                    _ && Ue(this)
                },
                get: zn,
                aliases: hn,
                getSetter: function(t, e, n) {
                    var i = hn[e];
                    return i && i.indexOf(",") < 0 && (e = i), e in rn && e !== Tn && (t._gsap.x || zn(t, "x")) ? n && en === n ? "scale" === e ? wn : _n : (en = n || {}) && ("scale" === e ? xn : kn) : t.style && !T(t.style[e]) ? yn : ~e.indexOf("-") ? bn : Re(t, e)
                },
                core: {
                    _removeProperty: Rn,
                    _getMatrix: Jn
                }
            };
            Ge.utils.checkPrefix = Cn,
                function(t, e, n, i) {
                    var r = nt("x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + e + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function(t) {
                        rn[t] = 1
                    }));
                    nt(e, (function(t) {
                        d.units[t] = "deg", Yn[t] = 1
                    })), hn[r[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + e, nt("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function(t) {
                        var e = t.split(":");
                        hn[e[1]] = r[e[0]]
                    }))
                }(0, "rotation,rotationX,rotationY,skewX,skewY"), nt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(t) {
                    d.units[t] = "px"
                })), Ge.registerPlugin(oi);
            var ai = Ge.registerPlugin(oi) || Ge;
            ai.core.Tween
        },
        "zB/H": function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n("mbIT"),
                r = n("GMZp"),
                o = n("pshJ"),
                a = n("LBXl"),
                s = function() {
                    function t(t) {
                        this.closed = !1, this._parentOrParents = null, this._subscriptions = null, t && (this._ctorUnsubscribe = !0, this._unsubscribe = t)
                    }
                    var e;
                    return t.prototype.unsubscribe = function() {
                        var e;
                        if (!this.closed) {
                            var n = this._parentOrParents,
                                s = this._ctorUnsubscribe,
                                u = this._unsubscribe,
                                l = this._subscriptions;
                            if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, n instanceof t) n.remove(this);
                            else if (null !== n)
                                for (var h = 0; h < n.length; ++h) {
                                    n[h].remove(this)
                                }
                            if (o.isFunction(u)) {
                                s && (this._unsubscribe = void 0);
                                try {
                                    u.call(this)
                                } catch (p) {
                                    e = p instanceof a.UnsubscriptionError ? c(p.errors) : [p]
                                }
                            }
                            if (i.isArray(l)) {
                                h = -1;
                                for (var f = l.length; ++h < f;) {
                                    var d = l[h];
                                    if (r.isObject(d)) try {
                                        d.unsubscribe()
                                    } catch (p) {
                                        e = e || [], p instanceof a.UnsubscriptionError ? e = e.concat(c(p.errors)) : e.push(p)
                                    }
                                }
                            }
                            if (e) throw new a.UnsubscriptionError(e)
                        }
                    }, t.prototype.add = function(e) {
                        var n = e;
                        if (!e) return t.EMPTY;
                        switch (typeof e) {
                            case "function":
                                n = new t(e);
                            case "object":
                                if (n === this || n.closed || "function" !== typeof n.unsubscribe) return n;
                                if (this.closed) return n.unsubscribe(), n;
                                if (!(n instanceof t)) {
                                    var i = n;
                                    (n = new t)._subscriptions = [i]
                                }
                                break;
                            default:
                                throw new Error("unrecognized teardown " + e + " added to Subscription.")
                        }
                        var r = n._parentOrParents;
                        if (null === r) n._parentOrParents = this;
                        else if (r instanceof t) {
                            if (r === this) return n;
                            n._parentOrParents = [r, this]
                        } else {
                            if (-1 !== r.indexOf(this)) return n;
                            r.push(this)
                        }
                        var o = this._subscriptions;
                        return null === o ? this._subscriptions = [n] : o.push(n), n
                    }, t.prototype.remove = function(t) {
                        var e = this._subscriptions;
                        if (e) {
                            var n = e.indexOf(t); - 1 !== n && e.splice(n, 1)
                        }
                    }, t.EMPTY = ((e = new t).closed = !0, e), t
                }();

            function c(t) {
                return t.reduce((function(t, e) {
                    return t.concat(e instanceof a.UnsubscriptionError ? e.errors : e)
                }), [])
            }
            e.Subscription = s
        },
        zfKp: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.observable = "function" === typeof Symbol && Symbol.observable || "@@observable"
        }
    },
    [
        ["vlRD", 0, 1, 6, 2]
    ]
]);
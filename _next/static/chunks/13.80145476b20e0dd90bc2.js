(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [13],
    {
        F2YI: function (t, a, r) {
            "use strict";
            r.r(a);
            var n = r("q1tI"),
                e = r.n(n),
                i = r("z/o8"),
                o = r("IqKQ"),
                s = r("rOcY"),
                l = r("aMv/"),
                u = r.n(l),
                m = r("IJdR"),
                c = e.a.createElement;
            a.default = function (t) {
                var a,
                    r = Object(n.useRef)(),
                    e = Object(n.useRef)(),
                    l = Object(n.useRef)(),
                    d = Object(n.useRef)(),
                    f = Object(n.useRef)(),
                    p = Object(n.useState)("00"),
                    b = p[0],
                    _ = p[1],
                    x = 0;
                Object(n.useEffect)(function () {
                    g();
                }, []);
                var g = function () {
                        (a = i.a.timeline({ delay: 0.2 }))
                            .to(f.current, { duration: 45, rotate: "360deg", repeat: -1 }, 0)
                            .to(f.current, { duration: 0.4, alpha: 1 }, 0)
                            .to(e.current, { duration: 1, ease: "quint.out", y: "0%", rotate: "0deg" }, "-=0.1")
                            .to(l.current, { duration: 1, ease: "quint.out", y: "0%", rotate: "0deg" }, "-=0.8")
                            .to(d.current, { duration: 1, ease: "quint.out", y: "0%", rotate: "0deg" }, "-=0.6")
                            .set(r.current, { zIndex: -1 })
                            .call(function () {
                                !(function () {
                                    var t = o.f.shared;
                                    s.a.is.mobile ||
                                        t
                                            .add("illu_wall", "img/illustration/wall.png")
                                            .add("illu_ground", "img/illustration/ground.png")
                                            .add("illu_computer", "img/illustration/computer.png")
                                            .add("illu_logo", "img/illustration/logo.png")
                                            .add("illu_bottle", "img/illustration/bottle.png")
                                            .add("about_anim_bin", "img/illustration/animations/about.binpack", { xhrType: "arraybuffer" })
                                            .add("about_shadow_anim_bin", "img/illustration/animations/about_shadow.binpack", { xhrType: "arraybuffer" })
                                            .add("label_anim_bin", "img/illustration/animations/label.binpack", { xhrType: "arraybuffer" })
                                            .add("partyDesign_anim_bin", "img/illustration/animations/partyDesign.binpack", { xhrType: "arraybuffer" })
                                            .add("management_anim_bin", "img/illustration/animations/management.binpack", { xhrType: "arraybuffer" })
                                            .add("artisticDirection_anim_bin", "img/illustration/animations/artisticDirection.binpack", { xhrType: "arraybuffer" })
                                            .add("artisticDirection_shadow_anim_bin", "img/illustration/animations/artisticDirection_shadow.binpack", { xhrType: "arraybuffer" })
                                            .add("artisticDirection_light", "img/illustration/light.png")
                                            .add("contact_anim_bin", "img/illustration/animations/contact.binpack", { xhrType: "arraybuffer" })
                                            .add("contact_shadow_anim_bin", "img/illustration/animations/contact_shadow.binpack", { xhrType: "arraybuffer" }),
                                        t.add("lottie_star", "img/global/star.json"),
                                        t.use(function (t, a) {
                                            "binpack" == t.extension
                                                ? Object(m.a)(t.data).then(function (r) {
                                                      (t.dataUnpack = r), a();
                                                  })
                                                : a();
                                        }),
                                        t.load(),
                                        t.onProgress.add(function (t) {
                                            var a = { s: "", t: Math.min(100, Math.round(t.progress)), v: x };
                                            i.a.to(a, {
                                                duration: 0.5,
                                                v: a.t,
                                                onUpdate: function () {
                                                    (x = a.v), a.v < 10 ? (a.s = "0" + Math.round(a.v)) : (a.s = Math.round(a.v)), _(a.s);
                                                },
                                            });
                                        }),
                                        t.onComplete.add(function (t) {
                                            (s.a.resources = t.resources),
                                                setTimeout(function () {
                                                    h();
                                                }, 500);
                                        });
                                })();
                            });
                    },
                    h = function () {
                        t.loadComplete && t.loadComplete(),
                            i.a.to(r.current, {
                                duration: 1.1,
                                y: "-33%",
                                ease: "quint.inOut",
                                onComplete: function () {
                                    a.kill(), i.a.set(r.current, { display: "none" });
                                },
                            });
                    };
                return c(
                    "section",
                    { ref: r, className: u.a.component },
                    c(
                        "div",
                        { ref: f, className: u.a.circle },
                        c(
                            "svg",
                            { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 391.25 391.28" },
                            c(
                                "g",
                                { "data-name": "Calque 2" },
                                c(
                                    "g",
                                    { "data-name": "Calque 1" },
                                    c("text", { transform: "translate(146.91 44.61) rotate(-7.35)" }, "A"),
                                    c("text", { transform: "matrix(0.97, 0.23, -0.23, 0.97, 201.91, 36.8)" }, "S"),
                                    c("text", { transform: "translate(258.88 51.32) rotate(31.7)" }, "T"),
                                    c("text", { transform: "translate(294.29 74.39) rotate(42.79)" }, "A"),
                                    c("text", { transform: "translate(309.92 84.68) rotate(57.48)" }, ""),
                                    c("text", { transform: "matrix(0.28, 0.96, -0.96, 0.28, 338.45, 127.99)" }, "K"),
                                    c("text", { transform: "translate(352.87 173.79) rotate(92.77)" }, "H"),
                                    c("text", { transform: "matrix(-0.28, 0.96, -0.96, -0.28, 347.93, 230.77)" }, "O"),
                                    c("text", { transform: "matrix(-0.46, 0.89, -0.89, -0.46, 344.65, 247.41)" }, ""),
                                    c("text", { transform: "translate(325.11 287.39) rotate(135.9)" }, "V"),
                                    c("text", { transform: "matrix(-0.9, 0.43, -0.43, -0.9, 284.59, 326.22)" }, "A"),
                                    c("text", { transform: "matrix(-0.73, -0.69, 0.69, -0.73, 112.26, 331.39)" }, " "),

                                    c("text", { transform: "matrix(-0.53, -0.85, 0.85, -0.53, 68.59, 286.74)" }, " "),
                                    c("text", { transform: "translate(56.69 272.42) rotate(-108.34)" }, "T "),
                                    c("text", { transform: "translate(37.76 219.42) rotate(-86.29)" }, "A "),
                                    c("text", { transform: "matrix(0.4, -0.91, 0.91, 0.4, 43.49, 153.89)" }, "T "),
                                    c("text", { transform: "translate(60.32 112.69) rotate(-47.89)" }, "O "),
                                    c("text", { transform: "translate(98.18 72) rotate(-29.04)" }, "O "),
                                    c("text", { transform: "matrix(-0.99, 0.14, -0.14, -0.99, 241.2, 346.67)" }, " "),
                                    c("text", { transform: "matrix(-0.99, -0.16, 0.16, -0.99, 197.31, 353.91)" }, " "),
                                    c("text", { transform: "translate(146.97 346) rotate(-152.93)" }, " ")
                                )
                            )
                        )
                    ),
                    c("p", { className: u.a.title }, c("span", { ref: e }, "нашёл")),
                    c("p", { className: u.a.title }, c("span", { ref: l }, "нашёл")),
                    c("p", { className: u.a.percent }, c("span", { ref: d }, b, "%"))
                );
            };
        },
        "aMv/": function (t, a, r) {
            t.exports = { component: "loader_component__1ULF2", title: "loader_title__WADCm", circle: "loader_circle__2DT8r", percent: "loader_percent__8l3W6" };
        },
    },
]);

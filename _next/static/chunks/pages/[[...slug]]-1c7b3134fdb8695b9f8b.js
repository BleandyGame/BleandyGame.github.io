(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [120], {
        9131: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return b
                }
            });
            var o = n(876),
                i = n(3036),
                r = n(3088),
                l = n(9017),
                a = n(2816),
                C = n(4431),
                c = n(2480),
                d = n(4439),
                u = n(7319),
                s = function(e) {
                    var t, n, o, i = e.seoTitle,
                        l = e.seo,
                        a = e.url,
                        c = e.description,
                        d = e.baseUrl,
                        s = (0, C.Z)().t,
                        v = (null === l || void 0 === l || null === (t = l.ogImage) || void 0 === t ? void 0 : t.url) || new URL(s("common:seo.ogImageUrl"), null !== d && void 0 !== d ? d : "http://localhost").href;
                    return (0, u.BX)(r.default, {
                        children: [(0, u.tZ)("meta", {
                            property: "og:type",
                            content: "website"
                        }), (0, u.tZ)("meta", {
                            property: "og:url",
                            content: a
                        }), (0, u.tZ)("meta", {
                            property: "og:title",
                            content: i
                        }), (0, u.tZ)("meta", {
                            property: "og:description",
                            content: c
                        }), (0, u.tZ)("meta", {
                            property: "og:image",
                            content: v
                        }), (null === l || void 0 === l || null === (n = l.ogImage) || void 0 === n ? void 0 : n.width) && (0, u.tZ)("meta", {
                            property: "og:image:width",
                            content: String(l.ogImage.width)
                        }), (null === l || void 0 === l || null === (o = l.ogImage) || void 0 === o ? void 0 : o.height) && (0, u.tZ)("meta", {
                            property: "og:image:height",
                            content: String(l.ogImage.height)
                        }), (0, u.tZ)("meta", {
                            property: "fb:app_id",
                            content: "247549133538241"
                        })]
                    })
                },
                v = function(e) {
                    var t, n = e.seo,
                        o = e.seoTitle,
                        i = e.url,
                        l = e.description,
                        a = e.baseUrl,
                        c = (0, C.Z)().t,
                        d = (null === n || void 0 === n ? void 0 : n.twitterCard) || c("common:seo.twitterCard"),
                        s = (null === n || void 0 === n || null === (t = n.twitterImage) || void 0 === t ? void 0 : t.url) || new URL(c("common:seo.twitterImageUrl"), a || "http://localhost").href,
                        v = (null === n || void 0 === n ? void 0 : n.twitterAccount) || c("common:seo.twitterAccount");
                    return (0, u.BX)(r.default, {
                        children: [(0, u.tZ)("meta", {
                            property: "twitter:card",
                            content: d
                        }), (0, u.tZ)("meta", {
                            property: "twitter:url",
                            content: i
                        }), (0, u.tZ)("meta", {
                            property: "twitter:title",
                            content: o
                        }), (0, u.tZ)("meta", {
                            property: "twitter:description",
                            content: l
                        }), (0, u.tZ)("meta", {
                            property: "twitter:image",
                            content: s
                        }), (null === v || void 0 === v ? void 0 : v.length) && (0, u.tZ)("meta", {
                            property: "twitter:site",
                            content: v
                        }), (null === n || void 0 === n ? void 0 : n.twitterCreator) && (0, u.tZ)("meta", {
                            property: "twitter:creator",
                            content: n.twitterCreator
                        })]
                    })
                },
                h = "https://".concat("www.playspacepunks.com"),
                m = function(e, t) {
                    var n = [];
                    return e && n.push("noindex"), t && n.push("nofollow"), n.join(", ")
                },
                p = function(e) {
                    var t, n = e.title,
                        o = e.seo,
                        i = (0, C.Z)().t,
                        a = (null === o || void 0 === o ? void 0 : o.description) || i("common:seo.description"),
                        c = (null === o || void 0 === o || null === (t = o.keywords) || void 0 === t ? void 0 : t.join(", ")) || i("common:seo.keywords"),
                        d = ((0, l.useRouter)(), window.location.href);
                    return (0, u.BX)(u.HY, {
                        children: [(0, u.BX)(r.default, {
                            children: [(0, u.tZ)("title", {
                                children: n
                            }), (0, u.tZ)("meta", {
                                name: "description",
                                content: a
                            }), (0, u.tZ)("meta", {
                                name: "keywords",
                                content: c
                            }), (0, u.tZ)("meta", {
                                name: "robots",
                                content: m(null === o || void 0 === o ? void 0 : o.noIndex, null === o || void 0 === o ? void 0 : o.noFollow)
                            })]
                        }), (0, u.tZ)(s, {
                            seo: o,
                            seoTitle: n,
                            description: a,
                            url: d,
                            baseUrl: h
                        }), (0, u.tZ)(v, {
                            seo: o,
                            seoTitle: n,
                            description: a,
                            url: d,
                            baseUrl: h
                        })]
                    })
                },
                f = n(134),
                g = n(7021),
                y = function(e, t, n) {
                    var i, r;
                    return {
                        url: (null === e || void 0 === e ? void 0 : e.url) && (0, g.IX)(null === e || void 0 === e ? void 0 : e.url) || "",
                        title: null !== (i = null === e || void 0 === e ? void 0 : e.title) && void 0 !== i ? i : "",
                        after: (null === e || void 0 === e ? void 0 : e.url) && (r = e.url, (0, o.isAbsoluteUrl)(r) ? "external" : void 0) || n,
                        selected: !(t !== (null === e || void 0 === e ? void 0 : e.url))
                    }
                };
            var b = function(e) {
                var t, s, v, h, m, b, k, x = (0, l.useRouter)(),
                    w = x.locale,
                    Z = x.asPath,
                    I = (0, C.Z)().t,
                    T = (0, c.useState)(!1)[1],
                    P = e.preview,
                    U = e.children,
                    j = e.header,
                    B = e.footer,
                    S = e.title,
                    O = e.seo,
                    A = e.generatedDate,
                    _ = (0, o.useHasMounted)(),
                    H = (null === O || void 0 === O ? void 0 : O.title) || S || I("common:seo.title"),
                    L = [{
                        url: "".concat(Z),
                        title: "English",
                        locale: "en-US"
                    }],
                    M = L.find((function(e) {
                        return e.locale === w
                    })) || "en-US",
                    G = (0, i.default)((function() {
                        return n.e(404).then(n.bind(n, 3404))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return [3404]
                            },
                            modules: ["../components/BaseLayout/BaseLayout.tsx -> ~components/PreviewBanner"]
                        }
                    });
                return (0, u.BX)(d.kC, {
                    sx: {
                        flexDirection: "column",
                        minHeight: "100vh"
                    },
                    children: [(0, u.BX)(r.default, {
                        children: [(0, u.tZ)("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1, shrink-to-fit=no"
                        }), (0, u.tZ)("meta", {
                            httpEquiv: "x-ua-compatible",
                            content: "ie=edge"
                        }), (0, u.tZ)("link", {
                            rel: "icon",
                            href: "/favicons/favicon.ico"
                        }), (0, u.tZ)("link", {
                            rel: "apple-touch-icon",
                            sizes: "180x180",
                            href: "/favicons/apple-touch-icon.png"
                        }), (0, u.tZ)("link", {
                            rel: "android-chrome-icon",
                            sizes: "192x192",
                            href: "/favicons/android-chrome-192x192.png"
                        }), (0, u.tZ)("link", {
                            rel: "android-chrome-icon",
                            sizes: "512x512",
                            href: "/favicons/android-chrome-512x512.png"
                        }), (0, u.tZ)("link", {
                            rel: "icon",
                            type: "image/png",
                            sizes: "32x32",
                            href: "/favicons/favicon-32x32.png"
                        }), (0, u.tZ)("link", {
                            rel: "icon",
                            type: "image/png",
                            sizes: "16x16",
                            href: "/favicons/favicon-16x16.png"
                        }), (0, u.tZ)("link", {
                            rel: "preconnect",
                            href: "https://vitals.vercel-insights.com"
                        }), (0, u.tZ)("link", {
                            rel: "preconnect",
                            href: "https://consent.cookiebot.com"
                        }), (0, u.tZ)("link", {
                            rel: "preconnect",
                            href: "https://www.youtube.com"
                        }), (0, u.tZ)("link", {
                            rel: "preconnect",
                            href: "https://images.ctfassets.net"
                        }), (0, u.tZ)("link", {
                            rel: "preconnect",
                            href: "https://videos.ctfassets.net"
                        })]
                    }), (0, u.tZ)(a.default, {
                        id: "gtag-defaults",
                        strategy: "afterInteractive",
                        "data-cookieconsent": "ignore",
                        dangerouslySetInnerHTML: {
                            __html: '\n              window.dataLayer = window.dataLayer || [];\n              function gtag() {\n                dataLayer.push(arguments);\n              }\n              gtag("consent", "default", {\n                ad_storage: "denied",\n                analytics_storage: "denied",\n                functionality_storage: "denied",\n                personalization_storage: "denied",\n                security_storage: "granted",\n                wait_for_update: 500\n              });\n              gtag("set", "ads_data_redaction", true);\n              '
                        }
                    }), f.Ax && (0, u.tZ)(a.default, {
                        id: "gtm",
                        strategy: "afterInteractive",
                        dangerouslySetInnerHTML: {
                            __html: "\n              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n              'https://www.googletagmanager.com/gtm.js?id='+i+dl+'".concat(f.AG).concat(f.N0, "&gtm_cookies_win=x';\n              f.parentNode.insertBefore(j,f);\n              })(window,document,'script','dataLayer', '").concat(f.Ax, "');\n              ")
                        }
                    }), (0, u.tZ)(p, {
                        seo: O,
                        title: H
                    }), P && (0, u.tZ)(G, {}), j && (0, u.tZ)(o.Header, {
                        id: "header",
                        logo: {
                            alt: I("common:skip-to-content")
                        },
                        navigationItems: null !== (t = null === j || void 0 === j || null === (s = j.navigationItemsCollection) || void 0 === s ? void 0 : s.items.map((function(e) {
                            return y(e, Z)
                        }))) && void 0 !== t ? t : [],
                        languages: L,
                        selectedLanguage: M,
                        playCopy: null !== (v = null === j || void 0 === j ? void 0 : j.play) && void 0 !== v ? v : "Play Early Access",
                        playUrl: (null === j || void 0 === j ? void 0 : j.playUrl) || "",
                        skipToContentCopy: I("common:skip-to-content"),
                        onOpenMenu: function() {
                            return T(!0)
                        }
                    }), U && (0, u.BX)(d.kC, {
                        as: "main",
                        sx: {
                            position: "relative",
                            flexDirection: "column",
                            alignItems: "center",
                            flex: "1"
                        },
                        id: "main",
                        children: [(0, u.tZ)(d.X6, {
                            as: "h1",
                            sx: {
                                position: "absolute",
                                width: "1px",
                                height: "1px",
                                margin: NaN,
                                border: "0",
                                padding: "0",
                                clip: "rect(0 0 0 0)",
                                overflow: "hidden"
                            },
                            children: H
                        }), U]
                    }), B && (0, u.tZ)(o.Footer, {
                        id: B.name || "footer",
                        languages: L,
                        selectedLanguage: M,
                        legalNavItems: null !== (h = null === B || void 0 === B || null === (m = B.legalNavItemsCollection) || void 0 === m ? void 0 : m.items.map((function(e) {
                            return y(e, Z)
                        }))) && void 0 !== h ? h : [],
                        copyrightLines: (null === B || void 0 === B ? void 0 : B.copyrightLines) || [],
                        socialLinks: null !== (b = null === B || void 0 === B || null === (k = B.socialLinksCollection) || void 0 === k ? void 0 : k.items.map((function(e) {
                            var t, n;
                            return {
                                url: (null === e || void 0 === e ? void 0 : e.url) && (0, g.IX)(null === e || void 0 === e ? void 0 : e.url) || "",
                                title: null !== (t = null === e || void 0 === e ? void 0 : e.title) && void 0 !== t ? t : "",
                                logo: null !== (n = null === e || void 0 === e ? void 0 : e.logo) && void 0 !== n ? n : void 0
                            }
                        }))) && void 0 !== b ? b : [],
                        socialSectionHeader: (null === B || void 0 === B ? void 0 : B.socialSectionHeader) || void 0
                    }), (0, u.BX)("div", {
                        "aria-hidden": "true",
                        sx: {
                            display: "none"
                        },
                        children: ["generated at: ", A]
                    }), (0, u.tZ)("div", {
                        id: "uptime-check-ssg",
                        "aria-hidden": "true",
                        sx: {
                            display: "none"
                        },
                        children: "ssg status ok"
                    }), _ && (0, u.tZ)("div", {
                        id: "uptime-check-csr",
                        "aria-hidden": "true",
                        sx: {
                            display: "none"
                        },
                        children: "csr status ok"
                    })]
                })
            }
        },
        7021: function(e, t, n) {
            "use strict";
            n.d(t, {
                YU: function() {
                    return i
                },
                vV: function() {
                    return r
                },
                IX: function() {
                    return l
                },
                e5: function() {
                    return a
                },
                o2: function() {
                    return c
                },
                _: function() {
                    return d
                }
            });
            var o = n(7735),
                i = function(e) {
                    var t = e.src,
                        n = e.width,
                        i = e.quality,
                        r = void 0 === i ? 75 : i;
                    if (!t) return o.Tb(new Error("Missing image src in contentful loader")), "#";
                    var l = new URL(t),
                        a = l.searchParams;
                    a.set("q", r.toString());
                    var C = function(e) {
                        if (void 0 === e || null === e) return null;
                        if ("number" === typeof e) return e;
                        if (e instanceof Set) {
                            var t = Array.from(e),
                                n = null === t || void 0 === t ? void 0 : t[0];
                            return null !== n && void 0 !== n ? n : null
                        }
                        if (Array.isArray(e)) {
                            var o = null === e || void 0 === e ? void 0 : e[0];
                            return null !== o && void 0 !== o ? o : null
                        }
                        return null
                    }(n);
                    return null !== C && a.set("w", C.toString()), "".concat(l.origin).concat(l.pathname, "?").concat(a.toString())
                },
                r = function(e) {
                    return /^(?:[^\s"(),.:;<>@[\]]+(?:\.[^\s"(),.:;<>@[\]]+)*|".+")@(?:[^\s"(),.:;<>@[\]]+\.)+[^\s"(),.:;<>@[\]]{2,}$/.test(String(e).toLowerCase())
                },
                l = function(e) {
                    return e || ""
                },
                a = function(e) {
                    return null !== e && void 0 !== e
                },
                C = function(e) {
                    var t;
                    return null === (t = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\\-]+\?v=|embed\/|v\/)?)([\w\\-]+)(\S+)?$/.exec(e)) || void 0 === t ? void 0 : t[5]
                },
                c = function(e) {
                    var t = C(e);
                    return t ? "https://www.youtube.com/embed/".concat(t, "?rel=0&autoplay=1") : e
                },
                d = function(e) {
                    var t = C(e);
                    return "https://img.youtube.com/vi/".concat(t, "/0.jpg")
                }
        },
        4419: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSG: function() {
                    return qe
                },
                default: function() {
                    return De
                }
            });
            var o = n(2480),
                i = n(2667),
                r = n(3036),
                l = n(2661),
                a = n(2164),
                C = n(4439),
                c = n(2203),
                d = n(876),
                u = n(6590),
                s = n.n(u),
                v = n(7482),
                h = n(7319),
                m = ["children"],
                p = ["children"],
                f = ["children"],
                g = ["children"],
                y = ["children"],
                b = ["children"],
                k = ["children"],
                x = ["children"],
                w = ["children"],
                Z = ["children"],
                I = ["children"],
                T = ["children"],
                P = ["children"],
                U = ["children"],
                j = ["children"],
                B = ["children"],
                S = ["children"],
                O = ["children"];

            function A(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function _(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? A(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : A(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function H(e) {
                var t = e["data-sourcepos"];
                return t ? {
                    "data-sourcepos": t
                } : {}
            }
            var L = function(e, t) {
                    return {
                        p: function(e) {
                            var t = e.children,
                                n = (0, c.Z)(e, m);
                            return (0, h.tZ)(C.nv, _(_({}, n), {}, {
                                sx: {
                                    py: 2
                                },
                                children: t
                            }))
                        },
                        h1: function(e) {
                            var t = e.children,
                                n = (0, c.Z)(e, p);
                            return (0, h.tZ)(C.X6, _(_({
                                as: "h1",
                                sx: {
                                    py: 2
                                }
                            }, n), {}, {
                                color: "inherit",
                                children: t
                            }))
                        },
                        h2: function(e) {
                            var t = e.children,
                                n = (0, c.Z)(e, f);
                            return (0, h.tZ)(C.X6, _(_({
                                as: "h2",
                                sx: {
                                    py: 2
                                }
                            }, n), {}, {
                                color: "inherit",
                                children: t
                            }))
                        },
                        h3: function(e) {
                            var t = e.children,
                                n = (0, c.Z)(e, g);
                            return (0, h.tZ)(C.X6, _(_({
                                as: "h3",
                                sx: {
                                    py: 2
                                }
                            }, n), {}, {
                                color: "inherit",
                                children: t
                            }))
                        },
                        h4: function(e) {
                            var t = e.children,
                                n = (0, c.Z)(e, y);
                            return (0, h.tZ)(C.X6, _(_({
                                as: "h4",
                                sx: {
                                    py: 2
                                }
                            }, n), {}, {
                                color: "inherit",
                                children: t
                            }))
                        },
                        h5: function(e) {
                            var t = e.children,
                                n = (0, c.Z)(e, b);
                            return (0, h.tZ)(C.X6, _(_({
                                as: "h5",
                                sx: {
                                    py: 2
                                }
                            }, n), {}, {
                                color: "inherit",
                                children: t
                            }))
                        },
                        h6: function(e) {
                            var t = e.children,
                                n = (0, c.Z)(e, k);
                            return (0, h.tZ)(C.X6, _(_({
                                as: "h6",
                                sx: {
                                    py: 2
                                }
                            }, n), {}, {
                                color: "inherit",
                                children: t
                            }))
                        },
                        hr: function() {
                            return (0, h.tZ)(C.iz, {})
                        },
                        a: function(n) {
                            var o = n.children,
                                i = (0, c.Z)(n, x);
                            return (0, h.tZ)(d.Link, _(_({
                                analyticsAction: "link",
                                analyticsCategory: "link",
                                analyticsId: "".concat(e, "-link"),
                                color: "inherit",
                                after: (0, h.tZ)(d.Icon, {
                                    icon: "external",
                                    color: t || "black",
                                    size: 16,
                                    strokeWidth: "3px"
                                }),
                                sx: {
                                    fontSize: "inherit"
                                }
                            }, i), {}, {
                                children: o
                            }))
                        },
                        strong: function(e) {
                            var t = e.children,
                                n = (0, c.Z)(e, w);
                            return (0, h.tZ)(C.xv, _(_({
                                as: "span",
                                sx: {
                                    fontWeight: "bold",
                                    color: "inherit"
                                }
                            }, n), {}, {
                                children: t
                            }))
                        },
                        em: function(e) {
                            var t = e.children,
                                n = (0, c.Z)(e, Z);
                            return (0, h.tZ)(C.xv, _(_({
                                as: "span",
                                sx: {
                                    fontWeight: "italic",
                                    color: "inherit"
                                }
                            }, n), {}, {
                                children: t
                            }))
                        },
                        blockquote: function(e) {
                            var t = e.children,
                                n = (0, c.Z)(e, I);
                            return (0, h.tZ)(d.Quote, _(_({}, n), {}, {
                                children: t
                            }))
                        },
                        ol: function(e) {
                            var t = e.children,
                                n = (0, c.Z)(e, T);
                            return (0, h.tZ)(v.Ge.ol, _(_({
                                sx: {
                                    li: {
                                        color: "black"
                                    },
                                    marginBlockStart: 0
                                }
                            }, H(_(_({}, n), {}, {
                                children: t
                            }))), {}, {
                                children: t
                            }))
                        },
                        ul: function(e) {
                            var t = e.children,
                                n = (0, c.Z)(e, P);
                            return (0, h.tZ)(v.Ge.ul, _(_({
                                sx: {
                                    li: {
                                        color: "black"
                                    },
                                    marginBlockStart: 0
                                }
                            }, H(_(_({}, n), {}, {
                                children: t
                            }))), {}, {
                                children: t
                            }))
                        },
                        li: function(e) {
                            var t = e.children,
                                n = (0, c.Z)(e, U);
                            return (0, h.tZ)(v.Ge.li, _(_({}, H(n)), {}, {
                                children: t
                            }))
                        },
                        table: function(e) {
                            var t = e.children,
                                n = (0, c.Z)(e, j);
                            return (0, h.tZ)(d.Table, _(_({}, H(n)), {}, {
                                children: t
                            }))
                        },
                        th: function(e) {
                            var t = e.children,
                                n = (0, c.Z)(e, B);
                            return (0, h.tZ)(d.TableHeaderCell, _(_({}, H(n)), {}, {
                                children: t
                            }))
                        },
                        tr: function(e) {
                            var t = e.children,
                                n = (0, c.Z)(e, S);
                            return (0, h.tZ)(d.TableRow, _(_({}, H(n)), {}, {
                                children: t
                            }))
                        },
                        td: function(e) {
                            var t = e.children,
                                n = (0, c.Z)(e, O);
                            return (0, h.tZ)(d.TableCell, _(_({}, H(n)), {}, {
                                children: t
                            }))
                        }
                    }
                },
                M = function(e) {
                    var t = e.text,
                        n = e.sectionId,
                        o = e.color;
                    return (0, h.tZ)(s(), {
                        components: L(n, o),
                        children: t
                    })
                },
                G = (0, r.default)((function() {
                    return Promise.resolve().then(n.bind(n, 876)).then((function(e) {
                        return e.Icon
                    }))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [876]
                        },
                        modules: ["../components/Block/Collection/CharacterCarouselBlock/components/CarouselArrow.tsx -> @jagex/space-punks-design"]
                    }
                }),
                q = (0, r.default)((function() {
                    return Promise.resolve().then(n.bind(n, 876)).then((function(e) {
                        return e.Button
                    }))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [876]
                        },
                        modules: ["../components/Block/Collection/CharacterCarouselBlock/components/CarouselArrow.tsx -> @jagex/space-punks-design"]
                    }
                }),
                D = 72 * 1.2,
                X = "flex-start",
                N = function(e) {
                    var t = e.label,
                        n = e.onClick,
                        o = e.type;
                    return (0, h.tZ)(q, {
                        title: t,
                        variant: "tertiaryMedium",
                        onClick: n,
                        sx: {
                            position: "absolute",
                            top: 0,
                            bottom: ["initial", "initial", "initial", 0, 0],
                            zIndex: 1,
                            right: "right" === o ? 0 : "inherit",
                            left: "left" === o ? 0 : "inherit",
                            pt: [300, 300, 300, 0, 0],
                            pb: [200, 200, 200, 0, 0],
                            px: 0,
                            border: 0,
                            width: D,
                            display: "flex",
                            justifyContent: "left" === o ? "flex-end" : X,
                            alignItems: [X, X, X, "center", "center"],
                            svg: {
                                transitionProperty: "height, width",
                                transitionDuration: "0.3s",
                                height: 90,
                                width: 72
                            },
                            "&:hover": {
                                svg: {
                                    height: 108,
                                    width: 72 * 1.2
                                }
                            },
                            "&:active": {
                                svg: {
                                    height: 72,
                                    width: 57.6
                                }
                            },
                            "&:active, &:hover, &:hover:active, &:focus, &:visited": {
                                backgroundColor: "inherit"
                            }
                        },
                        children: (0, h.tZ)(G, {
                            icon: "chevron-".concat(o),
                            preserveAspectRatio: "none",
                            strokeWidth: "2.5px"
                        })
                    })
                },
                F = function(e) {
                    var t = e.style,
                        n = e.backgroundColor;
                    return (0, h.BX)("svg", {
                        style: t,
                        width: "100%",
                        height: "112",
                        viewBox: "0 0 1920 112",
                        fill: "none",
                        preserveAspectRatio: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, h.tZ)("path", {
                            d: "M1920 0.00868497C1917.98 -0.0709363 1912.68 0.415634 1911.23 0.702271C1910.18 0.909286 1909.18 0.606726 1907.57 0.590802C1906.94 0.574877 1906.23 0.62265 1905.37 0.73412C1902.34 1.16407 1901.6 0.41563 1899.66 1.02075C1897.72 1.62587 1895.63 1.41886 1893.65 2.58133C1891.67 3.72788 1889.8 2.6928 1888.31 2.97944C1886.82 3.26608 1884.76 3.05906 1883.83 3.1546C1882.9 3.25015 1877.56 4.18968 1876.07 4.47632C1874.57 4.76295 1873.12 5.03367 1871.55 5.19291C1870.02 5.35215 1869.98 5.89357 1867.3 7.53377C1867.04 7.69301 1866.85 7.82041 1866.62 7.93188C1865.8 7.64524 1864.95 7.59747 1864.09 7.86818C1862.82 8.26629 1859.61 8.64847 1858.94 9.30136C1858.26 9.97018 1857.63 10.0976 1855.73 10.0817C1853.82 10.0657 1853.19 10.0657 1852.52 10.4638C1851.88 10.8619 1850.91 11.26 1849.31 11.3874C1847.7 11.5148 1846.77 11.2441 1845.5 11.3715C1844.23 11.4989 1843.89 12.1677 1842.92 12.2951C1841.95 12.4225 1841.02 12.4225 1839.75 12.5499C1838.63 12.6614 1838 12.7728 1837.21 13.0754C1836.65 13.0595 1836.13 13.1073 1835.42 13.171C1834.19 13.2984 1828.85 13.6805 1828.85 13.6805C1828.85 13.6805 1822.13 12.7092 1821.13 12.6614C1820.12 12.6295 1818.29 12.2633 1817.28 12.2155C1816.27 12.1837 1813.36 12.1996 1811.98 12.0563C1810.6 11.9129 1806.57 10.5435 1805.67 10.0817C1804.78 9.61985 1802.69 9.97019 1799.96 10.3683C1797.24 10.7823 1795.48 10.5435 1793.8 10.432C1792.12 10.3205 1790.93 10.5753 1789.62 11.1167C1788.28 11.6582 1787.2 12.0403 1786.41 12.3907C1785.63 12.741 1783.32 12.6932 1782.05 12.1359C1780.78 11.5785 1776.82 11.5626 1775.4 11.2919C1773.95 11.0212 1769.43 10.5116 1768.05 10.3842C1766.67 10.2409 1764.8 10.432 1762.97 10.6231C1761.11 10.7982 1760.06 11.8652 1760.1 13.0913C1760.14 14.3175 1758.49 14.3493 1757.11 14.206C1755.73 14.0627 1754.58 13.7761 1752.75 13.9512C1750.88 14.1423 1749.2 14.0309 1747.93 13.4735C1746.66 12.9162 1745.47 13.7124 1744.46 14.9067C1743.49 16.101 1741.66 15.1774 1740.84 14.8589C1740.02 14.5404 1738.26 14.3016 1736.55 14.1901C1734.87 14.0786 1733.15 14.5245 1731.81 13.2983C1730.46 12.0722 1728.86 13.3143 1727.4 13.6009C1725.91 13.8875 1724.01 13.3939 1723.19 13.0595C1722.36 12.7251 1719.86 12.9799 1718.33 13.1232C1716.8 13.2824 1715.87 12.8206 1713.78 11.9289C1711.65 11.0371 1709.97 10.9416 1708.55 11.897C1707.14 12.8525 1704.22 11.7855 1704.22 11.7855C1704.22 11.7855 1699.33 12.9639 1698.48 12.6295C1697.65 12.2951 1696.09 11.2282 1693.59 11.4671C1691.12 11.7059 1689.7 12.12 1688.4 12.12C1687.09 12.12 1684.14 12.6773 1684.14 12.6773C1684.14 12.6773 1681.6 12.7888 1678.99 12.7888C1676.38 12.7728 1676.38 12.7729 1675.15 12.3429C1673.95 11.9129 1672.01 11.4193 1672.01 11.4193C1672.01 11.4193 1668.69 11.3397 1666.53 11.5467C1664.36 11.7696 1661.64 12.1677 1660.26 12.5818C1658.84 12.9958 1656.07 12.7251 1655.74 12.0722C1655.4 11.4193 1654.25 11.1327 1652.27 11.7218C1650.33 12.327 1649.73 11.8333 1649.43 11.3237C1649.13 10.7982 1648.09 10.639 1645.59 10.8779C1643.12 11.1167 1641.89 10.7027 1642.56 11.3078C1643.23 11.9289 1640.92 11.8811 1640.92 11.8811C1640.92 11.8811 1637.64 11.2441 1636.93 11.7218C1636.22 12.1996 1635.51 12.1359 1633.98 12.2951C1632.45 12.4544 1630.62 11.5308 1629.8 11.2123C1628.98 10.8779 1626.18 11.1645 1626.85 11.7855C1627.52 12.4066 1627.97 13.8557 1626.59 14.2697C1625.17 14.6838 1624.12 14.5086 1622.86 14.636C1621.62 14.7634 1621.14 15.0819 1619.61 15.2252C1618.08 15.3844 1617.52 15.5755 1616.55 16.2125C1615.58 16.8495 1614.72 17.0724 1613.49 17.1998C1612.26 17.3272 1610.54 17.7731 1609.01 17.9164C1607.44 18.0597 1607.44 18.6171 1606.69 19.6521C1605.95 20.6872 1604.98 20.098 1603 20.0184C1600.98 19.9388 1602.33 19.3973 1601.13 18.9674C1599.94 18.5374 1598.82 19.477 1597.4 19.891C1595.98 20.305 1594.86 19.461 1594.86 19.461C1594.86 19.461 1591.76 20.305 1590.27 21.1331C1590.16 21.0535 1590.01 20.9579 1589.75 20.8624C1587.88 20.1935 1584.37 19.6362 1584.37 19.6362C1584.37 19.6362 1583.7 20.5598 1582.13 20.2891C1580.57 20.0184 1579 19.2062 1578.03 19.7317C1577.06 20.2572 1578.63 20.6713 1576.72 20.9261C1574.82 21.1809 1574.15 21.8497 1572.91 20.9101C1571.68 19.9706 1571.38 19.4292 1569.78 19.4292C1568.17 19.4133 1566.31 19.1426 1565.04 19.1426C1563.77 19.1266 1562.8 18.9992 1561.57 18.4578C1560.3 17.9164 1559.66 17.789 1558.1 17.7731C1556.49 17.7571 1555.89 17.5024 1554.63 17.4864C1553.36 17.4705 1552.39 17.7412 1550.82 17.4705C1549.25 17.1998 1548.95 15.7348 1549.29 15.0659C1549.62 14.3971 1546.79 14.3812 1546.12 14.7793C1545.48 15.1774 1544.17 16.2284 1542.57 16.2284C1540.96 16.2284 1540.33 16.3558 1539.4 15.9418C1538.46 15.5437 1535.55 16.4514 1535.55 16.4514C1535.55 16.4514 1533.31 16.7061 1533.65 16.0373C1533.98 15.3685 1533.01 15.894 1530.48 15.894C1527.94 15.8781 1526.97 16.1329 1526.97 16.6743C1526.97 17.2157 1526.63 17.7412 1524.39 17.3272C1522.19 16.9132 1521.22 17.3113 1521.18 17.9801C1521.14 18.6489 1518.61 19.1585 1517.04 18.8878C1515.47 18.617 1512.6 18.4578 1510.4 18.4578C1508.16 18.4419 1504.98 18.8241 1504.98 18.8241C1504.98 18.8241 1503.38 19.477 1502.41 20.0025C1501.44 20.528 1501.44 20.528 1498.9 20.7828C1496.36 21.0375 1493.79 21.149 1493.79 21.149C1493.79 21.149 1490.61 20.8624 1489.34 20.9898C1488.07 21.1172 1486.51 20.8464 1483.93 20.8305C1481.39 20.8146 1480.39 22.0089 1479.75 22.407C1479.12 22.8051 1473.74 22.1045 1473.74 22.1045C1473.74 22.1045 1471.47 23.4262 1469.6 22.614C1467.73 21.8019 1466.13 22.0567 1464.49 23.1236C1462.88 24.1746 1462.21 24.716 1460.6 24.7001C1459 24.7001 1456.46 24.6842 1455.83 25.0823C1455.19 25.4804 1453.55 26.1333 1451.98 25.99C1450.41 25.8467 1448.21 24.7638 1447.54 26.1014C1446.87 27.4232 1444.96 27.1524 1443.36 27.4072C1441.75 27.662 1440.15 28.0601 1439.52 28.4582C1438.88 28.8563 1437.57 29.9073 1436.01 28.8404C1434.44 27.7576 1432.87 27.0888 1431.9 27.7576C1430.93 28.4264 1429.33 28.6812 1427.42 28.6653C1425.52 28.6493 1424.55 29.0474 1423.28 29.3022C1422.01 29.557 1420.4 29.6844 1419.81 28.4901C1419.21 27.2798 1417.64 26.3403 1415.74 26.3403C1413.84 26.3244 1411.93 26.3244 1410.66 26.5792C1409.39 26.834 1405.21 27.7416 1403.94 28.1397C1402.68 28.5379 1398.83 28.9041 1397.86 29.5729C1396.89 30.2258 1394.65 30.4965 1393.72 30.2099C1392.78 29.9392 1391.52 29.6685 1389.95 29.2545C1388.38 28.8404 1387.11 28.6971 1385.51 28.9678C1383.9 29.2226 1382.3 29.6207 1379.46 29.4615C1376.62 29.3181 1374.38 29.1748 1373.75 29.7003C1373.11 30.2258 1369.87 31.9456 1368.6 32.2004C1367.33 32.4552 1364.45 32.71 1363.48 32.8374C1362.51 32.9648 1360.91 33.4903 1359.98 33.6177C1359.01 33.7451 1352.92 35.3057 1352.92 35.3057C1352.92 35.3057 1347.51 35.4171 1346.24 35.4012C1344.97 35.4012 1344.34 35.3853 1343.03 35.7834C1342.99 35.7993 1342.99 35.7993 1342.96 35.8152C1342.62 35.7993 1342.25 35.7834 1341.84 35.7834C1340.53 35.7834 1339.6 35.863 1338.59 35.8312C1337.58 35.7993 1336.91 35.1783 1335.6 35.1623C1334.3 35.1623 1333.51 35.5127 1331.91 35.5286C1330.3 35.5445 1329.15 35.2579 1328.32 34.9235C1327.5 34.5891 1326.87 34.6528 1325 34.8439C1323.14 35.035 1322.46 34.9553 1321.49 34.3661C1320.52 33.7769 1317.2 33.6973 1315.75 33.4266C1315.07 33.2992 1314.51 33.3311 1313.99 33.4585C1313.58 33.2992 1313.06 33.0922 1312.31 32.8056C1308.88 31.452 1308.54 30.9265 1306.97 30.9106C1305.37 30.9106 1303.8 30.7673 1302.23 30.6239C1300.67 30.4806 1294.96 30.0507 1293.99 30.0507C1293.01 30.0507 1291.11 30.4328 1289.54 30.2895C1287.98 30.1462 1286.63 31.3405 1284.13 30.401C1281.63 29.4615 1279.69 29.8437 1277.49 29.4296C1275.29 29.0156 1274.95 29.8118 1271.74 29.6685C1268.57 29.5252 1267.6 30.3055 1265.99 30.1781C1264.42 30.0347 1262.18 29.764 1260.28 30.0188C1258.38 30.2736 1256.73 30.9265 1255.17 30.9265C1253.56 30.9106 1253.6 31.4202 1251.06 31.5316C1248.52 31.659 1248.19 31.2768 1246.28 31.5475C1244.38 31.8023 1245.05 33.1718 1243.15 32.6304C1241.24 32.089 1239.9 31.8342 1238.18 32.4552C1236.77 32.9648 1235.09 33.347 1233.71 33.6018C1233.37 33.5699 1233.03 33.554 1232.7 33.554C1230.5 33.4903 1229.23 33.3151 1227.96 33.4107C1226.65 33.5062 1226.02 33.4903 1223.81 33.4266C1221.57 33.3629 1220.68 33.2037 1219.37 33.2992C1218.07 33.3948 1216.76 33.6177 1214.3 33.2833C1211.8 32.9489 1208.96 32.8533 1207.32 33.0763C1205.67 33.2992 1202.99 34.1591 1201.98 34.5254C1200.97 34.8916 1199.96 35.2738 1198.66 35.3694C1197.35 35.4649 1196.08 35.4331 1195.37 36.07C1194.63 36.7229 1194.25 36.9777 1192.98 37.0732C1191.68 37.1688 1187.53 37.3121 1185.63 37.2643C1183.73 37.2006 1181.49 37.2803 1180.18 37.5032C1178.87 37.7262 1177.49 38.2198 1175.33 38.0287C1173.13 37.8376 1174.58 36.8025 1172.34 36.7388C1170.14 36.6751 1166.41 38.0287 1164.77 38.395C1163.12 38.7453 1160.77 39.3504 1159.5 39.3027C1158.23 39.2708 1157 38.9682 1155.32 39.446C1153.64 39.9396 1151.48 39.6052 1151.48 39.6052C1151.48 39.6052 1150.77 38.1083 1149.43 38.4746C1148.08 38.8409 1146.85 40.6721 1146.85 40.6721C1146.85 40.6721 1144.57 41.0065 1143.64 40.8473C1142.71 40.6881 1138.75 39.6371 1137.44 39.86C1136.14 40.0829 1135.43 40.4651 1135.35 40.8632C1135.28 41.2613 1135.17 42.0575 1133.9 42.0257C1132.63 41.9938 1131.77 41.4206 1130.8 41.4046C1129.87 41.3728 1128.78 42.1531 1127.81 42.2486C1126.84 42.3601 1129.61 41.1021 1126.73 41.0225C1123.9 40.9429 1121.66 40.8792 1120.83 42.0575C1120.01 43.2359 1117.44 43.2996 1116.17 43.2519C1114.9 43.22 1112.4 42.8697 1111.09 43.1085C1109.79 43.3315 1108.44 43.6977 1106.54 43.65C1104.64 43.6022 1102.4 43.6659 1101.09 43.7614C1099.78 43.857 1098.7 44.7647 1096.91 44.0322C1095.12 43.3156 1093.7 42.2009 1091.12 42.392C1088.55 42.583 1088.4 43.3793 1087.39 43.7455C1086.38 44.1118 1085.3 44.7488 1083.85 44.0481C1082.39 43.3315 1081.83 42.6467 1079.55 42.9811C1077.28 43.3156 1073.73 43.6181 1072.16 43.427C1070.59 43.2519 1069.4 42.6786 1068.09 43.0448C1066.75 43.4111 1064.36 44.5417 1062.76 44.494C1061.19 44.4462 1061.19 44.3188 1059.32 44.0003C1057.46 43.6818 1055.89 43.5067 1054.88 44.0003C1053.84 44.5099 1053.09 45.1468 1051.52 45.0991C1049.95 45.0513 1049.84 45.5768 1048.54 45.8157C1047.23 46.0386 1045.92 46.1342 1045.06 45.5768C1044.21 45.0195 1042.68 46.4367 1041.11 46.389C1039.5 46.3412 1039.28 45.7997 1038.05 45.6246C1036.82 45.4494 1032.49 46.5323 1030.51 46.8667C1028.53 47.217 1026.96 47.1692 1024.76 46.9622C1022.56 46.7711 1018.08 46.8985 1016.77 47.1374C1015.47 47.3603 1014.12 47.854 1012.18 47.9336C1010.28 48.0132 1009.98 47.7425 1008.75 47.5673C1007.52 47.3922 1005.95 47.0896 1004.27 47.5673C1002.59 48.0451 1002.29 48.0451 999.491 47.5673C996.692 47.0896 994.116 47.2807 992.847 47.3762C991.541 47.4718 989.936 47.5514 988.704 47.3922C987.473 47.217 985.569 47.0259 983.665 47.1055C981.724 47.1852 979.895 46.8667 978.514 47.3603C977.171 47.854 973.886 48.2998 973.028 47.8699C972.132 47.4399 970.938 47.01 968.325 47.4718C965.712 47.9336 963.771 48.1406 962.801 48.1088C961.868 48.0769 958.359 48.1088 956.455 47.9177C954.589 47.7266 952.275 48.2043 951.305 48.2999C950.334 48.4113 947.684 49.1279 945.146 49.0483C942.608 48.9687 939.771 48.889 939.025 49.5419C938.278 50.1948 936.188 51.1981 935.255 51.1662C934.322 51.1344 933.426 50.577 932.194 50.4019C930.962 50.2267 925.886 50.0834 924.543 50.4496C923.199 50.8159 924.132 51.1025 922.751 51.5962C921.407 52.0898 921.071 52.0739 919.168 52.0261C917.264 51.9784 915.659 51.9306 915.099 51.5006C914.539 51.0866 912.375 50.6248 910.732 50.8318C909.09 51.0547 907 52.1854 905.992 52.5676C905.469 52.7586 904.76 52.9816 904.051 53.1568C903.155 52.7746 902.036 52.8701 900.878 52.8701C899.572 52.8542 898.415 52.5675 897.295 52.265C896.138 51.9624 893.19 51.3095 891.473 51.1981C889.793 51.0866 886.994 51.3732 884.68 51.8669C882.328 52.3765 880.984 52.2331 879.641 52.2331C878.633 52.2331 877.924 52.3605 876.655 52.5039C876.244 52.5516 875.834 52.5994 875.311 52.6631C873.146 52.8701 872.511 52.9338 871.205 52.9338C869.899 52.9179 868.742 53.1727 866.577 53.3956C866.278 53.4275 865.942 53.4752 865.606 53.523C864.151 53.3638 862.322 53.0931 860.754 52.695C858.851 52.2013 857.582 52.5516 855.939 53.2045C854.26 53.8733 854.446 52.472 852.468 52.3605C850.49 52.2331 850.303 52.6153 847.728 52.679C845.152 52.7268 845.003 52.2491 843.435 52.3605C841.868 52.472 840.039 51.9306 838.061 51.8191C836.083 51.6917 833.992 52.1217 832.499 52.3605C830.969 52.6153 829.737 51.8987 826.639 52.2491C823.578 52.6153 822.907 51.851 820.891 52.4083C818.876 52.9657 816.823 52.7109 814.695 53.8096C812.568 54.9084 810.813 53.8256 809.32 54.0804C807.827 54.3351 805.774 54.0804 804.841 54.1441C803.908 54.2077 798.422 55.0199 796.929 55.2747C795.398 55.5135 793.905 55.7683 792.338 55.8798C790.77 55.9913 790.658 56.5486 787.784 58.1092C784.873 59.6857 785.656 59.208 784.686 59.9564C783.715 60.7048 780.095 61.3737 779.087 61.9947C778.042 62.6157 777.109 62.6794 776.4 63.2846C775.691 63.8738 774.347 64.5267 773.376 64.5904C772.443 64.6541 769.644 65.5936 769.644 65.5936C769.644 65.5936 767.778 66.0713 766.583 66.3739C765.389 66.6764 763.635 65.9917 763.149 65.6254C762.664 65.2592 762.552 64.9885 761.507 64.7974C760.462 64.6063 759.977 63.4279 758.558 63.1253C757.14 62.8228 756.506 62.8705 755.274 62.9661C754.005 63.0616 748.63 63.3323 748.63 63.3323C748.63 63.3323 742.023 62.2017 741.053 62.138C740.045 62.0743 738.291 61.6762 737.283 61.6125C736.276 61.5488 733.364 61.5011 731.983 61.3259C730.639 61.1507 726.795 59.6857 725.936 59.208C725.115 58.7302 722.95 59.0169 720.188 59.3672C717.426 59.7175 715.709 59.4309 714.03 59.2876C712.35 59.1443 711.156 59.3672 709.737 59.8768C708.319 60.3864 707.199 60.7367 706.341 61.0711C705.52 61.4055 703.206 61.31 702.011 60.7208C700.817 60.1316 696.898 60.0201 695.479 59.7175C695.106 59.6379 694.509 59.5424 693.837 59.4309C691.933 59.1283 689.283 58.7621 688.276 58.6347C686.932 58.4595 685.028 58.6028 683.162 58.7462C681.296 58.8895 680.101 59.9246 679.952 61.1507C679.915 61.4692 679.765 61.6921 679.579 61.8673C679.131 61.5648 679.056 61.2144 676.742 61.1348C673.569 61.0393 675.324 62.0266 672.002 60.8641C668.68 59.7016 672.077 60.3386 668.68 59.7016C666.553 59.3035 666.44 60.3227 666.291 61.1189C665.769 61.2463 665.283 61.5488 664.798 61.9469C663.604 61.8036 662.745 61.4374 661.7 61.294C660.468 61.1189 658.639 61.6603 658.639 61.6603C658.639 61.6603 657.968 61.7718 656.176 61.1826C654.347 60.5934 654.384 60.466 652.817 60.4182C652.294 60.4023 651.734 60.3386 651.174 60.2749C650.876 60.1316 650.54 60.0997 650.167 60.1156C649.532 60.0042 649.084 59.9086 649.084 59.9086C649.084 59.9086 647.703 60.5456 644.531 60.4501C644.232 60.4341 643.933 60.4341 643.672 60.4341C643.485 60.3704 643.299 60.2908 643.15 60.2271C642.59 59.9883 641.209 60.0042 639.865 60.0838C639.865 60.0679 639.828 60.0679 639.828 60.0519C638.969 59.3513 638.671 59.2239 636.506 59.0169C635.162 58.8895 634.49 58.9372 633.93 58.9054C632.848 58.3958 631.877 58.1251 630.944 58.1251C630.16 58.1251 629.414 58.3162 628.705 58.7462C627.137 59.6698 624.412 58.5232 624.412 58.5232C624.412 58.5232 619.373 59.5742 618.59 59.2239C617.806 58.8736 616.387 57.7589 613.887 57.9499C611.386 58.141 609.93 58.5232 608.624 58.4755C607.318 58.4436 604.294 58.9373 604.294 58.9373C604.294 58.9373 601.719 59.0009 599.106 58.9213C596.493 58.8417 596.493 58.8417 595.336 58.3958C594.179 57.934 592.35 57.4085 592.35 57.4085C592.35 57.4085 589.066 57.2493 586.863 57.4085C584.661 57.5678 581.899 57.9181 580.444 58.2844C578.988 58.6665 576.263 58.3321 576.002 57.6633C575.741 57.0104 574.621 56.676 572.605 57.2334C570.59 57.7907 570.067 57.2971 569.843 56.7556C569.619 56.2301 568.574 56.039 566.073 56.2301C563.573 56.4212 562.416 55.9594 563.013 56.5964C563.61 57.2334 561.296 57.1378 561.296 57.1378C561.296 57.1378 558.086 56.4371 557.302 56.883C556.518 57.3448 555.846 57.2652 554.279 57.3767C554.055 57.3926 553.868 57.3926 553.644 57.3767C552.263 57.2493 550.919 56.5008 550.248 56.1983C549.464 55.8479 546.627 56.055 547.224 56.6919C547.336 56.8352 547.486 57.0263 547.56 57.2174C547.859 57.9181 547.784 58.8736 546.627 59.1602C545.172 59.5424 544.126 59.3513 542.857 59.4468C541.588 59.5424 541.103 59.8449 539.535 59.9564C537.968 60.0679 537.408 60.259 536.363 60.8641C535.318 61.4851 534.459 61.6921 533.19 61.7718C531.958 61.8673 530.167 62.2654 528.599 62.3769C527.032 62.4884 526.92 63.0457 526.061 64.0489C525.203 65.0681 524.307 64.447 522.291 64.3356C520.313 64.2082 521.694 63.6986 520.537 63.2527C519.38 62.7909 518.148 63.6986 516.692 64.0808C515.237 64.463 514.229 63.5871 514.229 63.5871C514.229 63.5871 511.019 64.3674 509.377 65.1636C507.772 65.9598 510.87 66.4057 509.451 66.9153C508.033 67.4249 507.734 67.4567 506.428 68.2211C505.122 69.0014 505.495 69.0969 504.3 69.3199C503.106 69.5428 503.106 70.355 502.621 71.4697C502.098 72.5844 500.008 72.2022 500.008 72.2022C500.008 72.2022 497.209 73.2213 496.052 74.3838C494.932 75.5463 492.132 74.2723 492.132 74.2723C492.132 74.2723 489.818 73.3646 488.736 73.0302C487.616 72.7117 485.041 73.4443 484.22 73.7787C483.398 74.1131 480.674 73.7787 479.405 73.8742C478.136 73.9698 477.165 73.9061 475.784 73.7309C474.44 73.5557 474.067 73.4602 471.38 73.2532C468.692 73.0462 468.357 73.7468 467.05 73.715C465.744 73.6831 464.549 73.9061 463.43 73.5717C462.31 73.2532 461.265 73.0621 460.332 73.1258C459.399 73.1895 457.831 73.3169 456.786 73.1258C455.741 72.9347 453.016 71.7881 451.71 71.7404C450.403 71.7085 448.126 72.4092 446.335 72.8073C444.543 73.2054 443.61 73.285 443.162 73.715C442.714 74.1609 439.766 74.0971 437.825 73.3009C435.884 72.5047 437.825 73.3009 435.884 73.3169C433.943 73.3328 433.42 72.8232 432.487 72.8869C431.554 72.9506 430.546 73.699 429.725 74.0334C428.904 74.3679 427.336 74.4793 426.441 73.8742C425.545 73.2691 425.843 73.2373 424.798 73.0462C423.753 72.8551 420.767 72.664 418.789 73.3487C416.811 74.0334 416.139 73.9538 414.609 74.1927C413.078 74.4475 411.959 73.9857 411.137 73.6353C410.354 73.285 408.077 74.0016 408.973 74.6067C409.868 75.2118 408.861 75.1641 407.741 75.5144C406.584 75.8647 405.987 75.9125 404.718 76.0081C403.448 76.1036 402.851 76.1514 401.433 75.8488C400.015 75.5463 399.081 75.6259 397.812 75.7055C396.543 75.801 393.856 75.4666 392.773 75.2596C391.728 75.0685 391.579 75.4826 389.825 76.6928C388.071 77.9031 389.825 76.6928 388.743 77.1865C387.66 77.6801 386.466 77.903 385.346 78.3808C384.263 78.8744 383.853 78.6356 381.688 78.9222C379.561 79.2088 379.299 79.3681 378.627 80.1006C377.956 80.8331 377.172 80.4828 374.036 80.7057C370.901 80.9446 369.371 80.3713 369.371 80.3713C369.371 80.3713 367.355 80.9287 365.788 81.0401C364.22 81.1516 364.257 81.2949 362.615 81.9478C360.935 82.6166 360.264 82.5211 360.264 82.5211C360.264 82.5211 358.323 82.0593 357.128 82.2822C355.934 82.5051 355.113 83.0306 353.545 83.1421C351.977 83.2536 353.023 80.228 349.775 81.0083C346.565 81.7886 349.775 81.0083 346.752 82.3141C343.729 83.6199 345.259 82.5529 342.123 82.7918C338.988 83.0307 340.22 83.6039 338.727 83.9861C337.271 84.3683 336.002 83.6517 334.957 83.4606C333.912 83.2695 332.232 83.1262 332.232 83.1262C332.232 83.1262 330.889 81.8523 329.956 81.7567C328.649 81.6134 326.111 81.8363 325.178 81.9C324.245 81.9637 322.416 80.9446 321.819 80.3235C321.221 79.6866 318.31 80.3395 318.31 80.3395C318.31 80.3395 318.012 81.7408 316.631 81.5816C315.287 81.4064 314.316 80.6739 313.309 80.6102C312.301 80.5465 311.368 79.814 310.882 79.4318C310.397 79.0655 307.523 78.333 307.523 78.333C307.523 78.333 306.217 77.489 304.463 77.2024C302.746 76.9317 301.701 76.7406 300.282 76.438C298.864 76.1355 297.931 76.2151 295.617 76.1036C293.303 76.0081 293.414 75.4507 291.585 74.9093C289.757 74.3679 288.264 75.4348 288.264 75.4348C288.264 75.4348 286.024 75.4666 284.494 75.7055C283.001 75.9603 279.753 75.9284 278.783 75.9921C277.85 76.0558 275.872 75.9444 275.872 75.9444C275.872 75.9444 273.259 75.8647 271.915 75.7055C270.571 75.5303 270.236 74.75 269.452 74.3997C268.668 74.0494 267.586 74.543 265.682 74.6863C263.816 74.8297 263.368 74.5908 262.286 74.2564C261.203 73.9379 260.494 73.8424 259.187 73.8105C257.881 73.7787 256.948 73.8424 255.94 73.7787C254.932 73.715 254.372 73.078 253.066 73.0462C251.76 73.0143 250.939 73.3328 249.296 73.3328C247.691 73.3169 246.571 72.9984 245.788 72.648C245.004 72.2977 244.369 72.3455 242.503 72.4888C240.637 72.6321 239.965 72.5366 239.069 71.9314C238.173 71.3263 234.889 71.1671 233.47 70.8645C232.052 70.562 230.932 70.9123 229.999 71.8041C229.066 72.6799 228.432 71.9155 226.827 71.8996C225.222 71.8837 224.998 71.3582 223.729 71.4537C222.46 71.5493 219.735 70.4027 218.578 69.9409C217.421 69.4791 216.973 69.925 215.965 70.6734C214.995 71.4219 213.8 70.1479 212.979 69.6702C212.121 69.1925 211.971 68.7944 210.031 68.8103C208.09 68.8262 207.53 69.0014 208.164 69.7658C208.799 70.5301 207.828 70.4664 205.887 70.4823C203.946 70.4983 202.752 70.7212 201.184 70.8327C199.617 70.9442 199.99 71.8678 197.974 72.4251C195.959 72.9825 194.429 73.2372 193.197 74.129C191.965 75.0367 191.555 74.7978 189.651 74.9411C187.785 75.0844 186.553 75.3074 185.284 76.0718C183.978 76.8361 183.418 77.0113 182.149 77.1068C180.88 77.2024 179.648 77.2979 177.819 77.5686C175.99 77.8393 175.841 78.2534 174.348 78.5082C172.818 78.747 170.541 78.6515 169.533 78.5878C168.525 78.5241 167.069 78.9063 165.427 79.5751C163.747 80.2439 163.225 79.7343 161.919 79.7025C161.695 79.7025 91.4999 88.6293 87.9999 88.9L-0.000106812 89.6H1920V0.00868497Z",
                            fill: "white"
                        }), (0, h.tZ)("path", {
                            id: "fill-area",
                            d: "M1920 0.140781C1919.44 0.17263 1918.28 -0.0503102 1917.72 0.140781C1916.15 0.69813 1915.85 0.698134 1912.98 0.331876C1910.11 -0.0343816 1907.57 0.252254 1906.3 0.411496C1905.03 0.554814 1903.46 0.714058 1902.19 0.586664C1900.92 0.475194 1898.98 0.347801 1897.12 0.507044C1895.21 0.666286 1893.31 0.411494 1892.04 0.968843C1890.81 1.51027 1887.64 2.08354 1886.67 1.70136C1885.69 1.31918 1884.39 0.921073 1881.89 1.49435C1879.39 2.05169 1877.48 2.33833 1876.51 2.35426C1875.54 2.37018 1872.07 2.52942 1870.17 2.41795C1868.26 2.30648 1866.06 2.86383 1865.13 3.00715C1864.2 3.15047 1861.69 3.97853 1859.16 4.01037C1856.62 4.04222 1853.74 4.07408 1853.15 4.74289C1852.55 5.41171 1850.68 6.49456 1849.75 6.51048C1848.82 6.52641 1847.81 6.00091 1846.54 5.87351C1845.27 5.76204 1840.2 5.80981 1838.93 6.22384C1837.7 6.63788 1838.67 6.89267 1837.4 7.43409C1836.16 7.97551 1835.83 7.97552 1833.93 8.00736C1832.02 8.02329 1830.42 8.03921 1829.78 7.65703C1829.11 7.25892 1826.87 6.89267 1825.3 7.1793C1823.74 7.46594 1821.91 8.67618 1820.97 9.09021C1820.04 9.50424 1818.47 10.0457 1817.54 10.0616C1816.57 10.0775 1815.64 9.95013 1813.73 10.2368C1811.83 10.5234 1808.69 10.9533 1808.69 10.9533C1808.69 10.9533 1803.58 10.603 1801.68 10.4915C1799.77 10.3801 1798.17 10.5234 1796.9 10.5393C1795.63 10.5552 1794.36 10.6986 1793.09 10.4438C1791.82 10.189 1790.18 9.8068 1787.94 9.56793C1785.7 9.32907 1784.73 9.20169 1783.16 9.21761C1781.56 9.23354 1780.59 8.70803 1778.39 9.40869C1776.18 10.0934 1774.58 9.85457 1774.24 9.45647C1773.91 9.05836 1771 8.4214 1769.73 8.58064C1768.46 8.72396 1768.16 9.26538 1766.22 8.75581C1764.28 8.24623 1762.67 7.99144 1761.74 8.13476C1760.81 8.27807 1758.6 8.56471 1757 8.45324C1755.39 8.34177 1755.06 7.94367 1753.15 7.8322C1751.25 7.72073 1749.98 7.73665 1748.71 7.75258C1747.44 7.7685 1746.81 7.64111 1745.17 6.98821C1743.52 6.33532 1742.26 6.22385 1740.35 6.23977C1738.45 6.2557 1738.15 6.52641 1736.51 5.74612C1734.86 4.96583 1733.26 4.85436 1731.02 4.47218C1728.78 4.09 1728.71 3.16639 1727.14 3.18231C1725.57 3.19824 1724.26 3.08677 1722.36 3.23009C1720.46 3.38933 1719.52 3.53265 1719.79 2.72051C1720.05 1.9243 1719.41 1.7969 1717.51 1.94022C1715.61 2.09947 1715.64 2.49757 1715.01 3.03899C1714.41 3.58042 1713.85 4.91806 1712.54 4.26516C1711.24 3.61227 1710.57 3.21416 1709.67 3.75559C1708.74 4.29701 1706.61 5.65057 1705.34 5.6665C1704.07 5.68242 1704.11 6.20792 1702.5 6.36716C1700.94 6.52641 1700.64 7.32262 1699.33 6.54233C1698.03 5.76204 1696.72 5.50726 1695.49 5.92129C1694.26 6.33532 1691.08 6.76527 1690.49 7.45001C1689.89 8.11883 1689.25 8.26215 1687.35 8.27807C1685.45 8.294 1684.81 8.30992 1684.18 8.70803C1683.58 9.12206 1682.65 9.52016 1681.04 9.6794C1679.47 9.82272 1678.5 9.56794 1677.23 9.72719C1675.97 9.87051 1675.7 10.5393 1674.73 10.6826C1673.8 10.826 1672.83 10.8419 1671.56 10.9852C1670.29 11.1285 1669.66 11.2718 1668.73 11.6859C1667.79 12.0999 1667.49 12.3706 1665.59 12.3865C1663.69 12.4025 1662.38 12.0203 1661.78 12.4343C1661.19 12.8483 1661.22 13.6445 1659.95 13.9153C1658.68 14.186 1656.18 14.4885 1656.18 14.4885C1656.18 14.4885 1654.28 14.7752 1653.35 14.7911C1652.38 14.807 1649.24 15.1096 1647.64 14.9822C1646.03 14.8707 1643.83 15.03 1643.83 15.03C1643.83 15.03 1641.89 14.1223 1640.32 14.807C1638.75 15.4918 1639.13 16.0173 1636.92 16.3039C1634.72 16.5905 1633.75 16.6065 1632.52 17.0205C1631.29 17.4345 1630.32 17.7052 1628.75 18.1193C1627.18 18.5333 1626.29 19.4728 1626.29 19.4728C1626.29 19.4728 1623.79 20.4283 1623.49 20.8423C1623.19 21.2404 1622.59 22.0525 1621.66 22.1959C1620.72 22.3392 1620.13 23.1513 1618.86 23.422C1617.59 23.7087 1616.66 22.3551 1616.66 22.3551C1616.66 22.3551 1613.48 21.957 1613.19 22.6258C1612.92 23.2946 1611.58 24.4412 1610.61 24.4571C1609.68 24.473 1607.1 24.473 1605.87 24.7119C1604.97 24.8871 1604.26 26.2566 1604.26 26.2566C1604.26 26.2566 1602.7 26.5432 1601.76 26.8139C1600.83 27.0846 1599.94 27.8967 1598.33 27.6579C1596.73 27.4031 1597.62 26.7343 1594.45 26.7661C1591.28 26.798 1593.22 27.7057 1589.67 26.6865C1586.12 25.6514 1589.63 26.161 1586.12 25.6514C1582.62 25.1578 1585.01 28.056 1583.4 28.0719C1581.83 28.0878 1580.75 27.642 1579.48 27.5305C1578.21 27.4031 1576.49 28.0241 1576.49 28.0241C1576.49 28.0241 1575.86 28.1675 1573.92 27.6579C1571.98 27.1483 1571.98 27.0209 1570.37 27.0368C1568.77 27.0528 1566.53 26.6706 1566.53 26.6706C1566.53 26.6706 1565.3 27.3553 1562.12 27.3872C1558.95 27.419 1558.32 27.8331 1557.35 27.1802C1556.34 26.5273 1556.04 26.3999 1553.8 26.2884C1551.56 26.1769 1551.26 26.4476 1549.99 26.0655C1548.69 25.6833 1547.42 25.5559 1546.11 25.1737C1544.81 24.7915 1547.12 25.8266 1544.81 24.7915C1542.53 23.7564 1542.19 23.3583 1541.26 23.629C1540.33 23.8998 1537.79 24.473 1536.52 24.473C1535.25 24.489 1534.28 24.489 1533.05 24.903C1531.82 25.317 1531.18 25.317 1529.91 25.3329C1528.64 25.3489 1528.01 25.3489 1526.7 25.0941C1525.43 24.8393 1524.46 24.9826 1525.06 24.3138C1525.66 23.645 1523.08 23.1354 1522.49 23.5494C1521.89 23.9635 1520.96 24.5049 1519.35 24.3775C1517.75 24.266 1517.15 24.3934 1514.87 23.8998C1512.63 23.3902 1509.8 23.8201 1508.82 24.1068C1507.89 24.3775 1508.19 24.3775 1507.59 25.0622C1507 25.7311 1505.39 25.747 1504.42 25.4922C1503.45 25.2374 1502.14 24.5845 1501.21 24.6004C1500.24 24.6164 1499.98 25.1419 1498.08 25.3011C1496.17 25.4603 1497.7 24.5049 1496.17 25.4603C1494.64 26.4158 1491.8 26.7024 1491.13 26.3203C1490.46 25.9221 1489.53 25.9381 1487.59 25.6992C1485.68 25.4603 1483.11 24.9508 1481.84 25.0941C1480.57 25.2374 1478.44 26.591 1477.47 26.8776C1476.54 27.1483 1474.93 27.1642 1474 27.1802C1473.07 27.1961 1472.1 27.4668 1471.16 27.8808C1470.23 28.2948 1468.96 28.1675 1467.69 28.3108C1466.42 28.4541 1465.75 27.8012 1463.25 28.2312C1460.75 28.6611 1460.41 28.7885 1459.18 29.0751C1457.91 29.3618 1456.98 29.5051 1455.71 29.521C1454.44 29.537 1451.94 30.0943 1450.97 29.8395C1450 29.5847 1447.13 29.0751 1446.19 29.4892C1445.26 29.9032 1443.43 30.9861 1443.43 30.9861C1443.43 30.9861 1441.3 32.467 1439.62 31.4319C1437.98 30.3809 1434.73 29.6166 1434.73 29.6166C1434.73 29.6166 1432.87 30.1739 1431.86 29.107C1430.85 28.056 1430.48 27.2598 1429.21 27.1324C1427.94 27.0209 1428.24 26.8776 1426.6 26.2247C1424.99 25.5718 1424.66 25.5877 1423.05 25.2055C1421.45 24.8234 1424.28 24.1227 1422.31 23.4857C1420.36 22.8328 1416.86 22.3392 1416.86 22.3392C1416.86 22.3392 1416.26 23.2787 1414.65 23.0239C1413.05 22.7691 1411.41 21.9889 1410.51 22.5303C1409.58 23.0717 1411.18 23.4539 1409.32 23.7405C1407.41 24.0272 1406.82 24.696 1405.51 23.7883C1404.2 22.8647 1403.83 22.3392 1402.26 22.3551C1400.66 22.371 1398.75 22.1322 1397.48 22.1322C1396.22 22.1481 1395.24 22.0207 1393.94 21.4952C1392.63 20.9856 1392 20.8582 1390.39 20.8742C1388.79 20.8901 1388.15 20.6353 1386.88 20.6512C1385.62 20.6671 1384.68 20.9379 1383.08 20.699C1381.47 20.4442 1381.06 18.9951 1381.36 18.3263C1381.66 17.6574 1378.78 17.6893 1378.19 18.0874C1377.59 18.5014 1376.36 19.5684 1374.79 19.5843C1373.19 19.6002 1372.59 19.7435 1371.62 19.3454C1370.65 18.9633 1367.85 19.9187 1367.85 19.9187C1367.85 19.9187 1365.65 20.2053 1365.91 19.5365C1366.21 18.8677 1365.27 19.4091 1362.73 19.441C1360.2 19.4728 1359.26 19.7435 1359.3 20.269C1359.34 20.8105 1359.04 21.336 1356.8 20.9697C1354.56 20.6034 1353.63 21.0016 1353.67 21.6704C1353.7 22.3392 1351.2 22.8965 1349.6 22.6418C1347.99 22.387 1345.12 22.2914 1342.92 22.3073C1340.68 22.3233 1337.54 22.7691 1337.54 22.7691C1337.54 22.7691 1335.97 23.4539 1335.08 23.9953C1334.14 24.5367 1334.14 24.5367 1331.64 24.8393C1329.11 25.1259 1326.57 25.2852 1326.57 25.2852C1326.57 25.2852 1323.39 25.0463 1322.13 25.2055C1320.86 25.3489 1319.25 25.11 1316.71 25.1259C1314.18 25.1578 1313.28 26.368 1312.68 26.7661C1312.08 27.1802 1306.64 26.5591 1306.64 26.5591C1306.64 26.5591 1304.47 27.9127 1302.53 27.1324C1300.59 26.3521 1299.02 26.6387 1297.49 27.7216C1295.96 28.8044 1295.36 29.3459 1293.76 29.3618C1292.15 29.3777 1289.62 29.4096 1289.02 29.8077C1288.42 30.2217 1286.85 30.8905 1285.25 30.779C1283.64 30.6676 1281.37 29.6166 1280.81 30.9542C1280.25 32.2918 1278.34 32.053 1276.74 32.3396C1275.17 32.6263 1273.6 33.0403 1272.97 33.4384C1272.37 33.8524 1271.14 34.9193 1269.5 33.8843C1267.85 32.8333 1266.21 32.1804 1265.32 32.8651C1264.38 33.5499 1262.82 33.8206 1260.91 33.8524C1259.01 33.8683 1258.08 34.2824 1256.81 34.569C1255.54 34.8556 1253.97 34.999 1253.26 33.8046C1252.55 32.6103 1250.91 31.7026 1249.01 31.7186C1247.1 31.7345 1245.2 31.7663 1243.93 32.0371C1242.66 32.3237 1238.59 33.2951 1237.36 33.7091C1236.13 34.1231 1232.32 34.569 1231.43 35.2378C1230.49 35.9067 1228.29 36.2092 1227.32 35.9544C1226.35 35.6996 1225.08 35.4448 1223.44 35.0627C1221.83 34.6805 1220.56 34.5531 1218.96 34.8397C1217.39 35.1264 1215.82 35.5404 1212.95 35.4448C1210.08 35.3493 1207.84 35.2378 1207.24 35.7793C1206.64 36.3207 1203.54 38.0883 1202.31 38.359C1201.04 38.6456 1198.21 38.9323 1197.27 39.0756C1196.34 39.2189 1194.77 39.7762 1193.84 39.9196C1192.91 40.0629 1186.93 41.7349 1186.93 41.7349C1186.93 41.7349 1181.52 41.926 1180.25 41.9419C1178.98 41.9579 1178.35 41.9579 1177.08 42.3719C1175.85 42.7859 1175.89 43.9802 1174.95 44.2669C1174.02 44.5376 1174.02 44.8083 1173.72 45.2064C1173.42 45.6045 1172 46.4167 1170.7 46.2256C1169.39 46.0345 1167.34 45.716 1167.34 45.716C1167.34 45.716 1164.17 45.0313 1163.23 45.0472C1162.26 45.0631 1160.66 44.5376 1159.69 44.028C1158.72 43.5025 1157.75 43.5184 1156.44 42.9929C1155.13 42.4674 1151.33 42.1171 1149.98 41.4642C1148.68 40.8113 1149.65 41.2094 1146.06 39.9036C1142.48 38.6138 1142.14 38.0723 1140.54 38.0883C1138.93 38.1042 1137.37 37.9927 1135.76 37.8813C1134.16 37.7698 1128.41 37.4195 1127.48 37.4354C1126.51 37.4513 1124.64 37.8653 1123.03 37.7539C1121.43 37.6424 1120.23 38.8526 1117.62 37.945C1115.05 37.0373 1113.14 37.4672 1110.9 37.085C1108.66 36.7029 1108.37 37.515 1105.19 37.4195C1102.02 37.3239 1101.09 38.136 1099.52 38.0086C1097.91 37.8972 1095.67 37.6583 1093.81 37.945C1091.91 38.2316 1090.37 38.9163 1088.77 38.9323C1087.16 38.9482 1087.24 39.4418 1084.7 39.6011C1082.16 39.7603 1081.79 39.3941 1079.92 39.6807C1078.02 39.9673 1078.84 41.3209 1076.9 40.8113C1074.96 40.3017 1073.58 40.0629 1071.94 40.7158C1070.55 41.2572 1068.91 41.6553 1067.57 41.9419C1067.23 41.926 1066.86 41.9101 1066.56 41.9101C1064.32 41.8782 1063.09 41.7349 1061.78 41.8464C1060.51 41.9579 1059.88 41.9579 1057.64 41.926C1055.4 41.8942 1054.47 41.7509 1053.2 41.8623C1051.93 41.9738 1050.62 42.2286 1048.12 41.926C1045.58 41.6235 1042.75 41.5916 1041.14 41.8305C1039.54 42.0693 1036.93 42.977 1035.95 43.3592C1034.98 43.7414 1033.98 44.1395 1032.71 44.251C1031.44 44.3624 1030.17 44.3465 1029.46 44.9994C1028.79 45.6523 1028.45 45.923 1027.15 46.0345C1025.88 46.1459 1021.7 46.3689 1019.83 46.337C1017.93 46.3052 1015.69 46.4167 1014.38 46.6714C1013.07 46.9262 1011.77 47.4358 1009.57 47.2766C1007.36 47.1173 1008.71 46.0663 1006.47 46.0345C1004.23 46.0026 1000.65 47.4199 999.04 47.8021C997.398 48.1842 995.159 48.8212 993.89 48.8053C992.62 48.7894 991.352 48.5027 989.747 49.0123C988.104 49.5219 985.902 49.2353 985.902 49.2353C985.902 49.2353 985.043 47.7543 983.774 48.1365C982.468 48.5187 981.386 50.3659 981.386 50.3659C981.386 50.3659 979.146 50.7321 978.176 50.5888C977.243 50.4455 973.174 49.4582 971.868 49.713C970.561 49.9678 969.927 50.3499 969.89 50.7481C969.852 51.1462 969.815 51.9424 968.546 51.9265C967.277 51.9105 966.344 51.3691 965.411 51.3532C964.477 51.3373 963.432 52.1335 962.499 52.2449C961.529 52.3723 964.179 51.0665 961.305 51.0347C958.431 51.0028 956.229 50.971 955.482 52.1653C954.773 53.3596 952.198 53.4552 950.928 53.4393C949.659 53.4233 947.121 53.1208 945.852 53.3756C944.546 53.6303 943.277 54.0125 941.336 53.9807C939.432 53.9488 937.193 54.0603 935.924 54.1718C934.655 54.2832 933.61 55.2068 931.781 54.5221C929.914 53.8374 928.422 52.7545 925.846 52.9774C923.271 53.2163 923.233 54.0125 922.263 54.3947C921.292 54.7769 920.285 55.4298 918.717 54.745C917.187 54.0603 916.59 53.3915 914.35 53.7577C912.111 54.124 908.565 54.4902 906.997 54.331C905.429 54.1718 904.198 53.6303 902.891 54.0125C901.585 54.3947 899.271 55.5572 897.703 55.5413C896.098 55.5253 896.135 55.382 894.232 55.0954C892.328 54.8087 890.761 54.6495 889.79 55.175C888.782 55.7005 888.11 56.3534 886.505 56.3375C884.901 56.3215 884.863 56.847 883.594 57.1018C882.288 57.3566 881.019 57.4681 880.123 56.9267C879.227 56.3852 877.846 57.8343 876.241 57.8025C874.636 57.7866 874.375 57.2452 873.106 57.1018C871.837 56.9585 867.619 58.1051 865.678 58.4713C863.737 58.8535 862.17 58.8216 859.93 58.6624C857.728 58.5032 853.249 58.7102 851.98 58.965C850.674 59.2198 849.367 59.7293 847.464 59.8408C845.56 59.9523 845.261 59.6816 843.992 59.5223C842.723 59.379 841.156 59.0924 839.513 59.6019C837.871 60.1115 837.572 60.1115 834.736 59.6816C831.899 59.2357 829.324 59.4745 828.055 59.6019C826.786 59.7134 825.181 59.8249 823.912 59.6816C822.643 59.5382 820.739 59.379 818.835 59.4745C816.932 59.586 815.028 59.2994 813.722 59.809C812.415 60.3185 809.206 60.8122 808.273 60.3982C807.339 59.9841 806.108 59.5701 803.532 60.0637C800.957 60.5574 799.016 60.8122 798.083 60.7963C797.112 60.7803 793.641 60.8759 791.737 60.7166C789.834 60.5574 787.594 61.067 786.624 61.1784C785.653 61.3058 783.078 62.0702 780.503 62.0383C777.965 62.0065 775.091 61.9746 774.419 62.6275C773.747 63.2804 771.731 64.3314 770.798 64.3155C769.865 64.2996 768.932 63.7582 767.663 63.6148C766.394 63.4715 761.318 63.3919 760.011 63.79C758.705 64.1722 759.638 64.4588 758.332 64.9684C757.025 65.4939 756.689 65.478 754.786 65.4621C752.882 65.4461 751.277 65.4143 750.68 65.0162C750.083 64.6021 747.881 64.1881 746.276 64.427C744.671 64.6818 742.655 65.8442 741.685 66.2264C740.714 66.6086 739.072 67.1182 738.101 67.1182C737.131 67.1023 736.198 66.9589 734.294 67.1978C732.353 67.4367 729.143 67.8029 729.143 67.8029C729.143 67.8029 724.105 67.3411 722.201 67.1819C720.298 67.0226 718.692 67.1341 717.423 67.1182C716.154 67.1023 714.885 67.2137 713.616 66.943C712.347 66.6564 710.817 66.2423 708.615 65.9398C706.413 65.6532 705.479 65.4939 703.874 65.478C702.269 65.4621 701.374 64.9206 699.097 65.5576C696.82 66.1946 695.252 65.9079 694.954 65.5098C694.655 65.1117 691.856 64.3951 690.587 64.5225C689.318 64.634 688.944 65.1754 687.078 64.6181C685.212 64.0607 683.644 63.7741 682.674 63.9015C681.703 64.013 679.464 64.2518 677.896 64.1085C676.329 63.9492 676.03 63.5512 674.127 63.3919C672.223 63.2327 670.954 63.2167 669.685 63.2008C668.416 63.1849 667.781 63.0416 666.251 62.3568C664.72 61.6721 663.452 61.5128 661.548 61.4969C659.644 61.4651 659.309 61.7358 657.778 60.9077C656.248 60.0956 654.68 59.9363 652.478 59.5064C650.276 59.0764 650.35 58.1528 648.783 58.121C647.215 58.1051 645.946 57.9617 644.005 58.0573C642.102 58.1688 641.131 58.2802 641.504 57.4999C641.878 56.7037 641.243 56.5604 639.34 56.6719C637.436 56.7833 637.399 57.1815 636.727 57.707C636.055 58.2325 635.308 59.5542 634.114 58.8694C632.882 58.1847 632.285 57.7866 631.277 58.2962C630.27 58.8217 627.955 60.1115 626.686 60.1115C625.417 60.0956 625.38 60.6211 623.775 60.7326C622.17 60.844 621.797 61.6402 620.602 60.8281C619.371 60.016 618.139 59.7293 616.833 60.1115C615.526 60.4937 612.316 60.86 611.644 61.5128C610.972 62.1657 610.301 62.2931 608.397 62.2772C606.494 62.2454 605.859 62.2454 605.187 62.6275C604.515 63.0256 603.545 63.4078 601.94 63.5193C600.335 63.6308 599.402 63.3601 598.133 63.4715C596.864 63.583 596.491 64.2518 595.52 64.3792C594.55 64.5066 593.616 64.4907 592.31 64.6022C591.041 64.7136 590.369 64.841 589.399 65.2232C588.428 65.6054 588.092 65.8761 586.152 65.8442C584.248 65.8124 583.016 65.3984 582.344 65.7965C581.672 66.1946 581.635 66.9908 580.329 67.2456C579.022 67.5004 576.484 67.7233 576.484 67.7233C576.484 67.7233 574.544 67.9622 573.61 67.9462C572.64 67.9303 569.467 68.1533 567.862 68.0099C566.295 67.8507 564.055 67.9622 564.055 67.9622C564.055 67.9622 562.226 67.0067 560.584 67.6437C558.942 68.2966 559.24 68.8221 556.963 69.0609C554.724 69.2998 553.753 69.2839 552.484 69.6661C551.178 70.0482 550.208 70.303 548.603 70.6852C546.998 71.0674 545.952 71.991 545.952 71.991C545.952 71.991 543.34 72.8828 543.004 73.2809C542.668 73.679 541.959 74.4752 540.988 74.5867C540.018 74.7141 539.346 75.4943 538.04 75.7491C536.733 76.0039 535.987 74.6185 535.987 74.6185C535.987 74.6185 532.889 74.1567 532.516 74.8096C532.142 75.4784 530.687 76.5931 529.716 76.5772C528.783 76.5613 526.208 76.4976 524.938 76.7205C524.005 76.8797 523.147 78.2174 523.147 78.2174C523.147 78.2174 521.542 78.4563 520.572 78.711C519.601 78.9658 518.593 79.7461 517.026 79.4595C515.458 79.1728 516.466 78.5199 513.293 78.4722C510.121 78.4244 511.949 79.3799 508.553 78.2811C505.119 77.1664 508.59 77.7556 505.119 77.1664C501.648 76.5931 503.701 79.5391 502.096 79.5073C500.528 79.4913 499.52 79.0136 498.251 78.8703C496.982 78.727 495.228 79.2843 495.228 79.2843C495.228 79.2843 494.593 79.4117 492.727 78.8544C490.861 78.297 490.861 78.1696 489.293 78.1378C487.688 78.1218 485.523 77.6919 485.523 77.6919C485.523 77.6919 484.217 78.3448 481.044 78.297C477.872 78.2492 477.2 78.6473 476.304 77.9626C475.408 77.2779 475.11 77.1505 472.87 76.9912C470.668 76.832 470.332 77.0868 469.1 76.6727C467.869 76.2587 466.6 76.1154 465.368 75.6854C464.136 75.2714 466.264 76.3702 464.136 75.2714C461.971 74.1726 461.71 73.7745 460.74 74.0293C459.769 74.2841 457.194 74.7777 455.925 74.7618C454.656 74.7459 453.722 74.73 452.416 75.1122C451.11 75.4943 450.475 75.4943 449.206 75.4625C447.937 75.4466 447.302 75.4306 446.033 75.1599C444.764 74.8733 443.831 75.0007 444.503 74.3478C445.175 73.6949 442.674 73.1216 442.04 73.5197C441.368 73.9178 440.397 74.4274 438.792 74.2841C437.225 74.1249 436.59 74.2523 434.388 73.6949C432.186 73.1376 429.312 73.4879 428.341 73.7427C427.371 73.9975 427.67 73.9975 426.998 74.6663C426.326 75.3192 424.721 75.3033 423.788 75.0166C422.855 74.7459 421.623 74.0612 420.69 74.0452C419.719 74.0293 419.384 74.5548 417.443 74.6663C415.539 74.7778 417.181 73.8701 415.539 74.7777C413.897 75.6854 410.985 75.9243 410.388 75.5103C409.791 75.0962 408.821 75.0962 406.954 74.7937C405.051 74.507 402.55 73.9338 401.281 74.0611C400.012 74.1726 397.66 75.4784 396.69 75.7332C395.719 75.988 394.115 75.9721 393.181 75.9561C392.248 75.9402 391.24 76.195 390.27 76.5772C389.299 76.9594 388.03 76.8161 386.761 76.9275C385.492 77.039 384.895 76.3702 382.32 76.7364C379.745 77.1027 379.408 77.2301 378.139 77.4849C376.833 77.7397 375.9 77.8511 374.631 77.8352C373.362 77.8193 370.786 78.3129 369.853 78.0422C368.92 77.7556 366.083 77.1982 365.113 77.5804C364.142 77.9626 362.127 79.0136 362.127 79.0136C362.127 79.0136 359.813 80.4468 358.283 79.3639C356.79 78.2811 353.654 77.4371 353.654 77.4371C353.654 77.4371 351.713 77.9467 350.818 76.8638C349.959 75.781 349.698 74.9848 348.429 74.8255C347.16 74.6822 347.496 74.5389 345.965 73.8541C344.435 73.1694 344.099 73.1694 342.531 72.7394C340.964 72.3254 343.875 71.6884 342.009 71.0037C340.143 70.319 336.709 69.7298 336.709 69.7298C336.709 69.7298 336 70.6534 334.432 70.3667C332.864 70.0801 331.334 69.268 330.326 69.7775C329.318 70.303 330.886 70.7171 328.982 70.9559C327.042 71.1948 326.37 71.8636 325.175 70.9081C323.981 69.9686 323.682 69.4272 322.115 69.4113C320.51 69.3953 318.643 69.0928 317.374 69.0769C316.105 69.0609 315.172 68.9176 313.941 68.3603C312.709 67.8189 312.074 67.6755 310.506 67.6437C308.901 67.6278 308.304 67.3411 307.035 67.3252C305.766 67.3093 304.796 67.5641 303.228 67.2774C301.661 66.9908 301.437 65.5257 301.81 64.8569C302.183 64.1881 299.309 64.1563 298.637 64.5544C297.965 64.9525 296.622 65.9876 295.017 65.9716C293.412 65.9557 292.777 66.0831 291.844 65.6691C290.911 65.255 288 66.1468 288 66.1468C288 66.1468 285.76 66.3857 286.133 65.7168C286.507 65.0639 285.499 65.5735 282.961 65.5417C280.423 65.5098 279.452 65.7646 279.415 66.2901C279.378 66.8316 279.004 67.357 276.84 66.9271C274.637 66.4971 273.667 66.8793 273.629 67.5481C273.592 68.217 271.017 68.7106 269.449 68.424C267.881 68.1373 265.045 67.9622 262.805 67.9303C260.566 67.8985 257.393 68.2647 257.393 68.2647C257.393 68.2647 255.751 68.9017 254.78 69.4272C253.773 69.9527 253.772 69.9527 251.234 70.1756C248.659 70.4145 246.121 70.51 246.121 70.51C246.121 70.51 242.948 70.2075 241.679 70.319C240.41 70.4464 238.842 70.1438 236.304 70.1119C233.766 70.0801 232.721 71.2585 232.05 71.6566C231.378 72.0547 226.04 71.3063 226.04 71.3063C226.04 71.3063 223.726 72.612 221.86 71.784C220.031 70.9559 218.388 71.2107 216.746 72.2458C215.067 73.2968 214.395 73.8223 212.827 73.7904C211.222 73.7745 208.684 73.7427 208.05 74.1248C207.378 74.5229 205.735 75.1599 204.168 75.0007C202.6 74.8414 200.435 73.7586 199.726 75.0803C198.979 76.402 197.113 76.1154 195.508 76.3543C193.903 76.609 192.298 76.9753 191.627 77.3734C190.955 77.7715 189.611 78.8066 188.118 77.7237C186.625 76.6409 185.057 75.9561 184.049 76.609C183.042 77.2619 181.437 77.5167 179.533 77.4849C177.63 77.453 176.659 77.8511 175.353 78.1059C174.047 78.3607 172.479 78.4722 171.919 77.2619C171.359 76.0517 169.866 75.0962 167.962 75.0803C166.059 75.0485 164.155 75.0325 162.849 75.2873C161.542 75.5421 157.362 76.4179 156.056 76.8001C154.749 77.1823 150.905 77.5326 149.897 78.1855C148.889 78.8384 146.65 79.0773 145.717 78.7907C144.784 78.5199 143.552 78.2333 141.984 77.8034C140.417 77.3734 139.148 77.2301 137.543 77.4849C135.938 77.7397 134.333 78.1059 131.459 77.9307C128.622 77.7556 126.383 77.5963 125.711 78.1218C125.039 78.6473 121.717 80.3353 120.448 80.5901C119.141 80.8449 116.267 81.0678 115.297 81.1952C114.326 81.3226 112.721 81.8322 111.751 81.9437C110.781 82.0711 104.622 83.5839 104.622 83.5839C104.622 83.5839 99.21 83.6476 97.9409 83.6316C96.6719 83.6157 96.0372 83.6157 94.7308 83.9979C93.4244 84.3801 93.3498 85.5744 92.3793 85.8292C91.4089 86.084 91.3716 86.3547 91.0357 86.7369C90.6997 87.135 89.1695 87.9153 87.9005 87.6764C86.6314 87.4534 84.6159 87.0872 84.6159 87.0872C84.6159 87.0872 81.5552 86.3388 80.5847 86.3228C79.6143 86.3069 78.084 85.7655 77.1509 85.2081C76.2551 84.6667 75.2846 84.6508 74.0528 84.0934C72.8211 83.552 69.0514 83.0902 67.8196 82.4055C66.5879 81.7207 67.5211 82.1348 64.1245 80.7653C60.7279 79.3799 60.4665 78.8544 58.8616 78.8225C57.2566 78.8066 55.6889 78.6473 54.1212 78.504C52.5536 78.3448 46.843 77.8671 45.9099 77.8671C44.9395 77.8511 43.0358 78.2333 41.4309 78.0741C39.8632 77.9148 38.4821 79.0932 36.0187 78.1378C33.5552 77.1664 31.6143 77.5486 29.4121 77.1186C27.2099 76.6887 26.8368 77.4849 23.6641 77.3097C20.4915 77.1345 19.4838 77.9148 17.9162 77.7715C16.3485 77.6123 14.1462 77.3256 12.2053 77.5645C10.2644 77.8034 8.62212 78.4563 7.05447 78.4244C5.4495 78.4085 5.44956 78.9021 2.91146 78.9977C1.45578 79.0614 0.709175 78.9187 0 78.8868V111.002H1920V0.140781Z",
                            fill: n
                        })]
                    })
                },
                R = (0, r.default)((function() {
                    return Promise.resolve().then(n.bind(n, 876)).then((function(e) {
                        return e.Button
                    }))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [876]
                        },
                        modules: ["../components/Block/Collection/CharacterCarouselBlock/components/ThumbnailGroup.tsx -> @jagex/space-punks-design"]
                    }
                }),
                E = 150,
                V = function(e) {
                    var t = e.selectedCharacterIndex,
                        n = e.characters,
                        i = e.onCharacterSelect,
                        r = (0, o.createRef)(),
                        l = n.map((function() {
                            return (0, o.createRef)()
                        }));
                    return (0, o.useEffect)((function() {
                        var e, n = l[Number(t)].current;
                        n && (null === (e = r.current) || void 0 === e || e.scrollTo(n.offsetLeft - n.scrollLeft - 157, 0))
                    }), [t]), (0, h.tZ)(C.kC, {
                        ref: r,
                        sx: {
                            alignItems: "flex-end",
                            scrollBehavior: "smooth",
                            overflowX: "auto",
                            "&::-webkit-scrollbar": {
                                display: "none"
                            },
                            "-ms-overflow-style": "none",
                            "scrollbar-width": "none"
                        },
                        children: n.map((function(e, o) {
                            return e && (0, h.tZ)(R, {
                                buttonRef: l[Number(o)],
                                variant: "tertiaryMedium",
                                onClick: function() {
                                    return i(o)
                                },
                                sx: {
                                    border: 0,
                                    "&:active, &:hover, &:hover:active, &:focus, &:visited": {
                                        backgroundColor: "inherit"
                                    },
                                    minWidth: [E, E, E, E, 157],
                                    alignItems: "flex-end",
                                    height: 139,
                                    filter: n[Number(t)].name === e.name ? "grayscale(0%)" : "grayscale(100%) brightness(50%)",
                                    transitionProperty: "filter",
                                    transitionDuration: "0.3s",
                                    "&:hover": {
                                        filter: "grayscale(0%)"
                                    },
                                    "&:active": {
                                        filter: "grayscale(0%) brightness(150%)"
                                    },
                                    overflow: "hidden",
                                    p: 0,
                                    borderRadius: 0,
                                    mr: "10px",
                                    ":last-of-type": {
                                        mr: 0
                                    }
                                },
                                children: (0, h.tZ)("img", {
                                    style: {
                                        height: 139
                                    },
                                    src: e.thumbnail.url,
                                    alt: e.thumbnail.title
                                })
                            }, e.name)
                        }))
                    })
                };
            var Y = (0, r.default)((function() {
                    return Promise.resolve().then(n.bind(n, 876)).then((function(e) {
                        return e.Character
                    }))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [876]
                        },
                        modules: ["../components/Block/Collection/CharacterCarouselBlock/CharacterCarouselBlock.tsx -> @jagex/space-punks-design"]
                    }
                }),
                z = ".carousel .slider .slide",
                W = [380, 380, 450, 960, 960],
                Q = [230, 230, 300, 810, 810],
                $ = {
                    name: "1d3w5wq",
                    styles: "width:100%"
                },
                J = function(e) {
                    var t, n, r, c, d, u, s, v, m, p, f, g = e.entry,
                        y = (0, a.B7)().theme,
                        b = (0, o.createRef)(),
                        k = g.name || "CharacterCarousel",
                        x = (0, o.useState)(0),
                        w = x[0],
                        Z = x[1],
                        I = null === g || void 0 === g || null === (t = g.charactersCollection) || void 0 === t ? void 0 : t.items[Number(w)],
                        T = {
                            purple: y.colors.primaryAccent1,
                            red: y.colors.primaryAccent2,
                            orange: y.colors.secondaryAccent1,
                            yellow: y.colors.secondaryAccent2,
                            blue: y.colors.bonus
                        }[I.color],
                        P = [null === y || void 0 === y || null === (n = y.breakpoints) || void 0 === n ? void 0 : n[1], null === y || void 0 === y || null === (r = y.breakpoints) || void 0 === r ? void 0 : r[1], null === y || void 0 === y || null === (c = y.breakpoints) || void 0 === c ? void 0 : c[1], 1920, 1920];
                    return (0, h.BX)(C.xu, {
                        as: "section",
                        id: k,
                        sx: (d = {
                            position: "relative",
                            width: "100%",
                            "#fill-area": {
                                transitionProperty: "fill",
                                transitionDuration: "1s"
                            }
                        }, (0, i.Z)(d, "& ".concat(z, " img"), {
                            width: "initial"
                        }), (0, i.Z)(d, "& ".concat(z), {
                            overflowX: "hidden"
                        }), d),
                        children: [(0, h.tZ)(F, {
                            style: {
                                position: "absolute",
                                top: 60
                            },
                            backgroundColor: T
                        }), (0, h.tZ)(C.xu, {
                            sx: {
                                position: "absolute",
                                bottom: 0,
                                top: W.map((function(e, t) {
                                    return e - Q[Number(t)]
                                })),
                                left: 0,
                                right: 0,
                                transitionProperty: "background-color",
                                transitionDuration: "1s",
                                backgroundColor: T,
                                zIndex: -1
                            }
                        }), (0, h.tZ)(C.kC, {
                            sx: {
                                position: "absolute",
                                top: [610, 610, 690],
                                bottom: [null, null, null, 100, 100],
                                left: [0, 0, 0, "calc(50% - ".concat(D, "px/2)"), "50%"],
                                right: [0, 0, 0, D, 0],
                                alignItems: "flex-end",
                                justifyContent: ["center", "center", "center", "flex-start"],
                                zIndex: 1,
                                overflowX: "auto",
                                maxWidth: null === (u = y.breakpoints) || void 0 === u ? void 0 : u[1],
                                margin: ["0 auto", "0 auto", "0 auto", 0, 0],
                                px: [null === (s = y.space) || void 0 === s ? void 0 : s[2], null === (v = y.space) || void 0 === v ? void 0 : v[2], null === (m = y.space) || void 0 === m ? void 0 : m[2], 0, 0]
                            },
                            children: (0, h.tZ)(V, {
                                selectedCharacterIndex: w,
                                characters: (null === g || void 0 === g || null === (p = g.charactersCollection) || void 0 === p ? void 0 : p.items) || [],
                                onCharacterSelect: function(e) {
                                    var t;
                                    return null === (t = b.current) || void 0 === t ? void 0 : t.moveTo(e)
                                }
                            })
                        }), (0, h.tZ)(l.lr, {
                            ref: b,
                            infiniteLoop: !0,
                            showThumbs: !1,
                            autoPlay: !1,
                            showIndicators: !1,
                            showStatus: !1,
                            swipeable: !1,
                            renderArrowPrev: function(e, t, n) {
                                return (0, h.tZ)(N, {
                                    label: n,
                                    onClick: e,
                                    type: "left"
                                })
                            },
                            renderArrowNext: function(e, t, n) {
                                return (0, h.tZ)(N, {
                                    label: n,
                                    onClick: e,
                                    type: "right"
                                })
                            },
                            onChange: function(e) {
                                return Z(e)
                            },
                            css: $,
                            children: null === (f = g.charactersCollection) || void 0 === f ? void 0 : f.items.map((function(e) {
                                var t, n, o;
                                return e ? (0, h.tZ)(C.xu, {
                                    sx: (0, i.Z)({
                                        maxWidth: P,
                                        pr: [null, null, null, D, 0],
                                        mt: [250, 250, 210, 0, 0],
                                        mb: [null === (t = y.space) || void 0 === t ? void 0 : t[3], null === (n = y.space) || void 0 === n ? void 0 : n[3], null === (o = y.space) || void 0 === o ? void 0 : o[3], 0, 0],
                                        mx: "auto"
                                    }, "".concat(z, " &"), {
                                        textAlign: "left"
                                    }),
                                    children: (0, h.tZ)(Y, {
                                        name: e.name,
                                        header: g.title,
                                        desktopImage: {
                                            url: e.desktopImage.url,
                                            title: e.desktopImage.title
                                        },
                                        mobileImage: {
                                            url: e.mobileImage.url,
                                            title: e.mobileImage.title
                                        },
                                        description: (0, h.tZ)(M, {
                                            sectionId: k,
                                            text: (null === e || void 0 === e ? void 0 : e.description) || ""
                                        }),
                                        characterHeight: W,
                                        boxHeight: Q
                                    })
                                }, e.name) : (0, h.tZ)("div", {})
                            }))
                        })]
                    })
                },
                K = (0, r.default)((function() {
                    return Promise.resolve().then(n.bind(n, 876)).then((function(e) {
                        return e.Copy
                    }))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [876]
                        },
                        modules: ["../components/Block/Collection/CopyBlock/CopyBlock.tsx -> @jagex/space-punks-design"]
                    }
                }),
                ee = function(e) {
                    var t = e.entry;
                    return (0, h.tZ)(K, {
                        id: t.name || "copy",
                        title: t.title || void 0,
                        subTitle: t.subTitle || void 0,
                        ctaText: t.ctaText ? t.ctaText : void 0,
                        ctaUrl: t.ctaUrl ? t.ctaUrl : void 0,
                        secondaryCtaText: t.secondaryCtaText ? t.secondaryCtaText : void 0,
                        secondaryCtaUrl: t.secondaryCtaUrl ? t.secondaryCtaUrl : void 0,
                        isTilted: t.isTilted || void 0,
                        hideBottomTear: !1 !== (null === t || void 0 === t ? void 0 : t.hideBottomTear)
                    })
                },
                te = n(9514),
                ne = (0, r.default)((function() {
                    return Promise.resolve().then(n.bind(n, 876)).then((function(e) {
                        return e.Faq
                    }))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [876]
                        },
                        modules: ["../components/Block/Collection/FAQBlock/FAQBlock.tsx -> @jagex/space-punks-design"]
                    }
                }),
                oe = function(e) {
                    var t, n, o = e.entry;
                    return (0, h.tZ)(ne, {
                        id: o.name || "faq",
                        title: o.title || "Frequently Asked Questions",
                        subTitle: o.subTitle,
                        body: o.body && (0, h.tZ)(M, {
                            sectionId: o.name || "faq",
                            text: o.body
                        }),
                        ctaText: o.ctaText,
                        ctaUrl: o.ctaUrl,
                        faqItems: null !== (t = null === (n = o.faqListCollection) || void 0 === n ? void 0 : n.items.map((function(e) {
                            return function(e) {
                                var t, n, o, i;
                                return {
                                    title: null !== (t = null === e || void 0 === e ? void 0 : e.title) && void 0 !== t ? t : "",
                                    body: (0, h.tZ)(M, {
                                        sectionId: null !== (n = null === e || void 0 === e ? void 0 : e.name) && void 0 !== n ? n : "faq",
                                        text: null !== (o = null === e || void 0 === e ? void 0 : e.body) && void 0 !== o ? o : ""
                                    }),
                                    name: null !== (i = null === e || void 0 === e ? void 0 : e.name) && void 0 !== i ? i : ""
                                }
                            }(e)
                        }))) && void 0 !== t ? t : [],
                        onItemToggle: function(e, t) {
                            return (0, te.vm)({
                                id: "faq-".concat(e, "-").concat(t ? "open" : "close"),
                                action: "faq",
                                category: "ui-action"
                            })
                        }
                    })
                },
                ie = n(5588),
                re = n(7021),
                le = (0, r.default)((function() {
                    return Promise.resolve().then(n.bind(n, 876)).then((function(e) {
                        return e.Hero
                    }))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [876]
                        },
                        modules: ["../components/Block/Collection/HeroBlock/HeroBlock.tsx -> @jagex/space-punks-design"]
                    }
                }),
                ae = function(e) {
                    var t, n, o, i = e.entry;
                    return (0, h.tZ)(le, {
                        id: i.name,
                        titleImage: null !== i && void 0 !== i && null !== (t = i.headlineImage) && void 0 !== t && t.url ? (0, h.tZ)(ie.default, {
                            src: null === i || void 0 === i ? void 0 : i.headlineImage.url,
                            objectFit: "contain",
                            layout: "intrinsic",
                            quality: 80,
                            width: (null === i || void 0 === i ? void 0 : i.headlineImage.width) || "773",
                            height: (null === i || void 0 === i ? void 0 : i.headlineImage.height) || "291",
                            alt: "",
                            loader: re.YU
                        }) : void 0,
                        headline: (null === i || void 0 === i ? void 0 : i.headlineText) || void 0,
                        videoURL: null === i || void 0 === i || null === (n = i.backgroundVideo) || void 0 === n ? void 0 : n.url,
                        fallbackImage: null !== i && void 0 !== i && null !== (o = i.fallbackImage) && void 0 !== o && o.url ? (0, h.tZ)(ie.default, {
                            src: null === i || void 0 === i ? void 0 : i.fallbackImage.url,
                            quality: 60,
                            objectFit: "cover",
                            layout: "fill",
                            alt: (null === i || void 0 === i ? void 0 : i.fallbackImage.title) || "Hero background image",
                            loader: re.YU
                        }) : void 0,
                        autoplay: null === i || void 0 === i ? void 0 : i.autoplay,
                        ctaText: null === i || void 0 === i ? void 0 : i.ctaText,
                        ctaLink: null === i || void 0 === i ? void 0 : i.ctaLink,
                        onToggle: function(e) {
                            return (0, te.vm)({
                                id: "".concat((null === i || void 0 === i ? void 0 : i.name) || "hero", "-").concat(e ? "open" : "close"),
                                action: (null === i || void 0 === i ? void 0 : i.name) || "hero",
                                category: "ui-action"
                            })
                        }
                    })
                },
                Ce = (0, r.default)((function() {
                    return Promise.resolve().then(n.bind(n, 876)).then((function(e) {
                        return e.ImagePlate
                    }))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [876]
                        },
                        modules: ["../components/Block/Collection/ImagePlateBlock/ImagePlateBlock.tsx -> @jagex/space-punks-design"]
                    }
                }),
                ce = function(e) {
                    var t, n = e.entry;
                    return (0, h.tZ)(Ce, {
                        id: n.name,
                        title: n.title || void 0,
                        subTitle: n.subTitle,
                        body: (0, h.tZ)(M, {
                            sectionId: n.name,
                            text: n.body
                        }),
                        overlayImageStacked: n.overlayImageStacked ? (0, h.tZ)(ie.default, {
                            src: n.overlayImageStacked.url,
                            alt: n.overlayImageStacked.description || void 0,
                            quality: 80,
                            width: n.overlayImageStacked.width,
                            height: n.overlayImageStacked.height,
                            loader: re.YU
                        }) : void 0,
                        overlayImageUnstacked: n.overlayImageUnstacked ? (0, h.tZ)(ie.default, {
                            src: n.overlayImageUnstacked.url,
                            alt: n.overlayImageUnstacked.description || void 0,
                            quality: 80,
                            width: n.overlayImageUnstacked.width,
                            height: n.overlayImageUnstacked.height,
                            loader: re.YU
                        }) : void 0,
                        textAlignment: null === (t = n.textAlignment) || void 0 === t ? void 0 : t.toLowerCase(),
                        backgroundImageUnstacked: n.backgroundImageUnstacked ? (0, h.tZ)(ie.default, {
                            src: n.backgroundImageUnstacked.url,
                            alt: "",
                            quality: 50,
                            layout: "fill",
                            objectFit: "cover",
                            loader: re.YU
                        }) : void 0,
                        backgroundImageStacked: n.backgroundImageStacked ? (0, h.tZ)(ie.default, {
                            src: n.backgroundImageStacked.url,
                            alt: "",
                            quality: 50,
                            layout: "fill",
                            objectFit: "cover",
                            loader: re.YU
                        }) : void 0,
                        underlineColor: n.underlineColor
                    })
                },
                de = n(1364),
                ue = ["thumbnailUrl"];

            function se(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function ve(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? se(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : se(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var he = (0, r.default)((function() {
                    return Promise.resolve().then(n.bind(n, 876)).then((function(e) {
                        return e.MediaGallery
                    }))
                }), {
                    ssr: !1,
                    loadableGenerated: {
                        webpack: function() {
                            return [876]
                        },
                        modules: ["../components/Block/Collection/MediaGallery/MediaGallery.tsx -> @jagex/space-punks-design"]
                    }
                }),
                me = (0, r.default)((function() {
                    return Promise.resolve().then(n.bind(n, 876)).then((function(e) {
                        return e.MediaGalleryImageWrapper
                    }))
                }), {
                    ssr: !1,
                    loadableGenerated: {
                        webpack: function() {
                            return [876]
                        },
                        modules: ["../components/Block/Collection/MediaGallery/MediaGallery.tsx -> @jagex/space-punks-design"]
                    }
                }),
                pe = function(e) {
                    var t, n;
                    return null !== (t = null === (n = e.contentType) || void 0 === n ? void 0 : n.split("/")[0]) && void 0 !== t ? t : "image"
                },
                fe = function(e) {
                    return e.items.filter((function(e) {
                        return (0, re.e5)(e)
                    })).map((function(e) {
                        return function(e) {
                            var t, n, o, i = pe(e);
                            return {
                                src: {
                                    url: "video" === i ? e.url : "".concat(e.url, "?q=50&w=1920"),
                                    type: pe(e)
                                },
                                alt: null !== (t = e.title) && void 0 !== t ? t : void 0,
                                width: null !== (n = e.width) && void 0 !== n ? n : 0,
                                height: null !== (o = e.height) && void 0 !== o ? o : 0,
                                thumbnail: {
                                    url: "video" === i ? e.url : "".concat(e.url, "?q=50&w=400"),
                                    type: i
                                }
                            }
                        }(e)
                    }))
                },
                ge = function(e) {
                    return e.filter((function(e) {
                        return (0, re.e5)(e)
                    })).map((function(e) {
                        return t = e, {
                            src: {
                                url: (0, re.o2)(t),
                                type: "video"
                            },
                            alt: "",
                            width: 100,
                            height: 200,
                            thumbnail: {
                                url: (0, re._)(t),
                                type: "image"
                            }
                        };
                        var t
                    }))
                },
                ye = o.forwardRef((function(e, t) {
                    var n = e.thumbnailUrl,
                        o = (0, c.Z)(e, ue);
                    return (0, h.tZ)(C.zx, ve(ve({
                        ref: t,
                        pt: 5,
                        sx: {
                            display: "flex",
                            alignItems: "center",
                            cursor: "pointer",
                            background: "transparent",
                            p: "0",
                            m: "0 auto",
                            textTransform: "uppercase",
                            width: "100%"
                        }
                    }, o), {}, {
                        children: (0, h.tZ)(me, {
                            children: (0, h.tZ)(ie.default, {
                                sx: {
                                    objectFit: "cover"
                                },
                                src: n,
                                alt: "",
                                width: 402,
                                height: 225,
                                loader: function(e) {
                                    return e.src
                                }
                            })
                        })
                    }))
                }));
            ye.displayName = "ModalTrigger";
            var be = function(e) {
                    var t, n = e.sectionId,
                        o = e.asset,
                        r = e.onModalToggle;
                    if ("video" === o.src.type) return (0, h.tZ)(d.Modal, {
                        onToggle: r,
                        trigger: (0, h.tZ)(ye, {
                            thumbnailUrl: o.thumbnail.url
                        }),
                        children: (0, h.tZ)(C.cx, {
                            tabIndex: 0,
                            allow: "autoplay",
                            allowFullScreen: !0,
                            src: o.src.url
                        })
                    });
                    var l = (t = {}, (0, i.Z)(t, d.analyticsActionProperty, "link"), (0, i.Z)(t, d.analyticsCategoryProperty, "link-".concat((0, d.isAbsoluteUrl)(o.src.url) ? "external" : "internal")), (0, i.Z)(t, d.analyticsIdProperty, "link-".concat(n)), t);
                    return (0, h.tZ)("a", ve(ve({
                        href: o.src.url
                    }, l), {}, {
                        "data-ja-ignore-link": "true",
                        children: (0, h.tZ)(C.xu, {
                            sx: {
                                position: "relative",
                                height: 225,
                                transitionProperty: "box-shadow",
                                transitionDuration: "0.3s",
                                boxShadow: "-3px 3px 0 ".concat(d.theme.colors.primaryAccent1),
                                "&:hover": {
                                    boxShadow: "-8px 8px 0 ".concat(d.theme.colors.primaryAccent1)
                                }
                            },
                            children: (0, h.tZ)(me, {
                                children: (0, h.tZ)(ie.default, {
                                    layout: "fixed",
                                    objectFit: "cover",
                                    sx: {
                                        transitionProperty: "filter",
                                        transitionDuration: "0.3s",
                                        filter: "grayscale(75%) brightness(85%)",
                                        "&:hover": {
                                            filter: "grayscale(0)"
                                        },
                                        "&:active": {
                                            filter: "grayscale(0) brightness(150%)"
                                        }
                                    },
                                    src: o.thumbnail.url,
                                    alt: o.alt,
                                    quality: 70,
                                    width: 400,
                                    height: 225,
                                    loader: re.YU
                                })
                            })
                        })
                    }), o.src.url)
                },
                ke = function(e) {
                    var t, n = e.sectionId,
                        o = e.tab,
                        i = e.onModalToggle,
                        r = "video" === (null === (t = o.assets) || void 0 === t ? void 0 : t[0].src.type);
                    return (0, h.tZ)((function(e) {
                        var t = e.children;
                        return r ? (0, h.tZ)(h.HY, {
                            children: t
                        }) : (0, h.tZ)(de.Iv, {
                            options: d.mediaGalleryDefaultOptions,
                            children: t
                        })
                    }), {
                        children: (0, h.tZ)(d.MediaGalleryGrid, {
                            children: o.assets.map((function(e) {
                                return (0, h.tZ)(be, {
                                    sectionId: n,
                                    asset: e,
                                    onModalToggle: i
                                }, e.src.url)
                            }))
                        })
                    })
                },
                xe = function(e) {
                    var t, n = e.entry,
                        o = function(e) {
                            var t, n, o, i, r, l, a, C = [];
                            return null !== (t = e.screenshotsCollection) && void 0 !== t && t.items.length && C.push({
                                name: "screenshots",
                                title: null !== (i = e.screenshotsHeading) && void 0 !== i ? i : "Screenshots",
                                assets: fe(e.screenshotsCollection)
                            }), null !== (n = e.conceptArtCollection) && void 0 !== n && n.items.length && C.push({
                                name: "concept-art",
                                title: null !== (r = e.conceptArtHeading) && void 0 !== r ? r : "Concept Art",
                                assets: fe(e.conceptArtCollection)
                            }), null !== (o = e.wallpapersCollection) && void 0 !== o && o.items.length && C.push({
                                name: "wallpapers",
                                title: null !== (l = e.wallpapersHeading) && void 0 !== l ? l : "Wallpapers",
                                assets: fe(e.wallpapersCollection)
                            }), e.videos && C.push({
                                name: "videos",
                                title: null !== (a = e.videosHeading) && void 0 !== a ? a : "Videos",
                                assets: ge(e.videos)
                            }), C
                        }(n);
                    return (0, h.tZ)(de.ZP, {
                        children: (0, h.tZ)(he, {
                            onTabSelect: function(e) {
                                (0, te.vm)({
                                    id: "".concat(o[e].name, "-tab-selected"),
                                    action: "media-gallery",
                                    category: "ui-action"
                                })
                            },
                            title: null !== (t = n.title) && void 0 !== t ? t : "Media",
                            tabs: o,
                            renderGalleryTabContent: function(e) {
                                return (0, h.tZ)(ke, {
                                    sectionId: e.name,
                                    tab: e,
                                    onModalToggle: function(t) {
                                        return (0, te.vm)({
                                            id: "".concat(e.name, "-").concat(t ? "open" : "close"),
                                            action: e.name || "media-gallery",
                                            category: "ui-action"
                                        })
                                    }
                                })
                            }
                        })
                    })
                },
                we = n(9017),
                Ze = (0, r.default)((function() {
                    return Promise.resolve().then(n.bind(n, 876)).then((function(e) {
                        return e.Newsletter
                    }))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [876]
                        },
                        modules: ["../components/Block/Collection/NewsletterBlock/NewsletterBlock.tsx -> @jagex/space-punks-design"]
                    }
                }),
                Ie = "newsletter-signup",
                Te = "/newsletter/verify",
                Pe = "/newsletter/success",
                Ue = new URL("https://echo7.bluehornet.com/phase2/bullseye/contactupdate1.php3").toString(),
                je = new URL(Te, window.location.origin).toString(),
                Be = function(e) {
                    var t = e.entry,
                        n = (0, we.useRouter)(),
                        i = (0, o.useState)(""),
                        r = i[0],
                        l = i[1],
                        a = (0, o.useState)("initial"),
                        C = a[0],
                        c = a[1];
                    return (0, o.useEffect)((function() {
                        n.asPath === Te ? c("verify") : n.asPath === Pe && c("success")
                    }), [n]), (0, h.tZ)(Ze, {
                        id: t.name || Ie,
                        heading: t.title,
                        subHeading: t.subtitle,
                        emailInput: {
                            name: "email",
                            label: t.emailLabel,
                            placeholder: t.emailPlaceholder,
                            onChange: function(e) {
                                "error" === C && c("initial"), l(e.target.value)
                            }
                        },
                        hiddenFormInputs: [{
                            name: "cid",
                            value: "355e1e8ce052e5f21f98cf9999686476"
                        }, {
                            name: "schema",
                            value: "echo7"
                        }, {
                            name: "grp[]",
                            value: "1745335"
                        }, {
                            name: "redirect_url",
                            value: je
                        }],
                        formAction: Ue,
                        submitbtnText: t.submitbtnText || "Submit",
                        legalDisclaimer: t.legalDisclaimer && (0, h.tZ)(M, {
                            sectionId: Ie,
                            text: t.legalDisclaimer,
                            color: "white"
                        }) || void 0,
                        errorMessage: t.errorMessage || "There was an error submitting your form, please try again",
                        state: C,
                        verifyHeading: t.verifyHeading,
                        verifySubHeading: t.verifySubHeading || void 0,
                        verifyMessage: t.verifyMessage && (0, h.tZ)(M, {
                            sectionId: Ie,
                            text: t.verifyMessage
                        }) || "verify!",
                        verifyCtaText: t.verifyCtaText || void 0,
                        verifyCtaUrl: t.verifyCtaUrl || void 0,
                        successHeading: t.successHeading,
                        successSubHeading: t.successSubHeading || void 0,
                        successMessage: t.successMessage && (0, h.tZ)(M, {
                            sectionId: Ie,
                            text: t.successMessage
                        }) || "Success!",
                        successCtaText: t.successCtaText || void 0,
                        successCtaUrl: t.successCtaUrl || void 0,
                        onSubmit: function(e) {
                            return (0, re.vV)(r) ? (c("pending"), !0) : (e.preventDefault(), c("error"), !1)
                        }
                    })
                },
                Se = (n(4124), n(3161)),
                Oe = (0, r.default)((function() {
                    return Promise.resolve().then(n.bind(n, 876)).then((function(e) {
                        return e.ProductPackage
                    }))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [876]
                        },
                        modules: ["../components/Block/Collection/ProductPackagesBlock/components/ProductPackages.tsx -> @jagex/space-punks-design"]
                    }
                }),
                Ae = function(e) {
                    var t, n, o, i, r, c = e.entry,
                        u = null === c || void 0 === c || null === (t = c.packagesCollection) || void 0 === t ? void 0 : t.items.findIndex((function(e) {
                            return "splendour" === (null === e || void 0 === e ? void 0 : e.variant)
                        })),
                        s = (0, Se.V)([89, 89, 60]),
                        v = (0, Se.V)([!0, !0, !0, !1]),
                        m = (0, d.useHasMounted)(),
                        p = (0, a.B7)().theme;
                    return m ? (0, h.tZ)(h.HY, {
                        children: v ? (0, h.tZ)(C.kC, {
                            sx: {
                                width: "100%",
                                "& > div": {
                                    width: "100%"
                                },
                                "ul.slider": {
                                    px: "6px"
                                }
                            },
                            children: (0, h.tZ)(l.lr, {
                                dynamicHeight: !1,
                                centerMode: !0,
                                centerSlidePercentage: s,
                                swipeable: !0,
                                emulateTouch: !0,
                                selectedItem: u && u >= 0 ? u : 0,
                                showIndicators: !1,
                                autoPlay: !1,
                                interval: 1e6,
                                showStatus: !1,
                                showThumbs: !1,
                                showArrows: !1,
                                children: null === c || void 0 === c || null === (n = c.packagesCollection) || void 0 === n ? void 0 : n.items.map((function(e) {
                                    var t, n, o, i, r;
                                    return (0, h.tZ)(Oe, {
                                        title: (null === e || void 0 === e ? void 0 : e.title) || "",
                                        image: null !== e && void 0 !== e && null !== (t = e.image) && void 0 !== t && t.url && null !== e && void 0 !== e && null !== (n = e.image) && void 0 !== n && n.title ? {
                                            url: e.image.url,
                                            title: e.image.title
                                        } : void 0,
                                        ctaUrl: (null === e || void 0 === e ? void 0 : e.ctaUrl) || "",
                                        ctaText: (null === e || void 0 === e ? void 0 : e.ctaText) || "",
                                        variant: (null === e || void 0 === e ? void 0 : e.variant) || void 0,
                                        includedFeatures: (null === e || void 0 === e || null === (o = e.includedCollection) || void 0 === o ? void 0 : o.items) || [],
                                        excludedFeatures: (null === e || void 0 === e || null === (i = e.excludedCollection) || void 0 === i ? void 0 : i.items) || [],
                                        highlightedFeatures: (null === e || void 0 === e || null === (r = e.highlightedCollection) || void 0 === r ? void 0 : r.items) || [],
                                        sx: {
                                            mx: ["4px", "4px", "12px"]
                                        }
                                    }, "mobile-".concat(null === e || void 0 === e ? void 0 : e.title))
                                }))
                            })
                        }) : (0, h.tZ)(C.kC, {
                            sx: {
                                justifyContent: "center",
                                display: "flex",
                                margin: "0 auto",
                                px: 7,
                                "& > div:last-of-type": {
                                    mr: 0
                                },
                                maxWidth: ["100%", "100%", null === p || void 0 === p || null === (o = p.breakpoints) || void 0 === o ? void 0 : o[2], null === p || void 0 === p || null === (i = p.breakpoints) || void 0 === i ? void 0 : i[3]]
                            },
                            children: null === c || void 0 === c || null === (r = c.packagesCollection) || void 0 === r ? void 0 : r.items.map((function(e) {
                                var t, n, o, i, r;
                                return (0, h.tZ)(Oe, {
                                    title: (null === e || void 0 === e ? void 0 : e.title) || "",
                                    image: null !== e && void 0 !== e && null !== (t = e.image) && void 0 !== t && t.url && null !== e && void 0 !== e && null !== (n = e.image) && void 0 !== n && n.title ? {
                                        url: e.image.url,
                                        title: e.image.title
                                    } : void 0,
                                    ctaUrl: (null === e || void 0 === e ? void 0 : e.ctaUrl) || "",
                                    ctaText: (null === e || void 0 === e ? void 0 : e.ctaText) || "",
                                    variant: (null === e || void 0 === e ? void 0 : e.variant) || void 0,
                                    includedFeatures: (null === e || void 0 === e || null === (o = e.includedCollection) || void 0 === o ? void 0 : o.items) || [],
                                    excludedFeatures: (null === e || void 0 === e || null === (i = e.excludedCollection) || void 0 === i ? void 0 : i.items) || [],
                                    highlightedFeatures: (null === e || void 0 === e || null === (r = e.highlightedCollection) || void 0 === r ? void 0 : r.items) || [],
                                    sx: {
                                        mr: [3],
                                        flex: 1,
                                        maxWidth: "550px"
                                    }
                                }, "desktop-".concat(null === e || void 0 === e ? void 0 : e.title))
                            }))
                        })
                    }) : null
                },
                _e = function(e) {
                    var t = e.entry;
                    return (0, h.tZ)(h.HY, {
                        children: (0, h.tZ)(C.xu, {
                            as: "section",
                            id: t.title || "product-packages",
                            sx: {
                                width: "100%",
                                pt: 3,
                                pb: 3
                            },
                            children: (0, h.tZ)(Ae, {
                                entry: t
                            })
                        })
                    })
                },
                He = (0, r.default)((function() {
                    return Promise.resolve().then(n.bind(n, 876)).then((function(e) {
                        return e.VideoPlate
                    }))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [876]
                        },
                        modules: ["../components/Block/Collection/VideoPlateBlock/VideoPlateBlock.tsx -> @jagex/space-punks-design"]
                    }
                }),
                Le = {
                    CopyBlock: ee,
                    ImagePlate: ce,
                    Hero: ae,
                    Newsletter: Be,
                    Faq: oe,
                    ProductPackages: _e,
                    MediaGallery: xe,
                    CharacterCarousel: J,
                    VideoPlate: function(e) {
                        var t, n, o, i, r = e.entry;
                        return (0, h.tZ)(He, {
                            id: r.name || "video-plate",
                            title: null === r || void 0 === r ? void 0 : r.title,
                            subTitle: (null === r || void 0 === r ? void 0 : r.subTitle) || void 0,
                            body: (0, h.tZ)(M, {
                                sectionId: r.name,
                                text: r.body
                            }),
                            ctaText: null === r || void 0 === r ? void 0 : r.ctaText,
                            linkText: null === r || void 0 === r ? void 0 : r.linkText,
                            linkUrl: (null === r || void 0 === r ? void 0 : r.linkUrl) || "#media",
                            thumbnailImage: null !== r && void 0 !== r && null !== (t = r.thumbnailImage) && void 0 !== t && t.url ? (0, h.tZ)(ie.default, {
                                src: null === r || void 0 === r ? void 0 : r.thumbnailImage.url,
                                quality: 60,
                                layout: "fill",
                                objectFit: "cover",
                                alt: "",
                                loader: re.YU
                            }) : void 0,
                            thumbnailVideo: (null === r || void 0 === r || null === (n = r.thumbnailVideo) || void 0 === n ? void 0 : n.url) || void 0,
                            textAlignment: null === r || void 0 === r || null === (o = r.textAlignment) || void 0 === o ? void 0 : o.toLowerCase(),
                            backgroundImage: null !== r && void 0 !== r && null !== (i = r.backgroundImage) && void 0 !== i && i.url ? (0, h.tZ)(ie.default, {
                                src: r.backgroundImage.url,
                                alt: "",
                                quality: 50,
                                layout: "fill",
                                objectFit: "cover",
                                loader: re.YU
                            }) : void 0,
                            underlineColor: r.underlineColor,
                            mediaLink: null !== r && void 0 !== r && r.mediaLink ? (0, re.o2)(r.mediaLink) : void 0,
                            onToggle: function(e) {
                                return (0, te.vm)({
                                    id: "".concat((null === r || void 0 === r ? void 0 : r.name) || "videoPlate", "-").concat(e ? "open" : "close"),
                                    action: (null === r || void 0 === r ? void 0 : r.name) || "videoPlate",
                                    category: "ui-action"
                                })
                            },
                            hideTopTear: !1 !== (null === r || void 0 === r ? void 0 : r.hideTopTear)
                        })
                    }
                },
                Me = function(e) {
                    var t = e.entry,
                        n = e.index,
                        o = function(e) {
                            return !!e && Object.prototype.hasOwnProperty.call(e, "__typename")
                        }(t) ? t.__typename : void 0;
                    if (!o || !t) return null;
                    var i = Le[o];
                    return (0, h.tZ)(i, {
                        entry: t,
                        index: n
                    })
                },
                Ge = n(9131),
                qe = !0;

            function De(e) {
                var t, n, o = e.page,
                    i = e.preview,
                    r = e.generatedDate,
                    l = null !== (t = null === o || void 0 === o || null === (n = o.blocksCollection) || void 0 === n ? void 0 : n.items) && void 0 !== t ? t : [];
                return (0, h.tZ)(Ge.Z, {
                    header: null === o || void 0 === o ? void 0 : o.header,
                    footer: null === o || void 0 === o ? void 0 : o.footer,
                    preview: i,
                    seo: null === o || void 0 === o ? void 0 : o.seo,
                    generatedDate: r,
                    children: l.map((function(e, t) {
                        return (0, h.tZ)(Me, {
                            entry: e,
                            index: t
                        }, null === e || void 0 === e ? void 0 : e.sys.id)
                    }))
                })
            }
        },
        5953: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/[[...slug]]", function() {
                return n(4419)
            }])
        }
    },
    function(e) {
        e.O(0, [774, 205, 998, 888, 179], (function() {
            return t = 5953, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);
//# sourceMappingURL=[[...slug]]-1c7b3134fdb8695b9f8b.js.map
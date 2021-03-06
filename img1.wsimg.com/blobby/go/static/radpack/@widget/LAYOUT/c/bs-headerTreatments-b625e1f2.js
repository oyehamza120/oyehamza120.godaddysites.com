define("@widget/LAYOUT/c/bs-headerTreatments-b625e1f2.js", ["exports", "@widget/LAYOUT/c/bs-countVCTElement"], (function(e, t) {
    "use strict";
    const r = [1, 1.5, 2, 3],
        n = /[.-]wsimg\.com\//;

    function i(e) {
        return !!n.test(e)
    }

    function c(e) {
        let t = void 0;
        if (!e || !i(e)) return t;
        const n = [],
            c = e.split(/(h:|w:)([\d.]+)(,|\/|$)/g),
            o = c.length;
        let a = 0;
        for (let e = 2; e < o; e += 4) r.forEach(((t, r) => {
            n[r] = (n[r] || "") + c.slice(a, e).join("") + parseFloat(c[e]) * t
        })), a = e + 1;
        try {
            t = n.map(((t, n) => {
                if (t += c.slice(a, o).join(""), 1 !== r[n]) t += ` ${r[n]}x`;
                else if (t !== e) throw new Error([e, t]);
                return t
            })).join(",\n")
        } catch (e) {}
        return t || void 0
    }

    function o(e) {
        return i(e) ? e : function(e = "") {
            return e.includes("/:/") ? e.split("/:/")[0] : e
        }(e)
    }
    const {
        headerTreatments: {
            FILL: a,
            FIT: l,
            INSET: g,
            BLUR: u,
            LEGACY_BLUR: s
        }
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants;
    e.BLUR = u, e.CDN_REGEX = n, e.FILL = a, e.FIT = l, e.INSET = g, e.LEGACY_BLUR = s, e.addImageApiArgs = function(e, t) {
        if (!i(e) || !t) return e;
        let r;
        return r = "string" == typeof t ? t.startsWith("/") ? t : "/" + t : Object.keys(t).reduce(((e, r) => `${e}/${r}=${t[r]}`), ""), e.endsWith("/") && (r = r.substr(1)), r ? e.indexOf("/:/") > -1 ? `${e}${r}` : `${e}/:${r}` : e
    }, e.generateBackgroundUrl = function(e, t = !0) {
        return o(t ? (global.Core || guac["@wsb/guac-widget-core"]).utils.generateBackgroundUrl(e) : (global.Core || guac["@wsb/guac-widget-core"]).utils.generateBackgroundUrl(e).replace(/\/rs=w:{width},h:{height},cg:true,m\/cr=w:{width},h:{height},a[x]?:[^/]*/, "").replace(/\/:$/, ""))
    }, e.getSrcSet = c, e.getVCTScript = function(e) {
        if (!e) return "";
        const r = (c(e) || "").replace(/(\n)/gm, " ");
        return `(function(){${t.countVCTElement};var i=new Image();i.onload=window.markVisuallyComplete;i.srcset="${r||e}";i.src="${e}";})()`
    }, e.getValidUrl = o, e.isInternalUrl = i, e.replaceImageSizeParams = function(e, t = "") {
        return e && "string" == typeof e ? e.replace(/\/:\/rs=w:[0-9]*,h:[0-9]*/, t) : ""
    }, e.resolveImageSource = function(e, t, r) {
        return "string" == typeof((null == e ? void 0 : e.imageUrl) || (null == e ? void 0 : e.image)) ? (global.Core || guac["@wsb/guac-widget-core"]).utils.generateImageServiceUrl(e) : (null == r ? void 0 : r.fallbackBackgroundImageSrc) ? r.fallbackBackgroundImageSrc.replace(/\{(width|height)\}/g, "+0") : t || ""
    }
})), "undefined" != typeof window && (window.global = window);
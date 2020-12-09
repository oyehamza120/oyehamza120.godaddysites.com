define("@widget/LAYOUT/c/bs-index2-bb40e491.js", ["exports"], (function(t) {
    "use strict";
    t.getEditorPageScale = () => {
        const t = document.getElementsByClassName("ux-scaled");
        let e = 1;
        return t && t.length > 0 && (e = t[0].getAttribute("data-scale")), e
    }, t.getRichTextCharCount = function(t) {
        const e = function(t) {
            if ("string" != typeof t || "{" !== t[0]) return null;
            try {
                return JSON.parse(t)
            } catch (t) {
                return null
            }
        }(t) || {};
        let n = 0;
        return e.blocks && e.blocks.forEach(t => {
            const e = t.text.length;
            n += (global._ || guac.lodash).clamp(e, 25, Math.max(e, 25))
        }), n
    }, t.isImbalanced = (t, e) => {
        const n = (global._ || guac.lodash).last(t),
            a = (global._ || guac.lodash).sum(t),
            l = (global._ || guac.lodash).sum(e);
        return Math.abs(a - l) > Math.abs(a - n - (l + n))
    }, t.resolveFontSizeCharCount = ({
        count: t = 0,
        fontSizeMap: e = {},
        defaultFontSize: n
    }) => {
        const a = (global._ || guac.lodash).reduce(e, (t, [e, n = Number.MAX_VALUE], a) => (t.push({
            range: [e, n],
            fontSize: a
        }), t), []);
        let l = n || void 0;
        return a.forEach(({
            range: [e, n],
            fontSize: a
        }) => {
            t >= e && t <= n && (l = a)
        }), l
    }, t.spacingHorizontal = (t = "medium") => ({
        "> :nth-child(n)": {
            marginRight: t
        },
        " > :last-child": {
            marginRight: "0 !important"
        }
    }), t.spacingVertical = (t = "medium") => ({
        "> :nth-child(n)": {
            marginBottom: t
        },
        " > :last-child": {
            marginBottom: "0 !important"
        }
    }), t.stringToChildren = t => {
        if ("string" == typeof t) return {
            children: t.trim()
        };
        if (t && "object" == typeof t) {
            let {
                children: e = null
            } = t;
            return "string" == typeof e && (e = e.trim()), { ...t,
                children: e
            }
        }
        return {
            children: null
        }
    }
})), "undefined" != typeof window && (window.global = window);
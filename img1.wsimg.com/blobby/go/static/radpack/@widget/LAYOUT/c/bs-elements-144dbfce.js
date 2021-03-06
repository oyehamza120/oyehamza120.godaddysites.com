define("@widget/LAYOUT/c/bs-elements-144dbfce.js", ["exports"], (function(e) {
    "use strict";
    const {
        renderModes: t
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants, i = (e, t = "ceil") => "ceil" === t ? Math.ceil(e.getBoundingClientRect().width) : Math.floor(e.getBoundingClientRect().width);
    e.getMobileRenderContainer = e => e === t.PREVIEW && (document.querySelector(".mobile-phone-preview-container #render-container") || document.querySelector("#render-container")) || document.querySelector("body"), e.getMobileViewportHeight = e => {
        if ("undefined" == typeof document || e !== t.PREVIEW) return "100vh";
        const i = (e => e === t.PREVIEW && (document.querySelector(".mobile-phone-preview-container .viewport") || document.querySelector("#render-container")) || document.querySelector("body"))(e);
        if (!i) return "100vh";
        const n = document.querySelector(".mobile-phone-preview-container .ux-scaled");
        let o = 1;
        if (n) {
            const e = (global._ || guac.lodash).get(n, "style.transform", "").match(/[0-9.]+/);
            e && e.length > 0 && (o = e[0])
        }
        return i.getBoundingClientRect().height / o
    }, e.getWidth = i, e.getWidths = e => e.map(e => i(e)), e.hide = e => {
        e.style.display = "none", e.style.visibility = "hidden", e.classList.remove("visible")
    }, e.show = e => {
        e.style.display = "", e.style.visibility = "visible", e.classList.add("visible")
    }
})), "undefined" != typeof window && (window.global = window);
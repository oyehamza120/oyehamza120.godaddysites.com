define("@widget/LAYOUT/c/loaders-cdd1ec86.js", ["exports", "@widget/LAYOUT/c/Layout"], (function(e, a) {
    "use strict";
    e.Balance = function(e) {
        const {
            SVG: c
        } = (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element;
        return this.merge({
            tag: "div",
            children: (global.React || guac.react).createElement((global.React || guac.react).Fragment, null, (global.React || guac.react).createElement(c, {
                viewBox: "0 0 44 44",
                width: "3em",
                height: "3em",
                fill: "currentColor"
            }, (global.React || guac.react).createElement("path", {
                fillRule: "evenodd",
                d: "M31.968 23H12.032c-.57 0-1.032-.448-1.032-1 0-.553.462-1 1.032-1h19.936c.57 0 1.032.447 1.032 1 0 .552-.462 1-1.032 1"
            })), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX.Style, null, a.keyframes.loaderBalance)),
            style: {
                "> svg": {
                    animation: "balance 1s infinite cubic-bezier(.62,.06,.33,.79);",
                    transformOrigin: "center"
                }
            }
        }, e)
    }, e.Blink = function(e) {
        const {
            SVG: c
        } = (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element;
        return this.merge({
            tag: "div",
            children: (global.React || guac.react).createElement((global.React || guac.react).Fragment, null, (global.React || guac.react).createElement(c, {
                viewBox: "0 0 44 44",
                width: "3em",
                height: "3em",
                fill: "currentColor",
                fillRule: "evenodd"
            }, (global.React || guac.react).createElement("circle", {
                cx: "22",
                cy: "22",
                r: "11"
            })), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX.Style, null, a.keyframes.loaderBlink)),
            style: {
                "> svg circle": {
                    animation: "blink 2s infinite alternate cubic-bezier(.64,.21,.39,.9);"
                }
            }
        }, e)
    }, e.Cascade = function(e) {
        const {
            SVG: c
        } = (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element;
        return this.merge({
            tag: "div",
            children: (global.React || guac.react).createElement((global.React || guac.react).Fragment, null, (global.React || guac.react).createElement(c, {
                viewBox: "0 0 44 44",
                width: "3em",
                height: "3em",
                fill: "currentColor",
                fillRule: "evenodd"
            }, (global.React || guac.react).createElement("circle", {
                cx: "12",
                cy: "22",
                r: "3"
            }), (global.React || guac.react).createElement("circle", {
                cx: "22",
                cy: "22",
                r: "3"
            }), (global.React || guac.react).createElement("circle", {
                cx: "32",
                cy: "22",
                r: "3"
            })), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX.Style, null, a.keyframes.loaderCascade)),
            style: {
                "> svg circle": {
                    animation: "cascade 1s infinite alternate;"
                },
                "> svg circle:nth-child(2)": {
                    animationDelay: "0.3s"
                },
                "> svg circle:nth-child(3)": {
                    animationDelay: "0.6s"
                }
            }
        }, e)
    }, e.Ripple = function(e) {
        const {
            SVG: c
        } = (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element;
        return this.merge({
            tag: "div",
            children: (global.React || guac.react).createElement((global.React || guac.react).Fragment, null, (global.React || guac.react).createElement(c, {
                viewBox: "0 0 44 44",
                width: "3em",
                height: "3em",
                fill: "none",
                fillRule: "evenodd",
                stroke: "currentColor"
            }, (global.React || guac.react).createElement("circle", {
                cx: "22",
                cy: "22",
                r: "20"
            })), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX.Style, null, a.keyframes.loaderRipple)),
            style: {
                "> svg": {
                    animation: "ripple 0.5s infinite cubic-bezier(.64,.21,.39,.9);",
                    transformOrigin: "center"
                }
            }
        }, e)
    }
})), "undefined" != typeof window && (window.global = window);
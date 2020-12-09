define("@widget/LAYOUT/c/bs-index-1904efbd.js", ["exports"], (function(o) {
    "use strict";
    const {
        widgetTypes: e,
        colorPackCategories: t,
        themeConstants: E,
        buttons: _
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants, n = (global.keyMirror || guac.keymirror)({
        NONE: null,
        SMALL_UNDERLINE: null,
        FULL_UNDERLINE: null,
        INLINE: null
    }), s = E.DEFAULT_OVERLAY_TEXT_SHADOW, T = {
        about4: 24,
        introduction5: 24,
        content5: 24,
        ordering1: 24,
        payment2: 24,
        zillow1: 24,
        reviews1: 24,
        rss1: 24,
        subscribe3: 24,
        mlsSearch1: 24,
        contact10: 24
    }, i = {
        spotlight: {
            fill: _.fills.SOLID
        },
        external: {
            fill: _.fills.NONE,
            decoration: _.decorations.NONE,
            shadow: _.shadows.NONE
        }
    };
    o.ABOUT1_IMAGE_WIDTH = "365px", o.BUTTON_ICON_SIZE = "24px", o.BUTTON_ICON_SIZE_SM = "18px", o.COMMON_BUTTON_CONFIG = i, o.CONTENT2_IMAGE_WIDTH = "600px", o.DEFAULT_HEADER_IMAGE_OPACITY = 25, o.DEFAULT_OVERLAY_TEXT_SHADOW = s, o.ICON_SIZE = 28, o.MIN_TARGET = 40, o.OVERLAY_DARK_TEXT_SHADOW = "0px 2px 10px rgba(0, 0, 0, 0.3)", o.OVERLAY_OPACITY_DEFAULTS = T, o.SEARCH_INPUT_LEFT_PADDING = 40, o.colorPackCategories = t, o.sectionHrTypes = n
})), "undefined" != typeof window && (window.global = window);
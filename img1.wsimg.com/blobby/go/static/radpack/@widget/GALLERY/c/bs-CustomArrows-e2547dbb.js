define("@widget/GALLERY/c/bs-CustomArrows-e2547dbb.js", ["exports", "@widget/GALLERY/c/bs-wrapWithLazyLoader"], (function(e, t) {
    "use strict";
    class o extends(global.React || guac.react).Component {
        componentDidUpdate(e) {
            const {
                nextSlide: t,
                prevSlide: o,
                triggerNextSlide: r
            } = this.props;
            r > e.triggerNextSlide && t(), r < e.triggerNextSlide && o()
        }
        render() {
            const {
                prevSlide: e,
                nextSlide: o,
                visible: r,
                overrideArrowStyle: a = {}
            } = this.props, l = {
                opacity: r ? 1 : 0,
                transition: "opacity 0.5s",
                ":hover": {
                    opacity: 1
                }
            };
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: l
            }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Button.Previous, {
                "data-aid": t.dataAids.GALLERY_SCROLL_LEFT_ARROW,
                onClick: e,
                style: a
            }), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Button.Next, {
                "data-aid": t.dataAids.GALLERY_SCROLL_RIGHT_ARROW,
                onClick: o,
                style: a
            }))
        }
    }
    o.propTypes = {
        prevSlide: (global.PropTypes || guac["prop-types"]).func,
        nextSlide: (global.PropTypes || guac["prop-types"]).func,
        visible: (global.PropTypes || guac["prop-types"]).bool,
        overrideArrowStyle: (global.PropTypes || guac["prop-types"]).object,
        triggerNextSlide: (global.PropTypes || guac["prop-types"]).number
    }, e.CustomArrows = o
})), "undefined" != typeof window && (window.global = window);
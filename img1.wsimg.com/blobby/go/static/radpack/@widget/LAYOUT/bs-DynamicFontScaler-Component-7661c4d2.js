define("@widget/LAYOUT/bs-DynamicFontScaler-Component-7661c4d2.js", ["exports", "@widget/LAYOUT/c/bs-_rollupPluginBabelHelpers"], (function(t, e) {
    "use strict";
    const {
        EDIT: s
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants.renderModes;
    class i extends(global.React || guac.react).Component {
        constructor(...t) {
            super(...t), e._defineProperty(this, "calculateBestFit", () => {
                const {
                    prioritizeDefault: t
                } = this.props;
                if (!this._container || !this._target) return;
                if (this._target.hasAttribute("data-font-scaled")) return void this.reset();
                const {
                    renderMode: e
                } = this.props, i = this.getScalers();
                if (this._container.clientWidth && i.length) {
                    const r = this._container.style.width || "";
                    this._container.style.width = "100%", this.initScalers(i);
                    const n = this.getBestFit(i);
                    this.hideScalers(i), this._container.style.width = r;
                    const o = this.getComputedPropertyValue(n, "font-size");
                    if (o && o !== this._lastSize) {
                        if (t) {
                            const t = this.getComputedPropertyValue(this._target, "font-size");
                            if (parseInt(o, 10) >= parseInt(t, 10)) return
                        }
                        this._lastSize = o, e === s ? (this._styleElement || (this._styleElement = document.createElement("style"), document.head.appendChild(this._styleElement)), this._styleElement.textContent = `#${this._target.id} { font-size: ${o} !important; }`) : this._target.style.fontSize = o
                    }
                }
            }), e._defineProperty(this, "fits", t => {
                const {
                    maxLines: e
                } = this.props;
                return this.getContentWidth(t) <= this._container.clientWidth && this.getNumLines(t) <= e
            }), e._defineProperty(this, "getBestFit", t => t.find(this.fits) || (global._ || guac.lodash).last(t))
        }
        reset() {
            this._lastSize && (this._target.style.fontSize = "", this._lastSize = "", this._styleElement && (this._styleElement.parentNode.removeChild(this._styleElement), delete this._styleElement))
        }
        componentDidMount() {
            this._container = this.getContainer(), this._target = this.getTarget(), this.calculateBestFit(), window.ResizeObserver ? (this._observer = new ResizeObserver(() => {
                window.requestAnimationFrame(this.calculateBestFit)
            }), this._observer.observe(this._container)) : window.addEventListener("resize", this.calculateBestFit)
        }
        componentDidUpdate() {
            this._target = this.getTarget(), this.reset(), this.calculateBestFit()
        }
        componentWillUnmount() {
            this._observer ? this._observer.disconnect() : window.removeEventListener("resize", this.calculateBestFit), this._styleElement && this._styleElement.parentNode && this._styleElement.parentNode.removeChild(this._styleElement)
        }
        getContainer() {
            const {
                containerId: t
            } = this.props;
            return document.getElementById(t)
        }
        getTarget() {
            const {
                targetId: t
            } = this.props;
            return document.getElementById(t)
        }
        getScalers() {
            const {
                containerId: t,
                fontSizes: e
            } = this.props;
            return Array.prototype.slice.call(this._container.querySelectorAll(`[data-scaler-id="scaler-${t}"]`)).sort((t, s) => e.indexOf(t.getAttribute("data-size")) - e.indexOf(s.getAttribute("data-size")))
        }
        getContentWidth(t) {
            const e = parseInt(this.getComputedPropertyValue(t, "padding-left") || 0, 10),
                s = parseInt(this.getComputedPropertyValue(t, "padding-right") || 0, 10);
            return t.scrollWidth + e + s
        }
        getComputedPropertyValue(t, e) {
            return document.defaultView.getComputedStyle(t).getPropertyValue(e)
        }
        getNumLines(t) {
            const e = t.offsetHeight,
                s = parseInt(this.getComputedPropertyValue(t, "line-height"), 10) || 1;
            return Math.floor(e / s)
        }
        initScalers(t) {
            t.forEach(t => {
                t.style.display = "inline-block", t.style.maxWidth = this._container.clientWidth + "px"
            })
        }
        hideScalers(t) {
            t.forEach(t => {
                t.style.display = "none", t.style.maxWidth = ""
            })
        }
        render() {
            return null
        }
    }
    i.propTypes = {
        renderMode: (global.PropTypes || guac["prop-types"]).oneOf(Object.values((global.Core || guac["@wsb/guac-widget-core"]).constants.renderModes)),
        containerId: (global.PropTypes || guac["prop-types"]).string.isRequired,
        targetId: (global.PropTypes || guac["prop-types"]).string.isRequired,
        fontSizes: (global.PropTypes || guac["prop-types"]).arrayOf((global.PropTypes || guac["prop-types"]).oneOf(Object.values((global.Core || guac["@wsb/guac-widget-core"]).constants.fontSizes))),
        maxLines: (global.PropTypes || guac["prop-types"]).number,
        prioritizeDefault: (global.PropTypes || guac["prop-types"]).bool
    }, i.defaultProps = {
        maxLines: 3
    }, t.default = i
})), "undefined" != typeof window && (window.global = window);
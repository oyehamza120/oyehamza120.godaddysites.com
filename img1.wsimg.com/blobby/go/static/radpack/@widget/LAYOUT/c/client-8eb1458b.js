define("@widget/LAYOUT/c/client-8eb1458b.js", ["exports", "@widget/LAYOUT/c/Layout"], (function(e, t) {
    "use strict";
    const i = {
            "@sm": {
                maxWidth: "smContainer"
            },
            "@md": {
                maxWidth: "mdContainer"
            },
            "@lg": {
                maxWidth: "lgContainer"
            }
        },
        n = {
            "> div": {
                paddingHorizontal: "medium"
            }
        };
    class d extends t.Default {
        Widget(e) {
            const {
                widgetType: t,
                widgetPreset: n
            } = this.base, d = {
                backgroundColor: "section",
                ...["HEADER", "FOOTER"].includes(t) || "introduction1" === n ? {} : {
                    position: "relative",
                    "> div": {
                        margin: "auto",
                        ...i
                    }
                }
            };
            return super.Widget(this.merge({
                style: d
            }, e))
        }
        WidgetBanner(e) {
            return this.Widget(this.merge({
                style: n,
                groupType: "Banner"
            }, e))
        }
        WidgetSplit(e) {
            return this.Widget(this.merge({
                style: n,
                groupType: "Split"
            }, e))
        }
        MapBanner(e) {
            return super.MapBanner(this.merge({
                style: {
                    marginHorizontal: "medium"
                }
            }, e))
        }
        SplitItem(e) {
            return super.SplitItem(this.merge({
                style: {
                    "@md": {
                        "> *": {
                            maxWidth: "100%"
                        },
                        ":first-child": {
                            paddingRight: "medium"
                        },
                        ":last-child": {
                            paddingLeft: "medium"
                        },
                        ":only-child": {
                            paddingHorizontal: 0
                        }
                    }
                }
            }, e))
        }
        SplitItemImage(e) {
            return super.SplitItemImage(this.merge({
                style: {
                    "@md": {
                        ":first-child": {
                            paddingRight: 0
                        },
                        ":last-child": {
                            paddingLeft: 0
                        }
                    }
                }
            }, e))
        }
        SectionSplitContainer(e) {
            return super.Container(this.merge({
                style: {
                    paddingHorizontal: 0
                }
            }, e))
        }
    }
    e.FixedWidth = d, e.factory = function(e) {
        return class extends(t.factory(e)) {}
    }
})), "undefined" != typeof window && (window.global = window);
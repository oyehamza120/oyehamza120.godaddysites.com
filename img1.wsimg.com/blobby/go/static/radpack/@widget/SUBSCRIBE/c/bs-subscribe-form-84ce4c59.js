define("@widget/SUBSCRIBE/c/bs-subscribe-form-84ce4c59.js", ["exports"], (function(e) {
    "use strict";

    function t() {
        return (t = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = arguments[t];
                for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a])
            }
            return e
        }).apply(this, arguments)
    }
    var o = (global.keyMirror || guac.keymirror)({
            SECTION_TITLE_REND: null,
            FORM_DESC_REND: null,
            CONFIRM_TEXT_REND: null,
            CONFIRM_DESC_REND: null,
            SUBSCRIBE_LABEL_REND: null,
            PLACEHOLDER_TEXT_REND: null,
            VERIFICATION_TEXT_REND: null,
            SUBSCRIBE_INNER_FORM_REND: null,
            SUBSCRIBE_EMAIL_ERR_REND: null,
            SUBSCRIBE_SUBMIT_BUTTON_REND: null,
            SECTION_BACKGROUND: null,
            COUPON_DESC_REND: null,
            COUPON_CODE_REND: null,
            COUPON_CODE_FETCHING: null
        }),
        a = {
            email: {
                regex: /^([a-zA-Z0-9_\-.+]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,63}(?:\.[a-z]{2})?)$/i
            }
        };
    class s extends(global.React || guac.react).Component {
        constructor(e) {
            super(e), this.onSubmit = this.onSubmit.bind(this), this.handleChange = this.handleChange.bind(this), this.validateForm = this.validateForm.bind(this), this.state = {
                input: "",
                isValid: !0
            }
        }
        handleChange(e) {
            this.setState({
                input: e.target.value
            })
        }
        buildRequestBody() {
            const {
                accountId: e,
                websiteId: t,
                locale: o,
                inputPlaceholder: a
            } = this.props;
            return {
                accountId: e,
                websiteId: t,
                locale: o,
                formData: [{
                    label: a,
                    value: this.state.input
                }]
            }
        }
        sendForm(e) {
            const {
                formSubmitHost: t
            } = this.props;
            if (!t) return !1;
            var o = new XMLHttpRequest;
            return o.open("POST", t + "/v1/subscriber"), o.setRequestHeader("Content-Type", "application/json; charset=UTF-8"), o.onreadystatechange = this.handleSubmitResponse, o.send(JSON.stringify(e)), !0
        }
        validateForm() {
            let e = !0;
            return e = a.email.regex.test(this.state.input), this.setState({
                isValid: e
            }), e
        }
        validateAndSend() {
            if (this.validateForm()) {
                const e = this.buildRequestBody();
                this.sendForm(e), this.props.onSubmit()
            }
        }
        onSubmit(e) {
            e.preventDefault(), this.validateAndSend()
        }
        render() {
            const {
                input: e,
                isValid: t
            } = this.state, {
                inputPlaceholder: a,
                subscribeButtonLabel: s,
                staticContent: r = {}
            } = this.props, {
                defaultButtonLabel: n,
                emailErrorMessage: l
            } = r, i = (0, (global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.TCCLUtils.getTCCLString)({
                eid: "ux2.gem-subscribe.submit_form.click",
                type: "click"
            });
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.InputGroup, {
                input: {
                    placeholder: a,
                    onChange: this.handleChange,
                    value: e
                },
                button: {
                    children: s || n,
                    "data-tccl": i,
                    "data-aid": o.SUBSCRIBE_SUBMIT_BUTTON_REND
                },
                error: !t && l,
                errorProps: {
                    "data-aid": o.SUBSCRIBE_EMAIL_ERR_REND
                },
                onSubmit: this.onSubmit
            })
        }
    }
    s.propTypes = {
        accountId: (global.PropTypes || guac["prop-types"]).string,
        websiteId: (global.PropTypes || guac["prop-types"]).string,
        formSubmitHost: (global.PropTypes || guac["prop-types"]).string,
        category: (global.PropTypes || guac["prop-types"]).string,
        formSuccessMessage: (global.PropTypes || guac["prop-types"]).string,
        formFields: (global.PropTypes || guac["prop-types"]).array,
        formFieldVariationOptions: (global.PropTypes || guac["prop-types"]).object,
        onSubmit: (global.PropTypes || guac["prop-types"]).func,
        subscribeButtonLabel: (global.PropTypes || guac["prop-types"]).string,
        inputPlaceholder: (global.PropTypes || guac["prop-types"]).string,
        staticContent: (global.PropTypes || guac["prop-types"]).object,
        locale: (global.PropTypes || guac["prop-types"]).string.isRequired
    };
    const r = {
            verification: {
                wordWrap: "break-word",
                marginBottom: "medium"
            },
            couponContainer: {
                justifyContent: "center",
                display: "flex"
            },
            coupon: {
                wordWrap: "break-word",
                marginBottom: "medium",
                padding: "xxsmall",
                border: "dashed 2px"
            }
        },
        n = () => (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Loader, {
            "data-aid": o.COUPON_CODE_FETCHING,
            size: "medium",
            style: {
                marginTop: "xlarge",
                opacity: "0.5"
            }
        });
    class l extends(global.React || guac.react).Component {
        constructor(e) {
            super(e), this.state = {
                code: null,
                description: null,
                loaded: !1
            }, this.loadCouponData = this.loadCouponData.bind(this)
        }
        componentDidMount() {
            this.loadCouponData()
        }
        loadCouponData() {
            const {
                olsConfigHost: e
            } = this.props;
            if (!e) return;
            const t = new XMLHttpRequest,
                o = new Date;
            t.open("GET", `${e}/api/v3/config?ts=${+o}`, !0), t.withCredentials = !0, t.setRequestHeader("Accept", "*/*"), t.onload = () => {
                let e = {},
                    o = null,
                    a = null;
                try {
                    e = t.response ? JSON.parse(t.response) : {}
                } catch (t) {
                    e = {}
                }
                e.subscribe_coupon && (o = e.subscribe_coupon.code, a = e.subscribe_coupon.description), this.setState({
                    code: o,
                    description: a,
                    loaded: !0
                })
            }, t.onerror = () => {
                this.setState({
                    loaded: !0
                })
            }, t.send()
        }
        render() {
            const {
                description: e,
                code: t,
                loaded: a
            } = this.state;
            if (!a) return (global.React || guac.react).createElement(n, null);
            if (!e || !t) return null;
            const {
                Block: s,
                Text: l
            } = (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element;
            return (global.React || guac.react).createElement(s, null, (global.React || guac.react).createElement(l, {
                style: r.verification,
                "data-aid": o.COUPON_DESC_REND
            }, e), (global.React || guac.react).createElement(s, {
                style: r.couponContainer
            }, (global.React || guac.react).createElement(l, {
                style: r.coupon,
                "data-aid": o.COUPON_CODE_REND
            }, t)))
        }
    }
    l.propTypes = {
        olsConfigHost: (global.PropTypes || guac["prop-types"]).string.isRequired
    };
    const i = {
            container: {
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginHorizontal: "auto",
                maxWidth: "90%",
                "@md": {
                    maxWidth: "80%"
                }
            },
            verification: {
                wordWrap: "break-word",
                marginBottom: "medium"
            },
            success: {
                wordWrap: "break-word",
                marginBottom: "medium"
            },
            couponContainer: {
                justifyContent: "center",
                display: "flex"
            },
            coupon: {
                wordWrap: "break-word",
                marginBottom: "medium",
                padding: "xxsmall",
                border: "dashed 2px"
            }
        },
        c = ({
            enable: e,
            message: t
        }) => {
            if (!e) return null;
            const a = {
                style: i.success,
                tag: "p",
                "data-aid": o.CONFIRM_TEXT_REND,
                "data-route": "confirmationMessage"
            };
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Text.Major, a, t)
        };
    c.propTypes = {
        enable: (global.PropTypes || guac["prop-types"]).bool,
        message: (global.PropTypes || guac["prop-types"]).string
    };
    const p = ({
        enable: e,
        text: t
    }) => e ? (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Text, {
        style: i.verification,
        "data-aid": o.CONFIRM_DESC_REND
    }, t) : null;
    p.propTypes = {
        enable: (global.PropTypes || guac["prop-types"]).bool,
        text: (global.PropTypes || guac["prop-types"]).string
    };
    class g extends(global.React || guac.react).PureComponent {
        render() {
            const {
                formSuccessMessage: e,
                verificationText: t,
                showCoupon: o,
                olsConfigHost: a
            } = this.props;
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Group.Group, {
                style: i.container
            }, (global.React || guac.react).createElement(c, {
                enable: !!e,
                message: e
            }), (global.React || guac.react).createElement(p, {
                enable: !o,
                text: t
            }), o ? (global.React || guac.react).createElement(l, {
                olsConfigHost: a
            }) : null)
        }
    }
    g.propTypes = {
        formSuccessMessage: (global.PropTypes || guac["prop-types"]).string,
        category: (global.PropTypes || guac["prop-types"]).string,
        verificationText: (global.PropTypes || guac["prop-types"]).string,
        showCoupon: (global.PropTypes || guac["prop-types"]).bool,
        olsConfigHost: (global.PropTypes || guac["prop-types"]).string
    }, g.defaultProps = {
        formSuccessMessage: "",
        category: "",
        verificationText: "",
        showCoupon: !1,
        olsConfigHost: ""
    };
    var u = {
        local: {
            olsHost: "https://{websiteId}.onlinestore.dev-godaddy.com",
            olsPublishedSiteHost: "https://{websiteId}.onlinestore.dev-godaddy.com",
            formSubmitHost: "https://gem.apps.dev-godaddy.com"
        },
        development: {
            olsHost: "https://{websiteId}.onlinestore.dev-godaddy.com",
            olsPublishedSiteHost: "https://{websiteId}.onlinestore.dev-godaddy.com",
            formSubmitHost: "https://gem.apps.dev-godaddy.com"
        },
        test: {
            olsHost: "https://{websiteId}.onlinestore.test-godaddy.com",
            olsPublishedSiteHost: "https://{websiteId}.mysimplestore.test-godaddy.com",
            formSubmitHost: "https://gem.apps.test-godaddy.com"
        },
        production: {
            olsHost: "https://{websiteId}.onlinestore.godaddy.com",
            olsPublishedSiteHost: "https://{websiteId}.mysimplestore.com",
            formSubmitHost: "https://gem.apps.godaddy.com"
        }
    };
    class d extends(global.React || guac.react).Component {
        constructor(e) {
            super(e), this.state = {
                formSubmitted: !1
            }, this.onSubmit = this.onSubmit.bind(this)
        }
        onSubmit() {
            this.setState({
                formSubmitted: !0
            })
        }
        renderDescriptionSection({
            forceCouponDescription: e = !1
        } = {}) {
            const {
                description: t,
                couponDescription: a
            } = this.props, s = e || this.shouldShowCoupon(), r = s ? a : t;
            return r ? (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Text, {
                style: {
                    wordWrap: "break-word",
                    textAlign: "center",
                    marginBottom: "small"
                },
                "data-aid": o.FORM_DESC_REND,
                "data-route": s ? "couponDescription" : "description"
            }, r) : null
        }
        renderSectionTitle(e, t, a) {
            return e ? (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Heading.Middle, {
                "data-aid": o.SECTION_TITLE_REND,
                "data-route": "sectionTitle",
                isInternalPage: t,
                order: a,
                style: {
                    wordWrap: "break-word",
                    textAlign: "center"
                }
            }, e) : null
        }
        getFormSubmitHost() {
            const {
                env: e
            } = this.props;
            return (u && u[e] || {}).formSubmitHost
        }
        getOlsConfigHost() {
            const {
                env: e,
                renderMode: t,
                websiteId: o
            } = this.props, a = u && u[e] || {};
            return (("PUBLISH" === t ? a.olsPublishedSiteHost : a.olsHost) || "").replace("{websiteId}", o)
        }
        shouldShowCoupon() {
            const {
                hasNonCommercePlan: e,
                couponToggleHidden: t,
                couponToggle: o
            } = this.props;
            return Boolean(!e && !t && o)
        }
        render() {
            const {
                category: e,
                section: a,
                confirmationMessage: r,
                staticContent: n,
                couponConfirmationMessage: l
            } = this.props, {
                verificationText: i
            } = n;
            if (this.state.formSubmitted) return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Base, {
                category: e,
                section: a
            }, (global.React || guac.react).createElement(g, {
                formSuccessMessage: this.shouldShowCoupon() ? l : r,
                verificationText: i,
                olsConfigHost: this.getOlsConfigHost(),
                showCoupon: this.shouldShowCoupon()
            }));
            const c = (global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.Grid;
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Base, {
                category: e,
                section: a
            }, (global.React || guac.react).createElement(c, {
                bottom: !1,
                "data-aid": o.SUBSCRIBE_INNER_FORM_REND,
                inset: !0
            }, (global.React || guac.react).createElement(c.Cell, null, this.renderDescriptionSection(), (global.React || guac.react).createElement(s, t({
                formSubmitHost: this.getFormSubmitHost(),
                onSubmit: this.onSubmit
            }, this.props)))))
        }
    }
    d.propTypes = {
        category: (global.PropTypes || guac["prop-types"]).string,
        formTitle: (global.PropTypes || guac["prop-types"]).string,
        section: (global.PropTypes || guac["prop-types"]).string,
        confirmationMessage: (global.PropTypes || guac["prop-types"]).string,
        description: (global.PropTypes || guac["prop-types"]).string,
        env: (global.PropTypes || guac["prop-types"]).string,
        renderMode: (global.PropTypes || guac["prop-types"]).string.isRequired,
        websiteId: (global.PropTypes || guac["prop-types"]).string.isRequired,
        staticContent: (global.PropTypes || guac["prop-types"]).object,
        locale: (global.PropTypes || guac["prop-types"]).string,
        hasNonCommercePlan: (global.PropTypes || guac["prop-types"]).boolean,
        couponToggleHidden: (global.PropTypes || guac["prop-types"]).boolean,
        couponToggle: (global.PropTypes || guac["prop-types"]).boolean,
        couponDescription: (global.PropTypes || guac["prop-types"]).string,
        couponConfirmationMessage: (global.PropTypes || guac["prop-types"]).string
    }, e.DataAid = o, e.FormSuccessMessage = g, e.InnerForm = s, e.SubscribeForm = d, e._extends = t
})), "undefined" != typeof window && (window.global = window);
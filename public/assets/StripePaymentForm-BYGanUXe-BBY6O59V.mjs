import { a as e, n as t, t as n } from "./jsx-runtime-BYDbnt8x.mjs";
import { C as r, Mt as i, Wt as a, at as o, gt as s, w as c, z as l } from "./cal-atoms-ChAnjorB.mjs";
//#region node_modules/@calcom/atoms/dist/StripePaymentForm-BYGanUXe.js
var u = /* @__PURE__ */ e(n(), 1), d = /* @__PURE__ */ e(t(), 1), f = /* @__PURE__ */ c(/* @__PURE__ */ s());
function p(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function m(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? p(Object(n), !0).forEach(function(t) {
			g(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function h(e) {
	"@babel/helpers - typeof";
	return h = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, h(e);
}
function g(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function _(e, t) {
	return v(e) || y(e, t) || b(e, t) || S();
}
function v(e) {
	if (Array.isArray(e)) return e;
}
function y(e, t) {
	var n = e && (typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"]);
	if (n != null) {
		var r = [], i = !0, a = !1, o, s;
		try {
			for (n = n.call(e); !(i = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t)); i = !0);
		} catch (e) {
			a = !0, s = e;
		} finally {
			try {
				!i && n.return != null && n.return();
			} finally {
				if (a) throw s;
			}
		}
		return r;
	}
}
function b(e, t) {
	if (e) {
		if (typeof e == "string") return x(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return x(e, t);
	}
}
function x(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function S() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var C = function(e) {
	var t = d.useRef(e);
	return d.useEffect(function() {
		t.current = e;
	}, [e]), t.current;
}, w = function(e) {
	return e !== null && h(e) === "object";
}, T = function(e) {
	return w(e) && typeof e.then == "function";
}, E = function(e) {
	return w(e) && typeof e.elements == "function" && typeof e.createToken == "function" && typeof e.createPaymentMethod == "function" && typeof e.confirmCardPayment == "function";
}, D = "[object Object]", O = function e(t, n) {
	if (!w(t) || !w(n)) return t === n;
	var r = Array.isArray(t);
	if (r !== Array.isArray(n)) return !1;
	var i = Object.prototype.toString.call(t) === D;
	if (i !== (Object.prototype.toString.call(n) === D)) return !1;
	if (!i && !r) return t === n;
	var a = Object.keys(t), o = Object.keys(n);
	if (a.length !== o.length) return !1;
	for (var s = {}, c = 0; c < a.length; c += 1) s[a[c]] = !0;
	for (var l = 0; l < o.length; l += 1) s[o[l]] = !0;
	var u = Object.keys(s);
	if (u.length !== a.length) return !1;
	var d = t, f = n;
	return u.every(function(t) {
		return e(d[t], f[t]);
	});
}, k = function(e, t, n) {
	return w(e) ? Object.keys(e).reduce(function(r, i) {
		var a = !w(t) || !O(e[i], t[i]);
		return n.includes(i) ? (a && console.warn(`Unsupported prop change: options.${i} is not a mutable property.`), r) : a ? m(m({}, r || {}), {}, g({}, i, e[i])) : r;
	}, null) : null;
}, A = "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.", j = function(e) {
	if (e === null || E(e)) return e;
	throw Error(A);
}, M = function(e) {
	if (T(e)) return {
		tag: "async",
		stripePromise: Promise.resolve(e).then(j)
	};
	var t = j(e);
	return t === null ? { tag: "empty" } : {
		tag: "sync",
		stripe: t
	};
}, N = /* @__PURE__ */ d.createContext(null);
N.displayName = "ElementsContext";
var P = function(e, t) {
	if (!e) throw Error(`Could not find Elements context; You need to wrap the part of your app that ${t} in an <Elements> provider.`);
	return e;
}, F = function(e) {
	var t = e.stripe, n = e.options, r = e.children, i = d.useMemo(function() {
		return M(t);
	}, [t]), a = _(d.useState(function() {
		return {
			stripe: i.tag === "sync" ? i.stripe : null,
			elements: i.tag === "sync" ? i.stripe.elements(n) : null
		};
	}), 2), o = a[0], s = a[1];
	d.useEffect(function() {
		var e = !0, t = function(e) {
			s(function(t) {
				return t.stripe ? t : {
					stripe: e,
					elements: e.elements(n)
				};
			});
		};
		return i.tag === "async" && !o.stripe ? i.stripePromise.then(function(n) {
			n && e && t(n);
		}) : i.tag === "sync" && !o.stripe && t(i.stripe), function() {
			e = !1;
		};
	}, [
		i,
		o,
		n
	]);
	var c = C(t);
	d.useEffect(function() {
		c !== null && c !== t && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.");
	}, [c, t]);
	var l = C(n);
	return d.useEffect(function() {
		if (o.elements) {
			var e = k(n, l, ["clientSecret", "fonts"]);
			e && o.elements.update(e);
		}
	}, [
		n,
		l,
		o.elements
	]), d.useEffect(function() {
		var e = o.stripe;
		!e || !e._registerWrapper || !e.registerAppInfo || (e._registerWrapper({
			name: "react-stripe-js",
			version: "1.10.0"
		}), e.registerAppInfo({
			name: "react-stripe-js",
			version: "1.10.0",
			url: "https://stripe.com/docs/stripe-js/react"
		}));
	}, [o.stripe]), /* @__PURE__ */ d.createElement(N.Provider, { value: o }, r);
};
F.propTypes = {
	stripe: f.any,
	options: f.object
};
var I = function(e) {
	return P(d.useContext(N), e);
}, L = function() {
	return I("calls useElements()").elements;
}, R = function() {
	return I("calls useStripe()").stripe;
};
f.func.isRequired;
var z = function(e) {
	var t = d.useRef(e);
	return d.useEffect(function() {
		t.current = e;
	}, [e]), function() {
		t.current && t.current.apply(t, arguments);
	};
}, B = function() {}, V = function(e) {
	return e.charAt(0).toUpperCase() + e.slice(1);
}, H = function(e, t) {
	var n = `${V(e)}Element`, r = t ? function(e) {
		I(`mounts <${n}>`);
		var t = e.id, r = e.className;
		return /* @__PURE__ */ d.createElement("div", {
			id: t,
			className: r
		});
	} : function(t) {
		var r = t.id, i = t.className, a = t.options, o = a === void 0 ? {} : a, s = t.onBlur, c = s === void 0 ? B : s, l = t.onFocus, u = l === void 0 ? B : l, f = t.onReady, p = f === void 0 ? B : f, m = t.onChange, h = m === void 0 ? B : m, g = t.onEscape, _ = g === void 0 ? B : g, v = t.onClick, y = v === void 0 ? B : v, b = t.onLoadError, x = b === void 0 ? B : b, S = t.onLoaderStart, w = S === void 0 ? B : S, T = I(`mounts <${n}>`).elements, E = d.useRef(null), D = d.useRef(null), O = z(p), A = z(c), j = z(u), M = z(y), N = z(h), P = z(_), F = z(x), L = z(w);
		d.useLayoutEffect(function() {
			if (E.current == null && T && D.current != null) {
				var t = T.create(e, o);
				E.current = t, t.mount(D.current), t.on("ready", function() {
					return O(t);
				}), t.on("change", N), t.on("blur", A), t.on("focus", j), t.on("escape", P), t.on("loaderror", F), t.on("loaderstart", L), t.on("click", M);
			}
		});
		var R = C(o);
		return d.useEffect(function() {
			if (E.current) {
				var e = k(o, R, ["paymentRequest"]);
				e && E.current.update(e);
			}
		}, [o, R]), d.useLayoutEffect(function() {
			return function() {
				E.current &&= (E.current.destroy(), null);
			};
		}, []), /* @__PURE__ */ d.createElement("div", {
			id: r,
			className: i,
			ref: D
		});
	};
	return r.propTypes = {
		id: f.string,
		className: f.string,
		onChange: f.func,
		onBlur: f.func,
		onFocus: f.func,
		onReady: f.func,
		onClick: f.func,
		onLoadError: f.func,
		onLoaderStart: f.func,
		options: f.object
	}, r.displayName = n, r.__elementType = e, r;
}, U = typeof window > "u";
H("auBankAccount", U), H("card", U), H("cardNumber", U), H("cardExpiry", U), H("cardCvc", U), H("fpxBank", U), H("iban", U), H("idealBank", U), H("p24Bank", U), H("epsBank", U);
var W = H("payment", U);
H("paymentRequestButton", U), H("linkAuthentication", U), H("shippingAddress", U), H("affirmMessage", U), H("afterpayClearpayMessage", U);
var G = {}, K;
function q() {
	if (K) return G;
	K = 1, Object.defineProperty(G, "__esModule", { value: !0 });
	function e(t) {
		"@babel/helpers - typeof";
		return e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
			return typeof e;
		} : function(e) {
			return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
		}, e(t);
	}
	var t = "https://js.stripe.com/v3", n = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/, r = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used", i = function() {
		for (var e = document.querySelectorAll(`script[src^="${t}"]`), r = 0; r < e.length; r++) {
			var i = e[r];
			if (n.test(i.src)) return i;
		}
		return null;
	}, a = function(e) {
		var n = e && !e.advancedFraudSignals ? "?advancedFraudSignals=false" : "", r = document.createElement("script");
		r.src = `${t}${n}`;
		var i = document.head || document.body;
		if (!i) throw Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
		return i.appendChild(r), r;
	}, o = function(e, t) {
		!e || !e._registerWrapper || e._registerWrapper({
			name: "stripe-js",
			version: "1.35.0",
			startTime: t
		});
	}, s = null, c = function(e) {
		return s !== null || (s = new Promise(function(t, n) {
			if (typeof window > "u") {
				t(null);
				return;
			}
			if (window.Stripe && e && console.warn(r), window.Stripe) {
				t(window.Stripe);
				return;
			}
			try {
				var o = i();
				o && e ? console.warn(r) : o ||= a(e), o.addEventListener("load", function() {
					window.Stripe ? t(window.Stripe) : n(/* @__PURE__ */ Error("Stripe.js not available"));
				}), o.addEventListener("error", function() {
					n(/* @__PURE__ */ Error("Failed to load Stripe.js"));
				});
			} catch (e) {
				n(e);
				return;
			}
		})), s;
	}, l = function(e, t, n) {
		if (e === null) return null;
		var r = e.apply(void 0, t);
		return o(r, n), r;
	}, u = function(t) {
		var n = `invalid load parameters; expected object of shape

    {advancedFraudSignals: boolean}

but received

    ${JSON.stringify(t)}
`;
		if (t === null || e(t) !== "object") throw Error(n);
		if (Object.keys(t).length === 1 && typeof t.advancedFraudSignals == "boolean") return t;
		throw Error(n);
	}, d, f = !1, p = function() {
		var e = [...arguments];
		f = !0;
		var t = Date.now();
		return c(d).then(function(n) {
			return l(n, e, t);
		});
	};
	return p.setLoadParameters = function(e) {
		if (f) throw Error("You cannot change load parameters after calling loadStripe");
		d = u(e);
	}, G.loadStripe = p, G;
}
var J, Y;
function X() {
	return Y || (Y = 1, J = q()), J;
}
var Z = X(), Q = {}.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || "", $, ee = (e) => ($ ||= Z.loadStripe(e || Q), $), te = (e) => {
	let { t, i18n: n } = i(), { paymentOption: a, elements: o, state: s, onPaymentElementChange: c } = e, [f, p] = (0, d.useState)(!1), [m, h] = (0, d.useState)(a !== "HOLD"), g = f || !m || ["processing", "error"].includes(s.status);
	return (0, d.useEffect)(() => {
		o?.update({ locale: n.language });
	}, [o, n.language]), /* @__PURE__ */ (0, u.jsxs)("form", {
		id: "payment-form",
		className: "bg-subtle mt-4 rounded-md p-6",
		onSubmit: e.onSubmit,
		children: [
			/* @__PURE__ */ (0, u.jsx)("div", { children: /* @__PURE__ */ (0, u.jsx)(W, {
				options: { layout: "accordion" },
				onChange: (e) => c()
			}) }),
			a === "HOLD" && /* @__PURE__ */ (0, u.jsx)("div", {
				className: "bg-cal-info mb-5 mt-2 rounded-md p-3",
				children: /* @__PURE__ */ (0, u.jsx)(l, {
					description: t("acknowledge_booking_no_show_fee", {
						amount: e.payment.amount / 100,
						formatParams: { amount: { currency: e.payment.currency } }
					}),
					onChange: (e) => h(e.target.checked),
					descriptionClassName: "text-info font-semibold"
				})
			}),
			/* @__PURE__ */ (0, u.jsxs)("div", {
				className: "mt-2 flex justify-end space-x-2",
				children: [/* @__PURE__ */ (0, u.jsx)(r, {
					color: "minimal",
					disabled: g,
					id: "cancel",
					type: "button",
					loading: f,
					onClick: () => {
						p(!0), e.onCancel();
					},
					children: /* @__PURE__ */ (0, u.jsx)("span", {
						id: "button-text",
						children: t("cancel")
					})
				}), /* @__PURE__ */ (0, u.jsx)(r, {
					type: "submit",
					disabled: g,
					loading: s.status === "processing",
					id: "submit",
					color: "secondary",
					children: /* @__PURE__ */ (0, u.jsx)("span", {
						id: "button-text",
						children: s.status === "processing" ? /* @__PURE__ */ (0, u.jsx)("div", {
							className: "spinner",
							id: "spinner"
						}) : t(a === "HOLD" ? "submit_card" : "pay_now")
					})
				})]
			}),
			s.status === "error" && /* @__PURE__ */ (0, u.jsx)("div", {
				className: "mt-4 text-center text-red-900 dark:text-gray-300",
				role: "alert",
				children: s.error.message
			})
		]
	});
}, ne = (e) => {
	let { t } = o(), n = L(), r = e.payment.paymentOption;
	e.booking.attendees[0].email;
	let i = R(), [s, c] = (0, d.useState)({ status: "idle" });
	return /* @__PURE__ */ (0, u.jsx)(te, {
		...e,
		elements: n,
		paymentOption: r,
		state: s,
		onSubmit: async (o) => {
			var s;
			if (o.preventDefault(), !i || !n) return;
			c({ status: "processing" });
			let l, u = { uid: e.booking.uid };
			r === "HOLD" && "setupIntent" in e.payment.data ? (l = await i.confirmSetup({
				elements: n,
				redirect: "if_required"
			}), l.setupIntent && (u.payment_intent = l.setupIntent.id, u.payment_intent_client_secret = l.setupIntent.client_secret || void 0, u.redirect_status = l.setupIntent.status)) : r === "ON_BOOKING" && (l = await i.confirmPayment({
				elements: n,
				redirect: "if_required",
				confirmParams: { return_url: `${a}/booking/${u.uid}` }
			}), l.paymentIntent && (u.payment_intent = l.paymentIntent.id, u.payment_intent_client_secret = l.paymentIntent.client_secret || void 0, u.redirect_status = l.paymentIntent.status)), l != null && l.error ? c({
				status: "error",
				error: /* @__PURE__ */ Error(`Payment failed: ${l.error.message}`)
			}) : (c({ status: "idle" }), (s = e.onPaymentSuccess) == null || s.call(e, e), e.location && (u.location = e.location.includes("integration") ? t("web_conferencing_details_to_follow") : e.location));
		},
		onCancel: () => {
			var t;
			(t = e.onPaymentCancellation) == null || t.call(e, e);
		},
		onPaymentElementChange: () => {
			c({ status: "idle" });
		}
	});
}, re = (e) => {
	let t = ee(e.payment.data.stripe_publishable_key), [n, r] = (0, d.useState)("stripe");
	return (0, d.useEffect)(() => {
		document.documentElement.classList.contains("dark") && r("night");
	}, []), /* @__PURE__ */ (0, u.jsx)(F, {
		stripe: t,
		options: {
			clientSecret: e.clientSecret,
			appearance: { theme: n }
		},
		children: /* @__PURE__ */ (0, u.jsx)(ne, { ...e })
	});
};
//#endregion
export { re as default };

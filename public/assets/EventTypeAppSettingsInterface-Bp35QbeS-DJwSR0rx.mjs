import { a as e, n as t, t as n } from "./jsx-runtime-BqlYg9ib.mjs";
import { n as r, r as i, t as a } from "./currencyOptions-r01lKGBF-pm3S2AbX.mjs";
import { Ct as o, E as s, M as c, Mt as l, W as u, vt as d, wn as f } from "./cal-atoms-D3rhTwCE.mjs";
//#region node_modules/@calcom/atoms/dist/EventTypeAppSettingsInterface-Bp35QbeS.js
var p = /* @__PURE__ */ e(n(), 1), m = /* @__PURE__ */ e(t(), 1), h = ({ getAppData: e, setAppData: t, eventType: n }) => {
	let h = e("price"), g = e("currency") || r[0].value, [_, v] = (0, m.useState)(r.find((e) => e.value === g)), [y, b] = (0, m.useState)(i(g) ? a[g] : ""), x = e("paymentOption"), S = d?.find((e) => x === e.value) || {
		label: d[0].label,
		value: d[0].value
	}, C = !!n.seatsPerTimeSlot, [w, T] = (0, m.useState)(e("enabled")), { t: E } = l(), D = n.recurringEvent?.count !== void 0;
	return (0, m.useEffect)(() => {
		w && (e("currency") || t("currency", r[0].value), e("paymentOption") || t("paymentOption", d[0].value));
	}, []), D ? /* @__PURE__ */ (0, p.jsx)(c, {
		className: "mt-2",
		severity: "warning",
		title: E("warning_recurring_event_payment")
	}) : w ? /* @__PURE__ */ (0, p.jsxs)(p.Fragment, { children: [
		/* @__PURE__ */ (0, p.jsx)("div", {
			className: "mt-2 block items-center sm:flex",
			children: /* @__PURE__ */ (0, p.jsx)(o, {
				label: "Price",
				labelSrOnly: !0,
				addOnLeading: y,
				addOnSuffix: g,
				step: "0.01",
				min: "0.5",
				type: "number",
				required: !0,
				className: "block w-full rounded-sm pl-2 text-sm",
				placeholder: "Price",
				"data-testid": "paypal-price-input",
				onChange: (e) => {
					t("price", u(Number(e.target.value), g)), _ && t("currency", _.value);
				},
				value: h > 0 ? s(h, g) : void 0
			})
		}),
		/* @__PURE__ */ (0, p.jsxs)("div", {
			className: "mt-5 w-60",
			children: [/* @__PURE__ */ (0, p.jsx)("label", {
				className: "text-default mb-1 block text-sm font-medium",
				htmlFor: "currency",
				children: E("currency")
			}), /* @__PURE__ */ (0, p.jsx)(f, {
				variant: "default",
				"data-testid": "paypal-currency-select",
				options: r,
				value: _,
				className: "text-black",
				defaultValue: _,
				onChange: (e) => {
					e && (v(e), b(a[e.value]), t("currency", e.value));
				}
			})]
		}),
		/* @__PURE__ */ (0, p.jsxs)("div", {
			className: "mt-4 w-60",
			children: [/* @__PURE__ */ (0, p.jsx)("label", {
				className: "text-default mb-1 block text-sm font-medium",
				htmlFor: "currency",
				children: "Payment option"
			}), /* @__PURE__ */ (0, p.jsx)(f, {
				"data-testid": "paypal-payment-option-select",
				defaultValue: S ? {
					...S,
					label: E(S.label)
				} : {
					...d[0],
					label: E(d[0].label)
				},
				options: d.map((e) => ({
					...e,
					label: E(e.label) || e.label
				})),
				onChange: (e) => {
					e && t("paymentOption", e.value);
				},
				className: "mb-1 h-[38px] w-full",
				isDisabled: C
			})]
		}),
		C && x === "HOLD" && /* @__PURE__ */ (0, p.jsx)(c, {
			className: "mt-2",
			severity: "warning",
			title: E("seats_and_no_show_fee_error")
		})
	] }) : null;
};
//#endregion
export { h as default };

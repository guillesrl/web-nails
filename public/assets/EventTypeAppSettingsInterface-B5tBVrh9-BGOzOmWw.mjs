import { a as e, n as t, t as n } from "./jsx-runtime-BYDbnt8x.mjs";
import { Ct as r, M as i, Mt as a, Nt as o, nn as s, wn as c } from "./cal-atoms-ChAnjorB.mjs";
//#region node_modules/@calcom/atoms/dist/EventTypeAppSettingsInterface-B5tBVrh9.js
var l = /* @__PURE__ */ e(n(), 1), u = /* @__PURE__ */ e(t(), 1), d = [{
	label: "BTC",
	value: "BTC",
	unit: "sats"
}], f = ({ eventType: e, getAppData: t, setAppData: n }) => {
	let { t: f } = a(), p = t("price"), m = t("currency"), [h, g] = (0, u.useState)(d.find((e) => e.value === m) || d[0]), _ = t("paymentOption"), v = s?.find((e) => _ === e.value) || {
		label: s[0].label,
		value: s[0].value
	}, y = !!e.seatsPerTimeSlot, [b] = (0, u.useState)(t("enabled")), x = e.recurringEvent?.count !== void 0;
	return (0, u.useEffect)(() => {
		!m && b && n("currency", h.value);
	}, [
		m,
		h,
		n,
		b
	]), /* @__PURE__ */ (0, l.jsx)(l.Fragment, { children: x ? /* @__PURE__ */ (0, l.jsx)(i, {
		className: "mt-2",
		severity: "warning",
		title: f("warning_recurring_event_payment")
	}) : b && /* @__PURE__ */ (0, l.jsxs)(l.Fragment, { children: [
		/* @__PURE__ */ (0, l.jsx)("div", {
			className: "mt-2 block items-center sm:flex",
			children: /* @__PURE__ */ (0, l.jsx)(r, {
				label: "Price",
				labelSrOnly: !0,
				addOnLeading: /* @__PURE__ */ (0, l.jsx)(o, { className: "h-4 w-4" }),
				addOnSuffix: h.unit || h.value,
				type: "number",
				required: !0,
				className: "block w-full rounded-sm border-gray-300 pl-2 pr-12 text-sm",
				placeholder: "Price",
				onChange: (e) => {
					n("price", Number(e.target.value)), m && n("currency", m);
				},
				value: p && p > 0 ? p : void 0
			})
		}),
		/* @__PURE__ */ (0, l.jsxs)("div", {
			className: "mt-5 w-60",
			children: [/* @__PURE__ */ (0, l.jsx)("label", {
				className: "text-default block text-sm font-medium",
				htmlFor: "currency",
				children: f("currency")
			}), /* @__PURE__ */ (0, l.jsx)(c, {
				variant: "default",
				options: d,
				value: h,
				className: "text-black",
				defaultValue: h,
				onChange: (e) => {
					e && (g(e), n("currency", e.value));
				}
			})]
		}),
		/* @__PURE__ */ (0, l.jsxs)("div", {
			className: "mt-2 w-60",
			children: [/* @__PURE__ */ (0, l.jsx)("label", {
				className: "text-default block text-sm font-medium",
				htmlFor: "currency",
				children: "Payment option"
			}), /* @__PURE__ */ (0, l.jsx)(c, {
				defaultValue: v ? {
					...v,
					label: f(v.label)
				} : {
					...s[0],
					label: f(s[0].label)
				},
				options: s.map((e) => ({
					...e,
					label: f(e.label) || e.label
				})),
				onChange: (e) => {
					e && n("paymentOption", e.value);
				},
				className: "mb-1 h-[38px] w-full",
				isDisabled: y
			})]
		}),
		y && _ === "HOLD" && /* @__PURE__ */ (0, l.jsx)(i, {
			className: "mt-2",
			severity: "warning",
			title: f("seats_and_no_show_fee_error")
		})
	] }) });
};
//#endregion
export { f as default };

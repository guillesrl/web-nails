import { a as e, n as t, t as n } from "./jsx-runtime-BqlYg9ib.mjs";
import { Ct as r, E as i, M as a, Mt as o, W as s, wn as c } from "./cal-atoms-B35e3sTk.mjs";
//#region node_modules/@calcom/atoms/dist/EventTypeAppSettingsInterface-CtA38FAl.js
var l = /* @__PURE__ */ e(n(), 1), u = /* @__PURE__ */ e(t(), 1), d = [{
	label: "on_booking_option",
	value: "ON_BOOKING"
}], f = [
	{
		label: "United States dollar (USD)",
		value: "usd"
	},
	{
		label: "Singapore dollar (SGD)",
		value: "sgd"
	},
	{
		label: "Malaysian ringgit (MYR)",
		value: "myr"
	},
	{
		label: "Indonesian rupiah (IDR)",
		value: "idr"
	},
	{
		label: "Japanese yen (JPY)",
		value: "jpy"
	},
	{
		label: "Hong Kong dollar (HKD)",
		value: "hkd"
	},
	{
		label: "Thai baht (THB)",
		value: "thb"
	},
	{
		label: "Australian dollar (AUD)",
		value: "aud"
	},
	{
		label: "New Zealand dollar (NZD)",
		value: "nzd"
	},
	{
		label: "British pound sterling (GBP)",
		value: "gbp"
	},
	{
		label: "Philippine peso (PHP)",
		value: "php"
	},
	{
		label: "Indian rupee (INR)",
		value: "inr"
	},
	{
		label: "Chinese yuan (CNY)",
		value: "cny"
	},
	{
		label: "Euro (EUR)",
		value: "eur"
	},
	{
		label: "Swiss franc (CHF)",
		value: "chf"
	},
	{
		label: "Danish krone (DKK)",
		value: "dkk"
	},
	{
		label: "Swedish krona (SEK)",
		value: "sek"
	},
	{
		label: "Norwegian krone (NOK)",
		value: "nok"
	},
	{
		label: "Vietnamese đồng (VND)",
		value: "vnd"
	},
	{
		label: "Canadian dollar (CAD)",
		value: "cad"
	},
	{
		label: "South Korean won (KRW)",
		value: "krw"
	}
], p = ({ getAppData: e, setAppData: t, disabled: n, eventType: p }) => {
	let m = e("price"), h = e("currency") || f[0].value, [g, _] = (0, u.useState)(f.find((e) => e.value === h) || {
		label: f[0].label,
		value: f[0].value
	}), v = e("paymentOption"), y = e("enabled"), { t: b } = o(), x = p.recurringEvent?.count !== void 0, S = !!p.seatsPerTimeSlot;
	return (0, u.useEffect)(() => {
		y && (e("currency") || t("currency", f[0].value), e("paymentOption") || t("paymentOption", d[0].value));
	}, [
		y,
		e,
		t
	]), /* @__PURE__ */ (0, l.jsxs)(l.Fragment, { children: [x && /* @__PURE__ */ (0, l.jsx)(a, {
		className: "mt-2",
		severity: "warning",
		title: b("warning_recurring_event_payment")
	}), !x && y && /* @__PURE__ */ (0, l.jsxs)(l.Fragment, { children: [
		/* @__PURE__ */ (0, l.jsx)("div", {
			className: "mt-4 block items-center justify-start sm:flex sm:space-x-2",
			children: /* @__PURE__ */ (0, l.jsx)(r, {
				"data-testid": "stripe-price-input",
				label: b("price"),
				className: "h-[38px]",
				addOnLeading: /* @__PURE__ */ (0, l.jsx)(l.Fragment, { children: g.value ? ((e, t) => 0 .toLocaleString(e, {
					style: "currency",
					currency: t,
					minimumFractionDigits: 0,
					maximumFractionDigits: 0
				}).replace(/\d/g, "").trim())("en", g.value) : "" }),
				addOnSuffix: h.toUpperCase(),
				addOnClassname: "h-[38px]",
				step: "1",
				min: "1",
				type: "number",
				required: !0,
				placeholder: "Price",
				disabled: n,
				onChange: (e) => {
					t("price", s(Number(e.target.value), h));
				},
				value: m > 0 ? ((e) => {
					let t = Math.floor(e).toString();
					return parseInt(t);
				})(i(m, h)) : void 0
			})
		}),
		/* @__PURE__ */ (0, l.jsxs)("div", {
			className: "mt-5 w-60",
			children: [/* @__PURE__ */ (0, l.jsx)("label", {
				className: "text-default mb-1 block text-sm font-medium",
				htmlFor: "currency",
				children: b("currency")
			}), /* @__PURE__ */ (0, l.jsx)(c, {
				"data-testid": "stripe-currency-select",
				variant: "default",
				options: f,
				value: g,
				className: "text-black",
				defaultValue: g,
				onChange: (e) => {
					e && (_(e), t("currency", e.value));
				}
			})]
		}),
		S && v === "HOLD" && /* @__PURE__ */ (0, l.jsx)(a, {
			className: "mt-2",
			severity: "warning",
			title: b("seats_and_no_show_fee_error")
		})
	] })] });
};
//#endregion
export { p as default };

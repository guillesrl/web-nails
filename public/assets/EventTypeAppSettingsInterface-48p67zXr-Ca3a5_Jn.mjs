import { a as e, n as t, t as n } from "./jsx-runtime-BqlYg9ib.mjs";
import { Ct as r, Kt as i, M as a, Mt as o, wn as s } from "./cal-atoms-B35e3sTk.mjs";
//#region node_modules/@calcom/atoms/dist/EventTypeAppSettingsInterface-48p67zXr.js
var c = /* @__PURE__ */ e(n(), 1), l = /* @__PURE__ */ e(t(), 1), u = [
	{
		label: "SATS",
		value: "BTC",
		unit: "SATS"
	},
	{
		label: "USD- US Dollar",
		value: "USD",
		unit: "USD"
	},
	{
		label: "EUR- Euro",
		value: "EUR",
		unit: "EUR"
	},
	{
		label: "JPY- Japanese Yen",
		value: "JPY",
		unit: "JPY"
	},
	{
		label: "CNY- Yuan Renminbi",
		value: "CNY",
		unit: "CNY"
	},
	{
		label: "GBP- Pounds Sterling",
		value: "GBP",
		unit: "GBP"
	},
	{
		label: "AED- UAE Dirham",
		value: "AED",
		unit: "AED"
	},
	{
		label: "ZAR- South African Rand",
		value: "ZAR",
		unit: "ZAR"
	},
	{
		label: "HKD- Hong Kong Dollar",
		value: "HKD",
		unit: "HKD"
	},
	{
		label: "BRL- Brazilian Real",
		value: "BRL",
		unit: "BRL"
	},
	{
		label: "AUD- Australian Dollar",
		value: "AUD",
		unit: "AUD"
	},
	{
		label: "CAD- Canadian Dollar",
		value: "CAD",
		unit: "CAD"
	},
	{
		label: "CZK- Czech Koruna",
		value: "CZK",
		unit: "CZK"
	},
	{
		label: "DKK- Danish Krone",
		value: "DKK",
		unit: "DKK"
	},
	{
		label: "NZD- New Zealand Dollar",
		value: "NZD",
		unit: "NZD"
	},
	{
		label: "MYR- Malaysian Ringgit",
		value: "MYR",
		unit: "MYR"
	},
	{
		label: "PHP- Philippine Peso",
		value: "PHP",
		unit: "PHP"
	},
	{
		label: "CHF- Swiss Franc",
		value: "CHF",
		unit: "CHF"
	},
	{
		label: "NOK- Norwegian Krone",
		value: "NOK",
		unit: "NOK"
	},
	{
		label: "THB- Thai Baht",
		value: "THB",
		unit: "THB"
	},
	{
		label: "SEK- Swedish Krona",
		value: "SEK",
		unit: "SEK"
	},
	{
		label: "SGD- Singapore Dollar",
		value: "SGD",
		unit: "SGD"
	},
	{
		label: "PLN- Polish Zloty",
		value: "PLN",
		unit: "PLN"
	},
	{
		label: "TWD- New Taiwan Dollar",
		value: "TWD",
		unit: "TWD"
	},
	{
		label: "MXN- Mexican Peso",
		value: "MXN",
		unit: "MXN"
	},
	{
		label: "ILS- New Isreali Shekel",
		value: "ILS",
		unit: "ILS"
	},
	{
		label: "NGN- Nigerian Naira",
		value: "NGN",
		unit: "NGN"
	}
], d = [
	"SATS",
	"BTC",
	"JPY"
], f = (e, t) => d.includes(t.toUpperCase()) ? e : Math.round(e * 100), p = (e, t) => d.includes(t.toUpperCase()) ? e : e / 100, m = ({ eventType: e, getAppData: t, setAppData: n }) => {
	let { t: d } = o(), m = t("price"), h = t("currency") || (u.length > 0 ? u[0].value : ""), [g, _] = (0, l.useState)(u.find((e) => e.value === h) || (u.length > 0 ? {
		label: u[0].label,
		value: u[0].value
	} : null)), v = t("paymentOption"), y = i?.find((e) => v === e.value) || {
		label: i.length > 0 ? i[0].label : "",
		value: i.length > 0 ? i[0].value : ""
	}, b = !!e.seatsPerTimeSlot, [x, S] = (0, l.useState)(t("enabled")), C = e.recurringEvent?.count !== void 0;
	return (0, l.useEffect)(() => {
		x && !t("currency") && n("currency", u[0].value);
	}, [
		x,
		t,
		n
	]), /* @__PURE__ */ (0, c.jsx)(c.Fragment, { children: C ? /* @__PURE__ */ (0, c.jsx)(a, {
		className: "mt-2",
		severity: "warning",
		title: d("warning_recurring_event_payment")
	}) : x && /* @__PURE__ */ (0, c.jsxs)(c.Fragment, { children: [
		/* @__PURE__ */ (0, c.jsxs)("div", {
			className: "mt-4 inline-block",
			children: [/* @__PURE__ */ (0, c.jsx)("label", {
				className: "text-default block text-sm font-medium mb-1",
				htmlFor: "price",
				children: d("price")
			}), /* @__PURE__ */ (0, c.jsx)(r, {
				label: d("price"),
				className: "text-black dark:text-white w-auto",
				addOnClassname: "h-[38px]",
				min: "1",
				type: "number",
				required: !0,
				placeholder: "Price",
				onChange: (e) => {
					n("price", f(Number(e.target.value), h));
				},
				value: m && m > 0 ? ((e) => Math.floor(e))(p(m, h)) : void 0
			})]
		}),
		/* @__PURE__ */ (0, c.jsxs)("div", {
			className: "mt-5 w-60",
			children: [/* @__PURE__ */ (0, c.jsx)("label", {
				className: "text-default block text-sm font-medium",
				htmlFor: "currency",
				children: d("currency")
			}), /* @__PURE__ */ (0, c.jsx)(s, {
				variant: "default",
				options: u,
				value: g,
				defaultValue: g,
				onChange: (e) => {
					e && (_(e), n("currency", e.value));
				}
			})]
		}),
		/* @__PURE__ */ (0, c.jsxs)("div", {
			className: "mt-2 w-60",
			children: [/* @__PURE__ */ (0, c.jsx)("label", {
				className: "text-default block text-sm font-medium",
				htmlFor: "paymentOption",
				children: d("payment_option")
			}), /* @__PURE__ */ (0, c.jsx)(s, {
				defaultValue: y ? {
					...y,
					label: d(y.label)
				} : i.length > 0 ? {
					...i[0],
					label: d(i[0].label)
				} : void 0,
				options: i.map((e) => ({
					...e,
					label: d(e.label) || e.label
				})),
				onChange: (e) => {
					e && n("paymentOption", e.value);
				},
				className: "mb-1 h-[38px] w-full",
				isDisabled: b
			})]
		}),
		b && v === "HOLD" && /* @__PURE__ */ (0, c.jsx)(a, {
			className: "mt-2",
			severity: "warning",
			title: d("seats_and_no_show_fee_error")
		})
	] }) });
};
//#endregion
export { m as default };

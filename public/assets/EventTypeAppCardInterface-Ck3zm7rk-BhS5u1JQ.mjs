import { a as e, n as t, t as n } from "./jsx-runtime-BqlYg9ib.mjs";
import { t as r } from "./AppCard-D2gzMALd-CxE88MfQ.mjs";
import { n as i, r as a, t as o } from "./currencyOptions-r01lKGBF-pm3S2AbX.mjs";
import { Ct as s, Lt as c, M as l, Mt as u, Wt as d, jt as f, rn as p, wn as m } from "./cal-atoms-B35e3sTk.mjs";
//#region node_modules/@calcom/atoms/dist/EventTypeAppCardInterface-Ck3zm7rk.js
var h = /* @__PURE__ */ e(n(), 1), g = /* @__PURE__ */ e(t(), 1), _ = function({ app: e, eventType: t, onAppInstallSuccess: n }) {
	let _ = f.useSearchParams(), v = f.usePathname(), y = (0, g.useMemo)(() => `${v}${_ ? `?${_.toString()}` : ""}`, [v, _]), { t: b } = u(), { getAppData: x, setAppData: S } = p(), C = x("price"), w = x("currency"), T = x("paymentOption"), E = x("enabled"), [D, O] = (0, g.useState)(i.find((e) => e.value === w)), [k, A] = (0, g.useState)(a(w) ? o[w] : ""), [j, M] = (0, g.useState)(E), N = c?.find((e) => T === e.value) || {
		label: c[0].label,
		value: c[0].value
	}, P = t.recurringEvent?.count !== void 0;
	return /* @__PURE__ */ (0, h.jsx)(r, {
		onAppInstallSuccess: n,
		returnTo: d + y,
		app: e,
		switchChecked: j,
		switchOnClick: (e) => {
			M(e);
		},
		description: /* @__PURE__ */ (0, h.jsx)(h.Fragment, { children: "Add a mock payment to your events" }),
		children: /* @__PURE__ */ (0, h.jsx)(h.Fragment, { children: P ? /* @__PURE__ */ (0, h.jsx)(l, {
			className: "mt-2",
			severity: "warning",
			title: b("warning_recurring_event_payment")
		}) : j && /* @__PURE__ */ (0, h.jsxs)(h.Fragment, { children: [
			/* @__PURE__ */ (0, h.jsx)("div", {
				className: "mt-2 block items-center sm:flex",
				children: /* @__PURE__ */ (0, h.jsx)(s, {
					id: "test-mock-payment-app-price",
					label: "Price",
					labelSrOnly: !0,
					addOnLeading: k,
					addOnSuffix: w,
					step: "0.01",
					min: "0.5",
					type: "number",
					required: !0,
					className: "block w-full rounded-sm pl-2 text-sm",
					placeholder: "Price",
					onChange: (e) => {
						S("price", Number(e.target.value) * 100), D && S("currency", D.value);
					},
					value: C > 0 ? C / 100 : void 0
				})
			}),
			/* @__PURE__ */ (0, h.jsxs)("div", {
				className: "mt-5 w-60",
				children: [/* @__PURE__ */ (0, h.jsx)("label", {
					className: "text-default mb-1 block text-sm font-medium",
					htmlFor: "currency",
					children: b("currency")
				}), /* @__PURE__ */ (0, h.jsx)(m, {
					id: "test-mock-payment-app-currency-id",
					variant: "default",
					options: i,
					value: D,
					className: "text-black",
					defaultValue: D,
					onChange: (e) => {
						e && (O(e), A(o[e.value]), S("currency", e.value));
					}
				})]
			}),
			/* @__PURE__ */ (0, h.jsxs)("div", {
				className: "mt-4 w-60",
				children: [/* @__PURE__ */ (0, h.jsx)("label", {
					className: "text-default mb-1 block text-sm font-medium",
					htmlFor: "currency",
					children: "Payment option"
				}), /* @__PURE__ */ (0, h.jsx)(m, {
					defaultValue: N ? {
						...N,
						label: b(N.label)
					} : {
						...c[0],
						label: b(c[0].label)
					},
					options: c.map((e) => ({
						...e,
						label: b(e.label) || e.label
					})),
					onChange: (e) => {
						e && S("paymentOption", e.value);
					},
					className: "mb-1 h-[38px] w-full",
					isDisabled: !1
				})]
			})
		] }) })
	});
};
//#endregion
export { _ as default };

import { a as e, n as t, t as n } from "./jsx-runtime-BqlYg9ib.mjs";
import { t as r } from "./AppCard-D2gzMALd-CxE88MfQ.mjs";
import i from "./EventTypeAppSettingsInterface-Bp35QbeS-D_r4E10d.mjs";
import { Mt as a, Wt as o, jt as s, n as c, rn as l } from "./cal-atoms-B35e3sTk.mjs";
//#region node_modules/@calcom/atoms/dist/EventTypeAppCardInterface-DrIcvZDq.js
var u = /* @__PURE__ */ e(n(), 1), d = /* @__PURE__ */ e(t(), 1), f = function({ app: e, eventType: t, eventTypeFormMetadata: n, onAppInstallSuccess: f }) {
	let p = s.useSearchParams(), m = s.usePathname(), h = (0, d.useMemo)(() => `${m}${p ? `?${p.toString()}` : ""}`, [m, p]), { getAppData: g, setAppData: _, disabled: v } = l(), [y, b] = (0, d.useState)(g("enabled")), x = c(n), { t: S } = a(), C = !y && x;
	return /* @__PURE__ */ (0, u.jsx)(r, {
		onAppInstallSuccess: f,
		returnTo: o + h,
		app: e,
		switchChecked: y,
		switchOnClick: (e) => {
			b(e);
		},
		description: /* @__PURE__ */ (0, u.jsx)(u.Fragment, { children: "Add Paypal payment to your events" }),
		disableSwitch: C,
		switchTooltip: C ? S("other_payment_app_enabled") : void 0,
		children: /* @__PURE__ */ (0, u.jsx)(u.Fragment, { children: /* @__PURE__ */ (0, u.jsx)(i, {
			eventType: t,
			slug: e.slug,
			disabled: v,
			getAppData: g,
			setAppData: _
		}) })
	});
};
//#endregion
export { f as default };

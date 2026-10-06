import { a as e, n as t, t as n } from "./jsx-runtime-BqlYg9ib.mjs";
import { t as r } from "./AppCard-D2gzMALd-DCgrypM8.mjs";
import i from "./EventTypeAppSettingsInterface-B5tBVrh9-DIDVBMtM.mjs";
import { Mt as a, Wt as o, jt as s, n as c, rn as l } from "./cal-atoms-D3rhTwCE.mjs";
//#region node_modules/@calcom/atoms/dist/EventTypeAppCardInterface-XJyNFK3k.js
var u = /* @__PURE__ */ e(n(), 1), d = /* @__PURE__ */ e(t(), 1), f = function({ app: e, eventType: t, eventTypeFormMetadata: n, onAppInstallSuccess: f }) {
	let p = s.useSearchParams(), { t: m } = a(), h = s.usePathname(), g = (0, d.useMemo)(() => `${h}${p ? `?${p.toString()}` : ""}`, [h, p]), { getAppData: _, setAppData: v, disabled: y } = l(), [b, x] = (0, d.useState)(_("enabled")), S = c(n), C = !b && S;
	return /* @__PURE__ */ (0, u.jsx)(r, {
		onAppInstallSuccess: f,
		returnTo: o + g,
		app: e,
		switchChecked: b,
		switchOnClick: (e) => {
			x(e);
		},
		description: /* @__PURE__ */ (0, u.jsx)(u.Fragment, { children: "Add bitcoin lightning payments to your events" }),
		disableSwitch: C,
		switchTooltip: C ? m("other_payment_app_enabled") : void 0,
		children: /* @__PURE__ */ (0, u.jsx)(i, {
			eventType: t,
			slug: e.slug,
			disabled: y,
			getAppData: _,
			setAppData: v
		})
	});
};
//#endregion
export { f as default };

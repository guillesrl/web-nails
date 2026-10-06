import { a as e, n as t, t as n } from "./jsx-runtime-BqlYg9ib.mjs";
import { t as r } from "./AppCard-D2gzMALd-DCgrypM8.mjs";
import { t as i } from "./useIsAppEnabled-CVIVp35Y-B62u0y3e.mjs";
import a from "./EventTypeAppSettingsInterface-CtA38FAl-CMqf-BZQ.mjs";
import { Mt as o, Wt as s, jt as c, n as l, rn as u } from "./cal-atoms-D3rhTwCE.mjs";
//#region node_modules/@calcom/atoms/dist/EventTypeAppCardInterface-2XQbEKfc.js
var d = /* @__PURE__ */ e(n(), 1), f = /* @__PURE__ */ e(t(), 1), p = function({ app: e, eventType: t, eventTypeFormMetadata: n, onAppInstallSuccess: p }) {
	let { t: m } = o(), h = c.usePathname(), { getAppData: g, setAppData: _, disabled: v } = u(), { enabled: y, updateEnabled: b } = i(e), x = l(n), [S] = (0, f.useState)(g("enabled")), C = !S && x;
	return /* @__PURE__ */ (0, d.jsx)(r, {
		onAppInstallSuccess: p,
		returnTo: `${s}${h}?tabName=apps`,
		app: e,
		switchChecked: y,
		switchOnClick: (e) => {
			b(e);
		},
		teamId: t.team?.id || void 0,
		disableSwitch: C,
		switchTooltip: C ? m("other_payment_app_enabled") : void 0,
		children: /* @__PURE__ */ (0, d.jsx)(a, {
			eventType: t,
			slug: e.slug,
			disabled: v,
			getAppData: g,
			setAppData: _
		})
	});
};
//#endregion
export { p as default };

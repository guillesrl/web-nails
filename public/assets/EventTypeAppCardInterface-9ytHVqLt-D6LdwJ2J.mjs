import { a as e, n as t, t as n } from "./jsx-runtime-BYDbnt8x.mjs";
import { t as r } from "./AppCard-D2gzMALd-Bm7EFxUZ.mjs";
import i from "./EventTypeAppSettingsInterface-48p67zXr-D7sx7fDF.mjs";
import { Mt as a, Wt as o, jt as s, n as c, rn as l } from "./cal-atoms-ChAnjorB.mjs";
//#region node_modules/@calcom/atoms/dist/EventTypeAppCardInterface-9ytHVqLt.js
var u = /* @__PURE__ */ e(n(), 1), d = /* @__PURE__ */ e(t(), 1), f = function({ eventType: e, app: t, eventTypeFormMetadata: n, onAppInstallSuccess: f }) {
	let { t: p } = a(), m = s.usePathname(), { getAppData: h, setAppData: g, disabled: _ } = l(), [v, y] = (0, d.useState)(h("enabled")), b = c(n), x = !v && b;
	return /* @__PURE__ */ (0, u.jsx)(r, {
		onAppInstallSuccess: f,
		returnTo: `${o}${m}?tabName=apps`,
		app: t,
		switchChecked: v,
		switchOnClick: (e) => {
			y(e);
		},
		description: /* @__PURE__ */ (0, u.jsx)(u.Fragment, { children: "Add lightning payments to your events and booking" }),
		disableSwitch: x,
		switchTooltip: x ? p("other_payment_app_enabled") : void 0,
		children: /* @__PURE__ */ (0, u.jsx)(i, {
			eventType: e,
			slug: t.slug,
			disabled: _,
			getAppData: h,
			setAppData: g
		})
	});
};
//#endregion
export { f as default };

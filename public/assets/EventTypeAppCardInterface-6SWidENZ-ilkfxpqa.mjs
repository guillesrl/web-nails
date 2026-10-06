import { a as e, t } from "./jsx-runtime-BqlYg9ib.mjs";
import { t as n } from "./AppCard-D2gzMALd-DCgrypM8.mjs";
import { t as r } from "./useIsAppEnabled-CVIVp35Y-B62u0y3e.mjs";
import i from "./EventTypeAppSettingsInterface-ebC2puEb-BpnzBPn6.mjs";
import { rn as a } from "./cal-atoms-D3rhTwCE.mjs";
//#region node_modules/@calcom/atoms/dist/EventTypeAppCardInterface-6SWidENZ.js
var o = /* @__PURE__ */ e(t(), 1), s = function({ app: e, eventType: t, onAppInstallSuccess: s }) {
	let { getAppData: c, setAppData: l, disabled: u } = a(), { enabled: d, updateEnabled: f } = r(e);
	return /* @__PURE__ */ (0, o.jsx)(n, {
		onAppInstallSuccess: s,
		hideSettingsIcon: !0,
		app: e,
		switchOnClick: (e) => {
			f(e);
		},
		switchChecked: d,
		teamId: t.team?.id || void 0,
		children: /* @__PURE__ */ (0, o.jsx)(i, {
			eventType: t,
			slug: e.slug,
			disabled: u,
			getAppData: c,
			setAppData: l
		})
	});
};
//#endregion
export { s as default };

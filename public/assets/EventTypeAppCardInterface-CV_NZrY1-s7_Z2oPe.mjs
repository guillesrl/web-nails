import { a as e, t } from "./jsx-runtime-BqlYg9ib.mjs";
import { t as n } from "./AppCard-D2gzMALd-DCgrypM8.mjs";
import { t as r } from "./useIsAppEnabled-CVIVp35Y-B62u0y3e.mjs";
import i from "./EventTypeAppSettingsInterface-u5cKJxEv-B2oOvWem.mjs";
import { rn as a } from "./cal-atoms-D3rhTwCE.mjs";
//#region node_modules/@calcom/atoms/dist/EventTypeAppCardInterface-CV_NZrY1.js
var o = /* @__PURE__ */ e(t(), 1), s = function({ eventType: e, app: t, onAppInstallSuccess: s }) {
	let { enabled: c, updateEnabled: l } = r(t), { disabled: u, getAppData: d, setAppData: f } = a();
	return /* @__PURE__ */ (0, o.jsx)(n, {
		onAppInstallSuccess: s,
		app: t,
		switchOnClick: (e) => {
			l(e);
		},
		switchChecked: c,
		teamId: e.team?.id || void 0,
		children: /* @__PURE__ */ (0, o.jsx)(i, {
			eventType: e,
			slug: t.slug,
			disabled: u,
			getAppData: d,
			setAppData: f
		})
	});
};
//#endregion
export { s as default };

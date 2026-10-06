import { a as e, t } from "./jsx-runtime-BqlYg9ib.mjs";
import { t as n } from "./AppCard-D2gzMALd-CxE88MfQ.mjs";
import { t as r } from "./useIsAppEnabled-CVIVp35Y-BFw8SdUN.mjs";
import i from "./EventTypeAppSettingsInterface-DjYDtgLI-CiVsi8Mr.mjs";
import { rn as a } from "./cal-atoms-B35e3sTk.mjs";
//#region node_modules/@calcom/atoms/dist/EventTypeAppCardInterface-DC18MvPi.js
var o = /* @__PURE__ */ e(t(), 1), s = function({ app: e, eventType: t, onAppInstallSuccess: s }) {
	let { getAppData: c, setAppData: l, disabled: u } = a(), { enabled: d, updateEnabled: f } = r(e);
	return /* @__PURE__ */ (0, o.jsx)(n, {
		onAppInstallSuccess: s,
		hideSettingsIcon: !0,
		app: e,
		switchOnClick: f,
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

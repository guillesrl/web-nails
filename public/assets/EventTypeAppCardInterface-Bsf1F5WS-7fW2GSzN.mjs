import { a as e, t } from "./jsx-runtime-BYDbnt8x.mjs";
import { t as n } from "./AppCard-D2gzMALd-Bm7EFxUZ.mjs";
import { t as r } from "./useIsAppEnabled-CVIVp35Y-DiLgCz-6.mjs";
import i from "./EventTypeAppSettingsInterface-DB8kaVKc-EF0rHIki.mjs";
import { rn as a } from "./cal-atoms-ChAnjorB.mjs";
//#region node_modules/@calcom/atoms/dist/EventTypeAppCardInterface-Bsf1F5WS.js
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

import { a as e, t } from "./jsx-runtime-BYDbnt8x.mjs";
import { t as n } from "./AppCard-D2gzMALd-Bm7EFxUZ.mjs";
import { t as r } from "./useIsAppEnabled-CVIVp35Y-DiLgCz-6.mjs";
import i from "./EventTypeAppSettingsInterface-BH_m6hHK-B7qtRm3r.mjs";
import { Mt as a, rn as o } from "./cal-atoms-ChAnjorB.mjs";
//#region node_modules/@calcom/atoms/dist/EventTypeAppCardInterface-GGuuK5YE.js
var s = /* @__PURE__ */ e(t(), 1), c = function({ app: e, eventType: t, onAppInstallSuccess: c }) {
	let { getAppData: l, setAppData: u, disabled: d } = o(), { enabled: f, updateEnabled: p } = r(e), { t: m } = a();
	return /* @__PURE__ */ (0, s.jsx)(n, {
		onAppInstallSuccess: c,
		app: e,
		description: m("confirmation_page_gif"),
		switchOnClick: (e) => {
			p(e);
		},
		switchChecked: f,
		teamId: t.team?.id || void 0,
		children: /* @__PURE__ */ (0, s.jsx)(i, {
			eventType: t,
			slug: e.slug,
			disabled: d,
			getAppData: l,
			setAppData: u
		})
	});
};
//#endregion
export { c as default };

import { a as e, t } from "./jsx-runtime-BYDbnt8x.mjs";
import { t as n } from "./AppCard-D2gzMALd-Bm7EFxUZ.mjs";
import { t as r } from "./useIsAppEnabled-CVIVp35Y-DiLgCz-6.mjs";
import { Ct as i, rn as a } from "./cal-atoms-ChAnjorB.mjs";
//#region node_modules/@calcom/atoms/dist/EventTypeAppCardInterface-FeLvh3um.js
var o = /* @__PURE__ */ e(t(), 1), s = function({ app: e, eventType: t, onAppInstallSuccess: s }) {
	let { getAppData: c, setAppData: l, disabled: u } = a(), d = c("SITE_ID"), { enabled: f, updateEnabled: p } = r(e);
	return /* @__PURE__ */ (0, o.jsx)(n, {
		onAppInstallSuccess: s,
		app: e,
		switchOnClick: (e) => {
			p(e);
		},
		switchChecked: f,
		teamId: t.team?.id || void 0,
		children: /* @__PURE__ */ (0, o.jsx)(i, {
			disabled: u,
			name: "Site ID",
			value: d,
			placeholder: "Enter your Site ID",
			onChange: (e) => {
				l("SITE_ID", e.target.value);
			}
		})
	});
};
//#endregion
export { s as default };

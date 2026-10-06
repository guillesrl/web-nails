import { a as e, t } from "./jsx-runtime-BqlYg9ib.mjs";
import { t as n } from "./AppCard-D2gzMALd-CxE88MfQ.mjs";
import { t as r } from "./useIsAppEnabled-CVIVp35Y-BFw8SdUN.mjs";
import { Wt as i, jt as a } from "./cal-atoms-B35e3sTk.mjs";
//#region node_modules/@calcom/atoms/dist/EventTypeAppCardInterface-xT2KpywN.js
var o = /* @__PURE__ */ e(t(), 1), s = function({ app: e, eventType: t, onAppInstallSuccess: s }) {
	let c = a.usePathname(), { enabled: l, updateEnabled: u } = r(e);
	return /* @__PURE__ */ (0, o.jsx)(n, {
		onAppInstallSuccess: s,
		returnTo: `${i}${c}?tabName=apps`,
		app: e,
		teamId: t.team?.id || void 0,
		switchOnClick: (e) => {
			u(e);
		},
		switchChecked: l,
		hideAppCardOptions: !0
	});
};
//#endregion
export { s as default };

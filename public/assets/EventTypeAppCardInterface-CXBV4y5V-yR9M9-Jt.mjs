import { a as e, n as t, t as n } from "./jsx-runtime-BqlYg9ib.mjs";
import { t as r } from "./AppCard-D2gzMALd-DCgrypM8.mjs";
import { Ct as i, rn as a } from "./cal-atoms-D3rhTwCE.mjs";
//#region node_modules/@calcom/atoms/dist/EventTypeAppCardInterface-CXBV4y5V.js
var o = /* @__PURE__ */ e(n(), 1), s = /* @__PURE__ */ e(t(), 1), c = function({ app: e, eventType: t, onAppInstallSuccess: n }) {
	let { getAppData: c, setAppData: l } = a(), u = c("trackingId"), [d, f] = (0, s.useState)(c("enabled"));
	return /* @__PURE__ */ (0, o.jsx)(r, {
		onAppInstallSuccess: n,
		app: e,
		switchOnClick: (e) => {
			f(!!e);
		},
		switchChecked: d,
		teamId: t.team?.id || void 0,
		children: /* @__PURE__ */ (0, o.jsx)(i, {
			name: "Tracking ID",
			value: u,
			onChange: (e) => {
				l("trackingId", e.target.value);
			}
		})
	});
};
//#endregion
export { c as default };

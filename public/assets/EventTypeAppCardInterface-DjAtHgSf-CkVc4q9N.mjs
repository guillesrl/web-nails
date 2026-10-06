import { a as e, t } from "./jsx-runtime-BYDbnt8x.mjs";
import { t as n } from "./AppCard-D2gzMALd-Bm7EFxUZ.mjs";
import { t as r } from "./useIsAppEnabled-CVIVp35Y-DiLgCz-6.mjs";
import { Ct as i, rn as a } from "./cal-atoms-ChAnjorB.mjs";
//#region node_modules/@calcom/atoms/dist/EventTypeAppCardInterface-DjAtHgSf.js
var o = /* @__PURE__ */ e(t(), 1), s = function({ app: e, eventType: t, onAppInstallSuccess: s }) {
	let { getAppData: c, setAppData: l, disabled: u } = a(), d = c("TRACKING_ID"), f = c("API_HOST"), { enabled: p, updateEnabled: m } = r(e);
	return /* @__PURE__ */ (0, o.jsx)(n, {
		onAppInstallSuccess: s,
		hideSettingsIcon: !0,
		app: e,
		switchOnClick: (e) => {
			m(e);
		},
		switchChecked: p,
		teamId: t.team?.id || void 0,
		children: /* @__PURE__ */ (0, o.jsxs)("div", {
			className: "flex flex-col gap-2",
			children: [/* @__PURE__ */ (0, o.jsx)(i, {
				required: !0,
				disabled: u,
				name: "Tracking ID",
				value: d,
				placeholder: "Enter your Tracking ID",
				onChange: (e) => {
					l("TRACKING_ID", e.target.value);
				}
			}), /* @__PURE__ */ (0, o.jsx)(i, {
				required: !0,
				disabled: u,
				name: "Api host",
				value: f,
				placeholder: "Enter your Api host url",
				onChange: (e) => {
					l("API_HOST", e.target.value);
				}
			})]
		})
	});
};
//#endregion
export { s as default };

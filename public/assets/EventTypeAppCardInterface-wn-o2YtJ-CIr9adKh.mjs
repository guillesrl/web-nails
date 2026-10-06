import { a as e, t } from "./jsx-runtime-BqlYg9ib.mjs";
import { t as n } from "./AppCard-D2gzMALd-CxE88MfQ.mjs";
import { t as r } from "./useIsAppEnabled-CVIVp35Y-BFw8SdUN.mjs";
import { Ct as i, rn as a } from "./cal-atoms-B35e3sTk.mjs";
//#region node_modules/@calcom/atoms/dist/EventTypeAppCardInterface-wn-o2YtJ.js
var o = /* @__PURE__ */ e(t(), 1), s = function({ app: e, eventType: t, onAppInstallSuccess: s }) {
	let { getAppData: c, setAppData: l, disabled: u } = a(), d = c("SITE_ID"), f = c("SCRIPT_URL"), { enabled: p, updateEnabled: m } = r(e);
	return /* @__PURE__ */ (0, o.jsx)(n, {
		onAppInstallSuccess: s,
		app: e,
		switchOnClick: (e) => {
			m(e);
		},
		switchChecked: p,
		teamId: t.team?.id || void 0,
		children: /* @__PURE__ */ (0, o.jsxs)("fieldset", {
			className: "stack-y-2",
			disabled: u,
			children: [/* @__PURE__ */ (0, o.jsx)(i, {
				disabled: u,
				name: "Script URL",
				value: f,
				defaultValue: "https://cloud.umami.is/script.js",
				placeholder: "Enter the script source URL",
				onChange: (e) => {
					l("SCRIPT_URL", e.target.value);
				}
			}), /* @__PURE__ */ (0, o.jsx)(i, {
				disabled: u,
				name: "Site ID",
				value: d,
				placeholder: "Enter your Site ID",
				onChange: (e) => {
					l("SITE_ID", e.target.value);
				}
			})]
		})
	});
};
//#endregion
export { s as default };

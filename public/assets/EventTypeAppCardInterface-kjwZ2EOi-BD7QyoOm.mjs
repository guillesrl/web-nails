import { a as e, t } from "./jsx-runtime-BqlYg9ib.mjs";
import { t as n } from "./AppCard-D2gzMALd-CxE88MfQ.mjs";
import { t as r } from "./useIsAppEnabled-CVIVp35Y-BFw8SdUN.mjs";
import { Ct as i, rn as a } from "./cal-atoms-B35e3sTk.mjs";
//#region node_modules/@calcom/atoms/dist/EventTypeAppCardInterface-kjwZ2EOi.js
var o = /* @__PURE__ */ e(t(), 1), s = function({ app: e, eventType: t, onAppInstallSuccess: s }) {
	let { getAppData: c, setAppData: l, disabled: u } = a(), d = c("MATOMO_URL"), f = c("SITE_ID"), { enabled: p, updateEnabled: m } = r(e);
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
				dataTestid: `${e.slug}-url`,
				name: "Matomo URL",
				placeholder: "Enter your Matomo URL here",
				value: d,
				disabled: u,
				onChange: (e) => {
					l("MATOMO_URL", e.target.value);
				}
			}), /* @__PURE__ */ (0, o.jsx)(i, {
				dataTestid: `${e.slug}-site-id`,
				disabled: u,
				name: "Site ID",
				placeholder: "Enter your Site ID",
				value: f,
				onChange: (e) => {
					l("SITE_ID", e.target.value);
				}
			})]
		})
	});
};
//#endregion
export { s as default };

import { a as e, t } from "./jsx-runtime-BYDbnt8x.mjs";
import { t as n } from "./AppCard-D2gzMALd-Bm7EFxUZ.mjs";
import { t as r } from "./useIsAppEnabled-CVIVp35Y-DiLgCz-6.mjs";
import { At as i, rn as a } from "./cal-atoms-ChAnjorB.mjs";
//#region node_modules/@calcom/atoms/dist/EventTypeAppCardInterface-uvLDTwHG.js
var o = /* @__PURE__ */ e(t(), 1), s = function({ eventType: e, app: t, onAppInstallSuccess: s }) {
	let { getAppData: c, setAppData: l } = a(), u = c("isSunrise"), { enabled: d, updateEnabled: f } = r(t);
	return /* @__PURE__ */ (0, o.jsx)(n, {
		onAppInstallSuccess: s,
		app: t,
		switchOnClick: (e) => {
			e ? (f(!0), l("isSunrise", !0)) : (f(!1), l("isSunrise", !1));
		},
		switchChecked: d,
		teamId: e.team?.id || void 0,
		children: /* @__PURE__ */ (0, o.jsxs)("div", {
			className: "mt-2 text-sm",
			children: [
				/* @__PURE__ */ (0, o.jsxs)("div", {
					className: "flex",
					children: [
						/* @__PURE__ */ (0, o.jsx)("span", {
							className: "ltr:mr-2 rtl:ml-2",
							children: /* @__PURE__ */ (0, o.jsx)(i, { name: u ? "sunrise" : "sunset" })
						}),
						"I am an AppCard for Event with Title: ",
						e.title
					]
				}),
				" ",
				/* @__PURE__ */ (0, o.jsxs)("div", {
					className: "mt-2",
					children: [
						"Edit ",
						/* @__PURE__ */ (0, o.jsxs)("span", {
							className: "italic",
							children: [
								"packages/app-store/",
								t.slug,
								"/EventTypeAppCardInterface.tsx"
							]
						}),
						" to play with me"
					]
				})
			]
		})
	});
};
//#endregion
export { s as default };

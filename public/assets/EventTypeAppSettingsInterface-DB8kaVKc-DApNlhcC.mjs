import { a as e, t } from "./jsx-runtime-BqlYg9ib.mjs";
import { Ct as n } from "./cal-atoms-B35e3sTk.mjs";
//#region node_modules/@calcom/atoms/dist/EventTypeAppSettingsInterface-DB8kaVKc.js
var r = /* @__PURE__ */ e(t(), 1), i = ({ getAppData: e, setAppData: t, disabled: i, slug: a }) => {
	let o = e("PLAUSIBLE_URL"), s = e("trackingId");
	return /* @__PURE__ */ (0, r.jsxs)("div", {
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ (0, r.jsx)(n, {
			dataTestid: `${a}-url`,
			name: "Plausible URL",
			defaultValue: "https://plausible.io/js/script.js",
			placeholder: "https://plausible.io/js/script.js",
			value: o,
			disabled: i,
			onChange: (e) => {
				t("PLAUSIBLE_URL", e.target.value);
			}
		}), /* @__PURE__ */ (0, r.jsx)(n, {
			dataTestid: `${a}-tracking-id`,
			disabled: i,
			name: "Tracked Domain",
			placeholder: "yourdomain.com",
			value: s,
			onChange: (e) => {
				t("trackingId", e.target.value);
			}
		})]
	});
};
//#endregion
export { i as default };

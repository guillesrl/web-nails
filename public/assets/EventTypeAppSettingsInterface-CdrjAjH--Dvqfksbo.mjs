import { a as e, t } from "./jsx-runtime-BqlYg9ib.mjs";
import { Ct as n } from "./cal-atoms-B35e3sTk.mjs";
//#region node_modules/@calcom/atoms/dist/EventTypeAppSettingsInterface-CdrjAjH-.js
var r = /* @__PURE__ */ e(t(), 1), i = ({ getAppData: e, setAppData: t, disabled: i, slug: a }) => {
	let o = e("trackingId");
	return /* @__PURE__ */ (0, r.jsx)(n, {
		dataTestid: a,
		name: "Tracking ID",
		value: o,
		disabled: i,
		onChange: (e) => {
			t("trackingId", e.target.value);
		}
	});
};
//#endregion
export { i as default };

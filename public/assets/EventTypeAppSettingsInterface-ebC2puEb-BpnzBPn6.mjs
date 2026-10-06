import { a as e, t } from "./jsx-runtime-BqlYg9ib.mjs";
import { Ct as n } from "./cal-atoms-D3rhTwCE.mjs";
//#region node_modules/@calcom/atoms/dist/EventTypeAppSettingsInterface-ebC2puEb.js
var r = /* @__PURE__ */ e(t(), 1), i = ({ getAppData: e, setAppData: t, disabled: i }) => {
	let a = e("trackingId");
	return /* @__PURE__ */ (0, r.jsx)(n, {
		name: "Tracking ID",
		"data-testid": "gtm-tracking-id-input",
		value: a,
		disabled: i,
		onChange: (e) => {
			t("trackingId", e.target.value);
		}
	});
};
//#endregion
export { i as default };

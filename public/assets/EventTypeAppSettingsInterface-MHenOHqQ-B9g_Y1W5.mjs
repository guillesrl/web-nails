import { a as e, t } from "./jsx-runtime-BYDbnt8x.mjs";
import { Ct as n } from "./cal-atoms-ChAnjorB.mjs";
//#region node_modules/@calcom/atoms/dist/EventTypeAppSettingsInterface-MHenOHqQ.js
var r = /* @__PURE__ */ e(t(), 1), i = ({ getAppData: e, setAppData: t, disabled: i }) => {
	let a = e("trackingId");
	return /* @__PURE__ */ (0, r.jsx)(n, {
		name: "Tracking ID",
		value: a,
		disabled: i,
		onChange: (e) => {
			t("trackingId", e.target.value);
		}
	});
};
//#endregion
export { i as default };

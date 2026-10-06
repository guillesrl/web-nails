import { a as e, t } from "./jsx-runtime-BYDbnt8x.mjs";
import { Ct as n } from "./cal-atoms-ChAnjorB.mjs";
//#region node_modules/@calcom/atoms/dist/EventTypeAppSettingsInterface-Dx-rnINz.js
var r = /* @__PURE__ */ e(t(), 1), i = ({ getAppData: e, setAppData: t, disabled: i, slug: a }) => {
	let o = e("DATABUDDY_SCRIPT_URL"), s = e("DATABUDDY_API_URL"), c = e("CLIENT_ID");
	return /* @__PURE__ */ (0, r.jsxs)("div", {
		className: "flex flex-col gap-2",
		children: [
			/* @__PURE__ */ (0, r.jsx)(n, {
				dataTestid: `${a}-url`,
				name: "DataBuddy Script URL",
				defaultValue: "https://cdn.databuddy.cc/databuddy.js",
				placeholder: "https://cdn.databuddy.cc/databuddy.js",
				value: o,
				disabled: i,
				onChange: (e) => {
					t("DATABUDDY_SCRIPT_URL", e.target.value);
				}
			}),
			/* @__PURE__ */ (0, r.jsx)(n, {
				dataTestid: `${a}-api-url`,
				name: "DataBuddy API URL",
				defaultValue: "https://basket.databuddy.cc",
				placeholder: "https://basket.databuddy.cc",
				value: s,
				disabled: i,
				onChange: (e) => {
					t("DATABUDDY_API_URL", e.target.value);
				}
			}),
			/* @__PURE__ */ (0, r.jsx)(n, {
				dataTestid: `${a}-client-id`,
				disabled: i,
				name: "Client ID",
				placeholder: "databuddy-client-id",
				value: c,
				onChange: (e) => {
					t("CLIENT_ID", e.target.value);
				}
			})
		]
	});
};
//#endregion
export { i as default };

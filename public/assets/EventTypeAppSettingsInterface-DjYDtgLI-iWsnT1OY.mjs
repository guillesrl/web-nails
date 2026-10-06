import { a as e, n as t, t as n } from "./jsx-runtime-BqlYg9ib.mjs";
import { Ct as r, wn as i, xn as a } from "./cal-atoms-D3rhTwCE.mjs";
//#region node_modules/@calcom/atoms/dist/EventTypeAppSettingsInterface-DjYDtgLI.js
var o = /* @__PURE__ */ e(n(), 1), s = /* @__PURE__ */ e(t(), 1), c = ({ getAppData: e, setAppData: t, disabled: n }) => {
	let c = e("trackingId"), l = e("trackingEvent"), u = [
		{
			label: "Lead",
			value: "Lead"
		},
		{
			label: "Complete Registration",
			value: "CompleteRegistration"
		},
		{
			label: "Schedule",
			value: "Schedule"
		},
		{
			label: "Page View (use for custom tracking)",
			value: "PageView"
		}
	], d = u.find((e) => e.value === l) || u[0];
	return (0, s.useEffect)(() => {
		l || t("trackingEvent", "Lead");
	}, [l, t]), /* @__PURE__ */ (0, o.jsxs)("div", {
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ (0, o.jsx)(r, {
			name: "Pixel ID",
			value: c,
			disabled: n,
			onChange: (e) => {
				t("trackingId", e.target.value);
			}
		}), /* @__PURE__ */ (0, o.jsxs)("div", {
			className: "flex flex-col gap-1",
			children: [/* @__PURE__ */ (0, o.jsx)(a, { children: "Select Conversion Event to Fire" }), /* @__PURE__ */ (0, o.jsx)(i, {
				options: u,
				value: d,
				isDisabled: n,
				isSearchable: !1,
				onChange: (e) => {
					t("trackingEvent", e?.value ?? "Lead");
				}
			})]
		})]
	});
};
//#endregion
export { c as default };

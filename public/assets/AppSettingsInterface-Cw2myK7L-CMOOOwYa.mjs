import { a as e, n as t, t as n } from "./jsx-runtime-BqlYg9ib.mjs";
import { C as r, Ct as i, Mt as a } from "./cal-atoms-B35e3sTk.mjs";
//#region node_modules/@calcom/atoms/dist/AppSettingsInterface-Cw2myK7L.js
var o = /* @__PURE__ */ e(n(), 1), s = /* @__PURE__ */ e(t(), 1);
function c() {
	let { t: e } = a(), [t, n] = (0, s.useState)("");
	return /* @__PURE__ */ (0, o.jsxs)("div", {
		className: "stack-y-4 text-sm",
		children: [/* @__PURE__ */ (0, o.jsx)(i, {
			placeholder: "San Francisco",
			value: t,
			name: "Enter City",
			onChange: async (e) => {
				n(e.target.value);
			}
		}), /* @__PURE__ */ (0, o.jsx)(r, {
			href: `webcal://weather-in-calendar.com/cal/weather-cal.php?city=${t}&units=metric&temperature=day`,
			children: e("add_to_calendar")
		})]
	});
}
//#endregion
export { c as default };

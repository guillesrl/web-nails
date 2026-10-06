import { a as e, n as t, t as n } from "./jsx-runtime-BqlYg9ib.mjs";
import { C as r, Ct as i, Mt as a } from "./cal-atoms-D3rhTwCE.mjs";
//#region node_modules/@calcom/atoms/dist/AppSettingsInterface-_taRGk-r.js
var o = /* @__PURE__ */ e(n(), 1), s = /* @__PURE__ */ e(t(), 1);
function c() {
	let { t: e } = a(), [t, n] = (0, s.useState)("");
	return /* @__PURE__ */ (0, o.jsxs)("div", {
		className: "stack-y-4 px-4 pb-4 pt-4 text-sm",
		children: [/* @__PURE__ */ (0, o.jsx)(i, {
			placeholder: "Some Input",
			value: t,
			name: "Enter Input",
			onChange: async (e) => {
				n(e.target.value);
			}
		}), /* @__PURE__ */ (0, o.jsx)(r, { children: e("submit") })]
	});
}
//#endregion
export { c as default };

import { a as e, t } from "./jsx-runtime-BqlYg9ib.mjs";
import { At as n, It as r, xt as i } from "./cal-atoms-B35e3sTk.mjs";
//#region node_modules/@calcom/atoms/dist/AddressInput-BSVRgyNs.js
var a = /* @__PURE__ */ e(t(), 1);
function o({ value: e, onChange: t, ...o }) {
	return /* @__PURE__ */ (0, a.jsxs)("div", {
		className: "relative flex items-center",
		children: [/* @__PURE__ */ (0, a.jsx)(n, {
			name: "map-pin",
			className: "text-muted absolute left-0.5 ml-3 h-4 w-4 -translate-y-1/2",
			style: { top: "44%" }
		}), /* @__PURE__ */ (0, a.jsx)(i, {
			...o,
			autoComplete: "address-line1",
			value: e,
			onChange: (e) => {
				t(e.target.value);
			},
			className: r("pl-10", o?.className)
		})]
	});
}
//#endregion
export { o as default };

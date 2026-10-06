import { a as e, t } from "./jsx-runtime-BqlYg9ib.mjs";
import { p as n } from "./cal-atoms-D3rhTwCE.mjs";
//#region node_modules/@calcom/atoms/dist/InstallAppButton-DrFjP6MA.js
var r = /* @__PURE__ */ e(t(), 1);
function i(e) {
	let t = n("exchange2016_calendar");
	return /* @__PURE__ */ (0, r.jsx)(r.Fragment, { children: e.render({
		onClick() {
			t.mutate("");
		},
		loading: t.isPending
	}) });
}
//#endregion
export { i as default };

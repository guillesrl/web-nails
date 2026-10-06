import { a as e, t } from "./jsx-runtime-BYDbnt8x.mjs";
import { p as n } from "./cal-atoms-ChAnjorB.mjs";
//#region node_modules/@calcom/atoms/dist/InstallAppButton-DiXHp_JV.js
var r = /* @__PURE__ */ e(t(), 1);
function i(e) {
	let t = n("exchange2013_calendar");
	return /* @__PURE__ */ (0, r.jsx)(r.Fragment, { children: e.render({
		onClick() {
			t.mutate("");
		},
		loading: t.isPending
	}) });
}
//#endregion
export { i as default };

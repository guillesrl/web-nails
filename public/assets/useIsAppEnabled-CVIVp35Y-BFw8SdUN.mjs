import { a as e, n as t } from "./jsx-runtime-BqlYg9ib.mjs";
import { rn as n } from "./cal-atoms-B35e3sTk.mjs";
//#region node_modules/@calcom/atoms/dist/useIsAppEnabled-CVIVp35Y.js
var r = /* @__PURE__ */ e(t(), 1);
function i(e) {
	let { getAppData: t, setAppData: i } = n(), [a, o] = (0, r.useState)(() => {
		let n = t("enabled");
		if (!e.credentialOwner) return n ?? !1;
		let r = t("credentialId");
		return (n && (e.userCredentialIds.some((e) => e === r) || e.credentialOwner.credentialId === r)) ?? !1;
	});
	return {
		enabled: a,
		updateEnabled: (t) => {
			var n, r;
			t || i("credentialId", void 0), t && ((n = e.userCredentialIds) != null && n.length || (r = e.credentialOwner) != null && r.credentialId) && i("credentialId", e.credentialOwner?.credentialId || e.userCredentialIds[0]), o(t);
		}
	};
}
//#endregion
export { i as t };

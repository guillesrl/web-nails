import { a as e, n as t, t as n } from "./jsx-runtime-BYDbnt8x.mjs";
//#region node_modules/@calcom/atoms/dist/InstallAppButton-BdAHg4Ly.js
var r = /* @__PURE__ */ e(n(), 1), i = /* @__PURE__ */ e(t(), 1);
function a(e) {
	let t = async () => {
		let e = await fetch("/api/integrations/vital/token", {
			method: "POST",
			body: JSON.stringify({}),
			headers: { "Content-Type": "application/json" }
		});
		if (!e.ok) throw Error("Failed to get link token");
		return await e.json();
	}, [n, a] = (0, i.useState)(!1);
	return /* @__PURE__ */ (0, r.jsx)(r.Fragment, { children: e.render({
		onClick() {
			a(!0), t().then((e) => {
				a(!1), window.open(`${e.url}&token=${e.token}`, "_self");
			}).catch((e) => {
				a(!1), console.error(e);
			});
		},
		loading: n
	}) });
}
//#endregion
export { a as default };

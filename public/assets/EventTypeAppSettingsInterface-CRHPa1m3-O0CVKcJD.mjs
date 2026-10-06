import { a as e, n as t, t as n } from "./jsx-runtime-BqlYg9ib.mjs";
import { wn as r } from "./cal-atoms-D3rhTwCE.mjs";
//#region node_modules/@calcom/atoms/dist/EventTypeAppSettingsInterface-CRHPa1m3.js
var i = /* @__PURE__ */ e(n(), 1), a = /* @__PURE__ */ e(t(), 1), o = () => {
	let [e, t] = (0, a.useState)(), [n, o] = (0, a.useState)();
	(0, a.useEffect)(() => {
		async function e() {
			let e = await fetch("/api/integrations/basecamp3/projects");
			if (!e.ok) return;
			let n = await e.json(), r = n?.currentProject, i = (n?.projects)?.map((e) => ({
				value: String(e.id),
				label: e.name
			}));
			if (i && (t(i), r)) {
				let e = i.find((e) => e.value === String(r));
				e && o(e);
			}
		}
		e();
	}, []);
	async function s(e) {
		e && (await fetch("/api/integrations/basecamp3/projectMutation", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ projectId: e.value })
		}), o(e));
	}
	return /* @__PURE__ */ (0, i.jsxs)("div", {
		className: "mt-2 text-sm",
		children: [/* @__PURE__ */ (0, i.jsxs)("div", {
			className: "flex gap-3",
			children: [/* @__PURE__ */ (0, i.jsx)("div", {
				className: "items-center",
				children: /* @__PURE__ */ (0, i.jsx)("p", {
					className: "py-2",
					children: "Link a Basecamp project to this event:"
				})
			}), /* @__PURE__ */ (0, i.jsx)(r, {
				placeholder: "Select project",
				options: e,
				isLoading: !e,
				className: "md:min-w-[120px]",
				onChange: s,
				value: n
			})]
		}), /* @__PURE__ */ (0, i.jsxs)("div", {
			className: "mt-2",
			children: [
				"Please note that as of now you can only link ",
				/* @__PURE__ */ (0, i.jsx)("span", {
					className: "italic",
					children: "one"
				}),
				" of your projects to cal.com"
			]
		})]
	});
};
//#endregion
export { o as default };

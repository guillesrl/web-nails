import { a as e, n as t, t as n } from "./jsx-runtime-BqlYg9ib.mjs";
import { Ct as r, It as i, Mt as a, dn as o } from "./cal-atoms-B35e3sTk.mjs";
//#region node_modules/@calcom/atoms/dist/EventTypeAppSettingsInterface-u5cKJxEv.js
var s = /* @__PURE__ */ e(n(), 1), c = /* @__PURE__ */ e(t(), 1), l = ({ eventType: e, disabled: t }) => {
	let { t: n } = a(), [l, u] = (0, c.useState)(""), d = l === "" ? "" : `?${l}`, f = e.URL + d;
	function p({ size: e, data: t }) {
		let n = `https://api.qrserver.com/v1/create-qr-code/?size=${e}&data=${t}`;
		return /* @__PURE__ */ (0, s.jsx)(o, {
			content: f,
			children: /* @__PURE__ */ (0, s.jsx)("a", {
				download: !0,
				href: n,
				target: "_blank",
				rel: "noreferrer",
				children: /* @__PURE__ */ (0, s.jsx)("img", {
					className: i("hover:bg-cal-muted border-default border transition hover:shadow-sm", e >= 256 && "min-h-32"),
					style: {
						padding: e / 16,
						borderRadius: e / 20
					},
					width: e,
					src: n,
					alt: f
				})
			})
		});
	}
	return /* @__PURE__ */ (0, s.jsxs)("div", {
		className: "flex w-full flex-col gap-5 text-sm",
		children: [/* @__PURE__ */ (0, s.jsx)("div", {
			className: "flex w-full",
			children: /* @__PURE__ */ (0, s.jsx)(r, {
				name: "hello",
				disabled: t,
				value: l,
				onChange: (e) => u(e.target.value),
				label: n("additional_url_parameters"),
				containerClassName: "w-full"
			})
		}), /* @__PURE__ */ (0, s.jsxs)("div", {
			className: "max-w-60 flex items-baseline gap-2",
			children: [
				/* @__PURE__ */ (0, s.jsx)(p, {
					size: 256,
					data: f
				}),
				/* @__PURE__ */ (0, s.jsx)(p, {
					size: 128,
					data: f
				}),
				/* @__PURE__ */ (0, s.jsx)(p, {
					size: 64,
					data: f
				})
			]
		})]
	});
};
//#endregion
export { l as default };

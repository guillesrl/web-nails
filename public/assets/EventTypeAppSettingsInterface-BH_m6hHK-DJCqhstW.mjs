import { a as e, n as t, t as n } from "./jsx-runtime-BqlYg9ib.mjs";
import { At as r, Bt as i, C as a, Ft as o, It as s, M as c, Mt as l, bt as u, ft as d, xt as f } from "./cal-atoms-D3rhTwCE.mjs";
//#region node_modules/@calcom/atoms/dist/EventTypeAppSettingsInterface-BH_m6hHK.js
var p = /* @__PURE__ */ e(n(), 1), m = /* @__PURE__ */ e(t(), 1), h = "search", g = "url", _ = (e) => {
	let { t } = l(), [n, _] = (0, m.useState)(""), [v, y] = (0, m.useState)(0), [b, x] = (0, m.useState)(""), { isOpenDialog: S, setIsOpenDialog: C } = e, [w, T] = (0, m.useState)(!1), [E, D] = (0, m.useState)(""), [O, k] = (0, m.useState)(h), A = async (e, t) => {
		if (w) return;
		T(!0), D("");
		let n = await fetch("/api/integrations/giphy/search", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				keyword: e,
				offset: t
			})
		}), r = await n.json();
		return n.ok ? (_(r.image || ""), y(r.nextOffset), r.image || D("No Result found")) : D(r?.message || "Something went wrong"), T(!1), null;
	}, j = async (e) => {
		if (w) return;
		T(!0), D("");
		let t = await fetch("/api/integrations/giphy/get", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ url: e })
		}), n = await t.json();
		return t.ok ? (_(n.image || ""), n.image || D("No Result found")) : D(n?.message || n?.[0]?.message || "Something went wrong"), T(!1), null;
	}, M = (e, t, n) => /* @__PURE__ */ (0, p.jsxs)("div", {
		className: s("flex cursor-pointer items-center border-b-2 p-2 text-sm ", O === n ? "text-default border-emphasis" : "text-subtle border-transparent"),
		onClick: () => {
			x(""), _(""), k(n);
		},
		children: [/* @__PURE__ */ (0, p.jsx)(r, {
			name: e,
			className: "h-4 w-4 ltr:mr-2 rtl:ml-2"
		}), t]
	});
	return /* @__PURE__ */ (0, p.jsx)(i, {
		open: S,
		onOpenChange: C,
		children: /* @__PURE__ */ (0, p.jsxs)(o, { children: [
			/* @__PURE__ */ (0, p.jsx)("h3", {
				className: "font-heading text-emphasis text-xl",
				id: "modal-title",
				children: t("add_gif_to_confirmation")
			}),
			/* @__PURE__ */ (0, p.jsx)("p", {
				className: "text-subtle mb-3 text-sm font-light",
				children: t("find_gif_spice_confirmation")
			}),
			/* @__PURE__ */ (0, p.jsxs)("div", {
				className: "border-emphasis flex items-center border-b border-solid",
				children: [M("search", t("search_giphy"), h), M("link", t("add_link_from_giphy"), g)]
			}),
			/* @__PURE__ */ (0, p.jsxs)("form", {
				className: "flex w-full justify-center space-x-2 stack-y-2 rtl:space-x-reverse",
				onSubmit: async (e) => {
					e.stopPropagation(), e.preventDefault(), O === h ? A(b, 0) : O === g && j(b);
				},
				children: [/* @__PURE__ */ (0, p.jsx)("div", {
					className: "relative block w-full pt-2",
					children: /* @__PURE__ */ (0, p.jsx)(f, {
						type: "text",
						placeholder: O === h ? t("search_giphy") : "https://media.giphy.com/media/some-id/giphy.gif",
						value: b,
						onChange: (e) => {
							x(e.target.value);
						}
					})
				}), /* @__PURE__ */ (0, p.jsx)(a, {
					type: "submit",
					tabIndex: -1,
					color: "secondary",
					loading: w,
					children: t("search")
				})]
			}),
			n && /* @__PURE__ */ (0, p.jsx)("div", {
				className: "flex flex-col items-center space-x-2 stack-y-2 pt-3 rtl:space-x-reverse",
				children: /* @__PURE__ */ (0, p.jsx)("div", {
					className: "bg-subtle flex w-full items-center justify-center",
					children: w ? /* @__PURE__ */ (0, p.jsx)("div", {
						className: "flex h-[200px] w-full items-center justify-center bg-gray-400 pb-3 pt-3",
						children: /* @__PURE__ */ (0, p.jsxs)("svg", {
							className: s("mx-4 h-5 w-5 animate-spin", "text-inverted dark:text-emphasis"),
							xmlns: "http://www.w3.org/2000/svg",
							fill: "none",
							viewBox: "0 0 24 24",
							children: [/* @__PURE__ */ (0, p.jsx)("circle", {
								className: "opacity-25",
								cx: "12",
								cy: "12",
								r: "10",
								stroke: "currentColor",
								strokeWidth: "4"
							}), /* @__PURE__ */ (0, p.jsx)("path", {
								className: "opacity-75",
								fill: "currentColor",
								d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
							})]
						})
					}) : /* @__PURE__ */ (0, p.jsx)("img", {
						className: "h-[200px] pb-3 pt-3",
						src: n,
						alt: `Gif from Giphy for ${b}`
					})
				})
			}),
			E && /* @__PURE__ */ (0, p.jsx)(c, {
				severity: "error",
				title: E,
				className: "my-4"
			}),
			n && O === h && /* @__PURE__ */ (0, p.jsxs)("div", {
				className: "mt-4 flex items-center justify-between space-x-2 rtl:space-x-reverse",
				children: [/* @__PURE__ */ (0, p.jsx)("div", {
					className: "text-subtle text-sm font-light",
					children: "Not the perfect GIF?"
				}), /* @__PURE__ */ (0, p.jsx)(a, {
					size: "sm",
					color: "secondary",
					type: "button",
					loading: w,
					onClick: () => A(b, v),
					children: "Shuffle"
				})]
			}),
			/* @__PURE__ */ (0, p.jsxs)(u, {
				noSticky: !0,
				children: [/* @__PURE__ */ (0, p.jsx)(d, {
					color: "minimal",
					tabIndex: -1,
					onClick: () => {
						e.setIsOpenDialog(!1);
					},
					children: t("cancel")
				}), /* @__PURE__ */ (0, p.jsx)(a, {
					type: "button",
					disabled: !n,
					onClick: () => (e.setIsOpenDialog(!1), e.onSave(n), y(0), _(""), x(""), !1),
					children: t("add_gif")
				})]
			})
		] })
	});
};
function v(e) {
	let { t } = l(), [n, r] = (0, m.useState)(e.defaultValue), [i, o] = (0, m.useState)(!1);
	return /* @__PURE__ */ (0, p.jsxs)("div", {
		className: "flex flex-col items-start space-x-2 stack-y-2 rtl:space-x-reverse",
		children: [
			n && /* @__PURE__ */ (0, p.jsx)("div", {
				className: "min-h-[200px]",
				children: /* @__PURE__ */ (0, p.jsx)("img", {
					alt: "Selected Gif Image",
					src: n
				})
			}),
			/* @__PURE__ */ (0, p.jsxs)("div", {
				className: "flex gap-2",
				children: [n ? /* @__PURE__ */ (0, p.jsx)(a, {
					color: "minimal",
					type: "button",
					StartIcon: "pencil",
					onClick: () => o(!0),
					disabled: e.disabled,
					children: "Change"
				}) : /* @__PURE__ */ (0, p.jsx)(a, {
					color: "minimal",
					type: "button",
					StartIcon: "plus",
					onClick: () => o(!0),
					disabled: e.disabled,
					children: "Add from Giphy"
				}), n && /* @__PURE__ */ (0, p.jsx)(a, {
					color: "destructive",
					type: "button",
					StartIcon: "x",
					onClick: () => {
						r(""), e.onChange("");
					},
					disabled: e.disabled,
					children: t("remove")
				})]
			}),
			/* @__PURE__ */ (0, p.jsx)(_, {
				isOpenDialog: i,
				setIsOpenDialog: o,
				onSave: (t) => {
					r(t), e.onChange(t);
				}
			})
		]
	});
}
var y = ({ getAppData: e, setAppData: t, disabled: n }) => {
	let r = e("thankYouPage");
	return /* @__PURE__ */ (0, p.jsx)(v, {
		defaultValue: r,
		disabled: n,
		onChange: (e) => {
			t("thankYouPage", e);
		}
	});
};
//#endregion
export { y as default };

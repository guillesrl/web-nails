import { a as e, t } from "./jsx-runtime-BYDbnt8x.mjs";
import { At as n, C as r, It as i, Mt as a, O as o, Qt as s, Rt as c, _ as l, an as u, b as d, d as f, ot as p, p as m, rn as h } from "./cal-atoms-ChAnjorB.mjs";
//#region node_modules/@calcom/atoms/dist/AppCard-D2gzMALd.js
var g = /* @__PURE__ */ e(t(), 1), _ = ({ children: e, ref: t, className: n }) => {
	let [r] = o();
	return /* @__PURE__ */ (0, g.jsx)("div", {
		ref: r,
		className: i("bg-cal-muted flex flex-col gap-4 rounded-2xl p-4", n),
		children: e
	});
}, v = ({ children: e, ref: t, as: n }) => /* @__PURE__ */ (0, g.jsx)(n ? d : "h2", {
	ref: t,
	className: "text-emphasis text-base font-semibold leading-none",
	children: e
}), y = ({ children: e, ref: t, as: n }) => /* @__PURE__ */ (0, g.jsx)(n ? d : "h3", {
	ref: t,
	className: "text-subtle line-clamp-1 text-sm break-all",
	children: e
}), b = ({ ref: e, name: t, size: r = "md", iconSlot: a }) => /* @__PURE__ */ (0, g.jsx)("div", {
	ref: e,
	className: i("bg-default border-subtle border-subtle flex items-center justify-center border", r === "sm" && "rounded-md p-1", r === "md" && "rounded-[10px] p-1.5"),
	children: a || /* @__PURE__ */ (0, g.jsx)(n, {
		name: t,
		className: i(r === "sm" && "h-4 w-4", r === "md" && "h-6 w-6")
	})
}), x = Object.assign(_, {
	Header: ({ children: e, ref: t, icon: n, title: r, description: i, iconSlot: a, rawHeading: o }) => /* @__PURE__ */ (0, g.jsxs)("div", {
		ref: t,
		className: "flex items-center justify-between flex-wrap sm:flex-nowrap gap-3",
		children: [/* @__PURE__ */ (0, g.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [
				n && !a && /* @__PURE__ */ (0, g.jsx)(b, { name: n }),
				a && /* @__PURE__ */ (0, g.jsx)(b, { iconSlot: a }),
				/* @__PURE__ */ (0, g.jsxs)("div", {
					className: "flex flex-col gap-0.5",
					children: [
						r && /* @__PURE__ */ (0, g.jsx)(v, { children: r }),
						i && /* @__PURE__ */ (0, g.jsx)(y, { children: i }),
						o && o
					]
				})
			]
		}), e]
	}),
	Content: ({ children: e, ref: t }) => /* @__PURE__ */ (0, g.jsx)("div", {
		ref: t,
		className: "flex flex-col gap-4",
		children: e
	}),
	Title: v,
	Description: y,
	SubSection: ({ children: e, ref: t }) => {
		let [n] = o();
		return /* @__PURE__ */ (0, g.jsx)("div", {
			ref: n,
			className: "border-muted bg-default flex flex-col gap-4 rounded-xl border p-3",
			children: e
		});
	},
	SubSectionHeader: ({ children: e, ref: t, icon: n, title: r, classNames: a, justify: o = "between", labelFor: s }) => /* @__PURE__ */ (0, g.jsxs)("div", {
		ref: t,
		className: i("flex items-center gap-2", o === "between" ? "justify-between" : "justify-start", a?.container),
		children: [/* @__PURE__ */ (0, g.jsxs)("div", {
			className: i("flex items-center gap-2", a?.title),
			children: [n && /* @__PURE__ */ (0, g.jsx)(b, {
				name: n,
				size: "sm"
			}), /* @__PURE__ */ (0, g.jsx)("div", {
				className: i("flex", a?.title),
				children: /* @__PURE__ */ (0, g.jsx)("h4", {
					className: "text-default text-sm font-medium leading-none",
					id: s,
					children: r
				})
			})]
		}), e]
	}),
	SubSectionContent: ({ children: e, ref: t, invert: n, classNames: r }) => /* @__PURE__ */ (0, g.jsx)("div", {
		ref: t,
		className: i("bg-cal-muted flex flex-col rounded-lg px-[6px] py-1", n && "bg-default border-subtle border", r?.container),
		children: e
	}),
	SubSectionNested: ({ children: e, ref: t }) => /* @__PURE__ */ (0, g.jsx)("div", {
		ref: t,
		className: "bg-default border-subtle flex flex-col gap-2 rounded-xl border p-2",
		children: e
	})
});
function S({ app: e, className: t, returnTo: n, teamId: o, onAppInstallSuccess: s }) {
	let { t: u } = a(), d = m(null, {
		returnTo: n,
		onSuccess: (e) => {
			s(), !(e != null && e.setupPending) && c(u("app_successfully_installed"), "success");
		},
		onError: (e) => {
			e instanceof Error && c(e.message || u("app_could_not_be_installed"), "error");
		}
	});
	return /* @__PURE__ */ (0, g.jsx)(l, {
		type: e.type,
		teamsPlanRequired: e.teamsPlanRequired,
		wrapperClassName: i("[@media(max-width:260px)]:w-full", t),
		render: ({ useDefaultComponent: t, ...n }) => (t && (n = {
			...n,
			onClick: () => {
				d.mutate({
					type: e.type,
					variant: e.variant,
					slug: e.slug,
					...o && { teamId: o }
				});
			}
		}), /* @__PURE__ */ (0, g.jsx)(r, {
			loading: d.isPending,
			color: "secondary",
			className: "[@media(max-width:260px)]:w-full [@media(max-width:260px)]:justify-center",
			StartIcon: "plus",
			...n,
			children: u("add")
		}))
	});
}
function C({ app: e, switchOnClick: t, switchChecked: c, children: l, returnTo: d, teamId: m, disableSwitch: _, switchTooltip: v, hideSettingsIcon: y = !1, hideAppCardOptions: b = !1, onAppInstallSuccess: C }) {
	let { t: w } = a(), [T] = o(), { setAppData: E, LockedIcon: D, disabled: O } = h(), k = s();
	return /* @__PURE__ */ (0, g.jsxs)(x, {
		className: i(!(e != null && e.isInstalled) && "rounded-xl"),
		children: [/* @__PURE__ */ (0, g.jsx)(x.Header, {
			rawHeading: /* @__PURE__ */ (0, g.jsxs)("div", { children: [/* @__PURE__ */ (0, g.jsxs)("div", {
				className: "flex w-full items-center gap-1",
				children: [/* @__PURE__ */ (0, g.jsx)(x.Title, { children: e?.name }), !(e != null && e.isInstalled) && /* @__PURE__ */ (0, g.jsx)("span", {
					className: "bg-emphasis ml-1 rounded px-1 py-0.5 text-xs font-medium leading-3 tracking-[0.01em]",
					children: e?.categories[0].charAt(0).toUpperCase() + e?.categories[0].slice(1)
				})]
			}), /* @__PURE__ */ (0, g.jsx)(x.Description, { children: e?.description })] }),
			iconSlot: /* @__PURE__ */ (0, g.jsx)(p, {
				href: `/apps/${e.slug}`,
				className: "flex h-8 w-8 items-center justify-center",
				children: /* @__PURE__ */ (0, g.jsx)("img", {
					className: i(e?.logo.includes("-dark") && "dark:invert", "max-h-full max-w-full object-contain"),
					src: e?.logo,
					alt: e?.name
				})
			}),
			children: /* @__PURE__ */ (0, g.jsx)("div", { children: /* @__PURE__ */ (0, g.jsx)("div", { children: e != null && e.isInstalled || e.credentialOwner ? /* @__PURE__ */ (0, g.jsx)("div", {
				className: "ml-auto flex items-center",
				children: /* @__PURE__ */ (0, g.jsx)(u, {
					size: "sm",
					disabled: !e.enabled || O || _,
					onCheckedChange: (n) => {
						f("event_type_app_switch_toggled", {
							app_slug: e.slug,
							enabled: n
						}), t && t(n), E("enabled", n);
					},
					checked: c,
					LockedIcon: D,
					"data-testid": `${e.slug}-app-switch`,
					tooltip: v
				})
			}) : /* @__PURE__ */ (0, g.jsx)(S, {
				className: "ml-auto flex items-center",
				app: e,
				returnTo: d,
				teamId: m,
				onAppInstallSuccess: C
			}) }) })
		}), b ? null : e?.isInstalled && c && /* @__PURE__ */ (0, g.jsx)("div", {
			ref: T,
			children: e.isSetupAlready === void 0 || e.isSetupAlready ? /* @__PURE__ */ (0, g.jsxs)("div", {
				className: "relative text-sm [&_input]:mb-0 [&_input]:leading-4",
				children: [!y && !k && /* @__PURE__ */ (0, g.jsx)(p, {
					href: `/apps/${e.slug}/setup`,
					className: "absolute right-0 top-0 ",
					children: /* @__PURE__ */ (0, g.jsx)(n, {
						name: "settings",
						className: "text-default h-4 w-4",
						"aria-hidden": "true"
					})
				}), l]
			}) : /* @__PURE__ */ (0, g.jsxs)("div", {
				className: "flex h-64 w-full flex-col items-center justify-center gap-4 ",
				children: [/* @__PURE__ */ (0, g.jsx)("p", { children: w("this_app_is_not_setup_already") }), /* @__PURE__ */ (0, g.jsx)(p, {
					href: `/apps/${e.slug}/setup`,
					children: /* @__PURE__ */ (0, g.jsx)(r, {
						StartIcon: "settings",
						children: w("setup")
					})
				})]
			})
		})]
	});
}
//#endregion
export { x as n, C as t };

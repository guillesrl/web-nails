import { a as e, n as t, t as n } from "./jsx-runtime-BqlYg9ib.mjs";
import { n as r, t as i } from "./AppCard-D2gzMALd-CxE88MfQ.mjs";
import { t as a } from "./useIsAppEnabled-CVIVp35Y-BFw8SdUN.mjs";
import { B as o, C as s, Cn as c, D as l, Ft as u, Ht as d, M as f, Mt as p, O as m, Ot as h, Sn as g, St as _, Wt as v, Z as y, _n as b, an as x, bt as S, cn as C, f as w, ft as T, h as E, ht as D, i as O, it as k, jt as ee, l as A, lt as j, rn as M, t as N, vn as P, wn as F, xn as I, yt as L, zt as R } from "./cal-atoms-B35e3sTk.mjs";
//#region node_modules/@calcom/atoms/dist/EventTypeAppCardInterface-BWym_qcz.js
var z = /* @__PURE__ */ e(n(), 1), B = /* @__PURE__ */ e(t(), 1), V = ({ fieldRules: e, updateFieldRules: t }) => {
	let { t: n } = p(), i = [{
		label: n("salesforce_rr_skip_field_rule_ignore"),
		value: g.IGNORE
	}, {
		label: n("salesforce_rr_skip_field_rule_must_include"),
		value: g.MUST_INCLUDE
	}], [a, o] = (0, B.useState)({
		field: "",
		value: "",
		action: g.IGNORE
	}), [c, l] = (0, B.useState)(null), [u, d] = (0, B.useState)(null), f = (t) => {
		let n = e[t];
		l(t), d({
			field: n.field,
			value: n.value,
			action: n.action
		});
	}, m = () => {
		l(null), d(null);
	}, h = () => {
		if (c === null || !u || !u.field.trim() || !u.value.trim()) return;
		let n = [...e];
		n[c] = {
			field: u.field.trim(),
			value: u.value.trim(),
			action: u.action
		}, t(n), m();
	};
	return /* @__PURE__ */ (0, z.jsxs)(r.SubSection, { children: [/* @__PURE__ */ (0, z.jsx)(r.SubSectionHeader, {
		icon: "filter",
		title: n("salesforce_rr_skip_field_rules"),
		labelFor: "rr-skip-field-rules",
		children: /* @__PURE__ */ (0, z.jsx)(z.Fragment, {})
	}), /* @__PURE__ */ (0, z.jsxs)(r.SubSectionContent, { children: [
		/* @__PURE__ */ (0, z.jsxs)("div", {
			className: "text-subtle flex gap-3 px-3 py-[6px] text-sm font-medium",
			children: [
				/* @__PURE__ */ (0, z.jsx)("div", {
					className: "flex-1",
					children: n("field_name")
				}),
				/* @__PURE__ */ (0, z.jsx)("div", {
					className: "flex-1",
					children: n("value")
				}),
				/* @__PURE__ */ (0, z.jsx)("div", {
					className: "w-32",
					children: n("action")
				}),
				/* @__PURE__ */ (0, z.jsx)("div", { className: "w-20" })
			]
		}),
		/* @__PURE__ */ (0, z.jsxs)(r.SubSectionNested, { children: [e.map((n, r) => {
			let a = c === r;
			return /* @__PURE__ */ (0, z.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, z.jsx)("div", {
						className: "flex-1",
						children: a ? /* @__PURE__ */ (0, z.jsx)(j, {
							value: u?.field || "",
							onChange: (e) => d((t) => t ? {
								...t,
								field: e.target.value
							} : null),
							size: "sm",
							className: "w-full"
						}) : /* @__PURE__ */ (0, z.jsx)(j, {
							value: n.field,
							readOnly: !0,
							size: "sm",
							className: "w-full"
						})
					}),
					/* @__PURE__ */ (0, z.jsx)("div", {
						className: "flex-1",
						children: a ? /* @__PURE__ */ (0, z.jsx)(j, {
							value: u?.value || "",
							onChange: (e) => d((t) => t ? {
								...t,
								value: e.target.value
							} : null),
							size: "sm",
							className: "w-full"
						}) : /* @__PURE__ */ (0, z.jsx)(j, {
							value: n.value,
							readOnly: !0,
							size: "sm",
							className: "w-full"
						})
					}),
					/* @__PURE__ */ (0, z.jsx)("div", {
						className: "w-32",
						children: a ? /* @__PURE__ */ (0, z.jsx)(F, {
							size: "sm",
							className: "w-full",
							options: i,
							value: i.find((e) => e.value === u?.action),
							onChange: (e) => {
								e && d((t) => t ? {
									...t,
									action: e.value
								} : null);
							}
						}) : /* @__PURE__ */ (0, z.jsx)(F, {
							size: "sm",
							className: "w-full",
							options: i,
							value: i.find((e) => e.value === n.action),
							isDisabled: !0
						})
					}),
					/* @__PURE__ */ (0, z.jsx)("div", {
						className: "flex w-20 justify-center gap-1",
						children: a ? /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [/* @__PURE__ */ (0, z.jsx)(s, {
							size: "sm",
							StartIcon: "check",
							variant: "icon",
							color: "primary",
							onClick: () => h()
						}), /* @__PURE__ */ (0, z.jsx)(s, {
							size: "sm",
							StartIcon: "x",
							variant: "icon",
							color: "secondary",
							onClick: () => m()
						})] }) : /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [/* @__PURE__ */ (0, z.jsx)(s, {
							size: "sm",
							StartIcon: "pencil",
							variant: "icon",
							color: "minimal",
							onClick: () => f(r)
						}), /* @__PURE__ */ (0, z.jsx)(s, {
							StartIcon: "x",
							variant: "icon",
							size: "sm",
							color: "minimal",
							onClick: () => {
								t(e.filter((e, t) => t !== r));
							}
						})] })
					})
				]
			}, `${n.field}-${r}`);
		}), /* @__PURE__ */ (0, z.jsxs)("div", {
			className: "mt-2 flex gap-2",
			children: [
				/* @__PURE__ */ (0, z.jsx)("div", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, z.jsx)(j, {
						size: "sm",
						className: "w-full",
						placeholder: n("salesforce_field_name_placeholder"),
						value: a.field,
						onChange: (e) => o({
							...a,
							field: e.target.value
						})
					})
				}),
				/* @__PURE__ */ (0, z.jsx)("div", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, z.jsx)(j, {
						size: "sm",
						className: "w-full",
						placeholder: n("value"),
						value: a.value,
						onChange: (e) => o({
							...a,
							value: e.target.value
						})
					})
				}),
				/* @__PURE__ */ (0, z.jsx)("div", {
					className: "w-32",
					children: /* @__PURE__ */ (0, z.jsx)(F, {
						size: "sm",
						className: "w-full",
						options: i,
						value: i.find((e) => e.value === a.action),
						onChange: (e) => {
							e && o({
								...a,
								action: e.value
							});
						}
					})
				}),
				/* @__PURE__ */ (0, z.jsx)("div", { className: "w-20" })
			]
		})] }),
		/* @__PURE__ */ (0, z.jsx)(s, {
			className: "text-subtle mt-2 w-fit",
			StartIcon: "plus",
			color: "minimal",
			size: "sm",
			disabled: !(a.field && a.value),
			onClick: () => {
				t([...e, {
					field: a.field.trim(),
					value: a.value.trim(),
					action: a.action
				}]), o({
					field: "",
					value: "",
					action: g.IGNORE
				});
			},
			children: n("add_new_rule")
		})
	] })] });
}, H = /* @__PURE__ */ ((e) => (e.ON_BOOKING = "on_booking", e.ON_CANCEL = "on_cancel", e))(H || {}), U = ({ bookingAction: e, optionLabel: t, optionEnabled: n, optionSwitchOnChange: i, writeToObjectData: a, updateWriteToObjectData: l, hideWhenToWrite: u = !1 }) => {
	let { t: d } = p(), m = [
		{
			label: d("text"),
			value: b.TEXT
		},
		{
			label: d("date"),
			value: b.DATE
		},
		{
			label: d("phone").charAt(0).toUpperCase() + d("phone").slice(1),
			value: b.PHONE
		},
		{
			label: d("checkbox"),
			value: b.CHECKBOX
		},
		{
			label: d("picklist"),
			value: b.PICKLIST
		},
		{
			label: d("custom"),
			value: b.CUSTOM
		}
	], h = [{
		label: d("only_if_field_is_empty"),
		value: o.FIELD_EMPTY
	}, ...e === "on_cancel" ? [{
		label: d("salesforce_on_every_cancellation"),
		value: o.EVERY_BOOKING
	}] : [{
		label: d("on_every_booking"),
		value: o.EVERY_BOOKING
	}]], g = [{
		label: d("true"),
		value: !0
	}, {
		label: d("false"),
		value: !1
	}], _ = [
		...e === "on_cancel" ? [{
			label: d("booking_cancel_date"),
			value: w.BOOKING_CANCEL_DATE
		}] : [],
		{
			label: d("booking_start_date"),
			value: w.BOOKING_START_DATE
		},
		{
			label: d("booking_created_date"),
			value: w.BOOKING_CREATED_DATE
		}
	], [v, y] = (0, B.useState)(m[0]), [S, C] = (0, B.useState)(_[0]), [T, E] = (0, B.useState)(g[0]), [D, O] = (0, B.useState)(h[0]), [k, ee] = (0, B.useState)({}), [A, M] = (0, B.useState)({}), [N, P] = (0, B.useState)(null), [I, L] = (0, B.useState)({}), [R, V] = (0, B.useState)(!1), [H, U] = (0, B.useState)({
		field: "",
		fieldType: v.value,
		value: "",
		whenToWrite: u ? o.EVERY_BOOKING : D.value
	}), W = () => {
		U({
			field: "",
			fieldType: m[0].value,
			value: "",
			whenToWrite: u ? o.EVERY_BOOKING : h[0].value
		}), y(m[0]), C(_[0]), E(g[0]), O(h[0]), P(null);
	}, G = () => {
		if (Object.keys(a).includes(H.field.trim())) {
			P("Field already exists");
			return;
		}
		let e = c(H);
		if (e) {
			P(e);
			return;
		}
		P(null), l({
			...a,
			[H.field.trim()]: {
				fieldType: H.fieldType,
				value: H.value,
				whenToWrite: u ? o.EVERY_BOOKING : H.whenToWrite
			}
		}), W(), V(!1);
	}, K = () => {
		W(), V(!1);
	}, te = (e) => {
		Object.keys(k).forEach((t) => {
			k[t] && t !== e && q(t);
		}), ee((t) => ({
			...t,
			[e]: !0
		})), M((t) => ({
			...t,
			[e]: {
				field: e,
				fieldType: a[e].fieldType,
				value: a[e].value,
				whenToWrite: a[e].whenToWrite
			}
		}));
	}, q = (e) => {
		ee((t) => ({
			...t,
			[e]: !1
		})), M((t) => {
			let n = { ...t };
			return delete n[e], n;
		});
	}, ne = (e) => {
		let t = A[e];
		if (!t) return;
		if (!t.field.trim()) {
			L((t) => ({
				...t,
				[e]: "Field name cannot be empty"
			}));
			return;
		}
		if (t.field !== e && Object.keys(a).includes(t.field.trim())) {
			L((t) => ({
				...t,
				[e]: "Field already exists"
			}));
			return;
		}
		let n = c(t);
		if (n) {
			L((t) => ({
				...t,
				[e]: n
			}));
			return;
		}
		L((t) => ({
			...t,
			[e]: null
		}));
		let r = { ...a };
		t.field !== e && delete r[e], r[t.field.trim()] = {
			fieldType: t.fieldType,
			value: t.value,
			whenToWrite: u ? o.EVERY_BOOKING : t.whenToWrite
		}, l(r), q(e);
	};
	return /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [/* @__PURE__ */ (0, z.jsx)(r.SubSectionHeader, {
		icon: "star",
		labelFor: "write-to-object-settings",
		title: t,
		children: /* @__PURE__ */ (0, z.jsx)(x, {
			checked: n,
			onCheckedChange: i,
			id: "write-to-object-settings",
			size: "sm"
		})
	}), n ? /* @__PURE__ */ (0, z.jsxs)(r.SubSectionContent, { children: [(Object.keys(a).length > 0 || R) && /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [/* @__PURE__ */ (0, z.jsxs)("div", {
		className: "text-subtle flex gap-3 px-3 py-[6px] text-sm font-medium",
		children: [
			/* @__PURE__ */ (0, z.jsx)("div", {
				className: "flex-1",
				children: d("field_name")
			}),
			/* @__PURE__ */ (0, z.jsx)("div", {
				className: "flex-1",
				children: d("field_type")
			}),
			/* @__PURE__ */ (0, z.jsx)("div", {
				className: "flex-1",
				children: d("value")
			}),
			!u && /* @__PURE__ */ (0, z.jsx)("div", {
				className: "flex-1",
				children: d("when_to_write")
			}),
			/* @__PURE__ */ (0, z.jsx)("div", { className: "w-20" })
		]
	}), /* @__PURE__ */ (0, z.jsxs)(r.SubSectionNested, { children: [Object.keys(a).map((e) => {
		let t = k[e], n = A[e];
		return /* @__PURE__ */ (0, z.jsxs)("div", { children: [/* @__PURE__ */ (0, z.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [
				/* @__PURE__ */ (0, z.jsx)("div", {
					className: "flex-1",
					children: t ? /* @__PURE__ */ (0, z.jsx)(j, {
						value: n?.field || e,
						onChange: (t) => M((r) => ({
							...r,
							[e]: {
								...n,
								field: t.target.value
							}
						})),
						size: "sm",
						className: "w-full"
					}) : /* @__PURE__ */ (0, z.jsx)(j, {
						value: e,
						readOnly: !0,
						size: "sm",
						className: "w-full"
					})
				}),
				/* @__PURE__ */ (0, z.jsx)("div", {
					className: "flex-1",
					children: t ? /* @__PURE__ */ (0, z.jsx)(F, {
						size: "sm",
						className: "w-full",
						options: m,
						value: m.find((e) => e.value === n?.fieldType),
						onChange: (t) => {
							t && M((r) => ({
								...r,
								[e]: {
									...n,
									fieldType: t.value,
									...t.value === b.DATE && { value: _[0].value },
									...t.value === b.CHECKBOX && { value: g[0].value }
								}
							}));
						}
					}) : /* @__PURE__ */ (0, z.jsx)(F, {
						size: "sm",
						className: "w-full",
						value: m.find((t) => t.value === a[e].fieldType),
						isDisabled: !0
					})
				}),
				/* @__PURE__ */ (0, z.jsx)("div", {
					className: "flex-1",
					children: t ? n?.fieldType === b.DATE ? /* @__PURE__ */ (0, z.jsx)(F, {
						size: "sm",
						className: "w-full",
						options: _,
						value: _.find((e) => e.value === n.value),
						onChange: (t) => {
							t && M((r) => ({
								...r,
								[e]: {
									...n,
									value: t.value
								}
							}));
						}
					}) : n?.fieldType === b.CHECKBOX ? /* @__PURE__ */ (0, z.jsx)(F, {
						size: "sm",
						className: "w-full",
						options: g,
						value: g.find((e) => e.value === n.value),
						onChange: (t) => {
							t && M((r) => ({
								...r,
								[e]: {
									...n,
									value: t.value
								}
							}));
						}
					}) : /* @__PURE__ */ (0, z.jsx)(j, {
						value: n?.value || "",
						onChange: (t) => M((r) => ({
							...r,
							[e]: {
								...n,
								value: t.target.value
							}
						})),
						size: "sm",
						className: "w-full"
					}) : a[e].fieldType === b.DATE ? /* @__PURE__ */ (0, z.jsx)(F, {
						size: "sm",
						className: "w-full",
						value: _.find((t) => t.value === a[e].value),
						isDisabled: !0
					}) : a[e].fieldType === b.CHECKBOX ? /* @__PURE__ */ (0, z.jsx)(F, {
						size: "sm",
						className: "w-full",
						value: g.find((t) => t.value === a[e].value),
						isDisabled: !0
					}) : /* @__PURE__ */ (0, z.jsx)(j, {
						value: a[e].value,
						readOnly: !0,
						size: "sm",
						className: "w-full"
					})
				}),
				!u && /* @__PURE__ */ (0, z.jsx)("div", {
					className: "flex-1",
					children: t ? /* @__PURE__ */ (0, z.jsx)(F, {
						size: "sm",
						className: "w-full",
						options: h,
						value: h.find((e) => e.value === n?.whenToWrite),
						onChange: (t) => {
							t && M((r) => ({
								...r,
								[e]: {
									...n,
									whenToWrite: t.value
								}
							}));
						}
					}) : /* @__PURE__ */ (0, z.jsx)(F, {
						size: "sm",
						className: "w-full",
						value: h.find((t) => t.value === a[e].whenToWrite),
						isDisabled: !0
					})
				}),
				/* @__PURE__ */ (0, z.jsx)("div", {
					className: "flex w-20 justify-center gap-1",
					children: t ? /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [/* @__PURE__ */ (0, z.jsx)(s, {
						size: "sm",
						StartIcon: "check",
						variant: "icon",
						color: "primary",
						onClick: () => ne(e)
					}), /* @__PURE__ */ (0, z.jsx)(s, {
						size: "sm",
						StartIcon: "x",
						variant: "icon",
						color: "secondary",
						onClick: () => q(e)
					})] }) : /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [/* @__PURE__ */ (0, z.jsx)(s, {
						size: "sm",
						StartIcon: "pencil",
						variant: "icon",
						color: "minimal",
						onClick: () => te(e)
					}), /* @__PURE__ */ (0, z.jsx)(s, {
						size: "sm",
						StartIcon: "x",
						variant: "icon",
						color: "minimal",
						onClick: () => {
							let t = { ...a };
							delete t[e], l(t);
						}
					})] })
				})
			]
		}), t && I[e] && /* @__PURE__ */ (0, z.jsx)(f, {
			severity: "error",
			className: "mt-1",
			message: I[e]
		})] }, e);
	}), R && /* @__PURE__ */ (0, z.jsxs)("div", { children: [/* @__PURE__ */ (0, z.jsxs)("div", {
		className: "flex items-center gap-2",
		children: [
			/* @__PURE__ */ (0, z.jsx)("div", {
				className: "flex-1",
				children: /* @__PURE__ */ (0, z.jsx)(j, {
					size: "sm",
					className: "w-full",
					value: H.field,
					placeholder: d("field_name"),
					onChange: (e) => U({
						...H,
						field: e.target.value
					})
				})
			}),
			/* @__PURE__ */ (0, z.jsx)("div", {
				className: "flex-1",
				children: /* @__PURE__ */ (0, z.jsx)(F, {
					size: "sm",
					className: "w-full",
					options: m,
					value: v,
					onChange: (e) => {
						e && (y(e), U({
							...H,
							fieldType: e.value,
							...e.value === b.DATE && { value: S.value },
							...e.value === b.CHECKBOX && { value: T.value }
						}));
					}
				})
			}),
			/* @__PURE__ */ (0, z.jsx)("div", {
				className: "flex-1",
				children: H.fieldType === b.DATE ? /* @__PURE__ */ (0, z.jsx)(F, {
					size: "sm",
					className: "w-full",
					options: _,
					value: S,
					onChange: (e) => {
						e && (C(e), U({
							...H,
							value: e.value
						}));
					}
				}) : H.fieldType === b.CHECKBOX ? /* @__PURE__ */ (0, z.jsx)(F, {
					size: "sm",
					className: "w-full",
					options: g,
					value: T,
					onChange: (e) => {
						e && (E(e), U({
							...H,
							value: e.value
						}));
					}
				}) : /* @__PURE__ */ (0, z.jsx)(j, {
					size: "sm",
					className: "w-full",
					value: H.value,
					placeholder: d("value"),
					onChange: (e) => U({
						...H,
						value: e.target.value
					})
				})
			}),
			!u && /* @__PURE__ */ (0, z.jsx)("div", {
				className: "flex-1",
				children: /* @__PURE__ */ (0, z.jsx)(F, {
					size: "sm",
					className: "w-full",
					options: h,
					value: D,
					onChange: (e) => {
						e && (O(e), U({
							...H,
							whenToWrite: e.value
						}));
					}
				})
			}),
			/* @__PURE__ */ (0, z.jsxs)("div", {
				className: "flex w-20 justify-center gap-1",
				children: [/* @__PURE__ */ (0, z.jsx)(s, {
					size: "sm",
					StartIcon: "check",
					variant: "icon",
					color: "primary",
					disabled: !(H.field && H.fieldType && H.value !== "" && H.whenToWrite),
					onClick: G
				}), /* @__PURE__ */ (0, z.jsx)(s, {
					size: "sm",
					StartIcon: "x",
					variant: "icon",
					color: "secondary",
					onClick: K
				})]
			})
		]
	}), N && /* @__PURE__ */ (0, z.jsx)(f, {
		severity: "error",
		className: "mt-1",
		message: N
	})] })] })] }), !R && /* @__PURE__ */ (0, z.jsx)(s, {
		className: "text-subtle mt-2 w-fit",
		StartIcon: "plus",
		color: "minimal",
		size: "sm",
		onClick: () => {
			W(), V(!0);
		},
		children: d("add_new_field")
	})] }) : null] });
}, W = {
	bookerCountryFieldId: "country",
	bookerStateFieldId: "state",
	bookerZipFieldId: "zip",
	bookerSubRegionFieldId: "sub_region"
}, G = {
	[d.SUB_REGION]: {
		labelKey: "salesforce_rule_sub_region",
		descKey: "salesforce_rule_sub_region_desc",
		categoryKey: "salesforce_tiebreaker_category_geo",
		categoryVariant: "blue"
	},
	[d.COUNTRY_STATE_ZIP]: {
		labelKey: "salesforce_rule_country_state_zip",
		descKey: "salesforce_rule_country_state_zip_desc",
		categoryKey: "salesforce_tiebreaker_category_geo",
		categoryVariant: "blue"
	},
	[d.COUNTRY_STATE]: {
		labelKey: "salesforce_rule_country_state",
		descKey: "salesforce_rule_country_state_desc",
		categoryKey: "salesforce_tiebreaker_category_geo",
		categoryVariant: "blue"
	},
	[d.COUNTRY]: {
		labelKey: "salesforce_rule_country",
		descKey: "salesforce_rule_country_desc",
		categoryKey: "salesforce_tiebreaker_category_geo",
		categoryVariant: "blue"
	},
	[d.CHILD_ACCOUNTS_MAX]: {
		labelKey: "salesforce_rule_child_accounts",
		descKey: "salesforce_rule_child_accounts_desc",
		categoryKey: "salesforce_tiebreaker_category_size",
		categoryVariant: "green"
	},
	[d.OPPORTUNITIES_MAX]: {
		labelKey: "salesforce_rule_opportunities",
		descKey: "salesforce_rule_opportunities_desc",
		categoryKey: "salesforce_tiebreaker_category_size",
		categoryVariant: "green"
	},
	[d.CONTACTS_MAX]: {
		labelKey: "salesforce_rule_contacts",
		descKey: "salesforce_rule_contacts_desc",
		categoryKey: "salesforce_tiebreaker_category_size",
		categoryVariant: "green"
	},
	[d.LAST_ACTIVITY_MAX]: {
		labelKey: "salesforce_rule_last_activity",
		descKey: "salesforce_rule_last_activity_desc",
		categoryKey: "salesforce_tiebreaker_category_recency",
		categoryVariant: "orange"
	},
	[d.CREATED_DATE_MIN]: {
		labelKey: "salesforce_rule_created_date",
		descKey: "salesforce_rule_created_date_desc",
		categoryKey: "salesforce_tiebreaker_category_age",
		categoryVariant: "gray"
	}
};
function K() {
	return O.map((e) => ({
		id: e,
		enabled: !0
	}));
}
function te() {
	return [
		{
			labelKey: "salesforce_geo_field_country",
			descKey: "salesforce_geo_field_country_desc",
			identifier: W.bookerCountryFieldId,
			usedBy: [
				"salesforce_rule_country",
				"salesforce_rule_country_state",
				"salesforce_rule_country_state_zip"
			],
			ipFallback: !0
		},
		{
			labelKey: "salesforce_geo_field_state",
			descKey: "salesforce_geo_field_state_desc",
			identifier: W.bookerStateFieldId,
			usedBy: ["salesforce_rule_country_state", "salesforce_rule_country_state_zip"],
			ipFallback: !0
		},
		{
			labelKey: "salesforce_geo_field_zip",
			descKey: "salesforce_geo_field_zip_desc",
			identifier: W.bookerZipFieldId,
			usedBy: ["salesforce_rule_country_state_zip"],
			ipFallback: !1
		},
		{
			labelKey: "salesforce_geo_field_sub_region",
			descKey: "salesforce_geo_field_sub_region_desc",
			identifier: W.bookerSubRegionFieldId,
			usedBy: ["salesforce_rule_sub_region"],
			ipFallback: !1
		}
	];
}
var q = ({ open: e, onOpenChange: t }) => {
	let { t: n } = p(), r = te();
	return /* @__PURE__ */ (0, z.jsx)(C, {
		open: e,
		onOpenChange: t,
		children: /* @__PURE__ */ (0, z.jsxs)(u, {
			enableOverflow: !0,
			type: "creation",
			className: "sm:max-w-[640px]",
			children: [/* @__PURE__ */ (0, z.jsxs)("div", { children: [
				/* @__PURE__ */ (0, z.jsx)("h1", {
					className: "w-full text-xl font-semibold",
					children: n("salesforce_geo_fields_dialog_title")
				}),
				/* @__PURE__ */ (0, z.jsx)("p", {
					className: "text-subtle mt-2 text-sm",
					children: n("salesforce_geo_fields_dialog_intro")
				}),
				/* @__PURE__ */ (0, z.jsxs)("ul", {
					className: "text-emphasis ml-5 mt-3 list-disc text-sm",
					children: [
						/* @__PURE__ */ (0, z.jsx)("li", { children: n("salesforce_geo_fields_dialog_hint_convention") }),
						/* @__PURE__ */ (0, z.jsx)("li", { children: n("salesforce_geo_fields_dialog_hint_ip_fallback") }),
						/* @__PURE__ */ (0, z.jsx)("li", { children: n("salesforce_geo_fields_dialog_hint_priority") })
					]
				}),
				/* @__PURE__ */ (0, z.jsx)("div", {
					className: "divide-subtle mt-6 divide-y rounded-md border border-subtle",
					children: r.map((e) => /* @__PURE__ */ (0, z.jsxs)("div", {
						className: "p-4",
						children: [
							/* @__PURE__ */ (0, z.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [
									/* @__PURE__ */ (0, z.jsx)("span", {
										className: "text-default text-sm font-semibold",
										children: n(e.labelKey)
									}),
									e.identifier ? /* @__PURE__ */ (0, z.jsx)("code", {
										className: "rounded bg-subtle px-2 py-0.5 text-emphasis text-xs",
										children: e.identifier
									}) : null,
									e.ipFallback ? /* @__PURE__ */ (0, z.jsx)(P, {
										variant: "blue",
										children: n("salesforce_geo_fields_dialog_ip_fallback_badge")
									}) : null
								]
							}),
							/* @__PURE__ */ (0, z.jsx)("p", {
								className: "text-subtle mt-1 text-sm",
								children: n(e.descKey)
							}),
							/* @__PURE__ */ (0, z.jsxs)("div", {
								className: "mt-2 flex flex-wrap items-center gap-1 text-subtle text-xs",
								children: [/* @__PURE__ */ (0, z.jsx)("span", { children: n("salesforce_geo_fields_dialog_used_by") }), e.usedBy.map((t, r) => /* @__PURE__ */ (0, z.jsxs)("span", {
									className: "text-emphasis",
									children: [n(t), r < e.usedBy.length - 1 ? "," : null]
								}, t))]
							})
						]
					}, e.labelKey))
				})
			] }), /* @__PURE__ */ (0, z.jsx)(S, {
				showDivider: !0,
				children: /* @__PURE__ */ (0, z.jsx)(T, { color: "primary" })
			})]
		})
	});
}, ne = ({ rules: e, onChange: t }) => {
	let { t: n } = p(), [r] = m(), i = e ?? K(), [a, o] = (0, B.useState)(!1), [c, l] = (0, B.useState)(!1), u = new Set(i.map((e) => e.id)), d = O.filter((e) => !u.has(e)), f = (e, n) => {
		let r = [...i];
		[r[e], r[n]] = [r[n], r[e]], t(r);
	}, h = (e) => {
		t(i.filter((t, n) => n !== e));
	}, g = (e) => {
		t([...i, {
			id: e,
			enabled: !0
		}]), o(!1);
	}, v = i.some((e) => G[e.id]?.categoryKey === "salesforce_tiebreaker_category_geo");
	return /* @__PURE__ */ (0, z.jsxs)("div", {
		className: "mt-3",
		children: [
			/* @__PURE__ */ (0, z.jsx)("p", {
				className: "mb-3 text-sm text-subtle",
				children: n("salesforce_tiebreaker_rules_description")
			}),
			v ? /* @__PURE__ */ (0, z.jsx)("button", {
				type: "button",
				className: "mb-3 text-sm text-emphasis underline underline-offset-2 hover:text-default",
				onClick: () => l(!0),
				children: n("salesforce_how_to_use_geo_fields_link")
			}) : null,
			/* @__PURE__ */ (0, z.jsx)(q, {
				open: c,
				onOpenChange: l
			}),
			/* @__PURE__ */ (0, z.jsx)("ul", {
				ref: r,
				className: "divide-y divide-subtle rounded-md border border-subtle",
				children: i.map((e, t) => {
					let r = G[e.id];
					return r ? /* @__PURE__ */ (0, z.jsxs)("li", {
						className: "group relative flex items-center justify-between p-4 transition hover:bg-cal-muted",
						children: [
							t > 0 && /* @__PURE__ */ (0, z.jsx)("button", {
								type: "button",
								className: "invisible absolute -left-[12px] -mt-4 mb-4 -ml-4 hidden h-6 w-6 scale-0 items-center justify-center rounded-md border border-subtle bg-default p-1 text-muted transition-all hover:border-emphasis hover:text-emphasis hover:shadow group-hover:visible group-hover:scale-100 sm:ml-0 sm:flex",
								onClick: () => f(t, t - 1),
								children: /* @__PURE__ */ (0, z.jsx)(_, { className: "h-5 w-5" })
							}),
							t < i.length - 1 && /* @__PURE__ */ (0, z.jsx)("button", {
								type: "button",
								className: "invisible absolute -left-[12px] mt-8 -ml-4 hidden h-6 w-6 scale-0 items-center justify-center rounded-md border border-subtle bg-default p-1 text-muted transition-all hover:border-emphasis hover:text-emphasis hover:shadow group-hover:visible group-hover:scale-100 sm:ml-0 sm:flex",
								onClick: () => f(t, t + 1),
								children: /* @__PURE__ */ (0, z.jsx)(L, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, z.jsxs)("div", { children: [/* @__PURE__ */ (0, z.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, z.jsx)("span", {
										className: "font-semibold text-default text-sm",
										children: n(r.labelKey)
									}),
									/* @__PURE__ */ (0, z.jsx)(P, {
										variant: r.categoryVariant,
										children: n(r.categoryKey)
									}),
									/* @__PURE__ */ (0, z.jsx)(P, {
										variant: "grayWithoutHover",
										children: n("salesforce_tiebreaker_priority", { priority: t + 1 })
									})
								]
							}), /* @__PURE__ */ (0, z.jsx)("p", {
								className: "max-w-[280px] pt-1 text-sm text-subtle sm:max-w-[500px]",
								children: n(r.descKey)
							})] }),
							/* @__PURE__ */ (0, z.jsx)(s, {
								color: "destructive",
								variant: "icon",
								"data-testid": "delete-tiebreaker-rule",
								StartIcon: "trash-2",
								onClick: () => h(t)
							})
						]
					}, e.id) : null;
				})
			}),
			d.length > 0 && /* @__PURE__ */ (0, z.jsxs)("div", {
				className: "relative mt-3",
				children: [/* @__PURE__ */ (0, z.jsx)(s, {
					type: "button",
					color: "minimal",
					size: "sm",
					StartIcon: "plus",
					onClick: () => o(!a),
					children: n("salesforce_add_tiebreaker")
				}), a && /* @__PURE__ */ (0, z.jsx)("ul", {
					className: "absolute z-10 mt-1 w-80 rounded-md border border-subtle bg-default shadow-lg",
					children: d.map((e) => {
						let t = G[e];
						return /* @__PURE__ */ (0, z.jsx)("li", { children: /* @__PURE__ */ (0, z.jsxs)("button", {
							type: "button",
							className: "w-full px-3 py-2.5 text-left hover:bg-muted",
							onClick: () => g(e),
							children: [/* @__PURE__ */ (0, z.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, z.jsx)("span", {
									className: "font-medium text-default text-sm",
									children: n(t.labelKey)
								}), /* @__PURE__ */ (0, z.jsx)(P, {
									variant: t.categoryVariant,
									children: n(t.categoryKey)
								})]
							}), /* @__PURE__ */ (0, z.jsx)("p", {
								className: "mt-0.5 text-subtle text-xs",
								children: n(t.descKey)
							})]
						}) }, e);
					})
				})]
			}),
			/* @__PURE__ */ (0, z.jsxs)("div", {
				className: "mt-3 flex items-center gap-1 text-subtle text-xs",
				children: [/* @__PURE__ */ (0, z.jsx)("span", { children: "↓" }), /* @__PURE__ */ (0, z.jsx)("span", { children: n("salesforce_tiebreaker_fallback") })]
			})
		]
	});
}, re = {}, ie = function({ app: e, eventType: t, onAppInstallSuccess: n }) {
	var s;
	let c = ee.usePathname(), { getAppData: u, setAppData: d, disabled: f } = M(), { enabled: m, updateEnabled: g } = a(e), _ = u("roundRobinLeadSkip"), S = u("roundRobinSkipCheckRecordOn") ?? N.CONTACT, C = u("ifFreeEmailDomainSkipOwnerCheck") ?? !1, w = u("skipContactCreation"), T = u("createLeadIfAccountNull"), O = u("createNewContactUnderAccount"), P = u("createEventOn") ?? N.CONTACT, L = u("onBookingWriteToEventObject") ?? !1, W = u("onBookingWriteToEventObjectMap") ?? re, G = u("createEventOnLeadCheckForContact") ?? !1, K = u("onBookingChangeRecordOwner") ?? !1, te = u("onBookingChangeRecordOwnerName") ?? [], q = u("sendNoShowAttendeeData") ?? !1, ie = u("sendNoShowAttendeeDataField") ?? "", ae = u("onBookingWriteToRecord") ?? !1, oe = u("onBookingWriteToRecordFields") ?? {}, se = u("ignoreGuests") ?? !1, ce = u("roundRobinSkipFallbackToLeadOwner") ?? !1, le = u("onCancelWriteToEventRecord") ?? !1, ue = u("onCancelWriteToEventRecordFields") ?? {}, de = u("onCancelWriteToRecord") ?? !1, fe = u("onCancelWriteToRecordFields") ?? {}, pe = u("rrSkipFieldRules") ?? [], me = u("excludeAccountRecordTypes") ?? [], [he, ge] = (0, B.useState)(() => me.join(", ")), J = u("lastSyncError"), _e = u("enableFuzzyDomainMatching") ?? !1, Y = u("tiebreakerRules"), ve = !Y || Y.length > 0, ye = (0, B.useRef)(Y && Y.length > 0 ? Y : void 0);
	Y && Y.length > 0 && (ye.current = Y);
	let { t: X } = p(), Z = [
		{
			label: X("contact"),
			value: N.CONTACT
		},
		{
			label: X("salesforce_lead"),
			value: N.LEAD
		},
		{
			label: X("salesforce_contact_under_account"),
			value: N.ACCOUNT
		}
	], [Q, be] = (0, B.useState)(Z.find((e) => e.value === P) ?? Z[0]), $ = [
		{
			label: X("contact"),
			value: N.CONTACT
		},
		{
			label: X("salesforce_lead"),
			value: N.LEAD
		},
		{
			label: X("account"),
			value: N.ACCOUNT
		}
	], [xe, Se] = (0, B.useState)($.find((e) => e.value === S) ?? $[0]), { normalizedEventObjectMap: Ce, hasLegacyEventFields: we } = (0, B.useMemo)(() => {
		let e = W, t = {}, n = !1;
		for (let [r, i] of Object.entries(e)) if (E(i)) t[r] = i;
		else {
			n = !0;
			let e = typeof i == "boolean";
			t[r] = {
				value: e ? i : String(i ?? ""),
				fieldType: e ? b.CHECKBOX : b.TEXT,
				whenToWrite: o.EVERY_BOOKING
			};
		}
		return {
			normalizedEventObjectMap: t,
			hasLegacyEventFields: n
		};
	}, [W]), Te = () => /* @__PURE__ */ (0, z.jsx)(r.SubSection, { children: /* @__PURE__ */ (0, z.jsx)(r.SubSectionHeader, {
		icon: "at-sign",
		title: X("salesforce_create_new_contact_under_account"),
		labelFor: "create-new-contact-under-account",
		children: /* @__PURE__ */ (0, z.jsx)(x, {
			size: "sm",
			labelOnLeading: !0,
			checked: O,
			onCheckedChange: (e) => {
				d("createNewContactUnderAccount", e);
			}
		})
	}) });
	return /* @__PURE__ */ (0, z.jsx)(i, {
		onAppInstallSuccess: n,
		returnTo: `${v}${c}?tabName=apps`,
		app: e,
		teamId: t.team?.id || void 0,
		switchOnClick: (e) => {
			g(e);
		},
		switchChecked: m,
		hideSettingsIcon: !0,
		children: /* @__PURE__ */ (0, z.jsxs)(r.Content, { children: [
			J && /* @__PURE__ */ (0, z.jsxs)(k, {
				variant: "error",
				className: "mb-4",
				children: [
					/* @__PURE__ */ (0, z.jsx)(y, { className: "size-4" }),
					/* @__PURE__ */ (0, z.jsx)(D, { children: X("salesforce_sync_failure", { errorCode: J.errorCode }) }),
					/* @__PURE__ */ (0, z.jsx)(l, { children: `${J.errorMessage}${(s = J.droppedFields) != null && s.length ? ` (${X("salesforce_dropped_fields")}: ${J.droppedFields.join(", ")})` : ""} — ${new Date(J.timestamp).toLocaleString()}` }),
					/* @__PURE__ */ (0, z.jsx)(R, { children: /* @__PURE__ */ (0, z.jsx)("button", {
						type: "button",
						className: "text-sm font-medium underline",
						onClick: () => d("lastSyncError", null),
						children: X("dismiss")
					}) })
				]
			}),
			/* @__PURE__ */ (0, z.jsx)(r.SubSection, { children: /* @__PURE__ */ (0, z.jsx)(r.SubSectionHeader, {
				icon: "zap",
				title: X("salesforce_add_attendees_as"),
				justify: "start",
				labelFor: "add-attendees-as",
				children: /* @__PURE__ */ (0, z.jsx)(F, {
					size: "sm",
					id: "add-attendees-as",
					className: "w-[200px]",
					options: Z,
					value: Q,
					onChange: (e) => {
						e && (be(e), d("createEventOn", e.value));
					}
				})
			}) }),
			/* @__PURE__ */ (0, z.jsx)(r.SubSection, { children: /* @__PURE__ */ (0, z.jsx)(r.SubSectionHeader, {
				icon: "user-plus",
				title: X("salesforce_ignore_guests"),
				labelFor: "ignore-guests",
				children: /* @__PURE__ */ (0, z.jsx)(x, {
					size: "sm",
					labelOnLeading: !0,
					checked: se,
					onCheckedChange: (e) => {
						d("ignoreGuests", e);
					}
				})
			}) }),
			Q.value === N.CONTACT ? /* @__PURE__ */ (0, z.jsx)(r.SubSection, { children: /* @__PURE__ */ (0, z.jsx)(r.SubSectionHeader, {
				icon: "user-plus",
				title: X("skip_contact_creation", { appName: "Salesforce" }),
				labelFor: "skip-contact-creation",
				children: /* @__PURE__ */ (0, z.jsx)(x, {
					size: "sm",
					labelOnLeading: !0,
					checked: w,
					onCheckedChange: (e) => {
						d("skipContactCreation", e);
					}
				})
			}) }) : null,
			Q.value === N.LEAD ? /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [/* @__PURE__ */ (0, z.jsx)(r.SubSection, { children: /* @__PURE__ */ (0, z.jsx)(r.SubSectionHeader, {
				icon: "user-plus",
				title: X("salesforce_create_event_on_contact"),
				labelFor: "create-event-on-contact",
				children: /* @__PURE__ */ (0, z.jsx)(x, {
					size: "sm",
					labelOnLeading: !0,
					checked: G,
					onCheckedChange: (e) => {
						d("createEventOnLeadCheckForContact", e);
					}
				})
			}) }), /* @__PURE__ */ (0, z.jsx)(Te, {})] }) : null,
			Q.value === N.ACCOUNT ? /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [/* @__PURE__ */ (0, z.jsx)(Te, {}), /* @__PURE__ */ (0, z.jsx)(r.SubSection, { children: /* @__PURE__ */ (0, z.jsx)(r.SubSectionHeader, {
				icon: "user-plus",
				title: X("salesforce_if_account_does_not_exist"),
				labelFor: "create-lead-if-account-null",
				children: /* @__PURE__ */ (0, z.jsx)(x, {
					size: "sm",
					labelOnLeading: !0,
					checked: T,
					onCheckedChange: (e) => {
						d("createLeadIfAccountNull", e);
					}
				})
			}) })] }) : null,
			(Q.value === N.ACCOUNT || Q.value === N.LEAD) && /* @__PURE__ */ (0, z.jsx)(r.SubSection, { children: /* @__PURE__ */ (0, z.jsx)(r.SubSectionHeader, {
				icon: "search",
				title: X("salesforce_enable_fuzzy_domain_matching"),
				labelFor: "enable-fuzzy-domain-matching",
				children: /* @__PURE__ */ (0, z.jsx)(x, {
					size: "sm",
					id: "enable-fuzzy-domain-matching",
					labelOnLeading: !0,
					checked: _e,
					onCheckedChange: (e) => {
						d("enableFuzzyDomainMatching", e);
					}
				})
			}) }),
			/* @__PURE__ */ (0, z.jsxs)(r.SubSection, { children: [/* @__PURE__ */ (0, z.jsx)(U, {
				bookingAction: H.ON_BOOKING,
				optionLabel: X("on_booking_write_to_event_object"),
				optionEnabled: L,
				optionSwitchOnChange: (e) => {
					d("onBookingWriteToEventObject", e);
				},
				writeToObjectData: Ce,
				updateWriteToObjectData: (e) => d("onBookingWriteToEventObjectMap", e),
				hideWhenToWrite: !0
			}), L && we && /* @__PURE__ */ (0, z.jsxs)(k, {
				variant: "warning",
				className: "mt-2",
				children: [/* @__PURE__ */ (0, z.jsx)(h, { className: "size-4" }), /* @__PURE__ */ (0, z.jsx)(l, { children: X("salesforce_legacy_event_fields_warning") })]
			})] }),
			/* @__PURE__ */ (0, z.jsx)(r.SubSection, { children: /* @__PURE__ */ (0, z.jsx)(U, {
				bookingAction: H.ON_BOOKING,
				optionLabel: X("salesforce_on_booking_write_to_record", { record: P }),
				optionEnabled: ae,
				writeToObjectData: oe,
				optionSwitchOnChange: (e) => {
					d("onBookingWriteToRecord", e);
				},
				updateWriteToObjectData: (e) => d("onBookingWriteToRecordFields", e)
			}) }),
			/* @__PURE__ */ (0, z.jsxs)(r.SubSection, { children: [/* @__PURE__ */ (0, z.jsx)(r.SubSectionHeader, {
				icon: "user-plus",
				title: X("salesforce_change_record_owner_on_booking"),
				labelFor: "change-record-owner-on-booking",
				children: /* @__PURE__ */ (0, z.jsx)(x, {
					size: "sm",
					labelOnLeading: !0,
					checked: K,
					onCheckedChange: (e) => {
						d("onBookingChangeRecordOwner", e);
					}
				})
			}), K ? /* @__PURE__ */ (0, z.jsx)(r.SubSectionContent, {
				classNames: { container: "p-3" },
				children: /* @__PURE__ */ (0, z.jsxs)("div", { children: [/* @__PURE__ */ (0, z.jsx)(I, {
					htmlFor: "on-booking-change-record-owner-name",
					className: "text-subtle text-sm font-medium",
					children: X("salesforce_owner_name_to_change")
				}), /* @__PURE__ */ (0, z.jsx)(j, {
					id: "on-booking-change-record-owner-name",
					size: "sm",
					value: te,
					onChange: (e) => d("onBookingChangeRecordOwnerName", e.target.value)
				})] })
			}) : null] }),
			/* @__PURE__ */ (0, z.jsxs)(r.SubSection, { children: [/* @__PURE__ */ (0, z.jsx)(r.SubSectionHeader, {
				icon: "filter",
				title: X("salesforce_exclude_record_types"),
				justify: "start",
				children: null
			}), /* @__PURE__ */ (0, z.jsx)(r.SubSectionContent, {
				classNames: { container: "p-3" },
				children: /* @__PURE__ */ (0, z.jsxs)("div", { children: [/* @__PURE__ */ (0, z.jsx)(I, {
					htmlFor: "exclude-account-record-types",
					className: "text-subtle text-sm font-medium",
					children: X("salesforce_exclude_record_types_description")
				}), /* @__PURE__ */ (0, z.jsx)(j, {
					id: "exclude-account-record-types",
					size: "sm",
					placeholder: "Partner/Alliance, Vendor",
					value: he,
					onChange: (e) => ge(e.target.value),
					onBlur: () => {
						let e = he.split(",").map((e) => e.trim()).filter(Boolean);
						d("excludeAccountRecordTypes", e), ge(e.join(", "));
					}
				})] })
			})] }),
			/* @__PURE__ */ (0, z.jsxs)(r.SubSection, { children: [/* @__PURE__ */ (0, z.jsx)(r.SubSectionHeader, {
				icon: "sliders-vertical",
				title: X("salesforce_tiebreaker_rules"),
				labelFor: "tiebreaker-rules-toggle",
				children: /* @__PURE__ */ (0, z.jsx)(x, {
					size: "sm",
					id: "tiebreaker-rules-toggle",
					labelOnLeading: !0,
					checked: ve,
					onCheckedChange: (e) => {
						e ? d("tiebreakerRules", ye.current ?? void 0) : d("tiebreakerRules", []);
					}
				})
			}), ve && /* @__PURE__ */ (0, z.jsx)(r.SubSectionContent, {
				classNames: { container: "p-3" },
				children: /* @__PURE__ */ (0, z.jsx)(ne, {
					rules: Y,
					onChange: (e) => d("tiebreakerRules", e)
				})
			})] }),
			t.schedulingType === A.ROUND_ROBIN ? /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [/* @__PURE__ */ (0, z.jsxs)(r.SubSection, { children: [/* @__PURE__ */ (0, z.jsx)(r.SubSectionHeader, {
				icon: "users",
				title: X("salesforce_book_directly_with_attendee_owner"),
				labelFor: "book-directly-with-attendee-owner",
				children: /* @__PURE__ */ (0, z.jsx)(x, {
					size: "sm",
					id: "book-directly-witha-attendee-owner",
					checked: _,
					onCheckedChange: (e) => {
						d("roundRobinLeadSkip", e), e && d("enabled", e);
					}
				})
			}), _ ? /* @__PURE__ */ (0, z.jsx)(r.SubSectionContent, {
				classNames: { container: "p-3" },
				children: /* @__PURE__ */ (0, z.jsxs)("div", { children: [/* @__PURE__ */ (0, z.jsx)(I, {
					htmlFor: "round-robin-skip-check-record-on",
					className: "text-subtle text-sm font-medium",
					children: X("salesforce_check_owner_of")
				}), /* @__PURE__ */ (0, z.jsx)(F, {
					size: "sm",
					className: "w-60",
					options: $,
					value: xe,
					onChange: (e) => {
						e && (Se(e), d("roundRobinSkipCheckRecordOn", e.value));
					}
				})] })
			}) : null] }), /* @__PURE__ */ (0, z.jsx)(z.Fragment, { children: _ ? /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [
				xe.value === N.CONTACT ? /* @__PURE__ */ (0, z.jsx)(r.SubSection, { children: /* @__PURE__ */ (0, z.jsx)(r.SubSectionHeader, {
					icon: "users",
					title: X("salesforce_round_robin_skip_fallback_to_lead_owner"),
					labelFor: "round-robin-skip-fallback-to-lead-owner",
					children: /* @__PURE__ */ (0, z.jsx)(x, {
						id: "round-robin-skip-fallback-to-lead-owner",
						size: "sm",
						checked: ce,
						onCheckedChange: (e) => {
							d("roundRobinSkipFallbackToLeadOwner", e);
						}
					})
				}) }) : null,
				/* @__PURE__ */ (0, z.jsxs)(r.SubSection, { children: [/* @__PURE__ */ (0, z.jsx)(r.SubSectionHeader, {
					icon: "users",
					title: X("salesforce_if_free_email_domain_skip_owner_check"),
					labelFor: "if-free-email-domain-skip-owner-check",
					children: /* @__PURE__ */ (0, z.jsx)(x, {
						id: "if-free-email-domain-skip-owner-check",
						size: "sm",
						checked: C,
						onCheckedChange: (e) => {
							d("ifFreeEmailDomainSkipOwnerCheck", e);
						}
					})
				}), /* @__PURE__ */ (0, z.jsx)(k, {
					variant: "info",
					children: /* @__PURE__ */ (0, z.jsx)(D, { children: X("skip_rr_description") })
				})] }),
				/* @__PURE__ */ (0, z.jsx)(V, {
					fieldRules: pe,
					updateFieldRules: (e) => d("rrSkipFieldRules", e)
				})
			] }) : null })] }) : null,
			/* @__PURE__ */ (0, z.jsx)(r.SubSection, { children: /* @__PURE__ */ (0, z.jsx)(U, {
				bookingAction: H.ON_CANCEL,
				optionLabel: X("salesforce_on_cancel_write_to_event"),
				optionEnabled: le,
				writeToObjectData: ue,
				optionSwitchOnChange: (e) => {
					d("onCancelWriteToEventRecord", e);
				},
				updateWriteToObjectData: (e) => d("onCancelWriteToEventRecordFields", e)
			}) }),
			/* @__PURE__ */ (0, z.jsx)(r.SubSection, { children: /* @__PURE__ */ (0, z.jsx)(U, {
				bookingAction: H.ON_CANCEL,
				optionLabel: X("salesforce_on_cancel_write_to_record", { record: P }),
				optionEnabled: de,
				writeToObjectData: fe,
				optionSwitchOnChange: (e) => {
					d("onCancelWriteToRecord", e);
				},
				updateWriteToObjectData: (e) => d("onCancelWriteToRecordFields", e)
			}) }),
			/* @__PURE__ */ (0, z.jsxs)(r.SubSection, { children: [/* @__PURE__ */ (0, z.jsx)(r.SubSectionHeader, {
				icon: "calendar",
				title: "Send no show attendee data to event object",
				labelFor: "send-no-show-attendee-data",
				children: /* @__PURE__ */ (0, z.jsx)(x, {
					id: "send-no-show-attendee-data",
					size: "sm",
					checked: q,
					onCheckedChange: (e) => {
						d("sendNoShowAttendeeData", e);
					}
				})
			}), q ? /* @__PURE__ */ (0, z.jsxs)(r.SubSectionContent, {
				classNames: { container: "p-3" },
				children: [/* @__PURE__ */ (0, z.jsx)(I, {
					htmlFor: "send-no-show-attendee-data-field-name",
					className: "text-subtle text-sm font-medium",
					children: "Field name to check (must be checkbox data type)"
				}), /* @__PURE__ */ (0, z.jsx)(j, {
					id: "send-no-show-attendee-data-field-name",
					size: "sm",
					value: ie,
					onChange: (e) => d("sendNoShowAttendeeDataField", e.target.value)
				})]
			}) : null] })
		] })
	});
};
//#endregion
export { ie as default };

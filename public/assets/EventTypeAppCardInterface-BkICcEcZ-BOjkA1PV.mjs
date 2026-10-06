import { a as e, n as t, t as n } from "./jsx-runtime-BqlYg9ib.mjs";
import { n as r, t as i } from "./AppCard-D2gzMALd-CxE88MfQ.mjs";
import { t as a } from "./useIsAppEnabled-CVIVp35Y-BFw8SdUN.mjs";
import { C as o, M as s, Mt as c, Rt as l, Vt as u, Wt as d, an as f, gn as p, j as m, jt as h, l as g, lt as _, rn as v, wn as y } from "./cal-atoms-B35e3sTk.mjs";
//#region node_modules/@calcom/atoms/dist/EventTypeAppCardInterface-BkICcEcZ.js
var b = /* @__PURE__ */ e(n(), 1), x = /* @__PURE__ */ e(t(), 1), S = /* @__PURE__ */ ((e) => (e.ON_BOOKING = "on_booking", e.ON_CANCEL = "on_cancel", e))(S || {}), C = p.DATE, w = p.CHECKBOX, T = {
	[p.TEXT]: "text",
	[p.STRING]: "text",
	[p.DATE]: "date",
	[p.DATETIME]: "datetime",
	[p.PHONE]: "phone",
	[p.CHECKBOX]: "checkbox",
	[p.PICKLIST]: "picklist",
	[p.CUSTOM]: "custom",
	[p.TEXTAREA]: "textarea"
}, E = {
	[m.BOOKING_CANCEL_DATE]: "booking_cancel_date",
	[m.BOOKING_START_DATE]: "booking_start_date",
	[m.BOOKING_CREATED_DATE]: "booking_created_date"
}, D = (e) => ({
	[u.EVERY_BOOKING]: e === S.ON_CANCEL ? "salesforce_on_every_cancellation" : "on_every_booking",
	[u.FIELD_EMPTY]: "only_if_field_is_empty"
}), O = (e, t) => e.map((e) => ({
	label: t(T[e]),
	value: e
})), k = (e, t, n) => {
	let r = e === S.ON_CANCEL ? [
		m.BOOKING_CANCEL_DATE,
		m.BOOKING_START_DATE,
		m.BOOKING_CREATED_DATE
	] : [m.BOOKING_START_DATE, m.BOOKING_CREATED_DATE];
	return (t ?? r).map((e) => ({
		label: n(E[e]),
		value: e
	}));
}, A = (e, t, n) => {
	let r = D(t);
	return e.map((e) => ({
		label: n(r[e]),
		value: e
	}));
}, j = (e) => [{
	label: e("true"),
	value: !0
}, {
	label: e("false"),
	value: !1
}], M = ({ bookingAction: e, optionLabel: t, optionEnabled: n, optionSwitchOnChange: i, writeToObjectData: a, updateWriteToObjectData: s, supportedFieldTypes: d, supportedDateFields: p, supportedWriteTriggers: m = [u.EVERY_BOOKING, u.FIELD_EMPTY] }) => {
	let { t: h } = c(), g = (0, x.useMemo)(() => O(d, h), [d, h]), v = (0, x.useMemo)(() => k(e, p, h), [
		p,
		e,
		h
	]), S = (0, x.useMemo)(() => A(m, e, h), [
		m,
		e,
		h
	]), T = S.length > 1, E = (0, x.useMemo)(() => j(h), [h]), [D, M] = (0, x.useState)(g[0]), [N, P] = (0, x.useState)(v[0]), [F, I] = (0, x.useState)(E[0]), [L, R] = (0, x.useState)(S[0]), [z, B] = (0, x.useState)({}), [V, H] = (0, x.useState)({}), [U, W] = (0, x.useState)({
		field: "",
		fieldType: D.value,
		value: "",
		whenToWrite: L.value
	}), G = (e) => {
		Object.keys(z).forEach((t) => {
			z[t] && t !== e && K(t);
		}), B((t) => ({
			...t,
			[e]: !0
		})), H((t) => ({
			...t,
			[e]: {
				field: e,
				fieldType: a[e].fieldType,
				value: a[e].value,
				whenToWrite: a[e].whenToWrite
			}
		}));
	}, K = (e) => {
		B((t) => ({
			...t,
			[e]: !1
		})), H((t) => {
			let n = { ...t };
			return delete n[e], n;
		});
	}, q = (e) => {
		let t = V[e];
		if (!t) return;
		if (!t.field.trim()) {
			l(h("field_name_cannot_be_empty"), "error");
			return;
		}
		if (t.field !== e && Object.keys(a).includes(t.field.trim())) {
			l(h("field_already_exists"), "error");
			return;
		}
		let n = { ...a };
		t.field !== e && delete n[e], n[t.field.trim()] = {
			fieldType: t.fieldType,
			value: t.value,
			whenToWrite: t.whenToWrite
		}, s(n), K(e);
	};
	return /* @__PURE__ */ (0, b.jsxs)(b.Fragment, { children: [/* @__PURE__ */ (0, b.jsx)(r.SubSectionHeader, {
		icon: "star",
		labelFor: "write-to-object-settings",
		title: t,
		children: /* @__PURE__ */ (0, b.jsx)(f, {
			checked: n,
			onCheckedChange: i,
			id: "write-to-object-settings",
			size: "sm"
		})
	}), n ? /* @__PURE__ */ (0, b.jsxs)(r.SubSectionContent, { children: [
		/* @__PURE__ */ (0, b.jsxs)("div", {
			className: "text-subtle flex gap-3 px-3 py-[6px] text-sm font-medium",
			children: [
				/* @__PURE__ */ (0, b.jsx)("div", {
					className: "flex-1",
					children: h("field_name")
				}),
				/* @__PURE__ */ (0, b.jsx)("div", {
					className: "flex-1",
					children: h("field_type")
				}),
				/* @__PURE__ */ (0, b.jsx)("div", {
					className: "flex-1",
					children: h("value")
				}),
				T && /* @__PURE__ */ (0, b.jsx)("div", {
					className: "flex-1",
					children: h("when_to_write")
				}),
				/* @__PURE__ */ (0, b.jsx)("div", { className: "w-20" })
			]
		}),
		/* @__PURE__ */ (0, b.jsxs)(r.SubSectionNested, { children: [Object.keys(a).map((e) => {
			let t = z[e], n = V[e];
			return /* @__PURE__ */ (0, b.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, b.jsx)("div", {
						className: "flex-1",
						children: t ? /* @__PURE__ */ (0, b.jsx)(_, {
							value: n?.field || e,
							onChange: (t) => H((r) => ({
								...r,
								[e]: {
									...n,
									field: t.target.value
								}
							})),
							size: "sm",
							className: "w-full"
						}) : /* @__PURE__ */ (0, b.jsx)(_, {
							value: e,
							readOnly: !0,
							size: "sm",
							className: "w-full"
						})
					}),
					/* @__PURE__ */ (0, b.jsx)("div", {
						className: "flex-1",
						children: t ? /* @__PURE__ */ (0, b.jsx)(y, {
							size: "sm",
							className: "w-full",
							options: g,
							value: g.find((e) => e.value === n?.fieldType),
							onChange: (t) => {
								t && H((r) => ({
									...r,
									[e]: {
										...n,
										fieldType: t.value,
										...t.value === C && { value: v[0].value },
										...t.value === w && { value: E[0].value }
									}
								}));
							}
						}) : /* @__PURE__ */ (0, b.jsx)(y, {
							size: "sm",
							className: "w-full",
							value: g.find((t) => t.value === a[e].fieldType),
							isDisabled: !0
						})
					}),
					/* @__PURE__ */ (0, b.jsx)("div", {
						className: "flex-1",
						children: t ? n?.fieldType === C ? /* @__PURE__ */ (0, b.jsx)(y, {
							size: "sm",
							className: "w-full",
							options: v,
							value: v.find((e) => e.value === n.value),
							onChange: (t) => {
								t && H((r) => ({
									...r,
									[e]: {
										...n,
										value: t.value
									}
								}));
							}
						}) : n?.fieldType === w ? /* @__PURE__ */ (0, b.jsx)(y, {
							size: "sm",
							className: "w-full",
							options: E,
							value: E.find((e) => e.value === n.value),
							onChange: (t) => {
								t && H((r) => ({
									...r,
									[e]: {
										...n,
										value: t.value
									}
								}));
							}
						}) : /* @__PURE__ */ (0, b.jsx)(_, {
							value: n?.value || "",
							onChange: (t) => H((r) => ({
								...r,
								[e]: {
									...n,
									value: t.target.value
								}
							})),
							size: "sm",
							className: "w-full"
						}) : a[e].fieldType === C ? /* @__PURE__ */ (0, b.jsx)(y, {
							size: "sm",
							className: "w-full",
							value: v.find((t) => t.value === a[e].value),
							isDisabled: !0
						}) : a[e].fieldType === w ? /* @__PURE__ */ (0, b.jsx)(y, {
							size: "sm",
							className: "w-full",
							value: E.find((t) => t.value === a[e].value),
							isDisabled: !0
						}) : /* @__PURE__ */ (0, b.jsx)(_, {
							value: a[e].value,
							readOnly: !0,
							size: "sm",
							className: "w-full"
						})
					}),
					T && /* @__PURE__ */ (0, b.jsx)("div", {
						className: "flex-1",
						children: t ? /* @__PURE__ */ (0, b.jsx)(y, {
							size: "sm",
							className: "w-full",
							options: S,
							value: S.find((e) => e.value === n?.whenToWrite),
							onChange: (t) => {
								t && H((r) => ({
									...r,
									[e]: {
										...n,
										whenToWrite: t.value
									}
								}));
							}
						}) : /* @__PURE__ */ (0, b.jsx)(y, {
							size: "sm",
							className: "w-full",
							value: S.find((t) => t.value === a[e].whenToWrite),
							isDisabled: !0
						})
					}),
					/* @__PURE__ */ (0, b.jsx)("div", {
						className: "flex w-20 justify-center gap-1",
						children: t ? /* @__PURE__ */ (0, b.jsxs)(b.Fragment, { children: [/* @__PURE__ */ (0, b.jsx)(o, {
							size: "sm",
							StartIcon: "check",
							variant: "icon",
							color: "primary",
							onClick: () => q(e)
						}), /* @__PURE__ */ (0, b.jsx)(o, {
							size: "sm",
							StartIcon: "x",
							variant: "icon",
							color: "secondary",
							onClick: () => K(e)
						})] }) : /* @__PURE__ */ (0, b.jsxs)(b.Fragment, { children: [/* @__PURE__ */ (0, b.jsx)(o, {
							size: "sm",
							StartIcon: "pencil",
							variant: "icon",
							color: "minimal",
							onClick: () => G(e)
						}), /* @__PURE__ */ (0, b.jsx)(o, {
							size: "sm",
							StartIcon: "x",
							variant: "icon",
							color: "minimal",
							onClick: () => {
								let t = { ...a };
								delete t[e], s(t);
							}
						})] })
					})
				]
			}, e);
		}), /* @__PURE__ */ (0, b.jsxs)("div", {
			className: "flex gap-2",
			children: [
				/* @__PURE__ */ (0, b.jsx)("div", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, b.jsx)(_, {
						size: "sm",
						className: "w-full",
						value: U.field,
						onChange: (e) => W({
							...U,
							field: e.target.value
						})
					})
				}),
				/* @__PURE__ */ (0, b.jsx)("div", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, b.jsx)(y, {
						size: "sm",
						className: "w-full",
						options: g,
						value: D,
						onChange: (e) => {
							e && (M(e), W({
								...U,
								fieldType: e.value,
								...e.value === C && { value: N.value },
								...e.value === w && { value: F.value }
							}));
						}
					})
				}),
				/* @__PURE__ */ (0, b.jsx)("div", {
					className: "flex-1",
					children: U.fieldType === C ? /* @__PURE__ */ (0, b.jsx)(y, {
						size: "sm",
						className: "w-full",
						options: v,
						value: N,
						onChange: (e) => {
							e && (P(e), W({
								...U,
								value: e.value
							}));
						}
					}) : U.fieldType === w ? /* @__PURE__ */ (0, b.jsx)(y, {
						size: "sm",
						className: "w-full",
						options: E,
						value: F,
						onChange: (e) => {
							e && (I(e), W({
								...U,
								value: e.value
							}));
						}
					}) : /* @__PURE__ */ (0, b.jsx)(_, {
						size: "sm",
						className: "w-full",
						value: U.value,
						onChange: (e) => W({
							...U,
							value: e.target.value
						})
					})
				}),
				T && /* @__PURE__ */ (0, b.jsx)("div", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, b.jsx)(y, {
						size: "sm",
						className: "w-full",
						options: S,
						value: L,
						onChange: (e) => {
							e && (R(e), W({
								...U,
								whenToWrite: e.value
							}));
						}
					})
				}),
				/* @__PURE__ */ (0, b.jsx)("div", { className: "w-20" })
			]
		})] }),
		/* @__PURE__ */ (0, b.jsx)(o, {
			className: "text-subtle mt-2 w-fit",
			StartIcon: "plus",
			color: "minimal",
			size: "sm",
			disabled: !(U.field && U.fieldType && U.value !== "" && U.whenToWrite),
			onClick: () => {
				if (Object.keys(a).includes(U.field.trim())) {
					l(h("field_already_exists"), "error");
					return;
				}
				s({
					...a,
					[U.field.trim()]: {
						fieldType: U.fieldType,
						value: U.value,
						whenToWrite: U.whenToWrite
					}
				}), W({
					field: "",
					fieldType: g[0].value,
					value: "",
					whenToWrite: S[0].value
				});
			},
			children: h("add_new_field")
		})
	] }) : null] });
}, N = function({ app: e, eventType: t, onAppInstallSuccess: n }) {
	let o = h.usePathname(), { t: l } = c(), { getAppData: m, setAppData: _ } = v(), { enabled: y, updateEnabled: x } = a(e), C = m("ignoreGuests") ?? !1, w = m("skipContactCreation") ?? !1, T = m("setOrganizerAsOwner") ?? !1, E = m("overwriteContactOwner") ?? !1, D = m("onBookingWriteToEventObject") ?? !1, O = m("onBookingWriteToEventObjectFields") ?? {}, k = m("roundRobinLeadSkip") ?? !1, A = m("ifFreeEmailDomainSkipOwnerCheck") ?? !1, j = m("onBookingWriteToContactRecord") ?? !1, N = m("onBookingWriteToContactRecordFields") ?? {};
	return /* @__PURE__ */ (0, b.jsx)(i, {
		onAppInstallSuccess: n,
		returnTo: `${d}${o}?tabName=apps`,
		app: e,
		teamId: t.team?.id || void 0,
		switchOnClick: (e) => {
			x(e);
		},
		switchChecked: y,
		hideSettingsIcon: !0,
		children: /* @__PURE__ */ (0, b.jsxs)(r.Content, { children: [
			/* @__PURE__ */ (0, b.jsx)(r.SubSection, { children: /* @__PURE__ */ (0, b.jsx)(r.SubSectionHeader, {
				icon: "user-plus",
				title: l("hubspot_ignore_guests"),
				labelFor: "ignore-guests",
				children: /* @__PURE__ */ (0, b.jsx)(f, {
					size: "sm",
					labelOnLeading: !0,
					checked: C,
					onCheckedChange: (e) => {
						_("ignoreGuests", e);
					}
				})
			}) }),
			/* @__PURE__ */ (0, b.jsx)(r.SubSection, { children: /* @__PURE__ */ (0, b.jsx)(r.SubSectionHeader, {
				icon: "user-plus",
				title: l("skip_contact_creation", { appName: "HubSpot" }),
				labelFor: "skip-contact-creation",
				children: /* @__PURE__ */ (0, b.jsx)(f, {
					size: "sm",
					labelOnLeading: !0,
					checked: w,
					onCheckedChange: (e) => {
						_("skipContactCreation", e);
					}
				})
			}) }),
			/* @__PURE__ */ (0, b.jsx)(r.SubSection, { children: /* @__PURE__ */ (0, b.jsx)(r.SubSectionHeader, {
				icon: "user-check",
				title: l("set_organizer_as_contact_owner"),
				labelFor: "set-organizer-as-owner",
				children: /* @__PURE__ */ (0, b.jsx)(f, {
					size: "sm",
					labelOnLeading: !0,
					checked: T,
					onCheckedChange: (e) => {
						_("setOrganizerAsOwner", e), e || _("overwriteContactOwner", !1);
					}
				})
			}) }),
			T && /* @__PURE__ */ (0, b.jsx)(r.SubSection, { children: /* @__PURE__ */ (0, b.jsx)(r.SubSectionHeader, {
				icon: "refresh-cw",
				title: l("overwrite_existing_contact_owner"),
				labelFor: "overwrite-contact-owner",
				children: /* @__PURE__ */ (0, b.jsx)(f, {
					size: "sm",
					labelOnLeading: !0,
					checked: E,
					onCheckedChange: (e) => {
						_("overwriteContactOwner", e);
					}
				})
			}) }),
			/* @__PURE__ */ (0, b.jsx)(r.SubSection, { children: /* @__PURE__ */ (0, b.jsx)(M, {
				bookingAction: S.ON_BOOKING,
				optionLabel: l("on_booking_write_to_event_object"),
				optionEnabled: D,
				writeToObjectData: O,
				optionSwitchOnChange: (e) => {
					_("onBookingWriteToEventObject", e);
				},
				updateWriteToObjectData: (e) => _("onBookingWriteToEventObjectFields", e),
				supportedFieldTypes: [
					p.TEXT,
					p.DATE,
					p.PHONE,
					p.CHECKBOX,
					p.CUSTOM
				],
				supportedWriteTriggers: [u.EVERY_BOOKING]
			}) }),
			/* @__PURE__ */ (0, b.jsx)(r.SubSection, { children: /* @__PURE__ */ (0, b.jsx)(M, {
				bookingAction: S.ON_BOOKING,
				optionLabel: l("on_booking_write_to_contact_record"),
				optionEnabled: j,
				writeToObjectData: N,
				optionSwitchOnChange: (e) => {
					_("onBookingWriteToContactRecord", e);
				},
				updateWriteToObjectData: (e) => _("onBookingWriteToContactRecordFields", e),
				supportedFieldTypes: [
					p.TEXT,
					p.DATE,
					p.PHONE,
					p.CHECKBOX,
					p.CUSTOM
				],
				supportedWriteTriggers: [u.EVERY_BOOKING, u.FIELD_EMPTY]
			}) }),
			t.schedulingType === g.ROUND_ROBIN ? /* @__PURE__ */ (0, b.jsxs)(b.Fragment, { children: [/* @__PURE__ */ (0, b.jsx)(r.SubSection, { children: /* @__PURE__ */ (0, b.jsx)(r.SubSectionHeader, {
				icon: "users",
				title: l("crm_book_directly_with_attendee_owner", { appName: e.name }),
				labelFor: "book-directly-with-attendee-owner",
				children: /* @__PURE__ */ (0, b.jsx)(f, {
					size: "sm",
					id: "book-directly-with-attendee-owner",
					checked: k,
					onCheckedChange: (e) => {
						_("roundRobinLeadSkip", e), e && _("enabled", e);
					}
				})
			}) }), k && /* @__PURE__ */ (0, b.jsxs)(r.SubSection, { children: [/* @__PURE__ */ (0, b.jsx)(r.SubSectionHeader, {
				icon: "users",
				title: l("crm_if_free_email_domain_skip_owner_check"),
				labelFor: "if-free-email-domain-skip-owner-check",
				children: /* @__PURE__ */ (0, b.jsx)(f, {
					size: "sm",
					id: "if-free-email-domain-skip-owner-check",
					checked: A,
					onCheckedChange: (e) => {
						_("ifFreeEmailDomainSkipOwnerCheck", e);
					}
				})
			}), /* @__PURE__ */ (0, b.jsx)(s, {
				severity: "info",
				title: l("skip_rr_description")
			})] })] }) : null
		] })
	});
};
//#endregion
export { N as default };

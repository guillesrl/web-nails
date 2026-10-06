import { a as e, n as t, t as n } from "./jsx-runtime-BqlYg9ib.mjs";
import { t as r } from "./react-dom-B46ZIS2z.mjs";
import { $ as i, $t as a, C as o, Dt as s, F as c, G as l, Gt as u, H as d, It as f, N as p, P as m, Q as h, S as g, T as _, Ut as v, V as ee, Xt as te, Y as ne, Yt as re, _t as y, a as b, bn as x, c as ie, en as S, et as ae, in as oe, m as se, nt as ce, o as C, on as w, q as le, r as ue, tn as de, u as fe, un as T, ut as pe, wt as E, x as me, y as he } from "./cal-atoms-B35e3sTk.mjs";
//#region node_modules/@calcom/atoms/dist/DateRangePicker-D-ZlM9MR.js
var D = /* @__PURE__ */ e(n(), 1), O = /* @__PURE__ */ e(t(), 1), ge = /* @__PURE__ */ e(r(), 1), _e = /* @__PURE__ */ (0, O.forwardRef)((e, t) => {
	var n;
	let { container: r = globalThis == null || (n = globalThis.document) == null ? void 0 : n.body, ...i } = e;
	return r ? /* @__PURE__ */ ge.createPortal(/* @__PURE__ */ (0, O.createElement)(p.div, E({}, i, { ref: t })), r) : null;
}), ve = /* @__PURE__ */ (0, O.forwardRef)((e, t) => {
	let { children: n, ...r } = e, i = O.Children.toArray(n), a = i.find(xe);
	if (a) {
		let e = a.props.children, n = i.map((t) => t === a ? O.Children.count(e) > 1 ? O.Children.only(null) : /* @__PURE__ */ (0, O.isValidElement)(e) ? e.props.children : null : t);
		return /* @__PURE__ */ (0, O.createElement)(ye, E({}, r, { ref: t }), /* @__PURE__ */ (0, O.isValidElement)(e) ? /* @__PURE__ */ (0, O.cloneElement)(e, void 0, n) : null);
	}
	return /* @__PURE__ */ (0, O.createElement)(ye, E({}, r, { ref: t }), n);
});
ve.displayName = "Slot";
var ye = /* @__PURE__ */ (0, O.forwardRef)((e, t) => {
	let { children: n, ...r } = e;
	return /* @__PURE__ */ (0, O.isValidElement)(n) ? /* @__PURE__ */ (0, O.cloneElement)(n, {
		...Se(r, n.props),
		ref: t ? c(t, n.ref) : n.ref
	}) : O.Children.count(n) > 1 ? O.Children.only(null) : null;
});
ye.displayName = "SlotClone";
var be = ({ children: e }) => /* @__PURE__ */ (0, O.createElement)(O.Fragment, null, e);
function xe(e) {
	return /* @__PURE__ */ (0, O.isValidElement)(e) && e.type === be;
}
function Se(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			a(...e), i(...e);
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" && (n[r] = [i, a].filter(Boolean).join(" "));
	}
	return {
		...e,
		...n
	};
}
var Ce = "Popover", [we] = ne(Ce, [s]), Te = s(), [Ee, k] = we(Ce), De = (e) => {
	let { __scopePopover: t, children: n, open: r, defaultOpen: i, onOpenChange: a, modal: o = !1 } = e, s = Te(t), c = (0, O.useRef)(null), [l, u] = (0, O.useState)(!1), [d = !1, f] = ce({
		prop: r,
		defaultProp: i,
		onChange: a
	});
	return /* @__PURE__ */ (0, O.createElement)(pe, s, /* @__PURE__ */ (0, O.createElement)(Ee, {
		scope: t,
		contentId: le(),
		triggerRef: c,
		open: d,
		onOpenChange: f,
		onOpenToggle: (0, O.useCallback)(() => f((e) => !e), [f]),
		hasCustomAnchor: l,
		onCustomAnchorAdd: (0, O.useCallback)(() => u(!0), []),
		onCustomAnchorRemove: (0, O.useCallback)(() => u(!1), []),
		modal: o
	}, n));
}, Oe = "PopoverTrigger", ke = /* @__PURE__ */ (0, O.forwardRef)((e, t) => {
	let { __scopePopover: n, ...r } = e, i = k(Oe, n), a = Te(n), o = me(t, i.triggerRef), s = /* @__PURE__ */ (0, O.createElement)(p.button, E({
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": i.open,
		"aria-controls": i.contentId,
		"data-state": Re(i.open)
	}, r, {
		ref: o,
		onClick: T(e.onClick, i.onOpenToggle)
	}));
	return i.hasCustomAnchor ? s : /* @__PURE__ */ (0, O.createElement)(de, E({ asChild: !0 }, a), s);
}), Ae = "PopoverPortal", [je, Me] = we(Ae, { forceMount: void 0 }), Ne = (e) => {
	let { __scopePopover: t, forceMount: n, children: r, container: i } = e, a = k(Ae, t);
	return /* @__PURE__ */ (0, O.createElement)(je, {
		scope: t,
		forceMount: n
	}, /* @__PURE__ */ (0, O.createElement)(ie, { present: n || a.open }, /* @__PURE__ */ (0, O.createElement)(_e, {
		asChild: !0,
		container: i
	}, r)));
}, A = "PopoverContent", Pe = /* @__PURE__ */ (0, O.forwardRef)((e, t) => {
	let n = Me(A, e.__scopePopover), { forceMount: r = n.forceMount, ...i } = e, a = k(A, e.__scopePopover);
	return /* @__PURE__ */ (0, O.createElement)(ie, { present: r || a.open }, a.modal ? /* @__PURE__ */ (0, O.createElement)(Fe, E({}, i, { ref: t })) : /* @__PURE__ */ (0, O.createElement)(Ie, E({}, i, { ref: t })));
}), Fe = /* @__PURE__ */ (0, O.forwardRef)((e, t) => {
	let n = k(A, e.__scopePopover), r = (0, O.useRef)(null), i = me(t, r), a = (0, O.useRef)(!1);
	return (0, O.useEffect)(() => {
		let e = r.current;
		if (e) return g(e);
	}, []), /* @__PURE__ */ (0, O.createElement)(re, {
		as: ve,
		allowPinchZoom: !0
	}, /* @__PURE__ */ (0, O.createElement)(Le, E({}, e, {
		ref: i,
		trapFocus: n.open,
		disableOutsidePointerEvents: !0,
		onCloseAutoFocus: T(e.onCloseAutoFocus, (e) => {
			var t;
			e.preventDefault(), a.current || (t = n.triggerRef.current) == null || t.focus();
		}),
		onPointerDownOutside: T(e.onPointerDownOutside, (e) => {
			let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0, r = t.button === 2 || n;
			a.current = r;
		}, { checkForDefaultPrevented: !1 }),
		onFocusOutside: T(e.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 })
	})));
}), Ie = /* @__PURE__ */ (0, O.forwardRef)((e, t) => {
	let n = k(A, e.__scopePopover), r = (0, O.useRef)(!1), i = (0, O.useRef)(!1);
	return /* @__PURE__ */ (0, O.createElement)(Le, E({}, e, {
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		onCloseAutoFocus: (t) => {
			var a;
			if ((a = e.onCloseAutoFocus) == null || a.call(e, t), !t.defaultPrevented) {
				var o;
				r.current || (o = n.triggerRef.current) == null || o.focus(), t.preventDefault();
			}
			r.current = !1, i.current = !1;
		},
		onInteractOutside: (t) => {
			var a, o;
			(a = e.onInteractOutside) == null || a.call(e, t), t.defaultPrevented || (r.current = !0, t.detail.originalEvent.type === "pointerdown" && (i.current = !0));
			let s = t.target;
			(o = n.triggerRef.current) != null && o.contains(s) && t.preventDefault(), t.detail.originalEvent.type === "focusin" && i.current && t.preventDefault();
		}
	}));
}), Le = /* @__PURE__ */ (0, O.forwardRef)((e, t) => {
	let { __scopePopover: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: a, disableOutsidePointerEvents: o, onEscapeKeyDown: s, onPointerDownOutside: c, onFocusOutside: l, onInteractOutside: d, ...f } = e, p = k(A, n), m = Te(n);
	return b(), /* @__PURE__ */ (0, O.createElement)(fe, {
		asChild: !0,
		loop: !0,
		trapped: r,
		onMountAutoFocus: i,
		onUnmountAutoFocus: a
	}, /* @__PURE__ */ (0, O.createElement)(oe, {
		asChild: !0,
		disableOutsidePointerEvents: o,
		onInteractOutside: d,
		onEscapeKeyDown: s,
		onPointerDownOutside: c,
		onFocusOutside: l,
		onDismiss: () => p.onOpenChange(!1)
	}, /* @__PURE__ */ (0, O.createElement)(u, E({
		"data-state": Re(p.open),
		role: "dialog",
		id: p.contentId
	}, m, f, {
		ref: t,
		style: {
			...f.style,
			"--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-popover-content-available-width": "var(--radix-popper-available-width)",
			"--radix-popover-content-available-height": "var(--radix-popper-available-height)",
			"--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
		}
	}))));
});
function Re(e) {
	return e ? "open" : "closed";
}
var ze = De, Be = ke, Ve = Ne, He = Pe;
function j(e, t) {
	let n = _(e);
	return isNaN(t) ? S(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function M(e, t) {
	let n = _(e);
	if (isNaN(t)) return S(e, NaN);
	if (!t) return n;
	let r = n.getDate(), i = S(e, n.getTime());
	return i.setMonth(n.getMonth() + t + 1, 0), r >= i.getDate() ? i : (n.setFullYear(i.getFullYear(), i.getMonth(), r), n);
}
function N(e, t) {
	return j(e, t * 7);
}
function Ue(e, t) {
	return M(e, t * 12);
}
function We(e) {
	let t;
	return e.forEach(function(e) {
		let n = _(e);
		(t === void 0 || t < n || isNaN(Number(n))) && (t = n);
	}), t || /* @__PURE__ */ new Date(NaN);
}
function Ge(e) {
	let t;
	return e.forEach((e) => {
		let n = _(e);
		(!t || t > n || isNaN(+n)) && (t = n);
	}), t || /* @__PURE__ */ new Date(NaN);
}
function P(e, t) {
	let n = l(e), r = l(t);
	return +n == +r;
}
function F(e, t) {
	let n = _(e), r = _(t), i = n.getFullYear() - r.getFullYear(), a = n.getMonth() - r.getMonth();
	return i * 12 + a;
}
function Ke(e, t, n) {
	let r = x(e, n), i = x(t, n), a = +r - m(r), o = +i - m(i);
	return Math.round((a - o) / ee);
}
function I(e) {
	let t = _(e), n = t.getMonth();
	return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function L(e) {
	let t = _(e);
	return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function R(e, t) {
	let n = te(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, i = _(e), a = i.getDay(), o = (a < r ? -7 : 0) + 6 - (a - r);
	return i.setDate(i.getDate() + o), i.setHours(23, 59, 59, 999), i;
}
function qe(e) {
	return R(e, { weekStartsOn: 1 });
}
function Je(e) {
	let t = _(e), n = t.getFullYear(), r = t.getMonth(), i = S(e, 0);
	return i.setFullYear(n, r + 1, 0), i.setHours(0, 0, 0, 0), i.getDate();
}
function Ye(e) {
	return Math.trunc(_(e) / 1e3);
}
function Xe(e) {
	let t = _(e), n = t.getMonth();
	return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function Ze(e, t) {
	return Ke(Xe(e), L(e), t) + 1;
}
function z(e, t) {
	let n = _(e), r = _(t);
	return n.getTime() > r.getTime();
}
function B(e, t) {
	let n = _(e), r = _(t);
	return +n < +r;
}
function V(e, t) {
	let n = _(e), r = _(t);
	return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function Qe(e, t) {
	let n = _(e), r = _(t);
	return n.getFullYear() === r.getFullYear();
}
function H(e, t) {
	return j(e, -t);
}
function U(e, t) {
	let n = _(e), r = n.getFullYear(), i = n.getDate(), a = S(e, 0);
	a.setFullYear(r, t, 15), a.setHours(0, 0, 0, 0);
	let o = Je(a);
	return n.setMonth(t, Math.min(i, o)), n;
}
function $e(e, t) {
	let n = _(e);
	return isNaN(+n) ? S(e, NaN) : (n.setFullYear(t), n);
}
var W = function() {
	return W = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, W.apply(this, arguments);
};
function et(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function tt(e, t, n) {
	for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
function G(e) {
	return e.mode === "multiple";
}
function K(e) {
	return e.mode === "range";
}
function q(e) {
	return e.mode === "single";
}
var nt = {
	root: "rdp",
	multiple_months: "rdp-multiple_months",
	with_weeknumber: "rdp-with_weeknumber",
	vhidden: "rdp-vhidden",
	button_reset: "rdp-button_reset",
	button: "rdp-button",
	caption: "rdp-caption",
	caption_start: "rdp-caption_start",
	caption_end: "rdp-caption_end",
	caption_between: "rdp-caption_between",
	caption_label: "rdp-caption_label",
	caption_dropdowns: "rdp-caption_dropdowns",
	dropdown: "rdp-dropdown",
	dropdown_month: "rdp-dropdown_month",
	dropdown_year: "rdp-dropdown_year",
	dropdown_icon: "rdp-dropdown_icon",
	months: "rdp-months",
	month: "rdp-month",
	table: "rdp-table",
	tbody: "rdp-tbody",
	tfoot: "rdp-tfoot",
	head: "rdp-head",
	head_row: "rdp-head_row",
	head_cell: "rdp-head_cell",
	nav: "rdp-nav",
	nav_button: "rdp-nav_button",
	nav_button_previous: "rdp-nav_button_previous",
	nav_button_next: "rdp-nav_button_next",
	nav_icon: "rdp-nav_icon",
	row: "rdp-row",
	weeknumber: "rdp-weeknumber",
	cell: "rdp-cell",
	day: "rdp-day",
	day_today: "rdp-day_today",
	day_outside: "rdp-day_outside",
	day_selected: "rdp-day_selected",
	day_disabled: "rdp-day_disabled",
	day_hidden: "rdp-day_hidden",
	day_range_start: "rdp-day_range_start",
	day_range_end: "rdp-day_range_end",
	day_range_middle: "rdp-day_range_middle"
};
function rt(e, t) {
	return h(e, "LLLL y", t);
}
function it(e, t) {
	return h(e, "d", t);
}
function at(e, t) {
	return h(e, "LLLL", t);
}
function ot(e) {
	return `${e}`;
}
function st(e, t) {
	return h(e, "cccccc", t);
}
function ct(e, t) {
	return h(e, "yyyy", t);
}
var lt = /* @__PURE__ */ Object.freeze({
	__proto__: null,
	formatCaption: rt,
	formatDay: it,
	formatMonthCaption: at,
	formatWeekNumber: ot,
	formatWeekdayName: st,
	formatYearCaption: ct
}), ut = /* @__PURE__ */ Object.freeze({
	__proto__: null,
	labelDay: function(e, t, n) {
		return h(e, "do MMMM (EEEE)", n);
	},
	labelMonthDropdown: function() {
		return "Month: ";
	},
	labelNext: function() {
		return "Go to next month";
	},
	labelPrevious: function() {
		return "Go to previous month";
	},
	labelWeekNumber: function(e) {
		return `Week n. ${e}`;
	},
	labelWeekday: function(e, t) {
		return h(e, "cccc", t);
	},
	labelYearDropdown: function() {
		return "Year: ";
	}
});
function dt() {
	return {
		captionLayout: "buttons",
		classNames: nt,
		formatters: lt,
		labels: ut,
		locale: se,
		modifiersClassNames: {},
		modifiers: {},
		numberOfMonths: 1,
		styles: {},
		today: /* @__PURE__ */ new Date(),
		mode: "default"
	};
}
function ft(e) {
	var t = e.fromYear, n = e.toYear, r = e.fromMonth, i = e.toMonth, a = e.fromDate, o = e.toDate;
	return r ? a = L(r) : t && (a = new Date(t, 0, 1)), i ? o = I(i) : n && (o = new Date(n, 11, 31)), {
		fromDate: a ? l(a) : void 0,
		toDate: o ? l(o) : void 0
	};
}
var pt = (0, O.createContext)(void 0);
function mt(e) {
	var t = e.initialProps, n = dt(), r = ft(t), i = r.fromDate, a = r.toDate, o = t.captionLayout ?? n.captionLayout;
	o !== "buttons" && (!i || !a) && (o = "buttons");
	var s;
	(q(t) || G(t) || K(t)) && (s = t.onSelect);
	var c = W(W(W({}, n), t), {
		captionLayout: o,
		classNames: W(W({}, n.classNames), t.classNames),
		components: W({}, t.components),
		formatters: W(W({}, n.formatters), t.formatters),
		fromDate: i,
		labels: W(W({}, n.labels), t.labels),
		mode: t.mode || n.mode,
		modifiers: W(W({}, n.modifiers), t.modifiers),
		modifiersClassNames: W(W({}, n.modifiersClassNames), t.modifiersClassNames),
		onSelect: s,
		styles: W(W({}, n.styles), t.styles),
		toDate: a
	});
	return (0, D.jsx)(pt.Provider, {
		value: c,
		children: e.children
	});
}
function J() {
	var e = (0, O.useContext)(pt);
	if (!e) throw Error("useDayPicker must be used within a DayPickerProvider.");
	return e;
}
function ht(e) {
	var t = J(), n = t.locale, r = t.classNames, i = t.styles, a = t.formatters.formatCaption;
	return (0, D.jsx)("div", {
		className: r.caption_label,
		style: i.caption_label,
		"aria-live": "polite",
		role: "presentation",
		id: e.id,
		children: a(e.displayMonth, { locale: n })
	});
}
function gt(e) {
	return (0, D.jsx)("svg", W({
		width: "8px",
		height: "8px",
		viewBox: "0 0 120 120",
		"data-testid": "iconDropdown"
	}, e, { children: (0, D.jsx)("path", {
		d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z",
		fill: "currentColor",
		fillRule: "nonzero"
	}) }));
}
function _t(e) {
	var t = e.onChange, n = e.value, r = e.children, i = e.caption, a = e.className, o = e.style, s = J(), c = s.components?.IconDropdown ?? gt;
	return (0, D.jsxs)("div", {
		className: a,
		style: o,
		children: [
			(0, D.jsx)("span", {
				className: s.classNames.vhidden,
				children: e["aria-label"]
			}),
			(0, D.jsx)("select", {
				name: e.name,
				"aria-label": e["aria-label"],
				className: s.classNames.dropdown,
				style: s.styles.dropdown,
				value: n,
				onChange: t,
				children: r
			}),
			(0, D.jsxs)("div", {
				className: s.classNames.caption_label,
				style: s.styles.caption_label,
				"aria-hidden": "true",
				children: [i, (0, D.jsx)(c, {
					className: s.classNames.dropdown_icon,
					style: s.styles.dropdown_icon
				})]
			})
		]
	});
}
function vt(e) {
	var t = J(), n = t.fromDate, r = t.toDate, i = t.styles, a = t.locale, o = t.formatters.formatMonthCaption, s = t.classNames, c = t.components, l = t.labels.labelMonthDropdown;
	if (!n || !r) return (0, D.jsx)(D.Fragment, {});
	var u = [];
	if (Qe(n, r)) for (var d = L(n), f = n.getMonth(); f <= r.getMonth(); f++) u.push(U(d, f));
	else for (var d = L(/* @__PURE__ */ new Date()), f = 0; f <= 11; f++) u.push(U(d, f));
	var p = function(t) {
		var n = Number(t.target.value), r = U(L(e.displayMonth), n);
		e.onChange(r);
	}, m = c?.Dropdown ?? _t;
	return (0, D.jsx)(m, {
		name: "months",
		"aria-label": l(),
		className: s.dropdown_month,
		style: i.dropdown_month,
		onChange: p,
		value: e.displayMonth.getMonth(),
		caption: o(e.displayMonth, { locale: a }),
		children: u.map(function(e) {
			return (0, D.jsx)("option", {
				value: e.getMonth(),
				children: o(e, { locale: a })
			}, e.getMonth());
		})
	});
}
function yt(e) {
	var t = e.displayMonth, n = J(), r = n.fromDate, i = n.toDate, a = n.locale, o = n.styles, s = n.classNames, c = n.components, l = n.formatters.formatYearCaption, u = n.labels.labelYearDropdown, d = [];
	if (!r || !i) return (0, D.jsx)(D.Fragment, {});
	for (var f = r.getFullYear(), p = i.getFullYear(), m = f; m <= p; m++) d.push($e(he(/* @__PURE__ */ new Date()), m));
	var h = function(n) {
		var r = $e(L(t), Number(n.target.value));
		e.onChange(r);
	}, g = c?.Dropdown ?? _t;
	return (0, D.jsx)(g, {
		name: "years",
		"aria-label": u(),
		className: s.dropdown_year,
		style: o.dropdown_year,
		onChange: h,
		value: t.getFullYear(),
		caption: l(t, { locale: a }),
		children: d.map(function(e) {
			return (0, D.jsx)("option", {
				value: e.getFullYear(),
				children: l(e, { locale: a })
			}, e.getFullYear());
		})
	});
}
function bt(e, t) {
	var n = (0, O.useState)(e), r = n[0], i = n[1];
	return [t === void 0 ? r : t, i];
}
function xt(e) {
	var t = e.month, n = e.defaultMonth, r = e.today, i = t || n || r || /* @__PURE__ */ new Date(), a = e.toDate, o = e.fromDate, s = e.numberOfMonths, c = s === void 0 ? 1 : s;
	return a && F(a, i) < 0 && (i = M(a, -1 * (c - 1))), o && F(i, o) < 0 && (i = o), L(i);
}
function St() {
	var e = J(), t = bt(xt(e), e.month), n = t[0], r = t[1];
	return [n, function(t) {
		var n;
		if (!e.disableNavigation) {
			var i = L(t);
			r(i), (n = e.onMonthChange) == null || n.call(e, i);
		}
	}];
}
function Ct(e, t) {
	for (var n = t.reverseMonths, r = t.numberOfMonths, i = L(e), a = F(L(M(i, r)), i), o = [], s = 0; s < a; s++) {
		var c = M(i, s);
		o.push(c);
	}
	return n && (o = o.reverse()), o;
}
function wt(e, t) {
	if (!t.disableNavigation) {
		var n = t.toDate, r = t.pagedNavigation, i = t.numberOfMonths, a = i === void 0 ? 1 : i, o = r ? a : 1, s = L(e);
		if (!n || !(F(n, e) < a)) return M(s, o);
	}
}
function Tt(e, t) {
	if (!t.disableNavigation) {
		var n = t.fromDate, r = t.pagedNavigation, i = t.numberOfMonths, a = r ? i === void 0 ? 1 : i : 1, o = L(e);
		if (!n || !(F(o, n) <= 0)) return M(o, -a);
	}
}
var Et = (0, O.createContext)(void 0);
function Dt(e) {
	var t = J(), n = St(), r = n[0], i = n[1], a = Ct(r, t), o = wt(r, t), s = Tt(r, t), c = function(e) {
		return a.some(function(t) {
			return V(e, t);
		});
	}, l = {
		currentMonth: r,
		displayMonths: a,
		goToMonth: i,
		goToDate: function(e, n) {
			c(e) || (n && B(e, n) ? i(M(e, 1 + t.numberOfMonths * -1)) : i(e));
		},
		previousMonth: s,
		nextMonth: o,
		isDateDisplayed: c
	};
	return (0, D.jsx)(Et.Provider, {
		value: l,
		children: e.children
	});
}
function Y() {
	var e = (0, O.useContext)(Et);
	if (!e) throw Error("useNavigation must be used within a NavigationProvider");
	return e;
}
function Ot(e) {
	var t = J(), n = t.classNames, r = t.styles, i = t.components, a = Y().goToMonth, o = function(t) {
		a(M(t, e.displayIndex ? -e.displayIndex : 0));
	}, s = i?.CaptionLabel ?? ht, c = (0, D.jsx)(s, {
		id: e.id,
		displayMonth: e.displayMonth
	});
	return (0, D.jsxs)("div", {
		className: n.caption_dropdowns,
		style: r.caption_dropdowns,
		children: [
			(0, D.jsx)("div", {
				className: n.vhidden,
				children: c
			}),
			(0, D.jsx)(vt, {
				onChange: o,
				displayMonth: e.displayMonth
			}),
			(0, D.jsx)(yt, {
				onChange: o,
				displayMonth: e.displayMonth
			})
		]
	});
}
function kt(e) {
	return (0, D.jsx)("svg", W({
		width: "16px",
		height: "16px",
		viewBox: "0 0 120 120"
	}, e, { children: (0, D.jsx)("path", {
		d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z",
		fill: "currentColor",
		fillRule: "nonzero"
	}) }));
}
function At(e) {
	return (0, D.jsx)("svg", W({
		width: "16px",
		height: "16px",
		viewBox: "0 0 120 120"
	}, e, { children: (0, D.jsx)("path", {
		d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z",
		fill: "currentColor"
	}) }));
}
var X = (0, O.forwardRef)(function(e, t) {
	var n = J(), r = n.classNames, i = n.styles, a = [r.button_reset, r.button];
	e.className && a.push(e.className);
	var o = a.join(" "), s = W(W({}, i.button_reset), i.button);
	return e.style && Object.assign(s, e.style), (0, D.jsx)("button", W({}, e, {
		ref: t,
		type: "button",
		className: o,
		style: s
	}));
});
function jt(e) {
	var t = J(), n = t.dir, r = t.locale, i = t.classNames, a = t.styles, o = t.labels, s = o.labelPrevious, c = o.labelNext, l = t.components;
	if (!e.nextMonth && !e.previousMonth) return (0, D.jsx)(D.Fragment, {});
	var u = s(e.previousMonth, { locale: r }), d = [i.nav_button, i.nav_button_previous].join(" "), f = c(e.nextMonth, { locale: r }), p = [i.nav_button, i.nav_button_next].join(" "), m = l?.IconRight ?? At, h = l?.IconLeft ?? kt;
	return (0, D.jsxs)("div", {
		className: i.nav,
		style: a.nav,
		children: [!e.hidePrevious && (0, D.jsx)(X, {
			name: "previous-month",
			"aria-label": u,
			className: d,
			style: a.nav_button_previous,
			disabled: !e.previousMonth,
			onClick: e.onPreviousClick,
			children: n === "rtl" ? (0, D.jsx)(m, {
				className: i.nav_icon,
				style: a.nav_icon
			}) : (0, D.jsx)(h, {
				className: i.nav_icon,
				style: a.nav_icon
			})
		}), !e.hideNext && (0, D.jsx)(X, {
			name: "next-month",
			"aria-label": f,
			className: p,
			style: a.nav_button_next,
			disabled: !e.nextMonth,
			onClick: e.onNextClick,
			children: n === "rtl" ? (0, D.jsx)(h, {
				className: i.nav_icon,
				style: a.nav_icon
			}) : (0, D.jsx)(m, {
				className: i.nav_icon,
				style: a.nav_icon
			})
		})]
	});
}
function Mt(e) {
	var t = J().numberOfMonths, n = Y(), r = n.previousMonth, i = n.nextMonth, a = n.goToMonth, o = n.displayMonths, s = o.findIndex(function(t) {
		return V(e.displayMonth, t);
	}), c = s === 0, l = s === o.length - 1, u = t > 1 && (c || !l), d = t > 1 && (l || !c);
	return (0, D.jsx)(jt, {
		displayMonth: e.displayMonth,
		hideNext: u,
		hidePrevious: d,
		nextMonth: i,
		previousMonth: r,
		onPreviousClick: function() {
			r && a(r);
		},
		onNextClick: function() {
			i && a(i);
		}
	});
}
function Nt(e) {
	var t = J(), n = t.classNames, r = t.disableNavigation, i = t.styles, a = t.captionLayout, o = t.components?.CaptionLabel ?? ht, s = r ? (0, D.jsx)(o, {
		id: e.id,
		displayMonth: e.displayMonth
	}) : a === "dropdown" ? (0, D.jsx)(Ot, {
		displayMonth: e.displayMonth,
		id: e.id
	}) : a === "dropdown-buttons" ? (0, D.jsxs)(D.Fragment, { children: [(0, D.jsx)(Ot, {
		displayMonth: e.displayMonth,
		displayIndex: e.displayIndex,
		id: e.id
	}), (0, D.jsx)(Mt, {
		displayMonth: e.displayMonth,
		displayIndex: e.displayIndex,
		id: e.id
	})] }) : (0, D.jsxs)(D.Fragment, { children: [(0, D.jsx)(o, {
		id: e.id,
		displayMonth: e.displayMonth,
		displayIndex: e.displayIndex
	}), (0, D.jsx)(Mt, {
		displayMonth: e.displayMonth,
		id: e.id
	})] });
	return (0, D.jsx)("div", {
		className: n.caption,
		style: i.caption,
		children: s
	});
}
function Pt(e) {
	var t = J(), n = t.footer, r = t.styles, i = t.classNames.tfoot;
	return n ? (0, D.jsx)("tfoot", {
		className: i,
		style: r.tfoot,
		children: (0, D.jsx)("tr", { children: (0, D.jsx)("td", {
			colSpan: 8,
			children: n
		}) })
	}) : (0, D.jsx)(D.Fragment, {});
}
function Ft(e, t, n) {
	for (var r = n ? w(/* @__PURE__ */ new Date()) : x(/* @__PURE__ */ new Date(), {
		locale: e,
		weekStartsOn: t
	}), i = [], a = 0; a < 7; a++) {
		var o = j(r, a);
		i.push(o);
	}
	return i;
}
function It() {
	var e = J(), t = e.classNames, n = e.styles, r = e.showWeekNumber, i = e.locale, a = e.weekStartsOn, o = e.ISOWeek, s = e.formatters.formatWeekdayName, c = e.labels.labelWeekday, l = Ft(i, a, o);
	return (0, D.jsxs)("tr", {
		style: n.head_row,
		className: t.head_row,
		children: [r && (0, D.jsx)("td", {
			style: n.head_cell,
			className: t.head_cell
		}), l.map(function(e, r) {
			return (0, D.jsx)("th", {
				scope: "col",
				className: t.head_cell,
				style: n.head_cell,
				"aria-label": c(e, { locale: i }),
				children: s(e, { locale: i })
			}, r);
		})]
	});
}
function Lt() {
	var e = J(), t = e.classNames, n = e.styles, r = e.components?.HeadRow ?? It;
	return (0, D.jsx)("thead", {
		style: n.head,
		className: t.head,
		children: (0, D.jsx)(r, {})
	});
}
function Rt(e) {
	var t = J(), n = t.locale, r = t.formatters.formatDay;
	return (0, D.jsx)(D.Fragment, { children: r(e.date, { locale: n }) });
}
var zt = (0, O.createContext)(void 0);
function Bt(e) {
	return G(e.initialProps) ? (0, D.jsx)(Vt, {
		initialProps: e.initialProps,
		children: e.children
	}) : (0, D.jsx)(zt.Provider, {
		value: {
			selected: void 0,
			modifiers: { disabled: [] }
		},
		children: e.children
	});
}
function Vt(e) {
	var t = e.initialProps, n = e.children, r = t.selected, i = t.min, a = t.max, o = function(e, n, o) {
		var s, c;
		if ((s = t.onDayClick) == null || s.call(t, e, n, o), !(n.selected && i && r?.length === i) && (n.selected || !a || r?.length !== a)) {
			var l = r ? tt([], r) : [];
			if (n.selected) {
				var u = l.findIndex(function(t) {
					return P(e, t);
				});
				l.splice(u, 1);
			} else l.push(e);
			(c = t.onSelect) == null || c.call(t, l, e, n, o);
		}
	}, s = { disabled: [] };
	r && s.disabled.push(function(e) {
		var t = a && r.length > a - 1, n = r.some(function(t) {
			return P(t, e);
		});
		return !(!t || n);
	});
	var c = {
		selected: r,
		onDayClick: o,
		modifiers: s
	};
	return (0, D.jsx)(zt.Provider, {
		value: c,
		children: n
	});
}
function Ht() {
	var e = (0, O.useContext)(zt);
	if (!e) throw Error("useSelectMultiple must be used within a SelectMultipleProvider");
	return e;
}
function Ut(e, t) {
	var n = t || {}, r = n.from, i = n.to;
	return r && i ? P(i, e) && P(r, e) ? void 0 : P(i, e) ? {
		from: i,
		to: void 0
	} : P(r, e) ? void 0 : z(r, e) ? {
		from: e,
		to: i
	} : {
		from: r,
		to: e
	} : i ? z(e, i) ? {
		from: i,
		to: e
	} : {
		from: e,
		to: i
	} : r ? B(e, r) ? {
		from: e,
		to: r
	} : {
		from: r,
		to: e
	} : {
		from: e,
		to: void 0
	};
}
var Wt = (0, O.createContext)(void 0);
function Gt(e) {
	return K(e.initialProps) ? (0, D.jsx)(Kt, {
		initialProps: e.initialProps,
		children: e.children
	}) : (0, D.jsx)(Wt.Provider, {
		value: {
			selected: void 0,
			modifiers: {
				range_start: [],
				range_end: [],
				range_middle: [],
				disabled: []
			}
		},
		children: e.children
	});
}
function Kt(e) {
	var t = e.initialProps, n = e.children, r = t.selected, i = r || {}, a = i.from, o = i.to, s = t.min, c = t.max, l = function(e, n, i) {
		var a, o;
		(a = t.onDayClick) == null || a.call(t, e, n, i);
		var s = Ut(e, r);
		(o = t.onSelect) == null || o.call(t, s, e, n, i);
	}, u = {
		range_start: [],
		range_end: [],
		range_middle: [],
		disabled: []
	};
	if (a ? (u.range_start = [a], o ? (u.range_end = [o], P(a, o) || (u.range_middle = [{
		after: a,
		before: o
	}])) : u.range_end = [a]) : o && (u.range_start = [o], u.range_end = [o]), s && (a && !o && u.disabled.push({
		after: H(a, s - 1),
		before: j(a, s - 1)
	}), a && o && u.disabled.push({
		after: a,
		before: j(a, s - 1)
	}), !a && o && u.disabled.push({
		after: H(o, s - 1),
		before: j(o, s - 1)
	})), c) {
		if (a && !o && (u.disabled.push({ before: j(a, -c + 1) }), u.disabled.push({ after: j(a, c - 1) })), a && o) {
			var d = c - (C(o, a) + 1);
			u.disabled.push({ before: H(a, d) }), u.disabled.push({ after: j(o, d) });
		}
		!a && o && (u.disabled.push({ before: j(o, -c + 1) }), u.disabled.push({ after: j(o, c - 1) }));
	}
	return (0, D.jsx)(Wt.Provider, {
		value: {
			selected: r,
			onDayClick: l,
			modifiers: u
		},
		children: n
	});
}
function qt() {
	var e = (0, O.useContext)(Wt);
	if (!e) throw Error("useSelectRange must be used within a SelectRangeProvider");
	return e;
}
function Z(e) {
	return Array.isArray(e) ? tt([], e) : e === void 0 ? [] : [e];
}
function Jt(e) {
	var t = {};
	return Object.entries(e).forEach(function(e) {
		var n = e[0], r = e[1];
		t[n] = Z(r);
	}), t;
}
var Q;
(function(e) {
	e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(Q ||= {});
var Yt = Q.Selected, $ = Q.Disabled, Xt = Q.Hidden, Zt = Q.Today, Qt = Q.RangeEnd, $t = Q.RangeMiddle, en = Q.RangeStart, tn = Q.Outside;
function nn(e, t, n) {
	var r, i = (r = {}, r[Yt] = Z(e.selected), r[$] = Z(e.disabled), r[Xt] = Z(e.hidden), r[Zt] = [e.today], r[Qt] = [], r[$t] = [], r[en] = [], r[tn] = [], r);
	return e.fromDate && i[$].push({ before: e.fromDate }), e.toDate && i[$].push({ after: e.toDate }), G(e) ? i[$] = i[$].concat(t.modifiers[$]) : K(e) && (i[$] = i[$].concat(n.modifiers[$]), i[en] = n.modifiers[en], i[$t] = n.modifiers[$t], i[Qt] = n.modifiers[Qt]), i;
}
var rn = (0, O.createContext)(void 0);
function an(e) {
	var t = J(), n = nn(t, Ht(), qt()), r = Jt(t.modifiers), i = W(W({}, n), r);
	return (0, D.jsx)(rn.Provider, {
		value: i,
		children: e.children
	});
}
function on() {
	var e = (0, O.useContext)(rn);
	if (!e) throw Error("useModifiers must be used within a ModifiersProvider");
	return e;
}
function sn(e) {
	return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function cn(e) {
	return !!(e && typeof e == "object" && "from" in e);
}
function ln(e) {
	return !!(e && typeof e == "object" && "after" in e);
}
function un(e) {
	return !!(e && typeof e == "object" && "before" in e);
}
function dn(e) {
	return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function fn(e, t) {
	var n, r = t.from, i = t.to;
	return r && i ? (C(i, r) < 0 && (n = [i, r], r = n[0], i = n[1]), C(e, r) >= 0 && C(i, e) >= 0) : i ? P(i, e) : r ? P(r, e) : !1;
}
function pn(e) {
	return i(e);
}
function mn(e) {
	return Array.isArray(e) && e.every(i);
}
function hn(e, t) {
	return t.some(function(t) {
		if (typeof t == "boolean") return t;
		if (pn(t)) return P(e, t);
		if (mn(t)) return t.includes(e);
		if (cn(t)) return fn(e, t);
		if (dn(t)) return t.dayOfWeek.includes(e.getDay());
		if (sn(t)) {
			var n = C(t.before, e), r = C(t.after, e), i = n > 0, a = r < 0;
			return z(t.before, t.after) ? a && i : i || a;
		}
		return ln(t) ? C(e, t.after) > 0 : un(t) ? C(t.before, e) > 0 : typeof t == "function" && t(e);
	});
}
function gn(e, t, n) {
	var r = Object.keys(t).reduce(function(n, r) {
		var i = t[r];
		return hn(e, i) && n.push(r), n;
	}, []), i = {};
	return r.forEach(function(e) {
		return i[e] = !0;
	}), n && !V(e, n) && (i.outside = !0), i;
}
function _n(e, t) {
	for (var n = L(e[0]), r = I(e[e.length - 1]), i, a, o = n; o <= r;) {
		var s = gn(o, t);
		if (s.disabled || s.hidden) {
			o = j(o, 1);
			continue;
		}
		if (s.selected) return o;
		s.today && !a && (a = o), i ||= o, o = j(o, 1);
	}
	return a || i;
}
var vn = 365;
function yn(e, t) {
	var n = t.moveBy, r = t.direction, i = t.context, a = t.modifiers, o = t.retry, s = o === void 0 ? {
		count: 0,
		lastFocused: e
	} : o, c = i.weekStartsOn, l = i.fromDate, u = i.toDate, d = i.locale, f = {
		day: j,
		week: N,
		month: M,
		year: Ue,
		startOfWeek: function(e) {
			return i.ISOWeek ? w(e) : x(e, {
				locale: d,
				weekStartsOn: c
			});
		},
		endOfWeek: function(e) {
			return i.ISOWeek ? qe(e) : R(e, {
				locale: d,
				weekStartsOn: c
			});
		}
	}[n](e, r === "after" ? 1 : -1);
	r === "before" && l ? f = We([l, f]) : r === "after" && u && (f = Ge([u, f]));
	var p = !0;
	if (a) {
		var m = gn(f, a);
		p = !m.disabled && !m.hidden;
	}
	return p ? f : s.count > vn ? s.lastFocused : yn(f, {
		moveBy: n,
		direction: r,
		context: i,
		modifiers: a,
		retry: W(W({}, s), { count: s.count + 1 })
	});
}
var bn = (0, O.createContext)(void 0);
function xn(e) {
	var t = Y(), n = on(), r = (0, O.useState)(), i = r[0], a = r[1], o = (0, O.useState)(), s = o[0], c = o[1], l = _n(t.displayMonths, n), u = i ?? (s && t.isDateDisplayed(s)) ? s : l, d = function() {
		c(i), a(void 0);
	}, f = function(e) {
		a(e);
	}, p = J(), m = function(e, r) {
		if (i) {
			var a = yn(i, {
				moveBy: e,
				direction: r,
				context: p,
				modifiers: n
			});
			P(i, a) || (t.goToDate(a, i), f(a));
		}
	}, h = {
		focusedDay: i,
		focusTarget: u,
		blur: d,
		focus: f,
		focusDayAfter: function() {
			return m("day", "after");
		},
		focusDayBefore: function() {
			return m("day", "before");
		},
		focusWeekAfter: function() {
			return m("week", "after");
		},
		focusWeekBefore: function() {
			return m("week", "before");
		},
		focusMonthBefore: function() {
			return m("month", "before");
		},
		focusMonthAfter: function() {
			return m("month", "after");
		},
		focusYearBefore: function() {
			return m("year", "before");
		},
		focusYearAfter: function() {
			return m("year", "after");
		},
		focusStartOfWeek: function() {
			return m("startOfWeek", "before");
		},
		focusEndOfWeek: function() {
			return m("endOfWeek", "after");
		}
	};
	return (0, D.jsx)(bn.Provider, {
		value: h,
		children: e.children
	});
}
function Sn() {
	var e = (0, O.useContext)(bn);
	if (!e) throw Error("useFocusContext must be used within a FocusProvider");
	return e;
}
function Cn(e, t) {
	return gn(e, on(), t);
}
var wn = (0, O.createContext)(void 0);
function Tn(e) {
	return q(e.initialProps) ? (0, D.jsx)(En, {
		initialProps: e.initialProps,
		children: e.children
	}) : (0, D.jsx)(wn.Provider, {
		value: { selected: void 0 },
		children: e.children
	});
}
function En(e) {
	var t = e.initialProps, n = e.children, r = {
		selected: t.selected,
		onDayClick: function(e, n, r) {
			var i, a, o;
			if ((i = t.onDayClick) == null || i.call(t, e, n, r), n.selected && !t.required) {
				(a = t.onSelect) == null || a.call(t, void 0, e, n, r);
				return;
			}
			(o = t.onSelect) == null || o.call(t, e, e, n, r);
		}
	};
	return (0, D.jsx)(wn.Provider, {
		value: r,
		children: n
	});
}
function Dn() {
	var e = (0, O.useContext)(wn);
	if (!e) throw Error("useSelectSingle must be used within a SelectSingleProvider");
	return e;
}
function On(e, t) {
	var n = J(), r = Dn(), i = Ht(), a = qt(), o = Sn(), s = o.focusDayAfter, c = o.focusDayBefore, l = o.focusWeekAfter, u = o.focusWeekBefore, d = o.blur, f = o.focus, p = o.focusMonthBefore, m = o.focusMonthAfter, h = o.focusYearBefore, g = o.focusYearAfter, _ = o.focusStartOfWeek, v = o.focusEndOfWeek;
	return {
		onClick: function(o) {
			var s, c, l, u;
			q(n) ? (s = r.onDayClick) == null || s.call(r, e, t, o) : G(n) ? (c = i.onDayClick) == null || c.call(i, e, t, o) : K(n) ? (l = a.onDayClick) == null || l.call(a, e, t, o) : (u = n.onDayClick) == null || u.call(n, e, t, o);
		},
		onFocus: function(r) {
			var i;
			f(e), (i = n.onDayFocus) == null || i.call(n, e, t, r);
		},
		onBlur: function(r) {
			var i;
			d(), (i = n.onDayBlur) == null || i.call(n, e, t, r);
		},
		onKeyDown: function(r) {
			var i;
			switch (r.key) {
				case "ArrowLeft":
					r.preventDefault(), r.stopPropagation(), n.dir === "rtl" ? s() : c();
					break;
				case "ArrowRight":
					r.preventDefault(), r.stopPropagation(), n.dir === "rtl" ? c() : s();
					break;
				case "ArrowDown":
					r.preventDefault(), r.stopPropagation(), l();
					break;
				case "ArrowUp":
					r.preventDefault(), r.stopPropagation(), u();
					break;
				case "PageUp":
					r.preventDefault(), r.stopPropagation(), r.shiftKey ? h() : p();
					break;
				case "PageDown":
					r.preventDefault(), r.stopPropagation(), r.shiftKey ? g() : m();
					break;
				case "Home":
					r.preventDefault(), r.stopPropagation(), _();
					break;
				case "End": r.preventDefault(), r.stopPropagation(), v();
			}
			(i = n.onDayKeyDown) == null || i.call(n, e, t, r);
		},
		onKeyUp: function(r) {
			var i;
			(i = n.onDayKeyUp) == null || i.call(n, e, t, r);
		},
		onMouseEnter: function(r) {
			var i;
			(i = n.onDayMouseEnter) == null || i.call(n, e, t, r);
		},
		onMouseLeave: function(r) {
			var i;
			(i = n.onDayMouseLeave) == null || i.call(n, e, t, r);
		},
		onPointerEnter: function(r) {
			var i;
			(i = n.onDayPointerEnter) == null || i.call(n, e, t, r);
		},
		onPointerLeave: function(r) {
			var i;
			(i = n.onDayPointerLeave) == null || i.call(n, e, t, r);
		},
		onTouchCancel: function(r) {
			var i;
			(i = n.onDayTouchCancel) == null || i.call(n, e, t, r);
		},
		onTouchEnd: function(r) {
			var i;
			(i = n.onDayTouchEnd) == null || i.call(n, e, t, r);
		},
		onTouchMove: function(r) {
			var i;
			(i = n.onDayTouchMove) == null || i.call(n, e, t, r);
		},
		onTouchStart: function(r) {
			var i;
			(i = n.onDayTouchStart) == null || i.call(n, e, t, r);
		}
	};
}
function kn() {
	var e = J(), t = Dn(), n = Ht(), r = qt();
	return q(e) ? t.selected : G(e) ? n.selected : K(e) ? r.selected : void 0;
}
function An(e) {
	return Object.values(Q).includes(e);
}
function jn(e, t) {
	var n = [e.classNames.day];
	return Object.keys(t).forEach(function(t) {
		var r = e.modifiersClassNames[t];
		if (r) n.push(r);
		else if (An(t)) {
			var i = e.classNames[`day_${t}`];
			i && n.push(i);
		}
	}), n;
}
function Mn(e, t) {
	var n = W({}, e.styles.day);
	return Object.keys(t).forEach(function(t) {
		n = W(W({}, n), e.modifiersStyles?.[t]);
	}), n;
}
function Nn(e, t, n) {
	var r, i = J(), a = Sn(), o = Cn(e, t), s = On(e, o), c = kn(), l = !!(i.onDayClick || i.mode !== "default");
	(0, O.useEffect)(function() {
		var t;
		o.outside || a.focusedDay && l && P(a.focusedDay, e) && ((t = n.current) == null || t.focus());
	}, [
		a.focusedDay,
		e,
		n,
		l,
		o.outside
	]);
	var u = jn(i, o).join(" "), d = Mn(i, o), f = !!(o.outside && !i.showOutsideDays || o.hidden), p = i.components?.DayContent ?? Rt, m = {
		style: d,
		className: u,
		children: (0, D.jsx)(p, {
			date: e,
			displayMonth: t,
			activeModifiers: o
		}),
		role: "gridcell"
	}, h = a.focusTarget && P(a.focusTarget, e) && !o.outside, g = a.focusedDay && P(a.focusedDay, e);
	return {
		isButton: l,
		isHidden: f,
		activeModifiers: o,
		selectedDays: c,
		buttonProps: W(W(W({}, m), (r = {
			disabled: o.disabled,
			role: "gridcell"
		}, r["aria-selected"] = o.selected, r.tabIndex = g || h ? 0 : -1, r)), s),
		divProps: m
	};
}
function Pn(e) {
	var t = (0, O.useRef)(null), n = Nn(e.date, e.displayMonth, t);
	return n.isHidden ? (0, D.jsx)("div", { role: "gridcell" }) : n.isButton ? (0, D.jsx)(X, W({
		name: "day",
		ref: t
	}, n.buttonProps)) : (0, D.jsx)("div", W({}, n.divProps));
}
function Fn(e) {
	var t = e.number, n = e.dates, r = J(), i = r.onWeekNumberClick, a = r.styles, o = r.classNames, s = r.locale, c = r.labels.labelWeekNumber, l = r.formatters.formatWeekNumber, u = l(Number(t), { locale: s });
	if (!i) return (0, D.jsx)("span", {
		className: o.weeknumber,
		style: a.weeknumber,
		children: u
	});
	var d = c(Number(t), { locale: s });
	return (0, D.jsx)(X, {
		name: "week-number",
		"aria-label": d,
		className: o.weeknumber,
		style: a.weeknumber,
		onClick: function(e) {
			i(t, n, e);
		},
		children: u
	});
}
function In(e) {
	var t = J(), n = t.styles, r = t.classNames, i = t.showWeekNumber, a = t.components, o = a?.Day ?? Pn, s = a?.WeekNumber ?? Fn, c;
	return i && (c = (0, D.jsx)("td", {
		className: r.cell,
		style: n.cell,
		children: (0, D.jsx)(s, {
			number: e.weekNumber,
			dates: e.dates
		})
	})), (0, D.jsxs)("tr", {
		className: r.row,
		style: n.row,
		children: [c, e.dates.map(function(t) {
			return (0, D.jsx)("td", {
				className: r.cell,
				style: n.cell,
				role: "presentation",
				children: (0, D.jsx)(o, {
					displayMonth: e.displayMonth,
					date: t
				})
			}, Ye(t));
		})]
	});
}
function Ln(e, t, n) {
	for (var r = n != null && n.ISOWeek ? qe(t) : R(t, n), i = n != null && n.ISOWeek ? w(e) : x(e, n), a = C(r, i), o = [], s = 0; s <= a; s++) o.push(j(i, s));
	return o.reduce(function(e, t) {
		var r = n != null && n.ISOWeek ? ue(t) : d(t, n), i = e.find(function(e) {
			return e.weekNumber === r;
		});
		return i ? (i.dates.push(t), e) : (e.push({
			weekNumber: r,
			dates: [t]
		}), e);
	}, []);
}
function Rn(e, t) {
	var n = Ln(L(e), I(e), t);
	if (t != null && t.useFixedWeeks) {
		var r = Ze(e, t);
		if (r < 6) {
			var i = n[n.length - 1], a = i.dates[i.dates.length - 1], o = N(a, 6 - r), s = Ln(N(a, 1), o, t);
			n.push.apply(n, s);
		}
	}
	return n;
}
function zn(e) {
	var t = J(), n = t.locale, r = t.classNames, i = t.styles, a = t.hideHead, o = t.fixedWeeks, s = t.components, c = t.weekStartsOn, l = t.firstWeekContainsDate, u = t.ISOWeek, d = Rn(e.displayMonth, {
		useFixedWeeks: !!o,
		ISOWeek: u,
		locale: n,
		weekStartsOn: c,
		firstWeekContainsDate: l
	}), f = s?.Head ?? Lt, p = s?.Row ?? In, m = s?.Footer ?? Pt;
	return (0, D.jsxs)("table", {
		id: e.id,
		className: r.table,
		style: i.table,
		role: "grid",
		"aria-labelledby": e["aria-labelledby"],
		children: [
			!a && (0, D.jsx)(f, {}),
			(0, D.jsx)("tbody", {
				className: r.tbody,
				style: i.tbody,
				children: d.map(function(t) {
					return (0, D.jsx)(p, {
						displayMonth: e.displayMonth,
						dates: t.dates,
						weekNumber: t.weekNumber
					}, t.weekNumber);
				})
			}),
			(0, D.jsx)(m, { displayMonth: e.displayMonth })
		]
	});
}
function Bn() {
	return !!(typeof window < "u" && window.document && window.document.createElement);
}
var Vn = Bn() ? O.useLayoutEffect : O.useEffect, Hn = !1, Un = 0;
function Wn() {
	return `react-day-picker-${++Un}`;
}
function Gn(e) {
	var t = e ?? (Hn ? Wn() : null), n = (0, O.useState)(t), r = n[0], i = n[1];
	return Vn(function() {
		r === null && i(Wn());
	}, []), (0, O.useEffect)(function() {
		Hn === !1 && (Hn = !0);
	}, []), e ?? r ?? void 0;
}
function Kn(e) {
	var t, n = J(), r = n.dir, i = n.classNames, a = n.styles, o = n.components, s = Y().displayMonths, c = Gn(n.id ? `${n.id}-${e.displayIndex}` : void 0), l = n.id ? `${n.id}-grid-${e.displayIndex}` : void 0, u = [i.month], d = a.month, f = e.displayIndex === 0, p = e.displayIndex === s.length - 1, m = !f && !p;
	r === "rtl" && (t = [f, p], p = t[0], f = t[1]), f && (u.push(i.caption_start), d = W(W({}, d), a.caption_start)), p && (u.push(i.caption_end), d = W(W({}, d), a.caption_end)), m && (u.push(i.caption_between), d = W(W({}, d), a.caption_between));
	var h = o?.Caption ?? Nt;
	return (0, D.jsxs)("div", {
		className: u.join(" "),
		style: d,
		children: [(0, D.jsx)(h, {
			id: c,
			displayMonth: e.displayMonth,
			displayIndex: e.displayIndex
		}), (0, D.jsx)(zn, {
			id: l,
			"aria-labelledby": c,
			displayMonth: e.displayMonth
		})]
	}, e.displayIndex);
}
function qn(e) {
	var t = J(), n = t.classNames, r = t.styles;
	return (0, D.jsx)("div", {
		className: n.months,
		style: r.months,
		children: e.children
	});
}
function Jn(e) {
	var t = e.initialProps, n = J(), r = Sn(), i = Y(), a = (0, O.useState)(!1), o = a[0], s = a[1];
	(0, O.useEffect)(function() {
		n.initialFocus && r.focusTarget && (o || (r.focus(r.focusTarget), s(!0)));
	}, [
		n.initialFocus,
		o,
		r.focus,
		r.focusTarget,
		r
	]);
	var c = [n.classNames.root, n.className];
	n.numberOfMonths > 1 && c.push(n.classNames.multiple_months), n.showWeekNumber && c.push(n.classNames.with_weeknumber);
	var l = W(W({}, n.styles.root), n.style), u = Object.keys(t).filter(function(e) {
		return e.startsWith("data-");
	}).reduce(function(e, n) {
		var r;
		return W(W({}, e), (r = {}, r[n] = t[n], r));
	}, {}), d = t.components?.Months ?? qn;
	return (0, D.jsx)("div", W({
		className: c.join(" "),
		style: l,
		dir: n.dir,
		id: n.id,
		nonce: t.nonce,
		title: t.title,
		lang: t.lang
	}, u, { children: (0, D.jsx)(d, { children: i.displayMonths.map(function(e, t) {
		return (0, D.jsx)(Kn, {
			displayIndex: t,
			displayMonth: e
		}, t);
	}) }) }));
}
function Yn(e) {
	var t = e.children, n = et(e, ["children"]);
	return (0, D.jsx)(mt, {
		initialProps: n,
		children: (0, D.jsx)(Dt, { children: (0, D.jsx)(Tn, {
			initialProps: n,
			children: (0, D.jsx)(Bt, {
				initialProps: n,
				children: (0, D.jsx)(Gt, {
					initialProps: n,
					children: (0, D.jsx)(an, { children: (0, D.jsx)(xn, { children: t }) })
				})
			})
		}) })
	});
}
function Xn(e) {
	return (0, D.jsx)(Yn, W({}, e, { children: (0, D.jsx)(Jn, { initialProps: e }) }));
}
function Zn({ className: e, classNames: t, fromDate: n, toDate: r, showOutsideDays: i = !0, ...o }) {
	return /* @__PURE__ */ (0, D.jsx)(Xn, {
		fromDate: n,
		toDate: r || void 0,
		showOutsideDays: i,
		className: f("p-3", e),
		classNames: {
			months: "flex flex-col sm:flex-row stack-y-4 sm:space-x-4 sm:stack-y-0",
			month: "stack-y-4",
			caption: "flex pt-1 relative items-center justify-between",
			caption_label: "text-sm font-medium",
			nav: "flex items-center",
			head: "",
			head_row: "flex w-full items-center justify-between",
			head_cell: "w-8 md:w-11 h-8 text-sm font-medium text-default text-center",
			nav_button: f(y({
				color: "minimal",
				variant: "icon"
			})),
			table: "w-full border-collapse stack-y-1",
			row: "flex w-full mt-0.5 gap-0.5",
			cell: "w-8 h-8 md:h-11 md:w-11 text-center text-sm p-0 relative focus-within:relative focus-within:z-20",
			day: f(y({ color: "minimal" }), "w-8 h-8 md:h-11 md:w-11 p-0 text-sm font-medium aria-selected:opacity-100 inline-flex items-center justify-center"),
			day_range_end: "hover:bg-inverted! text-inverted!",
			day_range_start: "hover:bg-inverted! text-inverted!",
			day_selected: "bg-inverted text-inverted",
			day_today: "relative after:absolute after:bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:h-1 after:w-1 after:rounded-full after:bg-inverted aria-selected:after:bg-default",
			day_outside: "",
			day_disabled: "text-muted opacity-50",
			day_range_middle: "aria-selected:bg-emphasis aria-selected:text-emphasis",
			day_hidden: "invisible",
			...t
		},
		components: {
			CaptionLabel: (e) => /* @__PURE__ */ (0, D.jsxs)("div", {
				className: "px-2",
				children: [/* @__PURE__ */ (0, D.jsxs)("span", {
					className: "text-emphasis font-semibold leading-none",
					children: [ae(e.displayMonth).format("MMMM"), " "]
				}), /* @__PURE__ */ (0, D.jsx)("span", {
					className: "text-subtle font-medium leading-none",
					children: ae(e.displayMonth).format("YYYY")
				})]
			}),
			IconLeft: () => /* @__PURE__ */ (0, D.jsx)(a, { className: "h-4 w-4 stroke-2" }),
			IconRight: () => /* @__PURE__ */ (0, D.jsx)(v, { className: "h-4 w-4 stroke-2" })
		},
		...o
	});
}
Zn.displayName = "Calendar";
function Qn({ startDate: e, endDate: t, clickedDate: n }) {
	return !e || t ? {
		startDate: n,
		endDate: void 0
	} : n < e ? {
		startDate: n,
		endDate: e
	} : {
		startDate: e,
		endDate: n
	};
}
function $n({ className: e, dates: t, minDate: n, maxDate: r, onDatesChange: i, disabled: a, withoutPopover: s, popoverModal: c = !0, popoverOpen: l, onPopoverOpenChange: u, "data-testid": d, strictlyBottom: p, allowPastDates: m = !1, onMonthChange: g }) {
	let [_, v] = (0, O.useState)(void 0);
	function ee(e) {
		i(Qn({
			startDate: t.startDate,
			endDate: t.endDate,
			clickedDate: e
		})), v(void 0);
	}
	function te(e) {
		t.startDate && !t.endDate && v(e);
	}
	function ne() {
		v(void 0);
	}
	let re = m && n === null ? void 0 : n ?? /* @__PURE__ */ new Date(), y = (0, O.useMemo)(() => {
		if (t.startDate && !t.endDate && _ && !P(t.startDate, _)) return B(_, t.startDate) ? {
			from: _,
			to: t.startDate
		} : {
			from: t.startDate,
			to: _
		};
	}, [
		t.startDate,
		t.endDate,
		_
	]), b = /* @__PURE__ */ (0, D.jsx)(Zn, {
		initialFocus: !0,
		fromDate: re,
		toDate: r,
		mode: "range",
		defaultMonth: t?.startDate,
		selected: {
			from: t?.startDate,
			to: t?.endDate
		},
		onDayClick: (e) => ee(e),
		onDayMouseEnter: te,
		onDayMouseLeave: ne,
		numberOfMonths: 1,
		disabled: a,
		"data-testid": d,
		modifiers: y ? { hoverRange: y } : void 0,
		modifiersClassNames: y ? { hoverRange: "bg-emphasis" } : void 0,
		onMonthChange: g
	});
	return s ? b : /* @__PURE__ */ (0, D.jsx)("div", {
		className: f("grid gap-2", e),
		children: /* @__PURE__ */ (0, D.jsxs)(ze, {
			modal: c,
			open: l,
			onOpenChange: u,
			children: [/* @__PURE__ */ (0, D.jsx)(Be, {
				asChild: !0,
				children: /* @__PURE__ */ (0, D.jsx)(o, {
					"data-testid": "date-range",
					color: "secondary",
					EndIcon: "calendar",
					className: f("justify-between text-left font-normal", !t && "text-subtle"),
					children: t != null && t.startDate ? t != null && t.endDate ? /* @__PURE__ */ (0, D.jsxs)(D.Fragment, { children: [
						h(t.startDate, "LLL dd, y"),
						" - ",
						h(t.endDate, "LLL dd, y")
					] }) : /* @__PURE__ */ (0, D.jsxs)(D.Fragment, { children: [h(t.startDate, "LLL dd, y"), " - End"] }) : /* @__PURE__ */ (0, D.jsx)("span", { children: "Pick a date" })
				})
			}), /* @__PURE__ */ (0, D.jsx)(Ve, { children: /* @__PURE__ */ (0, D.jsx)(He, {
				className: "bg-default text-emphasis z-50 w-auto rounded-md border p-0 outline-none",
				align: "start",
				sideOffset: 4,
				side: p ? "bottom" : void 0,
				avoidCollisions: !p,
				onInteractOutside: (e) => {
					t != null && t.startDate && !(t != null && t.endDate) && e.preventDefault();
				},
				children: b
			}) })]
		})
	});
}
//#endregion
export { $n as DatePickerWithRange };

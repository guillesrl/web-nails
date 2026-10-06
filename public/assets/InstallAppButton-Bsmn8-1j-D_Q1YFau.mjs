import { a as e, n as t, t as n } from "./jsx-runtime-BYDbnt8x.mjs";
import { K as r, Wt as i, p as a } from "./cal-atoms-ChAnjorB.mjs";
//#region node_modules/@calcom/atoms/dist/InstallAppButton-Bsmn8-1j.js
var o = /* @__PURE__ */ e(n(), 1), s = /* @__PURE__ */ e(t(), 1), c = /* @__PURE__ */ ((e) => (e.ACCOUNTS_STEP = "accounts", e.EVENT_TYPES_STEP = "event-types", e.CONFIGURE_STEP = "configure", e))(c || {}), l = {}, u, d;
function f() {
	if (d) return u;
	d = 1;
	function e(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t);
	}
	return u = function(t, n, r, i) {
		n ||= "&", r ||= "=";
		var a = {};
		if (typeof t != "string" || t.length === 0) return a;
		var o = /\+/g;
		t = t.split(n);
		var s = 1e3;
		i && typeof i.maxKeys == "number" && (s = i.maxKeys);
		var c = t.length;
		s > 0 && c > s && (c = s);
		for (var l = 0; l < c; ++l) {
			var u = t[l].replace(o, "%20"), d = u.indexOf(r), f, p, m, h;
			d >= 0 ? (f = u.substr(0, d), p = u.substr(d + 1)) : (f = u, p = ""), m = decodeURIComponent(f), h = decodeURIComponent(p), e(a, m) ? Array.isArray(a[m]) ? a[m].push(h) : a[m] = [a[m], h] : a[m] = h;
		}
		return a;
	}, u;
}
var p, m;
function h() {
	if (m) return p;
	m = 1;
	var e = function(e) {
		switch (typeof e) {
			case "string": return e;
			case "boolean": return e ? "true" : "false";
			case "number": return isFinite(e) ? e : "";
			default: return "";
		}
	};
	return p = function(t, n, r, i) {
		return n ||= "&", r ||= "=", t === null && (t = void 0), typeof t == "object" ? Object.keys(t).map(function(i) {
			var a = encodeURIComponent(e(i)) + r;
			return Array.isArray(t[i]) ? t[i].map(function(t) {
				return a + encodeURIComponent(e(t));
			}).join(n) : a + encodeURIComponent(e(t[i]));
		}).filter(Boolean).join(n) : i ? encodeURIComponent(e(i)) + r + encodeURIComponent(e(t)) : "";
	}, p;
}
var g;
function _() {
	return g || (g = 1, l.decode = l.parse = f(), l.encode = l.stringify = h()), l;
}
var v = _(), y = ({ slug: e, step: t, teamId: n }) => {
	let r = { slug: e };
	return n && (r.teamId = n), `/apps/installation/${t}?${v.stringify(r)}`;
};
function b(e) {
	let [t, n] = (0, s.useState)(!1), l = a(null);
	return /* @__PURE__ */ (0, o.jsxs)(o.Fragment, { children: [e.render({
		onClick() {
			n(!0);
		},
		disabled: t
	}), /* @__PURE__ */ (0, o.jsx)(r, {
		open: t,
		onOpenChange: n,
		handleSubmit: () => {
			l.mutate({
				type: "office365_video",
				variant: "conferencing",
				slug: "msteams",
				returnTo: i + y({
					slug: "msteams",
					step: c.EVENT_TYPES_STEP
				})
			});
		}
	})] });
}
//#endregion
export { b as default };

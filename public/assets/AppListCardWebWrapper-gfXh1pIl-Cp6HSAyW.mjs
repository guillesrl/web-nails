import { a as e, n as t, t as n } from "./jsx-runtime-BqlYg9ib.mjs";
import { A as r, I as i, X as a, jt as o, k as s, kt as c, qt as l, sn as u, tt as d } from "./cal-atoms-B35e3sTk.mjs";
//#region node_modules/@calcom/atoms/dist/AppListCardWebWrapper-gfXh1pIl.js
var f = /* @__PURE__ */ e(n(), 1), p = /* @__PURE__ */ e(t(), 1);
a().or(u()).or(i(u())).transform((e) => typeof e == "string" ? e.split(",").map((e) => Number(e)) : Array.isArray(e) ? e : [e]), d((e) => a().parse(e).split(","), a().array()).or(a().array());
function m({ pathname: e, search: t, shallow: n, routerReplace: r }) {
	if (!e) return;
	let i = t.toString();
	r(i ? `${e}?${i}` : e);
}
function h(e, t) {
	let n = o.useRouter(), r = s(), i = o.usePathname(), a = e.safeParse(r), c = (0, p.useMemo)(() => ({}), []);
	(0, p.useEffect)(() => {
		a.success && a.data && Object.entries(a.data).forEach(([e, t]) => {
			if (e in r || !t) return;
			let a = new URLSearchParams(c);
			a.set(String(e), String(t)), m({
				pathname: i,
				search: a,
				shallow: !1,
				routerReplace: n.replace
			});
		});
	}, [
		a,
		e,
		n,
		i,
		r,
		c,
		!1
	]), a.success ? c = a.data : a.success || console.error(a.error);
	let l = (0, p.useCallback)(function(e, t) {
		let r = new URLSearchParams(c);
		r.set(String(e), String(t)), m({
			pathname: i,
			search: r,
			shallow: !1,
			routerReplace: n.replace
		});
	}, [
		c,
		n,
		i,
		!1
	]);
	function u(e) {
		let t = new URLSearchParams(c);
		t.delete(String(e)), m({
			pathname: i,
			search: t,
			shallow: !1,
			routerReplace: n.replace
		});
	}
	function d(e, t) {
		let n = c[e];
		if (Array.isArray(n)) {
			if (n.includes(t)) return;
			l(e, [...n, t]);
		} else l(e, [t]);
	}
	function f(e, t) {
		let n = c[e];
		if (Array.isArray(n) && n.length > 1) {
			let r = n.filter((e) => e !== t);
			l(e, r);
		} else u(e);
	}
	function h() {
		i && n.replace(i);
	}
	return {
		data: c,
		setQuery: l,
		removeByKey: u,
		pushItemToKey: d,
		removeItemByKeyAndValue: f,
		removeAllQueryParams: h
	};
}
var g = l({ hl: a().optional() });
function _(e) {
	let { slug: t, shouldHighlight: n } = e, { data: { hl: i } } = h(g), a = o.useRouter(), [s, l] = (0, p.useState)(n && i === t), u = (0, p.useRef)(null), d = c(), m = o.usePathname();
	return (0, p.useEffect)(() => (n && s && d !== null && m !== null && (u.current = setTimeout(() => {
		let e = new URLSearchParams(d.toString());
		e.delete("hl"), e.delete("category"), l(!1);
		let t = e.toString();
		a.replace(`${m}${t === "" ? "" : `?${t}`}`);
	}, 3e3)), () => {
		u.current &&= (clearTimeout(u.current), null);
	}), [
		s,
		m,
		a,
		d,
		n
	]), /* @__PURE__ */ (0, f.jsx)(r, { ...e });
}
//#endregion
export { _ as default };

import { a as e, n as t, t as n } from "./jsx-runtime-BYDbnt8x.mjs";
import { Nt as r, dn as i } from "./cal-atoms-ChAnjorB.mjs";
//#region node_modules/@calcom/atoms/dist/AlbyPriceComponent-CMgsr1Ao.js
var a = /* @__PURE__ */ e(n(), 1), o = /* @__PURE__ */ e(t(), 1), s = function(e, t = !0) {
	if (e.destroyed) throw Error("Hash instance has been destroyed");
	if (t && e.finished) throw Error("Hash#digest() has already been called");
}, c = (e) => e instanceof Uint8Array, l = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength), u = (e, t) => e << 32 - t | e >>> t;
if (new Uint8Array(new Uint32Array([287454020]).buffer)[0] !== 68) throw Error("Non little-endian hardware is not supported");
Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function d(e) {
	if (typeof e == "string" && (e = (function(e) {
		if (typeof e != "string") throw Error("utf8ToBytes expected string, got " + typeof e);
		return new Uint8Array(new TextEncoder().encode(e));
	})(e)), !c(e)) throw Error("expected Uint8Array, got " + typeof e);
	return e;
}
var f = class {
	clone() {
		return this._cloneInto();
	}
};
function p(e) {
	let t = (t) => e().update(d(t)).digest(), n = e();
	return t.outputLen = n.outputLen, t.blockLen = n.blockLen, t.create = () => e(), t;
}
var m = class extends f {
	constructor(e, t, n, r) {
		super(), this.blockLen = e, this.outputLen = t, this.padOffset = n, this.isLE = r, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = l(this.buffer);
	}
	update(e) {
		s(this);
		let { view: t, buffer: n, blockLen: r } = this, i = (e = d(e)).length;
		for (let a = 0; a < i;) {
			let o = Math.min(r - this.pos, i - a);
			if (o !== r) n.set(e.subarray(a, a + o), this.pos), this.pos += o, a += o, this.pos === r && (this.process(t, 0), this.pos = 0);
			else {
				let t = l(e);
				for (; r <= i - a; a += r) this.process(t, a);
			}
		}
		return this.length += e.length, this.roundClean(), this;
	}
	digestInto(e) {
		s(this), (function(e, t) {
			(function(e, ...t) {
				if (!(e instanceof Uint8Array)) throw Error("Expected Uint8Array");
				if (t.length > 0 && !t.includes(e.length)) throw Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`);
			})(e);
			let n = t.outputLen;
			if (e.length < n) throw Error(`digestInto() expects output buffer of length at least ${n}`);
		})(e, this), this.finished = !0;
		let { buffer: t, view: n, blockLen: r, isLE: i } = this, { pos: a } = this;
		t[a++] = 128, this.buffer.subarray(a).fill(0), this.padOffset > r - a && (this.process(n, 0), a = 0);
		for (let e = a; e < r; e++) t[e] = 0;
		(function(e, t, n, r) {
			if (typeof e.setBigUint64 == "function") return e.setBigUint64(t, n, r);
			let i = BigInt(32), a = BigInt(4294967295), o = Number(n >> i & a), s = Number(n & a), c = r ? 0 : 4;
			e.setUint32(t + (r ? 4 : 0), o, r), e.setUint32(t + c, s, r);
		})(n, r - 8, BigInt(8 * this.length), i), this.process(n, 0);
		let o = l(e), c = this.outputLen;
		if (c % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
		let u = c / 4, d = this.get();
		if (u > d.length) throw Error("_sha2: outputLen bigger than state");
		for (let e = 0; e < u; e++) o.setUint32(4 * e, d[e], i);
	}
	digest() {
		let { buffer: e, outputLen: t } = this;
		this.digestInto(e);
		let n = e.slice(0, t);
		return this.destroy(), n;
	}
	_cloneInto(e) {
		e ||= new this.constructor(), e.set(...this.get());
		let { blockLen: t, buffer: n, length: r, finished: i, destroyed: a, pos: o } = this;
		return e.length = r, e.pos = o, e.finished = i, e.destroyed = a, r % t && e.buffer.set(n), e;
	}
}, h = (e, t, n) => e & t ^ e & n ^ t & n, g = new Uint32Array([
	1116352408,
	1899447441,
	3049323471,
	3921009573,
	961987163,
	1508970993,
	2453635748,
	2870763221,
	3624381080,
	310598401,
	607225278,
	1426881987,
	1925078388,
	2162078206,
	2614888103,
	3248222580,
	3835390401,
	4022224774,
	264347078,
	604807628,
	770255983,
	1249150122,
	1555081692,
	1996064986,
	2554220882,
	2821834349,
	2952996808,
	3210313671,
	3336571891,
	3584528711,
	113926993,
	338241895,
	666307205,
	773529912,
	1294757372,
	1396182291,
	1695183700,
	1986661051,
	2177026350,
	2456956037,
	2730485921,
	2820302411,
	3259730800,
	3345764771,
	3516065817,
	3600352804,
	4094571909,
	275423344,
	430227734,
	506948616,
	659060556,
	883997877,
	958139571,
	1322822218,
	1537002063,
	1747873779,
	1955562222,
	2024104815,
	2227730452,
	2361852424,
	2428436474,
	2756734187,
	3204031479,
	3329325298
]), _ = new Uint32Array([
	1779033703,
	3144134277,
	1013904242,
	2773480762,
	1359893119,
	2600822924,
	528734635,
	1541459225
]), v = /* @__PURE__ */ new Uint32Array(64), y = class extends m {
	constructor() {
		super(64, 32, 8, !1), this.A = 0 | _[0], this.B = 0 | _[1], this.C = 0 | _[2], this.D = 0 | _[3], this.E = 0 | _[4], this.F = 0 | _[5], this.G = 0 | _[6], this.H = 0 | _[7];
	}
	get() {
		let { A: e, B: t, C: n, D: r, E: i, F: a, G: o, H: s } = this;
		return [
			e,
			t,
			n,
			r,
			i,
			a,
			o,
			s
		];
	}
	set(e, t, n, r, i, a, o, s) {
		this.A = 0 | e, this.B = 0 | t, this.C = 0 | n, this.D = 0 | r, this.E = 0 | i, this.F = 0 | a, this.G = 0 | o, this.H = 0 | s;
	}
	process(e, t) {
		for (let n = 0; n < 16; n++, t += 4) v[n] = e.getUint32(t, !1);
		for (let e = 16; e < 64; e++) {
			let t = v[e - 15], n = v[e - 2], r = u(t, 7) ^ u(t, 18) ^ t >>> 3, i = u(n, 17) ^ u(n, 19) ^ n >>> 10;
			v[e] = i + v[e - 7] + r + v[e - 16] | 0;
		}
		let { A: n, B: r, C: i, D: a, E: o, F: s, G: c, H: l } = this;
		for (let e = 0; e < 64; e++) {
			let t = l + (u(o, 6) ^ u(o, 11) ^ u(o, 25)) + ((d = o) & s ^ ~d & c) + g[e] + v[e] | 0, f = (u(n, 2) ^ u(n, 13) ^ u(n, 22)) + h(n, r, i) | 0;
			l = c, c = s, s = o, o = a + t | 0, a = i, i = r, r = n, n = t + f | 0;
		}
		var d;
		n = n + this.A | 0, r = r + this.B | 0, i = i + this.C | 0, a = a + this.D | 0, o = o + this.E | 0, s = s + this.F | 0, c = c + this.G | 0, l = l + this.H | 0, this.set(n, r, i, a, o, s, c, l);
	}
	roundClean() {
		v.fill(0);
	}
	destroy() {
		this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
	}
}, b = class extends y {
	constructor() {
		super(), this.A = -1056596264, this.B = 914150663, this.C = 812702999, this.D = -150054599, this.E = -4191439, this.F = 1750603025, this.G = 1694076839, this.H = -1090891868, this.outputLen = 28;
	}
};
p(() => new y()), p(() => new b());
var x = function(e, t) {
	function n(e) {
		if (!Number.isSafeInteger(e)) throw Error(`Wrong integer: ${e}`);
	}
	function r(...e) {
		let t = (e, t) => (n) => e(t(n));
		return {
			encode: Array.from(e).reverse().reduce((e, n) => e ? t(e, n.encode) : n.encode, void 0),
			decode: e.reduce((e, n) => e ? t(e, n.decode) : n.decode, void 0)
		};
	}
	function i(e) {
		return {
			encode: (t) => {
				if (!Array.isArray(t) || t.length && typeof t[0] != "number") throw Error("alphabet.encode input should be an array of numbers");
				return t.map((t) => {
					if (n(t), t < 0 || t >= e.length) throw Error(`Digit index outside alphabet: ${t} (alphabet: ${e.length})`);
					return e[t];
				});
			},
			decode: (t) => {
				if (!Array.isArray(t) || t.length && typeof t[0] != "string") throw Error("alphabet.decode input should be array of strings");
				return t.map((t) => {
					if (typeof t != "string") throw Error(`alphabet.decode: not string element=${t}`);
					let n = e.indexOf(t);
					if (n === -1) throw Error(`Unknown letter: "${t}". Allowed: ${e}`);
					return n;
				});
			}
		};
	}
	function a(e = "") {
		if (typeof e != "string") throw Error("join separator should be string");
		return {
			encode: (t) => {
				if (!Array.isArray(t) || t.length && typeof t[0] != "string") throw Error("join.encode input should be array of strings");
				for (let e of t) if (typeof e != "string") throw Error(`join.encode: non-string input=${e}`);
				return t.join(e);
			},
			decode: (t) => {
				if (typeof t != "string") throw Error("join.decode input should be string");
				return t.split(e);
			}
		};
	}
	function o(e, t = "=") {
		if (n(e), typeof t != "string") throw Error("padding chr should be string");
		return {
			encode(n) {
				if (!Array.isArray(n) || n.length && typeof n[0] != "string") throw Error("padding.encode input should be array of strings");
				for (let e of n) if (typeof e != "string") throw Error(`padding.encode: non-string input=${e}`);
				for (; n.length * e % 8;) n.push(t);
				return n;
			},
			decode(n) {
				if (!Array.isArray(n) || n.length && typeof n[0] != "string") throw Error("padding.encode input should be array of strings");
				for (let e of n) if (typeof e != "string") throw Error(`padding.decode: non-string input=${e}`);
				let r = n.length;
				if (r * e % 8) throw Error("Invalid padding: string should have whole number of bytes");
				for (; r > 0 && n[r - 1] === t; r--) if (!((r - 1) * e % 8)) throw Error("Invalid padding: string has too much padding");
				return n.slice(0, r);
			}
		};
	}
	function s(e) {
		if (typeof e != "function") throw Error("normalize fn should be function");
		return {
			encode: (e) => e,
			decode: (t) => e(t)
		};
	}
	function c(e, t, r) {
		if (t < 2) throw Error(`convertRadix: wrong from=${t}, base cannot be less than 2`);
		if (r < 2) throw Error(`convertRadix: wrong to=${r}, base cannot be less than 2`);
		if (!Array.isArray(e)) throw Error("convertRadix: data should be array");
		if (!e.length) return [];
		let i = 0, a = [], o = Array.from(e);
		for (o.forEach((e) => {
			if (n(e), e < 0 || e >= t) throw Error(`Wrong integer: ${e}`);
		});;) {
			let e = 0, n = !0;
			for (let a = i; a < o.length; a++) {
				let s = o[a], c = t * e + s;
				if (!Number.isSafeInteger(c) || t * e / t !== e || c - s != t * e || (e = c % r, o[a] = Math.floor(c / r), !Number.isSafeInteger(o[a]) || o[a] * r + e !== c)) throw Error("convertRadix: carry overflow");
				n && (o[a] ? n = !1 : i = a);
			}
			if (a.push(e), n) break;
		}
		for (let t = 0; t < e.length - 1 && e[t] === 0; t++) a.push(0);
		return a.reverse();
	}
	Object.defineProperty(t, "__esModule", { value: !0 }), t.bytes = t.stringToBytes = t.str = t.bytesToString = t.hex = t.utf8 = t.bech32m = t.bech32 = t.base58check = t.base58xmr = t.base58xrp = t.base58flickr = t.base58 = t.base64url = t.base64 = t.base32crockford = t.base32hex = t.base32 = t.base16 = t.utils = t.assertNumber = void 0, t.assertNumber = n;
	let l = (e, t) => t ? l(t, e % t) : e, u = (e, t) => e + (t - l(e, t));
	function d(e, t, r, i) {
		if (!Array.isArray(e)) throw Error("convertRadix2: data should be array");
		if (t <= 0 || t > 32) throw Error(`convertRadix2: wrong from=${t}`);
		if (r <= 0 || r > 32) throw Error(`convertRadix2: wrong to=${r}`);
		if (u(t, r) > 32) throw Error(`convertRadix2: carry overflow from=${t} to=${r} carryBits=${u(t, r)}`);
		let a = 0, o = 0, s = 2 ** r - 1, c = [];
		for (let i of e) {
			if (n(i), i >= 2 ** t) throw Error(`convertRadix2: invalid data word=${i} from=${t}`);
			if (a = a << t | i, o + t > 32) throw Error(`convertRadix2: carry overflow pos=${o} from=${t}`);
			for (o += t; o >= r; o -= r) c.push((a >> o - r & s) >>> 0);
			a &= 2 ** o - 1;
		}
		if (a = a << r - o & s, !i && o >= t) throw Error("Excess padding");
		if (!i && a) throw Error(`Non-zero padding: ${a}`);
		return i && o > 0 && c.push(a >>> 0), c;
	}
	function f(e) {
		return n(e), {
			encode: (t) => {
				if (!(t instanceof Uint8Array)) throw Error("radix.encode input should be Uint8Array");
				return c(Array.from(t), 256, e);
			},
			decode: (t) => {
				if (!Array.isArray(t) || t.length && typeof t[0] != "number") throw Error("radix.decode input should be array of strings");
				return Uint8Array.from(c(t, e, 256));
			}
		};
	}
	function p(e, t = !1) {
		if (n(e), e <= 0 || e > 32) throw Error("radix2: bits should be in (0..32]");
		if (u(8, e) > 32 || u(e, 8) > 32) throw Error("radix2: carry overflow");
		return {
			encode: (n) => {
				if (!(n instanceof Uint8Array)) throw Error("radix2.encode input should be Uint8Array");
				return d(Array.from(n), 8, e, !t);
			},
			decode: (n) => {
				if (!Array.isArray(n) || n.length && typeof n[0] != "number") throw Error("radix2.decode input should be array of strings");
				return Uint8Array.from(d(n, e, 8, t));
			}
		};
	}
	function m(e) {
		if (typeof e != "function") throw Error("unsafeWrapper fn should be function");
		return function(...t) {
			try {
				return e.apply(null, t);
			} catch {}
		};
	}
	function h(e, t) {
		if (n(e), typeof t != "function") throw Error("checksum fn should be function");
		return {
			encode(n) {
				if (!(n instanceof Uint8Array)) throw Error("checksum.encode: input should be Uint8Array");
				let r = t(n).slice(0, e), i = new Uint8Array(n.length + e);
				return i.set(n), i.set(r, n.length), i;
			},
			decode(n) {
				if (!(n instanceof Uint8Array)) throw Error("checksum.decode: input should be Uint8Array");
				let r = n.slice(0, -e), i = t(r).slice(0, e), a = n.slice(-e);
				for (let t = 0; t < e; t++) if (i[t] !== a[t]) throw Error("Invalid checksum");
				return r;
			}
		};
	}
	t.utils = {
		alphabet: i,
		chain: r,
		checksum: h,
		radix: f,
		radix2: p,
		join: a,
		padding: o
	}, t.base16 = r(p(4), i("0123456789ABCDEF"), a("")), t.base32 = r(p(5), i("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), o(5), a("")), t.base32hex = r(p(5), i("0123456789ABCDEFGHIJKLMNOPQRSTUV"), o(5), a("")), t.base32crockford = r(p(5), i("0123456789ABCDEFGHJKMNPQRSTVWXYZ"), a(""), s((e) => e.toUpperCase().replace(/O/g, "0").replace(/[IL]/g, "1"))), t.base64 = r(p(6), i("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), o(6), a("")), t.base64url = r(p(6), i("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"), o(6), a(""));
	let g = (e) => r(f(58), i(e), a(""));
	t.base58 = g("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"), t.base58flickr = g("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"), t.base58xrp = g("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz");
	let _ = [
		0,
		2,
		3,
		5,
		6,
		7,
		9,
		10,
		11
	];
	t.base58xmr = {
		encode(e) {
			let n = "";
			for (let r = 0; r < e.length; r += 8) {
				let i = e.subarray(r, r + 8);
				n += t.base58.encode(i).padStart(_[i.length], "1");
			}
			return n;
		},
		decode(e) {
			let n = [];
			for (let r = 0; r < e.length; r += 11) {
				let i = e.slice(r, r + 11), a = _.indexOf(i.length), o = t.base58.decode(i);
				for (let e = 0; e < o.length - a; e++) if (o[e] !== 0) throw Error("base58xmr: wrong padding");
				n = n.concat(Array.from(o.slice(o.length - a)));
			}
			return Uint8Array.from(n);
		}
	}, t.base58check = (e) => r(h(4, (t) => e(e(t))), t.base58);
	let v = r(i("qpzry9x8gf2tvdw0s3jn54khce6mua7l"), a("")), y = [
		996825010,
		642813549,
		513874426,
		1027748829,
		705979059
	];
	function b(e) {
		let t = e >> 25, n = (33554431 & e) << 5;
		for (let e = 0; e < y.length; e++) (t >> e & 1) == 1 && (n ^= y[e]);
		return n;
	}
	function x(e, t, n = 1) {
		let r = e.length, i = 1;
		for (let t = 0; t < r; t++) {
			let n = e.charCodeAt(t);
			if (n < 33 || n > 126) throw Error(`Invalid prefix (${e})`);
			i = b(i) ^ n >> 5;
		}
		i = b(i);
		for (let t = 0; t < r; t++) i = b(i) ^ 31 & e.charCodeAt(t);
		for (let e of t) i = b(i) ^ e;
		for (let e = 0; e < 6; e++) i = b(i);
		return i ^= n, v.encode(d([i % 2 ** 30], 30, 5, !1));
	}
	function S(e) {
		let t = e === "bech32" ? 1 : 734539939, n = p(5), r = n.decode, i = n.encode, a = m(r);
		function o(e, n = 90) {
			if (typeof e != "string") throw Error("bech32.decode input should be string, not " + typeof e);
			if (e.length < 8 || n !== !1 && e.length > n) throw TypeError(`Wrong string length: ${e.length} (${e}). Expected (8..${n})`);
			let r = e.toLowerCase();
			if (e !== r && e !== e.toUpperCase()) throw Error("String must be lowercase or uppercase");
			let i = (e = r).lastIndexOf("1");
			if (i === 0 || i === -1) throw Error("Letter \"1\" must be present between prefix and data only");
			let a = e.slice(0, i), o = e.slice(i + 1);
			if (o.length < 6) throw Error("Data must be at least 6 characters long");
			let s = v.decode(o).slice(0, -6), c = x(a, s, t);
			if (!o.endsWith(c)) throw Error(`Invalid checksum in ${e}: expected "${c}"`);
			return {
				prefix: a,
				words: s
			};
		}
		return {
			encode: function(e, n, r = 90) {
				if (typeof e != "string") throw Error("bech32.encode prefix should be string, not " + typeof e);
				if (!Array.isArray(n) || n.length && typeof n[0] != "number") throw Error("bech32.encode words should be array of numbers, not " + typeof n);
				let i = e.length + 7 + n.length;
				if (r !== !1 && i > r) throw TypeError(`Length ${i} exceeds limit ${r}`);
				return `${e = e.toLowerCase()}1${v.encode(n)}${x(e, n, t)}`;
			},
			decode: o,
			decodeToBytes: function(e) {
				let { prefix: t, words: n } = o(e, !1);
				return {
					prefix: t,
					words: n,
					bytes: r(n)
				};
			},
			decodeUnsafe: m(o),
			fromWords: r,
			fromWordsUnsafe: a,
			toWords: i
		};
	}
	t.bech32 = S("bech32"), t.bech32m = S("bech32m"), t.utf8 = {
		encode: (e) => new TextDecoder().decode(e),
		decode: (e) => new TextEncoder().encode(e)
	}, t.hex = r(p(4), i("0123456789abcdef"), a(""), s((e) => {
		if (typeof e != "string" || e.length % 2) throw TypeError(`hex.decode: expected string, got ${typeof e} with length ${e.length}`);
		return e.toLowerCase();
	}));
	let C = {
		utf8: t.utf8,
		hex: t.hex,
		base16: t.base16,
		base32: t.base32,
		base64: t.base64,
		base64url: t.base64url,
		base58: t.base58,
		base58xmr: t.base58xmr
	}, w = `Invalid encoding type. Available types: ${Object.keys(C).join(", ")}`;
	t.bytesToString = (e, t) => {
		if (typeof e != "string" || !C.hasOwnProperty(e)) throw TypeError(w);
		if (!(t instanceof Uint8Array)) throw TypeError("bytesToString() expects Uint8Array");
		return C[e].encode(t);
	}, t.str = t.bytesToString, t.stringToBytes = (e, t) => {
		if (!C.hasOwnProperty(e)) throw TypeError(w);
		if (typeof t != "string") throw TypeError("stringToBytes() expects string");
		return C[e].decode(t);
	}, t.bytes = t.stringToBytes;
}, S, { bech32: C, hex: w, utf8: T } = (x(S = { exports: {} }, S.exports), S.exports), E = {
	payment_hash: 1,
	payment_secret: 16,
	description: 13,
	payee: 19,
	description_hash: 23,
	expiry: 6,
	min_final_cltv_expiry: 24,
	fallback_address: 9,
	route_hint: 3,
	feature_bits: 5,
	metadata: 27
};
for (let e = 0, t = Object.keys(E); e < t.length; e++) t[e], E[t[e]].toString();
var D = async (e) => {
	let t = "https://getalby.com/api/rates/" + e.toLowerCase() + ".json";
	return (await (await fetch(t)).json()).rate_float / 1e8;
}, O = async ({ satoshi: e, currency: t }) => {
	let n = await D(t);
	return Number(e) * n;
}, k = {
	__proto__: null,
	getFiatBtcRate: D,
	getFiatValue: O,
	getSatoshiValue: async ({ amount: e, currency: t }) => {
		let n = await D(t);
		return Math.floor(Number(e) / n);
	},
	getFormattedFiatValue: async ({ satoshi: e, currency: t, locale: n }) => (n ||= "en", (await O({
		satoshi: e,
		currency: t
	})).toLocaleString(n, {
		style: "currency",
		currency: t
	}))
};
function A({ displaySymbol: e, price: t, formattedPrice: n }) {
	let [s, c] = o.useState("loading...");
	return o.useEffect(() => {
		(async () => {
			let e = await k.getFiatValue({
				satoshi: t,
				currency: "USD"
			});
			c(`$${e.toFixed(2)}`);
		})();
	}, [t]), /* @__PURE__ */ (0, a.jsx)(i, {
		content: s,
		children: /* @__PURE__ */ (0, a.jsxs)("div", {
			className: "inline-flex items-center justify-center",
			children: [e && /* @__PURE__ */ (0, a.jsx)(r, { className: "h-4 w-4" }), n]
		})
	});
}
//#endregion
export { A as AlbyPriceComponent };

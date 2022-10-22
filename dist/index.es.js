function k() {
}
function bn(t, n) {
  for (const e in n)
    t[e] = n[e];
  return t;
}
function ln(t) {
  return t();
}
function nn() {
  return /* @__PURE__ */ Object.create(null);
}
function I(t) {
  t.forEach(ln);
}
function hn(t) {
  return typeof t == "function";
}
function F(t, n) {
  return t != t ? n == n : t !== n || t && typeof t == "object" || typeof t == "function";
}
let X;
function tn(t, n) {
  return X || (X = document.createElement("a")), X.href = n, t === X.href;
}
function mn(t) {
  return Object.keys(t).length === 0;
}
function yn(t, n, e, r) {
  if (t) {
    const o = dn(t, n, e, r);
    return t[0](o);
  }
}
function dn(t, n, e, r) {
  return t[1] && r ? bn(e.ctx.slice(), t[1](r(n))) : e.ctx;
}
function kn(t, n, e, r) {
  if (t[2] && r) {
    const o = t[2](r(e));
    if (n.dirty === void 0)
      return o;
    if (typeof o == "object") {
      const u = [], s = Math.max(n.dirty.length, o.length);
      for (let i = 0; i < s; i += 1)
        u[i] = n.dirty[i] | o[i];
      return u;
    }
    return n.dirty | o;
  }
  return n.dirty;
}
function wn(t, n, e, r, o, u) {
  if (o) {
    const s = dn(n, e, r, u);
    t.p(s, o);
  }
}
function xn(t) {
  if (t.ctx.length > 32) {
    const n = [], e = t.ctx.length / 32;
    for (let r = 0; r < e; r++)
      n[r] = -1;
    return n;
  }
  return -1;
}
function vn(t) {
  const n = {};
  for (const e in t)
    n[e] = !0;
  return n;
}
function en(t) {
  return t == null ? "" : t;
}
function g(t, n) {
  t.appendChild(n);
}
function E(t, n, e) {
  const r = _n(t);
  if (!r.getElementById(n)) {
    const o = b("style");
    o.id = n, o.textContent = e, zn(r, o);
  }
}
function _n(t) {
  if (!t)
    return document;
  const n = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return n && n.host ? n : t.ownerDocument;
}
function zn(t, n) {
  return g(t.head || t, n), n.sheet;
}
function q(t, n, e) {
  t.insertBefore(n, e || null);
}
function j(t) {
  t.parentNode.removeChild(t);
}
function rn(t, n) {
  for (let e = 0; e < t.length; e += 1)
    t[e] && t[e].d(n);
}
function b(t) {
  return document.createElement(t);
}
function x(t) {
  return document.createTextNode(t);
}
function P() {
  return x(" ");
}
function W(t, n, e, r) {
  return t.addEventListener(n, e, r), () => t.removeEventListener(n, e, r);
}
function f(t, n, e) {
  e == null ? t.removeAttribute(n) : t.getAttribute(n) !== e && t.setAttribute(n, e);
}
function Cn(t) {
  return Array.from(t.childNodes);
}
function z(t, n) {
  n = "" + n, t.wholeText !== n && (t.data = n);
}
function N(t, n, e, r) {
  e === null ? t.style.removeProperty(n) : t.style.setProperty(n, e, r ? "important" : "");
}
function jn(t, n, { bubbles: e = !1, cancelable: r = !1 } = {}) {
  const o = document.createEvent("CustomEvent");
  return o.initCustomEvent(t, e, r, n), o;
}
let H;
function D(t) {
  H = t;
}
function qn() {
  if (!H)
    throw new Error("Function called outside component initialization");
  return H;
}
function fn() {
  const t = qn();
  return (n, e, { cancelable: r = !1 } = {}) => {
    const o = t.$$.callbacks[n];
    if (o) {
      const u = jn(n, e, { cancelable: r });
      return o.slice().forEach((s) => {
        s.call(t, u);
      }), !u.defaultPrevented;
    }
    return !0;
  };
}
const U = [], M = [], Z = [], on = [], Sn = Promise.resolve();
let V = !1;
function Fn() {
  V || (V = !0, Sn.then(gn));
}
function Y(t) {
  Z.push(t);
}
const Q = /* @__PURE__ */ new Set();
let G = 0;
function gn() {
  const t = H;
  do {
    for (; G < U.length; ) {
      const n = U[G];
      G++, D(n), En(n.$$);
    }
    for (D(null), U.length = 0, G = 0; M.length; )
      M.pop()();
    for (let n = 0; n < Z.length; n += 1) {
      const e = Z[n];
      Q.has(e) || (Q.add(e), e());
    }
    Z.length = 0;
  } while (U.length);
  for (; on.length; )
    on.pop()();
  V = !1, Q.clear(), D(t);
}
function En(t) {
  if (t.fragment !== null) {
    t.update(), I(t.before_update);
    const n = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, n), t.after_update.forEach(Y);
  }
}
const J = /* @__PURE__ */ new Set();
let L;
function Tn() {
  L = {
    r: 0,
    c: [],
    p: L
  };
}
function Bn() {
  L.r || I(L.c), L = L.p;
}
function K(t, n) {
  t && t.i && (J.delete(t), t.i(n));
}
function $(t, n, e, r) {
  if (t && t.o) {
    if (J.has(t))
      return;
    J.add(t), L.c.push(() => {
      J.delete(t), r && (e && t.d(1), r());
    }), t.o(n);
  } else
    r && r();
}
function On(t, n, e, r) {
  const { fragment: o, on_mount: u, on_destroy: s, after_update: i } = t.$$;
  o && o.m(n, e), r || Y(() => {
    const d = u.map(ln).filter(hn);
    s ? s.push(...d) : I(d), t.$$.on_mount = [];
  }), i.forEach(Y);
}
function An(t, n) {
  const e = t.$$;
  e.fragment !== null && (I(e.on_destroy), e.fragment && e.fragment.d(n), e.on_destroy = e.fragment = null, e.ctx = []);
}
function Ln(t, n) {
  t.$$.dirty[0] === -1 && (U.push(t), Fn(), t.$$.dirty.fill(0)), t.$$.dirty[n / 31 | 0] |= 1 << n % 31;
}
function T(t, n, e, r, o, u, s, i = [-1]) {
  const d = H;
  D(t);
  const a = t.$$ = {
    fragment: null,
    ctx: null,
    props: u,
    update: k,
    not_equal: o,
    bound: nn(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(n.context || (d ? d.$$.context : [])),
    callbacks: nn(),
    dirty: i,
    skip_bound: !1,
    root: n.target || d.$$.root
  };
  s && s(a.root);
  let p = !1;
  if (a.ctx = e ? e(t, n.props || {}, (c, l, ...w) => {
    const y = w.length ? w[0] : l;
    return a.ctx && o(a.ctx[c], a.ctx[c] = y) && (!a.skip_bound && a.bound[c] && a.bound[c](y), p && Ln(t, c)), l;
  }) : [], a.update(), p = !0, I(a.before_update), a.fragment = r ? r(a.ctx) : !1, n.target) {
    if (n.hydrate) {
      const c = Cn(n.target);
      a.fragment && a.fragment.l(c), c.forEach(j);
    } else
      a.fragment && a.fragment.c();
    n.intro && K(t.$$.fragment), On(t, n.target, n.anchor, n.customElement), gn();
  }
  D(d);
}
class B {
  $destroy() {
    An(this, 1), this.$destroy = k;
  }
  $on(n, e) {
    const r = this.$$.callbacks[n] || (this.$$.callbacks[n] = []);
    return r.push(e), () => {
      const o = r.indexOf(e);
      o !== -1 && r.splice(o, 1);
    };
  }
  $set(n) {
    this.$$set && !mn(n) && (this.$$.skip_bound = !0, this.$$set(n), this.$$.skip_bound = !1);
  }
}
function Pn(t) {
  E(t, "svelte-1etnm5k", ".svelte-1etnm5k,.svelte-1etnm5k::before,.svelte-1etnm5k::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.svelte-1etnm5k::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.bg-black.svelte-1etnm5k{--un-bg-opacity:1;background-color:rgba(0,0,0,var(--un-bg-opacity))}.text-white.svelte-1etnm5k{--un-text-opacity:1;color:rgba(255,255,255,var(--un-text-opacity))}");
}
function Wn(t) {
  let n, e, r, o, u;
  return {
    c() {
      n = b("button"), e = x("count is "), r = x(t[0]), f(n, "class", "bg-black text-white svelte-1etnm5k");
    },
    m(s, i) {
      q(s, n, i), g(n, e), g(n, r), o || (u = W(n, "click", t[1]), o = !0);
    },
    p(s, [i]) {
      i & 1 && z(r, s[0]);
    },
    i: k,
    o: k,
    d(s) {
      s && j(n), o = !1, u();
    }
  };
}
function Mn(t, n, e) {
  let r = 0;
  return [r, () => {
    e(0, r += 1);
  }];
}
class pt extends B {
  constructor(n) {
    super(), T(this, n, Mn, Wn, F, {}, Pn);
  }
}
function In(t) {
  E(t, "svelte-1lydoww", ".svelte-1lydoww,.svelte-1lydoww::before,.svelte-1lydoww::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.svelte-1lydoww::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.bg-red.svelte-1lydoww{--un-bg-opacity:1;background-color:rgba(248,113,113,var(--un-bg-opacity))}.text-white.svelte-1lydoww{--un-text-opacity:1;color:rgba(255,255,255,var(--un-text-opacity))}.btn.svelte-1lydoww{border:8px solid #35eb9a}");
}
function Rn(t) {
  let n, e, r, o, u;
  return {
    c() {
      n = b("button"), e = x("count is "), r = x(t[0]), f(n, "class", "btn bg-red text-white svelte-1lydoww");
    },
    m(s, i) {
      q(s, n, i), g(n, e), g(n, r), o || (u = W(n, "click", t[1]), o = !0);
    },
    p(s, [i]) {
      i & 1 && z(r, s[0]);
    },
    i: k,
    o: k,
    d(s) {
      s && j(n), o = !1, u();
    }
  };
}
function Nn(t, n, e) {
  let r = 0;
  return [r, () => {
    e(0, r += 2);
  }];
}
class bt extends B {
  constructor(n) {
    super(), T(this, n, Nn, Rn, F, {}, In);
  }
}
function Un(t) {
  E(t, "svelte-1cqo505", ".svelte-1cqo505.svelte-1cqo505,.svelte-1cqo505.svelte-1cqo505::before,.svelte-1cqo505.svelte-1cqo505::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.svelte-1cqo505.svelte-1cqo505::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }@keyframes svelte-1cqo505-scroll{from{transform:translateX(0)}to{transform:translateX(calc(-100% - var(--tail-gap)))}}.marquee.svelte-1cqo505.svelte-1cqo505{display:flex;overflow:hidden;user-select:none;gap:var(--tail-gap)}.marquee.svelte-1cqo505 .marquee_content.svelte-1cqo505{flex-shrink:0;display:flex;justify-content:space-around;min-width:100%;gap:var(--tail-gap);animation-name:svelte-1cqo505-scroll;animation-duration:var(--tail-speed);animation-iteration-count:infinite;animation-timing-function:linear}");
}
function un(t, n, e) {
  const r = t.slice();
  return r[3] = n[e], r;
}
function an(t, n, e) {
  const r = t.slice();
  return r[3] = n[e], r;
}
function sn(t) {
  let n, e = t[3] + "", r;
  return {
    c() {
      n = b("div"), r = x(e), f(n, "class", "svelte-1cqo505");
    },
    m(o, u) {
      q(o, n, u), g(n, r);
    },
    p(o, u) {
      u & 1 && e !== (e = o[3] + "") && z(r, e);
    },
    d(o) {
      o && j(n);
    }
  };
}
function cn(t) {
  let n, e = t[3] + "", r;
  return {
    c() {
      n = b("div"), r = x(e), f(n, "class", "svelte-1cqo505");
    },
    m(o, u) {
      q(o, n, u), g(n, r);
    },
    p(o, u) {
      u & 1 && e !== (e = o[3] + "") && z(r, e);
    },
    d(o) {
      o && j(n);
    }
  };
}
function Dn(t) {
  let n, e, r, o, u = t[0], s = [];
  for (let a = 0; a < u.length; a += 1)
    s[a] = sn(an(t, u, a));
  let i = t[0], d = [];
  for (let a = 0; a < i.length; a += 1)
    d[a] = cn(un(t, i, a));
  return {
    c() {
      n = b("div"), e = b("div");
      for (let a = 0; a < s.length; a += 1)
        s[a].c();
      r = P(), o = b("div");
      for (let a = 0; a < d.length; a += 1)
        d[a].c();
      f(e, "class", "marquee_content svelte-1cqo505"), f(o, "class", "marquee_content svelte-1cqo505"), f(o, "aria-hidden", "true"), f(n, "class", "marquee svelte-1cqo505"), N(n, "--tail-gap", t[1]), N(n, "--tail-speed", t[2]);
    },
    m(a, p) {
      q(a, n, p), g(n, e);
      for (let c = 0; c < s.length; c += 1)
        s[c].m(e, null);
      g(n, r), g(n, o);
      for (let c = 0; c < d.length; c += 1)
        d[c].m(o, null);
    },
    p(a, [p]) {
      if (p & 1) {
        u = a[0];
        let c;
        for (c = 0; c < u.length; c += 1) {
          const l = an(a, u, c);
          s[c] ? s[c].p(l, p) : (s[c] = sn(l), s[c].c(), s[c].m(e, null));
        }
        for (; c < s.length; c += 1)
          s[c].d(1);
        s.length = u.length;
      }
      if (p & 1) {
        i = a[0];
        let c;
        for (c = 0; c < i.length; c += 1) {
          const l = un(a, i, c);
          d[c] ? d[c].p(l, p) : (d[c] = cn(l), d[c].c(), d[c].m(o, null));
        }
        for (; c < d.length; c += 1)
          d[c].d(1);
        d.length = i.length;
      }
      p & 2 && N(n, "--tail-gap", a[1]), p & 4 && N(n, "--tail-speed", a[2]);
    },
    i: k,
    o: k,
    d(a) {
      a && j(n), rn(s, a), rn(d, a);
    }
  };
}
function Hn(t, n, e) {
  let { data: r = [] } = n, { gap: o = "60px" } = n, { speed: u = "5s" } = n;
  return t.$$set = (s) => {
    "data" in s && e(0, r = s.data), "gap" in s && e(1, o = s.gap), "speed" in s && e(2, u = s.speed);
  }, [r, o, u];
}
class ht extends B {
  constructor(n) {
    super(), T(this, n, Hn, Dn, F, { data: 0, gap: 1, speed: 2 }, Un);
  }
}
function Xn(t) {
  E(t, "svelte-120kxvy", '.svelte-120kxvy,.svelte-120kxvy::before,.svelte-120kxvy::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.svelte-120kxvy::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.mask-tip.svelte-120kxvy{min-width:175px;text-align:center;border:1px solid #005ea6;border-radius:8px;padding:5px 10px;position:absolute;background:white;transform:translateX(-50%)}.mask-tip.svelte-120kxvy:before{content:"";width:10px;height:10px;border:1px solid #005ea6;background:white;position:absolute;transform:rotate(45deg);top:-6px;left:calc(50% - 5px);border-right-width:0;border-bottom-width:0}.mask-tip-desc.svelte-120kxvy{display:block;margin-bottom:10px}.mask-tip-btn.svelte-120kxvy{border-radius:4px;padding:6px;border:none;background-color:#005ea6;cursor:pointer;color:white}');
}
function Gn(t) {
  let n, e, r, o, u, s;
  return {
    c() {
      n = b("div"), e = b("div"), r = b("span"), o = P(), u = b("button"), s = x(t[0]), f(r, "id", "mask-desc"), f(r, "class", "mask-tip-desc svelte-120kxvy"), f(u, "id", "next-step-btn"), f(u, "class", "mask-tip-btn svelte-120kxvy"), f(e, "class", "mask-tip svelte-120kxvy"), N(n, "display", "none"), f(n, "class", "svelte-120kxvy");
    },
    m(i, d) {
      q(i, n, d), g(n, e), g(e, r), g(e, o), g(e, u), g(u, s), t[6](e), t[7](n);
    },
    p(i, [d]) {
      d & 1 && z(s, i[0]);
    },
    i: k,
    o: k,
    d(i) {
      i && j(n), t[6](null), t[7](null);
    }
  };
}
function Zn(t, n, e) {
  let r, o, { gapWidth: u = 5 } = n, { isStart: s } = n, { stepArr: i = [] } = n, { btnText: d = "\u4E0B\u4E00\u6B65" } = n;
  const a = (l) => {
    if (l.length === 0) {
      e(1, r.style.display = "none", r);
      return;
    }
    const { id: w, desc: y } = l[0];
    var m = document.getElementById(w), h = m.offsetWidth, v = m.offsetHeight, _ = m.offsetLeft, A = m.offsetTop;
    console.log("\u5F85\u9542\u7A7A\u5143\u7D20: ", h, v, _, A);
    var R = document.body.scrollWidth, C = document.body.scrollHeight;
    e(1, r.style.width = R + "px", r), e(1, r.style.height = C + "px", r), e(1, r.style.position = "absolute", r), e(1, r.style.left = 0, r), e(1, r.style.top = 0, r), e(1, r.style.display = "block", r), e(1, r.style.boxSizing = "border-box", r), e(1, r.style.borderColor = "rgba(0, 0, 0, 0.75)", r), e(1, r.style.borderStyle = "solid", r), e(1, r.style.borderLeftWidth = _ - u + "px", r), e(1, r.style.borderRightWidth = R - h - _ - u + "px", r), e(1, r.style.borderTopWidth = A - u + "px", r), e(1, r.style.borderBottomWidth = C - v - A - u + "px", r), e(2, o.style.top = v + u * 2 + 10 + "px", o), e(2, o.style.left = "50%", o);
    var S = document.getElementById("mask-desc");
    S.innerHTML = y;
    var pn = document.getElementById("next-step-btn");
    pn.onclick = function() {
      l.shift(), a(l);
    };
  };
  function p(l) {
    M[l ? "unshift" : "push"](() => {
      o = l, e(2, o);
    });
  }
  function c(l) {
    M[l ? "unshift" : "push"](() => {
      r = l, e(1, r);
    });
  }
  return t.$$set = (l) => {
    "gapWidth" in l && e(3, u = l.gapWidth), "isStart" in l && e(4, s = l.isStart), "stepArr" in l && e(5, i = l.stepArr), "btnText" in l && e(0, d = l.btnText);
  }, t.$$.update = () => {
    t.$$.dirty & 48 && s && a(i);
  }, [
    d,
    r,
    o,
    u,
    s,
    i,
    p,
    c
  ];
}
class mt extends B {
  constructor(n) {
    super(), T(
      this,
      n,
      Zn,
      Gn,
      F,
      {
        gapWidth: 3,
        isStart: 4,
        stepArr: 5,
        btnText: 0
      },
      Xn
    );
  }
}
function Jn(t) {
  E(t, "svelte-h6rxq3", ".svelte-h6rxq3,.svelte-h6rxq3::before,.svelte-h6rxq3::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.svelte-h6rxq3::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.leaf-toggle-btn.svelte-h6rxq3{max-width:100%;width:100px}");
}
function Kn(t) {
  let n, e, r, o;
  return {
    c() {
      n = b("img"), tn(n.src, e = t[2]) || f(n, "src", e), f(n, "class", "leaf-toggle-btn svelte-h6rxq3");
    },
    m(u, s) {
      q(u, n, s), r || (o = W(n, "click", t[5]), r = !0);
    },
    p(u, [s]) {
      s & 4 && !tn(n.src, e = u[2]) && f(n, "src", e);
    },
    i: k,
    o: k,
    d(u) {
      u && j(n), r = !1, o();
    }
  };
}
function Qn(t, n, e) {
  let r, { imgChecked: o = "https://tse4-mm.cn.bing.net/th/id/OIP-C.cGGNewOo82RNOdjHnyHcMAAAAA?pid=ImgDet&rs=1" } = n, { imgUnchecked: u = "https://ts1.cn.mm.bing.net/th/id/R-C.cf59580e66343165cb761a1ab2aaf7e8?rik=E39R8u8Zk2mPng&riu=http%3a%2f%2fbpic.588ku.com%2felement_pic%2f18%2f07%2f02%2f56980234137c3b1a4fc26e860afae85a.jpg&ehk=XpqvmAYWaaPOPQnjjMhC7%2f2u7JeGF396wVdvWa3KMp4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" } = n, { checked: s = !1 } = n, { onChange: i = (a) => {
    console.log(a);
  } } = n;
  const d = () => {
    e(0, s = !s), i(s);
  };
  return t.$$set = (a) => {
    "imgChecked" in a && e(3, o = a.imgChecked), "imgUnchecked" in a && e(4, u = a.imgUnchecked), "checked" in a && e(0, s = a.checked), "onChange" in a && e(1, i = a.onChange);
  }, t.$$.update = () => {
    t.$$.dirty & 25 && e(2, r = s ? o : u);
  }, [s, i, r, o, u, d];
}
class yt extends B {
  constructor(n) {
    super(), T(
      this,
      n,
      Qn,
      Kn,
      F,
      {
        imgChecked: 3,
        imgUnchecked: 4,
        checked: 0,
        onChange: 1
      },
      Jn
    );
  }
}
const O = (t) => Object.entries(t).map(([n, e]) => `${n}: ${e};`).join(" ");
function Vn(t) {
  E(t, "svelte-1idtjrs", ".svelte-1idtjrs.svelte-1idtjrs,.svelte-1idtjrs.svelte-1idtjrs::before,.svelte-1idtjrs.svelte-1idtjrs::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.svelte-1idtjrs.svelte-1idtjrs::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.hidden.svelte-1idtjrs.svelte-1idtjrs{display:none}.inline-flex.svelte-1idtjrs.svelte-1idtjrs{display:inline-flex}.px.svelte-1idtjrs.svelte-1idtjrs{padding-left:1rem;padding-right:1rem}.leaf-circle.svelte-1idtjrs.svelte-1idtjrs{display:inline-flex;align-items:center;justify-content:center;border-radius:50%;overflow:hidden}.leaf-circle.svelte-1idtjrs .circle-text.svelte-1idtjrs{color:white}");
}
function Yn(t) {
  let n;
  const e = t[11].default, r = yn(e, t, t[10], null);
  return {
    c() {
      r && r.c();
    },
    m(o, u) {
      r && r.m(o, u), n = !0;
    },
    p(o, u) {
      r && r.p && (!n || u & 1024) && wn(
        r,
        e,
        o,
        o[10],
        n ? kn(e, o[10], u, null) : xn(o[10]),
        null
      );
    },
    i(o) {
      n || (K(r, o), n = !0);
    },
    o(o) {
      $(r, o), n = !1;
    },
    d(o) {
      r && r.d(o);
    }
  };
}
function $n(t) {
  let n, e, r;
  return {
    c() {
      n = b("div"), e = x(t[0]), f(n, "class", r = en(`circle-text ${t[1]}`) + " svelte-1idtjrs"), f(n, "style", t[2]);
    },
    m(o, u) {
      q(o, n, u), g(n, e);
    },
    p(o, u) {
      u & 1 && z(e, o[0]), u & 2 && r !== (r = en(`circle-text ${o[1]}`) + " svelte-1idtjrs") && f(n, "class", r), u & 4 && f(n, "style", o[2]);
    },
    i: k,
    o: k,
    d(o) {
      o && j(n);
    }
  };
}
function nt(t) {
  let n, e, r, o, u;
  const s = [$n, Yn], i = [];
  function d(a, p) {
    return a[4].default ? 1 : 0;
  }
  return e = d(t), r = i[e] = s[e](t), {
    c() {
      n = b("div"), r.c(), f(n, "class", "leaf-circle svelte-1idtjrs"), f(n, "style", o = O(t[3]));
    },
    m(a, p) {
      q(a, n, p), i[e].m(n, null), u = !0;
    },
    p(a, [p]) {
      let c = e;
      e = d(a), e === c ? i[e].p(a, p) : (Tn(), $(i[c], 1, 1, () => {
        i[c] = null;
      }), Bn(), r = i[e], r ? r.p(a, p) : (r = i[e] = s[e](a), r.c()), K(r, 1), r.m(n, null)), (!u || p & 8 && o !== (o = O(a[3]))) && f(n, "style", o);
    },
    i(a) {
      u || (K(r), u = !0);
    },
    o(a) {
      $(r), u = !1;
    },
    d(a) {
      a && j(n), i[e].d();
    }
  };
}
function tt(t, n, e) {
  let r, o, u, { $$slots: s = {}, $$scope: i } = n;
  const d = vn(s);
  let { radius: a = 10 } = n, { radiusUnit: p = "px" } = n, { text: c = "" } = n, { textClass: l = "" } = n, { textStyle: w = "" } = n, { bg: y = "gray" } = n;
  return t.$$set = (m) => {
    "radius" in m && e(5, a = m.radius), "radiusUnit" in m && e(6, p = m.radiusUnit), "text" in m && e(0, c = m.text), "textClass" in m && e(1, l = m.textClass), "textStyle" in m && e(2, w = m.textStyle), "bg" in m && e(7, y = m.bg), "$$scope" in m && e(10, i = m.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & 32 && e(9, r = a * 2), t.$$.dirty & 576 && e(8, o = r + p), t.$$.dirty & 384 && e(3, u = {
      width: o,
      height: o,
      ["background-color"]: y
    });
  }, [
    c,
    l,
    w,
    u,
    d,
    a,
    p,
    y,
    o,
    r,
    i,
    s
  ];
}
class kt extends B {
  constructor(n) {
    super(), T(
      this,
      n,
      tt,
      nt,
      F,
      {
        radius: 5,
        radiusUnit: 6,
        text: 0,
        textClass: 1,
        textStyle: 2,
        bg: 7
      },
      Vn
    );
  }
}
function et(t) {
  E(t, "svelte-lbf4pc", ".svelte-lbf4pc.svelte-lbf4pc,.svelte-lbf4pc.svelte-lbf4pc::before,.svelte-lbf4pc.svelte-lbf4pc::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.svelte-lbf4pc.svelte-lbf4pc::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.bg-\\#000000.svelte-lbf4pc.svelte-lbf4pc{--un-bg-opacity:1;background-color:rgba(0, 0, 0, var(--un-bg-opacity))}.text-white.svelte-lbf4pc.svelte-lbf4pc{--un-text-opacity:1;color:rgba(255, 255, 255, var(--un-text-opacity))}.tail-toast.svelte-lbf4pc.svelte-lbf4pc{position:absolute;left:0;right:0;top:0;bottom:0;background-color:rgba(0, 0, 0, 0.7);display:flex;justify-content:center;align-items:center}.tail-toast.svelte-lbf4pc .content.svelte-lbf4pc{margin:0 20px;display:flex;justify-content:center;align-items:center;padding:10px;border-radius:10px}");
}
function rt(t) {
  let n, e, r;
  return {
    c() {
      n = b("div"), e = b("div"), r = x(t[0]), f(e, "class", "content text-white bg-#000000 svelte-lbf4pc"), f(n, "class", "tail-toast svelte-lbf4pc");
    },
    m(o, u) {
      q(o, n, u), g(n, e), g(e, r);
    },
    p(o, [u]) {
      u & 1 && z(r, o[0]);
    },
    i: k,
    o: k,
    d(o) {
      o && j(n);
    }
  };
}
function ot(t, n, e) {
  let { content: r } = n;
  return t.$$set = (o) => {
    "content" in o && e(0, r = o.content);
  }, [r];
}
class ut extends B {
  constructor(n) {
    super(), T(this, n, ot, rt, F, { content: 0 }, et);
  }
}
const wt = (t, n = 2e3) => {
  const e = document.createElement("div");
  document.body.appendChild(e);
  const r = new ut({
    target: e,
    props: {
      content: t
    }
  });
  setTimeout(() => {
    r.$destroy();
  }, n);
};
function at(t) {
  E(t, "svelte-1iwnl3w", ".svelte-1iwnl3w.svelte-1iwnl3w,.svelte-1iwnl3w.svelte-1iwnl3w::before,.svelte-1iwnl3w.svelte-1iwnl3w::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.svelte-1iwnl3w.svelte-1iwnl3w::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.centerLayout.svelte-1iwnl3w.svelte-1iwnl3w{display:flex;align-items:center;justify-content:center}.notice-modal.svelte-1iwnl3w.svelte-1iwnl3w{z-index:999;position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5)}.notice-modal.svelte-1iwnl3w .notice-modal-content.svelte-1iwnl3w{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:290px;max-height:80%;filter:blur(10);background:#F9F9F9;border-radius:12px}.notice-modal.svelte-1iwnl3w .notice-modal-content .modal-content-body.svelte-1iwnl3w{box-sizing:border-box;margin-top:0px;width:100%;font-size:16px;text-align:center;padding:20px}.notice-modal.svelte-1iwnl3w .notice-modal-content .modal-content-body .modal-title.svelte-1iwnl3w{font-family:PingFangSC-Semibold;font-size:17px;color:#000028;font-weight:bold;margin-bottom:15px}.notice-modal.svelte-1iwnl3w .notice-modal-content .modal-content-body .content.svelte-1iwnl3w{font-family:PingFangSC-Regular;font-size:14px;color:#000028;line-height:1.5;text-align:left}.notice-modal.svelte-1iwnl3w .notice-modal-content .notice-button-wrap.svelte-1iwnl3w{margin:0 20px;margin-bottom:20px;cursor:pointer}.notice-modal.svelte-1iwnl3w .notice-modal-content .notice-button-wrap .modal-button.svelte-1iwnl3w{height:48px;border-radius:8px;font-family:PingFangSC-Medium;font-size:14px;color:#FFFFFF;background:#FF6022}");
}
function st(t) {
  let n, e, r, o, u, s, i, d, a, p, c, l, w, y, m, h;
  return {
    c() {
      n = b("div"), e = b("div"), r = b("div"), o = b("div"), u = x(t[1]), s = P(), i = b("div"), d = b("div"), a = x(t[2]), p = P(), c = b("div"), l = b("div"), w = x(t[0]), f(o, "class", "modal-title svelte-1iwnl3w"), f(d, "class", "svelte-1iwnl3w"), f(i, "class", "content svelte-1iwnl3w"), f(r, "class", "modal-content-body svelte-1iwnl3w"), f(l, "class", "modal-button centerLayout svelte-1iwnl3w"), f(l, "style", y = O(t[3])), f(c, "class", "notice-button-wrap svelte-1iwnl3w"), f(e, "class", "notice-modal-content svelte-1iwnl3w"), f(n, "class", "notice-modal svelte-1iwnl3w");
    },
    m(v, _) {
      q(v, n, _), g(n, e), g(e, r), g(r, o), g(o, u), g(r, s), g(r, i), g(i, d), g(d, a), g(e, p), g(e, c), g(c, l), g(l, w), t[7](n), m || (h = W(l, "click", t[5]), m = !0);
    },
    p(v, [_]) {
      _ & 2 && z(u, v[1]), _ & 4 && z(a, v[2]), _ & 1 && z(w, v[0]), _ & 8 && y !== (y = O(v[3])) && f(l, "style", y);
    },
    i: k,
    o: k,
    d(v) {
      v && j(n), t[7](null), m = !1, h();
    }
  };
}
function it(t, n, e) {
  let { clickText: r = "\u6211\u77E5\u9053\u4E86" } = n, { title: o = "" } = n, { content: u = "" } = n, { btnStyle: s = "" } = n, { onClick: i = () => {
  } } = n;
  const d = fn();
  let a;
  const p = () => {
    i(), d("click");
  };
  function c(l) {
    M[l ? "unshift" : "push"](() => {
      a = l, e(4, a);
    });
  }
  return t.$$set = (l) => {
    "clickText" in l && e(0, r = l.clickText), "title" in l && e(1, o = l.title), "content" in l && e(2, u = l.content), "btnStyle" in l && e(3, s = l.btnStyle), "onClick" in l && e(6, i = l.onClick);
  }, [
    r,
    o,
    u,
    s,
    a,
    p,
    i,
    c
  ];
}
class ct extends B {
  constructor(n) {
    super(), T(
      this,
      n,
      it,
      st,
      F,
      {
        clickText: 0,
        title: 1,
        content: 2,
        btnStyle: 3,
        onClick: 6
      },
      at
    );
  }
}
const xt = (t) => {
  const n = document.createElement("div");
  document.body.appendChild(n);
  const e = new ct({
    target: n,
    props: {
      ...t
    }
  });
  e.$on("click", () => {
    e.$destroy();
  });
};
function lt(t) {
  E(t, "svelte-gcnicg", ".svelte-gcnicg.svelte-gcnicg,.svelte-gcnicg.svelte-gcnicg::before,.svelte-gcnicg.svelte-gcnicg::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.svelte-gcnicg.svelte-gcnicg::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.centerLayout.svelte-gcnicg.svelte-gcnicg{display:flex;align-items:center;justify-content:center}.confirm-modal.svelte-gcnicg.svelte-gcnicg{z-index:999;position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5)}.confirm-modal.svelte-gcnicg .confirm-modal-content.svelte-gcnicg{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:290px;max-height:80%;filter:blur(10);background:#F9F9F9;border-radius:12px}.confirm-modal.svelte-gcnicg .confirm-modal-content .modal-content-body.svelte-gcnicg{box-sizing:border-box;margin-top:0px;width:100%;font-size:16px;text-align:center;padding:20px}.confirm-modal.svelte-gcnicg .confirm-modal-content .modal-content-body .modal-title.svelte-gcnicg{font-family:PingFangSC-Semibold;font-size:17px;color:#000028;font-weight:bold;margin-bottom:15px}.confirm-modal.svelte-gcnicg .confirm-modal-content .modal-content-body .content.svelte-gcnicg{font-family:PingFangSC-Regular;font-size:14px;color:#000028;line-height:1.5;text-align:left}.confirm-modal.svelte-gcnicg .confirm-modal-content .confirm-button-wrap.svelte-gcnicg{margin:0 20px;margin-bottom:20px;display:flex;justify-content:space-between}.confirm-modal.svelte-gcnicg .confirm-modal-content .confirm-button-wrap .btn.svelte-gcnicg{width:121px;height:48px;border-radius:8px;font-family:PingFangSC-Medium;font-size:14px}.confirm-modal.svelte-gcnicg .confirm-modal-content .confirm-button-wrap .button-left.svelte-gcnicg{color:#848494;background:#FFFFFF;border:0.5px solid #E5E6EE}.confirm-modal.svelte-gcnicg .confirm-modal-content .confirm-button-wrap .button-right.svelte-gcnicg{color:#FFFFFF;background:#FF6022}");
}
function dt(t) {
  let n, e, r, o, u, s, i, d, a, p, c, l, w, y, m, h, v, _, A, R;
  return {
    c() {
      n = b("div"), e = b("div"), r = b("div"), o = b("div"), u = x(t[0]), s = P(), i = b("div"), d = b("div"), a = x(t[1]), p = P(), c = b("div"), l = b("div"), w = x(t[2]), m = P(), h = b("div"), v = x(t[3]), f(o, "class", "modal-title svelte-gcnicg"), f(d, "class", "svelte-gcnicg"), f(i, "class", "content svelte-gcnicg"), f(r, "class", "modal-content-body svelte-gcnicg"), f(l, "class", "btn button-left centerLayout svelte-gcnicg"), f(l, "style", y = O(t[4])), f(h, "class", "btn button-right centerLayout svelte-gcnicg"), f(h, "style", _ = O(t[5])), f(c, "class", "confirm-button-wrap svelte-gcnicg"), f(e, "class", "confirm-modal-content svelte-gcnicg"), f(n, "class", "confirm-modal svelte-gcnicg");
    },
    m(C, S) {
      q(C, n, S), g(n, e), g(e, r), g(r, o), g(o, u), g(r, s), g(r, i), g(i, d), g(d, a), g(e, p), g(e, c), g(c, l), g(l, w), g(c, m), g(c, h), g(h, v), t[11](n), A || (R = [
        W(l, "click", t[8]),
        W(h, "click", t[7])
      ], A = !0);
    },
    p(C, [S]) {
      S & 1 && z(u, C[0]), S & 2 && z(a, C[1]), S & 4 && z(w, C[2]), S & 16 && y !== (y = O(C[4])) && f(l, "style", y), S & 8 && z(v, C[3]), S & 32 && _ !== (_ = O(C[5])) && f(h, "style", _);
    },
    i: k,
    o: k,
    d(C) {
      C && j(n), t[11](null), A = !1, I(R);
    }
  };
}
function ft(t, n, e) {
  let { title: r = "" } = n, { content: o = "" } = n, { cancelText: u = "\u53D6\u6D88" } = n, { okText: s = "\u786E\u5B9A" } = n, { onCancel: i = () => {
  } } = n, { onOk: d = () => {
  } } = n, { cancelBtnStyle: a = "" } = n, { okBtnStyle: p = "" } = n;
  const c = fn();
  let l;
  const w = () => {
    d(), c("onOk");
  }, y = () => {
    i(), c("onCancel");
  };
  function m(h) {
    M[h ? "unshift" : "push"](() => {
      l = h, e(6, l);
    });
  }
  return t.$$set = (h) => {
    "title" in h && e(0, r = h.title), "content" in h && e(1, o = h.content), "cancelText" in h && e(2, u = h.cancelText), "okText" in h && e(3, s = h.okText), "onCancel" in h && e(9, i = h.onCancel), "onOk" in h && e(10, d = h.onOk), "cancelBtnStyle" in h && e(4, a = h.cancelBtnStyle), "okBtnStyle" in h && e(5, p = h.okBtnStyle);
  }, [
    r,
    o,
    u,
    s,
    a,
    p,
    l,
    w,
    y,
    i,
    d,
    m
  ];
}
class gt extends B {
  constructor(n) {
    super(), T(
      this,
      n,
      ft,
      dt,
      F,
      {
        title: 0,
        content: 1,
        cancelText: 2,
        okText: 3,
        onCancel: 9,
        onOk: 10,
        cancelBtnStyle: 4,
        okBtnStyle: 5
      },
      lt
    );
  }
}
const vt = (t) => {
  const n = window.document.createElement("div");
  document.body.appendChild(n);
  const e = new gt({
    target: n,
    props: {
      ...t
    }
  });
  return e.$on("onOk", () => {
    e.$destroy();
  }), e.$on("onCancel", () => {
    e.$destroy();
  }), e;
}, _t = (t) => {
  const { id: n, duration: e } = t, r = document.getElementById(n);
  if (!!r)
    return () => {
      const o = r.style.zIndex;
      r.style.boxShadow = "0 0 0 2000px rgba(0,0,0,0.62)", r.style.zIndex = "1000";
      const u = r.style.position;
      r.style.position = u === "static" ? "relative" : u, setTimeout(() => {
        r.style.boxShadow = "", r.style.zIndex = o, r.style.position = u;
      }, e * 1e3);
    };
};
export {
  kt as Circle,
  pt as Counter,
  bt as Counter2,
  ht as Marquee,
  mt as StepMask,
  yt as ToggleButton,
  vt as confirm,
  _t as mask,
  xt as notice,
  wt as toast
};

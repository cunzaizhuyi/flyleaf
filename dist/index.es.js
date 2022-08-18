function m() {
}
function $(t) {
  return t();
}
function J() {
  return /* @__PURE__ */ Object.create(null);
}
function A(t) {
  t.forEach($);
}
function tn(t) {
  return typeof t == "function";
}
function E(t, n) {
  return t != t ? n == n : t !== n || t && typeof t == "object" || typeof t == "function";
}
function en(t) {
  return Object.keys(t).length === 0;
}
function l(t, n) {
  t.appendChild(n);
}
function T(t, n, e) {
  const o = on(t);
  if (!o.getElementById(n)) {
    const r = f("style");
    r.id = n, r.textContent = e, rn(o, r);
  }
}
function on(t) {
  if (!t)
    return document;
  const n = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return n && n.host ? n : t.ownerDocument;
}
function rn(t, n) {
  l(t.head || t, n);
}
function C(t, n, e) {
  t.insertBefore(n, e || null);
}
function _(t) {
  t.parentNode.removeChild(t);
}
function K(t, n) {
  for (let e = 0; e < t.length; e += 1)
    t[e] && t[e].d(n);
}
function f(t) {
  return document.createElement(t);
}
function h(t) {
  return document.createTextNode(t);
}
function q() {
  return h(" ");
}
function N(t, n, e, o) {
  return t.addEventListener(n, e, o), () => t.removeEventListener(n, e, o);
}
function p(t, n, e) {
  e == null ? t.removeAttribute(n) : t.getAttribute(n) !== e && t.setAttribute(n, e);
}
function an(t) {
  return Array.from(t.childNodes);
}
function v(t, n) {
  n = "" + n, t.wholeText !== n && (t.data = n);
}
function R(t, n, e, o) {
  e === null ? t.style.removeProperty(n) : t.style.setProperty(n, e, o ? "important" : "");
}
function un(t, n, { bubbles: e = !1, cancelable: o = !1 } = {}) {
  const r = document.createEvent("CustomEvent");
  return r.initCustomEvent(t, e, o, n), r;
}
let M;
function L(t) {
  M = t;
}
function sn() {
  if (!M)
    throw new Error("Function called outside component initialization");
  return M;
}
function cn() {
  const t = sn();
  return (n, e, { cancelable: o = !1 } = {}) => {
    const r = t.$$.callbacks[n];
    if (r) {
      const i = un(n, e, { cancelable: o });
      return r.slice().forEach((s) => {
        s.call(t, i);
      }), !i.defaultPrevented;
    }
    return !0;
  };
}
function ln(t, n) {
  const e = t.$$.callbacks[n.type];
  e && e.slice().forEach((o) => o.call(this, n));
}
const P = [], Q = [], B = [], U = [], dn = Promise.resolve();
let I = !1;
function gn() {
  I || (I = !0, dn.then(nn));
}
function G(t) {
  B.push(t);
}
const X = /* @__PURE__ */ new Set();
let D = 0;
function nn() {
  const t = M;
  do {
    for (; D < P.length; ) {
      const n = P[D];
      D++, L(n), fn(n.$$);
    }
    for (L(null), P.length = 0, D = 0; Q.length; )
      Q.pop()();
    for (let n = 0; n < B.length; n += 1) {
      const e = B[n];
      X.has(e) || (X.add(e), e());
    }
    B.length = 0;
  } while (P.length);
  for (; U.length; )
    U.pop()();
  I = !1, X.clear(), L(t);
}
function fn(t) {
  if (t.fragment !== null) {
    t.update(), A(t.before_update);
    const n = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, n), t.after_update.forEach(G);
  }
}
const pn = /* @__PURE__ */ new Set();
function bn(t, n) {
  t && t.i && (pn.delete(t), t.i(n));
}
function hn(t, n, e, o) {
  const { fragment: r, on_mount: i, on_destroy: s, after_update: c } = t.$$;
  r && r.m(n, e), o || G(() => {
    const d = i.map($).filter(tn);
    s ? s.push(...d) : A(d), t.$$.on_mount = [];
  }), c.forEach(G);
}
function mn(t, n) {
  const e = t.$$;
  e.fragment !== null && (A(e.on_destroy), e.fragment && e.fragment.d(n), e.on_destroy = e.fragment = null, e.ctx = []);
}
function vn(t, n) {
  t.$$.dirty[0] === -1 && (P.push(t), gn(), t.$$.dirty.fill(0)), t.$$.dirty[n / 31 | 0] |= 1 << n % 31;
}
function S(t, n, e, o, r, i, s, c = [-1]) {
  const d = M;
  L(t);
  const a = t.$$ = {
    fragment: null,
    ctx: null,
    props: i,
    update: m,
    not_equal: r,
    bound: J(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(n.context || (d ? d.$$.context : [])),
    callbacks: J(),
    dirty: c,
    skip_bound: !1,
    root: n.target || d.$$.root
  };
  s && s(a.root);
  let b = !1;
  if (a.ctx = e ? e(t, n.props || {}, (u, g, ...y) => {
    const k = y.length ? y[0] : g;
    return a.ctx && r(a.ctx[u], a.ctx[u] = k) && (!a.skip_bound && a.bound[u] && a.bound[u](k), b && vn(t, u)), g;
  }) : [], a.update(), b = !0, A(a.before_update), a.fragment = o ? o(a.ctx) : !1, n.target) {
    if (n.hydrate) {
      const u = an(n.target);
      a.fragment && a.fragment.l(u), u.forEach(_);
    } else
      a.fragment && a.fragment.c();
    n.intro && bn(t.$$.fragment), hn(t, n.target, n.anchor, n.customElement), nn();
  }
  L(d);
}
class O {
  $destroy() {
    mn(this, 1), this.$destroy = m;
  }
  $on(n, e) {
    const o = this.$$.callbacks[n] || (this.$$.callbacks[n] = []);
    return o.push(e), () => {
      const r = o.indexOf(e);
      r !== -1 && o.splice(r, 1);
    };
  }
  $set(n) {
    this.$$set && !en(n) && (this.$$.skip_bound = !0, this.$$set(n), this.$$.skip_bound = !1);
  }
}
function wn(t) {
  T(t, "svelte-1etnm5k", ".svelte-1etnm5k,.svelte-1etnm5k::before,.svelte-1etnm5k::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.svelte-1etnm5k::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.bg-black.svelte-1etnm5k{--un-bg-opacity:1;background-color:rgba(0,0,0,var(--un-bg-opacity))}.text-white.svelte-1etnm5k{--un-text-opacity:1;color:rgba(255,255,255,var(--un-text-opacity))}");
}
function yn(t) {
  let n, e, o, r, i;
  return {
    c() {
      n = f("button"), e = h("count is "), o = h(t[0]), p(n, "class", "bg-black text-white svelte-1etnm5k");
    },
    m(s, c) {
      C(s, n, c), l(n, e), l(n, o), r || (i = N(n, "click", t[1]), r = !0);
    },
    p(s, [c]) {
      c & 1 && v(o, s[0]);
    },
    i: m,
    o: m,
    d(s) {
      s && _(n), r = !1, i();
    }
  };
}
function kn(t, n, e) {
  let o = 0;
  return [o, () => {
    e(0, o += 1);
  }];
}
class Bn extends O {
  constructor(n) {
    super(), S(this, n, kn, yn, E, {}, wn);
  }
}
function xn(t) {
  T(t, "svelte-1lydoww", ".svelte-1lydoww,.svelte-1lydoww::before,.svelte-1lydoww::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.svelte-1lydoww::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.bg-red.svelte-1lydoww{--un-bg-opacity:1;background-color:rgba(248,113,113,var(--un-bg-opacity))}.text-white.svelte-1lydoww{--un-text-opacity:1;color:rgba(255,255,255,var(--un-text-opacity))}.btn.svelte-1lydoww{border:8px solid #35eb9a}");
}
function _n(t) {
  let n, e, o, r, i;
  return {
    c() {
      n = f("button"), e = h("count is "), o = h(t[0]), p(n, "class", "btn bg-red text-white svelte-1lydoww");
    },
    m(s, c) {
      C(s, n, c), l(n, e), l(n, o), r || (i = N(n, "click", t[1]), r = !0);
    },
    p(s, [c]) {
      c & 1 && v(o, s[0]);
    },
    i: m,
    o: m,
    d(s) {
      s && _(n), r = !1, i();
    }
  };
}
function zn(t, n, e) {
  let o = 0;
  return [o, () => {
    e(0, o += 2);
  }];
}
class Xn extends O {
  constructor(n) {
    super(), S(this, n, zn, _n, E, {}, xn);
  }
}
function Fn(t) {
  T(t, "svelte-1cqo505", ".svelte-1cqo505.svelte-1cqo505,.svelte-1cqo505.svelte-1cqo505::before,.svelte-1cqo505.svelte-1cqo505::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.svelte-1cqo505.svelte-1cqo505::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }@keyframes svelte-1cqo505-scroll{from{transform:translateX(0)}to{transform:translateX(calc(-100% - var(--tail-gap)))}}.marquee.svelte-1cqo505.svelte-1cqo505{display:flex;overflow:hidden;user-select:none;gap:var(--tail-gap)}.marquee.svelte-1cqo505 .marquee_content.svelte-1cqo505{flex-shrink:0;display:flex;justify-content:space-around;min-width:100%;gap:var(--tail-gap);animation-name:svelte-1cqo505-scroll;animation-duration:var(--tail-speed);animation-iteration-count:infinite;animation-timing-function:linear}");
}
function V(t, n, e) {
  const o = t.slice();
  return o[3] = n[e], o;
}
function W(t, n, e) {
  const o = t.slice();
  return o[3] = n[e], o;
}
function Y(t) {
  let n, e = t[3] + "", o;
  return {
    c() {
      n = f("div"), o = h(e), p(n, "class", "svelte-1cqo505");
    },
    m(r, i) {
      C(r, n, i), l(n, o);
    },
    p(r, i) {
      i & 1 && e !== (e = r[3] + "") && v(o, e);
    },
    d(r) {
      r && _(n);
    }
  };
}
function Z(t) {
  let n, e = t[3] + "", o;
  return {
    c() {
      n = f("div"), o = h(e), p(n, "class", "svelte-1cqo505");
    },
    m(r, i) {
      C(r, n, i), l(n, o);
    },
    p(r, i) {
      i & 1 && e !== (e = r[3] + "") && v(o, e);
    },
    d(r) {
      r && _(n);
    }
  };
}
function Cn(t) {
  let n, e, o, r, i = t[0], s = [];
  for (let a = 0; a < i.length; a += 1)
    s[a] = Y(W(t, i, a));
  let c = t[0], d = [];
  for (let a = 0; a < c.length; a += 1)
    d[a] = Z(V(t, c, a));
  return {
    c() {
      n = f("div"), e = f("div");
      for (let a = 0; a < s.length; a += 1)
        s[a].c();
      o = q(), r = f("div");
      for (let a = 0; a < d.length; a += 1)
        d[a].c();
      p(e, "class", "marquee_content svelte-1cqo505"), p(r, "class", "marquee_content svelte-1cqo505"), p(r, "aria-hidden", "true"), p(n, "class", "marquee svelte-1cqo505"), R(n, "--tail-gap", t[1]), R(n, "--tail-speed", t[2]);
    },
    m(a, b) {
      C(a, n, b), l(n, e);
      for (let u = 0; u < s.length; u += 1)
        s[u].m(e, null);
      l(n, o), l(n, r);
      for (let u = 0; u < d.length; u += 1)
        d[u].m(r, null);
    },
    p(a, [b]) {
      if (b & 1) {
        i = a[0];
        let u;
        for (u = 0; u < i.length; u += 1) {
          const g = W(a, i, u);
          s[u] ? s[u].p(g, b) : (s[u] = Y(g), s[u].c(), s[u].m(e, null));
        }
        for (; u < s.length; u += 1)
          s[u].d(1);
        s.length = i.length;
      }
      if (b & 1) {
        c = a[0];
        let u;
        for (u = 0; u < c.length; u += 1) {
          const g = V(a, c, u);
          d[u] ? d[u].p(g, b) : (d[u] = Z(g), d[u].c(), d[u].m(r, null));
        }
        for (; u < d.length; u += 1)
          d[u].d(1);
        d.length = c.length;
      }
      b & 2 && R(n, "--tail-gap", a[1]), b & 4 && R(n, "--tail-speed", a[2]);
    },
    i: m,
    o: m,
    d(a) {
      a && _(n), K(s, a), K(d, a);
    }
  };
}
function jn(t, n, e) {
  let { data: o = [] } = n, { gap: r = "60px" } = n, { speed: i = "5s" } = n;
  return t.$$set = (s) => {
    "data" in s && e(0, o = s.data), "gap" in s && e(1, r = s.gap), "speed" in s && e(2, i = s.speed);
  }, [o, r, i];
}
class In extends O {
  constructor(n) {
    super(), S(this, n, jn, Cn, E, { data: 0, gap: 1, speed: 2 }, Fn);
  }
}
function qn(t) {
  T(t, "svelte-oof29j", ".svelte-oof29j.svelte-oof29j,.svelte-oof29j.svelte-oof29j::before,.svelte-oof29j.svelte-oof29j::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.svelte-oof29j.svelte-oof29j::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.bg-\\#000000.svelte-oof29j.svelte-oof29j{--un-bg-opacity:1;background-color:rgba(0, 0, 0, var(--un-bg-opacity))}.text-white.svelte-oof29j.svelte-oof29j{--un-text-opacity:1;color:rgba(255, 255, 255, var(--un-text-opacity))}.tail-toast.svelte-oof29j.svelte-oof29j{position:absolute;left:0;right:0;top:0;bottom:0;background-color:rgba(0, 0, 0, 0.8);display:flex;justify-content:center;align-items:center}.tail-toast.svelte-oof29j .content.svelte-oof29j{margin:0 20px;display:flex;justify-content:center;align-items:center;padding:10px;border-radius:10px}");
}
function En(t) {
  let n, e, o;
  return {
    c() {
      n = f("div"), e = f("div"), o = h(t[0]), p(e, "class", "content text-white bg-#000000 svelte-oof29j"), p(n, "class", "tail-toast svelte-oof29j");
    },
    m(r, i) {
      C(r, n, i), l(n, e), l(e, o);
    },
    p(r, [i]) {
      i & 1 && v(o, r[0]);
    },
    i: m,
    o: m,
    d(r) {
      r && _(n);
    }
  };
}
function Tn(t, n, e) {
  let { content: o } = n;
  return t.$$set = (r) => {
    "content" in r && e(0, o = r.content);
  }, [o];
}
class Sn extends O {
  constructor(n) {
    super(), S(this, n, Tn, En, E, { content: 0 }, qn);
  }
}
const Gn = (t, n = 2e3) => {
  const e = document.createElement("div");
  document.body.appendChild(e);
  const o = new Sn({
    target: e,
    props: {
      content: t
    }
  });
  setTimeout(() => {
    o.$destroy();
  }, n);
};
function On(t) {
  T(t, "svelte-1iwnl3w", ".svelte-1iwnl3w.svelte-1iwnl3w,.svelte-1iwnl3w.svelte-1iwnl3w::before,.svelte-1iwnl3w.svelte-1iwnl3w::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.svelte-1iwnl3w.svelte-1iwnl3w::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.centerLayout.svelte-1iwnl3w.svelte-1iwnl3w{display:flex;align-items:center;justify-content:center}.notice-modal.svelte-1iwnl3w.svelte-1iwnl3w{z-index:999;position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5)}.notice-modal.svelte-1iwnl3w .notice-modal-content.svelte-1iwnl3w{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:290px;max-height:80%;filter:blur(10);background:#F9F9F9;border-radius:12px}.notice-modal.svelte-1iwnl3w .notice-modal-content .modal-content-body.svelte-1iwnl3w{box-sizing:border-box;margin-top:0px;width:100%;font-size:16px;text-align:center;padding:20px}.notice-modal.svelte-1iwnl3w .notice-modal-content .modal-content-body .modal-title.svelte-1iwnl3w{font-family:PingFangSC-Semibold;font-size:17px;color:#000028;font-weight:bold;margin-bottom:15px}.notice-modal.svelte-1iwnl3w .notice-modal-content .modal-content-body .content.svelte-1iwnl3w{font-family:PingFangSC-Regular;font-size:14px;color:#000028;line-height:1.5;text-align:left}.notice-modal.svelte-1iwnl3w .notice-modal-content .notice-button-wrap.svelte-1iwnl3w{margin:0 20px;margin-bottom:20px;cursor:pointer}.notice-modal.svelte-1iwnl3w .notice-modal-content .notice-button-wrap .modal-button.svelte-1iwnl3w{height:48px;border-radius:8px;font-family:PingFangSC-Medium;font-size:14px;color:#FFFFFF;background:#FF6022}");
}
function Pn(t) {
  let n, e, o, r, i, s, c, d, a, b, u, g, y, k, z;
  return {
    c() {
      n = f("div"), e = f("div"), o = f("div"), r = f("div"), i = h(t[1]), s = q(), c = f("div"), d = f("div"), a = h(t[2]), b = q(), u = f("div"), g = f("div"), y = h(t[0]), p(r, "class", "modal-title svelte-1iwnl3w"), p(d, "class", "svelte-1iwnl3w"), p(c, "class", "content svelte-1iwnl3w"), p(o, "class", "modal-content-body svelte-1iwnl3w"), p(g, "class", "modal-button centerLayout svelte-1iwnl3w"), p(u, "class", "notice-button-wrap svelte-1iwnl3w"), p(e, "class", "notice-modal-content svelte-1iwnl3w"), p(n, "class", "notice-modal svelte-1iwnl3w");
    },
    m(w, x) {
      C(w, n, x), l(n, e), l(e, o), l(o, r), l(r, i), l(o, s), l(o, c), l(c, d), l(d, a), l(e, b), l(e, u), l(u, g), l(g, y), k || (z = N(g, "click", t[3]), k = !0);
    },
    p(w, [x]) {
      x & 2 && v(i, w[1]), x & 4 && v(a, w[2]), x & 1 && v(y, w[0]);
    },
    i: m,
    o: m,
    d(w) {
      w && _(n), k = !1, z();
    }
  };
}
function Ln(t, n, e) {
  let { clickText: o = "\u6211\u77E5\u9053\u4E86" } = n, { title: r = "" } = n, { content: i = "" } = n;
  function s(c) {
    ln.call(this, t, c);
  }
  return t.$$set = (c) => {
    "clickText" in c && e(0, o = c.clickText), "title" in c && e(1, r = c.title), "content" in c && e(2, i = c.content);
  }, [o, r, i, s];
}
class Nn extends O {
  constructor(n) {
    super(), S(this, n, Ln, Pn, E, { clickText: 0, title: 1, content: 2 }, On);
  }
}
const Hn = (t) => {
  const n = document.createElement("div");
  document.body.appendChild(n);
  const e = new Nn({
    target: n,
    props: {
      ...t
    }
  });
  e.$on("click", () => {
    t.onClick && t.onClick(), e.$destroy();
  });
};
function Mn(t) {
  T(t, "svelte-gcnicg", ".svelte-gcnicg.svelte-gcnicg,.svelte-gcnicg.svelte-gcnicg::before,.svelte-gcnicg.svelte-gcnicg::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.svelte-gcnicg.svelte-gcnicg::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.centerLayout.svelte-gcnicg.svelte-gcnicg{display:flex;align-items:center;justify-content:center}.confirm-modal.svelte-gcnicg.svelte-gcnicg{z-index:999;position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5)}.confirm-modal.svelte-gcnicg .confirm-modal-content.svelte-gcnicg{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:290px;max-height:80%;filter:blur(10);background:#F9F9F9;border-radius:12px}.confirm-modal.svelte-gcnicg .confirm-modal-content .modal-content-body.svelte-gcnicg{box-sizing:border-box;margin-top:0px;width:100%;font-size:16px;text-align:center;padding:20px}.confirm-modal.svelte-gcnicg .confirm-modal-content .modal-content-body .modal-title.svelte-gcnicg{font-family:PingFangSC-Semibold;font-size:17px;color:#000028;font-weight:bold;margin-bottom:15px}.confirm-modal.svelte-gcnicg .confirm-modal-content .modal-content-body .content.svelte-gcnicg{font-family:PingFangSC-Regular;font-size:14px;color:#000028;line-height:1.5;text-align:left}.confirm-modal.svelte-gcnicg .confirm-modal-content .confirm-button-wrap.svelte-gcnicg{margin:0 20px;margin-bottom:20px;display:flex;justify-content:space-between}.confirm-modal.svelte-gcnicg .confirm-modal-content .confirm-button-wrap .btn.svelte-gcnicg{width:121px;height:48px;border-radius:8px;font-family:PingFangSC-Medium;font-size:14px}.confirm-modal.svelte-gcnicg .confirm-modal-content .confirm-button-wrap .button-left.svelte-gcnicg{color:#848494;background:#FFFFFF;border:0.5px solid #E5E6EE}.confirm-modal.svelte-gcnicg .confirm-modal-content .confirm-button-wrap .button-right.svelte-gcnicg{color:#FFFFFF;background:#FF6022}");
}
function An(t) {
  let n, e, o, r, i, s, c, d, a, b, u, g, y, k, z, w, x, H;
  return {
    c() {
      n = f("div"), e = f("div"), o = f("div"), r = f("div"), i = h(t[0]), s = q(), c = f("div"), d = f("div"), a = h(t[1]), b = q(), u = f("div"), g = f("div"), y = h(t[2]), k = q(), z = f("div"), w = h(t[3]), p(r, "class", "modal-title svelte-gcnicg"), p(d, "class", "svelte-gcnicg"), p(c, "class", "content svelte-gcnicg"), p(o, "class", "modal-content-body svelte-gcnicg"), p(g, "class", "btn button-left centerLayout svelte-gcnicg"), p(z, "class", "btn button-right centerLayout svelte-gcnicg"), p(u, "class", "confirm-button-wrap svelte-gcnicg"), p(e, "class", "confirm-modal-content svelte-gcnicg"), p(n, "class", "confirm-modal svelte-gcnicg");
    },
    m(F, j) {
      C(F, n, j), l(n, e), l(e, o), l(o, r), l(r, i), l(o, s), l(o, c), l(c, d), l(d, a), l(e, b), l(e, u), l(u, g), l(g, y), l(u, k), l(u, z), l(z, w), x || (H = [
        N(g, "click", t[5]),
        N(z, "click", t[4])
      ], x = !0);
    },
    p(F, [j]) {
      j & 1 && v(i, F[0]), j & 2 && v(a, F[1]), j & 4 && v(y, F[2]), j & 8 && v(w, F[3]);
    },
    i: m,
    o: m,
    d(F) {
      F && _(n), x = !1, A(H);
    }
  };
}
function Rn(t, n, e) {
  let { title: o = "" } = n, { content: r = "" } = n, { cancelText: i = "\u53D6\u6D88" } = n, { okText: s = "\u786E\u5B9A" } = n, { onCancel: c = () => {
  } } = n, { onOk: d = () => {
  } } = n;
  const a = cn(), b = () => {
    d(), a("onOk");
  }, u = () => {
    c(), a("onCancel");
  };
  return t.$$set = (g) => {
    "title" in g && e(0, o = g.title), "content" in g && e(1, r = g.content), "cancelText" in g && e(2, i = g.cancelText), "okText" in g && e(3, s = g.okText), "onCancel" in g && e(6, c = g.onCancel), "onOk" in g && e(7, d = g.onOk);
  }, [o, r, i, s, b, u, c, d];
}
class Dn extends O {
  constructor(n) {
    super(), S(
      this,
      n,
      Rn,
      An,
      E,
      {
        title: 0,
        content: 1,
        cancelText: 2,
        okText: 3,
        onCancel: 6,
        onOk: 7
      },
      Mn
    );
  }
}
const Jn = (t) => {
  const n = window.document.createElement("div");
  document.body.appendChild(n);
  const e = new Dn({
    target: n,
    props: {
      ...t
    }
  });
  e.$on("onOk", () => {
    e.$destroy();
  }), e.$on("onCancel", () => {
    e.$destroy();
  });
};
export {
  Bn as Counter,
  Xn as Counter2,
  In as Marquee,
  Jn as confirm,
  Hn as notice,
  Gn as toast
};

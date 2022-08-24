function m() {
}
function $(t) {
  return t();
}
function G() {
  return /* @__PURE__ */ Object.create(null);
}
function I(t) {
  t.forEach($);
}
function on(t) {
  return typeof t == "function";
}
function q(t, n) {
  return t != t ? n == n : t !== n || t && typeof t == "object" || typeof t == "function";
}
function rn(t) {
  return Object.keys(t).length === 0;
}
function d(t, n) {
  t.appendChild(n);
}
function S(t, n, e) {
  const o = an(t);
  if (!o.getElementById(n)) {
    const a = f("style");
    a.id = n, a.textContent = e, un(o, a);
  }
}
function an(t) {
  if (!t)
    return document;
  const n = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return n && n.host ? n : t.ownerDocument;
}
function un(t, n) {
  d(t.head || t, n);
}
function j(t, n, e) {
  t.insertBefore(n, e || null);
}
function C(t) {
  t.parentNode.removeChild(t);
}
function J(t, n) {
  for (let e = 0; e < t.length; e += 1)
    t[e] && t[e].d(n);
}
function f(t) {
  return document.createElement(t);
}
function w(t) {
  return document.createTextNode(t);
}
function W() {
  return w(" ");
}
function A(t, n, e, o) {
  return t.addEventListener(n, e, o), () => t.removeEventListener(n, e, o);
}
function p(t, n, e) {
  e == null ? t.removeAttribute(n) : t.getAttribute(n) !== e && t.setAttribute(n, e);
}
function sn(t) {
  return Array.from(t.childNodes);
}
function x(t, n) {
  n = "" + n, t.wholeText !== n && (t.data = n);
}
function B(t, n, e, o) {
  e === null ? t.style.removeProperty(n) : t.style.setProperty(n, e, o ? "important" : "");
}
let Z;
function P(t) {
  Z = t;
}
const N = [], M = [], R = [], K = [], cn = Promise.resolve();
let D = !1;
function ln() {
  D || (D = !0, cn.then(nn));
}
function X(t) {
  R.push(t);
}
const H = /* @__PURE__ */ new Set();
let O = 0;
function nn() {
  const t = Z;
  do {
    for (; O < N.length; ) {
      const n = N[O];
      O++, P(n), dn(n.$$);
    }
    for (P(null), N.length = 0, O = 0; M.length; )
      M.pop()();
    for (let n = 0; n < R.length; n += 1) {
      const e = R[n];
      H.has(e) || (H.add(e), e());
    }
    R.length = 0;
  } while (N.length);
  for (; K.length; )
    K.pop()();
  D = !1, H.clear(), P(t);
}
function dn(t) {
  if (t.fragment !== null) {
    t.update(), I(t.before_update);
    const n = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, n), t.after_update.forEach(X);
  }
}
const gn = /* @__PURE__ */ new Set();
function fn(t, n) {
  t && t.i && (gn.delete(t), t.i(n));
}
function pn(t, n, e, o) {
  const { fragment: a, on_mount: s, on_destroy: i, after_update: c } = t.$$;
  a && a.m(n, e), o || X(() => {
    const l = s.map($).filter(on);
    i ? i.push(...l) : I(l), t.$$.on_mount = [];
  }), c.forEach(X);
}
function bn(t, n) {
  const e = t.$$;
  e.fragment !== null && (I(e.on_destroy), e.fragment && e.fragment.d(n), e.on_destroy = e.fragment = null, e.ctx = []);
}
function hn(t, n) {
  t.$$.dirty[0] === -1 && (N.push(t), ln(), t.$$.dirty.fill(0)), t.$$.dirty[n / 31 | 0] |= 1 << n % 31;
}
function T(t, n, e, o, a, s, i, c = [-1]) {
  const l = Z;
  P(t);
  const u = t.$$ = {
    fragment: null,
    ctx: null,
    props: s,
    update: m,
    not_equal: a,
    bound: G(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(n.context || (l ? l.$$.context : [])),
    callbacks: G(),
    dirty: c,
    skip_bound: !1,
    root: n.target || l.$$.root
  };
  i && i(u.root);
  let b = !1;
  if (u.ctx = e ? e(t, n.props || {}, (r, h, ...k) => {
    const g = k.length ? k[0] : h;
    return u.ctx && a(u.ctx[r], u.ctx[r] = g) && (!u.skip_bound && u.bound[r] && u.bound[r](g), b && hn(t, r)), h;
  }) : [], u.update(), b = !0, I(u.before_update), u.fragment = o ? o(u.ctx) : !1, n.target) {
    if (n.hydrate) {
      const r = sn(n.target);
      u.fragment && u.fragment.l(r), r.forEach(C);
    } else
      u.fragment && u.fragment.c();
    n.intro && fn(t.$$.fragment), pn(t, n.target, n.anchor, n.customElement), nn();
  }
  P(l);
}
class E {
  $destroy() {
    bn(this, 1), this.$destroy = m;
  }
  $on(n, e) {
    const o = this.$$.callbacks[n] || (this.$$.callbacks[n] = []);
    return o.push(e), () => {
      const a = o.indexOf(e);
      a !== -1 && o.splice(a, 1);
    };
  }
  $set(n) {
    this.$$set && !rn(n) && (this.$$.skip_bound = !0, this.$$set(n), this.$$.skip_bound = !1);
  }
}
function mn(t) {
  S(t, "svelte-1etnm5k", ".svelte-1etnm5k,.svelte-1etnm5k::before,.svelte-1etnm5k::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.svelte-1etnm5k::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.bg-black.svelte-1etnm5k{--un-bg-opacity:1;background-color:rgba(0,0,0,var(--un-bg-opacity))}.text-white.svelte-1etnm5k{--un-text-opacity:1;color:rgba(255,255,255,var(--un-text-opacity))}");
}
function yn(t) {
  let n, e, o, a, s;
  return {
    c() {
      n = f("button"), e = w("count is "), o = w(t[0]), p(n, "class", "bg-black text-white svelte-1etnm5k");
    },
    m(i, c) {
      j(i, n, c), d(n, e), d(n, o), a || (s = A(n, "click", t[1]), a = !0);
    },
    p(i, [c]) {
      c & 1 && x(o, i[0]);
    },
    i: m,
    o: m,
    d(i) {
      i && C(n), a = !1, s();
    }
  };
}
function wn(t, n, e) {
  let o = 0;
  return [o, () => {
    e(0, o += 1);
  }];
}
class Rn extends E {
  constructor(n) {
    super(), T(this, n, wn, yn, q, {}, mn);
  }
}
function kn(t) {
  S(t, "svelte-1lydoww", ".svelte-1lydoww,.svelte-1lydoww::before,.svelte-1lydoww::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.svelte-1lydoww::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.bg-red.svelte-1lydoww{--un-bg-opacity:1;background-color:rgba(248,113,113,var(--un-bg-opacity))}.text-white.svelte-1lydoww{--un-text-opacity:1;color:rgba(255,255,255,var(--un-text-opacity))}.btn.svelte-1lydoww{border:8px solid #35eb9a}");
}
function vn(t) {
  let n, e, o, a, s;
  return {
    c() {
      n = f("button"), e = w("count is "), o = w(t[0]), p(n, "class", "btn bg-red text-white svelte-1lydoww");
    },
    m(i, c) {
      j(i, n, c), d(n, e), d(n, o), a || (s = A(n, "click", t[1]), a = !0);
    },
    p(i, [c]) {
      c & 1 && x(o, i[0]);
    },
    i: m,
    o: m,
    d(i) {
      i && C(n), a = !1, s();
    }
  };
}
function xn(t, n, e) {
  let o = 0;
  return [o, () => {
    e(0, o += 2);
  }];
}
class Hn extends E {
  constructor(n) {
    super(), T(this, n, xn, vn, q, {}, kn);
  }
}
function _n(t) {
  S(t, "svelte-1cqo505", ".svelte-1cqo505.svelte-1cqo505,.svelte-1cqo505.svelte-1cqo505::before,.svelte-1cqo505.svelte-1cqo505::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.svelte-1cqo505.svelte-1cqo505::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }@keyframes svelte-1cqo505-scroll{from{transform:translateX(0)}to{transform:translateX(calc(-100% - var(--tail-gap)))}}.marquee.svelte-1cqo505.svelte-1cqo505{display:flex;overflow:hidden;user-select:none;gap:var(--tail-gap)}.marquee.svelte-1cqo505 .marquee_content.svelte-1cqo505{flex-shrink:0;display:flex;justify-content:space-around;min-width:100%;gap:var(--tail-gap);animation-name:svelte-1cqo505-scroll;animation-duration:var(--tail-speed);animation-iteration-count:infinite;animation-timing-function:linear}");
}
function Q(t, n, e) {
  const o = t.slice();
  return o[3] = n[e], o;
}
function U(t, n, e) {
  const o = t.slice();
  return o[3] = n[e], o;
}
function V(t) {
  let n, e = t[3] + "", o;
  return {
    c() {
      n = f("div"), o = w(e), p(n, "class", "svelte-1cqo505");
    },
    m(a, s) {
      j(a, n, s), d(n, o);
    },
    p(a, s) {
      s & 1 && e !== (e = a[3] + "") && x(o, e);
    },
    d(a) {
      a && C(n);
    }
  };
}
function Y(t) {
  let n, e = t[3] + "", o;
  return {
    c() {
      n = f("div"), o = w(e), p(n, "class", "svelte-1cqo505");
    },
    m(a, s) {
      j(a, n, s), d(n, o);
    },
    p(a, s) {
      s & 1 && e !== (e = a[3] + "") && x(o, e);
    },
    d(a) {
      a && C(n);
    }
  };
}
function zn(t) {
  let n, e, o, a, s = t[0], i = [];
  for (let u = 0; u < s.length; u += 1)
    i[u] = V(U(t, s, u));
  let c = t[0], l = [];
  for (let u = 0; u < c.length; u += 1)
    l[u] = Y(Q(t, c, u));
  return {
    c() {
      n = f("div"), e = f("div");
      for (let u = 0; u < i.length; u += 1)
        i[u].c();
      o = W(), a = f("div");
      for (let u = 0; u < l.length; u += 1)
        l[u].c();
      p(e, "class", "marquee_content svelte-1cqo505"), p(a, "class", "marquee_content svelte-1cqo505"), p(a, "aria-hidden", "true"), p(n, "class", "marquee svelte-1cqo505"), B(n, "--tail-gap", t[1]), B(n, "--tail-speed", t[2]);
    },
    m(u, b) {
      j(u, n, b), d(n, e);
      for (let r = 0; r < i.length; r += 1)
        i[r].m(e, null);
      d(n, o), d(n, a);
      for (let r = 0; r < l.length; r += 1)
        l[r].m(a, null);
    },
    p(u, [b]) {
      if (b & 1) {
        s = u[0];
        let r;
        for (r = 0; r < s.length; r += 1) {
          const h = U(u, s, r);
          i[r] ? i[r].p(h, b) : (i[r] = V(h), i[r].c(), i[r].m(e, null));
        }
        for (; r < i.length; r += 1)
          i[r].d(1);
        i.length = s.length;
      }
      if (b & 1) {
        c = u[0];
        let r;
        for (r = 0; r < c.length; r += 1) {
          const h = Q(u, c, r);
          l[r] ? l[r].p(h, b) : (l[r] = Y(h), l[r].c(), l[r].m(a, null));
        }
        for (; r < l.length; r += 1)
          l[r].d(1);
        l.length = c.length;
      }
      b & 2 && B(n, "--tail-gap", u[1]), b & 4 && B(n, "--tail-speed", u[2]);
    },
    i: m,
    o: m,
    d(u) {
      u && C(n), J(i, u), J(l, u);
    }
  };
}
function Cn(t, n, e) {
  let { data: o = [] } = n, { gap: a = "60px" } = n, { speed: s = "5s" } = n;
  return t.$$set = (i) => {
    "data" in i && e(0, o = i.data), "gap" in i && e(1, a = i.gap), "speed" in i && e(2, s = i.speed);
  }, [o, a, s];
}
class Dn extends E {
  constructor(n) {
    super(), T(this, n, Cn, zn, q, { data: 0, gap: 1, speed: 2 }, _n);
  }
}
function Fn(t) {
  S(t, "svelte-120kxvy", '.svelte-120kxvy,.svelte-120kxvy::before,.svelte-120kxvy::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.svelte-120kxvy::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.mask-tip.svelte-120kxvy{min-width:175px;text-align:center;border:1px solid #005ea6;border-radius:8px;padding:5px 10px;position:absolute;background:white;transform:translateX(-50%)}.mask-tip.svelte-120kxvy:before{content:"";width:10px;height:10px;border:1px solid #005ea6;background:white;position:absolute;transform:rotate(45deg);top:-6px;left:calc(50% - 5px);border-right-width:0;border-bottom-width:0}.mask-tip-desc.svelte-120kxvy{display:block;margin-bottom:10px}.mask-tip-btn.svelte-120kxvy{border-radius:4px;padding:6px;border:none;background-color:#005ea6;cursor:pointer;color:white}');
}
function jn(t) {
  let n, e;
  return {
    c() {
      n = f("div"), e = f("div"), e.innerHTML = `<span id="mask-desc" class="mask-tip-desc svelte-120kxvy"></span> 
    <button id="next-step-btn" class="mask-tip-btn svelte-120kxvy">\u4E0B\u4E00\u6B65</button>`, p(e, "class", "mask-tip svelte-120kxvy"), B(n, "display", "none"), p(n, "class", "svelte-120kxvy");
    },
    m(o, a) {
      j(o, n, a), d(n, e), t[5](e), t[6](n);
    },
    p: m,
    i: m,
    o: m,
    d(o) {
      o && C(n), t[5](null), t[6](null);
    }
  };
}
function qn(t, n, e) {
  let o, a, { gapWidth: s = 5 } = n, { isStart: i } = n, { stepArr: c = [] } = n;
  const l = (r) => {
    if (r.length === 0) {
      e(0, o.style.display = "none", o);
      return;
    }
    const { id: h, desc: k } = r[0];
    var g = document.getElementById(h), _ = g.offsetWidth, y = g.offsetHeight, v = g.offsetLeft, L = g.offsetTop;
    console.log("\u5F85\u9542\u7A7A\u5143\u7D20: ", _, y, v, L);
    var z = document.body.scrollWidth, F = document.body.scrollHeight;
    e(0, o.style.width = z + "px", o), e(0, o.style.height = F + "px", o), e(0, o.style.position = "absolute", o), e(0, o.style.left = 0, o), e(0, o.style.top = 0, o), e(0, o.style.display = "block", o), e(0, o.style.boxSizing = "border-box", o), e(0, o.style.borderColor = "rgba(0, 0, 0, 0.75)", o), e(0, o.style.borderStyle = "solid", o), e(0, o.style.borderLeftWidth = v - s + "px", o), e(0, o.style.borderRightWidth = z - _ - v - s + "px", o), e(0, o.style.borderTopWidth = L - s + "px", o), e(0, o.style.borderBottomWidth = F - y - L - s + "px", o), e(1, a.style.top = y + s * 2 + 10 + "px", a), e(1, a.style.left = "50%", a);
    var tn = document.getElementById("mask-desc");
    tn.innerHTML = k;
    var en = document.getElementById("next-step-btn");
    en.onclick = function() {
      r.shift(), l(r);
    };
  };
  function u(r) {
    M[r ? "unshift" : "push"](() => {
      a = r, e(1, a);
    });
  }
  function b(r) {
    M[r ? "unshift" : "push"](() => {
      o = r, e(0, o);
    });
  }
  return t.$$set = (r) => {
    "gapWidth" in r && e(2, s = r.gapWidth), "isStart" in r && e(3, i = r.isStart), "stepArr" in r && e(4, c = r.stepArr);
  }, t.$$.update = () => {
    t.$$.dirty & 24 && i && l(c);
  }, [o, a, s, i, c, u, b];
}
class Xn extends E {
  constructor(n) {
    super(), T(this, n, qn, jn, q, { gapWidth: 2, isStart: 3, stepArr: 4 }, Fn);
  }
}
function Sn(t) {
  S(t, "svelte-oof29j", ".svelte-oof29j.svelte-oof29j,.svelte-oof29j.svelte-oof29j::before,.svelte-oof29j.svelte-oof29j::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.svelte-oof29j.svelte-oof29j::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.bg-\\#000000.svelte-oof29j.svelte-oof29j{--un-bg-opacity:1;background-color:rgba(0, 0, 0, var(--un-bg-opacity))}.text-white.svelte-oof29j.svelte-oof29j{--un-text-opacity:1;color:rgba(255, 255, 255, var(--un-text-opacity))}.tail-toast.svelte-oof29j.svelte-oof29j{position:absolute;left:0;right:0;top:0;bottom:0;background-color:rgba(0, 0, 0, 0.8);display:flex;justify-content:center;align-items:center}.tail-toast.svelte-oof29j .content.svelte-oof29j{margin:0 20px;display:flex;justify-content:center;align-items:center;padding:10px;border-radius:10px}");
}
function Tn(t) {
  let n, e, o;
  return {
    c() {
      n = f("div"), e = f("div"), o = w(t[0]), p(e, "class", "content text-white bg-#000000 svelte-oof29j"), p(n, "class", "tail-toast svelte-oof29j");
    },
    m(a, s) {
      j(a, n, s), d(n, e), d(e, o);
    },
    p(a, [s]) {
      s & 1 && x(o, a[0]);
    },
    i: m,
    o: m,
    d(a) {
      a && C(n);
    }
  };
}
function En(t, n, e) {
  let { content: o } = n;
  return t.$$set = (a) => {
    "content" in a && e(0, o = a.content);
  }, [o];
}
class Ln extends E {
  constructor(n) {
    super(), T(this, n, En, Tn, q, { content: 0 }, Sn);
  }
}
const Zn = (t, n = 2e3) => {
  const e = document.createElement("div");
  document.body.appendChild(e);
  const o = new Ln({
    target: e,
    props: {
      content: t
    }
  });
  setTimeout(() => {
    o.$destroy();
  }, n);
};
function Wn(t) {
  S(t, "svelte-1iwnl3w", ".svelte-1iwnl3w.svelte-1iwnl3w,.svelte-1iwnl3w.svelte-1iwnl3w::before,.svelte-1iwnl3w.svelte-1iwnl3w::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.svelte-1iwnl3w.svelte-1iwnl3w::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.centerLayout.svelte-1iwnl3w.svelte-1iwnl3w{display:flex;align-items:center;justify-content:center}.notice-modal.svelte-1iwnl3w.svelte-1iwnl3w{z-index:999;position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5)}.notice-modal.svelte-1iwnl3w .notice-modal-content.svelte-1iwnl3w{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:290px;max-height:80%;filter:blur(10);background:#F9F9F9;border-radius:12px}.notice-modal.svelte-1iwnl3w .notice-modal-content .modal-content-body.svelte-1iwnl3w{box-sizing:border-box;margin-top:0px;width:100%;font-size:16px;text-align:center;padding:20px}.notice-modal.svelte-1iwnl3w .notice-modal-content .modal-content-body .modal-title.svelte-1iwnl3w{font-family:PingFangSC-Semibold;font-size:17px;color:#000028;font-weight:bold;margin-bottom:15px}.notice-modal.svelte-1iwnl3w .notice-modal-content .modal-content-body .content.svelte-1iwnl3w{font-family:PingFangSC-Regular;font-size:14px;color:#000028;line-height:1.5;text-align:left}.notice-modal.svelte-1iwnl3w .notice-modal-content .notice-button-wrap.svelte-1iwnl3w{margin:0 20px;margin-bottom:20px;cursor:pointer}.notice-modal.svelte-1iwnl3w .notice-modal-content .notice-button-wrap .modal-button.svelte-1iwnl3w{height:48px;border-radius:8px;font-family:PingFangSC-Medium;font-size:14px;color:#FFFFFF;background:#FF6022}");
}
function Mn(t) {
  let n, e, o, a, s, i, c, l, u, b, r, h, k, g, _;
  return {
    c() {
      n = f("div"), e = f("div"), o = f("div"), a = f("div"), s = w(t[1]), i = W(), c = f("div"), l = f("div"), u = w(t[2]), b = W(), r = f("div"), h = f("div"), k = w(t[0]), p(a, "class", "modal-title svelte-1iwnl3w"), p(l, "class", "svelte-1iwnl3w"), p(c, "class", "content svelte-1iwnl3w"), p(o, "class", "modal-content-body svelte-1iwnl3w"), p(h, "class", "modal-button centerLayout svelte-1iwnl3w"), p(r, "class", "notice-button-wrap svelte-1iwnl3w"), p(e, "class", "notice-modal-content svelte-1iwnl3w"), p(n, "class", "notice-modal svelte-1iwnl3w");
    },
    m(y, v) {
      j(y, n, v), d(n, e), d(e, o), d(o, a), d(a, s), d(o, i), d(o, c), d(c, l), d(l, u), d(e, b), d(e, r), d(r, h), d(h, k), t[6](n), g || (_ = A(h, "click", t[4]), g = !0);
    },
    p(y, [v]) {
      v & 2 && x(s, y[1]), v & 4 && x(u, y[2]), v & 1 && x(k, y[0]);
    },
    i: m,
    o: m,
    d(y) {
      y && C(n), t[6](null), g = !1, _();
    }
  };
}
function Bn(t, n, e) {
  let { clickText: o = "\u6211\u77E5\u9053\u4E86" } = n, { title: a = "" } = n, { content: s = "" } = n, { onClick: i = () => {
  } } = n, c;
  const l = () => {
    c.parentNode.removeChild(c);
  }, u = () => {
    i(), l();
  };
  function b(r) {
    M[r ? "unshift" : "push"](() => {
      c = r, e(3, c);
    });
  }
  return t.$$set = (r) => {
    "clickText" in r && e(0, o = r.clickText), "title" in r && e(1, a = r.title), "content" in r && e(2, s = r.content), "onClick" in r && e(5, i = r.onClick);
  }, [o, a, s, c, u, i, b];
}
class Nn extends E {
  constructor(n) {
    super(), T(
      this,
      n,
      Bn,
      Mn,
      q,
      {
        clickText: 0,
        title: 1,
        content: 2,
        onClick: 5
      },
      Wn
    );
  }
}
const Gn = (t) => {
  const n = document.createElement("div");
  document.body.appendChild(n), new Nn({
    target: n,
    props: {
      ...t
    }
  });
};
function Pn(t) {
  S(t, "svelte-gcnicg", ".svelte-gcnicg.svelte-gcnicg,.svelte-gcnicg.svelte-gcnicg::before,.svelte-gcnicg.svelte-gcnicg::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.svelte-gcnicg.svelte-gcnicg::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.centerLayout.svelte-gcnicg.svelte-gcnicg{display:flex;align-items:center;justify-content:center}.confirm-modal.svelte-gcnicg.svelte-gcnicg{z-index:999;position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5)}.confirm-modal.svelte-gcnicg .confirm-modal-content.svelte-gcnicg{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:290px;max-height:80%;filter:blur(10);background:#F9F9F9;border-radius:12px}.confirm-modal.svelte-gcnicg .confirm-modal-content .modal-content-body.svelte-gcnicg{box-sizing:border-box;margin-top:0px;width:100%;font-size:16px;text-align:center;padding:20px}.confirm-modal.svelte-gcnicg .confirm-modal-content .modal-content-body .modal-title.svelte-gcnicg{font-family:PingFangSC-Semibold;font-size:17px;color:#000028;font-weight:bold;margin-bottom:15px}.confirm-modal.svelte-gcnicg .confirm-modal-content .modal-content-body .content.svelte-gcnicg{font-family:PingFangSC-Regular;font-size:14px;color:#000028;line-height:1.5;text-align:left}.confirm-modal.svelte-gcnicg .confirm-modal-content .confirm-button-wrap.svelte-gcnicg{margin:0 20px;margin-bottom:20px;display:flex;justify-content:space-between}.confirm-modal.svelte-gcnicg .confirm-modal-content .confirm-button-wrap .btn.svelte-gcnicg{width:121px;height:48px;border-radius:8px;font-family:PingFangSC-Medium;font-size:14px}.confirm-modal.svelte-gcnicg .confirm-modal-content .confirm-button-wrap .button-left.svelte-gcnicg{color:#848494;background:#FFFFFF;border:0.5px solid #E5E6EE}.confirm-modal.svelte-gcnicg .confirm-modal-content .confirm-button-wrap .button-right.svelte-gcnicg{color:#FFFFFF;background:#FF6022}");
}
function An(t) {
  let n, e, o, a, s, i, c, l, u, b, r, h, k, g, _, y, v, L;
  return {
    c() {
      n = f("div"), e = f("div"), o = f("div"), a = f("div"), s = w(t[0]), i = W(), c = f("div"), l = f("div"), u = w(t[1]), b = W(), r = f("div"), h = f("div"), k = w(t[2]), g = W(), _ = f("div"), y = w(t[3]), p(a, "class", "modal-title svelte-gcnicg"), p(l, "class", "svelte-gcnicg"), p(c, "class", "content svelte-gcnicg"), p(o, "class", "modal-content-body svelte-gcnicg"), p(h, "class", "btn button-left centerLayout svelte-gcnicg"), p(_, "class", "btn button-right centerLayout svelte-gcnicg"), p(r, "class", "confirm-button-wrap svelte-gcnicg"), p(e, "class", "confirm-modal-content svelte-gcnicg"), p(n, "class", "confirm-modal svelte-gcnicg");
    },
    m(z, F) {
      j(z, n, F), d(n, e), d(e, o), d(o, a), d(a, s), d(o, i), d(o, c), d(c, l), d(l, u), d(e, b), d(e, r), d(r, h), d(h, k), d(r, g), d(r, _), d(_, y), t[9](n), v || (L = [
        A(h, "click", t[6]),
        A(_, "click", t[5])
      ], v = !0);
    },
    p(z, [F]) {
      F & 1 && x(s, z[0]), F & 2 && x(u, z[1]), F & 4 && x(k, z[2]), F & 8 && x(y, z[3]);
    },
    i: m,
    o: m,
    d(z) {
      z && C(n), t[9](null), v = !1, I(L);
    }
  };
}
function In(t, n, e) {
  let { title: o = "" } = n, { content: a = "" } = n, { cancelText: s = "\u53D6\u6D88" } = n, { okText: i = "\u786E\u5B9A" } = n, { onCancel: c = () => {
  } } = n, { onOk: l = () => {
  } } = n, u;
  const b = () => {
    u.parentNode.removeChild(u);
  }, r = () => {
    l(), b();
  }, h = () => {
    c(), b();
  };
  function k(g) {
    M[g ? "unshift" : "push"](() => {
      u = g, e(4, u);
    });
  }
  return t.$$set = (g) => {
    "title" in g && e(0, o = g.title), "content" in g && e(1, a = g.content), "cancelText" in g && e(2, s = g.cancelText), "okText" in g && e(3, i = g.okText), "onCancel" in g && e(7, c = g.onCancel), "onOk" in g && e(8, l = g.onOk);
  }, [
    o,
    a,
    s,
    i,
    u,
    r,
    h,
    c,
    l,
    k
  ];
}
class On extends E {
  constructor(n) {
    super(), T(
      this,
      n,
      In,
      An,
      q,
      {
        title: 0,
        content: 1,
        cancelText: 2,
        okText: 3,
        onCancel: 7,
        onOk: 8
      },
      Pn
    );
  }
}
const Jn = (t) => {
  const n = window.document.createElement("div");
  return document.body.appendChild(n), new On({
    target: n,
    props: {
      ...t
    }
  });
}, Kn = (t) => {
  const { id: n, duration: e } = t, o = document.getElementById(n);
  if (!!o)
    return () => {
      const a = o.style.zIndex;
      o.style.boxShadow = "0 0 0 2000px rgba(0,0,0,0.62)", o.style.zIndex = "1000";
      const s = o.style.position;
      o.style.position = s === "static" ? "relative" : s, setTimeout(() => {
        o.style.boxShadow = "", o.style.zIndex = a, o.style.position = s;
      }, e * 1e3);
    };
};
export {
  Rn as Counter,
  Hn as Counter2,
  Dn as Marquee,
  Xn as StepMask,
  Jn as confirm,
  Kn as mask,
  Gn as notice,
  Zn as toast
};

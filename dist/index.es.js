function m() {
}
function tn(e) {
  return e();
}
function J() {
  return /* @__PURE__ */ Object.create(null);
}
function L(e) {
  e.forEach(tn);
}
function un(e) {
  return typeof e == "function";
}
function q(e, n) {
  return e != e ? n == n : e !== n || e && typeof e == "object" || typeof e == "function";
}
let N;
function K(e, n) {
  return N || (N = document.createElement("a")), N.href = n, e === N.href;
}
function sn(e) {
  return Object.keys(e).length === 0;
}
function d(e, n) {
  e.appendChild(n);
}
function T(e, n, t) {
  const r = cn(e);
  if (!r.getElementById(n)) {
    const o = p("style");
    o.id = n, o.textContent = t, ln(r, o);
  }
}
function cn(e) {
  if (!e)
    return document;
  const n = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return n && n.host ? n : e.ownerDocument;
}
function ln(e, n) {
  d(e.head || e, n);
}
function F(e, n, t) {
  e.insertBefore(n, t || null);
}
function C(e) {
  e.parentNode.removeChild(e);
}
function Q(e, n) {
  for (let t = 0; t < e.length; t += 1)
    e[t] && e[t].d(n);
}
function p(e) {
  return document.createElement(e);
}
function y(e) {
  return document.createTextNode(e);
}
function A() {
  return y(" ");
}
function P(e, n, t, r) {
  return e.addEventListener(n, t, r), () => e.removeEventListener(n, t, r);
}
function f(e, n, t) {
  t == null ? e.removeAttribute(n) : e.getAttribute(n) !== t && e.setAttribute(n, t);
}
function dn(e) {
  return Array.from(e.childNodes);
}
function _(e, n) {
  n = "" + n, e.wholeText !== n && (e.data = n);
}
function O(e, n, t, r) {
  t === null ? e.style.removeProperty(n) : e.style.setProperty(n, t, r ? "important" : "");
}
let G;
function I(e) {
  G = e;
}
const B = [], M = [], H = [], V = [], gn = Promise.resolve();
let U = !1;
function fn() {
  U || (U = !0, gn.then(rn));
}
function X(e) {
  H.push(e);
}
const D = /* @__PURE__ */ new Set();
let R = 0;
function rn() {
  const e = G;
  do {
    for (; R < B.length; ) {
      const n = B[R];
      R++, I(n), pn(n.$$);
    }
    for (I(null), B.length = 0, R = 0; M.length; )
      M.pop()();
    for (let n = 0; n < H.length; n += 1) {
      const t = H[n];
      D.has(t) || (D.add(t), t());
    }
    H.length = 0;
  } while (B.length);
  for (; V.length; )
    V.pop()();
  U = !1, D.clear(), I(e);
}
function pn(e) {
  if (e.fragment !== null) {
    e.update(), L(e.before_update);
    const n = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, n), e.after_update.forEach(X);
  }
}
const bn = /* @__PURE__ */ new Set();
function hn(e, n) {
  e && e.i && (bn.delete(e), e.i(n));
}
function mn(e, n, t, r) {
  const { fragment: o, on_mount: u, on_destroy: i, after_update: c } = e.$$;
  o && o.m(n, t), r || X(() => {
    const l = u.map(tn).filter(un);
    i ? i.push(...l) : L(l), e.$$.on_mount = [];
  }), c.forEach(X);
}
function yn(e, n) {
  const t = e.$$;
  t.fragment !== null && (L(t.on_destroy), t.fragment && t.fragment.d(n), t.on_destroy = t.fragment = null, t.ctx = []);
}
function kn(e, n) {
  e.$$.dirty[0] === -1 && (B.push(e), fn(), e.$$.dirty.fill(0)), e.$$.dirty[n / 31 | 0] |= 1 << n % 31;
}
function S(e, n, t, r, o, u, i, c = [-1]) {
  const l = G;
  I(e);
  const a = e.$$ = {
    fragment: null,
    ctx: null,
    props: u,
    update: m,
    not_equal: o,
    bound: J(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(n.context || (l ? l.$$.context : [])),
    callbacks: J(),
    dirty: c,
    skip_bound: !1,
    root: n.target || l.$$.root
  };
  i && i(a.root);
  let h = !1;
  if (a.ctx = t ? t(e, n.props || {}, (s, g, ...k) => {
    const b = k.length ? k[0] : g;
    return a.ctx && o(a.ctx[s], a.ctx[s] = b) && (!a.skip_bound && a.bound[s] && a.bound[s](b), h && kn(e, s)), g;
  }) : [], a.update(), h = !0, L(a.before_update), a.fragment = r ? r(a.ctx) : !1, n.target) {
    if (n.hydrate) {
      const s = dn(n.target);
      a.fragment && a.fragment.l(s), s.forEach(C);
    } else
      a.fragment && a.fragment.c();
    n.intro && hn(e.$$.fragment), mn(e, n.target, n.anchor, n.customElement), rn();
  }
  I(l);
}
class E {
  $destroy() {
    yn(this, 1), this.$destroy = m;
  }
  $on(n, t) {
    const r = this.$$.callbacks[n] || (this.$$.callbacks[n] = []);
    return r.push(t), () => {
      const o = r.indexOf(t);
      o !== -1 && r.splice(o, 1);
    };
  }
  $set(n) {
    this.$$set && !sn(n) && (this.$$.skip_bound = !0, this.$$set(n), this.$$.skip_bound = !1);
  }
}
function wn(e) {
  T(e, "svelte-1etnm5k", ".svelte-1etnm5k,.svelte-1etnm5k::before,.svelte-1etnm5k::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.svelte-1etnm5k::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.bg-black.svelte-1etnm5k{--un-bg-opacity:1;background-color:rgba(0,0,0,var(--un-bg-opacity))}.text-white.svelte-1etnm5k{--un-text-opacity:1;color:rgba(255,255,255,var(--un-text-opacity))}");
}
function vn(e) {
  let n, t, r, o, u;
  return {
    c() {
      n = p("button"), t = y("count is "), r = y(e[0]), f(n, "class", "bg-black text-white svelte-1etnm5k");
    },
    m(i, c) {
      F(i, n, c), d(n, t), d(n, r), o || (u = P(n, "click", e[1]), o = !0);
    },
    p(i, [c]) {
      c & 1 && _(r, i[0]);
    },
    i: m,
    o: m,
    d(i) {
      i && C(n), o = !1, u();
    }
  };
}
function xn(e, n, t) {
  let r = 0;
  return [r, () => {
    t(0, r += 1);
  }];
}
class Zn extends E {
  constructor(n) {
    super(), S(this, n, xn, vn, q, {}, wn);
  }
}
function _n(e) {
  T(e, "svelte-1lydoww", ".svelte-1lydoww,.svelte-1lydoww::before,.svelte-1lydoww::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.svelte-1lydoww::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.bg-red.svelte-1lydoww{--un-bg-opacity:1;background-color:rgba(248,113,113,var(--un-bg-opacity))}.text-white.svelte-1lydoww{--un-text-opacity:1;color:rgba(255,255,255,var(--un-text-opacity))}.btn.svelte-1lydoww{border:8px solid #35eb9a}");
}
function zn(e) {
  let n, t, r, o, u;
  return {
    c() {
      n = p("button"), t = y("count is "), r = y(e[0]), f(n, "class", "btn bg-red text-white svelte-1lydoww");
    },
    m(i, c) {
      F(i, n, c), d(n, t), d(n, r), o || (u = P(n, "click", e[1]), o = !0);
    },
    p(i, [c]) {
      c & 1 && _(r, i[0]);
    },
    i: m,
    o: m,
    d(i) {
      i && C(n), o = !1, u();
    }
  };
}
function Cn(e, n, t) {
  let r = 0;
  return [r, () => {
    t(0, r += 2);
  }];
}
class Jn extends E {
  constructor(n) {
    super(), S(this, n, Cn, zn, q, {}, _n);
  }
}
function Fn(e) {
  T(e, "svelte-1cqo505", ".svelte-1cqo505.svelte-1cqo505,.svelte-1cqo505.svelte-1cqo505::before,.svelte-1cqo505.svelte-1cqo505::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.svelte-1cqo505.svelte-1cqo505::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }@keyframes svelte-1cqo505-scroll{from{transform:translateX(0)}to{transform:translateX(calc(-100% - var(--tail-gap)))}}.marquee.svelte-1cqo505.svelte-1cqo505{display:flex;overflow:hidden;user-select:none;gap:var(--tail-gap)}.marquee.svelte-1cqo505 .marquee_content.svelte-1cqo505{flex-shrink:0;display:flex;justify-content:space-around;min-width:100%;gap:var(--tail-gap);animation-name:svelte-1cqo505-scroll;animation-duration:var(--tail-speed);animation-iteration-count:infinite;animation-timing-function:linear}");
}
function Y(e, n, t) {
  const r = e.slice();
  return r[3] = n[t], r;
}
function $(e, n, t) {
  const r = e.slice();
  return r[3] = n[t], r;
}
function nn(e) {
  let n, t = e[3] + "", r;
  return {
    c() {
      n = p("div"), r = y(t), f(n, "class", "svelte-1cqo505");
    },
    m(o, u) {
      F(o, n, u), d(n, r);
    },
    p(o, u) {
      u & 1 && t !== (t = o[3] + "") && _(r, t);
    },
    d(o) {
      o && C(n);
    }
  };
}
function en(e) {
  let n, t = e[3] + "", r;
  return {
    c() {
      n = p("div"), r = y(t), f(n, "class", "svelte-1cqo505");
    },
    m(o, u) {
      F(o, n, u), d(n, r);
    },
    p(o, u) {
      u & 1 && t !== (t = o[3] + "") && _(r, t);
    },
    d(o) {
      o && C(n);
    }
  };
}
function jn(e) {
  let n, t, r, o, u = e[0], i = [];
  for (let a = 0; a < u.length; a += 1)
    i[a] = nn($(e, u, a));
  let c = e[0], l = [];
  for (let a = 0; a < c.length; a += 1)
    l[a] = en(Y(e, c, a));
  return {
    c() {
      n = p("div"), t = p("div");
      for (let a = 0; a < i.length; a += 1)
        i[a].c();
      r = A(), o = p("div");
      for (let a = 0; a < l.length; a += 1)
        l[a].c();
      f(t, "class", "marquee_content svelte-1cqo505"), f(o, "class", "marquee_content svelte-1cqo505"), f(o, "aria-hidden", "true"), f(n, "class", "marquee svelte-1cqo505"), O(n, "--tail-gap", e[1]), O(n, "--tail-speed", e[2]);
    },
    m(a, h) {
      F(a, n, h), d(n, t);
      for (let s = 0; s < i.length; s += 1)
        i[s].m(t, null);
      d(n, r), d(n, o);
      for (let s = 0; s < l.length; s += 1)
        l[s].m(o, null);
    },
    p(a, [h]) {
      if (h & 1) {
        u = a[0];
        let s;
        for (s = 0; s < u.length; s += 1) {
          const g = $(a, u, s);
          i[s] ? i[s].p(g, h) : (i[s] = nn(g), i[s].c(), i[s].m(t, null));
        }
        for (; s < i.length; s += 1)
          i[s].d(1);
        i.length = u.length;
      }
      if (h & 1) {
        c = a[0];
        let s;
        for (s = 0; s < c.length; s += 1) {
          const g = Y(a, c, s);
          l[s] ? l[s].p(g, h) : (l[s] = en(g), l[s].c(), l[s].m(o, null));
        }
        for (; s < l.length; s += 1)
          l[s].d(1);
        l.length = c.length;
      }
      h & 2 && O(n, "--tail-gap", a[1]), h & 4 && O(n, "--tail-speed", a[2]);
    },
    i: m,
    o: m,
    d(a) {
      a && C(n), Q(i, a), Q(l, a);
    }
  };
}
function qn(e, n, t) {
  let { data: r = [] } = n, { gap: o = "60px" } = n, { speed: u = "5s" } = n;
  return e.$$set = (i) => {
    "data" in i && t(0, r = i.data), "gap" in i && t(1, o = i.gap), "speed" in i && t(2, u = i.speed);
  }, [r, o, u];
}
class Kn extends E {
  constructor(n) {
    super(), S(this, n, qn, jn, q, { data: 0, gap: 1, speed: 2 }, Fn);
  }
}
function Tn(e) {
  T(e, "svelte-120kxvy", '.svelte-120kxvy,.svelte-120kxvy::before,.svelte-120kxvy::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.svelte-120kxvy::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.mask-tip.svelte-120kxvy{min-width:175px;text-align:center;border:1px solid #005ea6;border-radius:8px;padding:5px 10px;position:absolute;background:white;transform:translateX(-50%)}.mask-tip.svelte-120kxvy:before{content:"";width:10px;height:10px;border:1px solid #005ea6;background:white;position:absolute;transform:rotate(45deg);top:-6px;left:calc(50% - 5px);border-right-width:0;border-bottom-width:0}.mask-tip-desc.svelte-120kxvy{display:block;margin-bottom:10px}.mask-tip-btn.svelte-120kxvy{border-radius:4px;padding:6px;border:none;background-color:#005ea6;cursor:pointer;color:white}');
}
function Sn(e) {
  let n, t, r, o, u, i;
  return {
    c() {
      n = p("div"), t = p("div"), r = p("span"), o = A(), u = p("button"), i = y(e[0]), f(r, "id", "mask-desc"), f(r, "class", "mask-tip-desc svelte-120kxvy"), f(u, "id", "next-step-btn"), f(u, "class", "mask-tip-btn svelte-120kxvy"), f(t, "class", "mask-tip svelte-120kxvy"), O(n, "display", "none"), f(n, "class", "svelte-120kxvy");
    },
    m(c, l) {
      F(c, n, l), d(n, t), d(t, r), d(t, o), d(t, u), d(u, i), e[6](t), e[7](n);
    },
    p(c, [l]) {
      l & 1 && _(i, c[0]);
    },
    i: m,
    o: m,
    d(c) {
      c && C(n), e[6](null), e[7](null);
    }
  };
}
function En(e, n, t) {
  let r, o, { gapWidth: u = 5 } = n, { isStart: i } = n, { stepArr: c = [] } = n, { btnText: l = "\u4E0B\u4E00\u6B65" } = n;
  const a = (g) => {
    if (g.length === 0) {
      t(1, r.style.display = "none", r);
      return;
    }
    const { id: k, desc: b } = g[0];
    var v = document.getElementById(k), w = v.offsetWidth, x = v.offsetHeight, W = v.offsetLeft, z = v.offsetTop;
    console.log("\u5F85\u9542\u7A7A\u5143\u7D20: ", w, x, W, z);
    var j = document.body.scrollWidth, Z = document.body.scrollHeight;
    t(1, r.style.width = j + "px", r), t(1, r.style.height = Z + "px", r), t(1, r.style.position = "absolute", r), t(1, r.style.left = 0, r), t(1, r.style.top = 0, r), t(1, r.style.display = "block", r), t(1, r.style.boxSizing = "border-box", r), t(1, r.style.borderColor = "rgba(0, 0, 0, 0.75)", r), t(1, r.style.borderStyle = "solid", r), t(1, r.style.borderLeftWidth = W - u + "px", r), t(1, r.style.borderRightWidth = j - w - W - u + "px", r), t(1, r.style.borderTopWidth = z - u + "px", r), t(1, r.style.borderBottomWidth = Z - x - z - u + "px", r), t(2, o.style.top = x + u * 2 + 10 + "px", o), t(2, o.style.left = "50%", o);
    var on = document.getElementById("mask-desc");
    on.innerHTML = b;
    var an = document.getElementById("next-step-btn");
    an.onclick = function() {
      g.shift(), a(g);
    };
  };
  function h(g) {
    M[g ? "unshift" : "push"](() => {
      o = g, t(2, o);
    });
  }
  function s(g) {
    M[g ? "unshift" : "push"](() => {
      r = g, t(1, r);
    });
  }
  return e.$$set = (g) => {
    "gapWidth" in g && t(3, u = g.gapWidth), "isStart" in g && t(4, i = g.isStart), "stepArr" in g && t(5, c = g.stepArr), "btnText" in g && t(0, l = g.btnText);
  }, e.$$.update = () => {
    e.$$.dirty & 48 && i && a(c);
  }, [
    l,
    r,
    o,
    u,
    i,
    c,
    h,
    s
  ];
}
class Qn extends E {
  constructor(n) {
    super(), S(
      this,
      n,
      En,
      Sn,
      q,
      {
        gapWidth: 3,
        isStart: 4,
        stepArr: 5,
        btnText: 0
      },
      Tn
    );
  }
}
function An(e) {
  T(e, "svelte-1rflkzp", ".svelte-1rflkzp,.svelte-1rflkzp::before,.svelte-1rflkzp::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.svelte-1rflkzp::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }");
}
function Wn(e) {
  let n, t, r, o;
  return {
    c() {
      n = p("img"), K(n.src, t = e[0] ? e[1] : e[2]) || f(n, "src", t), f(n, "class", "svelte-1rflkzp");
    },
    m(u, i) {
      F(u, n, i), r || (o = P(n, "click", e[5]), r = !0);
    },
    p(u, [i]) {
      i & 7 && !K(n.src, t = u[0] ? u[1] : u[2]) && f(n, "src", t);
    },
    i: m,
    o: m,
    d(u) {
      u && C(n), r = !1, o();
    }
  };
}
function Pn(e, n, t) {
  let { imgChecked: r = "https://tse4-mm.cn.bing.net/th/id/OIP-C.cGGNewOo82RNOdjHnyHcMAAAAA?pid=ImgDet&rs=1" } = n, { imgUnchecked: o = "https://ts1.cn.mm.bing.net/th/id/R-C.cf59580e66343165cb761a1ab2aaf7e8?rik=E39R8u8Zk2mPng&riu=http%3a%2f%2fbpic.588ku.com%2felement_pic%2f18%2f07%2f02%2f56980234137c3b1a4fc26e860afae85a.jpg&ehk=XpqvmAYWaaPOPQnjjMhC7%2f2u7JeGF396wVdvWa3KMp4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" } = n, { checked: u = !1 } = n, { onChange: i = (a) => {
    console.log(a);
  } } = n, { type: c = "img" } = n;
  const l = () => {
    t(0, u ^= 1), i(u);
  };
  return e.$$set = (a) => {
    "imgChecked" in a && t(1, r = a.imgChecked), "imgUnchecked" in a && t(2, o = a.imgUnchecked), "checked" in a && t(0, u = a.checked), "onChange" in a && t(3, i = a.onChange), "type" in a && t(4, c = a.type);
  }, [u, r, o, i, c, l];
}
class Vn extends E {
  constructor(n) {
    super(), S(
      this,
      n,
      Pn,
      Wn,
      q,
      {
        imgChecked: 1,
        imgUnchecked: 2,
        checked: 0,
        onChange: 3,
        type: 4
      },
      An
    );
  }
}
function Mn(e) {
  T(e, "svelte-oof29j", ".svelte-oof29j.svelte-oof29j,.svelte-oof29j.svelte-oof29j::before,.svelte-oof29j.svelte-oof29j::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.svelte-oof29j.svelte-oof29j::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.bg-\\#000000.svelte-oof29j.svelte-oof29j{--un-bg-opacity:1;background-color:rgba(0, 0, 0, var(--un-bg-opacity))}.text-white.svelte-oof29j.svelte-oof29j{--un-text-opacity:1;color:rgba(255, 255, 255, var(--un-text-opacity))}.tail-toast.svelte-oof29j.svelte-oof29j{position:absolute;left:0;right:0;top:0;bottom:0;background-color:rgba(0, 0, 0, 0.8);display:flex;justify-content:center;align-items:center}.tail-toast.svelte-oof29j .content.svelte-oof29j{margin:0 20px;display:flex;justify-content:center;align-items:center;padding:10px;border-radius:10px}");
}
function On(e) {
  let n, t, r;
  return {
    c() {
      n = p("div"), t = p("div"), r = y(e[0]), f(t, "class", "content text-white bg-#000000 svelte-oof29j"), f(n, "class", "tail-toast svelte-oof29j");
    },
    m(o, u) {
      F(o, n, u), d(n, t), d(t, r);
    },
    p(o, [u]) {
      u & 1 && _(r, o[0]);
    },
    i: m,
    o: m,
    d(o) {
      o && C(n);
    }
  };
}
function Bn(e, n, t) {
  let { content: r } = n;
  return e.$$set = (o) => {
    "content" in o && t(0, r = o.content);
  }, [r];
}
class In extends E {
  constructor(n) {
    super(), S(this, n, Bn, On, q, { content: 0 }, Mn);
  }
}
const Yn = (e, n = 2e3) => {
  const t = document.createElement("div");
  document.body.appendChild(t);
  const r = new In({
    target: t,
    props: {
      content: e
    }
  });
  setTimeout(() => {
    r.$destroy();
  }, n);
};
function Ln(e) {
  T(e, "svelte-1iwnl3w", ".svelte-1iwnl3w.svelte-1iwnl3w,.svelte-1iwnl3w.svelte-1iwnl3w::before,.svelte-1iwnl3w.svelte-1iwnl3w::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.svelte-1iwnl3w.svelte-1iwnl3w::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.centerLayout.svelte-1iwnl3w.svelte-1iwnl3w{display:flex;align-items:center;justify-content:center}.notice-modal.svelte-1iwnl3w.svelte-1iwnl3w{z-index:999;position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5)}.notice-modal.svelte-1iwnl3w .notice-modal-content.svelte-1iwnl3w{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:290px;max-height:80%;filter:blur(10);background:#F9F9F9;border-radius:12px}.notice-modal.svelte-1iwnl3w .notice-modal-content .modal-content-body.svelte-1iwnl3w{box-sizing:border-box;margin-top:0px;width:100%;font-size:16px;text-align:center;padding:20px}.notice-modal.svelte-1iwnl3w .notice-modal-content .modal-content-body .modal-title.svelte-1iwnl3w{font-family:PingFangSC-Semibold;font-size:17px;color:#000028;font-weight:bold;margin-bottom:15px}.notice-modal.svelte-1iwnl3w .notice-modal-content .modal-content-body .content.svelte-1iwnl3w{font-family:PingFangSC-Regular;font-size:14px;color:#000028;line-height:1.5;text-align:left}.notice-modal.svelte-1iwnl3w .notice-modal-content .notice-button-wrap.svelte-1iwnl3w{margin:0 20px;margin-bottom:20px;cursor:pointer}.notice-modal.svelte-1iwnl3w .notice-modal-content .notice-button-wrap .modal-button.svelte-1iwnl3w{height:48px;border-radius:8px;font-family:PingFangSC-Medium;font-size:14px;color:#FFFFFF;background:#FF6022}");
}
function Nn(e) {
  let n, t, r, o, u, i, c, l, a, h, s, g, k, b, v;
  return {
    c() {
      n = p("div"), t = p("div"), r = p("div"), o = p("div"), u = y(e[1]), i = A(), c = p("div"), l = p("div"), a = y(e[2]), h = A(), s = p("div"), g = p("div"), k = y(e[0]), f(o, "class", "modal-title svelte-1iwnl3w"), f(l, "class", "svelte-1iwnl3w"), f(c, "class", "content svelte-1iwnl3w"), f(r, "class", "modal-content-body svelte-1iwnl3w"), f(g, "class", "modal-button centerLayout svelte-1iwnl3w"), f(s, "class", "notice-button-wrap svelte-1iwnl3w"), f(t, "class", "notice-modal-content svelte-1iwnl3w"), f(n, "class", "notice-modal svelte-1iwnl3w");
    },
    m(w, x) {
      F(w, n, x), d(n, t), d(t, r), d(r, o), d(o, u), d(r, i), d(r, c), d(c, l), d(l, a), d(t, h), d(t, s), d(s, g), d(g, k), e[6](n), b || (v = P(g, "click", e[4]), b = !0);
    },
    p(w, [x]) {
      x & 2 && _(u, w[1]), x & 4 && _(a, w[2]), x & 1 && _(k, w[0]);
    },
    i: m,
    o: m,
    d(w) {
      w && C(n), e[6](null), b = !1, v();
    }
  };
}
function Rn(e, n, t) {
  let { clickText: r = "\u6211\u77E5\u9053\u4E86" } = n, { title: o = "" } = n, { content: u = "" } = n, { onClick: i = () => {
  } } = n, c;
  const l = () => {
    c.parentNode.removeChild(c);
  }, a = () => {
    i(), l();
  };
  function h(s) {
    M[s ? "unshift" : "push"](() => {
      c = s, t(3, c);
    });
  }
  return e.$$set = (s) => {
    "clickText" in s && t(0, r = s.clickText), "title" in s && t(1, o = s.title), "content" in s && t(2, u = s.content), "onClick" in s && t(5, i = s.onClick);
  }, [r, o, u, c, a, i, h];
}
class Hn extends E {
  constructor(n) {
    super(), S(
      this,
      n,
      Rn,
      Nn,
      q,
      {
        clickText: 0,
        title: 1,
        content: 2,
        onClick: 5
      },
      Ln
    );
  }
}
const $n = (e) => {
  const n = document.createElement("div");
  document.body.appendChild(n), new Hn({
    target: n,
    props: {
      ...e
    }
  });
};
function Dn(e) {
  T(e, "svelte-gcnicg", ".svelte-gcnicg.svelte-gcnicg,.svelte-gcnicg.svelte-gcnicg::before,.svelte-gcnicg.svelte-gcnicg::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.svelte-gcnicg.svelte-gcnicg::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.centerLayout.svelte-gcnicg.svelte-gcnicg{display:flex;align-items:center;justify-content:center}.confirm-modal.svelte-gcnicg.svelte-gcnicg{z-index:999;position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5)}.confirm-modal.svelte-gcnicg .confirm-modal-content.svelte-gcnicg{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:290px;max-height:80%;filter:blur(10);background:#F9F9F9;border-radius:12px}.confirm-modal.svelte-gcnicg .confirm-modal-content .modal-content-body.svelte-gcnicg{box-sizing:border-box;margin-top:0px;width:100%;font-size:16px;text-align:center;padding:20px}.confirm-modal.svelte-gcnicg .confirm-modal-content .modal-content-body .modal-title.svelte-gcnicg{font-family:PingFangSC-Semibold;font-size:17px;color:#000028;font-weight:bold;margin-bottom:15px}.confirm-modal.svelte-gcnicg .confirm-modal-content .modal-content-body .content.svelte-gcnicg{font-family:PingFangSC-Regular;font-size:14px;color:#000028;line-height:1.5;text-align:left}.confirm-modal.svelte-gcnicg .confirm-modal-content .confirm-button-wrap.svelte-gcnicg{margin:0 20px;margin-bottom:20px;display:flex;justify-content:space-between}.confirm-modal.svelte-gcnicg .confirm-modal-content .confirm-button-wrap .btn.svelte-gcnicg{width:121px;height:48px;border-radius:8px;font-family:PingFangSC-Medium;font-size:14px}.confirm-modal.svelte-gcnicg .confirm-modal-content .confirm-button-wrap .button-left.svelte-gcnicg{color:#848494;background:#FFFFFF;border:0.5px solid #E5E6EE}.confirm-modal.svelte-gcnicg .confirm-modal-content .confirm-button-wrap .button-right.svelte-gcnicg{color:#FFFFFF;background:#FF6022}");
}
function Un(e) {
  let n, t, r, o, u, i, c, l, a, h, s, g, k, b, v, w, x, W;
  return {
    c() {
      n = p("div"), t = p("div"), r = p("div"), o = p("div"), u = y(e[0]), i = A(), c = p("div"), l = p("div"), a = y(e[1]), h = A(), s = p("div"), g = p("div"), k = y(e[2]), b = A(), v = p("div"), w = y(e[3]), f(o, "class", "modal-title svelte-gcnicg"), f(l, "class", "svelte-gcnicg"), f(c, "class", "content svelte-gcnicg"), f(r, "class", "modal-content-body svelte-gcnicg"), f(g, "class", "btn button-left centerLayout svelte-gcnicg"), f(v, "class", "btn button-right centerLayout svelte-gcnicg"), f(s, "class", "confirm-button-wrap svelte-gcnicg"), f(t, "class", "confirm-modal-content svelte-gcnicg"), f(n, "class", "confirm-modal svelte-gcnicg");
    },
    m(z, j) {
      F(z, n, j), d(n, t), d(t, r), d(r, o), d(o, u), d(r, i), d(r, c), d(c, l), d(l, a), d(t, h), d(t, s), d(s, g), d(g, k), d(s, b), d(s, v), d(v, w), e[9](n), x || (W = [
        P(g, "click", e[6]),
        P(v, "click", e[5])
      ], x = !0);
    },
    p(z, [j]) {
      j & 1 && _(u, z[0]), j & 2 && _(a, z[1]), j & 4 && _(k, z[2]), j & 8 && _(w, z[3]);
    },
    i: m,
    o: m,
    d(z) {
      z && C(n), e[9](null), x = !1, L(W);
    }
  };
}
function Xn(e, n, t) {
  let { title: r = "" } = n, { content: o = "" } = n, { cancelText: u = "\u53D6\u6D88" } = n, { okText: i = "\u786E\u5B9A" } = n, { onCancel: c = () => {
  } } = n, { onOk: l = () => {
  } } = n, a;
  const h = () => {
    a.parentNode.removeChild(a);
  }, s = () => {
    l(), h();
  }, g = () => {
    c(), h();
  };
  function k(b) {
    M[b ? "unshift" : "push"](() => {
      a = b, t(4, a);
    });
  }
  return e.$$set = (b) => {
    "title" in b && t(0, r = b.title), "content" in b && t(1, o = b.content), "cancelText" in b && t(2, u = b.cancelText), "okText" in b && t(3, i = b.okText), "onCancel" in b && t(7, c = b.onCancel), "onOk" in b && t(8, l = b.onOk);
  }, [
    r,
    o,
    u,
    i,
    a,
    s,
    g,
    c,
    l,
    k
  ];
}
class Gn extends E {
  constructor(n) {
    super(), S(
      this,
      n,
      Xn,
      Un,
      q,
      {
        title: 0,
        content: 1,
        cancelText: 2,
        okText: 3,
        onCancel: 7,
        onOk: 8
      },
      Dn
    );
  }
}
const ne = (e) => {
  const n = window.document.createElement("div");
  return document.body.appendChild(n), new Gn({
    target: n,
    props: {
      ...e
    }
  });
}, ee = (e) => {
  const { id: n, duration: t } = e, r = document.getElementById(n);
  if (!!r)
    return () => {
      const o = r.style.zIndex;
      r.style.boxShadow = "0 0 0 2000px rgba(0,0,0,0.62)", r.style.zIndex = "1000";
      const u = r.style.position;
      r.style.position = u === "static" ? "relative" : u, setTimeout(() => {
        r.style.boxShadow = "", r.style.zIndex = o, r.style.position = u;
      }, t * 1e3);
    };
};
export {
  Zn as Counter,
  Jn as Counter2,
  Kn as Marquee,
  Qn as StepMask,
  Vn as ToggleButton,
  ne as confirm,
  ee as mask,
  $n as notice,
  Yn as toast
};

function p() {
}
function G(n) {
  return n();
}
function D() {
  return /* @__PURE__ */ Object.create(null);
}
function $(n) {
  n.forEach(G);
}
function K(n) {
  return typeof n == "function";
}
function q(n, t) {
  return n != n ? t == t : n !== t || n && typeof n == "object" || typeof n == "function";
}
function Q(n) {
  return Object.keys(n).length === 0;
}
function f(n, t) {
  n.appendChild(t);
}
function j(n, t, e) {
  const r = U(n);
  if (!r.getElementById(t)) {
    const o = b("style");
    o.id = t, o.textContent = e, V(r, o);
  }
}
function U(n) {
  if (!n)
    return document;
  const t = n.getRootNode ? n.getRootNode() : n.ownerDocument;
  return t && t.host ? t : n.ownerDocument;
}
function V(n, t) {
  f(n.head || n, t);
}
function w(n, t, e) {
  n.insertBefore(t, e || null);
}
function y(n) {
  n.parentNode.removeChild(n);
}
function L(n, t) {
  for (let e = 0; e < n.length; e += 1)
    n[e] && n[e].d(t);
}
function b(n) {
  return document.createElement(n);
}
function k(n) {
  return document.createTextNode(n);
}
function W() {
  return k(" ");
}
function H(n, t, e, r) {
  return n.addEventListener(t, e, r), () => n.removeEventListener(t, e, r);
}
function g(n, t, e) {
  e == null ? n.removeAttribute(t) : n.getAttribute(t) !== e && n.setAttribute(t, e);
}
function Y(n) {
  return Array.from(n.childNodes);
}
function N(n, t) {
  t = "" + t, n.wholeText !== t && (n.data = t);
}
let A;
function _(n) {
  A = n;
}
const m = [], R = [], v = [], T = [], Z = Promise.resolve();
let C = !1;
function nn() {
  C || (C = !0, Z.then(J));
}
function E(n) {
  v.push(n);
}
const z = /* @__PURE__ */ new Set();
let x = 0;
function J() {
  const n = A;
  do {
    for (; x < m.length; ) {
      const t = m[x];
      x++, _(t), tn(t.$$);
    }
    for (_(null), m.length = 0, x = 0; R.length; )
      R.pop()();
    for (let t = 0; t < v.length; t += 1) {
      const e = v[t];
      z.has(e) || (z.add(e), e());
    }
    v.length = 0;
  } while (m.length);
  for (; T.length; )
    T.pop()();
  C = !1, z.clear(), _(n);
}
function tn(n) {
  if (n.fragment !== null) {
    n.update(), $(n.before_update);
    const t = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, t), n.after_update.forEach(E);
  }
}
const en = /* @__PURE__ */ new Set();
function rn(n, t) {
  n && n.i && (en.delete(n), n.i(t));
}
function un(n, t, e, r) {
  const { fragment: o, on_mount: i, on_destroy: s, after_update: l } = n.$$;
  o && o.m(t, e), r || E(() => {
    const c = i.map(G).filter(K);
    s ? s.push(...c) : $(c), n.$$.on_mount = [];
  }), l.forEach(E);
}
function an(n, t) {
  const e = n.$$;
  e.fragment !== null && ($(e.on_destroy), e.fragment && e.fragment.d(t), e.on_destroy = e.fragment = null, e.ctx = []);
}
function on(n, t) {
  n.$$.dirty[0] === -1 && (m.push(n), nn(), n.$$.dirty.fill(0)), n.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function M(n, t, e, r, o, i, s, l = [-1]) {
  const c = A;
  _(n);
  const u = n.$$ = {
    fragment: null,
    ctx: null,
    props: i,
    update: p,
    not_equal: o,
    bound: D(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (c ? c.$$.context : [])),
    callbacks: D(),
    dirty: l,
    skip_bound: !1,
    root: t.target || c.$$.root
  };
  s && s(u.root);
  let d = !1;
  if (u.ctx = e ? e(n, t.props || {}, (a, h, ...S) => {
    const B = S.length ? S[0] : h;
    return u.ctx && o(u.ctx[a], u.ctx[a] = B) && (!u.skip_bound && u.bound[a] && u.bound[a](B), d && on(n, a)), h;
  }) : [], u.update(), d = !0, $(u.before_update), u.fragment = r ? r(u.ctx) : !1, t.target) {
    if (t.hydrate) {
      const a = Y(t.target);
      u.fragment && u.fragment.l(a), a.forEach(y);
    } else
      u.fragment && u.fragment.c();
    t.intro && rn(n.$$.fragment), un(n, t.target, t.anchor, t.customElement), J();
  }
  _(c);
}
class O {
  $destroy() {
    an(this, 1), this.$destroy = p;
  }
  $on(t, e) {
    const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return r.push(e), () => {
      const o = r.indexOf(e);
      o !== -1 && r.splice(o, 1);
    };
  }
  $set(t) {
    this.$$set && !Q(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
function sn(n) {
  j(n, "svelte-1etnm5k", ".svelte-1etnm5k,.svelte-1etnm5k::before,.svelte-1etnm5k::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.svelte-1etnm5k::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.bg-black.svelte-1etnm5k{--un-bg-opacity:1;background-color:rgba(0,0,0,var(--un-bg-opacity))}.text-white.svelte-1etnm5k{--un-text-opacity:1;color:rgba(255,255,255,var(--un-text-opacity))}");
}
function cn(n) {
  let t, e, r, o, i;
  return {
    c() {
      t = b("button"), e = k("count is "), r = k(n[0]), g(t, "class", "bg-black text-white svelte-1etnm5k");
    },
    m(s, l) {
      w(s, t, l), f(t, e), f(t, r), o || (i = H(t, "click", n[1]), o = !0);
    },
    p(s, [l]) {
      l & 1 && N(r, s[0]);
    },
    i: p,
    o: p,
    d(s) {
      s && y(t), o = !1, i();
    }
  };
}
function ln(n, t, e) {
  let r = 0;
  return [r, () => {
    e(0, r += 1);
  }];
}
class kn extends O {
  constructor(t) {
    super(), M(this, t, ln, cn, q, {}, sn);
  }
}
function dn(n) {
  j(n, "svelte-1lydoww", ".svelte-1lydoww,.svelte-1lydoww::before,.svelte-1lydoww::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.svelte-1lydoww::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.bg-red.svelte-1lydoww{--un-bg-opacity:1;background-color:rgba(248,113,113,var(--un-bg-opacity))}.text-white.svelte-1lydoww{--un-text-opacity:1;color:rgba(255,255,255,var(--un-text-opacity))}.btn.svelte-1lydoww{border:8px solid #35eb9a}");
}
function fn(n) {
  let t, e, r, o, i;
  return {
    c() {
      t = b("button"), e = k("count is "), r = k(n[0]), g(t, "class", "btn bg-red text-white svelte-1lydoww");
    },
    m(s, l) {
      w(s, t, l), f(t, e), f(t, r), o || (i = H(t, "click", n[1]), o = !0);
    },
    p(s, [l]) {
      l & 1 && N(r, s[0]);
    },
    i: p,
    o: p,
    d(s) {
      s && y(t), o = !1, i();
    }
  };
}
function pn(n, t, e) {
  let r = 0;
  return [r, () => {
    e(0, r += 2);
  }];
}
class yn extends O {
  constructor(t) {
    super(), M(this, t, pn, fn, q, {}, dn);
  }
}
function gn(n) {
  j(n, "svelte-bp3fok", ".svelte-bp3fok,.svelte-bp3fok::before,.svelte-bp3fok::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.svelte-bp3fok::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }@keyframes svelte-bp3fok-scroll{from{transform:translateX(0)}to{transform:translateX(calc(-100% - var(--gap)))}}.marquee.svelte-bp3fok{--gap:1rem;display:flex;overflow:hidden;user-select:none;gap:var(--gap)}.marquee_content.svelte-bp3fok{flex-shrink:0;display:flex;justify-content:space-around;min-width:100%;gap:var(--gap);animation:svelte-bp3fok-scroll 10s linear infinite}");
}
function X(n, t, e) {
  const r = n.slice();
  return r[1] = t[e], r;
}
function I(n, t, e) {
  const r = n.slice();
  return r[1] = t[e], r;
}
function P(n) {
  let t, e = n[1] + "", r;
  return {
    c() {
      t = b("li"), r = k(e), g(t, "class", "svelte-bp3fok");
    },
    m(o, i) {
      w(o, t, i), f(t, r);
    },
    p(o, i) {
      i & 1 && e !== (e = o[1] + "") && N(r, e);
    },
    d(o) {
      o && y(t);
    }
  };
}
function F(n) {
  let t;
  return {
    c() {
      t = b("li"), t.textContent = "item", g(t, "class", "svelte-bp3fok");
    },
    m(e, r) {
      w(e, t, r);
    },
    p,
    d(e) {
      e && y(t);
    }
  };
}
function bn(n) {
  let t, e, r, o, i = n[0], s = [];
  for (let u = 0; u < i.length; u += 1)
    s[u] = P(I(n, i, u));
  let l = n[0], c = [];
  for (let u = 0; u < l.length; u += 1)
    c[u] = F(X(n, l, u));
  return {
    c() {
      t = b("div"), e = b("ul");
      for (let u = 0; u < s.length; u += 1)
        s[u].c();
      r = W(), o = b("ul");
      for (let u = 0; u < c.length; u += 1)
        c[u].c();
      g(e, "class", "marquee_content svelte-bp3fok"), g(o, "class", "marquee_content svelte-bp3fok"), g(o, "aria-hidden", "true"), g(t, "class", "marquee svelte-bp3fok");
    },
    m(u, d) {
      w(u, t, d), f(t, e);
      for (let a = 0; a < s.length; a += 1)
        s[a].m(e, null);
      f(t, r), f(t, o);
      for (let a = 0; a < c.length; a += 1)
        c[a].m(o, null);
    },
    p(u, [d]) {
      if (d & 1) {
        i = u[0];
        let a;
        for (a = 0; a < i.length; a += 1) {
          const h = I(u, i, a);
          s[a] ? s[a].p(h, d) : (s[a] = P(h), s[a].c(), s[a].m(e, null));
        }
        for (; a < s.length; a += 1)
          s[a].d(1);
        s.length = i.length;
      }
      if (d & 1) {
        l = u[0];
        let a;
        for (a = 0; a < l.length; a += 1) {
          const h = X(u, l, a);
          c[a] ? c[a].p(h, d) : (c[a] = F(), c[a].c(), c[a].m(o, null));
        }
        for (; a < c.length; a += 1)
          c[a].d(1);
        c.length = l.length;
      }
    },
    i: p,
    o: p,
    d(u) {
      u && y(t), L(s, u), L(c, u);
    }
  };
}
function hn(n, t, e) {
  let { data: r } = t;
  return n.$$set = (o) => {
    "data" in o && e(0, r = o.data);
  }, [r];
}
class mn extends O {
  constructor(t) {
    super(), M(this, t, hn, bn, q, { data: 0 }, gn);
  }
}
export {
  kn as Counter,
  yn as Counter2,
  mn as Marquee
};

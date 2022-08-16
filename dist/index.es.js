function h() {
}
function H(n) {
  return n();
}
function D() {
  return /* @__PURE__ */ Object.create(null);
}
function q(n) {
  n.forEach(H);
}
function Q(n) {
  return typeof n == "function";
}
function N(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function U(n) {
  return Object.keys(n).length === 0;
}
function f(n, e) {
  n.appendChild(e);
}
function A(n, e, t) {
  const r = V(n);
  if (!r.getElementById(e)) {
    const a = b("style");
    a.id = e, a.textContent = t, W(r, a);
  }
}
function V(n) {
  if (!n)
    return document;
  const e = n.getRootNode ? n.getRootNode() : n.ownerDocument;
  return e && e.host ? e : n.ownerDocument;
}
function W(n, e) {
  f(n.head || n, e);
}
function w(n, e, t) {
  n.insertBefore(e, t || null);
}
function m(n) {
  n.parentNode.removeChild(n);
}
function L(n, e) {
  for (let t = 0; t < n.length; t += 1)
    n[t] && n[t].d(e);
}
function b(n) {
  return document.createElement(n);
}
function y(n) {
  return document.createTextNode(n);
}
function Y() {
  return y(" ");
}
function J(n, e, t, r) {
  return n.addEventListener(e, t, r), () => n.removeEventListener(e, t, r);
}
function g(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
function Z(n) {
  return Array.from(n.childNodes);
}
function $(n, e) {
  e = "" + e, n.wholeText !== e && (n.data = e);
}
function v(n, e, t, r) {
  t === null ? n.style.removeProperty(e) : n.style.setProperty(e, t, r ? "important" : "");
}
let M;
function _(n) {
  M = n;
}
const k = [], R = [], z = [], T = [], nn = Promise.resolve();
let C = !1;
function en() {
  C || (C = !0, nn.then(K));
}
function j(n) {
  z.push(n);
}
const E = /* @__PURE__ */ new Set();
let x = 0;
function K() {
  const n = M;
  do {
    for (; x < k.length; ) {
      const e = k[x];
      x++, _(e), tn(e.$$);
    }
    for (_(null), k.length = 0, x = 0; R.length; )
      R.pop()();
    for (let e = 0; e < z.length; e += 1) {
      const t = z[e];
      E.has(t) || (E.add(t), t());
    }
    z.length = 0;
  } while (k.length);
  for (; T.length; )
    T.pop()();
  C = !1, E.clear(), _(n);
}
function tn(n) {
  if (n.fragment !== null) {
    n.update(), q(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(j);
  }
}
const rn = /* @__PURE__ */ new Set();
function un(n, e) {
  n && n.i && (rn.delete(n), n.i(e));
}
function an(n, e, t, r) {
  const { fragment: a, on_mount: c, on_destroy: s, after_update: l } = n.$$;
  a && a.m(e, t), r || j(() => {
    const i = c.map(H).filter(Q);
    s ? s.push(...i) : q(i), n.$$.on_mount = [];
  }), l.forEach(j);
}
function on(n, e) {
  const t = n.$$;
  t.fragment !== null && (q(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function sn(n, e) {
  n.$$.dirty[0] === -1 && (k.push(n), en(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function O(n, e, t, r, a, c, s, l = [-1]) {
  const i = M;
  _(n);
  const u = n.$$ = {
    fragment: null,
    ctx: null,
    props: c,
    update: h,
    not_equal: a,
    bound: D(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (i ? i.$$.context : [])),
    callbacks: D(),
    dirty: l,
    skip_bound: !1,
    root: e.target || i.$$.root
  };
  s && s(u.root);
  let d = !1;
  if (u.ctx = t ? t(n, e.props || {}, (o, p, ...S) => {
    const B = S.length ? S[0] : p;
    return u.ctx && a(u.ctx[o], u.ctx[o] = B) && (!u.skip_bound && u.bound[o] && u.bound[o](B), d && sn(n, o)), p;
  }) : [], u.update(), d = !0, q(u.before_update), u.fragment = r ? r(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const o = Z(e.target);
      u.fragment && u.fragment.l(o), o.forEach(m);
    } else
      u.fragment && u.fragment.c();
    e.intro && un(n.$$.fragment), an(n, e.target, e.anchor, e.customElement), K();
  }
  _(i);
}
class P {
  $destroy() {
    on(this, 1), this.$destroy = h;
  }
  $on(e, t) {
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(t), () => {
      const a = r.indexOf(t);
      a !== -1 && r.splice(a, 1);
    };
  }
  $set(e) {
    this.$$set && !U(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
function cn(n) {
  A(n, "svelte-1etnm5k", ".svelte-1etnm5k,.svelte-1etnm5k::before,.svelte-1etnm5k::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.svelte-1etnm5k::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.bg-black.svelte-1etnm5k{--un-bg-opacity:1;background-color:rgba(0,0,0,var(--un-bg-opacity))}.text-white.svelte-1etnm5k{--un-text-opacity:1;color:rgba(255,255,255,var(--un-text-opacity))}");
}
function ln(n) {
  let e, t, r, a, c;
  return {
    c() {
      e = b("button"), t = y("count is "), r = y(n[0]), g(e, "class", "bg-black text-white svelte-1etnm5k");
    },
    m(s, l) {
      w(s, e, l), f(e, t), f(e, r), a || (c = J(e, "click", n[1]), a = !0);
    },
    p(s, [l]) {
      l & 1 && $(r, s[0]);
    },
    i: h,
    o: h,
    d(s) {
      s && m(e), a = !1, c();
    }
  };
}
function dn(n, e, t) {
  let r = 0;
  return [r, () => {
    t(0, r += 1);
  }];
}
class mn extends P {
  constructor(e) {
    super(), O(this, e, dn, ln, N, {}, cn);
  }
}
function fn(n) {
  A(n, "svelte-1lydoww", ".svelte-1lydoww,.svelte-1lydoww::before,.svelte-1lydoww::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.svelte-1lydoww::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.bg-red.svelte-1lydoww{--un-bg-opacity:1;background-color:rgba(248,113,113,var(--un-bg-opacity))}.text-white.svelte-1lydoww{--un-text-opacity:1;color:rgba(255,255,255,var(--un-text-opacity))}.btn.svelte-1lydoww{border:8px solid #35eb9a}");
}
function pn(n) {
  let e, t, r, a, c;
  return {
    c() {
      e = b("button"), t = y("count is "), r = y(n[0]), g(e, "class", "btn bg-red text-white svelte-1lydoww");
    },
    m(s, l) {
      w(s, e, l), f(e, t), f(e, r), a || (c = J(e, "click", n[1]), a = !0);
    },
    p(s, [l]) {
      l & 1 && $(r, s[0]);
    },
    i: h,
    o: h,
    d(s) {
      s && m(e), a = !1, c();
    }
  };
}
function gn(n, e, t) {
  let r = 0;
  return [r, () => {
    t(0, r += 2);
  }];
}
class kn extends P {
  constructor(e) {
    super(), O(this, e, gn, pn, N, {}, fn);
  }
}
function bn(n) {
  A(n, "svelte-1cqo505", ".svelte-1cqo505.svelte-1cqo505,.svelte-1cqo505.svelte-1cqo505::before,.svelte-1cqo505.svelte-1cqo505::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.svelte-1cqo505.svelte-1cqo505::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }@keyframes svelte-1cqo505-scroll{from{transform:translateX(0)}to{transform:translateX(calc(-100% - var(--tail-gap)))}}.marquee.svelte-1cqo505.svelte-1cqo505{display:flex;overflow:hidden;user-select:none;gap:var(--tail-gap)}.marquee.svelte-1cqo505 .marquee_content.svelte-1cqo505{flex-shrink:0;display:flex;justify-content:space-around;min-width:100%;gap:var(--tail-gap);animation-name:svelte-1cqo505-scroll;animation-duration:var(--tail-speed);animation-iteration-count:infinite;animation-timing-function:linear}");
}
function X(n, e, t) {
  const r = n.slice();
  return r[3] = e[t], r;
}
function I(n, e, t) {
  const r = n.slice();
  return r[3] = e[t], r;
}
function F(n) {
  let e, t = n[3] + "", r;
  return {
    c() {
      e = b("div"), r = y(t), g(e, "class", "svelte-1cqo505");
    },
    m(a, c) {
      w(a, e, c), f(e, r);
    },
    p(a, c) {
      c & 1 && t !== (t = a[3] + "") && $(r, t);
    },
    d(a) {
      a && m(e);
    }
  };
}
function G(n) {
  let e, t = n[3] + "", r;
  return {
    c() {
      e = b("div"), r = y(t), g(e, "class", "svelte-1cqo505");
    },
    m(a, c) {
      w(a, e, c), f(e, r);
    },
    p(a, c) {
      c & 1 && t !== (t = a[3] + "") && $(r, t);
    },
    d(a) {
      a && m(e);
    }
  };
}
function hn(n) {
  let e, t, r, a, c = n[0], s = [];
  for (let u = 0; u < c.length; u += 1)
    s[u] = F(I(n, c, u));
  let l = n[0], i = [];
  for (let u = 0; u < l.length; u += 1)
    i[u] = G(X(n, l, u));
  return {
    c() {
      e = b("div"), t = b("div");
      for (let u = 0; u < s.length; u += 1)
        s[u].c();
      r = Y(), a = b("div");
      for (let u = 0; u < i.length; u += 1)
        i[u].c();
      g(t, "class", "marquee_content svelte-1cqo505"), g(a, "class", "marquee_content svelte-1cqo505"), g(a, "aria-hidden", "true"), g(e, "class", "marquee svelte-1cqo505"), v(e, "--tail-gap", n[1]), v(e, "--tail-speed", n[2]);
    },
    m(u, d) {
      w(u, e, d), f(e, t);
      for (let o = 0; o < s.length; o += 1)
        s[o].m(t, null);
      f(e, r), f(e, a);
      for (let o = 0; o < i.length; o += 1)
        i[o].m(a, null);
    },
    p(u, [d]) {
      if (d & 1) {
        c = u[0];
        let o;
        for (o = 0; o < c.length; o += 1) {
          const p = I(u, c, o);
          s[o] ? s[o].p(p, d) : (s[o] = F(p), s[o].c(), s[o].m(t, null));
        }
        for (; o < s.length; o += 1)
          s[o].d(1);
        s.length = c.length;
      }
      if (d & 1) {
        l = u[0];
        let o;
        for (o = 0; o < l.length; o += 1) {
          const p = X(u, l, o);
          i[o] ? i[o].p(p, d) : (i[o] = G(p), i[o].c(), i[o].m(a, null));
        }
        for (; o < i.length; o += 1)
          i[o].d(1);
        i.length = l.length;
      }
      d & 2 && v(e, "--tail-gap", u[1]), d & 4 && v(e, "--tail-speed", u[2]);
    },
    i: h,
    o: h,
    d(u) {
      u && m(e), L(s, u), L(i, u);
    }
  };
}
function yn(n, e, t) {
  let { data: r } = e, { gap: a = "60px" } = e, { speed: c = "5s" } = e;
  return n.$$set = (s) => {
    "data" in s && t(0, r = s.data), "gap" in s && t(1, a = s.gap), "speed" in s && t(2, c = s.speed);
  }, [r, a, c];
}
class _n extends P {
  constructor(e) {
    super(), O(this, e, yn, hn, N, { data: 0, gap: 1, speed: 2 }, bn);
  }
}
export {
  mn as Counter,
  kn as Counter2,
  _n as Marquee
};

import { X as SvelteComponentDev, Y as init, Z as safe_not_equal, _ as dispatch_dev, $ as validate_slots, a0 as element, a1 as text, a2 as space, a3 as attr_dev, a4 as add_location, a5 as set_style, a6 as insert_dev, a7 as append_dev, a8 as listen_dev, a9 as set_data_dev, aa as noop, ab as detach_dev, ac as bubble, ad as binding_callbacks, ae as bind, af as create_component, ag as mount_component, ah as transition_in, ai as transition_out, aj as destroy_component, ak as add_flush_callback, al as compute_slots, am as group_outros, an as check_outros, ao as create_slot, ap as update_slot_base, aq as get_all_dirty_from_scope, ar as get_slot_changes, as as null_to_empty, at as validate_each_argument, au as assign, av as get_spread_update, aw as get_spread_object, ax as destroy_each, ay as src_url_equal, az as createEventDispatcher, aA as run_all, aB as empty, aC as globals, aD as onMount, aE as useDark, aF as useToggle, aG as markRaw, R as reactive, d as defineComponent, k as ref, aH as watchEffect, o as openBlock, c as createBlock, m as mergeProps, aI as resolveDynamicComponent, q as createCommentVNode } from "./vendor.18bd7c13.js";
const AniButton_svelte_svelte_type_style_lang = "";
const file$h = "src/components/AniButton.svelte";
function create_fragment$j(ctx) {
  let div2;
  let div0;
  let t0_value = ctx[0][0] + "";
  let t0;
  let t1;
  let div1;
  let t2_value = ctx[0][1] + "";
  let t2;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      div2 = element("div");
      div0 = element("div");
      t0 = text(t0_value);
      t1 = space();
      div1 = element("div");
      t2 = text(t2_value);
      attr_dev(div0, "class", "box inner s-7D75XUUQ1Qs4");
      add_location(div0, file$h, 10, 4, 365);
      attr_dev(div1, "class", "box inner2 s-7D75XUUQ1Qs4");
      add_location(div1, file$h, 11, 4, 411);
      attr_dev(div2, "class", "ani-btn s-7D75XUUQ1Qs4");
      set_style(div2, "--duration", ctx[1]);
      set_style(div2, "--half-duration", ctx[4]);
      set_style(div2, "background", ctx[2]);
      set_style(div2, "color", ctx[3]);
      add_location(div2, file$h, 8, 2, 224);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div2, anchor);
      append_dev(div2, div0);
      append_dev(div0, t0);
      append_dev(div2, t1);
      append_dev(div2, div1);
      append_dev(div1, t2);
      if (!mounted) {
        dispose = listen_dev(div2, "click", ctx[5], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & 1 && t0_value !== (t0_value = ctx2[0][0] + ""))
        set_data_dev(t0, t0_value);
      if (dirty & 1 && t2_value !== (t2_value = ctx2[0][1] + ""))
        set_data_dev(t2, t2_value);
      if (dirty & 2) {
        set_style(div2, "--duration", ctx2[1]);
      }
      if (dirty & 16) {
        set_style(div2, "--half-duration", ctx2[4]);
      }
      if (dirty & 4) {
        set_style(div2, "background", ctx2[2]);
      }
      if (dirty & 8) {
        set_style(div2, "color", ctx2[3]);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div2);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$j.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$j($$self, $$props, $$invalidate) {
  let halfDuration;
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("AniButton", slots, []);
  let { dataArr = [] } = $$props;
  let { duration = "2s" } = $$props;
  let { bgColor = "deepskyblue" } = $$props;
  let { color = "white" } = $$props;
  const writable_props = ["dataArr", "duration", "bgColor", "color"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<AniButton> was created with unknown prop '${key}'`);
  });
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$props2) => {
    if ("dataArr" in $$props2)
      $$invalidate(0, dataArr = $$props2.dataArr);
    if ("duration" in $$props2)
      $$invalidate(1, duration = $$props2.duration);
    if ("bgColor" in $$props2)
      $$invalidate(2, bgColor = $$props2.bgColor);
    if ("color" in $$props2)
      $$invalidate(3, color = $$props2.color);
  };
  $$self.$capture_state = () => ({
    dataArr,
    duration,
    bgColor,
    color,
    halfDuration
  });
  $$self.$inject_state = ($$props2) => {
    if ("dataArr" in $$props2)
      $$invalidate(0, dataArr = $$props2.dataArr);
    if ("duration" in $$props2)
      $$invalidate(1, duration = $$props2.duration);
    if ("bgColor" in $$props2)
      $$invalidate(2, bgColor = $$props2.bgColor);
    if ("color" in $$props2)
      $$invalidate(3, color = $$props2.color);
    if ("halfDuration" in $$props2)
      $$invalidate(4, halfDuration = $$props2.halfDuration);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 2) {
      $$invalidate(4, halfDuration = duration.slice(0, duration.length - 1) / 2 + "s");
    }
  };
  return [dataArr, duration, bgColor, color, halfDuration, click_handler];
}
class AniButton extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$j, create_fragment$j, safe_not_equal, {
      dataArr: 0,
      duration: 1,
      bgColor: 2,
      color: 3
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "AniButton",
      options,
      id: create_fragment$j.name
    });
  }
  get dataArr() {
    throw new Error("<AniButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set dataArr(value) {
    throw new Error("<AniButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get duration() {
    throw new Error("<AniButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set duration(value) {
    throw new Error("<AniButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get bgColor() {
    throw new Error("<AniButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set bgColor(value) {
    throw new Error("<AniButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get color() {
    throw new Error("<AniButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set color(value) {
    throw new Error("<AniButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const AniButton_story_svelte_svelte_type_style_lang = "";
function create_default_slot_1$9(ctx) {
  let anibutton;
  let current;
  anibutton = new AniButton({
    props: {
      dataArr: ctx[1].dataArr,
      duration: ctx[1].duration,
      bgColor: ctx[1].bgColor,
      color: ctx[1].color
    },
    $$inline: true
  });
  anibutton.$on("click", ctx[6]);
  const block = {
    c: function create() {
      create_component(anibutton.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(anibutton, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const anibutton_changes = {};
      if (dirty & 2)
        anibutton_changes.dataArr = ctx2[1].dataArr;
      if (dirty & 2)
        anibutton_changes.duration = ctx2[1].duration;
      if (dirty & 2)
        anibutton_changes.bgColor = ctx2[1].bgColor;
      if (dirty & 2)
        anibutton_changes.color = ctx2[1].color;
      anibutton.$set(anibutton_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(anibutton.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(anibutton.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(anibutton, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1$9.name,
    type: "slot",
    source: '(15:2) <Hst.Variant title=\\"demo\\">',
    ctx
  });
  return block;
}
function create_default_slot$9(ctx) {
  let hst_variant;
  let current;
  hst_variant = new ctx[0].Variant({
    props: {
      title: "demo",
      $$slots: { default: [create_default_slot_1$9] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_variant.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_variant, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_variant_changes = {};
      if (dirty & 130) {
        hst_variant_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant.$set(hst_variant_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_variant.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_variant.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_variant, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$9.name,
    type: "slot",
    source: "(14:0) <Hst.Story>",
    ctx
  });
  return block;
}
function create_controls_slot$5(ctx) {
  let hst_text0;
  let updating_value;
  let t0;
  let hst_text1;
  let updating_value_1;
  let t1;
  let hst_text2;
  let updating_value_2;
  let t2;
  let hst_text3;
  let updating_value_3;
  let current;
  function hst_text0_value_binding(value) {
    ctx[2](value);
  }
  let hst_text0_props = { title: "dataArr" };
  if (ctx[1].dataArr !== void 0) {
    hst_text0_props.value = ctx[1].dataArr;
  }
  hst_text0 = new ctx[0].Text({ props: hst_text0_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text0, "value", hst_text0_value_binding));
  function hst_text1_value_binding(value) {
    ctx[3](value);
  }
  let hst_text1_props = { title: "duration" };
  if (ctx[1].duration !== void 0) {
    hst_text1_props.value = ctx[1].duration;
  }
  hst_text1 = new ctx[0].Text({ props: hst_text1_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text1, "value", hst_text1_value_binding));
  function hst_text2_value_binding(value) {
    ctx[4](value);
  }
  let hst_text2_props = { title: "bgColor" };
  if (ctx[1].bgColor !== void 0) {
    hst_text2_props.value = ctx[1].bgColor;
  }
  hst_text2 = new ctx[0].Text({ props: hst_text2_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text2, "value", hst_text2_value_binding));
  function hst_text3_value_binding(value) {
    ctx[5](value);
  }
  let hst_text3_props = { title: "color" };
  if (ctx[1].color !== void 0) {
    hst_text3_props.value = ctx[1].color;
  }
  hst_text3 = new ctx[0].Text({ props: hst_text3_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text3, "value", hst_text3_value_binding));
  const block = {
    c: function create() {
      create_component(hst_text0.$$.fragment);
      t0 = space();
      create_component(hst_text1.$$.fragment);
      t1 = space();
      create_component(hst_text2.$$.fragment);
      t2 = space();
      create_component(hst_text3.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_text0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(hst_text1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(hst_text2, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(hst_text3, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_text0_changes = {};
      if (!updating_value && dirty & 2) {
        updating_value = true;
        hst_text0_changes.value = ctx2[1].dataArr;
        add_flush_callback(() => updating_value = false);
      }
      hst_text0.$set(hst_text0_changes);
      const hst_text1_changes = {};
      if (!updating_value_1 && dirty & 2) {
        updating_value_1 = true;
        hst_text1_changes.value = ctx2[1].duration;
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_text1.$set(hst_text1_changes);
      const hst_text2_changes = {};
      if (!updating_value_2 && dirty & 2) {
        updating_value_2 = true;
        hst_text2_changes.value = ctx2[1].bgColor;
        add_flush_callback(() => updating_value_2 = false);
      }
      hst_text2.$set(hst_text2_changes);
      const hst_text3_changes = {};
      if (!updating_value_3 && dirty & 2) {
        updating_value_3 = true;
        hst_text3_changes.value = ctx2[1].color;
        add_flush_callback(() => updating_value_3 = false);
      }
      hst_text3.$set(hst_text3_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_text0.$$.fragment, local);
      transition_in(hst_text1.$$.fragment, local);
      transition_in(hst_text2.$$.fragment, local);
      transition_in(hst_text3.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_text0.$$.fragment, local);
      transition_out(hst_text1.$$.fragment, local);
      transition_out(hst_text2.$$.fragment, local);
      transition_out(hst_text3.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_text0, detaching);
      if (detaching)
        detach_dev(t0);
      destroy_component(hst_text1, detaching);
      if (detaching)
        detach_dev(t1);
      destroy_component(hst_text2, detaching);
      if (detaching)
        detach_dev(t2);
      destroy_component(hst_text3, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$5.name,
    type: "slot",
    source: '(24:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$i(ctx) {
  let hst_story;
  let current;
  hst_story = new ctx[0].Story({
    props: {
      $$slots: {
        controls: [create_controls_slot$5],
        default: [create_default_slot$9]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & 130) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$i.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$i($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("AniButton_story", slots, []);
  let { Hst } = $$props;
  let args = {
    dataArr: ["\u8FC7\u5927\u554A\u5E74", "\u9886\u798F\u5229"],
    duration: "2s",
    bgColor: "",
    color: ""
  };
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<AniButton_story> was created with unknown prop '${key}'`);
  });
  function hst_text0_value_binding(value) {
    if ($$self.$$.not_equal(args.dataArr, value)) {
      args.dataArr = value;
      $$invalidate(1, args);
    }
  }
  function hst_text1_value_binding(value) {
    if ($$self.$$.not_equal(args.duration, value)) {
      args.duration = value;
      $$invalidate(1, args);
    }
  }
  function hst_text2_value_binding(value) {
    if ($$self.$$.not_equal(args.bgColor, value)) {
      args.bgColor = value;
      $$invalidate(1, args);
    }
  }
  function hst_text3_value_binding(value) {
    if ($$self.$$.not_equal(args.color, value)) {
      args.color = value;
      $$invalidate(1, args);
    }
  }
  const click_handler = () => alert("\u70B9\u4E86");
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ AniButton, Hst, args });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("args" in $$props2)
      $$invalidate(1, args = $$props2.args);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    Hst,
    args,
    hst_text0_value_binding,
    hst_text1_value_binding,
    hst_text2_value_binding,
    hst_text3_value_binding,
    click_handler
  ];
}
class AniButton_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$i, create_fragment$i, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "AniButton_story",
      options,
      id: create_fragment$i.name
    });
    const { ctx } = this.$$;
    const props = options.props || {};
    if (ctx[0] === void 0 && !("Hst" in props)) {
      console.warn("<AniButton_story> was created without expected prop 'Hst'");
    }
  }
  get Hst() {
    throw new Error("<AniButton_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<AniButton_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const styleString = (obj) => {
  return Object.entries(obj).map(([name, value]) => `${name}: ${value};`).join(" ");
};
const Circle_svelte_svelte_type_style_lang = "";
const file$g = "src/components/circle/Circle.svelte";
function create_else_block(ctx) {
  let current;
  const default_slot_template = ctx[11].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[10], null);
  const block = {
    c: function create() {
      if (default_slot)
        default_slot.c();
    },
    m: function mount(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 1024)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            ctx2[10],
            !current ? get_all_dirty_from_scope(ctx2[10]) : get_slot_changes(default_slot_template, ctx2[10], dirty, null),
            null
          );
        }
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (default_slot)
        default_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block.name,
    type: "else",
    source: "(20:2) {:else}",
    ctx
  });
  return block;
}
function create_if_block$2(ctx) {
  let div;
  let t;
  let div_class_value;
  const block = {
    c: function create() {
      div = element("div");
      t = text(ctx[0]);
      attr_dev(div, "class", div_class_value = null_to_empty(`circle-text ${ctx[1]}`) + " s-uKjT8hSX4J5F");
      attr_dev(div, "style", ctx[2]);
      add_location(div, file$g, 18, 2, 481);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, t);
    },
    p: function update(ctx2, dirty) {
      if (dirty & 1)
        set_data_dev(t, ctx2[0]);
      if (dirty & 2 && div_class_value !== (div_class_value = null_to_empty(`circle-text ${ctx2[1]}`) + " s-uKjT8hSX4J5F")) {
        attr_dev(div, "class", div_class_value);
      }
      if (dirty & 4) {
        attr_dev(div, "style", ctx2[2]);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$2.name,
    type: "if",
    source: "(18:2) {#if !$$slots.default}",
    ctx
  });
  return block;
}
function create_fragment$h(ctx) {
  let div;
  let current_block_type_index;
  let if_block;
  let div_style_value;
  let current;
  const if_block_creators = [create_if_block$2, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (!ctx2[4].default)
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  const block = {
    c: function create() {
      div = element("div");
      if_block.c();
      attr_dev(div, "class", "leaf-circle s-uKjT8hSX4J5F");
      attr_dev(div, "style", div_style_value = styleString(ctx[3]));
      add_location(div, file$g, 16, 0, 396);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      if_blocks[current_block_type_index].m(div, null);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(div, null);
      }
      if (!current || dirty & 8 && div_style_value !== (div_style_value = styleString(ctx2[3]))) {
        attr_dev(div, "style", div_style_value);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      if_blocks[current_block_type_index].d();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$h.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$h($$self, $$props, $$invalidate) {
  let sideLen;
  let sideLenLenCss;
  let styleObj;
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Circle", slots, ["default"]);
  const $$slots = compute_slots(slots);
  let { radius = 10 } = $$props;
  let { radiusUnit = "px" } = $$props;
  let { text: text2 = "" } = $$props;
  let { textClass = "" } = $$props;
  let { textStyle = "" } = $$props;
  let { bg = "gray" } = $$props;
  const writable_props = ["radius", "radiusUnit", "text", "textClass", "textStyle", "bg"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Circle> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("radius" in $$props2)
      $$invalidate(5, radius = $$props2.radius);
    if ("radiusUnit" in $$props2)
      $$invalidate(6, radiusUnit = $$props2.radiusUnit);
    if ("text" in $$props2)
      $$invalidate(0, text2 = $$props2.text);
    if ("textClass" in $$props2)
      $$invalidate(1, textClass = $$props2.textClass);
    if ("textStyle" in $$props2)
      $$invalidate(2, textStyle = $$props2.textStyle);
    if ("bg" in $$props2)
      $$invalidate(7, bg = $$props2.bg);
    if ("$$scope" in $$props2)
      $$invalidate(10, $$scope = $$props2.$$scope);
  };
  $$self.$capture_state = () => ({
    styleString,
    radius,
    radiusUnit,
    text: text2,
    textClass,
    textStyle,
    bg,
    sideLenLenCss,
    styleObj,
    sideLen
  });
  $$self.$inject_state = ($$props2) => {
    if ("radius" in $$props2)
      $$invalidate(5, radius = $$props2.radius);
    if ("radiusUnit" in $$props2)
      $$invalidate(6, radiusUnit = $$props2.radiusUnit);
    if ("text" in $$props2)
      $$invalidate(0, text2 = $$props2.text);
    if ("textClass" in $$props2)
      $$invalidate(1, textClass = $$props2.textClass);
    if ("textStyle" in $$props2)
      $$invalidate(2, textStyle = $$props2.textStyle);
    if ("bg" in $$props2)
      $$invalidate(7, bg = $$props2.bg);
    if ("sideLenLenCss" in $$props2)
      $$invalidate(8, sideLenLenCss = $$props2.sideLenLenCss);
    if ("styleObj" in $$props2)
      $$invalidate(3, styleObj = $$props2.styleObj);
    if ("sideLen" in $$props2)
      $$invalidate(9, sideLen = $$props2.sideLen);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 32) {
      $$invalidate(9, sideLen = radius * 2);
    }
    if ($$self.$$.dirty & 576) {
      $$invalidate(8, sideLenLenCss = sideLen + radiusUnit);
    }
    if ($$self.$$.dirty & 384) {
      $$invalidate(3, styleObj = {
        width: sideLenLenCss,
        height: sideLenLenCss,
        ["background-color"]: bg
      });
    }
  };
  return [
    text2,
    textClass,
    textStyle,
    styleObj,
    $$slots,
    radius,
    radiusUnit,
    bg,
    sideLenLenCss,
    sideLen,
    $$scope,
    slots
  ];
}
class Circle extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$h, create_fragment$h, safe_not_equal, {
      radius: 5,
      radiusUnit: 6,
      text: 0,
      textClass: 1,
      textStyle: 2,
      bg: 7
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Circle",
      options,
      id: create_fragment$h.name
    });
  }
  get radius() {
    throw new Error("<Circle>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set radius(value) {
    throw new Error("<Circle>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get radiusUnit() {
    throw new Error("<Circle>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set radiusUnit(value) {
    throw new Error("<Circle>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get text() {
    throw new Error("<Circle>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set text(value) {
    throw new Error("<Circle>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get textClass() {
    throw new Error("<Circle>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set textClass(value) {
    throw new Error("<Circle>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get textStyle() {
    throw new Error("<Circle>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set textStyle(value) {
    throw new Error("<Circle>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get bg() {
    throw new Error("<Circle>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set bg(value) {
    throw new Error("<Circle>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Circle_story_svelte_svelte_type_style_lang = "";
const file$f = "src/story/circle/Circle.story.svelte";
function get_each_context$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[2] = list[i];
  return child_ctx;
}
function create_each_block$1(ctx) {
  let span;
  let circle;
  let current;
  const circle_spread_levels = [ctx[2]];
  let circle_props = {};
  for (let i = 0; i < circle_spread_levels.length; i += 1) {
    circle_props = assign(circle_props, circle_spread_levels[i]);
  }
  circle = new Circle({ props: circle_props, $$inline: true });
  const block = {
    c: function create() {
      span = element("span");
      create_component(circle.$$.fragment);
      attr_dev(span, "class", "px-10px s-9Ney8CMWiwSe");
      add_location(span, file$f, 44, 4, 723);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      mount_component(circle, span, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const circle_changes = dirty & 2 ? get_spread_update(circle_spread_levels, [get_spread_object(ctx2[2])]) : {};
      circle.$set(circle_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(circle.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(circle.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(span);
      destroy_component(circle);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block$1.name,
    type: "each",
    source: "(44:4) {#each circles as circle}",
    ctx
  });
  return block;
}
function create_default_slot_2$1(ctx) {
  let img;
  let img_src_value;
  const block = {
    c: function create() {
      img = element("img");
      if (!src_url_equal(img.src, img_src_value = "/logo-big.jpg"))
        attr_dev(img, "src", img_src_value);
      attr_dev(img, "class", "w-100% s-9Ney8CMWiwSe");
      add_location(img, file$f, 52, 8, 903);
    },
    m: function mount(target, anchor) {
      insert_dev(target, img, anchor);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(img);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_2$1.name,
    type: "slot",
    source: '(52:6) <Circle {...circles[5]} bg=\\"yellow\\">',
    ctx
  });
  return block;
}
function create_default_slot_1$8(ctx) {
  let t0;
  let t1;
  let div;
  let t2;
  let circle;
  let current;
  let each_value = ctx[1];
  validate_each_argument(each_value);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  const circle_spread_levels = [ctx[1][5], { bg: "yellow" }];
  let circle_props = {
    $$slots: { default: [create_default_slot_2$1] },
    $$scope: { ctx }
  };
  for (let i = 0; i < circle_spread_levels.length; i += 1) {
    circle_props = assign(circle_props, circle_spread_levels[i]);
  }
  circle = new Circle({ props: circle_props, $$inline: true });
  const block = {
    c: function create() {
      t0 = text("circle with different radius\n    ");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t1 = space();
      div = element("div");
      t2 = text("make a avatar/logo with slot\n      ");
      create_component(circle.$$.fragment);
      attr_dev(div, "class", "s-9Ney8CMWiwSe");
      add_location(div, file$f, 49, 4, 811);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert_dev(target, t1, anchor);
      insert_dev(target, div, anchor);
      append_dev(div, t2);
      mount_component(circle, div, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (dirty & 2) {
        each_value = ctx2[1];
        validate_each_argument(each_value);
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$1(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block$1(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(t1.parentNode, t1);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
      const circle_changes = dirty & 2 ? get_spread_update(circle_spread_levels, [get_spread_object(ctx2[1][5]), circle_spread_levels[1]]) : {};
      if (dirty & 32) {
        circle_changes.$$scope = { dirty, ctx: ctx2 };
      }
      circle.$set(circle_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      transition_in(circle.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      transition_out(circle.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t0);
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach_dev(t1);
      if (detaching)
        detach_dev(div);
      destroy_component(circle);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1$8.name,
    type: "slot",
    source: '(42:2) <Hst.Variant title=\\"demo\\">',
    ctx
  });
  return block;
}
function create_default_slot$8(ctx) {
  let hst_variant;
  let current;
  hst_variant = new ctx[0].Variant({
    props: {
      title: "demo",
      $$slots: { default: [create_default_slot_1$8] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_variant.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_variant, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_variant_changes = {};
      if (dirty & 32) {
        hst_variant_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant.$set(hst_variant_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_variant.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_variant.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_variant, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$8.name,
    type: "slot",
    source: "(41:0) <Hst.Story>",
    ctx
  });
  return block;
}
function create_fragment$g(ctx) {
  let hst_story;
  let current;
  hst_story = new ctx[0].Story({
    props: {
      $$slots: { default: [create_default_slot$8] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & 32) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$g.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$g($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Circle_story", slots, []);
  let { Hst } = $$props;
  const circles = [
    { radius: 3, text: "", bg: "deepskyblue" },
    { radius: 10, text: "", bg: "deepskyblue" },
    { radius: 20, text: "", bg: "deepskyblue" },
    { radius: 30, text: "", bg: "deepskyblue" },
    { radius: 40, text: "", bg: "deepskyblue" },
    {
      radius: 50,
      text: "flyleaf",
      bg: "deepskyblue",
      textStyle: "color: white; font-size: 20px"
    }
  ];
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Circle_story> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ Circle, Hst, circles });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst, circles];
}
class Circle_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$g, create_fragment$g, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Circle_story",
      options,
      id: create_fragment$g.name
    });
    const { ctx } = this.$$;
    const props = options.props || {};
    if (ctx[0] === void 0 && !("Hst" in props)) {
      console.warn("<Circle_story> was created without expected prop 'Hst'");
    }
  }
  get Hst() {
    throw new Error("<Circle_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Circle_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Confirm_svelte_svelte_type_style_lang = "";
const file$e = "src/components/confirm/Confirm.svelte";
function create_fragment$f(ctx) {
  let div8;
  let div7;
  let div3;
  let div0;
  let t0;
  let t1;
  let div2;
  let div1;
  let t2;
  let t3;
  let div6;
  let div4;
  let t4;
  let div4_style_value;
  let t5;
  let div5;
  let t6;
  let div5_style_value;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      div8 = element("div");
      div7 = element("div");
      div3 = element("div");
      div0 = element("div");
      t0 = text(ctx[0]);
      t1 = space();
      div2 = element("div");
      div1 = element("div");
      t2 = text(ctx[1]);
      t3 = space();
      div6 = element("div");
      div4 = element("div");
      t4 = text(ctx[2]);
      t5 = space();
      div5 = element("div");
      t6 = text(ctx[3]);
      attr_dev(div0, "class", "modal-title s-OtMoO29Wp4Bo");
      add_location(div0, file$e, 31, 16, 821);
      attr_dev(div1, "class", "s-OtMoO29Wp4Bo");
      add_location(div1, file$e, 33, 20, 918);
      attr_dev(div2, "class", "content s-OtMoO29Wp4Bo");
      add_location(div2, file$e, 32, 16, 876);
      attr_dev(div3, "class", "modal-content-body s-OtMoO29Wp4Bo");
      add_location(div3, file$e, 30, 12, 772);
      attr_dev(div4, "class", "btn button-left centerLayout s-OtMoO29Wp4Bo");
      attr_dev(div4, "style", div4_style_value = styleString(ctx[4]));
      add_location(div4, file$e, 37, 16, 1043);
      attr_dev(div5, "class", "btn button-right centerLayout s-OtMoO29Wp4Bo");
      attr_dev(div5, "style", div5_style_value = styleString(ctx[5]));
      add_location(div5, file$e, 40, 16, 1225);
      attr_dev(div6, "class", "confirm-button-wrap s-OtMoO29Wp4Bo");
      add_location(div6, file$e, 36, 12, 993);
      attr_dev(div7, "class", "confirm-modal-content s-OtMoO29Wp4Bo");
      add_location(div7, file$e, 29, 8, 724);
      attr_dev(div8, "class", "confirm-modal s-OtMoO29Wp4Bo");
      add_location(div8, file$e, 28, 4, 668);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div8, anchor);
      append_dev(div8, div7);
      append_dev(div7, div3);
      append_dev(div3, div0);
      append_dev(div0, t0);
      append_dev(div3, t1);
      append_dev(div3, div2);
      append_dev(div2, div1);
      append_dev(div1, t2);
      append_dev(div7, t3);
      append_dev(div7, div6);
      append_dev(div6, div4);
      append_dev(div4, t4);
      append_dev(div6, t5);
      append_dev(div6, div5);
      append_dev(div5, t6);
      ctx[11](div8);
      if (!mounted) {
        dispose = [
          listen_dev(div4, "click", ctx[8], false, false, false),
          listen_dev(div5, "click", ctx[7], false, false, false)
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & 1)
        set_data_dev(t0, ctx2[0]);
      if (dirty & 2)
        set_data_dev(t2, ctx2[1]);
      if (dirty & 4)
        set_data_dev(t4, ctx2[2]);
      if (dirty & 16 && div4_style_value !== (div4_style_value = styleString(ctx2[4]))) {
        attr_dev(div4, "style", div4_style_value);
      }
      if (dirty & 8)
        set_data_dev(t6, ctx2[3]);
      if (dirty & 32 && div5_style_value !== (div5_style_value = styleString(ctx2[5]))) {
        attr_dev(div5, "style", div5_style_value);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div8);
      ctx[11](null);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$f.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$f($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Confirm", slots, []);
  let { title = "" } = $$props;
  let { content = "" } = $$props;
  let { cancelText = "\u53D6\u6D88" } = $$props;
  let { okText = "\u786E\u5B9A" } = $$props;
  let { onCancel = () => {
  } } = $$props;
  let { onOk = () => {
  } } = $$props;
  let { cancelBtnStyle = "" } = $$props;
  let { okBtnStyle = "" } = $$props;
  const dispatcher = createEventDispatcher();
  let nodeRef;
  const destroySelf = () => {
    nodeRef.parentNode.removeChild(nodeRef);
  };
  const onOkClk = () => {
    onOk();
    dispatcher("onOk");
  };
  const onCancelClk = () => {
    onCancel();
    dispatcher("onCancel");
  };
  const writable_props = [
    "title",
    "content",
    "cancelText",
    "okText",
    "onCancel",
    "onOk",
    "cancelBtnStyle",
    "okBtnStyle"
  ];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Confirm> was created with unknown prop '${key}'`);
  });
  function div8_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      nodeRef = $$value;
      $$invalidate(6, nodeRef);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("title" in $$props2)
      $$invalidate(0, title = $$props2.title);
    if ("content" in $$props2)
      $$invalidate(1, content = $$props2.content);
    if ("cancelText" in $$props2)
      $$invalidate(2, cancelText = $$props2.cancelText);
    if ("okText" in $$props2)
      $$invalidate(3, okText = $$props2.okText);
    if ("onCancel" in $$props2)
      $$invalidate(9, onCancel = $$props2.onCancel);
    if ("onOk" in $$props2)
      $$invalidate(10, onOk = $$props2.onOk);
    if ("cancelBtnStyle" in $$props2)
      $$invalidate(4, cancelBtnStyle = $$props2.cancelBtnStyle);
    if ("okBtnStyle" in $$props2)
      $$invalidate(5, okBtnStyle = $$props2.okBtnStyle);
  };
  $$self.$capture_state = () => ({
    createEventDispatcher,
    styleString,
    title,
    content,
    cancelText,
    okText,
    onCancel,
    onOk,
    cancelBtnStyle,
    okBtnStyle,
    dispatcher,
    nodeRef,
    destroySelf,
    onOkClk,
    onCancelClk
  });
  $$self.$inject_state = ($$props2) => {
    if ("title" in $$props2)
      $$invalidate(0, title = $$props2.title);
    if ("content" in $$props2)
      $$invalidate(1, content = $$props2.content);
    if ("cancelText" in $$props2)
      $$invalidate(2, cancelText = $$props2.cancelText);
    if ("okText" in $$props2)
      $$invalidate(3, okText = $$props2.okText);
    if ("onCancel" in $$props2)
      $$invalidate(9, onCancel = $$props2.onCancel);
    if ("onOk" in $$props2)
      $$invalidate(10, onOk = $$props2.onOk);
    if ("cancelBtnStyle" in $$props2)
      $$invalidate(4, cancelBtnStyle = $$props2.cancelBtnStyle);
    if ("okBtnStyle" in $$props2)
      $$invalidate(5, okBtnStyle = $$props2.okBtnStyle);
    if ("nodeRef" in $$props2)
      $$invalidate(6, nodeRef = $$props2.nodeRef);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    title,
    content,
    cancelText,
    okText,
    cancelBtnStyle,
    okBtnStyle,
    nodeRef,
    onOkClk,
    onCancelClk,
    onCancel,
    onOk,
    div8_binding
  ];
}
class Confirm extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$f, create_fragment$f, safe_not_equal, {
      title: 0,
      content: 1,
      cancelText: 2,
      okText: 3,
      onCancel: 9,
      onOk: 10,
      cancelBtnStyle: 4,
      okBtnStyle: 5
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Confirm",
      options,
      id: create_fragment$f.name
    });
  }
  get title() {
    throw new Error("<Confirm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set title(value) {
    throw new Error("<Confirm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get content() {
    throw new Error("<Confirm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set content(value) {
    throw new Error("<Confirm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get cancelText() {
    throw new Error("<Confirm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set cancelText(value) {
    throw new Error("<Confirm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get okText() {
    throw new Error("<Confirm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set okText(value) {
    throw new Error("<Confirm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get onCancel() {
    throw new Error("<Confirm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set onCancel(value) {
    throw new Error("<Confirm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get onOk() {
    throw new Error("<Confirm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set onOk(value) {
    throw new Error("<Confirm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get cancelBtnStyle() {
    throw new Error("<Confirm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set cancelBtnStyle(value) {
    throw new Error("<Confirm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get okBtnStyle() {
    throw new Error("<Confirm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set okBtnStyle(value) {
    throw new Error("<Confirm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Confirm_story_svelte_svelte_type_style_lang = "";
const file$d = "src/story/confirm/Confirm.story.svelte";
function create_if_block$1(ctx) {
  let confirm;
  let current;
  confirm = new Confirm({
    props: {
      title: ctx[2],
      content: ctx[3],
      onOk: ctx[6],
      onCancel: ctx[7]
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(confirm.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(confirm, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const confirm_changes = {};
      if (dirty & 4)
        confirm_changes.title = ctx2[2];
      if (dirty & 8)
        confirm_changes.content = ctx2[3];
      confirm.$set(confirm_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(confirm.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(confirm.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(confirm, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$1.name,
    type: "if",
    source: "(26:4) {#if show}",
    ctx
  });
  return block;
}
function create_default_slot_1$7(ctx) {
  let button;
  let t1;
  let div;
  let t2;
  let t3;
  let t4;
  let if_block_anchor;
  let current;
  let mounted;
  let dispose;
  let if_block = ctx[1] && create_if_block$1(ctx);
  const block = {
    c: function create() {
      button = element("button");
      button.textContent = "\u70B9\u6211";
      t1 = space();
      div = element("div");
      t2 = text("\u5F39\u7A97\u5C55\u793A\u72B6\u6001\uFF1A");
      t3 = text(ctx[1]);
      t4 = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      attr_dev(button, "class", "s-yPpv3DMWTQVA");
      add_location(button, file$d, 23, 4, 448);
      attr_dev(div, "class", "s-yPpv3DMWTQVA");
      add_location(div, file$d, 24, 4, 504);
    },
    m: function mount(target, anchor) {
      insert_dev(target, button, anchor);
      insert_dev(target, t1, anchor);
      insert_dev(target, div, anchor);
      append_dev(div, t2);
      append_dev(div, t3);
      insert_dev(target, t4, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
      if (!mounted) {
        dispose = listen_dev(button, "click", ctx[12], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx2, dirty) {
      if (!current || dirty & 2)
        set_data_dev(t3, ctx2[1]);
      if (ctx2[1]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 2) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$1(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(button);
      if (detaching)
        detach_dev(t1);
      if (detaching)
        detach_dev(div);
      if (detaching)
        detach_dev(t4);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach_dev(if_block_anchor);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1$7.name,
    type: "slot",
    source: '(23:2) <Hst.Variant title=\\"demo\\">',
    ctx
  });
  return block;
}
function create_default_slot$7(ctx) {
  let hst_variant;
  let current;
  hst_variant = new ctx[0].Variant({
    props: {
      title: "demo",
      $$slots: { default: [create_default_slot_1$7] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_variant.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_variant, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_variant_changes = {};
      if (dirty & 16398) {
        hst_variant_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant.$set(hst_variant_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_variant.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_variant.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_variant, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$7.name,
    type: "slot",
    source: "(22:0) <Hst.Story>",
    ctx
  });
  return block;
}
function create_controls_slot$4(ctx) {
  let hst_text0;
  let updating_value;
  let t0;
  let hst_text1;
  let updating_value_1;
  let t1;
  let hst_text2;
  let updating_value_2;
  let t2;
  let hst_text3;
  let updating_value_3;
  let current;
  function hst_text0_value_binding(value) {
    ctx[8](value);
  }
  let hst_text0_props = { title: "Title" };
  if (ctx[2] !== void 0) {
    hst_text0_props.value = ctx[2];
  }
  hst_text0 = new ctx[0].Text({ props: hst_text0_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text0, "value", hst_text0_value_binding));
  function hst_text1_value_binding(value) {
    ctx[9](value);
  }
  let hst_text1_props = { title: "Content" };
  if (ctx[3] !== void 0) {
    hst_text1_props.value = ctx[3];
  }
  hst_text1 = new ctx[0].Text({ props: hst_text1_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text1, "value", hst_text1_value_binding));
  function hst_text2_value_binding(value) {
    ctx[10](value);
  }
  let hst_text2_props = { title: "okText" };
  if (ctx[4] !== void 0) {
    hst_text2_props.value = ctx[4];
  }
  hst_text2 = new ctx[0].Text({ props: hst_text2_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text2, "value", hst_text2_value_binding));
  function hst_text3_value_binding(value) {
    ctx[11](value);
  }
  let hst_text3_props = { title: "cancelText" };
  if (ctx[5] !== void 0) {
    hst_text3_props.value = ctx[5];
  }
  hst_text3 = new ctx[0].Text({ props: hst_text3_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text3, "value", hst_text3_value_binding));
  const block = {
    c: function create() {
      create_component(hst_text0.$$.fragment);
      t0 = space();
      create_component(hst_text1.$$.fragment);
      t1 = space();
      create_component(hst_text2.$$.fragment);
      t2 = space();
      create_component(hst_text3.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_text0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(hst_text1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(hst_text2, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(hst_text3, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_text0_changes = {};
      if (!updating_value && dirty & 4) {
        updating_value = true;
        hst_text0_changes.value = ctx2[2];
        add_flush_callback(() => updating_value = false);
      }
      hst_text0.$set(hst_text0_changes);
      const hst_text1_changes = {};
      if (!updating_value_1 && dirty & 8) {
        updating_value_1 = true;
        hst_text1_changes.value = ctx2[3];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_text1.$set(hst_text1_changes);
      const hst_text2_changes = {};
      if (!updating_value_2 && dirty & 16) {
        updating_value_2 = true;
        hst_text2_changes.value = ctx2[4];
        add_flush_callback(() => updating_value_2 = false);
      }
      hst_text2.$set(hst_text2_changes);
      const hst_text3_changes = {};
      if (!updating_value_3 && dirty & 32) {
        updating_value_3 = true;
        hst_text3_changes.value = ctx2[5];
        add_flush_callback(() => updating_value_3 = false);
      }
      hst_text3.$set(hst_text3_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_text0.$$.fragment, local);
      transition_in(hst_text1.$$.fragment, local);
      transition_in(hst_text2.$$.fragment, local);
      transition_in(hst_text3.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_text0.$$.fragment, local);
      transition_out(hst_text1.$$.fragment, local);
      transition_out(hst_text2.$$.fragment, local);
      transition_out(hst_text3.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_text0, detaching);
      if (detaching)
        detach_dev(t0);
      destroy_component(hst_text1, detaching);
      if (detaching)
        detach_dev(t1);
      destroy_component(hst_text2, detaching);
      if (detaching)
        detach_dev(t2);
      destroy_component(hst_text3, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$4.name,
    type: "slot",
    source: '(31:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$e(ctx) {
  let hst_story;
  let current;
  hst_story = new ctx[0].Story({
    props: {
      $$slots: {
        controls: [create_controls_slot$4],
        default: [create_default_slot$7]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & 16446) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$e.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$e($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Confirm_story", slots, []);
  let { Hst } = $$props;
  let show = false;
  const args = {
    title: "\u6807\u9898",
    content: "\u5185\u5BB9",
    okText: "\u786E\u5B9A",
    cancelText: "\u53D6\u6D88",
    onOk: () => {
      $$invalidate(1, show = false);
    },
    onCancel: () => {
      $$invalidate(1, show = false);
    }
  };
  let { title, content, okText, cancelText, onOk, onCancel } = args;
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Confirm_story> was created with unknown prop '${key}'`);
  });
  function hst_text0_value_binding(value) {
    title = value;
    $$invalidate(2, title);
  }
  function hst_text1_value_binding(value) {
    content = value;
    $$invalidate(3, content);
  }
  function hst_text2_value_binding(value) {
    okText = value;
    $$invalidate(4, okText);
  }
  function hst_text3_value_binding(value) {
    cancelText = value;
    $$invalidate(5, cancelText);
  }
  const click_handler = () => {
    $$invalidate(1, show = true);
  };
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({
    Confirm,
    Hst,
    show,
    args,
    title,
    content,
    okText,
    cancelText,
    onOk,
    onCancel
  });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("show" in $$props2)
      $$invalidate(1, show = $$props2.show);
    if ("title" in $$props2)
      $$invalidate(2, title = $$props2.title);
    if ("content" in $$props2)
      $$invalidate(3, content = $$props2.content);
    if ("okText" in $$props2)
      $$invalidate(4, okText = $$props2.okText);
    if ("cancelText" in $$props2)
      $$invalidate(5, cancelText = $$props2.cancelText);
    if ("onOk" in $$props2)
      $$invalidate(6, onOk = $$props2.onOk);
    if ("onCancel" in $$props2)
      $$invalidate(7, onCancel = $$props2.onCancel);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    Hst,
    show,
    title,
    content,
    okText,
    cancelText,
    onOk,
    onCancel,
    hst_text0_value_binding,
    hst_text1_value_binding,
    hst_text2_value_binding,
    hst_text3_value_binding,
    click_handler
  ];
}
class Confirm_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$e, create_fragment$e, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Confirm_story",
      options,
      id: create_fragment$e.name
    });
    const { ctx } = this.$$;
    const props = options.props || {};
    if (ctx[0] === void 0 && !("Hst" in props)) {
      console.warn("<Confirm_story> was created without expected prop 'Hst'");
    }
  }
  get Hst() {
    throw new Error("<Confirm_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Confirm_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Marquee_svelte_svelte_type_style_lang = "";
const file$c = "src/components/Marquee.svelte";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[3] = list[i];
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[3] = list[i];
  return child_ctx;
}
function create_each_block_1(ctx) {
  let div;
  let t_value = ctx[3] + "";
  let t;
  const block = {
    c: function create() {
      div = element("div");
      t = text(t_value);
      attr_dev(div, "class", "s-y-i_bPjcCl16");
      add_location(div, file$c, 11, 16, 328);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, t);
    },
    p: function update(ctx2, dirty) {
      if (dirty & 1 && t_value !== (t_value = ctx2[3] + ""))
        set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block_1.name,
    type: "each",
    source: "(11:12) {#each data as item}",
    ctx
  });
  return block;
}
function create_each_block(ctx) {
  let div;
  let t_value = ctx[3] + "";
  let t;
  const block = {
    c: function create() {
      div = element("div");
      t = text(t_value);
      attr_dev(div, "class", "s-y-i_bPjcCl16");
      add_location(div, file$c, 17, 16, 530);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, t);
    },
    p: function update(ctx2, dirty) {
      if (dirty & 1 && t_value !== (t_value = ctx2[3] + ""))
        set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block.name,
    type: "each",
    source: "(17:12) {#each data as item}",
    ctx
  });
  return block;
}
function create_fragment$d(ctx) {
  let div2;
  let div0;
  let t;
  let div1;
  let each_value_1 = ctx[0];
  validate_each_argument(each_value_1);
  let each_blocks_1 = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  let each_value = ctx[0];
  validate_each_argument(each_value);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const block = {
    c: function create() {
      div2 = element("div");
      div0 = element("div");
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].c();
      }
      t = space();
      div1 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      attr_dev(div0, "class", "marquee_content s-y-i_bPjcCl16");
      add_location(div0, file$c, 9, 8, 249);
      attr_dev(div1, "class", "marquee_content s-y-i_bPjcCl16");
      attr_dev(div1, "aria-hidden", "true");
      add_location(div1, file$c, 15, 8, 432);
      attr_dev(div2, "class", "marquee s-y-i_bPjcCl16");
      set_style(div2, "--tail-gap", ctx[1]);
      set_style(div2, "--tail-speed", ctx[2]);
      add_location(div2, file$c, 8, 4, 171);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div2, anchor);
      append_dev(div2, div0);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].m(div0, null);
      }
      append_dev(div2, t);
      append_dev(div2, div1);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div1, null);
      }
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & 1) {
        each_value_1 = ctx2[0];
        validate_each_argument(each_value_1);
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks_1[i]) {
            each_blocks_1[i].p(child_ctx, dirty);
          } else {
            each_blocks_1[i] = create_each_block_1(child_ctx);
            each_blocks_1[i].c();
            each_blocks_1[i].m(div0, null);
          }
        }
        for (; i < each_blocks_1.length; i += 1) {
          each_blocks_1[i].d(1);
        }
        each_blocks_1.length = each_value_1.length;
      }
      if (dirty & 1) {
        each_value = ctx2[0];
        validate_each_argument(each_value);
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div1, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
      if (dirty & 2) {
        set_style(div2, "--tail-gap", ctx2[1]);
      }
      if (dirty & 4) {
        set_style(div2, "--tail-speed", ctx2[2]);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div2);
      destroy_each(each_blocks_1, detaching);
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$d.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$d($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Marquee", slots, []);
  let { data = [] } = $$props;
  let { gap = "60px" } = $$props;
  let { speed = "5s" } = $$props;
  const writable_props = ["data", "gap", "speed"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Marquee> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("data" in $$props2)
      $$invalidate(0, data = $$props2.data);
    if ("gap" in $$props2)
      $$invalidate(1, gap = $$props2.gap);
    if ("speed" in $$props2)
      $$invalidate(2, speed = $$props2.speed);
  };
  $$self.$capture_state = () => ({ data, gap, speed });
  $$self.$inject_state = ($$props2) => {
    if ("data" in $$props2)
      $$invalidate(0, data = $$props2.data);
    if ("gap" in $$props2)
      $$invalidate(1, gap = $$props2.gap);
    if ("speed" in $$props2)
      $$invalidate(2, speed = $$props2.speed);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [data, gap, speed];
}
class Marquee extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$d, create_fragment$d, safe_not_equal, { data: 0, gap: 1, speed: 2 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Marquee",
      options,
      id: create_fragment$d.name
    });
  }
  get data() {
    throw new Error("<Marquee>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set data(value) {
    throw new Error("<Marquee>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get gap() {
    throw new Error("<Marquee>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set gap(value) {
    throw new Error("<Marquee>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get speed() {
    throw new Error("<Marquee>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set speed(value) {
    throw new Error("<Marquee>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Marquee_story_svelte_svelte_type_style_lang = "";
function create_default_slot_1$6(ctx) {
  let marquee;
  let current;
  marquee = new Marquee({
    props: {
      data: ctx[1],
      speed: ctx[2],
      gap: ctx[3]
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(marquee.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(marquee, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const marquee_changes = {};
      if (dirty & 2)
        marquee_changes.data = ctx2[1];
      if (dirty & 4)
        marquee_changes.speed = ctx2[2];
      if (dirty & 8)
        marquee_changes.gap = ctx2[3];
      marquee.$set(marquee_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(marquee.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(marquee.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(marquee, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1$6.name,
    type: "slot",
    source: '(15:2) <Hst.Variant title=\\"demo\\">',
    ctx
  });
  return block;
}
function create_default_slot$6(ctx) {
  let hst_variant;
  let current;
  hst_variant = new ctx[0].Variant({
    props: {
      title: "demo",
      $$slots: { default: [create_default_slot_1$6] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_variant.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_variant, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_variant_changes = {};
      if (dirty & 270) {
        hst_variant_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant.$set(hst_variant_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_variant.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_variant.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_variant, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$6.name,
    type: "slot",
    source: "(14:0) <Hst.Story>",
    ctx
  });
  return block;
}
function create_controls_slot$3(ctx) {
  let hst_text0;
  let updating_value;
  let t0;
  let hst_text1;
  let updating_value_1;
  let t1;
  let hst_text2;
  let updating_value_2;
  let current;
  function hst_text0_value_binding(value) {
    ctx[4](value);
  }
  let hst_text0_props = { title: "data" };
  if (ctx[1] !== void 0) {
    hst_text0_props.value = ctx[1];
  }
  hst_text0 = new ctx[0].Text({ props: hst_text0_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text0, "value", hst_text0_value_binding));
  function hst_text1_value_binding(value) {
    ctx[5](value);
  }
  let hst_text1_props = { title: "speed" };
  if (ctx[2] !== void 0) {
    hst_text1_props.value = ctx[2];
  }
  hst_text1 = new ctx[0].Text({ props: hst_text1_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text1, "value", hst_text1_value_binding));
  function hst_text2_value_binding(value) {
    ctx[6](value);
  }
  let hst_text2_props = { title: "gap" };
  if (ctx[3] !== void 0) {
    hst_text2_props.value = ctx[3];
  }
  hst_text2 = new ctx[0].Text({ props: hst_text2_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text2, "value", hst_text2_value_binding));
  const block = {
    c: function create() {
      create_component(hst_text0.$$.fragment);
      t0 = space();
      create_component(hst_text1.$$.fragment);
      t1 = space();
      create_component(hst_text2.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_text0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(hst_text1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(hst_text2, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_text0_changes = {};
      if (!updating_value && dirty & 2) {
        updating_value = true;
        hst_text0_changes.value = ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      hst_text0.$set(hst_text0_changes);
      const hst_text1_changes = {};
      if (!updating_value_1 && dirty & 4) {
        updating_value_1 = true;
        hst_text1_changes.value = ctx2[2];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_text1.$set(hst_text1_changes);
      const hst_text2_changes = {};
      if (!updating_value_2 && dirty & 8) {
        updating_value_2 = true;
        hst_text2_changes.value = ctx2[3];
        add_flush_callback(() => updating_value_2 = false);
      }
      hst_text2.$set(hst_text2_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_text0.$$.fragment, local);
      transition_in(hst_text1.$$.fragment, local);
      transition_in(hst_text2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_text0.$$.fragment, local);
      transition_out(hst_text1.$$.fragment, local);
      transition_out(hst_text2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_text0, detaching);
      if (detaching)
        detach_dev(t0);
      destroy_component(hst_text1, detaching);
      if (detaching)
        detach_dev(t1);
      destroy_component(hst_text2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$3.name,
    type: "slot",
    source: '(19:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$c(ctx) {
  let hst_story;
  let current;
  hst_story = new ctx[0].Story({
    props: {
      $$slots: {
        controls: [create_controls_slot$3],
        default: [create_default_slot$6]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & 270) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$c.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$c($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Marquee_story", slots, []);
  let { Hst } = $$props;
  const args = {
    data: ["\u5F20\u4E09\u4E2D\u5956100\u4E07", "\u674E\u56DB\u4E2D\u59561000\u4E07", "\u738B\u4E94\u4E2D\u5956100\u4E07"],
    speed: "15s",
    gap: "100px"
  };
  let { data, speed, gap } = args;
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Marquee_story> was created with unknown prop '${key}'`);
  });
  function hst_text0_value_binding(value) {
    data = value;
    $$invalidate(1, data);
  }
  function hst_text1_value_binding(value) {
    speed = value;
    $$invalidate(2, speed);
  }
  function hst_text2_value_binding(value) {
    gap = value;
    $$invalidate(3, gap);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ Marquee, Hst, args, data, speed, gap });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("data" in $$props2)
      $$invalidate(1, data = $$props2.data);
    if ("speed" in $$props2)
      $$invalidate(2, speed = $$props2.speed);
    if ("gap" in $$props2)
      $$invalidate(3, gap = $$props2.gap);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    Hst,
    data,
    speed,
    gap,
    hst_text0_value_binding,
    hst_text1_value_binding,
    hst_text2_value_binding
  ];
}
class Marquee_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$c, create_fragment$c, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Marquee_story",
      options,
      id: create_fragment$c.name
    });
    const { ctx } = this.$$;
    const props = options.props || {};
    if (ctx[0] === void 0 && !("Hst" in props)) {
      console.warn("<Marquee_story> was created without expected prop 'Hst'");
    }
  }
  get Hst() {
    throw new Error("<Marquee_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Marquee_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Notice_svelte_svelte_type_style_lang = "";
const file$b = "src/components/notice/Notice.svelte";
function create_fragment$b(ctx) {
  let div7;
  let div6;
  let div3;
  let div0;
  let t0;
  let t1;
  let div2;
  let div1;
  let t2;
  let t3;
  let div5;
  let div4;
  let t4;
  let div4_style_value;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      div7 = element("div");
      div6 = element("div");
      div3 = element("div");
      div0 = element("div");
      t0 = text(ctx[1]);
      t1 = space();
      div2 = element("div");
      div1 = element("div");
      t2 = text(ctx[2]);
      t3 = space();
      div5 = element("div");
      div4 = element("div");
      t4 = text(ctx[0]);
      attr_dev(div0, "class", "modal-title s-nWZ0KbWEAjd_");
      add_location(div0, file$b, 23, 16, 640);
      attr_dev(div1, "class", "s-nWZ0KbWEAjd_");
      add_location(div1, file$b, 25, 20, 737);
      attr_dev(div2, "class", "content s-nWZ0KbWEAjd_");
      add_location(div2, file$b, 24, 16, 695);
      attr_dev(div3, "class", "modal-content-body s-nWZ0KbWEAjd_");
      add_location(div3, file$b, 22, 12, 591);
      attr_dev(div4, "class", "modal-button centerLayout s-nWZ0KbWEAjd_");
      attr_dev(div4, "style", div4_style_value = styleString(ctx[3]));
      add_location(div4, file$b, 29, 16, 861);
      attr_dev(div5, "class", "notice-button-wrap s-nWZ0KbWEAjd_");
      add_location(div5, file$b, 28, 12, 812);
      attr_dev(div6, "class", "notice-modal-content s-nWZ0KbWEAjd_");
      add_location(div6, file$b, 21, 8, 544);
      attr_dev(div7, "class", "notice-modal s-nWZ0KbWEAjd_");
      add_location(div7, file$b, 20, 4, 489);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div7, anchor);
      append_dev(div7, div6);
      append_dev(div6, div3);
      append_dev(div3, div0);
      append_dev(div0, t0);
      append_dev(div3, t1);
      append_dev(div3, div2);
      append_dev(div2, div1);
      append_dev(div1, t2);
      append_dev(div6, t3);
      append_dev(div6, div5);
      append_dev(div5, div4);
      append_dev(div4, t4);
      ctx[7](div7);
      if (!mounted) {
        dispose = listen_dev(div4, "click", ctx[5], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & 2)
        set_data_dev(t0, ctx2[1]);
      if (dirty & 4)
        set_data_dev(t2, ctx2[2]);
      if (dirty & 1)
        set_data_dev(t4, ctx2[0]);
      if (dirty & 8 && div4_style_value !== (div4_style_value = styleString(ctx2[3]))) {
        attr_dev(div4, "style", div4_style_value);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div7);
      ctx[7](null);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$b.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$b($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Notice", slots, []);
  let { clickText = "\u6211\u77E5\u9053\u4E86" } = $$props;
  let { title = "" } = $$props;
  let { content = "" } = $$props;
  let { btnStyle = "" } = $$props;
  let { onClick = () => {
  } } = $$props;
  const dispatcher = createEventDispatcher();
  let nodeRef;
  const destroySelf = () => {
    nodeRef.parentNode.removeChild(nodeRef);
  };
  const onBtnClick = () => {
    onClick();
    dispatcher("click");
  };
  const writable_props = ["clickText", "title", "content", "btnStyle", "onClick"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Notice> was created with unknown prop '${key}'`);
  });
  function div7_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      nodeRef = $$value;
      $$invalidate(4, nodeRef);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("clickText" in $$props2)
      $$invalidate(0, clickText = $$props2.clickText);
    if ("title" in $$props2)
      $$invalidate(1, title = $$props2.title);
    if ("content" in $$props2)
      $$invalidate(2, content = $$props2.content);
    if ("btnStyle" in $$props2)
      $$invalidate(3, btnStyle = $$props2.btnStyle);
    if ("onClick" in $$props2)
      $$invalidate(6, onClick = $$props2.onClick);
  };
  $$self.$capture_state = () => ({
    createEventDispatcher,
    styleString,
    clickText,
    title,
    content,
    btnStyle,
    onClick,
    dispatcher,
    nodeRef,
    destroySelf,
    onBtnClick
  });
  $$self.$inject_state = ($$props2) => {
    if ("clickText" in $$props2)
      $$invalidate(0, clickText = $$props2.clickText);
    if ("title" in $$props2)
      $$invalidate(1, title = $$props2.title);
    if ("content" in $$props2)
      $$invalidate(2, content = $$props2.content);
    if ("btnStyle" in $$props2)
      $$invalidate(3, btnStyle = $$props2.btnStyle);
    if ("onClick" in $$props2)
      $$invalidate(6, onClick = $$props2.onClick);
    if ("nodeRef" in $$props2)
      $$invalidate(4, nodeRef = $$props2.nodeRef);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    clickText,
    title,
    content,
    btnStyle,
    nodeRef,
    onBtnClick,
    onClick,
    div7_binding
  ];
}
class Notice extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$b, create_fragment$b, safe_not_equal, {
      clickText: 0,
      title: 1,
      content: 2,
      btnStyle: 3,
      onClick: 6
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Notice",
      options,
      id: create_fragment$b.name
    });
  }
  get clickText() {
    throw new Error("<Notice>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set clickText(value) {
    throw new Error("<Notice>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get title() {
    throw new Error("<Notice>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set title(value) {
    throw new Error("<Notice>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get content() {
    throw new Error("<Notice>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set content(value) {
    throw new Error("<Notice>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get btnStyle() {
    throw new Error("<Notice>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set btnStyle(value) {
    throw new Error("<Notice>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get onClick() {
    throw new Error("<Notice>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set onClick(value) {
    throw new Error("<Notice>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Notice_story_svelte_svelte_type_style_lang = "";
const file$a = "src/story/notice/Notice.story.svelte";
function create_if_block(ctx) {
  let notice;
  let current;
  notice = new Notice({
    props: {
      title: ctx[2],
      content: ctx[3],
      clickText: ctx[4],
      onClick: ctx[6],
      btnStyle: ctx[5]
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(notice.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(notice, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const notice_changes = {};
      if (dirty & 4)
        notice_changes.title = ctx2[2];
      if (dirty & 8)
        notice_changes.content = ctx2[3];
      if (dirty & 16)
        notice_changes.clickText = ctx2[4];
      if (dirty & 32)
        notice_changes.btnStyle = ctx2[5];
      notice.$set(notice_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(notice.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(notice.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(notice, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(23:4) {#if show}",
    ctx
  });
  return block;
}
function create_default_slot_1$5(ctx) {
  let button;
  let t1;
  let div;
  let t2;
  let t3;
  let t4;
  let if_block_anchor;
  let current;
  let mounted;
  let dispose;
  let if_block = ctx[1] && create_if_block(ctx);
  const block = {
    c: function create() {
      button = element("button");
      button.textContent = "\u70B9\u6211";
      t1 = space();
      div = element("div");
      t2 = text("\u5F39\u7A97\u5C55\u793A\u72B6\u6001\uFF1A");
      t3 = text(ctx[1]);
      t4 = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      attr_dev(button, "class", "s-AxmFWOoynVSx");
      add_location(button, file$a, 20, 4, 417);
      attr_dev(div, "class", "s-AxmFWOoynVSx");
      add_location(div, file$a, 21, 4, 473);
    },
    m: function mount(target, anchor) {
      insert_dev(target, button, anchor);
      insert_dev(target, t1, anchor);
      insert_dev(target, div, anchor);
      append_dev(div, t2);
      append_dev(div, t3);
      insert_dev(target, t4, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
      if (!mounted) {
        dispose = listen_dev(button, "click", ctx[11], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx2, dirty) {
      if (!current || dirty & 2)
        set_data_dev(t3, ctx2[1]);
      if (ctx2[1]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 2) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(button);
      if (detaching)
        detach_dev(t1);
      if (detaching)
        detach_dev(div);
      if (detaching)
        detach_dev(t4);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach_dev(if_block_anchor);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1$5.name,
    type: "slot",
    source: '(20:2) <Hst.Variant title=\\"demo\\">',
    ctx
  });
  return block;
}
function create_default_slot$5(ctx) {
  let hst_variant;
  let current;
  hst_variant = new ctx[0].Variant({
    props: {
      title: "demo",
      $$slots: { default: [create_default_slot_1$5] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_variant.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_variant, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_variant_changes = {};
      if (dirty & 8254) {
        hst_variant_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant.$set(hst_variant_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_variant.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_variant.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_variant, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$5.name,
    type: "slot",
    source: "(19:0) <Hst.Story>",
    ctx
  });
  return block;
}
function create_controls_slot$2(ctx) {
  let hst_text0;
  let updating_value;
  let t0;
  let hst_text1;
  let updating_value_1;
  let t1;
  let hst_text2;
  let updating_value_2;
  let t2;
  let hst_text3;
  let updating_value_3;
  let current;
  function hst_text0_value_binding(value) {
    ctx[7](value);
  }
  let hst_text0_props = { title: "Title" };
  if (ctx[2] !== void 0) {
    hst_text0_props.value = ctx[2];
  }
  hst_text0 = new ctx[0].Text({ props: hst_text0_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text0, "value", hst_text0_value_binding));
  function hst_text1_value_binding(value) {
    ctx[8](value);
  }
  let hst_text1_props = { title: "Content" };
  if (ctx[3] !== void 0) {
    hst_text1_props.value = ctx[3];
  }
  hst_text1 = new ctx[0].Text({ props: hst_text1_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text1, "value", hst_text1_value_binding));
  function hst_text2_value_binding(value) {
    ctx[9](value);
  }
  let hst_text2_props = { title: "clickText" };
  if (ctx[4] !== void 0) {
    hst_text2_props.value = ctx[4];
  }
  hst_text2 = new ctx[0].Text({ props: hst_text2_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text2, "value", hst_text2_value_binding));
  function hst_text3_value_binding(value) {
    ctx[10](value);
  }
  let hst_text3_props = { title: "btnStyle" };
  if (ctx[5] !== void 0) {
    hst_text3_props.value = ctx[5];
  }
  hst_text3 = new ctx[0].Text({ props: hst_text3_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text3, "value", hst_text3_value_binding));
  const block = {
    c: function create() {
      create_component(hst_text0.$$.fragment);
      t0 = space();
      create_component(hst_text1.$$.fragment);
      t1 = space();
      create_component(hst_text2.$$.fragment);
      t2 = space();
      create_component(hst_text3.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_text0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(hst_text1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(hst_text2, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(hst_text3, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_text0_changes = {};
      if (!updating_value && dirty & 4) {
        updating_value = true;
        hst_text0_changes.value = ctx2[2];
        add_flush_callback(() => updating_value = false);
      }
      hst_text0.$set(hst_text0_changes);
      const hst_text1_changes = {};
      if (!updating_value_1 && dirty & 8) {
        updating_value_1 = true;
        hst_text1_changes.value = ctx2[3];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_text1.$set(hst_text1_changes);
      const hst_text2_changes = {};
      if (!updating_value_2 && dirty & 16) {
        updating_value_2 = true;
        hst_text2_changes.value = ctx2[4];
        add_flush_callback(() => updating_value_2 = false);
      }
      hst_text2.$set(hst_text2_changes);
      const hst_text3_changes = {};
      if (!updating_value_3 && dirty & 32) {
        updating_value_3 = true;
        hst_text3_changes.value = ctx2[5];
        add_flush_callback(() => updating_value_3 = false);
      }
      hst_text3.$set(hst_text3_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_text0.$$.fragment, local);
      transition_in(hst_text1.$$.fragment, local);
      transition_in(hst_text2.$$.fragment, local);
      transition_in(hst_text3.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_text0.$$.fragment, local);
      transition_out(hst_text1.$$.fragment, local);
      transition_out(hst_text2.$$.fragment, local);
      transition_out(hst_text3.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_text0, detaching);
      if (detaching)
        detach_dev(t0);
      destroy_component(hst_text1, detaching);
      if (detaching)
        detach_dev(t1);
      destroy_component(hst_text2, detaching);
      if (detaching)
        detach_dev(t2);
      destroy_component(hst_text3, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$2.name,
    type: "slot",
    source: '(31:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$a(ctx) {
  let hst_story;
  let current;
  hst_story = new ctx[0].Story({
    props: {
      $$slots: {
        controls: [create_controls_slot$2],
        default: [create_default_slot$5]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & 8254) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$a.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$a($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Notice_story", slots, []);
  let { Hst } = $$props;
  let show = false;
  const args = {
    title: "\u6807\u9898",
    content: "\u5185\u5BB9",
    clickText: "\u6211\u77E5\u9053\u4E86",
    onClick: () => {
      $$invalidate(1, show = false);
    }
  };
  let { title, content, clickText, onClick } = args;
  let btnStyle = "background:orange;color:white";
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Notice_story> was created with unknown prop '${key}'`);
  });
  function hst_text0_value_binding(value) {
    title = value;
    $$invalidate(2, title);
  }
  function hst_text1_value_binding(value) {
    content = value;
    $$invalidate(3, content);
  }
  function hst_text2_value_binding(value) {
    clickText = value;
    $$invalidate(4, clickText);
  }
  function hst_text3_value_binding(value) {
    btnStyle = value;
    $$invalidate(5, btnStyle);
  }
  const click_handler = () => {
    $$invalidate(1, show = true);
  };
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({
    Notice,
    Hst,
    show,
    args,
    title,
    content,
    clickText,
    onClick,
    btnStyle
  });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("show" in $$props2)
      $$invalidate(1, show = $$props2.show);
    if ("title" in $$props2)
      $$invalidate(2, title = $$props2.title);
    if ("content" in $$props2)
      $$invalidate(3, content = $$props2.content);
    if ("clickText" in $$props2)
      $$invalidate(4, clickText = $$props2.clickText);
    if ("onClick" in $$props2)
      $$invalidate(6, onClick = $$props2.onClick);
    if ("btnStyle" in $$props2)
      $$invalidate(5, btnStyle = $$props2.btnStyle);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    Hst,
    show,
    title,
    content,
    clickText,
    btnStyle,
    onClick,
    hst_text0_value_binding,
    hst_text1_value_binding,
    hst_text2_value_binding,
    hst_text3_value_binding,
    click_handler
  ];
}
class Notice_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$a, create_fragment$a, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Notice_story",
      options,
      id: create_fragment$a.name
    });
    const { ctx } = this.$$;
    const props = options.props || {};
    if (ctx[0] === void 0 && !("Hst" in props)) {
      console.warn("<Notice_story> was created without expected prop 'Hst'");
    }
  }
  get Hst() {
    throw new Error("<Notice_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Notice_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const SimpleMask_svelte_svelte_type_style_lang = "";
const { console: console_1$3 } = globals;
const file$9 = "src/components/SimpleMask.svelte";
function create_fragment$9(ctx) {
  let div4;
  let div1;
  let div0;
  let t;
  let div3;
  let div2;
  const block = {
    c: function create() {
      div4 = element("div");
      div1 = element("div");
      div0 = element("div");
      t = space();
      div3 = element("div");
      div2 = element("div");
      attr_dev(div0, "id", "up-desc");
      attr_dev(div0, "class", "mask-tip-desc s-f42ERd6xhBxM");
      add_location(div0, file$9, 71, 4, 2515);
      attr_dev(div1, "class", "mask-tip up s-f42ERd6xhBxM");
      add_location(div1, file$9, 70, 2, 2467);
      attr_dev(div2, "id", "down-desc");
      attr_dev(div2, "class", "mask-tip-desc s-f42ERd6xhBxM");
      add_location(div2, file$9, 74, 4, 2620);
      attr_dev(div3, "class", "mask-tip s-f42ERd6xhBxM");
      add_location(div3, file$9, 73, 2, 2573);
      set_style(div4, "display", "none");
      attr_dev(div4, "class", "mask-wrap s-f42ERd6xhBxM");
      add_location(div4, file$9, 69, 0, 2398);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div4, anchor);
      append_dev(div4, div1);
      append_dev(div1, div0);
      ctx[6](div1);
      append_dev(div4, t);
      append_dev(div4, div3);
      append_dev(div3, div2);
      ctx[7](div3);
      ctx[8](div4);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div4);
      ctx[6](null);
      ctx[7](null);
      ctx[8](null);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$9.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$9($$self, $$props, $$invalidate) {
  let duration;
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("SimpleMask", slots, []);
  const dispatch = createEventDispatcher();
  let maskDiv;
  let upDiv;
  let downDiv;
  let { gapWidth = 0 } = $$props;
  let { isStart } = $$props;
  let { maskCfg = {} } = $$props;
  const setDesc = () => {
    const { descUp, descDown } = maskCfg;
    if (descUp) {
      var upDescEl = document.getElementById("up-desc");
      upDescEl.innerHTML = descUp;
    }
    if (descDown) {
      var downDescEl = document.getElementById("down-desc");
      downDescEl.innerHTML = descDown;
    }
  };
  const setMask = (maskCgf) => {
    if (!maskCgf) {
      return;
    }
    const { id } = maskCgf;
    var ele = document.getElementById(id);
    var eleWidth = ele.offsetWidth;
    var eleHeight = ele.offsetHeight;
    var eleLeft = ele.offsetLeft;
    var eleTop = ele.offsetTop;
    console.log("\u5F85\u9542\u7A7A\u5143\u7D20: ", eleWidth, eleHeight, eleLeft, eleTop);
    var scrollWidth = document.body.scrollWidth;
    var scrollHeight = document.body.scrollHeight;
    $$invalidate(0, maskDiv.style.width = scrollWidth + "px", maskDiv);
    $$invalidate(0, maskDiv.style.height = scrollHeight + "px", maskDiv);
    $$invalidate(0, maskDiv.style.position = "absolute", maskDiv);
    $$invalidate(0, maskDiv.style.left = 0, maskDiv);
    $$invalidate(0, maskDiv.style.top = 0, maskDiv);
    $$invalidate(0, maskDiv.style.boxSizing = "border-box", maskDiv);
    $$invalidate(0, maskDiv.style.display = "block", maskDiv);
    $$invalidate(0, maskDiv.style.animation = "faceIn 3s linear 1", maskDiv);
    $$invalidate(0, maskDiv.style.borderColor = "rgba(0, 0, 0, 0.75)", maskDiv);
    $$invalidate(0, maskDiv.style.borderStyle = "solid", maskDiv);
    $$invalidate(0, maskDiv.style.borderLeftWidth = eleLeft - gapWidth + "px", maskDiv);
    $$invalidate(0, maskDiv.style.borderRightWidth = scrollWidth - eleWidth - eleLeft - gapWidth + "px", maskDiv);
    $$invalidate(0, maskDiv.style.borderTopWidth = eleTop - gapWidth + "px", maskDiv);
    $$invalidate(0, maskDiv.style.borderBottomWidth = scrollHeight - eleHeight - eleTop - gapWidth + "px", maskDiv);
    $$invalidate(1, upDiv.style.left = "50%", upDiv);
    $$invalidate(2, downDiv.style.top = eleHeight + gapWidth * 2 + "px", downDiv);
    $$invalidate(2, downDiv.style.left = "50%", downDiv);
    setDesc();
    setTimeout(
      () => {
        dispatch("over", {});
        $$invalidate(0, maskDiv.style.display = "none", maskDiv);
      },
      duration * 1e3
    );
  };
  const writable_props = ["gapWidth", "isStart", "maskCfg"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console_1$3.warn(`<SimpleMask> was created with unknown prop '${key}'`);
  });
  function div1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      upDiv = $$value;
      $$invalidate(1, upDiv);
    });
  }
  function div3_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      downDiv = $$value;
      $$invalidate(2, downDiv);
    });
  }
  function div4_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      maskDiv = $$value;
      $$invalidate(0, maskDiv);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("gapWidth" in $$props2)
      $$invalidate(3, gapWidth = $$props2.gapWidth);
    if ("isStart" in $$props2)
      $$invalidate(4, isStart = $$props2.isStart);
    if ("maskCfg" in $$props2)
      $$invalidate(5, maskCfg = $$props2.maskCfg);
  };
  $$self.$capture_state = () => ({
    createEventDispatcher,
    dispatch,
    maskDiv,
    upDiv,
    downDiv,
    gapWidth,
    isStart,
    maskCfg,
    setDesc,
    setMask,
    duration
  });
  $$self.$inject_state = ($$props2) => {
    if ("maskDiv" in $$props2)
      $$invalidate(0, maskDiv = $$props2.maskDiv);
    if ("upDiv" in $$props2)
      $$invalidate(1, upDiv = $$props2.upDiv);
    if ("downDiv" in $$props2)
      $$invalidate(2, downDiv = $$props2.downDiv);
    if ("gapWidth" in $$props2)
      $$invalidate(3, gapWidth = $$props2.gapWidth);
    if ("isStart" in $$props2)
      $$invalidate(4, isStart = $$props2.isStart);
    if ("maskCfg" in $$props2)
      $$invalidate(5, maskCfg = $$props2.maskCfg);
    if ("duration" in $$props2)
      duration = $$props2.duration;
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 32) {
      duration = (maskCfg == null ? void 0 : maskCfg.duration) || 2;
    }
    if ($$self.$$.dirty & 48) {
      if (isStart) {
        setMask(maskCfg);
      }
    }
  };
  return [
    maskDiv,
    upDiv,
    downDiv,
    gapWidth,
    isStart,
    maskCfg,
    div1_binding,
    div3_binding,
    div4_binding
  ];
}
class SimpleMask extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$9, create_fragment$9, safe_not_equal, { gapWidth: 3, isStart: 4, maskCfg: 5 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "SimpleMask",
      options,
      id: create_fragment$9.name
    });
    const { ctx } = this.$$;
    const props = options.props || {};
    if (ctx[4] === void 0 && !("isStart" in props)) {
      console_1$3.warn("<SimpleMask> was created without expected prop 'isStart'");
    }
  }
  get gapWidth() {
    throw new Error("<SimpleMask>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set gapWidth(value) {
    throw new Error("<SimpleMask>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get isStart() {
    throw new Error("<SimpleMask>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set isStart(value) {
    throw new Error("<SimpleMask>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get maskCfg() {
    throw new Error("<SimpleMask>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set maskCfg(value) {
    throw new Error("<SimpleMask>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const SimpleMask_story_svelte_svelte_type_style_lang = "";
const file$8 = "src/story/simple-mask/SimpleMask.story.svelte";
function create_default_slot_1$4(ctx) {
  let div1;
  let button;
  let t1;
  let div0;
  let t3;
  let simplemask;
  let current;
  let mounted;
  let dispose;
  simplemask = new SimpleMask({
    props: {
      isStart: ctx[1],
      maskCfg: ctx[2]
    },
    $$inline: true
  });
  simplemask.$on("over", ctx[7]);
  const block = {
    c: function create() {
      div1 = element("div");
      button = element("button");
      button.textContent = "\u70B9\u6211";
      t1 = space();
      div0 = element("div");
      div0.textContent = "\u6EE150\u51CF100";
      t3 = space();
      create_component(simplemask.$$.fragment);
      attr_dev(button, "class", "s-twcLa-ofe9wN");
      add_location(button, file$8, 17, 6, 317);
      attr_dev(div0, "id", "box");
      attr_dev(div0, "class", "w-200px h-100px rounded-10px bg-yellow m-50px s-twcLa-ofe9wN");
      add_location(div0, file$8, 19, 6, 377);
      attr_dev(div1, "class", "h-100vh s-twcLa-ofe9wN");
      add_location(div1, file$8, 16, 4, 289);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div1, anchor);
      append_dev(div1, button);
      append_dev(div1, t1);
      append_dev(div1, div0);
      append_dev(div1, t3);
      mount_component(simplemask, div1, null);
      current = true;
      if (!mounted) {
        dispose = listen_dev(button, "click", ctx[6], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx2, dirty) {
      const simplemask_changes = {};
      if (dirty & 2)
        simplemask_changes.isStart = ctx2[1];
      if (dirty & 4)
        simplemask_changes.maskCfg = ctx2[2];
      simplemask.$set(simplemask_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(simplemask.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(simplemask.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div1);
      destroy_component(simplemask);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1$4.name,
    type: "slot",
    source: '(16:2) <Hst.Variant title=\\"demo\\">',
    ctx
  });
  return block;
}
function create_default_slot$4(ctx) {
  let hst_variant;
  let current;
  hst_variant = new ctx[0].Variant({
    props: {
      title: "demo",
      $$slots: { default: [create_default_slot_1$4] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_variant.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_variant, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_variant_changes = {};
      if (dirty & 262) {
        hst_variant_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant.$set(hst_variant_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_variant.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_variant.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_variant, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$4.name,
    type: "slot",
    source: "(15:0) <Hst.Story>",
    ctx
  });
  return block;
}
function create_controls_slot$1(ctx) {
  let hst_text0;
  let updating_value;
  let t0;
  let hst_text1;
  let updating_value_1;
  let t1;
  let hst_text2;
  let updating_value_2;
  let current;
  function hst_text0_value_binding(value) {
    ctx[3](value);
  }
  let hst_text0_props = { title: "duration" };
  if (ctx[2].duration !== void 0) {
    hst_text0_props.value = ctx[2].duration;
  }
  hst_text0 = new ctx[0].Text({ props: hst_text0_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text0, "value", hst_text0_value_binding));
  function hst_text1_value_binding(value) {
    ctx[4](value);
  }
  let hst_text1_props = { title: "descUp" };
  if (ctx[2].descUp !== void 0) {
    hst_text1_props.value = ctx[2].descUp;
  }
  hst_text1 = new ctx[0].Text({ props: hst_text1_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text1, "value", hst_text1_value_binding));
  function hst_text2_value_binding(value) {
    ctx[5](value);
  }
  let hst_text2_props = { title: "descDown" };
  if (ctx[2].descDown !== void 0) {
    hst_text2_props.value = ctx[2].descDown;
  }
  hst_text2 = new ctx[0].Text({ props: hst_text2_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text2, "value", hst_text2_value_binding));
  const block = {
    c: function create() {
      create_component(hst_text0.$$.fragment);
      t0 = space();
      create_component(hst_text1.$$.fragment);
      t1 = space();
      create_component(hst_text2.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_text0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(hst_text1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(hst_text2, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_text0_changes = {};
      if (!updating_value && dirty & 4) {
        updating_value = true;
        hst_text0_changes.value = ctx2[2].duration;
        add_flush_callback(() => updating_value = false);
      }
      hst_text0.$set(hst_text0_changes);
      const hst_text1_changes = {};
      if (!updating_value_1 && dirty & 4) {
        updating_value_1 = true;
        hst_text1_changes.value = ctx2[2].descUp;
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_text1.$set(hst_text1_changes);
      const hst_text2_changes = {};
      if (!updating_value_2 && dirty & 4) {
        updating_value_2 = true;
        hst_text2_changes.value = ctx2[2].descDown;
        add_flush_callback(() => updating_value_2 = false);
      }
      hst_text2.$set(hst_text2_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_text0.$$.fragment, local);
      transition_in(hst_text1.$$.fragment, local);
      transition_in(hst_text2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_text0.$$.fragment, local);
      transition_out(hst_text1.$$.fragment, local);
      transition_out(hst_text2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_text0, detaching);
      if (detaching)
        detach_dev(t0);
      destroy_component(hst_text1, detaching);
      if (detaching)
        detach_dev(t1);
      destroy_component(hst_text2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$1.name,
    type: "slot",
    source: '(28:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$8(ctx) {
  let hst_story;
  let current;
  hst_story = new ctx[0].Story({
    props: {
      $$slots: {
        controls: [create_controls_slot$1],
        default: [create_default_slot$4]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & 262) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$8.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$8($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("SimpleMask_story", slots, []);
  let { Hst } = $$props;
  let isStart = false;
  let maskCfg = {
    id: "box",
    duration: 3,
    descUp: "\u8BF7\u770B\u8FD9\u91CC",
    descDown: "\u9001\u60A8\u4E00\u5F20\u4F18\u60E0\u5238"
  };
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<SimpleMask_story> was created with unknown prop '${key}'`);
  });
  function hst_text0_value_binding(value) {
    if ($$self.$$.not_equal(maskCfg.duration, value)) {
      maskCfg.duration = value;
      $$invalidate(2, maskCfg);
    }
  }
  function hst_text1_value_binding(value) {
    if ($$self.$$.not_equal(maskCfg.descUp, value)) {
      maskCfg.descUp = value;
      $$invalidate(2, maskCfg);
    }
  }
  function hst_text2_value_binding(value) {
    if ($$self.$$.not_equal(maskCfg.descDown, value)) {
      maskCfg.descDown = value;
      $$invalidate(2, maskCfg);
    }
  }
  const click_handler = () => $$invalidate(1, isStart = true);
  const over_handler = () => {
    $$invalidate(1, isStart = false);
  };
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ SimpleMask, Hst, isStart, maskCfg });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("isStart" in $$props2)
      $$invalidate(1, isStart = $$props2.isStart);
    if ("maskCfg" in $$props2)
      $$invalidate(2, maskCfg = $$props2.maskCfg);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    Hst,
    isStart,
    maskCfg,
    hst_text0_value_binding,
    hst_text1_value_binding,
    hst_text2_value_binding,
    click_handler,
    over_handler
  ];
}
class SimpleMask_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$8, create_fragment$8, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "SimpleMask_story",
      options,
      id: create_fragment$8.name
    });
    const { ctx } = this.$$;
    const props = options.props || {};
    if (ctx[0] === void 0 && !("Hst" in props)) {
      console.warn("<SimpleMask_story> was created without expected prop 'Hst'");
    }
  }
  get Hst() {
    throw new Error("<SimpleMask_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<SimpleMask_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const StepMask_svelte_svelte_type_style_lang = "";
const { console: console_1$2 } = globals;
const file$7 = "src/components/StepMask.svelte";
function create_fragment$7(ctx) {
  let div1;
  let div0;
  let span;
  let t0;
  let button;
  let t1;
  const block = {
    c: function create() {
      div1 = element("div");
      div0 = element("div");
      span = element("span");
      t0 = space();
      button = element("button");
      t1 = text(ctx[0]);
      attr_dev(span, "id", "mask-desc");
      attr_dev(span, "class", "mask-tip-desc s-BmA8nkSqUU47");
      add_location(span, file$7, 58, 4, 2149);
      attr_dev(button, "id", "next-step-btn");
      attr_dev(button, "class", "mask-tip-btn s-BmA8nkSqUU47");
      add_location(button, file$7, 59, 4, 2204);
      attr_dev(div0, "class", "mask-tip s-BmA8nkSqUU47");
      add_location(div0, file$7, 57, 2, 2103);
      set_style(div1, "display", "none");
      attr_dev(div1, "class", "s-BmA8nkSqUU47");
      add_location(div1, file$7, 56, 0, 2053);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div1, anchor);
      append_dev(div1, div0);
      append_dev(div0, span);
      append_dev(div0, t0);
      append_dev(div0, button);
      append_dev(button, t1);
      ctx[6](div0);
      ctx[7](div1);
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & 1)
        set_data_dev(t1, ctx2[0]);
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div1);
      ctx[6](null);
      ctx[7](null);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$7.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$7($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("StepMask", slots, []);
  let maskDiv;
  let tipDiv;
  let { gapWidth = 5 } = $$props;
  let { isStart } = $$props;
  let { stepArr = [] } = $$props;
  let { btnText = "\u4E0B\u4E00\u6B65" } = $$props;
  const setMask = (arr) => {
    if (arr.length === 0) {
      $$invalidate(1, maskDiv.style.display = "none", maskDiv);
      return;
    }
    const { id, desc } = arr[0];
    var ele = document.getElementById(id);
    var eleWidth = ele.offsetWidth;
    var eleHeight = ele.offsetHeight;
    var eleLeft = ele.offsetLeft;
    var eleTop = ele.offsetTop;
    console.log("\u5F85\u9542\u7A7A\u5143\u7D20: ", eleWidth, eleHeight, eleLeft, eleTop);
    var scrollWidth = document.body.scrollWidth;
    var scrollHeight = document.body.scrollHeight;
    $$invalidate(1, maskDiv.style.width = scrollWidth + "px", maskDiv);
    $$invalidate(1, maskDiv.style.height = scrollHeight + "px", maskDiv);
    $$invalidate(1, maskDiv.style.position = "absolute", maskDiv);
    $$invalidate(1, maskDiv.style.left = 0, maskDiv);
    $$invalidate(1, maskDiv.style.top = 0, maskDiv);
    $$invalidate(1, maskDiv.style.display = "block", maskDiv);
    $$invalidate(1, maskDiv.style.boxSizing = "border-box", maskDiv);
    $$invalidate(1, maskDiv.style.borderColor = "rgba(0, 0, 0, 0.75)", maskDiv);
    $$invalidate(1, maskDiv.style.borderStyle = "solid", maskDiv);
    $$invalidate(1, maskDiv.style.borderLeftWidth = eleLeft - gapWidth + "px", maskDiv);
    $$invalidate(1, maskDiv.style.borderRightWidth = scrollWidth - eleWidth - eleLeft - gapWidth + "px", maskDiv);
    $$invalidate(1, maskDiv.style.borderTopWidth = eleTop - gapWidth + "px", maskDiv);
    $$invalidate(1, maskDiv.style.borderBottomWidth = scrollHeight - eleHeight - eleTop - gapWidth + "px", maskDiv);
    $$invalidate(2, tipDiv.style.top = eleHeight + gapWidth * 2 + 10 + "px", tipDiv);
    $$invalidate(2, tipDiv.style.left = "50%", tipDiv);
    var maskDesc = document.getElementById("mask-desc");
    maskDesc.innerHTML = desc;
    var nextBtn = document.getElementById("next-step-btn");
    nextBtn.onclick = function() {
      arr.shift();
      setMask(arr);
    };
  };
  const writable_props = ["gapWidth", "isStart", "stepArr", "btnText"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console_1$2.warn(`<StepMask> was created with unknown prop '${key}'`);
  });
  function div0_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      tipDiv = $$value;
      $$invalidate(2, tipDiv);
    });
  }
  function div1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      maskDiv = $$value;
      $$invalidate(1, maskDiv);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("gapWidth" in $$props2)
      $$invalidate(3, gapWidth = $$props2.gapWidth);
    if ("isStart" in $$props2)
      $$invalidate(4, isStart = $$props2.isStart);
    if ("stepArr" in $$props2)
      $$invalidate(5, stepArr = $$props2.stepArr);
    if ("btnText" in $$props2)
      $$invalidate(0, btnText = $$props2.btnText);
  };
  $$self.$capture_state = () => ({
    maskDiv,
    tipDiv,
    gapWidth,
    isStart,
    stepArr,
    btnText,
    setMask
  });
  $$self.$inject_state = ($$props2) => {
    if ("maskDiv" in $$props2)
      $$invalidate(1, maskDiv = $$props2.maskDiv);
    if ("tipDiv" in $$props2)
      $$invalidate(2, tipDiv = $$props2.tipDiv);
    if ("gapWidth" in $$props2)
      $$invalidate(3, gapWidth = $$props2.gapWidth);
    if ("isStart" in $$props2)
      $$invalidate(4, isStart = $$props2.isStart);
    if ("stepArr" in $$props2)
      $$invalidate(5, stepArr = $$props2.stepArr);
    if ("btnText" in $$props2)
      $$invalidate(0, btnText = $$props2.btnText);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 48) {
      if (isStart) {
        setMask(stepArr);
      }
    }
  };
  return [
    btnText,
    maskDiv,
    tipDiv,
    gapWidth,
    isStart,
    stepArr,
    div0_binding,
    div1_binding
  ];
}
class StepMask extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$7, create_fragment$7, safe_not_equal, {
      gapWidth: 3,
      isStart: 4,
      stepArr: 5,
      btnText: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "StepMask",
      options,
      id: create_fragment$7.name
    });
    const { ctx } = this.$$;
    const props = options.props || {};
    if (ctx[4] === void 0 && !("isStart" in props)) {
      console_1$2.warn("<StepMask> was created without expected prop 'isStart'");
    }
  }
  get gapWidth() {
    throw new Error("<StepMask>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set gapWidth(value) {
    throw new Error("<StepMask>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get isStart() {
    throw new Error("<StepMask>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set isStart(value) {
    throw new Error("<StepMask>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get stepArr() {
    throw new Error("<StepMask>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set stepArr(value) {
    throw new Error("<StepMask>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get btnText() {
    throw new Error("<StepMask>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set btnText(value) {
    throw new Error("<StepMask>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const StepMask_story_svelte_svelte_type_style_lang = "";
const file$6 = "src/story/step-mask/StepMask.story.svelte";
function create_default_slot_1$3(ctx) {
  let div4;
  let button;
  let t1;
  let div3;
  let div0;
  let t3;
  let div1;
  let t5;
  let div2;
  let t7;
  let stepmask;
  let current;
  let mounted;
  let dispose;
  stepmask = new StepMask({
    props: {
      isStart: ctx[1],
      stepArr: ctx[2],
      btnText: "next step"
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      div4 = element("div");
      button = element("button");
      button.textContent = "click me start";
      t1 = space();
      div3 = element("div");
      div0 = element("div");
      div0.textContent = "A";
      t3 = space();
      div1 = element("div");
      div1.textContent = "B";
      t5 = space();
      div2 = element("div");
      div2.textContent = "C";
      t7 = space();
      create_component(stepmask.$$.fragment);
      attr_dev(button, "class", "s-WItYctEy8TpY");
      add_location(button, file$6, 25, 6, 407);
      attr_dev(div0, "id", "box1");
      attr_dev(div0, "class", "box bg-yellow s-WItYctEy8TpY");
      add_location(div0, file$6, 27, 8, 501);
      attr_dev(div1, "id", "box2");
      attr_dev(div1, "class", "box bg-pink s-WItYctEy8TpY");
      add_location(div1, file$6, 28, 8, 554);
      attr_dev(div2, "id", "box3");
      attr_dev(div2, "class", "box bg-blue s-WItYctEy8TpY");
      add_location(div2, file$6, 29, 8, 605);
      attr_dev(div3, "class", "boxes s-WItYctEy8TpY");
      add_location(div3, file$6, 26, 6, 473);
      attr_dev(div4, "class", "h-100vh s-WItYctEy8TpY");
      add_location(div4, file$6, 24, 4, 379);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div4, anchor);
      append_dev(div4, button);
      append_dev(div4, t1);
      append_dev(div4, div3);
      append_dev(div3, div0);
      append_dev(div3, t3);
      append_dev(div3, div1);
      append_dev(div3, t5);
      append_dev(div3, div2);
      append_dev(div3, t7);
      mount_component(stepmask, div3, null);
      current = true;
      if (!mounted) {
        dispose = listen_dev(button, "click", ctx[3], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx2, dirty) {
      const stepmask_changes = {};
      if (dirty & 2)
        stepmask_changes.isStart = ctx2[1];
      stepmask.$set(stepmask_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(stepmask.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(stepmask.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div4);
      destroy_component(stepmask);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1$3.name,
    type: "slot",
    source: '(24:2) <Hst.Variant title=\\"demo\\">',
    ctx
  });
  return block;
}
function create_default_slot$3(ctx) {
  let hst_variant;
  let current;
  hst_variant = new ctx[0].Variant({
    props: {
      title: "demo",
      $$slots: { default: [create_default_slot_1$3] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_variant.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_variant, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_variant_changes = {};
      if (dirty & 18) {
        hst_variant_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant.$set(hst_variant_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_variant.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_variant.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_variant, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$3.name,
    type: "slot",
    source: "(23:0) <Hst.Story>",
    ctx
  });
  return block;
}
function create_fragment$6(ctx) {
  let hst_story;
  let current;
  hst_story = new ctx[0].Story({
    props: {
      $$slots: { default: [create_default_slot$3] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & 18) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$6.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$6($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("StepMask_story", slots, []);
  let { Hst } = $$props;
  let isStart = false;
  let stepArr = [
    { id: "box1", desc: "first step" },
    { id: "box2", desc: "second step" },
    { id: "box3", desc: "third step" }
  ];
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<StepMask_story> was created with unknown prop '${key}'`);
  });
  const click_handler = () => $$invalidate(1, isStart = true);
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ StepMask, Hst, isStart, stepArr });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("isStart" in $$props2)
      $$invalidate(1, isStart = $$props2.isStart);
    if ("stepArr" in $$props2)
      $$invalidate(2, stepArr = $$props2.stepArr);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst, isStart, stepArr, click_handler];
}
class StepMask_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$6, create_fragment$6, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "StepMask_story",
      options,
      id: create_fragment$6.name
    });
    const { ctx } = this.$$;
    const props = options.props || {};
    if (ctx[0] === void 0 && !("Hst" in props)) {
      console.warn("<StepMask_story> was created without expected prop 'Hst'");
    }
  }
  get Hst() {
    throw new Error("<StepMask_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<StepMask_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Teleport_svelte_svelte_type_style_lang = "";
const { console: console_1$1 } = globals;
const file$5 = "src/components/teleport/Teleport.svelte";
function create_fragment$5(ctx) {
  let div;
  let current;
  const default_slot_template = ctx[4].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[3], null);
  const block = {
    c: function create() {
      div = element("div");
      if (default_slot)
        default_slot.c();
      attr_dev(div, "class", "s-ACINwoCkb5WT");
      add_location(div, file$5, 29, 0, 802);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      if (default_slot) {
        default_slot.m(div, null);
      }
      ctx[5](div);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 8)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            ctx2[3],
            !current ? get_all_dirty_from_scope(ctx2[3]) : get_slot_changes(default_slot_template, ctx2[3], dirty, null),
            null
          );
        }
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      if (default_slot)
        default_slot.d(detaching);
      ctx[5](null);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$5.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$5($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Teleport", slots, ["default"]);
  let { disabled = false } = $$props;
  let { to = "body" } = $$props;
  let teleportEl;
  let originParentNode;
  let isInToEl = false;
  const insert = (el) => {
    const parentNode = el == null ? void 0 : el.parentNode;
    const toEl = document.querySelector(to);
    if (isInToEl && disabled && originParentNode) {
      isInToEl = false;
      toEl.removeChild(el);
      console.log("teleport", to);
      originParentNode.appendChild(el);
    }
    if (!isInToEl && parentNode && parentNode !== toEl) {
      originParentNode = parentNode;
      isInToEl = true;
      parentNode.removeChild(el);
      console.log("reset", to);
      toEl.appendChild(el);
    }
  };
  onMount(() => insert(teleportEl));
  const writable_props = ["disabled", "to"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console_1$1.warn(`<Teleport> was created with unknown prop '${key}'`);
  });
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      teleportEl = $$value;
      $$invalidate(0, teleportEl);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("disabled" in $$props2)
      $$invalidate(1, disabled = $$props2.disabled);
    if ("to" in $$props2)
      $$invalidate(2, to = $$props2.to);
    if ("$$scope" in $$props2)
      $$invalidate(3, $$scope = $$props2.$$scope);
  };
  $$self.$capture_state = () => ({
    onMount,
    disabled,
    to,
    teleportEl,
    originParentNode,
    isInToEl,
    insert
  });
  $$self.$inject_state = ($$props2) => {
    if ("disabled" in $$props2)
      $$invalidate(1, disabled = $$props2.disabled);
    if ("to" in $$props2)
      $$invalidate(2, to = $$props2.to);
    if ("teleportEl" in $$props2)
      $$invalidate(0, teleportEl = $$props2.teleportEl);
    if ("originParentNode" in $$props2)
      originParentNode = $$props2.originParentNode;
    if ("isInToEl" in $$props2)
      isInToEl = $$props2.isInToEl;
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 3) {
      if (disabled || !disabled) {
        insert(teleportEl);
      }
    }
  };
  return [teleportEl, disabled, to, $$scope, slots, div_binding];
}
class Teleport extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$5, create_fragment$5, safe_not_equal, { disabled: 1, to: 2 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Teleport",
      options,
      id: create_fragment$5.name
    });
  }
  get disabled() {
    throw new Error("<Teleport>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set disabled(value) {
    throw new Error("<Teleport>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get to() {
    throw new Error("<Teleport>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set to(value) {
    throw new Error("<Teleport>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Teleport_story_svelte_svelte_type_style_lang = "";
const file$4 = "src/story/teleport/Teleport.story.svelte";
function create_default_slot_2(ctx) {
  let t0;
  let t1_value = ctx[1] ? "not" : "";
  let t1;
  let t2;
  const block = {
    c: function create() {
      t0 = text("teleport is ");
      t1 = text(t1_value);
      t2 = text(" in body");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, t1, anchor);
      insert_dev(target, t2, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & 2 && t1_value !== (t1_value = ctx2[1] ? "not" : ""))
        set_data_dev(t1, t1_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t0);
      if (detaching)
        detach_dev(t1);
      if (detaching)
        detach_dev(t2);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_2.name,
    type: "slot",
    source: "(15:6) <Teleport disabled={disableTeleport}>",
    ctx
  });
  return block;
}
function create_default_slot_1$2(ctx) {
  let div;
  let button;
  let t0;
  let t1_value = ctx[1] ? "use" : "disabled";
  let t1;
  let t2;
  let t3;
  let teleport;
  let current;
  let mounted;
  let dispose;
  teleport = new Teleport({
    props: {
      disabled: ctx[1],
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      div = element("div");
      button = element("button");
      t0 = text("click and ");
      t1 = text(t1_value);
      t2 = text(" teleport");
      t3 = space();
      create_component(teleport.$$.fragment);
      attr_dev(button, "class", "s-mVn3VQcyBYS0");
      add_location(button, file$4, 11, 6, 226);
      attr_dev(div, "class", "box s-mVn3VQcyBYS0");
      add_location(div, file$4, 10, 4, 202);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, button);
      append_dev(button, t0);
      append_dev(button, t1);
      append_dev(button, t2);
      append_dev(div, t3);
      mount_component(teleport, div, null);
      current = true;
      if (!mounted) {
        dispose = listen_dev(button, "click", ctx[2], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx2, dirty) {
      if ((!current || dirty & 2) && t1_value !== (t1_value = ctx2[1] ? "use" : "disabled"))
        set_data_dev(t1, t1_value);
      const teleport_changes = {};
      if (dirty & 2)
        teleport_changes.disabled = ctx2[1];
      if (dirty & 10) {
        teleport_changes.$$scope = { dirty, ctx: ctx2 };
      }
      teleport.$set(teleport_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(teleport.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(teleport.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      destroy_component(teleport);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1$2.name,
    type: "slot",
    source: '(10:2) <Hst.Variant title=\\"demo\\">',
    ctx
  });
  return block;
}
function create_default_slot$2(ctx) {
  let hst_variant;
  let current;
  hst_variant = new ctx[0].Variant({
    props: {
      title: "demo",
      $$slots: { default: [create_default_slot_1$2] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_variant.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_variant, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_variant_changes = {};
      if (dirty & 10) {
        hst_variant_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant.$set(hst_variant_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_variant.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_variant.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_variant, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$2.name,
    type: "slot",
    source: "(9:0) <Hst.Story>",
    ctx
  });
  return block;
}
function create_fragment$4(ctx) {
  let hst_story;
  let current;
  hst_story = new ctx[0].Story({
    props: {
      $$slots: { default: [create_default_slot$2] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & 10) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$4.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$4($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Teleport_story", slots, []);
  let { Hst } = $$props;
  let disableTeleport = false;
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Teleport_story> was created with unknown prop '${key}'`);
  });
  const click_handler = () => $$invalidate(1, disableTeleport = !disableTeleport);
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ Teleport, Hst, disableTeleport });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("disableTeleport" in $$props2)
      $$invalidate(1, disableTeleport = $$props2.disableTeleport);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst, disableTeleport, click_handler];
}
class Teleport_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$4, create_fragment$4, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Teleport_story",
      options,
      id: create_fragment$4.name
    });
    const { ctx } = this.$$;
    const props = options.props || {};
    if (ctx[0] === void 0 && !("Hst" in props)) {
      console.warn("<Teleport_story> was created without expected prop 'Hst'");
    }
  }
  get Hst() {
    throw new Error("<Teleport_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Teleport_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Toast_svelte_svelte_type_style_lang = "";
const file$3 = "src/components/toast/Toast.svelte";
function create_fragment$3(ctx) {
  let div1;
  let div0;
  let t;
  const block = {
    c: function create() {
      div1 = element("div");
      div0 = element("div");
      t = text(ctx[0]);
      attr_dev(div0, "class", "content text-white bg-#000000 s-vw9zBITrnKnC");
      add_location(div0, file$3, 4, 2, 76);
      attr_dev(div1, "class", "tail-toast s-vw9zBITrnKnC");
      add_location(div1, file$3, 3, 0, 49);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div1, anchor);
      append_dev(div1, div0);
      append_dev(div0, t);
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & 1)
        set_data_dev(t, ctx2[0]);
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$3.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$3($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Toast", slots, []);
  let { content } = $$props;
  const writable_props = ["content"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Toast> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("content" in $$props2)
      $$invalidate(0, content = $$props2.content);
  };
  $$self.$capture_state = () => ({ content });
  $$self.$inject_state = ($$props2) => {
    if ("content" in $$props2)
      $$invalidate(0, content = $$props2.content);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [content];
}
class Toast extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$3, create_fragment$3, safe_not_equal, { content: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Toast",
      options,
      id: create_fragment$3.name
    });
    const { ctx } = this.$$;
    const props = options.props || {};
    if (ctx[0] === void 0 && !("content" in props)) {
      console.warn("<Toast> was created without expected prop 'content'");
    }
  }
  get content() {
    throw new Error("<Toast>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set content(value) {
    throw new Error("<Toast>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const toast = (content, duration = 2e3) => {
  const div = document.createElement("div");
  document.body.appendChild(div);
  const t = new Toast({
    target: div,
    props: {
      content
    }
  });
  setTimeout(() => {
    t.$destroy();
  }, duration);
};
const Toast_story_svelte_svelte_type_style_lang = "";
const file$2 = "src/story/toast/Toast.story.svelte";
function create_default_slot_1$1(ctx) {
  let button;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      button = element("button");
      button.textContent = "\u70B9\u6211";
      attr_dev(button, "class", "s-Lp_6j0Dh-Df9");
      add_location(button, file$2, 11, 4, 203);
    },
    m: function mount(target, anchor) {
      insert_dev(target, button, anchor);
      if (!mounted) {
        dispose = listen_dev(button, "click", ctx[5], false, false, false);
        mounted = true;
      }
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(button);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1$1.name,
    type: "slot",
    source: '(11:2) <Hst.Variant title=\\"demo\\">',
    ctx
  });
  return block;
}
function create_default_slot$1(ctx) {
  let hst_variant;
  let current;
  hst_variant = new ctx[0].Variant({
    props: {
      title: "demo",
      $$slots: { default: [create_default_slot_1$1] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_variant.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_variant, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_variant_changes = {};
      if (dirty & 70) {
        hst_variant_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant.$set(hst_variant_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_variant.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_variant.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_variant, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$1.name,
    type: "slot",
    source: "(10:0) <Hst.Story>",
    ctx
  });
  return block;
}
function create_controls_slot(ctx) {
  let hst_text0;
  let updating_value;
  let t;
  let hst_text1;
  let updating_value_1;
  let current;
  function hst_text0_value_binding(value) {
    ctx[3](value);
  }
  let hst_text0_props = { title: "content" };
  if (ctx[1] !== void 0) {
    hst_text0_props.value = ctx[1];
  }
  hst_text0 = new ctx[0].Text({ props: hst_text0_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text0, "value", hst_text0_value_binding));
  function hst_text1_value_binding(value) {
    ctx[4](value);
  }
  let hst_text1_props = { title: "duration" };
  if (ctx[2] !== void 0) {
    hst_text1_props.value = ctx[2];
  }
  hst_text1 = new ctx[0].Text({ props: hst_text1_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text1, "value", hst_text1_value_binding));
  const block = {
    c: function create() {
      create_component(hst_text0.$$.fragment);
      t = space();
      create_component(hst_text1.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_text0, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(hst_text1, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_text0_changes = {};
      if (!updating_value && dirty & 2) {
        updating_value = true;
        hst_text0_changes.value = ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      hst_text0.$set(hst_text0_changes);
      const hst_text1_changes = {};
      if (!updating_value_1 && dirty & 4) {
        updating_value_1 = true;
        hst_text1_changes.value = ctx2[2];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_text1.$set(hst_text1_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_text0.$$.fragment, local);
      transition_in(hst_text1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_text0.$$.fragment, local);
      transition_out(hst_text1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_text0, detaching);
      if (detaching)
        detach_dev(t);
      destroy_component(hst_text1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot.name,
    type: "slot",
    source: '(15:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$2(ctx) {
  let hst_story;
  let current;
  hst_story = new ctx[0].Story({
    props: {
      $$slots: {
        controls: [create_controls_slot],
        default: [create_default_slot$1]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & 70) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$2.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$2($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Toast_story", slots, []);
  let { Hst } = $$props;
  let content = "toast\u5185\u5BB9";
  let duration = 2e3;
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Toast_story> was created with unknown prop '${key}'`);
  });
  function hst_text0_value_binding(value) {
    content = value;
    $$invalidate(1, content);
  }
  function hst_text1_value_binding(value) {
    duration = value;
    $$invalidate(2, duration);
  }
  const click_handler = () => toast(content, duration);
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ toast, Hst, content, duration });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("content" in $$props2)
      $$invalidate(1, content = $$props2.content);
    if ("duration" in $$props2)
      $$invalidate(2, duration = $$props2.duration);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    Hst,
    content,
    duration,
    hst_text0_value_binding,
    hst_text1_value_binding,
    click_handler
  ];
}
class Toast_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Toast_story",
      options,
      id: create_fragment$2.name
    });
    const { ctx } = this.$$;
    const props = options.props || {};
    if (ctx[0] === void 0 && !("Hst" in props)) {
      console.warn("<Toast_story> was created without expected prop 'Hst'");
    }
  }
  get Hst() {
    throw new Error("<Toast_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Toast_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const ToggleButton_svelte_svelte_type_style_lang = "";
const { console: console_1 } = globals;
const file$1 = "src/components/ToggleButton.svelte";
function create_fragment$1(ctx) {
  let img;
  let img_src_value;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      img = element("img");
      if (!src_url_equal(img.src, img_src_value = ctx[2]))
        attr_dev(img, "src", img_src_value);
      attr_dev(img, "class", "leaf-toggle-btn s-JXAEbOlvtxSR");
      add_location(img, file$1, 9, 0, 585);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, img, anchor);
      if (!mounted) {
        dispose = listen_dev(img, "click", ctx[5], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & 4 && !src_url_equal(img.src, img_src_value = ctx2[2])) {
        attr_dev(img, "src", img_src_value);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(img);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$1($$self, $$props, $$invalidate) {
  let src;
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("ToggleButton", slots, []);
  let { imgChecked = "https://tse4-mm.cn.bing.net/th/id/OIP-C.cGGNewOo82RNOdjHnyHcMAAAAA?pid=ImgDet&rs=1" } = $$props;
  let { imgUnchecked = "https://ts1.cn.mm.bing.net/th/id/R-C.cf59580e66343165cb761a1ab2aaf7e8?rik=E39R8u8Zk2mPng&riu=http%3a%2f%2fbpic.588ku.com%2felement_pic%2f18%2f07%2f02%2f56980234137c3b1a4fc26e860afae85a.jpg&ehk=XpqvmAYWaaPOPQnjjMhC7%2f2u7JeGF396wVdvWa3KMp4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" } = $$props;
  let { checked = false } = $$props;
  let { onChange = (status) => {
    console.log(status);
  } } = $$props;
  const writable_props = ["imgChecked", "imgUnchecked", "checked", "onChange"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console_1.warn(`<ToggleButton> was created with unknown prop '${key}'`);
  });
  const click_handler = () => {
    $$invalidate(0, checked = !checked);
    onChange(checked);
  };
  $$self.$$set = ($$props2) => {
    if ("imgChecked" in $$props2)
      $$invalidate(3, imgChecked = $$props2.imgChecked);
    if ("imgUnchecked" in $$props2)
      $$invalidate(4, imgUnchecked = $$props2.imgUnchecked);
    if ("checked" in $$props2)
      $$invalidate(0, checked = $$props2.checked);
    if ("onChange" in $$props2)
      $$invalidate(1, onChange = $$props2.onChange);
  };
  $$self.$capture_state = () => ({
    imgChecked,
    imgUnchecked,
    checked,
    onChange,
    src
  });
  $$self.$inject_state = ($$props2) => {
    if ("imgChecked" in $$props2)
      $$invalidate(3, imgChecked = $$props2.imgChecked);
    if ("imgUnchecked" in $$props2)
      $$invalidate(4, imgUnchecked = $$props2.imgUnchecked);
    if ("checked" in $$props2)
      $$invalidate(0, checked = $$props2.checked);
    if ("onChange" in $$props2)
      $$invalidate(1, onChange = $$props2.onChange);
    if ("src" in $$props2)
      $$invalidate(2, src = $$props2.src);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 25) {
      $$invalidate(2, src = checked ? imgChecked : imgUnchecked);
    }
  };
  return [checked, onChange, src, imgChecked, imgUnchecked, click_handler];
}
class ToggleButton extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {
      imgChecked: 3,
      imgUnchecked: 4,
      checked: 0,
      onChange: 1
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "ToggleButton",
      options,
      id: create_fragment$1.name
    });
  }
  get imgChecked() {
    throw new Error("<ToggleButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set imgChecked(value) {
    throw new Error("<ToggleButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get imgUnchecked() {
    throw new Error("<ToggleButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set imgUnchecked(value) {
    throw new Error("<ToggleButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get checked() {
    throw new Error("<ToggleButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set checked(value) {
    throw new Error("<ToggleButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get onChange() {
    throw new Error("<ToggleButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set onChange(value) {
    throw new Error("<ToggleButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const ToggleButton_story_svelte_svelte_type_style_lang = "";
const file = "src/story/toggle-button/ToggleButton.story.svelte";
function create_default_slot_1(ctx) {
  let div;
  let t1;
  let togglebutton;
  let current;
  togglebutton = new ToggleButton({ $$inline: true });
  const block = {
    c: function create() {
      div = element("div");
      div.textContent = "click the icon!";
      t1 = space();
      create_component(togglebutton.$$.fragment);
      attr_dev(div, "class", "s-HKE6-n2e4HAM");
      add_location(div, file, 9, 4, 170);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      insert_dev(target, t1, anchor);
      mount_component(togglebutton, target, anchor);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current)
        return;
      transition_in(togglebutton.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(togglebutton.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      if (detaching)
        detach_dev(t1);
      destroy_component(togglebutton, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1.name,
    type: "slot",
    source: '(9:2) <Hst.Variant title=\\"demo\\">',
    ctx
  });
  return block;
}
function create_default_slot(ctx) {
  let hst_variant;
  let current;
  hst_variant = new ctx[0].Variant({
    props: {
      title: "demo",
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_variant.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_variant, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_variant_changes = {};
      if (dirty & 2) {
        hst_variant_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant.$set(hst_variant_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_variant.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_variant.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_variant, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot.name,
    type: "slot",
    source: "(8:0) <Hst.Story>",
    ctx
  });
  return block;
}
function create_fragment(ctx) {
  let hst_story;
  let current;
  hst_story = new ctx[0].Story({
    props: {
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & 2) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("ToggleButton_story", slots, []);
  let { Hst } = $$props;
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<ToggleButton_story> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ ToggleButton, Hst });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst];
}
class ToggleButton_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "ToggleButton_story",
      options,
      id: create_fragment.name
    });
    const { ctx } = this.$$;
    const props = options.props || {};
    if (ctx[0] === void 0 && !("Hst" in props)) {
      console.warn("<ToggleButton_story> was created without expected prop 'Hst'");
    }
  }
  get Hst() {
    throw new Error("<ToggleButton_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<ToggleButton_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
let files = [
  { "id": "src-story-ani-button-anibutton-story-svelte", "path": ["AniButton"], "filePath": "src/story/ani-button/AniButton.story.svelte", "story": { "id": "src-story-ani-button-anibutton-story-svelte", "title": "AniButton", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-story-ani-button-anibutton-story-svelte-0", "title": "demo", "icon": null, "iconColor": null }] }, "supportPluginId": "svelte3", "index": 0, component: AniButton_story },
  { "id": "src-story-circle-circle-story-svelte", "path": ["Circle"], "filePath": "src/story/circle/Circle.story.svelte", "story": { "id": "src-story-circle-circle-story-svelte", "title": "Circle", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-story-circle-circle-story-svelte-0", "title": "demo", "icon": null, "iconColor": null }] }, "supportPluginId": "svelte3", "index": 1, component: Circle_story },
  { "id": "src-story-confirm-confirm-story-svelte", "path": ["Confirm"], "filePath": "src/story/confirm/Confirm.story.svelte", "story": { "id": "src-story-confirm-confirm-story-svelte", "title": "Confirm", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-story-confirm-confirm-story-svelte-0", "title": "demo", "icon": null, "iconColor": null }] }, "supportPluginId": "svelte3", "index": 2, component: Confirm_story },
  { "id": "src-story-marquee-marquee-story-svelte", "path": ["Marquee"], "filePath": "src/story/marquee/Marquee.story.svelte", "story": { "id": "src-story-marquee-marquee-story-svelte", "title": "Marquee", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-story-marquee-marquee-story-svelte-0", "title": "demo", "icon": null, "iconColor": null }] }, "supportPluginId": "svelte3", "index": 3, component: Marquee_story },
  { "id": "src-story-notice-notice-story-svelte", "path": ["Notice"], "filePath": "src/story/notice/Notice.story.svelte", "story": { "id": "src-story-notice-notice-story-svelte", "title": "Notice", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-story-notice-notice-story-svelte-0", "title": "demo", "icon": null, "iconColor": null }] }, "supportPluginId": "svelte3", "index": 4, component: Notice_story },
  { "id": "src-story-simple-mask-simplemask-story-svelte", "path": ["SimpleMask"], "filePath": "src/story/simple-mask/SimpleMask.story.svelte", "story": { "id": "src-story-simple-mask-simplemask-story-svelte", "title": "SimpleMask", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-story-simple-mask-simplemask-story-svelte-0", "title": "demo", "icon": null, "iconColor": null }] }, "supportPluginId": "svelte3", "index": 5, component: SimpleMask_story },
  { "id": "src-story-step-mask-stepmask-story-svelte", "path": ["StepMask"], "filePath": "src/story/step-mask/StepMask.story.svelte", "story": { "id": "src-story-step-mask-stepmask-story-svelte", "title": "StepMask", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-story-step-mask-stepmask-story-svelte-0", "title": "demo", "icon": null, "iconColor": null }] }, "supportPluginId": "svelte3", "index": 6, component: StepMask_story },
  { "id": "src-story-teleport-teleport-story-svelte", "path": ["Teleport"], "filePath": "src/story/teleport/Teleport.story.svelte", "story": { "id": "src-story-teleport-teleport-story-svelte", "title": "Teleport", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-story-teleport-teleport-story-svelte-0", "title": "demo", "icon": null, "iconColor": null }] }, "supportPluginId": "svelte3", "index": 7, component: Teleport_story },
  { "id": "src-story-toast-toast-story-svelte", "path": ["Toast"], "filePath": "src/story/toast/Toast.story.svelte", "story": { "id": "src-story-toast-toast-story-svelte", "title": "Toast", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-story-toast-toast-story-svelte-0", "title": "demo", "icon": null, "iconColor": null }] }, "supportPluginId": "svelte3", "index": 8, component: Toast_story },
  { "id": "src-story-toggle-button-togglebutton-story-svelte", "path": ["ToggleButton"], "filePath": "src/story/toggle-button/ToggleButton.story.svelte", "story": { "id": "src-story-toggle-button-togglebutton-story-svelte", "title": "ToggleButton", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-story-toggle-button-togglebutton-story-svelte-0", "title": "demo", "icon": null, "iconColor": null }] }, "supportPluginId": "svelte3", "index": 9, component: ToggleButton_story }
];
let tree = [{ "title": "AniButton", "index": 0 }, { "title": "Circle", "index": 1 }, { "title": "Confirm", "index": 2 }, { "title": "Marquee", "index": 3 }, { "title": "Notice", "index": 4 }, { "title": "SimpleMask", "index": 5 }, { "title": "StepMask", "index": 6 }, { "title": "Teleport", "index": 7 }, { "title": "Toast", "index": 8 }, { "title": "ToggleButton", "index": 9 }];
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  return Promise.all(deps.map((dep) => {
    dep = assetsURL(dep);
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule());
};
const Logo_dark = "/logo-small.jpg";
const config = { "plugins": [{ "name": "builtin:tailwind-tokens" }, { "name": "builtin:vanilla-support", "supportPlugin": { "id": "vanilla", "moduleName": "/Users/vscodeProject/tail-ui/node_modules/histoire/dist/node/builtin-plugins/vanilla-support", "setupFn": "setupVanilla" } }, { "name": "@histoire/plugin-svelte", "supportPlugin": { "id": "svelte3", "moduleName": "@histoire/plugin-svelte", "setupFn": "setupSvelte3" } }], "outDir": "/Users/vscodeProject/tail-ui/.histoire/dist", "storyMatch": ["**/*.story.vue", "**/*.story.svelte"], "storyIgnored": ["**/node_modules/**", "**/dist/**"], "supportMatch": [{ "id": "vanilla", "patterns": ["**/*.js"], "pluginIds": ["vanilla"] }, { "id": "svelte", "patterns": ["**/*.svelte"], "pluginIds": ["svelte3"] }], "tree": { "file": "title", "order": "asc" }, "theme": { "title": "flyleaf", "colors": { "primary": { "50": "#fff7ed", "100": "#ffedd5", "200": "#fed7aa", "300": "#fdba74", "400": "#fb923c", "500": "#f97316", "600": "#ea580c", "700": "#c2410c", "800": "#9a3412", "900": "#7c2d12" }, "gray": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "750": "#323238", "800": "#27272a", "850": "#1f1f21", "900": "#18181b", "950": "#101012" } }, "logo": { "square": "/logo-small.jpg", "light": "/logo-small.jpg", "dark": "/logo-small.jpg" }, "logoHref": "https://github.com/cunzaizhuyi/flyleaf" }, "responsivePresets": [{ "label": "Mobile (Small)", "width": 320, "height": 560 }, { "label": "Mobile (Medium)", "width": 360, "height": 640 }, { "label": "Mobile (Large)", "width": 414, "height": 896 }, { "label": "Tablet", "width": 768, "height": 1024 }, { "label": "Laptop (Small)", "width": 1024, "height": null }, { "label": "Laptop (Large)", "width": 1366, "height": null }, { "label": "Desktop", "width": 1920, "height": null }, { "label": "4K", "width": 3840, "height": null }], "backgroundPresets": [{ "label": "Transparent", "color": "transparent" }, { "label": "White", "color": "#fff" }, { "label": "Light gray", "color": "#aaa" }, { "label": "Dark gray", "color": "#333" }, { "label": "Black", "color": "#000" }], "sandboxDarkClass": "dark", "routerMode": "history", "viteIgnorePlugins": ["vite-plugin-svelte-kit"] };
const logos = { square: Logo_dark, light: Logo_dark, dark: Logo_dark };
const histoireConfig = config;
const customLogos = logos;
const isDark = useDark({ valueDark: "htw-dark" });
const toggleDark = useToggle(isDark);
const copiedFromExistingVariant = [
  "state",
  "slots",
  "source",
  "responsiveDisabled",
  "autoPropsDisabled",
  "setupApp",
  "configReady",
  "previewReady"
];
function mapFile(file2, existingFile) {
  let result;
  if (existingFile) {
    result = existingFile;
    for (const key in file2) {
      if (key === "story") {
        Object.assign(result.story, {
          ...file2.story,
          file: markRaw(result),
          variants: file2.story.variants.map((v) => mapVariant(v, existingFile.story.variants.find((item) => item.id === v.id)))
        });
      } else if (key !== "component") {
        result[key] = file2[key];
      }
    }
  } else {
    result = {
      ...file2,
      component: markRaw(file2.component),
      story: {
        ...file2.story,
        title: file2.story.title,
        file: markRaw(file2),
        variants: file2.story.variants.map((v) => mapVariant(v)),
        slots: () => ({})
      }
    };
  }
  return result;
}
function mapVariant(variant, existingVariant) {
  let result;
  if (existingVariant) {
    result = existingVariant;
    for (const key in variant) {
      if (!copiedFromExistingVariant.includes(key)) {
        result[key] = variant[key];
      }
    }
  } else {
    result = {
      ...variant,
      state: reactive({
        _hPropState: {},
        _hPropDefs: {}
      }),
      setupApp: null,
      slots: () => ({}),
      previewReady: false
    };
  }
  return result;
}
const clientSupportPlugins = {
  "vanilla": () => __vitePreload(() => import("./vendor.18bd7c13.js").then((n) => n.b9), true ? [] : void 0),
  "svelte3": () => __vitePreload(() => import("./vendor.18bd7c13.js").then((n) => n.ba), true ? [] : void 0)
};
const __default__ = {
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "GenericMountStory",
  props: {
    story: null
  },
  setup(__props) {
    const props = __props;
    const mountComponent = ref(null);
    watchEffect(async () => {
      var _a;
      const clientPlugin = clientSupportPlugins[(_a = props.story.file) == null ? void 0 : _a.supportPluginId];
      if (clientPlugin) {
        const pluginModule = await clientPlugin();
        mountComponent.value = markRaw(pluginModule.MountStory);
      }
    });
    return (_ctx, _cache) => {
      return mountComponent.value ? (openBlock(), createBlock(resolveDynamicComponent(mountComponent.value), mergeProps({
        key: 0,
        story: __props.story
      }, _ctx.$attrs), null, 16, ["story"])) : createCommentVNode("", true);
    };
  }
});
export {
  __vitePreload as _,
  tree as a,
  _sfc_main as b,
  customLogos as c,
  clientSupportPlugins as d,
  files as f,
  histoireConfig as h,
  isDark as i,
  mapFile as m,
  toggleDark as t
};

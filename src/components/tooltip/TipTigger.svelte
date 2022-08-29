<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte'

	const dispatch = createEventDispatcher()

	const onMouseenter = (e) => dispatch('tiggerin', e)
	const onMouseleave = (e) => dispatch('tiggerout', e)

	let bodyWidth
	let bodyEl
</script>

<div
	class="tooltip-tigger inline-block"
	bind:clientWidth={bodyWidth}
	bind:this={bodyEl}
	on:mouseenter={onMouseenter}
	on:mouseleave={onMouseleave}
>
	<slot />
	<slot name="ctx" {bodyWidth} {bodyEl} />
</div>

<style lang="scss">
	.inline-block {
		display: inline-block;
	}
</style>

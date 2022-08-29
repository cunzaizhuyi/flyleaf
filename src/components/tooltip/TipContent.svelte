<script lang="ts">
	import { onMount } from 'svelte'
	import Arrow from './TipArrow.svelte'
	import { DEFAULT_PLACEMENT, getPlacementClass } from './TipConfig'

	export let bodyEl = null
	export let show = false
	export let placement = DEFAULT_PLACEMENT

	let left = 0
	let contentWidth = 0
	const setContentWidth = (v: number) => (contentWidth = v)

	let contentEl
	onMount(() => {
		// 隐藏状态下拿不到contentEl.clientWidth
		const CONTENT_DISPLAY = contentEl.style.display // 有可能是空
		if (!CONTENT_DISPLAY || CONTENT_DISPLAY === 'visible')
			contentEl.style.display = 'block'
		setContentWidth(contentEl.clientWidth)
		contentEl.style.display = CONTENT_DISPLAY
	})

	console.log(111, getPlacementClass(placement))
	$: {
		const curBodyCtx = bodyEl?.children[0]
		if (curBodyCtx && contentWidth) {
			left =
				curBodyCtx.clientWidth / 2 - contentWidth / 2 + curBodyCtx.offsetLeft
		}
	}

	$: contentClass = ['tooltip-content', getPlacementClass(placement)].join(' ')
</script>

<div
	bind:this={contentEl}
	bind:clientWidth={contentWidth}
	style:left={left + 'px'}
	class={contentClass}
	class:hidden={!show}
>
	<slot />
	<Arrow {placement} />
</div>

<style lang="scss">
	@import './style/TipContent.scss';
</style>

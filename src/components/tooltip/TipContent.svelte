<script lang="ts">
	import { onMount } from 'svelte'
	import { useRect } from './util/useRect'
	import { DEFAULT_PLACEMENT, getPlacementDict, getPlacementLabel } from './TipConfig'

	import Teleport from '../teleport/Teleport.svelte'
	import Arrow from './TipArrow.svelte'

	export let bodyEl = null
	export let placement = DEFAULT_PLACEMENT

	let contentEl
	let contentStyle
	let teleportDisable = true
	let bodyElCopy, contentElCopy

	const PLACEMENT_DICT = getPlacementDict()
	$: contentClass = [
		'tooltip-content',
		getPlacementLabel(placement, PLACEMENT_DICT),
	].join(' ')

	onMount(() => {
		bodyElCopy = useRect(bodyEl)
		contentElCopy = useRect(contentEl)
		contentStyle = PLACEMENT_DICT[placement].getRect(bodyElCopy, contentElCopy)
		if (contentStyle) teleportDisable = false
	})
</script>

<Teleport disabled={teleportDisable}>
	<div bind:this={contentEl} style={contentStyle} class={contentClass}>
		<slot />
		<Arrow {placement} />
	</div>
</Teleport>

<style lang="scss">
	@import './style/TipContent.scss';
</style>

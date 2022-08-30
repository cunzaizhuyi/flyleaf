<script lang="ts">
	import { getPlacementDict, getPlacementLabel } from './TipConfig'

	export let placement = null
	const PLACEMENT_DICT = getPlacementDict('tiparrow_pm')
</script>

<div class="tooltip-arrow {getPlacementLabel(placement, PLACEMENT_DICT)}">
	<slot />
</div>

<style lang="scss">
	@import './style/TipArrow.scss';
</style>

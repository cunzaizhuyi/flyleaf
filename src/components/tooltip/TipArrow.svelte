<script lang="ts">
	export let placement = null
	import { getPlacementClass } from './TipConfig'
</script>

<div class="tooltip-arrow {getPlacementClass(placement, 'tiparrow_pm')}">
	<slot />
</div>

<style lang="scss">
	@import './style/TipArrow.scss';
</style>

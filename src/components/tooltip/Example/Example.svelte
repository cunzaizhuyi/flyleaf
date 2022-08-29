<script lang="ts">
	import Tooltip from '@/components/tooltip/Tooltip.svelte'
	let inputValue = ''

	const PLACEMENT = [
		['top-start', 'top', 'top-end'],
		['left-start', 'right-start'],
		['left', 'right'],
		['left-end', 'right-end'],
		['bottom-start', 'bottom', 'bottom-end'],
	]
</script>

<Tooltip>
	<button style="width: 400px; margin-left: 50px">aaashow</button>
	<div slot="content">1433223</div>
</Tooltip>

<Tooltip text={inputValue}>
	<input value={inputValue} on:input={(e) => (inputValue = e.target?.value)} />
</Tooltip>

<div style="margin-top:50px" />
<div style="padding:50px 100px">
	{#each PLACEMENT as pms}
		<div class="flex space-between" style="padding:20px">
			{#each pms as pm}
				<Tooltip text={pm} alwaysShow={true} placement={pm}>
					<button>{pm}</button>
				</Tooltip>
			{/each}
		</div>
	{/each}
</div>

<style lang="scss">
	.flex {
		display: flex;
	}
	.space-between {
		justify-content: space-between;
	}
</style>

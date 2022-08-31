<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import Tooltip from '../components/tooltip/Tooltip.svelte'

	let inputValue = ''

	const PLACEMENT = [
		['top-start', 'top', 'top-end'],
		['left-start', 'right-start'],
		['left', 'right'],
		['left-end', 'right-end'],
		['bottom-start', 'bottom', 'bottom-end'],
	]
</script>

<Meta title="Components/Tooltip" component={Tooltip} />

<Story name="mouse-enter/mouse-leave">
	<Tooltip>
		<button style="width: 400px; margin-left: 50px">aaashow</button>
		<div slot="content">1433223</div>
	</Tooltip>

	<Tooltip text={inputValue}>
		<input
			value={inputValue}
			on:input={(e) => (inputValue = e.target?.value)}
		/>
	</Tooltip>

	<h1>mouse-enter/mouse-leave</h1>
	<div style="padding:50px 100px">
		{#each PLACEMENT as pms}
			<div style="padding:20px;display: flex;justify-content: space-between;">
				{#each pms as pm}
					<Tooltip text={pm} placement={pm}>
						<button>{pm}</button>
					</Tooltip>
				{/each}
			</div>
		{/each}
	</div>

	<h1>alwaysShow</h1>
	<div style="padding:50px 100px">
		{#each PLACEMENT as pms}
			<div style="padding:20px;display: flex;justify-content: space-between;">
				{#each pms as pm}
					<Tooltip text={pm} placement={pm} alwaysShow={true}>
						<button>{pm}</button>
					</Tooltip>
				{/each}
			</div>
		{/each}
	</div>
</Story>

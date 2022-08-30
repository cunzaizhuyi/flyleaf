<script lang="ts">
	import Counter from '@/components/Counter.svelte'
	import Marquee from '@/components/Marquee.svelte'
	import { toast } from '@/components/toast'
	import StepMask from '@/components/StepMask.svelte'
	import Tooltip from '@/components/tooltip/Tooltip.svelte'

	const data = ['item1', 'item2', 'item3']

	// toast('这是toast内容', 1500);

	let isStart = false
	setTimeout(() => {
		isStart = true
	}, 1000)
	const stepArr = [
		{
			id: 'card',
			desc: '第一步：欢迎您来到这个APP',
		},
		{
			id: 'aa',
			desc: '第二步：',
		},
	]
	let switchOn = false

	let disableTeleport = false
	let inputValue = ''

	const PLACEMENT = [
		['top-start', 'top', 'top-end'],
		['left-start', 'right-start'],
		['left', 'right'],
		['left-end', 'right-end'],
		['bottom-start', 'bottom', 'bottom-end'],
	]
</script>

<div class="card" id="card">
	<Counter />
</div>
<!--<Marquee {data}></Marquee>-->
<div id="aa" style="width: 400px; margin: 50px">aa</div>

<!-- <StepMask {isStart} {stepArr} /> -->

<Tooltip>
	<button style="width: 400px; margin-left: 50px">aaashow</button>
	<div slot="content">1433223</div>
</Tooltip>

<Tooltip text={inputValue}>
	<input value={inputValue} on:input={e => (inputValue = e.target?.value)} />
</Tooltip>

<div style="margin-top:50px" />
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

<div style="margin-top:50px" />
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

<style lang="less">
	.card {
		background-color: red;
	}
</style>

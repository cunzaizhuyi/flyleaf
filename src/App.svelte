<script lang="ts">
	import Counter from '@/components/Counter.svelte'
	import Marquee from '@/components/Marquee.svelte'
	import { toast } from '@/components/toast'
	import StepMask from '@/components/StepMask.svelte'
	import TooltipExample from '@/components/tooltip/Example/Example.svelte'

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
</script>

<div class="card" id="card">
	<Counter />
</div>
<!--<Marquee {data}></Marquee>-->
<div id="aa" style="width: 400px; margin: 50px">aa</div>

<!-- <StepMask {isStart} {stepArr} /> -->

<TooltipExample />

<style lang="less">
	.card {
		background-color: red;
	}
</style>

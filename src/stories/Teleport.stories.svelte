<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import Teleport from '../components/teleport/Teleport.svelte'

	let disableTeleport = false
</script>

<Meta title="Components/Teleport" component={Teleport} />

<Story name="demo">
	<div class="box">
		<button on:click={() => (disableTeleport = !disableTeleport)}
			>click and {disableTeleport ? 'use' : 'disabled'} teleport</button
		>
		<Teleport disabled={disableTeleport}>
			teleport is {disableTeleport ? 'not' : ''} in body
		</Teleport>
	</div>
</Story>

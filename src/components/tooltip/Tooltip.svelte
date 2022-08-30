<script lang="ts">
	import Tigger from './TipTigger.svelte'
	import Content from './TipContent.svelte'
	import { DEFAULT_PLACEMENT } from './TipConfig'

	export let text = ''
	export let placement = DEFAULT_PLACEMENT
	export let alwaysShow = false

	let showTipContent: boolean = alwaysShow ? alwaysShow : false
	const tigger =
		(flag = false) =>
		() => {
			if (alwaysShow) return
			showTipContent = flag
		}
</script>

<div class="tooltip">
	<Tigger on:tiggerin={tigger(true)} on:tiggerout={tigger(false)}>
		<slot />
		<div slot="ctx" let:bodyEl>
			{#if bodyEl && showTipContent}
				<Content {bodyEl} {placement}>
					<slot name="content">
						{text || 'no context'}
					</slot>
				</Content>
			{/if}
		</div>
	</Tigger>
</div>

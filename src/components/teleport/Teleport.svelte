<script lang="ts">
	import { onMount } from 'svelte';
	export let disabled = false;
	export let to = 'body';

	let teleportEl;
	let originParentNode;
	let isInToEl = false;

	const insert = (el: HTMLElement | Element) => {
		const parentNode = el?.parentNode;
		const toEl = document.querySelector(to);
		if (isInToEl && disabled && originParentNode) {
			isInToEl = false;
			toEl.removeChild(el);
			console.log('teleport', to);
			originParentNode.appendChild(el);
		}
		if (!isInToEl && parentNode && parentNode !== toEl) {
			originParentNode = parentNode;
			isInToEl = true;
			parentNode.removeChild(el);
			console.log('reset', to);
			toEl.appendChild(el);
		}
	};

	$: if (disabled || !disabled) {
		insert(teleportEl);
	}
	onMount(() => insert(teleportEl));
</script>

<div bind:this={teleportEl}>
	<slot />
</div>

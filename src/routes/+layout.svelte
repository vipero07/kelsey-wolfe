<script lang="ts">
	const { children } = $props();

	let scrollY = $state(0);
	let innerHeight = $state(0);
	const halfHeight = $derived(innerHeight / 2);
	const heightPercent = $derived(((halfHeight - scrollY) / innerHeight) * 100);
	const translateY = $derived(`clamp(0px, ${heightPercent}vh, calc(50vh - 50%))`);
	const translateX = $derived(`clamp(0px, ${heightPercent}vw, calc(50vw - 50%))`);
</script>

<svelte:window bind:scrollY bind:innerHeight />

<h1
	class="font-middle f-text-4xl fixed top-0 transition-translate m-0"
	style="transform: translateY({translateY}) translateX({translateX});"
>
	Kelsey Wolfe
</h1>
{@render children()}

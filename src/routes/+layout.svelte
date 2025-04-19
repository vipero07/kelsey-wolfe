<script lang="ts">
	const { children } = $props();
</script>

<h1 class="font-middle f-text-4xl fixed top-0 transition-translate m-0">Kelsey Wolfe</h1>
{@render children()}

<style>
	@keyframes translate-header {
		from {
			transform: translateX(calc(50vw - 50%)) translateY(calc(50vh - 50%));
		}
		to {
			transform: translateX(0px) translateY(0px);
		}
	}
	h1 {
		animation: translate-header linear both;
		animation-timeline: scroll(block root);
	}
</style>

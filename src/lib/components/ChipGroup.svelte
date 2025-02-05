<script>
	let { children } = $props()
</script>

<div class="chips">
	{@render children()}
</div>

<style>
	.chips {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}
</style>

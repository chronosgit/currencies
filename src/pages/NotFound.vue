<template>
	<main class="main">
		<h1 class="heading">
			Such page doesn't exist
		</h1>

		<button
			class="button"
			@click="redirectBack"
		>
			Go back
		</button>
	</main>
</template>

<script>
	export default {
		name: 'NotFound',
		methods: {
			redirectBack() {
				this.$router.back();
			}
		},
	}
</script>

<style scoped>
	.main {
		margin: 0 auto;
		padding-block: 5rem;
		text-align: center;
	}

	.button {
		margin-block-start: 1rem;
		padding: 0.5rem 1rem;
		background-color: var(--color-lime);
		border: none;
		border-radius: 0.5rem;
	}

	.button:hover {
		background-color: var(--color-lime-dark);;
	}
</style>
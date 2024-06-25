<template>
	<p class="loading">
		<slot></slot>
	</p>
</template>

<script>
	export default {
		name: 'Loader',
		props: {
			isLoading: {
				type: Boolean,
				required: true,
			}
		}
	};
</script>

<style scoped>
	.loading {
		margin-block-start: 1rem;
		font-size: 1.1rem;
		font-weight: 500;
		text-align: center;
	}
</style>
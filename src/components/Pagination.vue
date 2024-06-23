<template>
	<div class="wrapper">
		<div 
			v-for="page in pages"
			class="item"
			@click="() => openPage(page / 5)"
		>
			{{ page }}
		</div>
	</div>	
</template>

<script>
	export default {
		name: 'Pagination',
		props: {
			pages: {
				type: Array,
				required: true,
			},
		},
		methods: {
			openPage(newPage) {
				this.$emit('paginate', { newPage });
			}
		},
	};
</script>

<style scoped>
	.wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	.item {
		padding:  0.2rem 0.5rem;
		border: 1px solid var(--color-lime);
		border-radius: 0.3rem;
		cursor: pointer;
	}
</style>
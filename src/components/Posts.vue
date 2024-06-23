<template>
	<div class="wrapper">
		<div class="posts">
			<div 
				class="post-wrapper" 
				v-for="post in posts"
			>
				<post :post="post" @like="onPostLike"/>
			</div>
		</div>

		<div class="filters_wrapper">
			<filters @select="onSelectFilter"/>
		</div>
	</div>
</template>

<script>
	import Post from '@components/Post';
	import Filters from '@components/Filters';

	export default {
		name: 'Posts',
		props: {
			posts: {
				type: Array,
				required: true,
    	},
		},
		components: {
			Post, Filters,
		},
		methods: {
			onPostLike({post}) {
				this.$emit('like', { post })
			},
			onSelectFilter({selectedFilter}) {
				this.$emit('select', { selectedFilter });
			},
		},
	};
</script>

<style scoped>
	.wrapper {
		max-width: 30rem;
		margin: 0 auto;
		padding: 3rem 0.5rem;
		display: flex;
		justify-content: space-around;
		gap: 1rem;
	}

	.posts {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;
	}

	.filters_wrapper {
		padding-block: 2rem;
	}
</style>
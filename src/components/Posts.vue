<template>
	<div class="posts">
		<div 
			class="post-wrapper" 
			v-for="post in posts"
		>
			<post :post="post"/>
		</div>
	</div>
</template>

<script>
	import Post from '@components/Post';

	export default {
		name: 'Posts',
		props: {
			posts: {
				type: Array,
				required: true,
    	},
		},
		components: {
			Post,
		},
	};
</script>

<style scoped>
	.posts {
		max-width: 30rem;
		margin: 0 auto;
		padding: 3rem 0.5rem;
		display: grid;
		grid-template-columns: 1fr;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}
</style>
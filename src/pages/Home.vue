<template>
	<posts :posts="posts"/>
</template>

<script>
	import Posts from '@components/Posts';
	import getPosts from '@/api/getPosts';

	export default {
		name: 'Home',
		data() {
			return {
				posts: [],
			};
		},
		components: {
			Posts
		},
		mounted() {
			getPosts()
				.then(posts => {
					this.posts = posts;
				})
				.catch(error => {
					console.error('Error fetching posts:', error);
				});
		},
	};
</script>
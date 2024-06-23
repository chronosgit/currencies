<template>
	<posts :posts="posts"/>
</template>

<script>
	import Posts from '@components/Posts';
	import mockPosts from '@/helpers/mockPosts';
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
			const fetchedPosts = getPosts();

			console.log(fetchedPosts);

			this.posts = mockPosts;
		},
	};
</script>
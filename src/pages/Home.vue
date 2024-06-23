<template>
	<posts :posts="posts"/>
</template>

<script>
	import Posts from '@components/Posts';
	import mockPosts from '@/helpers/mockPosts';

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
			this.posts = mockPosts;
		},
	};
</script>
<template>
	<main>
		<posts :posts="shownPosts" @like="onPostLike"/>

		<pagination :pages="pages" @paginate="paginate"/>
	</main>
</template>

<script>
	import Posts from '@components/Posts';
	import Pagination from '@components/Pagination';
	import paginationMixin from '@/mixins/paginationMixin';
	import getPosts from '@/api/getPosts';
	import getPageLabels from '@/helpers/getPageLabels';
	import isObjectInLocalStorage from '@/helpers/isObjectInLocalStorage';

	export default {
		name: 'Home',
		mixins: [paginationMixin],
		components: {
			Posts, Pagination,
		},
		methods: {
			onPostLike({post}) {
				if(isObjectInLocalStorage(post)) {
					this.dislikePost(post.id);
					return;
				}

				this.likePost(post);
			},
			dislikePost(postId) {
				localStorage.removeItem(`post_${postId}`);
			},
			likePost(post) {
				localStorage.setItem(`post_${post.id}`, JSON.stringify(post));
			},
		},
		mounted() {
			getPosts()
				.then(posts => {
					this.posts = posts;
					this.shownPosts = this.getNewShownPosts(this.curPage);
					this.pages = getPageLabels(posts.length);
				})
				.catch(error => {
					console.error('Error fetching posts:', error);
				});
		},
	};
</script>
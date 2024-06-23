<template>
	<posts :posts="shownPosts" @like="onPostLike"/>

	<pagination :pages="pages" @paginate="paginate"/>
</template>

<script>
	import Posts from '@components/Posts';
	import Pagination from '@components/Pagination';
	import getPosts from '@/api/getPosts';
	import getPageLabels from '@/helpers/getPageLabels';
import isObjectInLocalStorage from '@/helpers/isObjectInLocalStorage';

	export default {
		name: 'Home',
		data() {
			return {
				posts: [],
				shownPosts: [],
				curPage: 1,
				pages: null,
			};
		},
		components: {
			Posts, Pagination,
		},
		methods: {
			paginate({newPage}) {	
				if(newPage === this.curPage) {
					return;
				}

				this.curPage = newPage;
			},
			getNewShownPosts(page) {
				return this.posts.slice((page - 1) * 5, page * 5);
			},
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
				localStorage.setItem(`post_${post.id}`, post);
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
		watch: {
			curPage(newPage) {
				this.shownPosts = this.getNewShownPosts(newPage);
  		},
		}
	};
</script>
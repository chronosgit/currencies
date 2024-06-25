<template>
	<main>
		<loader v-if="isLoading">
			{{ this.loadingMsg }}
		</loader>

		<template v-else>
			<posts 
				:posts="shownPosts" 
				@like="onPostLike"
				@select="onSelectFilter"
			/>

			<pagination 
				:pages="pages" 
				@paginate="paginate"
			/>
		</template>
	</main>
</template>

<script>
	import Posts from '@components/Posts';
	import Pagination from '@components/Pagination';
	import Loader from '@components/Loader';
	import postsMixin from '@/mixins/postsMixin';
	import getPosts from '@/api/getPosts';
	import getPageLabels from '@/helpers/getPageLabels';
	import isObjectInLocalStorage from '@/helpers/isObjectInLocalStorage';

	export default {
		name: 'Home',
		mixins: [postsMixin],
		components: {
			Posts, Pagination, Loader
		},
		data() {
			return {
				isLoading: false,
				loaderMsg: '',
			};	
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
			this.isLoading = true;
			this.loaderMsg = 'Loading...';

			getPosts()
				.then(posts => {
					this.posts = posts;
					this.initPosts = this.posts;
					this.shownPosts = this.getNewShownPosts(this.curPage);
					this.pages = getPageLabels(posts.length);
					console.log(posts);
					this.isLoading = false;
					this.loaderMsg = '';
				})
				.catch(error => {
					this.loaderMsg = 'Error fetching posts';
					console.error('Error fetching posts:', error);
				});
		},
	};
</script>
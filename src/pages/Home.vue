<template>
	<main>
		<loader v-if="isLoading"/>

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

			getPosts()
				.then(posts => {
					this.posts = posts;
					this.initPosts = this.posts;
					this.shownPosts = this.getNewShownPosts(this.curPage);
					this.pages = getPageLabels(posts.length);
				})
				.catch(error => {
					console.error('Error fetching posts:', error);
				})
				.finally(() => {
					this.isLoading = false;
					console.log(this.posts);
				});
		},
	};
</script>
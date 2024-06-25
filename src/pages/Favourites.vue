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
	import getFavourites from '@/helpers/getFavourites';
	import postsMixin from '@/mixins/postsMixin';
	import getPageLabels from '@/helpers/getPageLabels';

	export default {
		name: 'Favourites',
		mixins: [postsMixin],
		components: {
			Posts, Pagination, Loader
		},
		mounted() {
			const favs = getFavourites();
			this.posts = favs;
			this.initPosts = this.posts;
			this.shownPosts = this.getNewShownPosts(this.curPage);
			this.pages = getPageLabels(favs.length);
		},
	};
</script>
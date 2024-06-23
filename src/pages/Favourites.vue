<template>
	<main>
		<posts 
			:posts="shownPosts" 
			@like="onPostLike"
			@select="onSelectFilter"
		/>

		<pagination 
			:pages="pages" 
			@paginate="paginate"
		/>
	</main>
</template>

<script>
	import Posts from '@components/Posts';
	import Pagination from '@components/Pagination';
	import getFavourites from '@/helpers/getFavourites';
	import postsMixin from '@/mixins/postsMixin';
	import getPageLabels from '@/helpers/getPageLabels';

	export default {
		name: 'Favourites',
		mixins: [postsMixin],
		components: {
			Posts, Pagination,
		},
		mounted() {
			console.log('favs mounted');
			const favs = getFavourites();
			this.posts = favs;
			this.initPosts = this.posts;
			this.shownPosts = this.getNewShownPosts(this.curPage);
			this.pages = getPageLabels(favs.length);
		},
	};
</script>
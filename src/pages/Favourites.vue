<template>
	<main>
		<posts :posts="shownPosts" @like="onPostLike"/>

		<pagination :pages="pages" @paginate="paginate"/>
	</main>
</template>

<script>
	import Posts from '@components/Posts';
	import Pagination from '@components/Pagination';
	import getFavourites from '@/helpers/getFavourites';
	import paginationMixin from '@/mixins/paginationMixin';
	import getPageLabels from '@/helpers/getPageLabels';

	export default {
		name: 'Favourites',
		mixins: [paginationMixin],
		components: {
			Posts, Pagination,
		},
		mounted() {
			const favs = getFavourites();
			this.posts = favs;
			this.shownPosts = this.getNewShownPosts(this.curPage);
			this.pages = getPageLabels(favs.length);
		},
	};
</script>
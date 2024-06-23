export default {
  data() {
    return {
      posts: [],
      shownPosts: [],
      curPage: 1,
      pages: null,
    };
  },
  methods: {
    paginate({ newPage }) {
      if (newPage === this.curPage) {
        return;
      }
      this.curPage = newPage;
    },
    getNewShownPosts(page) {
      return this.posts.slice((page - 1) * 5, page * 5);
    },
  },
	watch: {
		curPage(newPage) {
			this.shownPosts = this.getNewShownPosts(newPage);
		},
	}
};
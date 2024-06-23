export default {
  data() {
    return {
      posts: [],
      initPosts: [],
      shownPosts: [],
      curPage: 1,
      pages: null,
      selectedFilter: null,
    };
  },
  methods: {
    paginate({newPage}) {
      if (newPage === this.curPage) {
        return;
      }
      this.curPage = newPage;
    },
    getNewShownPosts(page) {
      return this.posts.slice((page - 1) * 5, page * 5);
    },
    onSelectFilter({selectedFilter}) {
      if(this.selectedFilter !== selectedFilter) {
        this.selectedFilter = selectedFilter;
      }
    },
  },
	watch: {
		curPage(newPage) {
			this.shownPosts = this.getNewShownPosts(newPage);
		},
    posts() {
      this.shownPosts = this.getNewShownPosts(this.curPage);
    },
    selectedFilter(newFilter) {
      if(newFilter === 'no') {
        this.posts = this.initPosts;
        return;
      }
      const posts = Object.values(this.posts);

      const filtered = posts.sort((p1, p2) => {
        const val1 = p1[newFilter].toUpperCase();
        const val2 = p2[newFilter].toUpperCase();
      
        if(val1 < val2) {
          return -1;
        }

        if(val1 > val2) {
          return 1;
        }

        return 0;
      });

      this.posts = filtered;
    },
	}
};
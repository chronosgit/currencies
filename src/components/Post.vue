<template>
	<div class="post">
		<div class="flexbox">
			<img 
				src=".././assets/icon-title.png" 
				alt=""
				class="icon"	
			>

			<p class="post_fullname">
				{{ this.post.fullname }}
			</p>
		</div>

		<div class="flexbox">
			<img 
				src=".././assets/icon-title.png" 
				alt=""
				class="icon"	
			>

			<p class="post_title">
				{{ this.post.title }}
			</p>
		</div>

		<div class="flexbox">
			<img 
				src=".././assets/icon-money.png" 
				alt=""
				class="icon"	
			>

			<p class="post_description">
				{{ this.post.descr }}
			</p>
		</div>

		<img 
			src=".././assets/icon-heart.jpg" 
			alt=""
			class="icon icon_heart"	
			@click="onLike"
		>
	</div>
</template>

<script>
	export default {
		name: 'Post',
		props: {
			post: {
				type: Object,
				required: true,
			}
		},
		methods: {
			onLike() {
				this.$emit('like', { post: this.post })
			},
		}
	};
</script>

<style scoped>
	.post {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		border: 1px solid var(--color-lime);
		border-radius: 0.8rem;
		overflow: hidden;
	}

	.flexbox {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.post_fullname {
		font-weight: 600;
		text-transform: uppercase;	
	}

	.icon {
		max-width: 1.2rem;
		height: auto;
	}

	.icon_heart {
		align-self: flex-end;
		cursor: pointer;
	}
</style>
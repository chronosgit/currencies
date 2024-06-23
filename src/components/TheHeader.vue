<template>
	<header class="header">
		<img 
			src="../assets/logo-main.png"
			alt=""
			class="main_logo"
			@click="redirectToHome"
		/>

		<nav class="nav">
			<router-link 
				to="/favourites"
				active-class="active_link"
			>
				Favourites
			</router-link>
		</nav>

		<a 
			href="https://github.com/chronosgit/currencies"
			target="_blank"
			class="github_link"
		>
			<img 
				src="../assets/logo-github.png" 
				alt="github logo"
				class="github_icon"
			/>
		</a>
	</header>
</template>

<script>
	export default {
		name: "TheHeader",
		methods: {
			redirectToHome() {
				this.$router.push('/');
			}
		}
	}
</script>

<style scoped>
	.header {
		padding: 0.5rem 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: var(--color-lime);
	}

	.main_logo {
		--max-size: 3rem;
		max-width: var(--max-size);
		max-height: var(--max-size);
		cursor: pointer;
	}

	a {
		text-decoration: none;
	}

	.active_link {
		text-decoration: underline
	}

	.github_link {
		--max-size: 2rem;
		max-width: var(--max-size);
		max-height: var(--max-size);
	}

	.github_icon {
		cursor: pointer;
	}
</style>
<template>
	<router-view/>
</template>

<script>
	import TheHeader from '@components/TheHeader';

	export default {
		name: 'App',
		components: {
			TheHeader,
		},
	};
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Poppins', sans-serif;
	}

	:root {
		--color-lime: #0ee077;
		--color-lime-dark: #0db863;
		--color-gray: #D9D9D9;
		--color-gray-light: #f0f0f0;
	}

	img {
		display: inline-block;
		max-width: 100%;
		height: auto;
	}

	a {
		color: inherit;
	}

	button {
		cursor: pointer;
	}
</style>
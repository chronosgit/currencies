<template>
	<!-- <the-header/> -->

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
		font-family: 'Poppins';
	}

	:root {
		--color-lime: #0ee077;
		--color-lime-dark: #0db863;
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
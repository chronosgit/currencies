<template>
	<router-view/>
</template>

<script>
	export default {
		name: 'App',
	};
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		font-family: 'Poppins';
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
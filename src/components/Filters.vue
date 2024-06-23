<template>
	<select 
		name="filters" 
		class="filters" 
		@change="onSelect"
	>
		<option value="no" class="filter">
			Без фильтра
		</option>
		<option value="fullname" class="filter">
			Наименование
		</option>
		<option value="title" class="filter">
			Код
		</option>
	</select>
</template>

<script>
	export default {
		name: 'Filters',
		methods: {
			onSelect(e) {
				const selectedFilter = e.target.value;
				this.$emit('select', { selectedFilter })
			}
		},
	};
</script>
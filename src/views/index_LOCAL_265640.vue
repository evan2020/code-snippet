<template>
    <div class="index">
        index
    </div>
</template>

<script>
export default {
	name: 'index',
	data() {
		return {}
	},
	created() {
		console.log(`初始化主页3`)
		this.$router.push({
			name: `coupon`
		})
	},
	mounted() {}
}
</script>

<style lang="scss" scoped>
.index {
	width: 100vw;
	height: 100vh;
	font-size: 0.3rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
}
</style>

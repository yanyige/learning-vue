<template>
	<div class="nav">
		<div class="nav-item">
			<router-link v-bind:to="{ path: '/goods' }">
				商品
			</router-link>
		</div>
		<div class="nav-item">
			<router-link v-bind:to="{ path: '/ratings '}">
				评价
			</router-link>
		</div>
		<div class="nav-item">
			<router-link v-bind:to="{ path: '/seller' }">
				商家
			</router-link>
		</div>
	</div>
</template>

<script type="text/javascript">
export default {
  name: 'nav'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.nav
	display flex
	width 100%
	height 40px
	line-height 40px
	.nav-item
		flex 1
		text-align center
</style>

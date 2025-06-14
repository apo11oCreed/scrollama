<script lang="ts">
	let { id } = $props();
</script>
<div class='scroll__graphic'>
	<!--<div class='chart'>-->
	<!--	<p>0</p>-->
	<!--</div>-->
	<img src="https://picsum.photos/id/{id}/1200/900" />
</div>
<style lang="stylus">
.scroll__graphic
	top 0
	left 0
	bottom auto
	width 100%
	-webkit-transform translate3d(0, 0, 0)
	-moz-transform translate3d(0, 0, 0)
	transform translate3d(0, 0, 0)
	z-index 0
	position sticky
	
.scroll__graphic .chart
	position absolute
	// right 1rem
	// top 50%
	// -moz-transform translateY(-50%)
	// -webkit-transform translateY(-50%)
	// transform translateY(-50%)
	display flex
	justify-content center
	align-items center
	width 100%
	height 100%
	overflow hidden
	img
		width 100%
		height auto
		
	
</style>
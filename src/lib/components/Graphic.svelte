<script lang="ts">
	let { id, type } = $props();
</script>
<div class='scroll__graphic'>
	{#if type=="image"}
	<img src="https://picsum.photos/id/{id}/1200/900" />
	{:else}
	<video loop="true" height="1200" width="900" preload="true" autoplay="true" playsinline="true" muted="false">
		<source src="https://clientcenter-env-eba-uhva3sx9-us-east-1-elasticbeanstalk-com.s3.us-east-1.amazonaws.com/test-video/windows-google-search.mp4" type="video/mp4" />-
	</video>
	{/if}
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
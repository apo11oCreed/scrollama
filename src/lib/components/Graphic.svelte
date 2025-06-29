<script lang="ts">
	let { id, type } = $props();
	import { onMount } from 'svelte';
	import videojs from 'video.js';
	import 'video.js/dist/video-js.css';
	
	let videoElement;
	let player;
	
	const videoOptions={
		controls: false,
		autoplay: true,
		playsinline: true,
		muted: true,
		loop: true,
		height: 1200,
		width: 900,
		preload: true,
		sources: [
			{
				src: 'https://clientcenter-env-eba-uhva3sx9-us-east-1-elasticbeanstalk-com.s3.us-east-1.amazonaws.com/test-video/windows-google-search.mp4',
				type: 'video/mp4'
			}
		]
	};
	
	onMount(()=>{
		if(videoElement){
			player = videojs(videoElement, videoOptions, ()=>{
				console.log('player is ready');
			});
		}
		
		return ()=>{
			if(player){
				player.dispose();
			}
		};
		
	});
</script>
<div class='scroll__graphic'>
	{#if type=="image"}
	<img src="https://picsum.photos/id/{id}/1200/900" alt="test" />
	{:else}
	<video bind:this={videoElement} class="video-test"><track kind="captions" /></video>
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
	overflow hidden
	
.scroll__graphic
	img,
	video
		min-height 100%
		min-width 100%
		margin auto
		object-fit cover
		
	
</style>
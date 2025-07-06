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
				src: '/windows-google-search.m3u8',
				type: 'application/x-mpegURL'
			},
			{
				src: '/windows-google-search.mp4',
				type: 'video/mp4'
			}
		]
	};
	
	onMount(()=>{
		if(videoElement){
			player = videojs(videoElement, videoOptions);
		}
		
		return ()=>{
			if(player){
				player.dispose();
			}
		};
		
	});
</script>
<div class='scroll__graphic'>
	{#if type=="img"}
	<img src="https://picsum.photos/id/{id}/1200/900" alt="test" />
	{:else}
	<video bind:this={videoElement} class="video"><track kind="captions" /></video>
	{/if}
</div>
<style lang="stylus">
.scroll__graphic
	top 0
	left 0
	z-index 0
	position sticky
	overflow hidden
	
.scroll__graphic
	img,
	.video
		min-height 100%
		min-width 100%
		object-fit cover
		display block
		position relative
		left 50%
		transform translateX(-50%)
</style>
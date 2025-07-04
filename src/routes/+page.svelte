<script lang="ts">
    import { Graphic, Text } from '$lib';
    import * as d3 from 'd3';
    import { onMount } from 'svelte';
    import data from '$lib/data/graphics.json';
    // using d3 for convenience, and storing a selected elements
    
    let scroller,
    _container,
    _graphic,
    _chart,
    _text,
    _step;
    
    onMount(async()=>{
        
        const module = await import('https://unpkg.com/scrollama');
        
        _container = d3.selectAll('.scroll');
        _graphic = _container.select('.scroll__graphic');
        _chart = _graphic.select('.chart');
        _text = _container.select('.scroll__text');
        _step = _text.selectAll('.step');
        
        // initialize the scrollama
        scroller = scrollama();

        init();
        
    });
    
    // resize function to set dimensions on load and on page resize
    function handleResize() {
        
        const stepHeight = Math.floor(window.innerHeight );
        _step.style('height', stepHeight + 'px');
        _graphic
            .style('height', window.innerHeight + 'px');
            
        scroller.resize();
    }
    
    // scrollama event handlers
    function handleStepEnter(response) {
        
        _step.classed('is-active',function(d,i){
            return i === response.index;
        });
        
        const stepData = _step.attr('data-step');
        _chart.html(`<p>${response.index + 1}</p>`);
    }
    
    function handleContainerEnter(response) {
        _graphic.classed('is-fixed', true);
        _graphic.classed('is-bottom', false);
    }
    
    function handleContainerExit(response) {
        _graphic.classed('is-fixed', false);
        _graphic.classed('is-bottom', true);
    }
    
    // kick-off code to run once on load
    function init() {
        // 1. call a resize on load to update width/height/position of elements
	    handleResize();

    	// 2. setup the scrollama instance
    	// 3. bind scrollama event handlers (this can be chained like below)
    	scroller
    		.setup({
    			container: '#scroll', // our outermost scrollytelling element
    			graphic: '.scroll__graphic', // the graphic
    			text: '.scroll__text', // the step container
    			step: '.scroll__text .step', // the step elements
    			offset: 0.5, // set the trigger to be 1/2 way down screen
    			debug: false, // display the trigger offset for testing
    		});
    		//.onStepEnter(handleStepEnter);
    		
        //_container.node().addEventListener('mouseenter', handleContainerEnter);
        //_container.node().addEventListener('mouseleave', handleContainerExit);
    
    	// setup resize event
    	window.addEventListener('resize', handleResize);
    
    }
    
</script>
{#each data.graphics as item, i}
<section class="scroll">
    <Graphic id={i} type={item.type} />
    <Text />
</section>
{/each}
<style lang="stylus">
.scroll
    position relative
</style>
<!--https://pudding.cool/process/introducing-scrollama/-->
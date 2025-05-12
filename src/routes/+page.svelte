<script>
    import { Graphic, Text } from '$lib';
    import * as d3 from 'd3';
    import { onMount } from 'svelte';
    // using d3 for convenience, and storing a selected elements
    
    let scroller;
    
    onMount(async()=>{
        const _container = d3.select('#scroll');
        const _graphic = _container.select('.scroll__graphic');
        const _chart = _graphic.select('.chart');
        const _text = _container.select('.scroll__text');
        const _step = _text.selectAll('.step');
        
        // initialize the scrollama
        scroller = scrollama();

        init();
        
    });
    
    // resize function to set dimensions on load and on page resize
    function handleResize() {
        const stepHeight = Math.floor(window.innerHeight * 0.75);
        _step.style('height', stepHeight + 'px');
        
        const bodyWidth = d3.select('body').node().offsetWidth;
        
        _graphic
            .style('height', window.innerHeight + 'px');
            
        const chartMargin = 32;
        const textWidth = _text.node().offsetWidth;
        const chartWidth = _graphic.node().offsetWidth - textWidth - chartMargin;
        
        const chartHeight = Math.floor(window.innerHeight / 2);
        
        _chart
            .style('width', chartWidth + 'px')
            .style('height', chartHeight + 'px');
            
        scroller.resize();
    }
    
    // scrollama event handlers
    function handleStepEnter(response) {}
    
    function handleContainerEnter(response) {}
    
    function handleContainerExit(response) {}
    
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
    			debug: true, // display the trigger offset for testing
    		})
    		.onStepEnter(handleStepEnter)
    		.onContainerEnter(handleContainerEnter)
    		.onContainerExit(handleContainerExit);
    
    	// setup resize event
    	window.addEventListener('resize', handleResize);

        // start it up
    }
    
</script>
<section id="scroll">
    <Graphic />
    <Text />
</section>
<style lang="stylus">
#scroll
    position relative
</style>
<!--https://pudding.cool/process/introducing-scrollama/-->
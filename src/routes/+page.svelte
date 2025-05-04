<script>
    import { Graphic, Text } from '$lib';
    import * as d3 from 'd3';
    import { onMount } from 'svelte';
    // using d3 for convenience, and storing a selected elements
    
    onMount(()=>{
        const _container = d3.select('#scroll');
        const _graphic = _container.select('.scroll__graphic');
        const _chart = _graphic.select('.chart');
        const _text = _container.select('.scroll__text');
        const _step = _text.selectAll('.step');
        
        console.log(_container);
    });
    
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
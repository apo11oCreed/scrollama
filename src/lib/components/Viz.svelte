<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { get } from 'svelte/store';
  import * as d3 from 'd3';
  
  const { data } = get(page); // get the page store synchronously
  const { forecastData } = data;
  console.log('Forecast data for Boston: ', forecastData);
  
  let graph;
  let container;
  
  onMount(()=>{
    // Select the body element as the parent container
    const svgContainer = d3.select(container)
      .append("svg") // Add a div to hold the SVGs
      .attr("class", "svg-container");
  
    svgContainer.selectAll('.item')
    .data(forecastData)
    .enter()
    .append('g')
    .text(function(d){
      console.log(d.period);
      return d.period;
    });
  });
  
</script>
<p>This is a placeholder for the data visualization component</p>
<div bind:this={container}></div>
<style lang="stylus">
    
</style>
<!--https://www.weather.gov/documentation/services-web-api#/default/glossary-->
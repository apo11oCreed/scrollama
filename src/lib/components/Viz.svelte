<script lang="ts">
  import { isVisualizationReady } from '$lib/store.js';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { get } from 'svelte/store';
  import * as d3 from 'd3';
  
  //let {ready} = $isVisualizationReady;
  
  let svg;
  let x;
  let y;
  let visualized = false;
  
  $: if($isVisualizationReady.ready && !visualized){
    if(svg !== undefined && x !== undefined && y !== undefined){
      
        // Add a rect for each bar.
      svg.append("g")
        .attr("fill", "steelblue")
        .selectAll()
        .data(forecastData)
        .join("rect")
        .classed("bars",true)
        .attr("x", margins.left)
        .attr("y", (d) => y(d.period))
        .attr("transform", `translate(0, ${margins.top})`)
        .attr("height", y.bandwidth())
        .transition()
        .duration(750)
        .ease(d3.easeCubicInOut)
        .attr("width", (d) => x(d.temperature) - margins.left - margins.right);
        
      visualized = true;
    }
  }
  
  const { data } = get(page); // get the page store synchronously
  const { forecastData } = data;
  
  let graph;
  let container;
  
  const width = 600;
  const height = 400;
  const margins = {
    top: 16,
    right: 0,
    bottom: 26,
    left: 96
  }
  
  //https://observablehq.com/@d3/bar-chart/2
  
  onMount(()=>{
    
    // Create the scales for the x and y axes
    const maxTemp = d3.max(forecastData, d => d.temperature) ?? 0;
    const xMax = Math.ceil(maxTemp / 10) * 10; // rounds up to nearest 10
    x = d3.scaleLinear()
      .domain([0,xMax])
      .range([margins.left, width - margins.left - margins.right]);

    y = d3.scaleBand()
      .domain(forecastData.map(d => d.period))
      .range([margins.bottom, height - margins.top])
      .padding(0.325);

    svg = d3.create("svg")
      .attr("width",width)
      .attr("height",height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto;");
        
      svg.append("g")
        .attr("transform", `translate(0,${margins.top*2 + 8})`)
        .call(d3.axisTop(x).tickSizeOuter(0));

      // Add a label for the y-axis
      svg.append("g")
        .attr("transform", `translate(${margins.left},${margins.top})`)
        .call(d3.axisLeft(y))
        .call(g => g.select(".domain").remove())
        .call(g => g.selectAll(".tick line").remove())
        .call(g => g.selectAll(".tick text")
          .attr("x", -10)
          .attr("dy", "0.32em"));
      
      // Add a label for the x-axis
      svg.append("g")
        .attr("transform", `translate(${margins.left},22)`)
        .call(g => g.select(".domain").remove())
        .call(g => g.append("text")
        .attr("x", 0)
        .attr("y", -16) // Place above the axis
        .attr("fill", "currentColor")
        .attr("text-anchor", "start")
        .attr("font-size", "12px")
        .attr("font-weight", "bold")
        .attr("dy", "0.32em")
        .text("→ Temperature (degrees)")
      )

      // Select the body element as the parent container
      const svgContainer = d3.select(container)
        .append(()=>{
          return svg.node();
        }) // Add svg to the container
        .attr("class", "svg-container");
    
  });
  
</script>
<p>This is a placeholder for the data visualization component</p>
<div bind:this={container}></div>
<style lang="stylus">
svg
  width 100%
  height 100%
</style>
<!--https://www.weather.gov/documentation/services-web-api#/default/glossary-->
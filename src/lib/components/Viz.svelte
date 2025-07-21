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
  
  const width = 600;
  const height = 400;
  const margins = {
    top: 16,
    right: 16,
    bottom: 48,
    left: 48
  }
  
  //https://observablehq.com/@d3/bar-chart/2
  
  onMount(()=>{
    
    const x = d3.scaleLinear()
      .domain([0,d3.max(forecastData, (d) => d.temperature)])
      .range([height - margins.bottom, margins.top]);
    
    const y = d3.scaleBand()
      .domain(d3.groupSort(forecastData, ([d]) => -d.temperature, (d) => d.period))
      .range([margins.left, width - margins.right])
      .padding(0.1);
    
    const svg = d3.create("svg")
      .attr("width",width)
      .attr("height",height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto;");
      
    // Add a rect for each bar.
    svg.append("g")
        .attr("fill", "steelblue")
      .selectAll()
      .data(forecastData)
      .join("rect")
        .attr("y", (d) => y(d.period))
        .attr("x", (d) => x(d.temperature))
        .attr("height", (d) => x(0) - x(d.temperature))
        .attr("width", y.bandwidth());
        
      svg.append("g")
        .attr("transform", `translate(0,${height - margins.bottom}`)
        .call(d3.axisBottom(x).tickSizeOuter(0));
        
      svg.append("g")
        .attr("transform", `translate(${margins.left},0)`)
        .call(d3.axisLeft(x).tickFormat((x)=>(x*100).toFixed()))
        .call(g => g.select(".domain").remove())
        .call(g => g.append("text"))
          .attr("y", -margins.left)
          .attr("x", 10)
          .attr("fill", "currentColor")
          .attr("text-anchor", "start")
          .text("&uarr; Temperature (degrees)");
        
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
    
</style>
<!--https://www.weather.gov/documentation/services-web-api#/default/glossary-->
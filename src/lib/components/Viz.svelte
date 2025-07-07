<script lang="ts">
  import { page } from '$app/stores';
  import { get } from 'svelte/store';
  
  const { data } = get(page); // get the page store synchronously
  const { forecastData } = data;
  console.log('Forecast data for Boston: ', forecastData.properties.periods);
  
</script>
<p>This is a placeholder for the data visualization component</p>
<style lang="stylus">
    
</style>
<!--https://www.weather.gov/documentation/services-web-api#/default/glossary-->
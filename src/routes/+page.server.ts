import type { PageServerLoad } from './$types';
import graphicsData from '$lib/data/graphics.json';

export const load: PageServerLoad = async ({ fetch, setHeaders }) => {
  
  const forecastReq = await fetch(
    'https://api.weather.gov/gridpoints/BOX/42,71/forecast',
    {
      headers :{
        'User-Agent': 'nelson.ncdesigns@gmail.com ncdesigns-studio.com'
      }
    });
  
  const forecastData = await forecastReq.json()
  .then(data=>{
    
    const periods = data.properties.periods;
    
    let tempObjs = [];
    
    for(let period in periods){
      tempObjs.push({period:periods[period].name,temperature:periods[period].temperature});
    }
    
    return tempObjs;
    
  });
    
  return { 
    forecastData,
    graphicsData
  };
    
};
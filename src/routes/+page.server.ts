import type { PageServerLoad } from './$types';
import graphicsData from '$lib/data/graphics.json';

export const load: PageServerLoad = async ({ fetch, setHeaders }) => {
  
  const forecastReq = await fetch('https://api.weather.gov/gridpoints/BOX/42,71/forecast');
  setHeaders({
    'User-Agent': 'nelson.ncdesigns@gmail.com ncdesigns-studio.com'
  });
  
  const forecastData = await forecastReq.json();
    
  return { 
    forecastData,
    graphicsData
  };
    
};
import { writable } from 'svelte/store';

export const forecastData = writable({
  data: [],
  setData(newData) {
    this.data = newData;
  },
  getData() {
    return this.data;
  },
  clearData() {
    this.data = [];
  }
}); 

export const isVisualizationReady = writable({
  ready: false,
  setReady(status) {
    this.ready = status;
  },
  isReady() {
    return this.ready;
  }
});
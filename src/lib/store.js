import store from 'svelte/store';

export const forecastData = store({
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

export const isVisualizationReady = store({
  ready: false,
  setReady(status) {
    this.ready = status;
  },
  isReady() {
    return this.ready;
  }
});
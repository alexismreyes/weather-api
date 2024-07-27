import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

Object.defineProperty(import.meta, 'env', {
  value: {
    VITE_API_KEY: 'f392c4a1dd6c4c598dc23429242707',
    VITE_API_URL: 'http://api.weatherapi.com/v1/forecast.json'
  }
});

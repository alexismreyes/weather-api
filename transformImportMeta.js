export default {
    process(src) {
      return {
        code: src.replace(
          /import\.meta\.env/g,
          JSON.stringify({
            VITE_API_KEY: 'f392c4a1dd6c4c598dc23429242707',
            VITE_API_URL: 'http://api.weatherapi.com/v1/forecast.json'
          })
        )
      };
    }
  };
  
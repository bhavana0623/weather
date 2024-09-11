async function fetchData() {
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '56844151a6mshdf2bab6d900d5a8p163448jsn3e6cc74b2538',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  
  fetchData(); // Call the async function to initiate the data fetching process
  
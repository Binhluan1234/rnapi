
const getDataApi = async (page = 1) => {
  try {
    let response = await fetch('https://api.dribbble.com/v1/shots?page=' + page, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer 11857f1e554faa7d640dc7704b31712b777aed6ac191ece39f272981609f3cf3',
      }
    });
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {

  }
}
export default getDataApi;
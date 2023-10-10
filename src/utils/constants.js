export const options = {
    method: 'GET',
    url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
    params: {
      bl_lat: '34.539391',
      bl_lng: '26.601863',
      tr_lat: '42.176655',
      tr_lng: '45.718073',
      limit: '300'
    },
    headers: {
      'X-RapidAPI-Key': 'c4d2c164ffmsh510cbdef570ef2dp181b1fjsn87198d572be6',
      'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
    }
  };
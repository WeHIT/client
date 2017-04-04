import urlMap from '@url';

export function fetchData(data) {
  return new Promise((resolve, reject) => {
    fetch(urlMap.api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6MTEzMDMxMDEyOCwiaWF0IjoxNDkxMjIyNDIyfQ.C0qnB-_tBWyGxeww-6W1BzBjHSHw_peePqgAJhnB9WY',
      },
      body: JSON.stringify(data),
      })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        return resolve(res.data.data);
      });
  })
}

const url =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
const data = { name: 'my new Game' };

// Create a request object to make HTTP request from browser
async function postData() {
  const request = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return request.json();
}

export default postData;

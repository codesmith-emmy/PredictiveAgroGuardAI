const TOKEN_URL = 'https://iam.cloud.ibm.com/identity/token';
let token = null;
let tokenExpiry = null;
async function fetchNewToken() {
    const response = await fetch(TOKEN_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=${process.env.NEXT_PUBLIC_IBM_API_KEY}`
    });
    const data = await response.json();
    token = data.access_token;
    tokenExpiry = Date.now() + data.expires_in * 1000; // expires_in is in seconds
}

async function getAccessToken() {
    if (!token || Date.now() > tokenExpiry) {
        await fetchNewToken();
    }
    return token;
}

export { getAccessToken };

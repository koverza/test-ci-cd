export async function handler(event, context) {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    };

    return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
            message: 'Привет от Netlify Functions!',
            method: event.httpMethod,
            query: event.queryStringParameters
        })
    };
}

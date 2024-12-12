// Import the HTTP module
const http = require('http');
const url = require('url');

// Define the server port
const PORT = 8081;

// Create the server
const server = http.createServer((req, res) => {
    // Log the HTTP request
    console.log(`${req.method} ${req.url}`);

    // Parse query parameters
    const queryParams = url.parse(req.url, true).query;
    console.log('Query Parameters:', queryParams);
    // Set the response headers
    res.writeHead(200, { 'Content-Type': 'application/json' });

    // Define the JSON response
    const response = {
        "location": "Nagpur",
        "temperature": "14.1",
        "humidity": "88",
        "wind_speed": "8.3",
    };

    // Send the JSON response
    res.end(JSON.stringify(response));
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

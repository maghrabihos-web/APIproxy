# An API proxy to validate phone number using https://numverify.com/ API

## Getting Started

1. Clone this repository.
2. Run `npm install` to install all dependencies.
3. Set the Access-Control-Allow-Origin header to the name of the domain you will be querying the proxy server from by editing line 15 of `server.js`:
```
app.use(cors({ origin: "http://yourdomain.com" }));
```
4. Rename the ENVFile.txt to .env file
5. Start the server by running `npm start`
6. Open this link using (ctrl + click) http://localhost:3400/

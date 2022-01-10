const http = require('http');
const PORT = 8080;

const handleRequest = (req, res) => {
    res.end(`It works!`)
}


const server = http.createServer(handleRequest);


server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})
const express = require('express');

const server = express();

server.get('/',(req, res) => {
    res.send("Hello Express");
});
    
server.listen(3000, () => {
    console.log('server is running....');
});


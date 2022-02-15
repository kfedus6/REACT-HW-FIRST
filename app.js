const http = require('http');
const fs = require('fs');

const PORT = 3000;

http.createServer((req, res) => {
   let filePath = 'index.html';
   if (req.url !== '/') {
      filePath = req.url.substr(1);
   }
   fs.readFile(filePath, (error, data) => {
      if (error) {
         res.statusCode = 404;
         res.end('Serve not found');
      } else {
         res.end(data);
      }
   })
}).listen(PORT, () => {
   console.log(`SERVER START ON PORT ${PORT}`)
})
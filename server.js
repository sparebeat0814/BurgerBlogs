const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
const cors = require('cors');

app.use(express.static(__dirname + '/dist/'));
app.get(/.*/, function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
})
app.listen(port);

app.use(cors({
  origin: '*'
}));

// app.get('/', (req, res) => {
//   res.send('CORS solved')
// })

// app.use((req, res, next) => {
//   const allowedOrigins = ['http://localhost:5000/blog'];
//   const origin = req.headers.origin;
//   if (allowedOrigins.includes(origin)) {
//     res.setHeader('Access-Control-Allow-Origin', origin);
//   }
//   return next();
// });

// res.header('Access-Control-Allow-Methods', 'GET, POST');

console.log("server started");
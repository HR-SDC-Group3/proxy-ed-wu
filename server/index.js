var newrelic = require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const proxy = require('http-proxy-middleware')
const morgan = require('morgan');
 
const app = express();

app.use('/restaurants/:id/', express.static(`${__dirname}/../client/dist/`));
app.use(bodyParser());
app.use(morgan('tiny'));

// app.use('/api/reservations/restaurantID=:restaurantID&date=:date', proxy({ target: 'http://54.183.92.72:3002', changeOrigin: true }));
// app.use('/api/reservations/', proxy({ target: 'http://54.183.92.72:3002', changeOrigin: true }));
// app.use('/api/restaurants/:id/reviews', proxy({ target: 'http://54.183.92.72:3004', changeOrigin: true }));
// // app.use('/api/restaurants/:id/menu', proxy({ target: 'http://ec2-13-57-40-25.us-west-1.compute.amazonaws.com', changeOrigin: true }));
// app.use('/api/restaurants/:id/photos', proxy({ target: 'http://ec2-18-222-226-95.us-east-2.compute.amazonaws.com', changeOrigin: true }));

app.use('/api/restaurants/:id/menu', proxy({ target: 'http://localhost:3001', changeOrigin: true }));

const port = 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
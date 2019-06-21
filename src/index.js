const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
// import cookieParser 
const app = express();


mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.createConnection("mongodb://localhost/checkpoint2");

app.get('/', (req, res) => {
  return res.send( `Hello World`)
})

app.use(express.json())
app.use(cookieParser())
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});

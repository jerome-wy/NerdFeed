const express = require('express');
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001;
const db = require('./index');
const routes = require('../routes/index');
const env = require('dotenv').config();

// require() imports and middleware here ^ ///////

const app = express();


// app.use() middleware here ^ ///////////////////
app.use('/', routes);
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('This is from db/server.js')
})
// app.use('/posts', routes);
// app.use('/posts/:dates', routes);
// app.use('/posts/:name', routes);
// app.use('/posts/:year', routes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

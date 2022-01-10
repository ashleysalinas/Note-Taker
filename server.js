const express = require('express')
const PORT = process.env.PORT || 8080;

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

const apiRoutes = require('./routes/apiRoutes')
app.use('/api', apiRoutes);
//always put apiRoutes above html routes - learned this the hard way
require('./routes/htmlRoutes')(app);

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });
const express = require('express');
const cors = require('cors');
const hbs = require('hbs');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: './config/config.env' });

hbs.registerHelper("prettifyDate", function(timestamp) {
    const options = {year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(timestamp*1000).toLocaleDateString('en-GB', options);
});

hbs.registerHelper("isNotNull", function(value) {
    return value !== null;
});

const app = express();

//Middleware
app.use(cors());
app.set('view engine', 'hbs');
app.set("views", __dirname +"/views/layouts/");
hbs.registerPartials(__dirname+ "/views/partials/");

app.use(express.static(path.join(__dirname, '/public')));

app.use('/', require('./routes/index'));
app.use('/api/v1/team', require('./routes/team'));

const PORT = process.env.PORT || 4567;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

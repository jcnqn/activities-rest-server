const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());

app.use(express.json());

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server on port ${process.env.PORT || 3000}`);
});

app.use('/api/activities', require('./routes/activities.route'));

module.exports = {
    app,
};
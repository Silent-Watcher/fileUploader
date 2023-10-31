const express = require('express');
const app = express();
require('./config/env.config');

const port = process.env.PORT;

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

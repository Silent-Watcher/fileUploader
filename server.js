const express = require('express');
const { join } = require('path');

const app = express();
require('./config/env.config');

const port = process.env.PORT;

app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));
app.use(express.static('public'));

app.use((req, res, next) => {
	res.locals = { title: 'file uploader' };
	next();
});

app.get('/', (req, res) => {
	res.status(200).render('index');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

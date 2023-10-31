const express = require('express');
const { join } = require('path');
const fileUploader = require('./middlewares/fileUploader.middleware');

const app = express();
require('./config/env.config');
require('./config/mongoose.config');

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

app.get('/uploads', fileUploader.single('image'), (req, res) => {
	res.status(200).json(req.file); // req.file.path
	
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

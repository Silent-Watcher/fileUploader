const express = require('express');
const { join } = require('path');
const fileUploader = require('./middlewares/fileUploader.middleware');
const imageModel = require('./models/image.model');

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

app.get('/uploads', fileUploader.single('image'), async (req, res) => {
	let path = req.file.path;
	console.log('path: ', path);
	let result = await imageModel.create({path});
	res.send(result);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

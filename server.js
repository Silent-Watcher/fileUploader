const express = require('express');
const { join } = require('path');
const fileUploader = require('./middlewares/fileUploader.middleware');
const imageModel = require('./models/image.model');
const errorHandler = require('./middlewares/errorHandler.middleware');

const app = express();
require('./config/env.config');
require('./config/mongoose.config');

const port = process.env.PORT;

app.use(
	express.json(),
	express.urlencoded({ extended: true }),
	express.static('public'),
	(req, res, next) => {
		res.locals = { title: 'file uploader' };
		next();
	},
);

app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));

app.get('/', (req, res) => {
	res.status(200).render('index');
});

app.post('/uploads', fileUploader.single('image'), async (req, res, next) => {
	try {
		let path = req.file.path;
		let result = await imageModel.create({ path });
		res.status(201).send(result);
	} catch (error) {
		next(error);
	}
});

app.use(errorHandler);

const server = app.listen(port, () =>
	console.log(`Example app listening on port ${port}!`),
);

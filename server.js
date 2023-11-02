const express = require('express');
const { join } = require('path');
const serveFavicon = require('serve-favicon');
const expressEjsLayouts = require('express-ejs-layouts');

const errorHandler = require('./middlewares/errorHandler.middleware');
const notFoundError = require('./middlewares/notFoundError.middleware');
const router = require('./routes/router');

const app = express();
require('./config/env.config');
require('./config/mongoose.config');

const port = process.env.PORT;
const LAYOUT_PATH = join(__dirname, 'views', 'layout', 'layout.ejs');

app.use(
	express.json(),
	express.urlencoded({ extended: true }),
	expressEjsLayouts,
	express.static('public'),
	serveFavicon('public/img/favicon.ico'),
	(req, res, next) => {
		res.locals = { title: 'file uploader' };
		next();
	},
);

app.set('layout', LAYOUT_PATH);
app.set('view engine', 'ejs');
app.set('views', [
	join(__dirname, 'views', 'pages'),
	join(__dirname, 'views', 'errors'),
]);

app.use(router);

app.use(notFoundError);
app.use(errorHandler);

app.listen(port, () =>
	console.log(
		`Example app listening on port ${port}! \n http://localhost:${port}`,
	),
);

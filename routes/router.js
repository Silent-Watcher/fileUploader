'use strict';

const { Router } = require('express');
const fileUploader = require('../middlewares/fileUploader.middleware');
const handleIndex = require('../controllers/index.controller');
const uploadFile = require('../controllers/uploads.controller');
const imageRouter = require('./images.routes');

const router = Router();

router.use('/images', imageRouter);

router.get('/', handleIndex);

router.post('/uploads', fileUploader.single('image'), uploadFile);

module.exports = router;

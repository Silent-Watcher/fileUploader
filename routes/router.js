'use strict';

const { Router } = require('express');
const fileUploader = require('../middlewares/fileUploader.middleware');
const handleIndex = require('../controllers/index.controller');
const uploadFile = require('../controllers/uploads.controller');

const router = Router();

router.get('/', handleIndex);

router.post('/uploads', fileUploader.single('image'), uploadFile);

module.exports = router;

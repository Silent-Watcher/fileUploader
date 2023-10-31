'use strict';

const { Schema, model } = require('mongoose');

const imageSchema = new Schema(
	{
		path: { type: String, required: true },
	},
	{ timestamps: true },
);

const imageModel = model('image', imageSchema);

module.exports = imageModel;

const Joi = require("joi");
const mongoose = require("mongoose");
const {categorySchema} = require('../_Models_/categoriesModel');

const Course = mongoose.model('Course', new mongoose.Schema({
  title: { type: String, required: true, minlength: 3, maxlength: 255, trim: true },
  category: {type: categorySchema, required: true},
  creator: { type: String, required: true },
  rating: { type: Number, required: true },
}));


const schema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  categoryId: Joi.string().required(),
  creator: Joi.string().min(3).required(),
  rating: Joi.number().min(0).max(5).required(),
});

exports.Course = Course;
exports.schema = schema;

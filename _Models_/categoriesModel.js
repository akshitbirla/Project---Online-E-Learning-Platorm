const Joi = require("joi");
const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 30 },
});

const Category = mongoose.model("Category", categorySchema);

const schema = Joi.object({
  name: Joi.string().min(3).required(),
});

exports.Category = Category;
exports.schema = schema;
exports.categorySchema = categorySchema;
const express = require("express");
const router = express.Router();
const { Category, schema } = require("../_Models_/categoriesModel");

router.get("/", async (req, res) => {
  let categories = await Category.find();
  res.send(categories);
});
router.post("/", async (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const category = new Category({
    name: req.body.name,
  });
  await category.save();
  res.send(category);
});

router.put("/:id", async (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const category = await Category.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },
    { new: true }
  );
  if (!category)
    return res.status(404).send("Category with given ID was not found");

  res.send(category);
});

router.delete("/:id", async (req, res) => {
  const category = await Category.findByIdAndRemove(req.params.id);
  if (!category)
    return res.status(404).send("Category with given ID was not found");

  res.send(category);
});

router.get("/:id", async (req, res) => {
  const category = await Category.findById(req.params.id);
  if (!category)
    return res.status(404).send("The genre with given ID was not found");
  res.send(category);
});

module.exports = router;

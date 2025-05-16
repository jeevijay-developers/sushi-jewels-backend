const productquery = require("../models/ProductQuery");
const Query = require("../models/Query");

const submitQuery = async (req, res) => {

    if (!req.body.fullName || !req.body.phone || !req.body.jewelleryType || !req.body.budget || !req.body.message) {
        return res.status(400).send({ message: "All fields are required." });
    }
    try {
        const newQuery = new Query({
            fullName: req.body.fullName,
            phone: req.body.phone,
            jewelleryType: req.body.jewelleryType,
            budget: req.body.budget,
            message: req.body.message,
        });
        await newQuery.save();
        return res.status(200).json(newQuery);
    } catch (err) {
        return res.status(500).send({
            message: err.message,
        });
    }
}

const getQuery = async(req, res) => {
    try {
        const page = Math.max(1, parseInt(req.query.page) || 1);
        const limit = Math.max(1, parseInt(req.query.limit) || 10);
        const skip = (page - 1) * limit;
        const totalQueries = await Query.countDocuments();
        const queries = await Query.find()
            .sort({createdAt: -1})
            .skip(skip)
            .limit(limit);
        return res.status(200).json({
            totalQueries,
            currentPage: page,
            totalPages: Math.ceil(totalQueries / limit),
            queries
        });
    } catch (err) {
        return res.status(500).send({
            message: err.message,
        });
    }
}
const getProductQuery = async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.max(1, parseInt(req.query.limit) || 10);
    const skip = (page - 1) * limit;
    const totalQueries = await ProductQuery.countDocuments();
    const queries = await ProductQuery.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);
    return res.status(200).json({
      totalQueries,
      currentPage: page,
      totalPages: Math.ceil(totalQueries / limit),
      queries,
    });
  } catch (err) {
    return res.status(500).send({
      message: err.message,
    });
  }
};
const submitProductQuery = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.phone ||
    !req.body.email ||
    !req.body.product ||
    !req.body.message
  ) {
    return res.status(400).send({ message: "All fields are required." });
  }
  try {
    const newQuery = new productquery({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      product: req.body.product,
      message: req.body.message,
    });
    await newQuery.save();
    return res.status(200).json(newQuery);
  } catch (err) {
    return res.status(500).send({
      message: err.message,
    });
  }
};
module.exports = { submitQuery, getQuery, getProductQuery, submitProductQuery };
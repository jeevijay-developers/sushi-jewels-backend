const express = require("express");
const router = express.Router();
const queryController = require("../controller/queryFormController");

router.post("/submitQuery", queryController.submitQuery);

router.get("/getQuery", queryController.getQuery);
router.post("/submitProductQuery", queryController.submitProductQuery);
router.get("/getProductQuery", queryController.getProductQuery);

module.exports = router;
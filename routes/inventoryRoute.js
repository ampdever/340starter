const express = require("express")
const router = new express.Router()
const invController = require("../controllers/invController")

// Route to build inventory by classification view
router.get("/type/:classificationId", invController.buildByClassificationId);
// Route to get one specific item
router.get("/detail/:invID", invController.buildBySpecificItem);

module.exports = router;
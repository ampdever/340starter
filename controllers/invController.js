const invModel = require("../models/inventory-model")
const utilities = require("../utilities/")

const invCont = {}

/* ***************************
 *  Build inventory by classification view
 * ************************** */
invCont.buildByClassificationId = async function (req, res, next) {
  const classification_id = req.params.classificationId
  const data = await invModel.getInventoryByClassificationId(classification_id)
  const grid = await utilities.buildClassificationGrid(data)
  let nav = await utilities.getNav()
  const className = data[0].classification_name
  res.render("./inventory/classification", {
    title: className + " vehicles",
    nav,
    grid,
  })
}

/* ***************************
 *  Build specific inventory item view
 * ************************** */
invCont.buildBySpecificItem = async function (req, res, next) {
  const invID = req.params.invID
  console.log(invID)
  const data = await invModel.getSpecificItem(invID)
  console.log(data)
  const grid = await utilities.buildVehicleDetail(data)
  let nav = await utilities.getNav()
  res.render("./inventory/inventoryDetail", {
    title: "vehicles",
    nav,
    grid,
  })
}


module.exports = invCont
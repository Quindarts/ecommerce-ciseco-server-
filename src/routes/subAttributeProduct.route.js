const express = require('express')
const router = express.Router()

const { ROUTE } = require('../utils/Routes')

//[ROUTE GET] get-by-id
router.get(ROUTE.ATTRIBUTE_PRODUCT_BY_ID, getAttributeProductById)

//[ROUTE GET] /get-all
router.get('/', getAllAttributeProductByParams)

//[ROUTE POST]
router.post('/', createAttributeProduct)

//[ROUTE UPDATE]
router.put(ROUTE.ATTRIBUTE_PRODUCT_BY_ID, updateAttributeProduct)

//[ROUTE DELETE]
router.delete(ROUTE.ATTRIBUTE_PRODUCT_BY_ID, deleteAttributeProduct)

module.exports = router

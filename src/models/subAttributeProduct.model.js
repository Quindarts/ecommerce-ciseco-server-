const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')

const subAttributeProduct = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
    attributeProduct: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AttributeProduct',
    },
})

module.exports = mongoose.model('SubAttributeProduct', subAttributeProduct)

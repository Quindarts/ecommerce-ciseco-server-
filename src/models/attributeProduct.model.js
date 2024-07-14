const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')

const attributeProduct = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        uppercase: true,
    },
    name: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('AttributeProduct', attributeProduct)

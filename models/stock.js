const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create user schema & model
const StockSchema = new Schema({
    name:{
        type:String,
        required: [true, 'Name field is required']
    },
    age: {
        type: Number
    },
    available: {
        type: Boolean,
        default:false
    }
}, {collection:'stock'});

const Stock = mongoose.model('stock', StockSchema);

module.exports = Stock;
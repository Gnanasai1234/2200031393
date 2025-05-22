const mongoose = require("mongoose")
const calculatorSchema = new mongoose.Schema({
    numbers:{
      type: Array,
      required: true,
    }
  });


const schema = mongoose.model('Calculator', calculatorSchema);

module.exports = schema;
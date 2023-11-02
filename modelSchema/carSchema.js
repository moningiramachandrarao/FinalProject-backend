const mongoose=require("mongoose");
const carSchema = new mongoose.Schema({
    "img1": {type:String},
    "img2": {type:String},
    "img3":{type: String},
    "img4": {type:String},
    "img5": {type:String},
    "img6": {type:String},
    "price":{type: Number},
    "year": {type:Number},
    "model": {type:String},
    "carName": {type:String}
}, {
    "collection": "car"
})

module.exports = mongoose.model("carSchema", carSchema);
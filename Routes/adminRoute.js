const express = require("express");
const adminRoute = express.Router();
const adminSchema = require("../modelSchema/adminSchema");
const mongoose = require('mongoose');
adminRoute.get("/",(req,res)=>{
    carSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

adminRoute.get('/:id', (req, res) => {
    carSchema.findById(mongoose.Types.ObjectId(req.params.id), (err, data) => {
        if(err) return err;
        else res.json(data)
    })
})
module.exports = adminRoute;

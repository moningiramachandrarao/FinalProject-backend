const express = require("express");
const useRoute = express.Router();
const carSchema = require("../modelSchema/carSchema");
const mongoose = require('mongoose');
useRoute.get("/",(req,res)=>{
    carSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
module.exports = useRoute;
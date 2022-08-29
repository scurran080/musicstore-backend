const express = require("express");
const router = express.Router();
const pool = require("../db");
 /**
  * Contains all api endpoints for admin actions.
  * Including CRUD operations on all listings, and 
  * interfacing with the firebase storage
  */

router.post("/createlisting", async (req, res) => {
    try{
        const { name, description, price, category, subcategory, imageUrl } = req.body;
    }catch(err){
        console.error(err.Message);
    }
});

router.get("/getalllistings", async (req, res) => {
    try{

    }catch(err){
        console.error(err.Message);
    }
});

router.delete("/deletelisting", async (req, res) => {
    try{
        const { id } = req.id;
    }catch(err){
        console.error(err.Message);
    }
});

router.put("/updatelisting", async (req, res) => {
    try{
        const { id, name, description, price, category, subcategory } = req.body;
    }catch(err){
        console.error(err.Message);
    }
});

module.exports = router;
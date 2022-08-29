const express = require("express");
const router = express.Router();
const pool = require("../db");

/**
 * Contains all api endpoints for the customer facing side
 * of the application.
 */

router.post("/addlisting", async (req, res) => {
  try {
    const { name, description, price, category, subcategory } = req.body;
    // TODO
    // Take product details and send them through a stored procedure in the database,
    // and return the generated id.
  } catch (err) {
    console.error(err.Message);
    res.status(500).send("Server Error");
  }
});

router.get("/getalllistings", async (req, res) => {
  try {
    // TODO
    // Call a stored procedure that returns all listings currently in database.
  } catch (err) {
    console.error(err.Message);
  }
});

router.get("/getbyid", async (req, res) => {
    try{
        const { id } = req.id;
        // TODO
        // Called stored procedure with the supplied id and get the relevant listing data.
    }catch(err){
        console.error(err.Message);
    }
});

router.get("/getbycategory", async (req, res) => {
    try{
        const { category } = req.category;
        // TODO
        // Call stored procedure to get all postings with the matching category.
    }catch(err){
        console.error(err.Message);
    }
});

router.get("/getbysubcategory", async (req, res) => {
    try{
        const { category, subcategory } = req.body;
        // TODO
        // Call stored procedure and get the relevant postings where the category and subcat are the same
        // as those supplied.
    }catch(err){
        console.error(err.Message);
    }
});

module.exports = router;

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contactModel = require("./Models/contact");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
    "mongodb+srv://nabeelsaji1:511UXWpFxl9g2GNM@cluster0.h4tfc.mongodb.net/imtiaz"
  );
  app.get("/get", async (req, res) => {
    try {
      const data = await contactModel.find();
      return res.status(200).json({
        data,
        message: "Succesfully",
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  });


  app.post("/add", async (req, res) => {  
    try {
      const { Name, PhoneNo, Address } = req.body;
  
      const data = await contactModel.create({ Name, PhoneNo, Address });
  
      return res.status(200).json({
        data,
        message: "Created Succesfully",
      });

    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  });
   
  app.delete('/delete/:id',(req,res)=>{
    const {id}=req.params;
    contactModel.findByIdAndDelete({_id:id})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
});

app.listen(3001, () => {
    console.log("server is runing")
})
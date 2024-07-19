const mongoose=require('mongoose')


const contactSchema = new mongoose.Schema({
    Name:String,
    PhoneNo:String,
    Address:String
})

const contactModel=mongoose.model("contact",contactSchema)

module.exports=contactModel;
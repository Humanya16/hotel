const mongoose=require("mongoose");

const RoomSchema=new mongoose.Schema({
roomNo:Number,
type:String,
price:Number
});

module.exports=
mongoose.model("Room",RoomSchema);
const mongoose = require("mongoose");

const URL =
  "mongodb+srv://mern_admin:eVYjAGzE1FlDaxOM@cluster0.vhswvv5.mongodb.net/URL_SHORTENER?retryWrites=true&w=majority";


  const DBconnect = async () => {
    try {
      await mongoose.connect(URL).then(() => {
        console.log("DB connected successfully");
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  module.exports = DBconnect;
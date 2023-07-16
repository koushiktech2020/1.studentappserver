const mongoose = require("mongoose");

const mongouri =
  "mongodb://uev6oqtayvkd12ywvb29:wzt7WchM0NQnsNb6OcM4@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/bf4xl5nb5dyze5f?replicaSet=rs0";

exports.dbconnect = async () => {
  try {
    await mongoose.connect(mongouri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

//Testing Database connection for local Database
//const db ="mongodb://localhost:27017/foodDB";
//connecting to Cloud clever Database
// const db="mongodb://ukpgq4nrdysvvc8izhd7:Kza34Qv5Z8unoXtNDM7N@b9gg12vuhityidl-mongodb.services.clever-cloud.com:27017/b9gg12vuhityidl";

// mongoose.connect(db,(err)=>{
//     if(err) throw err;
//     else
//     console.log('Successfully connected to MongoDB');
// });

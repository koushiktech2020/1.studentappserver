const mongoose = require("mongoose");

// const mongouri = "mongodb://localhost:27017/foodDB";

const mongouri =
  "mongodb://uev6oqtayvkd12ywvb29:wzt7WchM0NQnsNb6OcM4@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/bf4xl5nb5dyze5f?replicaSet=rs0";

//Testing Database connection for local Database
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

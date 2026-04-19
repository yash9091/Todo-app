const app = require("./src/app");

const dotenv = require("dotenv");
const PORT = process.env.PORT || 8000;

const connectDB = require("./src/config/db");
dotenv.config();
console.log("ENV CHECK:", process.env.MONGO_URI);
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port:${PORT}`);
    });
  })
  .catch((err) => console.log("MongoDb connection failed !!!"));

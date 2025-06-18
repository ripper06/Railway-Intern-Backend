const {connectDB} = require('./config')

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.json('hello')
})

//Route Imports
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/appointments", require("./routes/appointmentRoutes"));
app.use("/api/tours", require("./routes/tourRoutes"));

const PORT = process.env.PORT || 5050 ;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on port ${PORT}`);
});

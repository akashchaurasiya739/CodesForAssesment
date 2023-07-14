
const express = require("express");
const mongoose =require("mongoose");
const cors =require("cors");
const User =require("./routes/UserRoute");
const Admin =require("./routes/AdminRoute");
const app =express();
const port = 5000;
app.use(cors());
app.use(express.json());


mongoose.connect("mongodb+srv://akashchaurasiya739:ME6Q4TWJckpxgvV9@cluster0.8urseef.mongodb.net/demoproject?retryWrites=true&w=majority", 
{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=> console.log('Database Connected'))
.catch((err)=>console.log("Database connection error:",err));

///////API////////
app.use('/api/user',User);
app.use('api/admin',Admin);

app.listen(port,()=> {
    console.log(`Example app listening on port...${port}`)
});


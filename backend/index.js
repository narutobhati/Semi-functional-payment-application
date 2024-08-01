const express = require("express");
const Mainrouter=require('./routes/index')
const cors=require("cors")
const app=express();

const corsOptions = {
    origin: 'https://semi-functional-payment-application-7z3xe1xcy.vercel.app', 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  };
  
  app.use(cors(corsOptions));
  app.options('*', cors(corsOptions)); 
app.use(express.json())
app.use("/api/v1",Mainrouter)



app.listen(3000)
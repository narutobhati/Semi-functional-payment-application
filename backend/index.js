const express = require("express");
const Mainrouter=require('./routes/index')
const cors=require("cors")
const app=express();
const corsOptions = {
  origin: 'https://your-frontend-domain.vercel.app', // Replace with your actual frontend domain
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};
app.use(cors(corsOptions))
app.options('*', cors(corsOptions))
app.use(express.json())
app.use("/api/v1",Mainrouter)



app.listen(3000)

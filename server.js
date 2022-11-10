const express=require('express');
const ProdRoutes=require('./src/products/routes');
const app=express();
const port=3000;
app.use(express.json());


app.get('/',(req,res)=>{
    res.send("WELCOME GODMWALE")
})
app.use("/api/v1/products",ProdRoutes)
app.listen(port,()=>{
    console.log(`app listening ${port}`)
})
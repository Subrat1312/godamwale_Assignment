const pool=require('../../db');
const queries=require('./queries');
const getProducts=(req,res)=>{
    pool.query(queries.getProducts,(err,results)=>{
        if(err){
            throw err;
        }
        res.status(200).json(results.rows);
        //console.log(results.rows)
    })
};
const getProductsbyid=(req,res)=>{
    const id=parseInt(req.params.id);
    pool.query(queries.getProductsbyid,[id],(err,results)=>{
        if(err){
            throw err;
        }
        res.status(200).json(results.rows);
        console.log(results.rows) 
    })
}
const addproducts=(req,res)=>{
    const {id,name,sku,brand,category,manfacturer}=req.body;
    pool.query(queries.checkskuexists,[sku],(err,results)=>{
        // if(results.rows.length){
        //     res.send("sku already exists");
        // }
        pool.query(queries.addproducts,[id,name,sku,brand,category,manfacturer],(err,results)=>{
            if(err){
                throw err;
            }
            res.status(201).send("products added sucessfully");
        })
    })
}
const removeproducts=(req,res)=>{
    const id=parseInt(req.params.id); 
    pool.query(queries.removeproducts,[id],(err,results)=>{
        if(err){
            throw err;
        }
        res.status(200).send("products removed sucessfully");
    })
}
const updateproducts=(req,res)=>{
    const id=parseInt(req.params.id);
    const {name}=req.body;
    pool.query(queries.updateproducts,[name,id],(err,results)=>{
        if(err){
            throw err;
        }
        res.status(200).send("products updated sucessfully");
    })  
}
module.exports={
    getProducts,
    getProductsbyid, 
    addproducts,
    removeproducts,
    updateproducts,
};
const getProducts="SELECT * FROM products";
const getProductsbyid="SELECT * FROM products where id=$1";
const checkskuexists="SELECT p FROM products where p.sku=$1";
const addproducts=
"INSERT INTO products (id,name,sku,brand,category,manfacturer) VALUES ($1,$2,$3,$4,$5,$6)";
const removeproducts="DELETE FROM products WHERE id=$1"
const updateproducts="UPDATE products SET name=$1 where id=$2"
module.exports={
    getProducts, 
    getProductsbyid,
    checkskuexists,
   addproducts,
   removeproducts,
   updateproducts
};
const {Router}=require('express');
const controller=require('./controller');
const router=Router();
router.get('/',controller.getProducts);
router.post('/',controller.addproducts);
router.get('/:id',controller.getProductsbyid);
router.put('/:id',controller.updateproducts);
router.delete('/:id',controller.removeproducts);

module.exports=router;
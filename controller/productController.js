const store = require('../store');

const getAllProducts = (req, res, next) => {
  console.log(req.query);
  
  let products = store.products;
  const { manufacturer } = req.query; 

  if (manufacturer) {
    products = products.filter(product => product.manufacturer === manufacturer)
  }
  res.status(200).json(products);
}

const getParticularProduct=(req,res,next)=>{
  console.log(req.params);

  let products = store.products
  const productId=parseInt(req.params.id)
  let product=null
  for (let i = 0; i < products.length; i++) {
    if(products[i].id===productId){
      product=products[i]
      break;
    }
  }
  res.status(200).json({data:product})
}

const postProducts=(req,res,next)=>{
  console.log(req.body); 
  let products = store.products

  products.push(req.body)
  res.status(200).json(products)
}

const updateProduct=(req,res,next)=>{
  console.log(req.params);
  const prodId=parseInt(req.params.id)
  let products = store.products

  for (let i = 0; i < products.length; i++) {
    if(products[i].id===prodId) {
      products[i]=req.body
      products[i].id=prodId
    }
  }
  res.status(200).json(products)
}

module.exports = {getAllProducts,getParticularProduct,postProducts,updateProduct};

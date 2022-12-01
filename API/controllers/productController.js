productarray =[
    {
        'product_name':'Jeans',
        'price':500,
        'description':'Made from pure cotton',
        'quantity':20,
        'image':'https://cdn.shopify.com/s/files/1/0608/7874/9892/products/51BwBzrPk8-YTKN01BB008MidBlue_1_540x.jpg?v=1666693724'
    },
]

function addProduct(req,res){
    productarray.push(req.body)
    res.json({
        'status':200,
        'success':true,
        'message':'Product Inserted',
        'data':req.body
    })
}

function getProduct(req,res){
    res.json({
        'status':200,
        'success':true,
        'message':'Product loaded',
        'data':productarray
    })    
}

module.exports = {
    addProduct,
    getProduct
}
productarray=[
    {
        'product_name':'shirt',
        'price': 500,
        'quantity':2,
        'username':'ashish',
        'shipping_contact':'7250888739',
        'shipping_address':'jalandhar',
        'tax':18+'%',
        'grand_total': '', 

    },
]

function add_order(req,res){
    productarray.push(req.body)
    res.json(
        {
            'status':200,
            'success':true,
            'message':'Product Inserted',
            'Product_detail':req.body
        },
    )
}
function show_order(req,res){
    
    res.json(
        {
            'status':200,
            'success':true,
            'message':'Ordered successfully',
            'user_detail':productarray
        },
    )
}

module.exports={
    add_order,
    show_order
}
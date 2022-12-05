orderarray=[]
   function add_order(req,res){
    
    const a =req.body
    // const a=JSON.parse(req.body)
    const total =a.price*a.quantity
    const tax =18/100*(a.price*a.quantity)
    const grand_total=total+tax
    let gt ={
        price:a.price,
        quantity:a.quantity,
        grand_total:grand_total
    }
    orderarray.push(gt)
    res.json({
        'status':200,
        'success':true,
        'message':'Ordered successfully',
        
    })
   }
   function show_order(req,res){
    res.json({
        'status':200,
        'success':true,
        'message':'Order details',
        'data':orderarray
    })
   }
module.exports={
    add_order,
    show_order
}

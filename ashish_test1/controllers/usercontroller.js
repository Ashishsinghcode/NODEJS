registerarray=[
    {
        'user_name':'Ashish',
        'email':'Ashish@gmail.com',
        'shipping_address':'jalandhar',
        'shipping_contact':'7250888739'
    },
]
   function add_user(req,res){
    registerarray.push(req.body)
    res.json({
        'status':200,
        'success':true,
        'message':'USer registered successfully',
        'data':req.body
    })
   }
   function show_user(req,res){
    res.json({
        'status':200,
        'success':true,
        'message':'userloaded',
        'data':registerarray
    })
   }
module.exports={
    add_user,
    show_user
}

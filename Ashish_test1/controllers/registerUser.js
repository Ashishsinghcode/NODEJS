registerarray=[
    {
        'first_name':'Ashish',
        'last_name':'singh',
        'email':'ashish@gmail.com',
        'password':"123456",
        'profile':'Ashishsingh.code',
        'contact':'7250888739',
        'address':'jalandhar',
    },
]
function register_user(req,res){
    registerarray.push(req.body)
    res.json(
        {
            'status':200,
            'success':true,
            'message':'User Inserted',
            'user_detail':req.body
        },
    )
}
function show_user(req,res){
    res.json(
        {
            'status':200,
            'success':true,
            'message':'User fetched successfully',
            'user_detail':registerarray
        },
    )
}
module.exports={
    register_user,
    show_user
}
catagoryarray=[
    {
        'catagory_name':'Kids wear'
    },
    {
        'catagory_name':'winter wear'
    },
]
function addCatagory(req,res){

    catagoryarray.push(req.body)
    res.json({
        'status':200,
        'success':true,
        'message':'Catagory Inserted',
        'data':req.body
    })
}
function listCatagory(req,res){
    res.json({
        'status':200,
        'success':true,
        'message':'Catagory Loaded',
        'data':catagoryarray
    })
}
module.exports={
    addCatagory,
    listCatagory
}
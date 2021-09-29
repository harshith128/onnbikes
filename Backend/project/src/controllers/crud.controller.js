const post = (model) => async (req, res)=>{
    const item = await model.create(req.body)
    //console.log(item);
    return res.status(201).send({item});
}

const get= (model) => async (req, res)=>{
    const item = await model.find();

    return res.status(200).send({item});
}

const getbyid= (model) => async (req, res)=>{
    const item = await model.findById(req.params.id);

    return res.status(200).send({item});
}

const patch= (model) => async (req, res)=>{
    const item = await model.findByIdAndUpdate(req.params.id,req.body,{new:true});

    return res.status(200).send({item})
}

const deletes = (model) => async (req, res)=>{
    const item = await model.findByIdAndDelete(req.params.id);

    return res.status(200).send("Deleted");
}

//repeated 

const getOne = (model)=> async (req,res) =>{
    const item = await model.findById(req.params.id).lean().exec();
    return res.status(200).send({item})
}

const deleteOne = (model)=> async(req,res)=>{
    const item = await model.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send({item});
}




module.exports = {
    post:post,
    get:get,
    getbyid:getbyid,
    patch:patch,
    deletes:deletes,
    getOne:getOne,
    deleteOne:deleteOne
};
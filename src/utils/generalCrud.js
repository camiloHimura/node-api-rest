
const getAll = (model, {arrayFormat}) => async (req, res) => {
    let data = await model.find().exec();
    
    res.send(arrayFormat(data));
}

const create = (model, {format}) => async (req, res) => {
    try{
        let data = await model.create({ ...req.body });
        if(!data){ return res.status(400).end() }

        res.status(201).send({status: "saved", data: format(data)});
    }
    catch(e){ res.status(404).end() }
}

const getById = (model, {format}) => async (req, res) => {
    let id = req.params.id;
    try{
        let data = await model.findOne({_id: id}).exec();
        if(!data){ return res.status(400).end() }

        res.status(200).json(format(data));
    }
    catch(e){ res.status(404).end() }
}

const update = (model, {format}) => async (req, res) => {
    let id = req.params.id;
    try{
        let data = await model.findOneAndUpdate({_id: id}, req.body, {new: true}).exec();
        if(!data){ return res.status(400).end() }

        res.status(201).send({status: "updated", data: format(data)});
    }
    catch(e){ res.status(404).end() }
}

const remove = (model, {format}) => async (req, res) => {
    let id = req.params.id;
    try{
        let data = await model.findOneAndRemove({_id: id}, req.body).exec();
        if(!data){ return res.status(400).end() }

        res.status(200).send({status: "removed", data});
    }
    catch(e){ res.status(404).end() }
}

const defaultFormat = data => data;

module.exports = (model, options) => {
    options = Object.assign({format: defaultFormat, arrayFormat: defaultFormat}, options)

    return {
        getAll: getAll(model, options),
        create: create(model, options),
        getById: getById(model, options),
        update: update(model, options),
        remove: remove(model, options),
    }
}
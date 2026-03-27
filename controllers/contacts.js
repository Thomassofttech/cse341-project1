const mongodb = require('../data/database');

const objectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
const result = await mongodb.getDatabase().collection('contacts').find();
    result.toArray().then((contacts) => {
        res.status(200).json(contacts);
    });
};

const getSingle = async (req, res) => {
    const contactsId = new objectId(req.params.id);
    const result = await mongodb.getDatabase().collection('contacts').find({ _id: contactsId });
    result.toArray().then((contacts) => {
        res.status(200).json(contacts[0]);
    });  
};
    
    module.exports = {
        getAll,
        getSingle
    };

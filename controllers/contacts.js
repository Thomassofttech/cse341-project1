const Contact = require('../model/contact');



const getAll = async (req, res) => {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
  
};

const getSingle = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
    
    module.exports = {
        getAll,
        getSingle
    };

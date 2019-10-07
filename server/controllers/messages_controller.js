let messages = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        const {text, time} = req.body;
        messages.push({id, text, time});
        id++;
        res.status(200).json(messages);
    },
    read: (req, res) => {
       res.status(200).json(messages) 
    },
    update: (req, res) => {
        const {text} = req.body;
        const index = messages.findIndex(val => 
            val.id == req.params.id);

        let message = messages[index]

        messages[index] = {
            id: message.id,
            text: text || message.text,
            time: message.text
            // text: req.params.newText,
            // time: req.query.time !== undefined ? req.query.time : message.time
        };
        res.status(200).json(messages);
    },
    delete: (req, res) => {
        const index = messages.findIndex(val => 
            val.id == req.params.id);
            messages.splice(index, 1);
            res.status(200).json(messages);
    }
}
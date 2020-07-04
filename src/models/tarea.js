const {Schema, model} = require('mongoose');

const tareaSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    typeT: {
        type: String,
        require: true
    },
    urlVideo: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    }
},{
    timestamps: true
});

module.exports = model('tarea', tareaSchema);
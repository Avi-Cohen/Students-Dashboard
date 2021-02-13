const mongoose = require('mongoose')

const infoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    attendance: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('studentsInfo', infoSchema)
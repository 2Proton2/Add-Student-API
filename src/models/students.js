const mongoose = require('mongoose');
const validator = require('validator');

let studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email ID already exist. Please, enter an unique email id."],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email");
            }
        }
    },
    address: {
        type: String,
        required: true
    }
});

const Student = mongoose.model('StudentCollection', studentSchema)
module.exports = Student;
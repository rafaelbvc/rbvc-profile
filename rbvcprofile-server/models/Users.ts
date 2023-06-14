import {mongoose} from "../server"

const usersSchema = new mongoose.Schema(
    {
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: false,
    messages: [{
        type: String,
        default: "Notes"
    }]
    },
    active: {
        type: Boolean,
        default: true
    }
},
{
    timestamps: true,
}
)

exports.module = mongoose.module("Users", usersSchema)
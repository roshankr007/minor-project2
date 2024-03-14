const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        Email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        profileImagePath: {
            type: String,
            default: "",
        },
        wishlist: {
            type:Array,
            default: [],
        },
        yourItems: {
            type: Array,
            default: [],
        },
        leasedItems: {
            type:Array,
            default: [],
        },
        purchasedItems: {
            type:Array,
            default: [],
        }
    },
    { timestamps: true}
)

const User = mongoose ("User",UserSchema)
module.exports = User
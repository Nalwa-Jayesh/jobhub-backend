const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username: {type: String, required: true, unique: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        location: {type: String, required: false},
        isAdmin: {type: Boolean, default: false},
        isAgent: {type: Boolean, default: false},
        skills: {type: Array, default: false},
        profile: {
            type: String, 
            required: true, 
            default: "https://w7.pngwing.com/pngs/546/197/png-transparent-anonym-avatar-default-head-person-unknown-user-user-pictures-icon.png"
        }
    }
);

module.exports = mongoose.model("User", UserSchema);
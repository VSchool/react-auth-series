let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let bcrypt = require("bcrypt");
let salt = bcrypt.genSaltSync(10);

let userSchema = new Schema({
    name: String,
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    }
});

//Note you must use `function` here because
//you are referring to the this of the userSchema
userSchema.pre("save", function (next) {
    this.password = bcrypt.hashSync(this.password, salt)
    next();
});
userSchema.methods.withoutPassword = function () {
    let user = this.toObject();
    delete user.password;
    return user;
};
userSchema.methods.auth = function (passwordAttempt, cb) {
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if (err) {
            console.log(err);
            cb(false);
        } else {
            cb(isMatch);
        }
    });
};

module.exports = mongoose.model("User", userSchema); 
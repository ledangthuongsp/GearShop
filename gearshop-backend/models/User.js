const { Schema, model } = require('mongoose');
const { genSalt, hash, compare } = require('bcryptjs');
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    fullName: {
        type:String,
        required: true
    },
});
// Pre-save hook to hash the password before saving the user
UserSchema.pre('save', async function(next) {
    if (this.isModified('password') || this.isNew) {
        const salt = await genSalt(10);
        this.password = await hash(this.password, salt);
    }
    next();
});

// Method to compare passwords
UserSchema.methods.comparePassword = async function(candidatePassword) {
    return await compare(candidatePassword, this.password);
};
// Export the User model
const User = model('User', UserSchema);

module.exports=User;
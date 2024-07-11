import { Schema, model } from 'mongoose';
import { genSalt, hash, compare } from 'bcryptjs';
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

UserSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await genSalt(10);
    this.password = await hash(this.password, salt);
    next();
});

UserSchema.methods.matchPassword = async function(enteredPassword) {
    return await compare(enteredPassword, this.password);
};

const User = model('User', UserSchema);

export default User;
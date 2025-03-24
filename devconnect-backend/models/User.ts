import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    comparePassword: (password: string) => Promise<boolean>;
}

const UserSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true }
    },

    { timestamps: true }
);

UserSchema.pre<IUser & Document>("save", async function (next) {
    if (!this.isModified("password")) return next();

    // Explicit type assertion
    const plainPassword = this.password as string;

    if (!plainPassword) {
        throw new Error("Password is required before hashing.");
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(plainPassword, salt);

    next();
});


UserSchema.methods.comparePassword = async function (password: string) {
    return bcrypt.compare(password, this.password);
  };
  
  export default mongoose.model<IUser>("User", UserSchema);
import mongoose, { Schema, Document } from 'mongoose';
import bycrypt from 'bcryptjs';

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    comparedPassword: (password: string) => Promise<boolean>;
}

const userSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true }
    },
    
    { timestamps: true }
)
// models/Contact.ts
import mongoose, { Schema, Document, models } from "mongoose";

export interface IContact extends Document {
  name: string;
  email: string;
  phone?: string;
  services: { [key: string]: boolean };
  message: string;
  createdAt: Date;
}

const ContactSchema = new Schema<IContact>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }, // ✅ unique email
    phone: { type: String },
    services: { type: Map, of: Boolean, default: {} },
    message: { type: String },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Contact =
  models.Contact || mongoose.model<IContact>("Contact", ContactSchema);

export default Contact;

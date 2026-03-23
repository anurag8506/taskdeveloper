import mongoose, { Schema, Document } from "mongoose";

export interface IBlog extends Document {
  blogId: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  image: string;
  createdAt: Date;
}

const BlogSchema = new Schema<IBlog>(
  {
    blogId: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    metaTitle: { type: String, required: true },
    metaDescription: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Blog ||
  mongoose.model<IBlog>("Blog", BlogSchema);

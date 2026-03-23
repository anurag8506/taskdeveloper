import mongoose, { Mongoose } from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI || ''

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local")
}


const globalWithMongoose = global as typeof globalThis & {
  mongoose: { conn: Mongoose | null; promise: Promise<Mongoose> | null }
}

if (!globalWithMongoose.mongoose) {
  globalWithMongoose.mongoose = { conn: null, promise: null }
}

const cached = globalWithMongoose.mongoose

export default async function dbConnect() {
  if (cached.conn) return cached.conn

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose)
  }

  try {
    cached.conn = await cached.promise
    console.log('📌 MongoDB Connected!')
    return cached.conn
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error)
    throw new Error('Database connection failed')
  }
}

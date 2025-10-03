// lib/dbConnect.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

if (!uri) {
  throw new Error("❌ Please add your Mongo URI to .env.local");
}

let cached = global._mongoClient;

if (!cached) {
  cached = global._mongoClient = { conn: null, promise: null };
}

export default async function dbConnect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    cached.promise = client.connect().then((client) => {
      return {
        client,
        db: client.db(dbName),
      };
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

// lib/db.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

if (!uri) {
  throw new Error("❌ Please add your Mongo URI to .env.local");
}

let cached = global._mongo;

if (!cached) {
  cached = global._mongo = { conn: null, promise: null };
}

export async function getDb() {
  if (cached.conn) return cached.conn.db;

  if (!cached.promise) {
    cached.promise = MongoClient.connect(uri).then((client) => {
      return {
        client,
        db: client.db(dbName),
      };
    });
  }

  cached.conn = await cached.promise;
  return cached.conn.db;
}

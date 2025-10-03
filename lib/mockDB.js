// lib/mockDB.js
import { ObjectId } from "mongodb";
import { getDb } from "./db"; // relative import to lib/db.js

const COLL = "users";

export async function getUsers() {
  const db = await getDb();
  return db.collection(COLL).find().toArray();
}

export async function addUser(userDoc) {
  const db = await getDb();
  return db.collection(COLL).insertOne(userDoc);
}

export async function findUserByEmail(email) {
  if (!email) return null;
  const db = await getDb();
  return db.collection(COLL).findOne({ email });
}

export async function findUserByUsername(username) {
  if (!username) return null;
  const db = await getDb();
  return db.collection(COLL).findOne({ username });
}

export async function findUserByPhone(phone) {
  if (!phone) return null;
  const db = await getDb();
  return db.collection(COLL).findOne({ phone });
}

export async function findUserById(id) {
  if (!id) return null;
  const db = await getDb();
  return db.collection(COLL).findOne({ _id: new ObjectId(id) });
}

// models/Dashboard.js
import { ObjectId } from "mongodb";
import { getDb } from "../lib/db";

const COLLECTION = "dashboards";

export async function createEmptyDashboardForUser(userId) {
  const db = await getDb();
  const doc = {
    userId: new ObjectId(userId),
    appointments: [],
    consultations: [],
    payments: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  return db.collection(COLLECTION).insertOne(doc);
}

export async function getDashboardByUserId(userId) {
  const db = await getDb();
  return db.collection(COLLECTION).findOne({ userId: new ObjectId(userId) });
}

export async function updateDashboardByUserId(userId, update) {
  const db = await getDb();
  return db.collection(COLLECTION).updateOne(
    { userId: new ObjectId(userId) },
    { $set: { ...update, updatedAt: new Date() } }
  );
}

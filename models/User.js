// models/User.js
import { ObjectId } from "mongodb";
import { getDb } from "../lib/db";

const COLLECTION = "users";

/**
 * Create a new user with role support.
 * Defaults role to 'patient' if not provided.
 */
export async function createUser(userDoc) {
  const db = await getDb();

  const userWithRole = {
    ...userDoc,
    role: userDoc.role || "patient",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return db.collection(COLLECTION).insertOne(userWithRole);
}

/** 🔍 Find user helpers */
export async function findUserByEmail(email) {
  const db = await getDb();
  return db.collection(COLLECTION).findOne({ email });
}

export async function findUserByPhone(phone) {
  const db = await getDb();
  return db.collection(COLLECTION).findOne({ phone });
}

export async function findUserById(id) {
  const db = await getDb();
  return db.collection(COLLECTION).findOne({ _id: new ObjectId(id) });
}

/** ✏️ Update user by ID */
export async function updateUserById(id, update) {
  const db = await getDb();
  return db.collection(COLLECTION).updateOne(
    { _id: new ObjectId(id) },
    { $set: { ...update, updatedAt: new Date() } }
  );
}

/** 🔑 Find user by password reset token */
export async function findUserByResetToken(token) {
  const db = await getDb();
  return db.collection(COLLECTION).findOne({
    resetPasswordToken: token,
    resetPasswordExpiry: { $gt: Date.now() }, // ensure not expired
  });
}

/** 🧹 Clear reset token after successful password reset */
export async function clearResetPasswordToken(userId) {
  const db = await getDb();
  return db.collection(COLLECTION).updateOne(
    { _id: new ObjectId(userId) },
    {
      $unset: { resetPasswordToken: "", resetPasswordExpiry: "" },
      $set: { updatedAt: new Date() },
    }
  );
}

/** ⚙️ Ensure important database indexes */
export async function ensureUserIndexes() {
  const db = await getDb();

  await db.collection(COLLECTION).createIndex({ email: 1 }, { unique: true, sparse: true });
  await db.collection(COLLECTION).createIndex({ phone: 1 }, { unique: true, sparse: true });
  await db.collection(COLLECTION).createIndex({ role: 1 });
  await db.collection(COLLECTION).createIndex({ resetPasswordToken: 1 });
}

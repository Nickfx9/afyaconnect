import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies(); // 👈 await it now
  const userId = cookieStore.get("userId")?.value;
  const username = cookieStore.get("username")?.value;
  const fullName = cookieStore.get("fullName")?.value;
  const email = cookieStore.get("email")?.value;

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json({
    user: {
      _id: userId,
      username,
      fullName,
      email,
    },
  });
}

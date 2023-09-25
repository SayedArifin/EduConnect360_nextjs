import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email, image } = await request.json();
  const user_role = 0;
  await connectMongoDB();
  await User.create({ name, email, image, user_role });
  return NextResponse.json(
    { message: "Success. User created" },
    { success: 201 }
  );
}
export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const topic = await User.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}

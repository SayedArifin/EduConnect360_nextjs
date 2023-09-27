import connectMongoDB from "@/lib/mongodb";
import University from "@/models/university";

import { NextResponse } from "next/server";

export async function POST(request) {
  const {
    name,
    rank,
    yearEstablished,
    viceChancellor,
    registrar,
    officialWebsite,
    emailAddress,
    classSchedules,
  } = await request.json();
  await connectMongoDB();
  await University.create({
    name,
    rank,
    yearEstablished,
    viceChancellor,
    registrar,
    officialWebsite,
    emailAddress,
    classSchedules,
  });
  return NextResponse.json(
    { message: "Success. New University Created" },
    { success: 201 }
  );
}

export async function GET(request) {
  try {
    await connectMongoDB();
    const universities = await University.find({});

    return NextResponse.json({ universities }, { success: 200 });
  } catch (error) {
    console.error("Error fetching universities:", error);
    return NextResponse.json(
      { message: "Error fetching universities" },
      { error: 500 }
    );
  }
}

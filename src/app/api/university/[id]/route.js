import connectMongoDB from "@/lib/mongodb";
import University from "@/models/university";

import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const {
      name: name,
      rank: rank,
      yearEstablished: yearEstablished,
      viceChancellor: viceChancellor,
      registrar: registrar,
      officialWebsite: officialWebsite,
      emailAddress: emailAddress,
      classSchedules: classSchedules,
    } = await request.json();

    await connectMongoDB();

    await University.findByIdAndUpdate(id, {
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
      { message: "University updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating university data:", error);
    return NextResponse.error(
      { message: "Error updating university data" },
      { status: 500 }
    );
  }
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const university = await University.findOne({ _id: id });
  return NextResponse.json({ university }, { status: 200 });
}

import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import User from "@/models/User";
import connectDb from "../../../../../utils/connectDB";

export async function POST(req, res) {
  try {
    await connectDb();

    const session = await getServerSession({ req });
    console.log({ session });

    if (session == null) {
      return NextResponse.json(
        {
          status: "failed",
          message: "invalid token",
        },
        { status: 401 }
      );
    }

    const user = await User.findOne({ email: session?.user?.email });
    console.log(user);

    return NextResponse.json(
      { status: "success", data: user.questions },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        status: "failed",
        message: `Error : ${err}`,
      },
      { status: 500 }
    );
  }
}

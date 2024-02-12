import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import connectDb from "../../../../utils/connectDB";

import User from "@/models/User";
import Question from "@/models/Question";

export async function POST(req, res) {
  await connectDb();

  const data = await req.json();
  const { title, description, startDate, options, endDate } = data;
  // // console.log(title, description, startDate, options, endDate);
  if (!title || !description || !startDate || !options) {
    return NextResponse.json(
      {
        status: "failed",
        message: "Please fill in all fields.",
      },
      { status: 401 }
    );
  }

  const session = await getServerSession({ req });
  // console.log({ session });

  if (session == null) {
    return NextResponse.json(
      {
        status: "failed",
        message: "invalid token",
      },
      { status: 401 }
    );
  }

  const newEndDate = endDate == undefined ? "01" : endDate;
  console.log(newEndDate);

  const user = await User.findOne({ email: session.user.email }); // یافتن کاربر بر اساس ایمیل جلسه فعلی
  if (!user) {
    return NextResponse.json(
      {
        status: "failed",
        message: "User not found.",
      },
      { status: 404 }
    );
  }
  const authorName = user?.name;
  console.log(authorName);

  const newQuestion = new Question({
    author: authorName,
    title: title,
    caption: description,
    options: options,
    startDate: startDate,
    endDate: newEndDate,
    comments: "",
  });
  console.log(newQuestion);

  // await user?.posts?.push(newQuestion); // اضافه کردن سؤال جدید به لیست سؤال‌های کاربر

  // await newQuestion.save();
  // await user.save();

  // const newQuestion = new Question({
  //   author: "siavash",
  //   title: "title",
  //   description: "description",
  //   options: [{ name: "siavash", family: "kaseb" }],
  //   startDate: "startDate",
  //   endDate: "newEndDate",
  //   comments: "",
  // });

  // await newQuestion.save();

  // // await user?.questions?.push(newQuestion);

  // await user.save();

  return NextResponse.json({
    status: "success",
    message: "Question successfully created!",
  });
}

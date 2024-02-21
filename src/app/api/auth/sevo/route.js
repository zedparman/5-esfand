// import { getServerSession } from "next-auth";
import Question from "@/models/Question";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const data = await req.json();
  const { id, wallet, questionsId } = data;

  // const question = await Question.findOne({
  //   questionId: questionsId,
  // });

  // // const findOption = question.find((item) => item.id == id);
  // // const findOption = question.options.find((item) => item.id == id);

  // const optionIndex = question.options.findIndex((option) =>
  //   option.voters.some((voter) => voter.wallet === wallet)
  // );

  // if (optionIndex === -1) {
  //   // اضافه کردن رای به گزینه مورد نظر
  //   const option = question.options.find((option) => option.id === id);
  //   option.voters.push({ wallet: wallet });

  //   // ذخیره تغییرات در دیتابیس
  //   await question.save();
  // } else {
  //   // ارسال خطا به کاربر
  //   throw new Error("You have already voted for this option.");
  // }

  const question = await Question.findOne({ questionId: questionsId });

  // بررسی آیا کاربر قبلاً رای داده است یا خیر
  const optionIndex = question.options.findIndex((option) =>
    option.voters.some((voter) => voter.wallet === wallet)
  );

  console.log({ optionIndex });
  if (optionIndex === -1) {
    // اضافه کردن رای به گزینه مورد نظر
    const option = question.options.find((option) => option.id == id);
    console.log({ option });
    option.voters.push({ wallet: wallet });

    // افزایش count به گزینه مورد نظر
    option.count++;

    // ذخیره تغییرات در دیتابیس
    await question.save();
  } else {
    // ارسال خطا به کاربر
    throw new Error("You have already voted for this option.");
  }

  return NextResponse.json({
    status: "success",
    message: "Question successfully created!",
  });
}

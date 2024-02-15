import React from "react";
import axios from "axios";
import QuestionCard from "@/app/[locale]/components/Questions/QuestionCard";

const getAllQuestions = async () => {
  const response = await axios.post(
    `${process.env.BASE_API + "/api/auth/get-user-questions"}`
  );
  return response.data;
};
const QuestionsPageComponent = async ({ t }) => {
  const res = await getAllQuestions();
  console.log({ res });
  return (
    <div className="my-5 w-full flex flex-col items-center gap-7">
      {res?.data?.map((item) => (
        <QuestionCard key={item._id} t={t} path={"60"} {...item} />
      ))}
    </div>
  );
};

export default QuestionsPageComponent;

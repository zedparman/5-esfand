import React from "react";
import QuestionCard from "./QuestionCard";
import axios from "axios";

const getAllQuestions = async () => {
  const response = await axios.get(
    `${process.env.BASE_API + "/api/get-questions"}`
  );
  return response.data;
};
const QuestionsPageComponent = async ({ t }) => {
  const res = await getAllQuestions();
  console.log({ res });
  return (
    <section className="flex flex-col w-full items-center justify-center p-2">
      <h1 className="text-2xl font-bold text-primary">{t.title}</h1>
      <div className="my-5 w-full flex flex-col items-center gap-7">
        {res?.data?.map((item) => (
          <QuestionCard key={item._id} t={t} path={"60"} {...item} />
        ))}
      </div>
    </section>
  );
};

export default QuestionsPageComponent;

import React from "react";
import axios from "axios";
import QuestionCard from "@/app/[locale]/components/Questions/QuestionCard";
import { getSession } from "next-auth/react";

const getAllQuestions = async () => {
  const response = await axios.post("http://192.168.1.104:8085/api/auth/get-user-questions");
  return response.data;
};
const QuestionsPageComponent = async (props) => {
  const res = await getAllQuestions();

  return (
    <div className="my-5 w-full flex flex-col items-center gap-7">
      {res?.data?.map((item) => (
        <QuestionCard key={item._id} t={props.t} path={"60"} {...item} />
      ))}
    </div>
  );
};

export default QuestionsPageComponent;

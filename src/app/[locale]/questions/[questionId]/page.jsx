import { useParams } from "next/navigation";
import React from "react";
import axios from "axios";
// import QuestionDetailOptionCard from "../../components/QuestionDetail/QuestionDetailOptionCard";
// import { getServerSession } from "next-auth";
import QuestionDetailCl from "../../components/QuestionDetail/QuestionDetailCl";

const getQuestion = async (id) => {
  const response = await axios.post(
    `${process.env.BASE_API + `/api/get-question/`}`,
    { id },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};



const QuestionId = async (props) => {
  const res = await getQuestion(props.params.questionId);

  return <QuestionDetailCl res={res} />;
};

export default QuestionId;

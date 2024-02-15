import React from "react";
import axios from "axios";
import QuestionCard from "@/app/[locale]/components/Questions/QuestionCard";
import { getSession } from "next-auth/react";

// const getAllQuestions = async () => {
//   // console.log(window.localStorage.getItem(""));
//   const response = await axios.post(
//     `${process.env.BASE_API + "/api/auth/get-user-questions"}`,
//     {
//       name: "",
//     }
//   );

//   return response.data;
// };

// const tesgS =  () => {
//   const res =  axios.post(
//     "http://localhost:8085/api/auth/change-password",
//     {
//       currentPassword: "asal",
//       newPassword: "password",
//     },
//     {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );
//   console.log(res);
// };
const QuestionsPageComponent =  (props) => {
  // const res = await getAllQuestions();
  const res =  tesgS();

  return (
    <div className="my-5 w-full flex flex-col items-center gap-7">
      {/* {res?.data?.map((item) => (
        <QuestionCard key={item._id} t={props.t} path={"60"} {...item} />
      ))} */}
      <button>Bezan</button>
    </div>
  );
};

export default QuestionsPageComponent;

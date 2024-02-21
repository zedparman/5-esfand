"use client";
import React from "react";
import Image from "next/image";
import { Link } from "@/navigations";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";

const sendVote = async (id, wallet, questionId) => {
  const res = await axios.post(`http://localhost:8085/api/auth/sevo`, {
    id,
    wallet,
    questionId,
  });
  console.log(res.data);

  return res.data;
};

const QuestionDetailOptionCard = ({
  title,
  desc,
  id,
  wallet,
  questionId,
  count,
}) => {
  console.log(id, wallet, questionId);
  const router = useRouter();

  const send = async () => {
    await sendVote(id, wallet, questionId).then((res) => {
      console.log(res, "then");
      router.refresh();
    });
  };
  return (
    <div className="flex w-[80%] border-2 border-primary p-3 rounded-md">
      <div className="w-full">
        <h1 className="text-2xl w-full border-b-2 border-primary ">{title}</h1>
        <p className="text-primary-foreground w-full text-base my-5">{desc}</p>
        <div className="w-full flex flex-row-reverse justify-between items-center">
          <p>Vote Count: {count}</p>
          <Button onClick={send}>Vote</Button>
        </div>
      </div>
    </div>
  );
};

export default QuestionDetailOptionCard;

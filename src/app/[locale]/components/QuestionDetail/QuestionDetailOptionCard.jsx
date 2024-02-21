"use client";
import React from "react";
import Image from "next/image";
import { Link } from "@/navigations";
import { Button } from "@/components/ui/button";
import axios from "axios";

const sendVote = async (id, wallet, questionsId) => {
  const res = await axios.post(`http://localhost:8085/api/auth/sevo`, {
    id,
    wallet,
    questionsId,
  });
  console.log(res.data);
  return res.data;
};

const QuestionDetailOptionCard = ({ title, desc, id, wallet, questionsId }) => {
  console.log(id, wallet, questionsId);
  const send = async () => {
    await sendVote(id, wallet, questionsId);
  };
  return (
    <div className="flex w-[80%] border-2 border-primary p-3 rounded-md">
      <div className="w-full">
        <h1 className="text-2xl w-full border-b-2 border-primary ">{title}</h1>
        <p className="text-primary-foreground w-full text-base my-5">{desc}</p>
        <Button onClick={send}>Vote</Button>
      </div>
    </div>
  );
};

export default QuestionDetailOptionCard;

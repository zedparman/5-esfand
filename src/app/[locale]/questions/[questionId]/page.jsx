"use client";
import { useParams } from "next/navigation";
import React from "react";

const QuestionId = () => {
  const { questionId } = useParams();
  const newPathName = questionId?.split("-")[1];
  return (
    <section className="flex flex-col p-2">
      <div className="flex flex-col gap-4 p-3">
        <h1 className="text-2xl border-b-2 font-bold border-primary w-auto">
          Title - {newPathName}
        </h1>
        <p className="text-primary-foreground text-base ">Caption</p>
        <p>Wallet Addres</p>
      </div>
      <div className="flex p-3 my-5">
        <h1 className="text-2xl font-bold">Options</h1>
      </div>
    </section>
  );
};

export default QuestionId;

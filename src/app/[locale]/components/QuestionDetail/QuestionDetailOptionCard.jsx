import React from "react";
import Image from "next/image";
import { Link } from "@/navigations";
import { Button } from "@/components/ui/button";
const QuestionDetailOptionCard = ({ t, title, desc, questionId }) => {
  return (
    <div className="flex w-[80%] border-2 border-primary p-3 rounded-md">
      <div className="w-full">
        <h1 className="text-2xl w-full border-b-2 border-primary w-auto">
          {title}
        </h1>
        <p className="text-primary-foreground w-full text-base my-5">{desc}</p>
        <Button disabled>Vote</Button>
      </div>
    </div>
  );
};

export default QuestionDetailOptionCard;

import React from "react";
import Image from "next/image";
import { Link } from "@/navigations";
import { Button } from "@/components/ui/button";
const QuestionCard = ({ t, path }) => {
  return (
    <div className="flex w-[80%] border-2 border-primary p-3 rounded-md">
      <div>
        <h1 className="text-2xl border-b-2 border-primary w-auto">Title</h1>
        <p className="text-primary-foreground text-base my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          quisquam placeat dolor odio nam atque vitae vero rem, quos ipsum vel
          velit corporis perspiciatis doloremque minus officiis in! In, numquam.
        </p>
        <Link href={`/questions/id-${path}`}>
          <Button>{t.Details}</Button>
        </Link>
      </div>
      {/* <Image src={""} alt="" width={""} height={""} />  */}
    </div>
  );
};

export default QuestionCard;

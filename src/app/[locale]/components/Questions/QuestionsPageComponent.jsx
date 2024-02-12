import React from "react";
import QuestionCard from "./QuestionCard";

const QuestionsPageComponent = ({ t }) => {
  return (
    <section className="flex flex-col items-center justify-center p-2">
      <h1 className="text-2xl font-bold text-primary">{t.title}</h1>
      <div className="my-5 flex flex-col items-center gap-7">
        <QuestionCard t={t} path={"52"} />
        <QuestionCard t={t} path={"60"} />
        <QuestionCard t={t} path={"18"} />
        <QuestionCard t={t} path={"39"} />
        <QuestionCard t={t} path={"39"} />
        <QuestionCard t={t} path={"44"} />
        <QuestionCard t={t} path={"71"} />
        <QuestionCard t={t} path={"17"} />
        <QuestionCard t={t} path={"92"} />
        <QuestionCard t={t} path={"32"} />
        <QuestionCard t={t} path={"67"} />
        <QuestionCard t={t} path={"86"} />
        <QuestionCard t={t} path={"41"} />
      </div>
    </section>
  );
};

export default QuestionsPageComponent;

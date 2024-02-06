import React from "react";
import CreateQuestionForm from "./CreateQuestionForm";

const CreateQuestionComponent = ({ t }) => {
  return (
    <section>
      <h1 className="text-2xl font-bold">{t.title}</h1>
      <p className="my-4 text-lg">{t.subTitle}</p>
      <CreateQuestionForm t={t} />
    </section>
  );
};

export default CreateQuestionComponent;

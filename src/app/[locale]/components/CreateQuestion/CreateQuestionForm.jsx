"use client";
import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { validateSchemaCreateQuestion } from "@/schema/validateSchema";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  createPoll,
  formatTimestamp,
} from "../../../../../services/blockchain";
import { globalActions } from "../../../../../store/globalSlices";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
const CreateQuestionForm = ({ t }) => {
  const dispatch = useDispatch();
  const { setCreateModal } = globalActions;
  const { wallet, createModal } = useSelector((states) => states.globalStates);
  const schemaValidate = validateSchemaCreateQuestion(t);
  const router = useRouter();

  const [timeS, setTimeS] = useState("");
  const [timeX, setTimeX] = useState("");

  const formik = useFormik({
    initialValues: {
      inpTitle: "",
      inpSubTitle: "",
    },
    validationSchema: schemaValidate,
    onSubmit: async (data) => {
      const { inpTitle, inpSubTitle } = data;
      if (wallet === "") {
        toast.error("Connect wallet first!");
      }
      console.log(inpTitle, inpSubTitle);
      const res = await createPoll({
        title: inpTitle,
        description: inpSubTitle,
        startsAt: timeS,
        endsAt: timeX,
        image: "yourImageValue",
      });
      console.log(res);

      // router.refresh();
    },
  });
  return (
    <section className="my-5 flex flex-col">
      <form
        className="flex flex-col my-5 gap-5 w-full "
        onSubmit={formik.handleSubmit}
      >
        <div className="space-y-2">
          <Label>{t.inpTitle}</Label>
          <Input
            type="text"
            name="inpTitle"
            className="border border-primary"
            value={formik.values.inpTitle}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.inpTitle && (
            <p className="text-xs text-red-500">{formik.errors.inpTitle}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label>{t.inpSubTitle}</Label>
          <Input
            type="text"
            name="inpSubTitle"
            className="border border-primary"
            value={formik.values.inpSubTitle}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.inpSubTitle && (
            <p className="text-xs text-red-500">{formik.errors.inpSubTitle}</p>
          )}
        </div>
        <div>
          <input
            type="date"
            onChange={(e) => setTimeS(new Date(e.target.value).getTime())}
          />
          <input
            type="date"
            onChange={(e) => setTimeX(new Date(e.target.value).getTime())}
          />
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Add</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add option</DialogTitle>
              <DialogDescription>
                Click save when you re done.
              </DialogDescription>
            </DialogHeader>

            <DialogFooter>
              <Button type="submit">Save </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Button
          type="submit"
          className="text"
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {t.submit}
        </Button>
      </form>
    </section>
  );
};

export default CreateQuestionForm;

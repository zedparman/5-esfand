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
import QuestionCard from "./QuestionCard";
import uniqid from "uniqid";

import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const CreateQuestionForm = ({ t }) => {
  const dispatch = useDispatch();
  const { wallet, createModal } = useSelector((states) => states.globalStates);
  const schemaValidate = validateSchemaCreateQuestion(t);
  const router = useRouter();

  const [isOpenDialog, setIsOpenDialog] = useState(false);

  const [optionData, setOptionData] = useState({
    title: "",
    desc: "",
  });
  const [finalOptions, setFinalOptions] = useState([]);

  const [timeS, setTimeS] = useState("");
  const [timeX, setTimeX] = useState("");
  const [date, setDate] = React.useState();
  console.log();

  const clickHander = () => {
    const updatedOptions = [
      ...finalOptions,
      {
        id: `${uniqid()}`,
        title: optionData.title,
        desc: optionData.desc,
        count: 0,
        voters: [],
      },
    ];
    setFinalOptions(updatedOptions);
    setIsOpenDialog(false);
    setOptionData({
      title: "",
      desc: "",
    });
    console.log(updatedOptions);
  };

  const formik = useFormik({
    initialValues: {
      inpTitle: "",
      inpSubTitle: "",
    },
    validationSchema: schemaValidate,
    onSubmit: async (data) => {
      const { inpTitle, inpSubTitle } = data;

      // console.log(inpTitle, inpSubTitle, finalOptions, timeS);
      const res = await axios.post(
        "/api/auth/create-question",
        {
          title: inpTitle,
          description: inpSubTitle,
          options: finalOptions,
          startDate: date,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
      if (res.status !== 200) {
        console.log(res);
        toast.error(res.error);
      } else {
        toast.success(res.message);
      }
      if (res.data.status == "success") {
        toast.success("Success!");
      }
      // console.log({
      //   title: inpTitle,
      //   description: inpSubTitle,
      //   options: finalOptions,
      //   startDate: timeS,
      // });
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
          {/* <input
            type="date"
            onChange={(e) =>
              setTimeS(format(new Date(e.target.value), "yyyy-MM-dd"))
            }
          />
          <input
            type="date"
            onChange={(e) =>
              setTimeX(format(new Date(e.target.value), "yyyy-MM-dd"))
            }
          /> */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[240px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex flex-col gap-6 my-5">
          {finalOptions?.map((item) => (
            <div
              key={uniqid()}
              className="flex w-[80%] border-2 border-primary p-3 rounded-md"
            >
              <div>
                <h1 className="text-2xl border-b-2 border-primary w-auto">
                  {item.title}
                </h1>
                <p className="text-primary-foreground text-base my-5">
                  {item.desc}
                </p>
                <button
                  className="bg-primary p-2 rounded-md"
                  onClick={() => {
                    const update = finalOptions.filter(
                      (oldItem) => oldItem.id !== item.id
                    );
                    setFinalOptions(update);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        <Dialog open={isOpenDialog}>
          <DialogTrigger asChild>
            <Button onClick={() => setIsOpenDialog(true)} variant="outline">
              Add
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add option</DialogTitle>
              <DialogDescription>
                Click save when you re done.
              </DialogDescription>
            </DialogHeader>
            <div>
              <div>
                <Label>Title</Label>
                <Input
                  type="text"
                  value={optionData.title}
                  onChange={(e) =>
                    setOptionData({ ...optionData, title: e.target.value })
                  }
                />
              </div>
              <div>
                <Label>Caption</Label>
                <Input
                  type="text"
                  value={optionData.desc}
                  onChange={(e) =>
                    setOptionData({ ...optionData, desc: e.target.value })
                  }
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={clickHander}>
                Save
              </Button>
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

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

const CreateQuestionForm = ({ t }) => {
  const schemaValidate = validateSchemaCreateQuestion(t);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      inpTitle: "",
      inpSubTitle: "",
    },
    validationSchema: schemaValidate,
    onSubmit: async (data) => {
      const { title, subTitle } = data;
      const res = await axios.post(
        "/api/auth/update-info",
        {
          title,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
      if (res.status !== 200) {
        console.log(res.error);
      }
      router.refresh();
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

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Edit Profile</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you re done.
              </DialogDescription>
            </DialogHeader>

            <DialogFooter>
              <Button type="submit">Save changes</Button>
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

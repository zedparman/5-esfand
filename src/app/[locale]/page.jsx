"use client";
// import { useTranslations } from "next-intl";
import axios from "axios";

const getId = async () => {
  axios
    .get(`${process.env.BASE_API}/api/auth/god`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export default function Home() {
  // const t = useTranslations("Index");
  const userId = getId();
  console.log(userId);
  return (
    <main className="flex flex-col items-center justify-center bg-card h-[90vh]">
      <h1 className="text-2xl font-bold text-primary">Question Area</h1>
      {/* <h2>{t("subTitle")}</h2> */}
    </main>
  );
}

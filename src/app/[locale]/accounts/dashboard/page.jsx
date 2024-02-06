import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "@/navigations";
import { getServerSession } from "next-auth";
import React from "react";

export default async function DashboardPage({ session }) {
  
  // const auth = async () => {
  //   "use server";
  //   const sesseoin = await getServerSession(authOptions);

  //   return sesseoin ? sesseoin.user : false;
  // };

  // const user = await auth();
  // if (!user) {
  //   redirect("/signin");
  // }
  // console.log(user);
  return <div>DashboardPage</div>;
}

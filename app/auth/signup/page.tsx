import React from "react";

import { Metadata } from "next";
import { Login } from "@/components/auth/Login";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import SignUp from "@/components/auth/Signup";

export const metadata: Metadata = {
  title: "Login | SwyftPay",
  description: "Connectez-vous",
  // other metadata
};

const SignIn: React.FC = async () => {
  const session = await getServerSession();
  if (session) {
    redirect("/admin");
  }
  return (
    <div>
      <SignUp />
    </div>
  );
};

export default SignIn;

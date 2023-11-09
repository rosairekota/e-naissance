import React from "react";

import { Metadata } from "next";
import { Login } from "@/components/auth/Login";
export const metadata: Metadata = {
  title: "Login | SwyftPay",
  description: "Connectez-vous",
  // other metadata
};

const SignIn: React.FC = () => {
  return (
    <div>
     
     <Login/>
    </div>
  );
};

export default SignIn;

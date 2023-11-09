import React from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import { Login } from "@/components/admin/Login";
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

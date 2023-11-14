"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { loginSchemaValidation } from "@/validators/login.schema";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { Metadata } from "next";
import { TextInput } from "@/components/ui/inputs/TextInput";
import { Spinner } from "@/components/ui/Spinner";
import { LeftFormSection } from "../admin/form/LeftFormSection";
export const metadata: Metadata = {
  title: "Signup Page | Next.js E-commerce Dashboard Template",
  description: "This is Signup page for TailAdmin Next.js",
  // other metadata
};

type ILogin = {
  email: string;
  password: string;
};

const SignUp: React.FC = () => {
  const router = useRouter();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: yupResolver(loginSchemaValidation),
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const redirecRoutePath = "/admin";
  const handleLogin: SubmitHandler<ILogin> = async (data: ILogin) => {
    try {
      setIsLoading(true);
      setIsError(false);
      const res = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
        callbackUrl: "http://localhost:3000/auth/signin",
      });
      console.log("resStatus:", res?.status);
      if (!res?.error) {
        router.push(redirecRoutePath);
        router.refresh();
      }
      setIsError(true);
      setIsLoading(false);
    } catch (error) {}
  };
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
      

       <LeftFormSection/>
       <section className="flex items-center justify-center px-4 py-10 bg-whiter sm:px-6 sm:py-16 lg:py-24 h-auto md:h-screen">
          <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            <h2 className="text-3xl font-bold leading-tight text-primary-800 mt-10 lg:mt-0 text-center">
              Créer un compte
            </h2>

            <form onSubmit={handleSubmit(handleLogin)} className="mt-8">
              {isError ? (
                <p className="bg-meta-1/80 p-4 text-white rounded-md my-2">
                  La connexion a échouée. Veuillez vérifier votre nom
                  d&apos;utilisateur et mot de passe et réessayer.{" "}
                </p>
              ) : null}
              <div className="space-y-2">
                <div className="flex flex-col lg:flex-row lg:gap-3">
                  <TextInput
                    labelText="Nom"
                    control={control}
                    name="firstname"
                    errors={errors}
                    placeholder="Veuillez saisir votre nom"
                    type={"text"}
                  />
                  <TextInput
                    labelText="Prénom"
                    control={control}
                    name="lastname"
                    errors={errors}
                    placeholder="Veuillez saisir votre prénom"
                    type={"text"}
                  />
                </div>
                <div className="flex flex-col lg:flex-row lg:gap-3">
                  <TextInput
                    labelText="Email"
                    control={control}
                    name="email"
                    errors={errors}
                    placeholder="Veuillez saisir votre  mail"
                    type={"email"}
                  />
                  <TextInput
                    labelText="Numéro téléphone"
                    control={control}
                    name="phone"
                    errors={errors}
                    placeholder="Veuillez saisir votre numéro de téléphone"
                    type={"text"}
                  />
                </div>
                <TextInput
                  labelText="Mot de passe"
                  control={control}
                  name="password"
                  errors={errors}
                  placeholder="Veuillez saisir votre mot de passe"
                  type={"password"}
                />
                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-primary-800 border border-transparent rounded-md focus:outline-none hover:bg-primary-900 focus:bg-primary-900 disabled:bg-primary-800/50"
                    disabled={isLoading}
                  >
                    {isLoading ? <Spinner /> : "Créer un nouveau compte"}
                  </button>
                </div>
              </div>
            </form>

            <div className="mt-3 space-y-3">
              <button
                type="button"
                className="relative inline-flex items-center justify-center w-full px-4 py-4 text-primary-800 font-semibold text-gray-700 transition-all duration-200 bg-transparent border-2 border-primary-800 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-primary-900 focus:text-black focus:outline-none"
              >
                <div className="absolute inset-y-0 left-0 p-4">
                  <svg
                    className="w-6 h-6 text-primary-800"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                  </svg>
                </div>
                Créer compte avec Google
              </button>

              <div className="mt-2 text-base text-gray-600 ">
                Vous avez déjà un compte ?{" "}
                <Link
                  href="/auth/signin"
                  className="font-medium text-primary-800 transition-all duration-200 hover:text-primary-900 hover:underline focus:text-primary-900"
                >
                  Se connecter
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SignUp;

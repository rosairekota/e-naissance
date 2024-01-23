"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { loginSchemaValidation } from "@/validators/login.schema";
import { TextInput } from "../ui/inputs/TextInput";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { Spinner } from "../ui/Spinner";
import { LeftFormSection } from "../admin/form/LeftFormSection";
type ILogin = {
  email: string;
  password: string;
};

export const Login = () => {
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
        callbackUrl: "http://localhost:3001/auth/signin",
      });
      console.log("resStatus:", res?.status);
      if (!res?.error) {
        router.push(redirecRoutePath);
        router.refresh();
      }else{
        setIsError(true);
      }
  
      setIsLoading(false);
    } catch (error) {}
  };
  return (
   <div className="flex justify-center items-center bg-black-2  bg-cover bg-center overflow-hidden h-screen py-6" style={{ backgroundImage: "url('/images/login/acte.png')" }}>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden grainy rounded-2xl z-30 h-full ">
       <LeftFormSection/>
      <section className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8 sm:py-16  h-screen">
        <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
          <h2 className="text-3xl font-bold leading-tight text-primary-800 sm:text-3xl text-center">
            Connexion
          </h2>

          <form onSubmit={handleSubmit(handleLogin)} className="mt-8">
            {isError ? (
              <p className="bg-meta-1/80 p-4 text-white rounded-md my-2">
                La connexion a échouée. Veuillez vérifier votre nom
                d&apos;utilisateur et mot de passe et réessayer.{" "}
              </p>
            ) : null}
            <div className="space-y-5">
              <TextInput
                labelText="Email"
                control={control}
                name="email"
                errors={errors}
                placeholder="Entrer une adresse mail"
                type={"email"}
              />

              <TextInput
                labelText="Mot de passe"
                control={control}
                name="password"
                errors={errors}
                placeholder="Entrer le mot de passe"
                type={"password"}
              >
                {" "}
                <Link
                  href="#"
                  className="text-sm font-medium text-primary-800 hover:underline hover:text-primary-900 focus:text-primary-900"
                >
                  Mot de passe oublié ?
                </Link>
              </TextInput>

              <div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-primary-800 border border-transparent rounded-md focus:outline-none hover:bg-primary-900 focus:bg-primary-900 disabled:bg-primary-800/50"
                  disabled={isLoading}
                >
                  {isLoading ? <Spinner /> : "Se connecter"}
                </button>
              </div>
            </div>
          </form>

          <div className="mt-3 space-y-3">
           
            <div className="mt-2 text-base text-gray-600">
              Vous n&apos;avez pas de compte ?{" "}
              <Link
                href="#"
                className="font-medium text-primary-800 transition-all duration-200 hover:text-primary-900 hover:underline focus:text-primary-900"
              >
                Contactez l`&apos;administrateur
              </Link>
            </div>
          </div>
        </div>
      </section>
   
    </div>
   </div>
  );
};

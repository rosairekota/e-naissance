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
    <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden grainy">
      <section className="flex items-center justify-center px-4 py-10 bg-whiter sm:px-6 lg:px-8 sm:py-16 lg:py-24 h-screen">
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
              Se connecter avec Google
            </button>

            <div className="mt-2 text-base text-gray-600">
              Vous n&apos;avez pas de compte ?{" "}
              <Link
                href="/auth/signup"
                className="font-medium text-primary-800 transition-all duration-200 hover:text-primary-900 hover:underline focus:text-primary-900"
              >
                Créer un nouveau compte
              </Link>
            </div>
          </div>
        </div>
      </section>

    <LeftFormSection/>
    </div>
  );
};

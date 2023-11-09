"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Login = () => {
  const router = useRouter()
  const handleLogin = (e: any) => {
    e.preventDefault()
    router.push('/admin')
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <section className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24 h-screen">
        <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
          <h2 className="text-3xl font-bold leading-tight text-primary-900 sm:text-3xl text-center">
            Se Connecter
          </h2>

          <form action="#" method="POST" className="mt-8">
            <div className="space-y-5">
              <div>
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Email{" "}
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Enter email to get started"
                    className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-primary-800 focus:bg-white caret-primary-800"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Mot de passe{" "}
                  </label>

                  <a
                    href="#"
                    title=""
                    className="text-sm font-medium text-primary-800 hover:underline hover:text-primary-900 focus:text-primary-900"
                  >
                    {" "}
                    Mot de passe oublié ?{" "}
                  </a>
                </div>
                <div className="mt-2.5">
                  <input
                    type="password"
                    name=""
                    id=""
                    placeholder="Enter your password"
                    className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-primary-800 focus:bg-white caret-primary-800"
                  />
                </div>
              </div>

              <div>
                <button
                  onClick={handleLogin}
                  className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-primary-800 border border-transparent rounded-md focus:outline-none hover:bg-primary-900 focus:bg-primary-900"
                >
                  Se connecter
                </button>
              </div>
            </div>
          </form>

          <div className="mt-3 space-y-3">
            <button
              type="button"
              className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
            >
              <div className="absolute inset-y-0 left-0 p-4">
                <svg
                  className="w-6 h-6 text-rose-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                </svg>
              </div>
              Se connecter avec Google
            </button>

            <p className="mt-2 text-base text-gray-600 flex justify-between">
              Vous n&apos;avez pas de compte ?{" "}
              <a
                href="#"
                title=""
                className="font-medium text-primary-800 transition-all duration-200 hover:text-primary-900 hover:underline focus:text-primary-900"
              >
                Créer un nouveau compte
              </a>
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="hidden lg:flex justify-center my-3">
          <Image
            src={'/images/logo.png'}
            className=""
            width={200}
            height={10}
            alt="image"
          />
        </div>
        <div className="hidden lg:flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 bg-gray-50 sm:px-6 lg:px-8 h-full">
          <div>

            <Image
              src={'/images/credit-cart.png'}
              className="w-full lg:w-4/5 float-none lg:float-right mx-auto mb-4"
              width={1000}
              height={200}
              alt="image"
            />

            <div className="w-full max-w-md mx-auto xl:max-w-xl">
              <h4 className="text-2xl font-bold text-center text-text-primary">
                Acceptez les <span className="text-primary-800">paiements mobiles</span> dès maintenant.
              </h4>
              <p className="leading-relaxed text-center text-gray-500 mt-2.5">
                Optimisez vos transactions avec notre plateforme fintech. Commencez à accepter les paiements mobiles dès maintenant.
              </p>

              <div className="flex items-center justify-center mt-10 space-x-3">
                <div className="bg-primary-800 rounded-full w-20 h-1.5"></div>

                <div className="bg-gray-200 rounded-full w-12 h-1.5"></div>

                <div className="bg-gray-200 rounded-full w-12 h-1.5"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
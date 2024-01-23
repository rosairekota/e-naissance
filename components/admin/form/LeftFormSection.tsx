import Image from 'next/image'
import React from 'react'

export const LeftFormSection = () => {
  return (
    <section className="bg-[#291FB3] relative isolate">
    <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
      <svg
        viewBox="0 0 558 558"
        width="558"
        height="558"
        fill="none"
        aria-hidden="true"
        className="animate-rotating"
      >
        <defs>
          <linearGradient
            id=":S4:"
            x1="79"
            y1="16"
            x2="105"
            y2="237"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff"></stop>
            <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
        <path
          opacity=".2"
          d="M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z"
          stroke="#fff"
        ></path>
        <path
          d="M1 279C1 125.465 125.465 1 279 1"
          stroke="url(#:S4:)"
          strokeLinecap="round"
        ></path>
      </svg>
    </div>
    <div
      aria-hidden="true"
      className=" pointer-events-none absolute inset-x-0 top-60 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
    >
      <div
        style={{
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
        }}
        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w[36.125rem]
         -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-primary-800
         sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]  opacity-30"
      />
    </div>
    <div className="hidden lg:flex justify-center my-3">
      {/* <Image
        src={'/images/logo.png'}
        className=""
        width={200}
        height={10}
        alt="image"
      /> */}
      <h1 className="text-4xl font-extrabold text-meta-2 uppercase py-3">E-Naissance</h1>
    </div>
    <div className="hidden lg:flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 bg-gray-50 sm:px-6 lg:px-8 h-full">
      <div>
        <div className='flex justify-center relative'>
        <Image
          src={"/images/login/acte.png"}
          className="w-full lg:w-4/5 rounded-full mb-4"
          width={500}
          height={500}
          alt="image"
        />
        </div>

        <div className="w-full max-w-md mx-auto">
          <h4 className="text-2xl font-medium text-center text-meta-2/95">
          Bienvenue sur le Portail des Actes de Naissance. 
          </h4>
          <p className="leading-relaxed text-center text-white/80 mt-2.5 ">
         Simplifiez vos démarches administratives et imprimez vos actes en toute simplicité. Connectez-vous maintenant pour accéder à vos données vitales.
          </p>

          <div className="flex items-center justify-center mt-10 space-x-3">
            <div className="bg-primary-800 rounded-full w-20 h-1.5 animate-pulse"></div>

            <div className="bg-meta-2 rounded-full w-12 h-1.5"></div>

            <div className="bg-meta-7 rounded-full w-12 h-1.5 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
//  Connectez-vous pour gérer les actes de naissance de manière efficace et sécurisée. 
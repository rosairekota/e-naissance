import React from "react";
import { BaseContainer } from "@/components/BaseContainer";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <BaseContainer className="mb-12 mt-28 sm:mt-40 flex flex-col items-center sx:justify-center text-center md:text-left ">
        <div
          className="
        mx-auto mb-4 flex max-w-fit items-center justify-center overflow-hidden
        space-x-2 rounded-full border border-primary-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-primary-300 hover:bg-white/50"
        >
          <p className="text-sm font-semibold text-primary-700">
            {" "}
            Quill is now public
          </p>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          Chat with your <span className="text-blue-600">documents</span> in
          seconds.
        </h1>
        <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
          Quill allows you to have conversations with any PDF document. Simply
          upload your file and start asking questions right away.
        </p>
        <Link
          href={"/admin"}
          target="_blank"
          className={buttonVariants({
            size: "lg",
            className: "mt-5 text-white rounded-xl",
          })}
        >
          Get Started <ArrowRight className="ml-2 h-5 w-5 text-white" />
        </Link>
      </BaseContainer>

      {/* value proposition section*/}

      <div className="relative isolate">
        <div
          aria-hidden="true"
          className=" pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w[36.125rem]
             -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]
             sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] opacity-30"
          />
        </div>
        <div>
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 lg:-m-4 p-2 lg:p-4 rounded-xl lg:rounded-2xl bg-primary/5 ring-1 ring-inset ring-primary/10">
                <Image
                  src={"/dashboard-preview.png"}
                  alt={"product"}
                  width={1886}
                  height={793}
                  quality={10}
                  className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-primary/10"
                />
                
              </div>
            </div>
          </div>
        </div>
        {/* clipath */}
        <div
          aria-hidden="true"
          className=" pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-13rem)] aspect-[1155/678] w[36.125rem]
             -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]
             sm:left-[calc(50%-36rem)] sm:w-[72.1875rem] opacity-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

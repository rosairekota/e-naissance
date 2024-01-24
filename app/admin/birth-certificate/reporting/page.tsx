import { BirthCertReporting } from "@/components/admin/birth-certificate/BirthCertReporting";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Certificat de naissances",
  description: "Bienvenue",
  // other metadata
};

export default async function BirthCertReportingPage() {
  return (
    <>
     <div className="px-4 md:px-6 2xl:px-10">
     <BirthCertReporting/>
      </div>
    </>
  );
}
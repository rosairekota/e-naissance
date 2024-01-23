import { BirthRecord } from "@/components/admin/BirthRecord";
import { Metadata } from "next";
import { getServerSession } from "next-auth";


export const metadata: Metadata = {
  title: "Acte de naissances",
  description: "Bienvenue",
  // other metadata
};

export default async function BirthRecordPage() {
  return (
    <>
     <div className="px-4 md:px-6 2xl:px-10">
     <BirthRecord />
      </div>
    </>
  );
}

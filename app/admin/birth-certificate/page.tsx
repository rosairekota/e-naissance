import { BirthCertificate} from "@/components/admin/birth-certificate";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Certificat de naissances",
  description: "Bienvenue",
  // other metadata
};

export default async function BirthRecordPage() {
  return (
    <>
     <div className="px-4 md:px-6 2xl:px-10">
     <BirthCertificate/>
      </div>
    </>
  );
}

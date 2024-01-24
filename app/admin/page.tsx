import { Dashboard } from "@/components/admin/dashboard";
import { Metadata } from "next";
import { getServerSession } from "next-auth";


export const metadata: Metadata = {
  title: "E-Naissance | Admin",
  description: "Bienvenue",
  // other metadata
};

export default async function Home() {
  return (
    
     <div className="p-4 md:p-6 2xl:p-10">
     <Dashboard />
      </div>
  );
}

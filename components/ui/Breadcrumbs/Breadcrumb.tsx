import { menus } from "@/components/admin/sidebar/menus";
import Link from "next/link";
import { useState } from "react";
interface BreadcrumbProps {
  pageName: string;
  backToPagePath?: string
  backToPageName?: string
}
const Breadcrumb = ({ pageName, backToPagePath, backToPageName }: BreadcrumbProps) => {

  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      {/* <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        {pageName}
      </h2> */}

      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link className="font-medium underline text-primary-300" href={backToPagePath ===''? '/admin':`${backToPagePath}`}>
             {backToPageName ===''? ' Dashboard /':backToPageName}
            </Link>
          </li>
          <li className="font-medium text-primary">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;

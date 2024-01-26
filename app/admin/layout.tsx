"use client";
import "../globals.css";
import "../data-tables-css.css";
import "../satoshi.css";
import { useState, useEffect } from "react";
import Loader from "@/components/ui/Loader";

import Sidebar from "@/components/admin/sidebar";
import Header from "@/components/admin/Header";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, setLoadingApp, setUser } from "@/store";
import { Toaster } from "sonner";
import { useSession } from "next-auth/react";


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user } = useSelector((state: RootState) => state.auth)
  const  dispatch = useDispatch<AppDispatch>()
  const { data: session } = useSession();
 
  const {loadingApp, content} =useSelector((state: RootState) => state.app)

  useEffect(() => {
    setTimeout(() => dispatch(setLoadingApp({loading:false})), 1000);
  }, []);

  useEffect(() => {
    if (session?.user) {
        dispatch(setUser(session.user))
    }
 

}, [dispatch, session?.accessToken, session?.user])

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
      <Toaster richColors position="top-right" />
        <div className="grainy dark:bg-boxdark-2 dark:text-bodydark">
          {loadingApp ? (
            <Loader title={content}/>
          ) : (
            <div className="flex h-screen overflow-hidden">
              <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                />

              {/* <!-- ===== Sidebar End ===== --> */}

              {/* <!-- ===== Content Area Start ===== --> */}
              <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                {/* <!-- ===== Header Start ===== --> */}
                <Header
                  sidebarOpen={sidebarOpen}
                  setSidebarOpen={setSidebarOpen}
                />
                {/* <!-- ===== Header End ===== --> */}

                {/* <!-- ===== Main Content Start ===== --> */}
                <main>
                  <div className="mx-auto max-w-screen-2xl  dark:bg-boxdark-2">
                    {children}
                  </div>
                </main>
                {/* <!-- ===== Main Content End ===== --> */}
              </div>
              {/* <!-- ===== Content Area End ===== --> */}
            </div>
          )}
        </div>
      </body>
    </html>
  );
}

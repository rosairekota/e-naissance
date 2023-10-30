"use client";
import React from "react";
import ChartOne from "../Charts/ChartOne";
import ChartTwo from "../Charts/ChartTwo";
import TableOne from "../Tables/TableOne";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { ChargeKpi } from "./kpis";
import ChartThree from "../Charts/ChartThree";
import { ChargeChart } from "./charge-chart/ChargeChart";
import { TransactionChart } from "./TransactionChart";



export const Dashboard: React.FC = () => {
    return (
        <>
            <Tabs defaultValue="account" className="w-full">
                <TabsList className="transition duration-1000 ease-out bg-whiter">
                    <TabsTrigger value="account"  className="rounded bg-white py-1 px-2 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark">Charge</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                <TabsContent value="account">   <ChargeKpi /></TabsContent>
                <TabsContent value="password">Change your password here.</TabsContent>
            </Tabs>

         

            <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
                <TransactionChart />
                <ChargeChart />
                {/* <ChartTwo /> */}
            </div>
            {/* <div className="grid grid-cols-1 mt-4 md:mt-6">
                <TableOne />
            </div> */}
        </>
    );
};

"use client";
import React, { useState } from "react";
import ChartOne from "../Charts/ChartOne";
import ChartTwo from "../Charts/ChartTwo";
import TableOne from "../Tables/TableOne";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { BalanceKpi, PaiementsKpi } from "./kpis";
import ChartThree from "../Charts/ChartThree";
import { ChargeChart } from "./ChargeChart";
import { PaymentChart } from "./PaymentChart";
import { TransactionChart } from "./TransactionChart";



export const Dashboard: React.FC = () => {
    const [tab, setTab] = useState<string | null>()
    const [balanceTab, setBalanceTab] = useState<string>('balance')
    const [paymentTab, setPaymentTab] = useState<string>('payment')

    const handleTabChange = (value: string) => {
        setTab(value)
    }
    return (
        <>
            <Tabs defaultValue={balanceTab} className="w-full" onValueChange={handleTabChange}>
                <TabsList className="transition duration-1000 ease-out bg-whiter">
                    <TabsTrigger value={balanceTab} className="rounded bg-white py-1 px-2 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark">Balances</TabsTrigger>
                    <TabsTrigger value={paymentTab}>Paiements</TabsTrigger>
                </TabsList>
                <TabsContent value={balanceTab}> <PaiementsKpi /></TabsContent>
                <TabsContent value={paymentTab}>   <PaiementsKpi /></TabsContent>
            </Tabs>
            {tab}
            <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
                <TransactionChart />
                {tab === paymentTab ? (<PaymentChart />) : <ChargeChart />}
            </div>
            {/* <div className="grid grid-cols-1 mt-4 md:mt-6">
                <TableOne />
            </div> */}
        </>
    );
};

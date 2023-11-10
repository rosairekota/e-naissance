"use client";
import React, { ReactNode, useEffect, useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { BalanceKpi, PaiementsKpi } from "./kpis";
import ChartThree from "../../ui/Charts/ChartThree";
import { ChargeChart } from "./ChargeChart";
import { PaymentChart } from "./PaymentChart";
import { TransactionChart } from "./TransactionChart";
import { Session } from "next-auth";
import { useDispatch } from "react-redux";
import { AppDispatch, setUser } from "@/store";

type DashboardProps={
    session: Session|null
}

export const Dashboard: React.FC<DashboardProps> = ({session}) => {
    const [tab, setTab] = useState<string | null>()
    const [balanceTab, setBalanceTab] = useState<string>('balance')
    const [paymentTab, setPaymentTab] = useState<string>('payment')
    const dispatch = useDispatch<AppDispatch>()
   
    useEffect(()=>{
        if(session?.user){
            dispatch(setUser(session.user))
        }
    },[session?.accessToken])
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
            {session?.user.email}
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

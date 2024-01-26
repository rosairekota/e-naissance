"use client";
import React, { ReactNode, useEffect, useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { PaiementsKpi } from "./kpis";
import { ChargeChart } from "./ChargeChart";
import { PaymentChart } from "./PaymentChart";
import { TransactionChart } from "./TransactionChart";
import { Session } from "next-auth";
import { useDispatch } from "react-redux";
import { AppDispatch, setUser } from "@/store";
import { UserSupportKpi } from "./kpis/UserSupportKpi";
import { useSession } from "next-auth/react";



export const Dashboard = () => {
 
    const renderKpis = () => {
        return (<UserSupportKPIs/>
        )
    }
    return (
        <>
            {renderKpis()}
            <div className="grid grid-cols-1 mt-4 md:mt-6">
            </div>
        </>
    );
};



export const UserSupportKPIs = () => {
    return (<> 
    <UserSupportKpi/>
    <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
            <TransactionChart />
            <ChargeChart /> 
        </div>
    </>)
}
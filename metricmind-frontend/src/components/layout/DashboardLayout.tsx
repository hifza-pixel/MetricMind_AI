"use client";
import {  ReactNode, useState } from "react";
import  Sidebar  from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import MobileSidebar from "../sidebar/MobileSidebar";
interface DashboardLayoutProps{
    children: ReactNode;
}
export default function
DashboardLayout({
    children,
} :DashboardLayoutProps){
    const [sidebarOpen, setSidebarOpen]=useState(false);
    return ( 
        <div className="flex h-screen bg-slate-100 dark:bg-slate-900">
            <div className="hidden lg:block">
            <Sidebar/>
            </div>
            <MobileSidebar open= {sidebarOpen} onClose={()=>
                setSidebarOpen(false)}
                />
            <div className="flex flex-1 flex-col overflow-hidden">
                <Navbar onMenuClick={()=>
                    setSidebarOpen(true)
                }/>
                <main className="flex-1 overflow-y-auto p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
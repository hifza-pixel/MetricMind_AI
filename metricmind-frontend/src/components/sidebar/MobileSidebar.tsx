"use client";
import { X } from "lucide-react";
import Sidebar from "./Sidebar";
interface MobileSidebarProps{
    open: boolean;
    onClose: () => void;
}
export default function MobileSidebar({
    open, 
    onClose,
} : MobileSidebarProps) {
    if (!open) return null;
    return (
        <>
        <div onClick={onClose} className="fixed inset-0 bg-black/40 z-40 lg:hidden" />
        <div className="fixed top-0 left-0 h-full w-72 bg-slate-900 z-50 lg:hidden shadow-2xl">
            <div className="flex justify-end p-4">
                <button onClick={onClose}>
                    <X className="text-white" />
                </button>
            </div>
            <Sidebar />
        </div>
        </>
    );
}
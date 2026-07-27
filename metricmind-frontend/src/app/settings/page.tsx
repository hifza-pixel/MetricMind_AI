"use client";
import { useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
export default function SettingsPage(){
    const [darkMode, setDarkMode]= useState(true);
    const [notifications, setNotifications]= useState(true);
    return(
        <DashboardLayout>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">
                    Settings
                </h1>
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-md p-6 space-y-6">
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="font-semibold">Dark Mode</h2>
                            <p className="text-sm text-gray-500">
                                Enable Dark Theme
                            </p>
                        </div>
                        <input type="checkbox" checked={darkMode}
                        onChange={()=>setDarkMode(!darkMode)}/>
                    </div>
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="font-semibold">Notifications</h2>
                            <p className="text-sm text-gray-500">
                                Recieves System Notifiactions
                            </p>
                        </div>
                        <input type="checkbox" checked={notifications}
                        onChange={()=>setNotifications(!notifications)}/>
                    </div>
                    <div>
                        <label className="block font-semibold mb-2">
                            Language
                        </label>
                        <select className="w-full border rounded-xl p-3 dark:bg-slate-800">
                            <option>English</option>
                            <option>Hindi</option>
                        </select>
                    </div>
                    <div>
                        <label className="block font-semibold mb-2">
                            Privacy
                        </label>
                        <select className="w-full border rounded-xl p-3 dark:bg-slate-800">
                            <option>Public</option>
                            <option>Private</option>
                        </select>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition">
                        Save Changes
                    </button>
                </div>
            </div>
        </DashboardLayout>
    );
}
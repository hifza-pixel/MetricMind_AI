import DashboardLayout from "../../components/layout/DashboardLayout";
import {User,Mail,Phone,MapPin, Briefcase} from "lucide-react";
export default function ProfilePage(){
    return(
        <DashboardLayout>
            <div className="max-w-5xl mx-auto">
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-md p-8">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="w-28 h-28 rounded-full bg-blue-600 flex items-center justify-center text-white">
                            <User size={55} />
                        </div>
                        <div className="flex-1">
                            <h1 className="text-3xl font-bold">
                                Hifza Tanveer
                            </h1>
                            <p className="text-gray-500 mt-2 ">
                                Data Analytics Intern
                            </p>
                            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl transition">
                                Edit Profile
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                        <div className="flex items-center gap-3">
                            <Mail className="text-blue-600" />
                            <span>hifza22@email.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="text-green-600"/>
                            <span>+91 9876543211</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <MapPin className="text-red-600"/>
                            <span>Lucknow,India</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Briefcase className="text-purple-600"/>
                            <span>MetricMind AI Team</span>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
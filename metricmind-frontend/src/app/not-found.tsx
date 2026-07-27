import Link from "next/link";
export default function NotFound(){
    return(
        <div className="flex flex-col items-center justify-center h-screen bg-slate-100 dark:bg-slate-900">
            <h1 className="text-7xl font-bold text-blue-600">
                404
            </h1>
            <h2 className="text-3xl font-semibold mt-4">
                Page Not Found
            </h2>
            <p className="text-gray-500 mt-2">
                Sorry, the page you are looking for doesnot exist.
            </p>
            <Link href="/dashboard" className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl">
            Go to Dashboard
            </Link>
        </div>
    );
}
"use client";
export default function Error({
    reset, } : {
        error: Error;
        reset: () => void;
    })  {
        return(
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-5xl font-bold text-red-600">
                    Oops!
                </h1>
                <p className="mt-3 text-gray-500">
                    Something went wrong.
                </p>
                <button onClick={() => reset()} className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl">
                    Try Again
                </button>
            </div>
        );
    }
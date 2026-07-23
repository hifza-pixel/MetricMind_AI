"use client";
const activities=[
    {
        id:1,
        title:"New Order Recieved",
        description:"Order #1025 placed successfully.",
        time:"2 min ago",
        color:"bg=green-500",
    },
     {
        id:2,
        title:"Revenue Updated",
        description:"Monthly Revenue increased by 12%.",
        time:"15 min ago",
        color:"bg-blue-500",
    }, 
    {
        id:3,
        title:"New Costumer",
        description:"A New Customer joined today.",
        time:"1 hour ago",
        color:"bg-purple-500",
    },
     {
        id:4,
        title:"Report Generated ",
        description:"Sales report exported sucessfully.",
        time:"3 hours ago",
        color:"bg-orange-500",
    },
]
export default function RecentActivity(){
    return(
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-md mb-5">
            <h2 className="text-xl font-semibold mb-5">
                Recent Activity
            </h2>
            <div className="space-y-5">
                {activities.map((activity)=>(
                    <div key={activity.id}
                    className="flex items-start gap-4">
                        <div className={'w-3 h-3 rounded-full mt-2 $ {activity.color}'} />
                        <div className="flex-1">
                            <h3 className="font-semibold">
                                {activity.title}
                                </h3>
                                <p className="text-sm text-gray-500">
                                    {activity.description}
                                    </p>
                                    </div>
                                    <span className="text-xs text-gray-400">
                                        {activity.time}
                                        </span> 
                                        </div>              
                                ))}
            </div>
        </div>
    );
}
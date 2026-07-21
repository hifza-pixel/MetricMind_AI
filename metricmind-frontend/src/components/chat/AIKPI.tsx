"use client";

import { TrendingUp, DollarSign, ShoppingCart, Users } from "lucide-react";

const kpis = [
  {
    title: "Revenue",
    value: "₹12.8L",
    icon: DollarSign,
    color: "text-green-600",
  },
  {
    title: "Growth",
    value: "+18%",
    icon: TrendingUp,
    color: "text-blue-600",
  },
  {
    title: "Orders",
    value: "2,356",
    icon: ShoppingCart,
    color: "text-orange-600",
  },
  {
    title: "Customers",
    value: "1,240",
    icon: Users,
    color: "text-purple-600",
  },
];

export default function AIKPI() {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
      {kpis.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-xl border bg-white dark:bg-slate-900 p-4 shadow"
          >
            <Icon className={`mb-3 ${item.color}`} size={24} />

            <h3 className="text-sm text-gray-500">
              {item.title}
            </h3>

            <p className="text-2xl font-bold">
              {item.value}
            </p>
          </div>
        );
      })}
    </div>
  );
}
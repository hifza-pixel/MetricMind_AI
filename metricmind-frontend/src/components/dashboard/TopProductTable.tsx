"use client";
const products=[
    {
        id:1,
        name:"Laptop Pro",
        sales:245,
        revenue:"4,80,000",
        status:"Top Seller",
    },
   {
        id:2,
        name:"Wireless Mouse",
        sales:198,
        revenue:"1,20,000",
        status:"Growing",
    }, 
    {
        id:3,
        name:"Mechanical Keyboard",
        sales:154,
        revenue:"2,10,000",
        status:"Stable",
    },
];
export default function TopProductTable(){
    return(
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-5">
                Top Products
            </h2>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b text-left">
                            <th className="py-3">Product</th>
                            <th>Sales</th>
                            <th>Revenue</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product)=>(
                            <tr key={product.id}
                        className="border-b hover:bg-slate-50 dark:hover:bg-slate-800 transition">
                            <td className="py-4">
                                {product.name}
                            </td>
                            <td>{product.sales}</td>
                            <td>{product.revenue}</td>
                            <td>
                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                                    {product.status}
                                </span>
                            </td>
                            <td>
                                <button className="text-blue-600 hover:underline">
                                    View
                                </button>
                            </td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
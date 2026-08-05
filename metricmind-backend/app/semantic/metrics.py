METRICS ={
    "revenue":{
        "table":"Revenue",
        "column":"revenue",
        "aggregation":"SUM"
    },
    "orders":{
        "table":"Revenue",
        "column":"id",
        "aggregation":"COUNT"
    },
    "customers":{
        "table":"DashboardMetrics",
        "column":"customer",
        "aggregation":"SUM"
    }
}
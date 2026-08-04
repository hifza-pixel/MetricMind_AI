METRICS ={
    "revenue": {
        "table": "sales",
        "column": "sale_amount",
        "aggregation": "SUM"
    },
    "profit": {
        "formula": "revenue - cost"
    },
    "orders": {
        "table": "orders",
        "aggregation": "COUNT"
    },
    "customers": {
        "table": "customers",
        "aggregation": "COUNT"
    }
}
def parse_query(user_query: str):
    query = user_query.lower()
    metric = None
    if "revenue" in query:
        metric = "revenue"
    elif "profit" in query:
        metric = "profit"
    elif "orders" in query:
        metric = "orders"
    elif "customers" in query:
        metric = "customers"
    if "region" in query:
        dimension = "region"
    elif "month" in query:
        dimension = "month"
    else:
        dimension = None
    return {
        "metric": metric,
        "dimension": dimension
    }
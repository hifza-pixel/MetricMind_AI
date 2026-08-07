from app.semantic.semantic_service import get_semantic_query
def dashboard_tool(metric, dimension= None):
    return get_semantic_query(metric, dimension)
def report_tool():
    return "Report module selected"
def forecast_tool():
    return "Forecast module selected"
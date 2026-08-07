response_cache={}
def get_cached_response(question:str):
    return response_cache.get(question.lower())
def save_cached_response(question:str, response=str):
    response_cache[question.lower()]=response
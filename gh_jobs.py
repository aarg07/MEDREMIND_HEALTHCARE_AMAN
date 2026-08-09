import urllib.request, json
url='https://api.github.com/repos/aarg07/MEDREMIND_HEALTHCARE_AMAN/actions/runs/31316947082/jobs'
with urllib.request.urlopen(url) as r:
    data=json.load(r)
print(json.dumps({'total_count':data.get('total_count'), 'jobs':[{'id':j['id'],'name':j['name'],'status':j['status'],'conclusion':j['conclusion'],'html_url':j['html_url'],'logs_url':j['logs_url']} for j in data.get('jobs',[])]}, indent=2))

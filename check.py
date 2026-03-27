import urllib.request
import json
url = 'https://kouwlhuazgugzmrxpprf.supabase.co/rest/v1/blocked_slots'
headers = {
    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvdXdsaHVhemd1Z3ptcnhwcHJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM5MTcwNzcsImV4cCI6MjA4OTQ5MzA3N30.no3mpNpuiOVXeM9aN2UZn4d_OWj6r_2VR8OZ6bbSetM',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvdXdsaHVhemd1Z3ptcnhwcHJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM5MTcwNzcsImV4cCI6MjA4OTQ5MzA3N30.no3mpNpuiOVXeM9aN2UZn4d_OWj6r_2VR8OZ6bbSetM',
    'Content-Type': 'application/json'
}
data = json.dumps({"date": "2026-03-27", "time": "10:00", "is_full_day": False}).encode('utf-8')
req = urllib.request.Request(url, data=data, headers=headers, method='POST')
try:
    with urllib.request.urlopen(req) as response:
        print("Success:", response.read().decode())
except urllib.error.HTTPError as e:
    print("HTTPError:", e.code, e.read().decode())

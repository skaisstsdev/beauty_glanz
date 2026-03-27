const SUPABASE_URL = 'https://kouwlhuazgugzmrxpprf.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvdXdsaHVhemd1Z3ptcnhwcHJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM5MTcwNzcsImV4cCI6MjA4OTQ5MzA3N30.no3mpNpuiOVXeM9aN2UZn4d_OWj6r_2VR8OZ6bbSetM';

fetch(SUPABASE_URL + '/rest/v1/blocked_slots?select=*', {
  headers: {
    'apikey': SUPABASE_KEY,
    'Authorization': 'Bearer ' + SUPABASE_KEY
  }
}).then(res => res.json()).then(console.log).catch(console.error);

fetch(SUPABASE_URL + '/rest/v1/blocked_slots', {
  method: 'POST',
  headers: {
    'apikey': SUPABASE_KEY,
    'Authorization': 'Bearer ' + SUPABASE_KEY,
    'Content-Type': 'application/json',
    'Prefer': 'return=minimal'
  },
  body: JSON.stringify({ date: '2026-03-27', time: '10:00', is_full_day: false })
}).then(res => res.text()).then(console.log).catch(console.error);

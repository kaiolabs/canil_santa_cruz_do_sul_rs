import { createClient } from "@supabase/supabase-js";


const SUPABASE_URL = "https://buyfbpffwizllrfscsfi.supabase.co"
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1eWZicGZmd2l6bGxyZnNjc2ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTQ0NTk1OTQsImV4cCI6MTk3MDAzNTU5NH0.w9CI1HRw1NqZC281TVHk4HGSgHhHKhid3qkuNUj0w44'

export const supabaseAuthentication = createClient(SUPABASE_URL, SUPABASE_KEY);


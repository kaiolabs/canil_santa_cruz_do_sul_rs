import { createClient } from "@supabase/supabase-js";


const SUPABASE_URL = "https://buyfbpffwizllrfscsfi.supabase.co"
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1eWZicGZmd2l6bGxyZnNjc2ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTQ0ODMwNTIsImV4cCI6MTk3MDA1OTA1Mn0.o-PDxWo_QwuKNypM2R_al3D5Ky8zyi8Z67zdzK0mCjM'
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);


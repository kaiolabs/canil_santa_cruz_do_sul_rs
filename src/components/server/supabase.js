import { createClient } from "@supabase/supabase-js";


const SUPABASE_URL = "https://buyfbpffwizllrfscsfi.supabase.co"
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1eWZicGZmd2l6bGxyZnNjc2ZpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1NDIyMDQzNiwiZXhwIjoxOTY5Nzk2NDM2fQ.34bGove3NO4F04ImQRvooXiVY9P1aWPdfGUhvJMBvF4'

export const supabase = createClient(SUPABASE_URL, SERVICE_KEY);


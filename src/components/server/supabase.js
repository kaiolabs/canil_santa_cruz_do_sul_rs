import { createClient } from "@supabase/supabase-js";


const SUPABASE_URL = "https://buyfbpffwizllrfscsfi.supabase.co"
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1eWZicGZmd2l6bGxyZnNjc2ZpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1NDQ1OTU5NCwiZXhwIjoxOTcwMDM1NTk0fQ.nLdXCbNJMYQmLBrVocTU36AzLGU44m-ATtYtAknqzKs'
export const supabase = createClient(SUPABASE_URL, SERVICE_KEY);


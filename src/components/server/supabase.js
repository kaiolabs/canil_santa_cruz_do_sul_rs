import { createClient } from "@supabase/supabase-js";


const SUPABASE_URL = "https://buyfbpffwizllrfscsfi.supabase.co"
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1eWZicGZmd2l6bGxyZnNjc2ZpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1NDQ4MjY3MCwiZXhwIjoxOTcwMDU4NjcwfQ.yGejnq8r0SwRFrBcwgcDgh0skH-kEE7cl6MQPd-kkYE'
export const supabase = createClient(SUPABASE_URL, SERVICE_KEY);


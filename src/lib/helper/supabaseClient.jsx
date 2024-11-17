import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
    "https://hntxmejbtfigwktxitka.supabase.co", 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhudHhtZWpidGZpZ3drdHhpdGthIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE2NTU0OTYsImV4cCI6MjA0NzIzMTQ5Nn0.9SKBdkM_2JfDa-AWUTeS9QZhDH3xe-KBXzFjJWQ4X-s"
);



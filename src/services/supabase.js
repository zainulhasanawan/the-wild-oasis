import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://iqolzskdsscbeojanhuy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlxb2x6c2tkc3NjYmVvamFuaHV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY2ODgzOTEsImV4cCI6MjAzMjI2NDM5MX0.LuR6qZJYs8duJ_4LIwXvbQ-C2_zv3sFyJhiGVVxkwXw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

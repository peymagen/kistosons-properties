import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Property {
  id: string;
  title: string;
  type: string;
  location: string;
  price: string;
  area: string | null;
  description: string | null;
  status: string;
  featured: boolean;
  created_at: string;
  updated_at: string;
  image?: string | null;   // ← added
  beds?: number | null;    // ← added
  baths?: number | null;   // ← added
  rating?: number | null;  // ← added
}

import { createClient } from '@supabase/supabase-js';
import localMatches from '../app/data/matches.json'; // Fallback local data

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null;

// Helper function to get matches seamlessly
export async function getMatches() {
  if (supabase) {
    const { data, error } = await supabase.from('matches').select('*').order('date', { ascending: true });
    if (error) {
      console.error('Error fetching from Supabase:', error);
      return [];
    }
    return data;
  }
  
  // Fallback to local JSON if Supabase is not configured yet
  console.warn('Supabase not configured. Using local matches.json data.');
  return localMatches;
}

export async function getMatchById(id) {
  if (supabase) {
    const { data, error } = await supabase.from('matches').select('*').eq('id', id).single();
    if (error) {
      console.error(`Error fetching match ${id} from Supabase:`, error);
      return null;
    }
    return data;
  }
  
  // Fallback
  return localMatches.find(m => m.id === id) || null;
}

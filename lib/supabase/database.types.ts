// Tipos de la base, con la forma que genera `supabase gen types typescript`.
// Para regenerarlos: npx supabase gen types typescript --project-id <ref> > lib/supabase/database.types.ts

export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      leads: {
        Row: {
          id: string;
          created_at: string;
          nombre: string;
          whatsapp: string;
          email: string;
          interes: string;
          nivel: string | null;
          objetivo: string | null;
          acepta_terminos: boolean;
          source: string;
          status: string;
        };
        Insert: {
          id?: string;
          created_at?: string;
          nombre: string;
          whatsapp: string;
          email: string;
          interes: string;
          nivel?: string | null;
          objetivo?: string | null;
          acepta_terminos: boolean;
          source?: string;
          status?: string;
        };
        Update: {
          id?: string;
          created_at?: string;
          nombre?: string;
          whatsapp?: string;
          email?: string;
          interes?: string;
          nivel?: string | null;
          objetivo?: string | null;
          acepta_terminos?: boolean;
          source?: string;
          status?: string;
        };
        Relationships: [];
      };
    };
    Views: { [_ in never]: never };
    Functions: { [_ in never]: never };
    Enums: { [_ in never]: never };
    CompositeTypes: { [_ in never]: never };
  };
};

export type Tables<T extends keyof Database["public"]["Tables"]> = Database["public"]["Tables"][T]["Row"];
export type TablesInsert<T extends keyof Database["public"]["Tables"]> = Database["public"]["Tables"][T]["Insert"];

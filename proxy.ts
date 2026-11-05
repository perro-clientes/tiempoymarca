import { updateSession } from "@/lib/supabase/proxy";
import { type NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  // El sitio es público: el proxy solo corre en las rutas de staff.
  matcher: ["/protected/:path*", "/auth/:path*"],
};

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  // El registro está cerrado: las cuentas de staff se crean desde Supabase.
  async redirects() {
    return [
      { source: "/auth/sign-up", destination: "/auth/login", permanent: false },
      {
        source: "/auth/sign-up-success",
        destination: "/auth/login",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

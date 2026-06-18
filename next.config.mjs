/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Requerido para Docker y Google Cloud Run
  reactCompiler: true,
};

export default nextConfig;

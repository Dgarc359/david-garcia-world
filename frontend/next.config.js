/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: "/",
  cleanDistDir: true,
  // assetPrefix: ".",
  distDir: "out",
  generateBuildId: async () => {
    if(process.env.BUILD_ID) {
      return process.env.BUILD_ID
    } else {
      return new Date().getTime().toString();
    }
  },
}

module.exports = nextConfig

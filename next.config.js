/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'wallpapercave.com',
          },

          {
            protocol:"https",
            hostname:'i.dummyjson.com',
            pathname:'/data/products/**'
          }
        ],
      },
}

module.exports = nextConfig

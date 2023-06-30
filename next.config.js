/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["upcdn.io", "replicate.delivery", 'analytics.minfuel.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'analytics.minfuel.com',
        port: '',
        pathname: '/api/files/n4sfebjxm43jxvc/vryx5af99g6nqrx/icon_image_not_found_free_vector_259BQHTtI2.jpg',
      },
    ],
  },
};

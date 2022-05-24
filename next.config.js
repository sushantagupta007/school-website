/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  redirects: async () => [
    {
      source: '/signin',
      destination: '/',
      permanent: false,
    },
  ],
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  staticPageGenerationTimeout: 300,
  images: {
    domains: [
      'www.notion.so',
      'notion.so',
      'images.unsplash.com',
      'pbs.twimg.com',
      'abs.twimg.com',
      's3.us-west-2.amazonaws.com',
      'otmaneboughaba.com'
    ],
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },
  // headers: {
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  //   'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  // }
})

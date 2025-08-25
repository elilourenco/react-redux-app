/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { 
    domains: ['picsum.photos'],
    contentDispositionType: 'attachment',
 
    loader: 'default',
    path: '/_next/image',
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4000',
        pathname: '/**',
      },
      { 
        protocol: 'https', 
        hostname: 'picsum.photos', 
        pathname: '/id/**' 
      },
      { 
        protocol: 'https', 
        hostname: 'images.unsplash.com', 
        pathname: '/**' 
      },
      { 
        protocol: 'https', 
        hostname: 'source.unsplash.com', 
        pathname: '/**' 
      },
    ],
  },
  
};

export default nextConfig;
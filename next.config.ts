/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "w0.peakpx.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "images.pexels.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "plus.unsplash.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;

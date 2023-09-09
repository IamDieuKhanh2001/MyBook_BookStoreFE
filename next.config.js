/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    modularizeImports: {
        '@mui/icons-material/?(((\\w*)?/?)*)': {
            transform: '@mui/icons-material/{{ matches.[1] }}/{{member}}'
        },
    },
    trailingSlash: true, //Current not work in netlify
}

module.exports = nextConfig

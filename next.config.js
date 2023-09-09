/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    modularizeImports: {
        '@mui/icons-material/?(((\\w*)?/?)*)': {
            transform: '@mui/icons-material/{{ matches.[1] }}/{{member}}'
        },
    },
    trailingSlash: true,
}

module.exports = nextConfig

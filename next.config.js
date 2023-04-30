// const path = require('path');
// const transpileModules = require('next-transpile-modules')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: '',
      }
    ],
  },

  // webpack: (config, options) => {
    // This fixes the invalid hook React error which
    // will occur when multiple versions of React is detected
    // This can happen since common project is also using Next (which is using React)
    // const reactPaths = {
    //     react: path.join(__dirname, "node_modules/react"),
    //    'react-dom': path.join(__dirname, "node_modules/react-dom"),
    // };
    // const reactPath = path.join(__dirname, "./node_modules/react");
    // config.resolve = {
    //     ...config.resolve,
    //     alias: {
    //         ...config.resolve.alias,
    //         ...reactPath,
    //     },
    // };
    
    // const withTranspileModules = transpileModules(["@glrodasz/components"])

    // if(options.isServer){
    //   config.externals = ["react", ...config.externals]
    // }

    // config.resolve.alias["react"] = reactPath
//     return config;
// },
}

module.exports = nextConfig

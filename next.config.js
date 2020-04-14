const {PHASE_DEVELOPMENT_SERVER} = require('next/constants')
const withLess = require('@zeit/next-less')
const path = require('path')
module.exports = (phase, {defaultConfig}) => {
  console.log('phase', phase)
  // if(phase === PHASE_DEVELOPMENT_SERVER) {
  //   return withLess({
  //     /* development only config options here */
  //     pageExtensions: ['jsx', 'js'],
  //     publicRuntimeConfig: { // Will be available on both server and client
  //       env: process.env // Pass through env variables
  //     }
  //   })
  // }

  return {
    pageExtensions: ['jsx', 'js'],
    webpack (config, {defaultLoaders}) {
      Object.assign(config.resolve.alias, {
        '@': path.resolve(__dirname)
      })
      config.module.rules.push({
        test: /\.less/,
        use: [
          defaultLoaders.babel,
          {
            loader: require('styled-jsx/webpack').loader,
            options: {
              type: 'scoped'
            }
          },
          {
            loader: 'less-loader',
            options: {
              modifyVars: {
                // or
                // 'hack': `true; @import "your-less-file-path.less";`, // Override with less file
              },
              javascriptEnabled: true
            }
          }
        ]
      })
      return config
    }
  }
}

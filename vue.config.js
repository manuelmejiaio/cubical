module.exports = { baseUrl: process.env.BASE_URL }
// const path = require('path')
// const PrerenderSPAPlugin = require('prerender-spa-plugin')
// const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

// module.exports = {
//   configureWebpack: (config) => {
//     if (process.env.NODE_ENV !== 'production') return

//     return {
//       plugins: [
//         new PrerenderSPAPlugin({
//           staticDir: path.join(__dirname, 'docs'),
//           routes: ['/', '/services', '/contact'],
//           minify: {
//             collapseBooleanAttributes: true,
//             collapseWhitespace: true,
//             decodeEntities: true,
//             keepClosingSlash: true,
//             sortAttributes: true
//           },
//           renderer: new Renderer({ headless: true })
//         })
//       ]
//     }
//   }
// }

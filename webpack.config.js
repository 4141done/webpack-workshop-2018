const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

// SPA
module.exports = (env) => {
  const envConfig = require(`./webpack.${env.mode}`);
  console.log('envConfg', envConfig);
  console.log('env config', envConfig.module.rules);
  return webpackMerge({mode: env.mode}, commonConfig, envConfig);
};

// // With postbacks
// module.exports = {
//   entry: {
//     profile: './src/profile',
//     serp: './src/serp',
//   },

//   output: {
//     path: path.join(__dirname, 'dist'),
//     filename: '[name].poop.js',
//   },
// }
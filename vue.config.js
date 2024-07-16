// module.exports = {
//   pages: {
//       index: {
//           //入口
//           entry: 'src/main.js',
//       },
//   },
//   //关掉默认的语法检查
//   lintOnSave: false,
//   //开启代理服务器
//   devServer: {
//     //转发给谁写谁的
//     //方法1
//     // proxy: 'http://localhost:5000'
//     proxy: {
//       //想走代理前面加api，不想走代理前缀不加
//       '/api': {
//         target: 'http://localhost:8000',
//         pathRewrite:{'^/api':''},
//         ws: true,
//         changeOrigin: true
//       },
//       '/qiche': {
//         target: 'http://localhost:5001',
//         pathRewrite:{'^/qiche':''},
//         ws: true,
//         changeOrigin: true
//       }
//     }
//   }
//   }
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000', // Flask服务器地址
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};

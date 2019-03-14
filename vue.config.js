const isProd = process.env.NODE_ENV === 'production'
const path = require('path')

module.exports = {
  // 部署应用的基本URL, 相当于webpack的output.publicPath
  baseUrl: isProd ? '/' : '/',

  // 输出路径, 相当于webpack的output.path
  outputDir: 'dist',

  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: 'static',

  // webpack配置, chainWebpack可以替代此处
  configureWebpack: {
    plugins: []
  },

  // Babel 显式转译node_modules中的一个依赖
  transpileDependencies: [],

  // REM: 生产环境不构建sourcemap
  productionSourceMap: false,

  css: {
    loaderOptions: {
      css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: isProd,
        // 开启 CSS source maps?
        sourceMap: !isProd,
        // css-modules: https://vue-loader.vuejs.org/zh/guide/css-modules.html#%E7%94%A8%E6%B3%95
        modules: false,
        // 自定义生成的类名
        localIdentName: '[name]-[hash]',
        camelCase: 'only'
      },
      postcss: {
        // 这里的选项会传递给 postcss-loader
      },
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.scss` 这个文件
        data: `@import "@/assets/scss/pub/variable.scss";`
      }
    }
  },

  // 给.vue文件添加global.scss
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/assets/scss/global.scss')
      ]
    }
  },

  chainWebpack: config => {
    // 1.内联文件的大小限制图片大小为10kb
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, {
        limit: 10240
      }))

    // 2.svg
    const svgRule = config.module.rule('svg')
    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    svgRule.uses.clear()
    // 添加要替换的 loader
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')

    // 3.html-plugin
    config
      .plugin('html')
      .tap(args => {
        args[0].template = path.resolve(__dirname, 'public/index.html')
        return args
      })
  },

  // 接口转发
  devServer: {
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: '/public/index.html' },
        // { from: /^\/subpage/, to: '/views/subpage.html' },
        { from: /./, to: '/public/404.html' }
      ]
    },
    proxy: {
      '/api': {
        target: 'http://hnseal.cn/sealsite/4100', // 接口的域名
        // secure: false,  // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        pathRewrite: {
          // '^/api': ''
        }
      }
    }
  }
}

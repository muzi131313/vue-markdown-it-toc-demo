module.exports = {
  // https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/babel-preset-app
  presets: [
    ['@vue/app',
      {
        // doc: https://cli.vuejs.org/zh/guide/browser-compatibility.html#usebuiltins-usage
        // polyfills: https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/babel-preset-app#polyfills
        // default: ['es6.array.iterator', 'es6.promise', 'es7.promise.finally']
        polyfills: [
          'es6.array.iterator',
          'es6.promise',
          'es7.promise.finally'
        ]
        // `useBuiltIns: 'usage'`为默认情况, 'entry'会传入所有的
        // doc: https://new.babeljs.io/docs/en/next/babel-preset-env.html#usebuiltins-usage
        // useBuiltIns: 'entry'
      }
    ]
  ]
}

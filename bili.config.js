module.exports = {
  output: {
    format: [
      'cjs-min',
      'es-min',
      'umd-min'
    ],
    moduleName: 'VueTinyLazyloadImg'
  },
  input: './src/vue-tiny-lazyload-img.js',
  externals: ['vue'],
  plugins: {
    vue: {
      css: false,
      template: {
        isProduction: true,
        compilerOptions: {
          preserveWhitespace: false
        }
      }
    }
  }
};

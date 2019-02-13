module.exports = {
  output: {
    format: ['umd', 'es', 'cjs', 'umd-min', 'iife'],
    moduleName: 'VueTinyLazyloadImg',
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

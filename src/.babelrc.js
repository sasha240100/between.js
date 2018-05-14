module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        browser: ['last 2 versions', 'safari >= 7']
      },
      modules: false
    }]
  ]
};

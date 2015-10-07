export default {
  scripts: {
    client: './src/app/client.js',
    input: [
      './src/app/**/*.js',
      './src/app/**/*.jsx'
    ],
    watch: [
      './src/app/server.js',
      './src/app/client.js',
      './src/app/**/*.jsx',
      './src/app/routes.js'
    ]
  },
  styles: {
    main: './src/styles/app.styl',
    input: [
      './src/styles/**/*.styl',
      '!./src/styles/base/normalize.styl'
    ],
    output: './build/public/app.css',
    watch: [
      './src/styles/**/*.styl'
    ]
  },
  output: './build/public'
};

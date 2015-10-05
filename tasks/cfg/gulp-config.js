export default {
  scripts: {
    client: './src/app/client/index.js',
    input: [
      './src/app/**/*.js',
      './src/app/**/*.jsx'
    ],
    watch: [
      './src/app/server/index.js',
      './src/app/client/index.js',
      './src/app/shared/components/**/*.jsx',
      './src/app/shared/routes.js'
    ]
  },
  styles: {
    main: './src/styles/app.styl',
    input: [
      './src/styles/**/*.styl',
      './src/app/shared/components/**/*.styl',
      '!./src/styles/base/normalize.styl'
    ],
    watch: [
      './src/styles/**/*.styl',
      './src/app/shared/components/**/*.styl'
    ]
  },
  output: './build/public'
};

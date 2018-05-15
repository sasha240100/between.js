import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: './src/between.js',

  output: {
    format: 'umd',
    file: './build/between.js',
    name: 'between'
  },

  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
    ...(process.env.NODE_ENV === 'production' ? [] : [
      serve({
        open: true,
        contentBase: ['./', './examples'],
        port: 8080
      })
    ])
  ]
}

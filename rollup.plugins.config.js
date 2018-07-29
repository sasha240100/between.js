import babel from 'rollup-plugin-babel';
// import serve from 'rollup-plugin-serve';
import alias from 'rollup-plugin-alias';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: './plugins/dom-color.js',
  external: ['../src/between'],

  output: {
    format: 'umd',
    file: './build/dom-color.between.js',
    name: 'Between._plugins.color',
    globals: {
      '../src/between': 'Between'
    }
  },

  plugins: [
    {
      transform(code, id) {
        return {
          code: code.replace('../src/between', 'between')
        };
      }
    },
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
};

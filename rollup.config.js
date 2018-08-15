import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import plugins from './rollup.plugins.config';
import {uglify} from 'rollup-plugin-uglify';

export default [
  {
    input: './src/between.js',

    output: {
      format: 'umd',
      file: './build/between.js',
      name: 'Between',
      banner: `/* Between.js v${require('./package.json').version} */`
    },

    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**'
      }),
      commonjs(),
      ...(process.env.NODE_ENV === 'production' ? [
        uglify({
          output: {
            comments(node, comment) {
              const {type, value} = comment;

              if (type === 'comment2')
                return /Between\.js/i.test(value);
            }
          }
        })
      ] : [
        serve({
          open: true,
          contentBase: ['./', './examples'],
          port: 8080
        })
      ])
    ]
  },
  plugins
];

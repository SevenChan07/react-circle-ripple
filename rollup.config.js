import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/react-circle-ripple.umd.js',
    format: 'umd',
    name: 'ReactCircleRipple',
  },
  format: 'umd',
  moduleName: 'ReactCircleRipple', 
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
  external: ['react', 'prop-types', 'styled-components'],
}
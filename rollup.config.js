/* eslint-disable sort-keys */
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import {terser} from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';
import flow from 'rollup-plugin-flow';
import pkg from './package.json';

export default [
    // {
    //     input: 'src/main.js',
    //     external: ['ramda'],
    //     output: {
    //         name: 'Logger',
    //         file: pkg.browser,
    //         format: 'umd',
    //     },
    //     plugins: [
    //         flow(),
    //         babel(),
    //         resolve(),
    //         commonjs(),
    //         terser(),
    //     ],
    // },
    // {
    //     input: 'src/main.js',
    //     external: ['ramda'],
    //     output: [
    //         {file: pkg.module, format: 'es'},
    //     ],
    //     plugins: [
    //         flow(),
    //         babel(),
    //     ],
    // },
    {
        input: 'src/main.js',
        external: ['ramda'],
        output: [
            {file: pkg.main, format: 'cjs'},
        ],
        plugins: [
            // flow(),
            babel(),
            terser(),
        ],
    },
];
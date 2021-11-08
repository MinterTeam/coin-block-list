// import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
// import resolve from '@rollup/plugin-node-resolve';
//@TODO replace with rollup-plugin-polyfill-node when it ready
// import builtins from 'rollup-plugin-node-builtins';
// import globals from 'rollup-plugin-node-globals';
// import babel from '@rollup/plugin-babel';

export default {
    input: 'build/index.js',
    output: {
        file: 'dist/blocklist.js',
        format: 'umd',
        name: 'minterBlockList',
        exports: 'auto',
    },
    plugins: [
        // old acorn in rollup-plugin-node-globals doesn't support new syntax
        // commonjs(),
        json(),
        // globals(),
        // resolve({
        //     browser: true,
        //     preferBuiltins: false,
        // }),
    ],
};

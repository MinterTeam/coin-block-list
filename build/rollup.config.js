import json from '@rollup/plugin-json';

export default {
    input: 'build/index.js',
    output: {
        file: 'dist/blocklist.js',
        format: 'umd',
        name: 'minterBlockList',
        exports: 'auto',
    },
    plugins: [
        json(),
    ],
};

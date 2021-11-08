import json from '@rollup/plugin-json';

export default {
    input: 'build/index.js',
    output: {
        file: 'dist/blocklist.cjs',
        format: 'cjs',
        exports: 'auto',
    },
    plugins: [
        json(),
    ],
};

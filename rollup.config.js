import resolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import commonjs from '@rollup/plugin-commonjs';
import html from '@web/rollup-plugin-html';

export default {
    input: 'index.html',
    output: { dir: 'dist' },
    plugins: [
        esbuild({
            minify: false
        }),
        resolve(),
        commonjs(),
        html()
    ]
}

import {fromRollup} from '@web/dev-server-rollup';
import {esbuildPlugin} from '@web/dev-server-esbuild';

import _commonjs from '@rollup/plugin-commonjs';

const commonjs = fromRollup(_commonjs);

export default {
    nodeResolve: {
        exportConditions: ['development'],
    },
    appIndex: 'index.html',
    plugins: [
        esbuildPlugin({ts: true, target: 'esnext'}),
        commonjs(),
    ],
};

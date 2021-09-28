import { fromRollup } from '@web/dev-server-rollup';
import { esbuildPlugin } from '@web/dev-server-esbuild';

import _commonjs from '@rollup/plugin-commonjs';
import { nodeResolve as _nodeResolve } from '@rollup/plugin-node-resolve';

const commonjs = fromRollup(_commonjs);
const nodeResolve = fromRollup(_nodeResolve);

export default {
    appIndex: 'index.html',
    plugins: [
        nodeResolve({
            exportConditions: ['development']
        }),
        commonjs(),
        esbuildPlugin({ts: true, target: 'esnext'}),
    ],
};

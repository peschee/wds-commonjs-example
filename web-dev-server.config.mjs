import { fromRollup } from '@web/dev-server-rollup';

import _commonjs from '@rollup/plugin-commonjs';

const commonjs = fromRollup(_commonjs);

export default {
    nodeResolve: {
        exportConditions: ['development'],
    },
    appIndex: 'index.html',
    plugins: [
        commonjs(),
    ],
};

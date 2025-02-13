import type { CommandContext } from '../types.js';

import child_process from 'node:child_process';
import path from 'node:path';
import url from 'node:url';

export default ({ program }: CommandContext) => {
    program
        .command('test')
        .description('test a component or components')
        .option('--coverage', 'whether to generate test coverage', false)
        .argument('[string]', 'pattern', '')
        .action(async (pattern: string) => {
            const __filename = url.fileURLToPath(import.meta.url);
            const __dirname = path.dirname(__filename);
            const filePath = path.resolve(`${__dirname}../../../config/jest.config.js`);

            const results = child_process.spawnSync(
                'npx',
                ['--node-options="--experimental-vm-modules"', 'jest', `--config=${filePath}`, pattern],
                {},
            );

            const stdErr = results.stderr.toString();

            console.log(results.stdout.toString());
            if (stdErr) {
                console.error(stdErr);
                process.exit(1);
            }
        });
};

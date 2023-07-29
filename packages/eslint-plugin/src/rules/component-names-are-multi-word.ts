import { AST_NODE_TYPES, TSESTree } from '@typescript-eslint/utils';
import { RuleListener, RuleModule } from '@typescript-eslint/utils/ts-eslint';
import { toKebabCase } from 'js-convert-case';

import createEslintRule from '../utils/create-eslint-rule';
import getDefinitionKey from '../utils/get-definition-key';
import { TYBALT_COMPONENT_DEFINITION } from '../utils/selectors';

export const RULE_NAME = 'component-names-are-multi-word';
export type MessageIds = 'singleWordComponentName';
export type Options = [];

const rule: RuleModule<'singleWordComponentName', never[], RuleListener> = createEslintRule({
    name: RULE_NAME,
    meta: {
        type: 'problem',
        docs: {
            description: 'ensure tybalt component names are multi-word',
            recommended: 'strict',
        },
        schema: [],
        messages: {
            singleWordComponentName: 'Component names must be multi-word.',
        },
    },
    defaultOptions: [],
    create: (context) => {
        return {
            [TYBALT_COMPONENT_DEFINITION](node: TSESTree.CallExpression) {
                const definition = node.arguments[0];

                if (definition.type !== AST_NODE_TYPES.ObjectExpression) {
                    return;
                }

                const nameProperty = getDefinitionKey({ key: 'name', node: definition });

                if (
                    !nameProperty ||
                    nameProperty.type !== AST_NODE_TYPES.Property ||
                    nameProperty.value.type !== AST_NODE_TYPES.Literal
                ) {
                    return;
                }

                const name = nameProperty.value.value;

                if (typeof name !== 'string') {
                    return;
                }

                const kebabCaseName = toKebabCase(name);

                if (!kebabCaseName.includes('-')) {
                    context.report({
                        messageId: 'singleWordComponentName',
                        loc: node.loc,
                    });
                }
            },
        };
    },
});

export default rule;

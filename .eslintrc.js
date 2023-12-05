module.exports = {
    'env': {
        'browser': true,
        'node': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'globals': {
        'browser': true,
        'require': true,
        '$': true,
        '$$': true,
        'module': true,
        'describe': true,
        'it': true,
        'after': true,
        'afterEach': true
    },
    'overrides': [
        {
            'env': {
                'node': true
            },
            'files': [
                '.eslintrc.{js,cjs}'
            ],
            'parserOptions': {
                'sourceType': 'script'
            }
        }
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
        'no-multi-spaces': ['error', { 'ignoreEOLComments': true }],
        'comma-dangle': ['error', 'never'],
        'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 1 }]
    }
};

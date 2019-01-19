module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2017
    },
    extends: [
        'airbnb',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
    ],
    globals: {
        document: true,
        React: true,
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: [
                    '.js',
                    '.jsx'
                ]
            }
        }
    },
    rules: {
        'jsx-quotes': ['error', 'prefer-single'],
        'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
        'react/prop-types': 0,
        'jsx-a11y/label-has-for': [2, { "required": { "some": ["nesting", "id"] } }],
        'react/react-in-jsx-scope': 0,
    }
}
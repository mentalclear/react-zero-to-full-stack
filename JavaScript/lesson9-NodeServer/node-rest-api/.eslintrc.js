module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb-base"
    ],
    "parserOptions": {
        "ecmaVersion": 2020,
        "sourceType": "module"
    },
    "plugins": [
        "immutable",
    ],
    "rules": {
        indent: ["error", 4],
        'immutable/no-mutation': 'error',
    }
};

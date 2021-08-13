const path = require('path');

const WebpackBar = require('webpackbar');
const CracoAntDesignPlugin = require('craco-antd');
const CracoLessPlugin = require('craco-less');

process.env.BROWSER = 'none';

module.exports = {
    webpack: {
        plugins: [new WebpackBar({ profile: true })],
    },
    plugins: [
        {
            plugin: CracoAntDesignPlugin,
            options: {
                customizeThemeLessPath: path.join(__dirname, 'src/styles/theme.less'),
            },
        },
        {
            plugin: CracoLessPlugin,
            options: {
                cssLoaderOptions: {
                    modules: { localIdentName: '[local]_[hash:base64:5]' },
                },
                modifyLessRule: function(lessRule, _context) {
                    lessRule.test = /\.(module)\.(less)$/;
                    lessRule.exclude = path.join(__dirname, 'node_modules');
                    return lessRule;
                },
            },
        },
    ],
};

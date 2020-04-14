module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    env: {
        development : {
            plugins: [['module-resolver', {
                alias: {
                    components: './components/',
                    utils: './utils/',
                    'common-styles': './styles/commonStyles/',
                    assets: './assets/',
                    store: './store/',
                }
            }]]
        }
    }
};

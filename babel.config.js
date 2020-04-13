module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    env: {
        development : {
            plugins: [['module-resolver', {
                alias: {
                    screens: './components/screens/',
                    components: './components/',
                    utils: './utils/',
                    'common-styles': './styles/commonStyles/',
                    assets: './assets/',
                    forms: './components/forms/',
                    store: './store/',
                }
            }]]
        }
    }
};

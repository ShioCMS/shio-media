
const { addReactRefresh } = require('customize-cra-react-refresh')
const path = require('path');
const {
    override,
    fixBabelImports,
    addLessLoader,
    addBundleVisualizer,
} = require('customize-cra');
const paths = require('react-scripts/config/paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
    paths: function (paths, env) {
        paths.appIndexJs = path.resolve(__dirname, 'components/index.js');
        paths.appSrc = path.resolve(__dirname, 'components');
       
        return paths;
    },
}
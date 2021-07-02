const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
    mode: 'production',
    // Use mode development while changing the application
    entry: './src/index.js',
    output: {
        // Use the path public instead of dist while in development 
        path: path.join( __dirname, 'dist' ),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                options: {
                    presets: [ "@babel/preset-env", "@babel/preset-react" ],
                    plugins: [ "@babel/plugin-proposal-class-properties", "react-hot-loader/babel" ],
                },
                test: /\.js$/,
                exclude: [
                    path.resolve( __dirname, 'node_modules' ),
                    path.resolve( __dirname, 'src/playground' )
                ],
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ],
            } ]
    },
    // devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: path.join( __dirname, 'public' ),
        inline: true,
        host: 'localhost',
        port: 8000,
    },
    plugins: [
        new HtmlWebpackPlugin( {
            template: path.resolve( './public/index.html' ),
        } ),
    ]
};
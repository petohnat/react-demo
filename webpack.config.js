const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const basePath = __dirname;
const HappyPack = require('happypack');
const happyThreadPool = HappyPack.ThreadPool({size: 4});
const pathSeparator = process.platform === "win32" ? "\\" : "/";

module.exports = {
    cache: true,
    context: path.join(basePath, "src"),
    resolve: {
        modules: [path.resolve(basePath, './src'), 'node_modules'], // Enable absolute path imports
        extensions: ['.js', '.ts', '.tsx']
    },
    entry: [path.resolve(__dirname, 'src') + pathSeparator + 'index.tsx'],
    output: {
        path: path.join(basePath, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './dist', // Content base
        inline: true, // Enable watch and live reload
        host: 'localhost',
        port: 8080,
        stats: 'errors-only',
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'happypack/loader?id=typescript',
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                        options: {}
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')({
                                    'overrideBrowserslist': ['> 1%', 'last 2 versions']
                                }),
                            ]
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {}
                    }
                ]
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'happypack/loader?id=assets',
                }]
            }
        ],
    },
    plugins: [
        new HappyPack({
            id: 'typescript',
            threadPool: happyThreadPool,
            loaders: [
                {
                    path: 'ts-loader',
                    query: {
                        happyPackMode: true
                    },
                    options: {
                        useBabel: true,
                        "babelCore": "@babel/core", // needed for Babel v7
                        cacheDirectory: true,
                    },
                },
            ]}),
        new HappyPack({
            id: 'assets',
            threadPool: happyThreadPool,
            loaders: [
                {
                    path: 'url-loader',
                    query: {
                        happyPackMode: true
                    },
                    options: {
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]'
                    }
                },
            ]}),
        //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html', //Name of file in ./dist/
            template: path.resolve(__dirname, 'public') + pathSeparator + 'index.html', //Name of template in ./public
            favicon: path.resolve(__dirname, 'public') + pathSeparator + 'favicon.ico',
            hash: true,
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
    ],
};
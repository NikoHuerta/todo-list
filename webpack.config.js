const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports= {

    mode: 'development',

    output:{
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                  sources: false,
                  minimize: false,  
                },
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /styles.css$/,
                use:[MiniCssExtractPlugin.loader, 'css-loader']

            },
            {
                test:  /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader'
            }

        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            // filename: './index.html',
            inject: 'body',
        }),

        new MiniCssExtractPlugin({
            // filename: '[name].[fullhash].css', //util en produccion, para obligar a refrescar el archivo cada ves que se haga una build
            filename: '[name].css',
            ignoreOrder: false
        }),

        new CopyPlugin({
            patterns: [
              { from: "src/assets/", to: "assets/" },
            ],
          })
    ]
}


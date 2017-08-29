const path = require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
console.log(__dirname);
console.log(path.resolve(__dirname, 'dist'))
//注意是 module.exports  不是module.export
module.exports ={
    entry:{
        app:'./src/index.js',
        print:'./src/print.js'
    },
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist'),
        publicPath: '/'
    },
    devtool: 'inline-source-map',//make it easier to track down errors and warnings
    devServer: {
            contentBase: path.resolve(__dirname,'dist'),
            port:9900,
            compress:true //enable gzip
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'output manage'
        }),
        new CleanWebpackPlugin(['dist'])
    ],
    module:{
        rules:[{
            test:/\.css$/,
            use: ['style-loader','css-loader']
        },{
            test:/\.(jpg|svg|png|gif)$/,
            use:['file-loader']
        },
        {
            test:/\.(woff|woff2|eot|ttf|otf)$/,
            use:['file-loader']
        },{
            test:/\.(csv|tsv)$/,
            use:['csv-loader']
        },
        {
            test: /\.xml$/,
            use: ['xml-loader']
        }
    ]
    }
}
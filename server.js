const express = require('express');
const webpack = require('webpack');
const WebpackDevMiddleware =require('webpack-dev-middleware');
const config = require('./webpack.config.js');

const app = express();
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(WebpackDevMiddleware(compiler,{
    publicPath: config.output.publicPath
}));
const port = 3009
app.listen(port,function(){
    console.log(`server listen on port : ${port}`);
})
var path = require('path');
//注意是 module.exports  不是module.export
module.exports ={
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    }
}
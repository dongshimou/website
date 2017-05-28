var fs = require('fs');
var path = require('path');

var list = function(filePaths) {
    let files = fs.readdirSync(filePaths)
    let result = []
    for (let i in files) {
        if (files[i].includes('.mp3')) {
            let src=filePaths+'/'+files[i]
            // 相对目录         ./static/music/test.mp3
            // 项目为绝对目录    /static/music/test.mp3
            result.push(src.slice(1))
        }
    }
    result = JSON.stringify(result);
    fs.writeFile(filePaths + '/list.json', result);
}
list('./static/music')
module.exports = list;
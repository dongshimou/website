var fs = require('fs');
var path = require('path');
var m2j = require('markdown-to-json');
var markdown = require('markdown').markdown;

var list = function(filePaths) {
    var results = m2j.parse(filePaths, {
        minify: false,
        width: 0,
        outfile: null,
        content: false,
    });
    var obj = JSON.parse(results);
    var arr = [];
    for (var key in obj) {
        var item = obj[key];
        // 限定list预览的正文的长度为100字
        const textLen=100
        item.content=item.content.slice(0,textLen)
        item.content+='...'
        arr.push(item);
    }
    // 时间倒序排列
    arr.sort((a,b)=>{
        return a.date<b.date;
    })
    fs.writeFile(`dist/posts/list.json`, JSON.stringify(arr));
};
var posts = function(filenames) {
    var filePaths = [];
    for (var i = 0; i < filenames.length; i++) {
        var filename = filenames[i];
        var results = m2j.parse([`posts/${filename}`], {
            minify: false,
            width: 0,
            outfile: null,
            content: true,
        });
        results = JSON.parse(results);
        results = results[filename.replace('.md', '')];
        results.content = markdown.toHTML(results.content);
        fs.writeFile(`dist/posts/${filename.replace('.md', '.json')}`, JSON.stringify(results));
        filePaths.push(`posts/${filename}`);
    }
    return filePaths;
};
var create = function(basePath) {
    var filenames = fs.readdirSync(basePath);
    if (!fs.existsSync('dist/posts')) {
        fs.mkdirSync('dist/posts');
    }
    var filePaths = posts(filenames);
    list(filePaths);
};
create('./posts');

module.exports = create;
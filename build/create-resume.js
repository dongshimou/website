var fs = require('fs');
var path = require('path');
var m2j = require('markdown-to-json');
var markdown = require('markdown').markdown;

var resume = function(filenames) {
    var filePaths = [];
    for (var i = 0; i < filenames.length; i++) {
        var filename = filenames[i];
        var results = m2j.parse([`resume/${filename}`], {
            minify: false,
            width: 0,
            outfile: null,
            content: true,
        });
        results = JSON.parse(results);
        results = results[filename.replace('.md', '')];
        results.content = markdown.toHTML(results.content);
        fs.writeFile(`static/${filename.replace('.md', '.json')}`, JSON.stringify(results));
        filePaths.push(`${filename}`);
    }
    return filePaths;
};
var create = function(basePath) {
    var filenames = fs.readdirSync(basePath);
    if (!fs.existsSync('static/')) {
        fs.mkdirSync('static/');
    }
    var filePaths = resume(filenames);
};
create('./resume');

module.exports = create;
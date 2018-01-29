const fs = require('fs');
const path = require('path');

// 在pageDir中寻找各个页面入口
module.exports = function getEntries (pageDir, entryPath, entry) {
    entry = entry || {};
    var pageDirPath = path.join(__dirname, pageDir);
    fs.readdirSync(pageDirPath)
    // 发现文件夹，就认为是页面模块
        .filter(function (f) {
            return fs.statSync(path.join(pageDirPath, f)).isDirectory();
        })
        .forEach(function (f) {
            entry[path.basename(f)] = [pageDir, f, entryPath].join('/');
        });
    return entry;
};

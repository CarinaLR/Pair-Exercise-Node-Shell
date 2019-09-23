const cmd = data.toString().trim()

const pwd = require('./pwd');
const ls = require('./ls');
if (cmd === 'pwd') {
    pwd();
}else if(cmd === 'ls') {
    ls();
}


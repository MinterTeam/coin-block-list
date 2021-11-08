var toml = require('toml');
var fs = require('node:fs');

const data = toml.parse(fs.readFileSync('./data/blocklist.toml'));
data.blockList.sort((a, b) => a.localeCompare(b))
console.log(data);

fs.mkdirSync('./dist', {
    // not throw if exists
    recursive: true,
});
fs.writeFileSync('./dist/blocklist.json', JSON.stringify(data.blockList));


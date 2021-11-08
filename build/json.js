var toml = require('toml');
var fs = require('node:fs');

const data = toml.parse(fs.readFileSync('./data/blocklist.toml'));
data.blockList.sort((a, b) => a.localeCompare(b));
console.log(data);
// throw on duplicates
data.blockList.forEach((symbol, index) => {
    if (symbol === data.blockList[index + 1]) {
        throw new Error(`Block list contains duplicates: ${symbol} at position: ${index + 1}`);
    }
})

fs.mkdirSync('./dist', {
    // not throw if exists
    recursive: true,
});
fs.writeFileSync('./dist/blocklist.json', JSON.stringify(data.blockList));


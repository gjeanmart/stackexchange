var fs = require('fs');
var keccak256 = require('js-sha3').keccak256;

var hash1 = hashFile('sample1.xlsx');
console.log("sample1.xlsx: " + hash1);
var hash2 = hashFile('sample2.xlsx');
console.log("sample2.xlsx: " + hash2);


function hashFile(file) {
    var body = fs.readFileSync(file);
    console.log("##############################");
    console.log(body);
    console.log("##############################");
    console.log(body.toString('base64'));
    console.log("##############################");
    return keccak256(body.toString());
}


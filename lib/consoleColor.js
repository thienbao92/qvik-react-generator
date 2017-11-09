exports.error =(text) =>{
console.log("\x1b[31m%s\x1b[0m", text);
}
exports.warn =(text) =>{
console.log("\x1b[33m%s\x1b[0m", text);
}
exports.success =(text) =>{
console.log("\x1b[32m%s\x1b[0m", text);
}


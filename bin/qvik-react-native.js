#!/usr/bin/env node
var args = process.argv.splice(process.execArgv.length + 2);
var name = args[0];

var lib = require("../lib/index.js");

switch (name) {
  case "init":
    lib.init();
    break;
  case "smart-component":
    lib.smartComponent(args[1]);
    break;
  default:
    console.error("Unable to execute command", name);
    break;
}

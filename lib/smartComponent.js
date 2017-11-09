var fs = require("fs");
var path = require("path");
var mkdirp = require("mkdirp");
var log = require("./consoleColor");
var chars = require("./chars");
const smartComponent = componentName => {
  const srcPath = "./src/components";
  let dir = srcPath + "/" + componentName;
  if (!fs.existsSync(srcPath)) {
    log.error(
      "Unable to find " +
        srcPath +
        " folder, try to direct to project root folder"
    );
    return;
  }

  if (!fs.existsSync(dir)) {
    fs.mkdir(dir, err => {
      var wstream = fs.createWriteStream(dir + "/helloworld.js");

      // wstream.write(
      //   "console.log" +
      //     chars.open_parenThesis +
      //     "'hello world'" +
      //     chars.close_parenThesis +
      //     chars.return +
      //     "console.log" +
      //     chars.open_parenThesis +
      //     "'hello world'" +
      //     chars.close_parenThesis
      // );

      wstream.write('consle.log("Hello world");');
      wstream.end();
    });
    log.success(
      "smart component created at direction" + dir + " name " + componentName
    );
    return;
  }
  log.error("smart component folder named " + componentName + " exist");
  console.log("consle.log('csdc')".toString("utf8"));
};
module.exports = smartComponent;

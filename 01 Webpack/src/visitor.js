const commonPart = require("./superlog");
const style = require("./styles/main.scss");

console.log('Visitor laded...');
document.writeln('Visitor laded...');

commonPart.superLog(new Date());

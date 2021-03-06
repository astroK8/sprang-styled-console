"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function styledConsoleLog() {
    var _args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        _args[_i] = arguments[_i];
    }
    var argArray = [];
    if (arguments.length) {
        var startTagRe = /<span\s+style=(['"])([^'"]*)\1\s*>/gi;
        var endTagRe = /<\/span>/gi;
        var reResultArray;
        argArray.push(arguments[0].replace(startTagRe, '%c').replace(endTagRe, '%c'));
        while (reResultArray = startTagRe.exec(arguments[0])) {
            argArray.push(reResultArray[2]);
            argArray.push('');
        }
        // pass through subsequent args since chrome dev tools does not (yet) support console.log styling of the following form: console.log('%cBlue!', 'color: blue;', '%cRed!', 'color: red;');
        for (var j = 1; j < arguments.length; j++) {
            argArray.push(arguments[j]);
        }
    }
    console.log.apply(console, argArray);
}
exports.styledConsoleLog = styledConsoleLog;
function getRedString(s) {
    return '<span style="color:hsl(0, 100%, 90%);background-color:hsl(0, 100%, 50%);"> ' + s + ' </span>';
}
exports.getRedString = getRedString;
function getOrangeString(s) {
    return '<span style="color:hsl(39, 100%, 85%);background-color:hsl(39, 100%, 50%);"> ' + s + ' </span>';
}
exports.getOrangeString = getOrangeString;
function getYellowString(s) {
    return '<span style="color:hsl(60, 100%, 35%);background-color:hsl(60, 100%, 50%);"> ' + s + ' </span>';
}
exports.getYellowString = getYellowString;
function getGreenString(s) {
    return '<span style="color:hsl(120, 100%, 60%);background-color:hsl(120, 100%, 25%);"> ' + s + ' </span>';
}
exports.getGreenString = getGreenString;
function getBlueString(s) {
    return '<span style="color:hsl(240, 100%, 90%);background-color:hsl(240, 100%, 50%);"> ' + s + ' </span>';
}
exports.getBlueString = getBlueString;
function getPurpleString(s) {
    return '<span style="color:hsl(300, 100%, 85%);background-color:hsl(300, 100%, 25%);"> ' + s + ' </span>';
}
exports.getPurpleString = getPurpleString;
function getBlackString(s) {
    return '<span style="color:hsl(0, 0%, 80%);background-color:hsl(0, 0%, 0%);"> ' + s + ' </span>';
}
exports.getBlackString = getBlackString;
function getGrayString(s) {
    return '<span style="color:hsl(0, 0%, 0%);background-color:hsl(0, 0%, 80%);"> ' + s + ' </span>';
}
exports.getGrayString = getGrayString;
//# sourceMappingURL=styled-console.js.map
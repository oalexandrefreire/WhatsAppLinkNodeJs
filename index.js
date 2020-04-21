"use strict";
exports.__esModule = true;
function Hello(name) {
    return "Hello " + name + "!";
}
exports.Hello = Hello;
function Send(phone, text) {
    var win = window.open("https://wa.me/" + phone + "?text=" + encodeURIComponent(text), '_blank');
    win.focus();
}
exports.Send = Send;
var Compose = /** @class */ (function () {
    function Compose() {
    }
    Compose.prototype.writeText = function (text, lineBreakAfter, lineBreakBefore) {
        if (lineBreakAfter === void 0) { lineBreakAfter = 0; }
        if (lineBreakBefore === void 0) { lineBreakBefore = 0; }
        var lbAfter = "";
        var lbBefore = "";
        for (var i = 0; lineBreakAfter > i; i++) {
            lbAfter += "\n";
        }
        for (var i = 0; lineBreakBefore > i; i++) {
            lbBefore += "\n";
        }
        this._text += lbAfter + text + lbBefore;
    };
    Compose.prototype.getText = function () {
        return this._text;
    };
    return Compose;
}());
exports.Compose = Compose;

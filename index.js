"use strict";
exports.__esModule = true;
var browser_detect_1 = require("browser-detect");
function WMHello(name) {
    return "Hello " + name + "!";
}
exports.WMHello = WMHello;
function WMSend(phone, text) {
    var result = browser_detect_1["default"]();
    if (result.mobile) {
        window.location.replace("whatsapp://send?text=" + encodeURIComponent(text) + "&phone=" + phone);
    }
    else {
        var win = window.open("https://wa.me/" + phone + "?text=" + encodeURIComponent(text), '_blank');
        win.focus();
        // window.open("https://wa.me/"+ phone +"?text=" + encodeURIComponent(text),'');
    }
}
exports.WMSend = WMSend;
var WMCompose = /** @class */ (function () {
    function WMCompose() {
        this._text = "";
    }
    WMCompose.prototype.writeText = function (text, lineBreakBefore, lineBreakAfter) {
        if (text === void 0) { text = ""; }
        if (lineBreakBefore === void 0) { lineBreakBefore = 0; }
        if (lineBreakAfter === void 0) { lineBreakAfter = 0; }
        var lbAfter = "";
        var lbBefore = "";
        for (var i = 0; lineBreakAfter > i; i++) {
            lbAfter += "\n";
        }
        for (var i = 0; lineBreakBefore > i; i++) {
            lbBefore += "\n";
        }
        this._text += (lbBefore != undefined ? lbBefore : "") + (text != undefined ? text : "") + (lbAfter != undefined ? lbAfter : "");
    };
    WMCompose.prototype.getText = function () {
        return this._text != undefined ? this._text : "";
    };
    return WMCompose;
}());
exports.WMCompose = WMCompose;

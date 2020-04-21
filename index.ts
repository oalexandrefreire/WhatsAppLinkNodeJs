export function WMHello(name) {
    return "Hello " + name + "!";
}

export function WMSend(phone, text)
{
  let win = window.open("https://wa.me/"+ phone +"?text=" + encodeURIComponent(text), '_blank');
  win.focus();
}

export class WMCompose {

    private _text: string;

    constructor() {
        this._text = "";
    }

    writeText(text = "", lineBreakBefore = 0,lineBreakAfter = 0)
    {
        let lbAfter = "";
        let lbBefore = "";
        for (let i = 0; lineBreakAfter > i; i++){
            lbAfter += "\n";
        }
        for (let i = 0; lineBreakBefore > i; i++){
            lbBefore += "\n";
        }
        this._text += (lbAfter != undefined ? lbAfter : "") + (text != undefined ? text : "") + (lbBefore != undefined ? lbBefore : "");
    }

    getText(){
        return this._text != undefined ? this._text : "";
    }

}
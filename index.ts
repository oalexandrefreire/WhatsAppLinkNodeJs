import browser from 'browser-detect';

export function WMHello(name) {
    return "Hello " + name + "!";
}

export function WMSend(phone, text)
{
    let result = browser();
    if(result.mobile){
        window.location.replace("whatsapp://send?text=" + encodeURIComponent(text) + "&phone=" + phone);
    }else{
        window.location.replace("https://wa.me/"+ phone +"?text=" + encodeURIComponent(text));
    }
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
        this._text += (lbBefore != undefined ? lbBefore : "") + (text != undefined ? text : "") + (lbAfter != undefined ? lbAfter : "");
    }

    getText(){
        return this._text != undefined ? this._text : "";
    }

}
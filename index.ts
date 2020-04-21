export function Hello(name) {
    return "Hello " + name + "!";
}

export function Send(phone, text)
{
  let win = window.open("https://wa.me/"+ phone +"?text=" + encodeURIComponent(text), '_blank');
  win.focus();
}

export class Compose {

    private _text: any;

    writeText(text, lineBreakAfter = 0, lineBreakBefore = 0)
    {
        let lbAfter = "";
        let lbBefore = "";
        for (let i = 0; lineBreakAfter > i; i++){
            lbAfter += "\n";
        }
        for (let i = 0; lineBreakBefore > i; i++){
            lbBefore += "\n";
        }
        this._text += lbAfter + text + lbBefore;
    }

    getText(){
        return this._text;
    }

}
![npm (scoped)](https://img.shields.io/npm/v/@aninga/whatsapp-manager)
![NPM](https://img.shields.io/npm/l/@aninga/whatsapp-manager)

Management of sending text via URL

# Install
npm install @aninga/whatsapp-manager 

# Usage
```
import * as WA from '@aninga/whatsapp-manager'
or
import {WMCompose, WMSend} from '@aninga/whatsapp-manager';

let example = new WMCompose();
example.writeText("Hello");
example.writeText("line break: before, after",1,1);
example.writeText(":)");
WMSend('5569999999999', example.getText());

WMSend('5569999999999', "other text");

```
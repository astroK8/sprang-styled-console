sprang-styled-console
==================

Output to chrome console with style

## Example

```typescript
import {styledConsoleLog, getRedString, getGreenString}

let redMsg = getRedString('Hello');
let greenMsg = getGreenString('World');

let data={
    value:5;
}

styledConsoleLog(redMsg + ' ' + greenMsg, data);
```






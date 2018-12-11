sprang-styled-console
==================

Output to chrome console with style

## Example

```typescript
import {styledConsoleLog, getRedString, getGreenString} from 'sprang-styled-console';

let redMsg = getRedString('Hello');
let greenMsg = getGreenString('World');

let data={
    value:5;
}

styledConsoleLog(redMsg + ' ' + greenMsg, data);
```






# strfmt

Format strings for Deno and TypeScript.

## About

`strfmt` lets you define format strings and add content into them later, like C or Rust.
Template literals are great, but sometimes you want to define a format and then reuse it
in a concise way later on – `strfmt` lets you do that.

## Usage

```typescript
import strfmt from "https://raw.githubusercontent.com/jahzielv/strfmt/master/strfmat.ts";

let format = "Wait a {0} Doc. Are you {1} me you built a {2} machine!?!";
let output = strfmt(format, "minute", "telling", "time");
console.log(output);

// prints: "Wait a minute Doc. Are you telling me you built a time machine!?!"
```

import strfmt from "./strfmt.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test({
  name: "Basic test",
  fn: () => {
    let fmt = "{0} {0} {1}... it works!";
    assertEquals(
      strfmt(fmt, "Testing", "1, 2, 3"),
      "Testing Testing 1, 2, 3... it works!",
    );
  },
});

Deno.test({
  name: "Objects and template literals",
  fn: () => {
    let obj = { key: "value", abc: 123 };
    let str = "template";
    let fmt = `This is a ${str} {0}, with an object in it: {1}`;
    assertEquals(
      strfmt(fmt, "literal", obj),
      'This is a template literal, with an object in it: {"key":"value","abc":123}',
    );
  },
});

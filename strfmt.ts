/**
 * Formats a string, replacing placeholders with `replacements`.
 * Example:
 *   ```typescript
 *   format("The {0} of the universe is {1}. {1} plus 1 is {2}.", "meaning", 42, 43)
 *   // returns "The meaning of the universe is 42. 42 plus 1 is 43."
 *   ```
 * @param fmt A format string, with placeholders in the following format: `{[0-9]+}`
 * @param replacements Variable number of strings to insert into the format string. Indexed from 0 from left to right.
 */
export default function strfmt(fmt: string, ...replacements: any[]) {
  let ret = fmt;
  replacements.forEach((e, i) => {
    let printVal = e;
    if (typeof e === "object") {
      printVal = JSON.stringify(e);
    }
    ret = ret.replace(new RegExp(`\(\\{${i}\\}\)`, "g"), printVal);
  });

  return ret;
}

# mad-name-generator

MAD Name Generator for gamers
Based on andreasonny83 unique name generator:
https://www.npmjs.com/package/unique-names-generator

This package is vulnerable to Arbitrary Code Execution.
The parameter passed to the function is executed as a command inside a shell, which allows attackers to execute
arbitrary code.

Example:

```js
// index.ts

console.log(generateRandomName('console.log("Hello")'));

```
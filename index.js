
/* 

  RESOLVING -> LOADING -> WRAPPING -> EVALUATION -> CACHING

  I
    1.1 Core modules
    1.2 node_modules

  II
    2.1 filename js | json
    2.2 directory
      2.2.1 package.json -> "main":"./entrypoint.js"
      2.2.2 index js | json

  III
    throw new Error()

*/

const external = require('./abrakadabra')
console.log(external)

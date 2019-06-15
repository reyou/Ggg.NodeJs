### URLs
https://medium.com/dailyjs/threads-in-node-10-5-0-a-practical-intro-3b85a0a3c953
https://nodejs.org/en/download/

### Notes
A few days ago, version 10.5.0 of Node.js was released and one of the 
main features it contained was the addition of initial 
(and experimental) thread support.

$ node --version
v10.14.1

Note that this will only work if you use the --experimental-worker 
flag when executing the script, otherwise the module will not be found.

$ npm install request --save
$ node --experimental-worker index.js

As a final example, I’m going to stick to the same functionality, 
but showing you how you could clean it up a bit and have a more maintainable version.



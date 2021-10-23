//Os module provide a os related utility method and constent.
const os = require('os'); // Require the os module...

// console.log(os.EOL);  // Constent return a new Line charector...

// console.log(os.arch()) // return a archetecture in os like 32bit of 64bit.
// console.log(os.type()) // Return the os Type. Like window NT.
// console.log(os.hostname()); // Return the system name. 

// console.log(os.platform()); // Return the name of the operating system. like win32 is name of the window os

// console.log(os.cpus()); // Return the array of the objects contain info about ligical CPU core. Know more about Nodejs OS moudle.

// console.log(os.endianness()); // Return the identifying the endianness of the cpu;

// console.log(` ${os.freemem() / 1024 / 1024 / 1024}`) // its return the free memory in bytes. if you convert the MegaByte Then divide. 3072
// console.log(` ${os.totalmem() / 1024 / 1024 / 1024}`); // its also return the total memory in a system in bytes. 

// console.log(os.getPriority(7500)); // its take a process id and return the scheduling priority for the process, if this process is return the 0 that mence current process is return.

// console.log(os.homedir()); // Return the home directory(user profile) of the system.

// console.log(os.loadavg()); // its manage the system activity in the system 

// console.log(os.networkInterfaces()); // Return the network related data.

// console.log(os.release()); // Ret;urn the os string version
// console.log(os.setPriority(7920, -20)) // you can set the priority in the process. 

console.log(os.uptime() / 60 / 60); // Return the system uptime in second;
console.log(os.userInfo()); //;

console.log(os.version()); // its return the version the operating statem.



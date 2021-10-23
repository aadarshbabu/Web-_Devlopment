  while (times--) {
            resolve(callback(times))
        }
        if (times) {
            reject(callback("error"))
        }
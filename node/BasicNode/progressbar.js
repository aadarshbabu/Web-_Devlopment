const Progressbar = require("progress");

const he = new Progressbar('Downloading [:bar]', { total: 30, complete: "=", incomplete: " ", width: 20, total: 10 })
const timer = setInterval(() => {
    he.tick()
    if (he.complete) {
        clearInterval(timer);
    }
}, 100);

const os = require("os");
const path = require("path");
const fs = require("fs");
const url = require("url");
const EventEmitter = require("events");

// OS module
console.log("OS:", os.platform());
console.log("CPU:", os.arch());
console.log("Home Directory:", os.homedir());

// Path module
console.log("File Name:", path.basename(__filename));
console.log("Extension:", path.extname(__filename));

// File System module
fs.writeFileSync("test.txt", "Hello Node.js");
console.log("File created successfully");

// URL module
const myURL = new url.URL("https://example.com:8080/page?id=10");
console.log("Host:", myURL.host);
console.log("Path:", myURL.pathname);

// Events module
const event = new EventEmitter();

event.on("welcome", () => {
    console.log("Welcome to Node.js!");
});

event.emit("welcome");
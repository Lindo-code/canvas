const path = require("path");

module.exports = {
    mode: "production",
    entry: ["./src/main.js","./src/utils/form.js"],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
    }
}

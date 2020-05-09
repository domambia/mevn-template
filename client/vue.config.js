const path = require("path");
module.exports = {
    outputDir: path.resolve(__dirname, "./../public"),
    devServer: {
        proxy: {
            "/api": {
                target: "http://localhost:3000/api/",
            },
        },
    },
    chainWebpack: (config) => {
        config.plugin("html").tap((args) => {
            args[0].title = "MEVN | FullStack";
            return args;
        });
    },
};
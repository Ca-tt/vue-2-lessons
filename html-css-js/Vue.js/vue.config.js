//vue.config.js
module.exports = {
    runtimeCompiler: true,
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "My Vue App";
                return args;
            })
    }
}
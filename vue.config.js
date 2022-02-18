module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "http://web.juhe.cn/",
                changeOrigin: true,
                ws: true,
                secure: false,
                pathRewrite: {
                    '^/api': ''
                }
            },
        },
        overlay: {
            warnings: true,
            errors: true
        }
    },
    lintOnSave: false
};
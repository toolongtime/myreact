const CracoLessPlugin = require('craco-less');
module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { 
                            '@primary-color': '#ff0000',
                            // 需要重置那个颜色，就根据上面的文档参考进行 LESS 变量赋值
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
    
};

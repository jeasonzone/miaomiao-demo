module.exports={
    publicPath:'./',
    //publicPath:'/jeasonDemo',
    //baseUrl: './',
    //outputDir: 'dist',
    devServer:{
        proxy:{
            '/api':{
                target:'http://39.97.33.178',
                changeOrigin:true
            }
        }
    }
}
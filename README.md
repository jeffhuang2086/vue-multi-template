# vue-multi-template

> A multiPage project based on Vue-cli template

## Modify config
``` bash
# utils.js
  const glob= require('glob')
  exports.getEntry=function(globPath,pathDir){
    var files=glob.sync(globPath)// 获取所有的页面路径
    var entries={}
    var basename
    for(var i=0;i<files.length;i++){
      basename=path.basename(files[i],path.extname(files[i]))
      entries[basename]=files[i]
  
    }
    return entries
  }
```
```bash
# webpack.base.conf.js
  entry: utils.getEntry('./src/pages/*/*.js')
```
```bash
# webpak.dev.conf.js
  const pages=utils.getEntry('./src/pages/*/*.js')
  const pageNames=Object.keys(utils.getEntry('./src/pages/*/*.js'))
  pageNames.forEach(function(pathname){
    var dirname=pages[pathname].split('.js')[0]
    var conf={
      filename: pathname+'.html',
      template: dirname+'.html',
      inject: true,
      chunks:['manifest','vendor',pathname]
    }
    devWebpackConfig.plugins.push(new HtmlWebpackPlugin(conf))
  })
```
```bash
# webpack.prod.conf.js
  pageNames.forEach(function(pathname){
    var dirname=pages[pathname].split('.js')[0]
    console.log(dirname)
    var conf={
      filename: pathname+'.html',
      template: dirname+'.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency',
      chunks:['manifest','vendor',pathname]
    }
    webpackConfig.plugins.push(new HtmlWebpackPlugin(conf))
  })
```
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

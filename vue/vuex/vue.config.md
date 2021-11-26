> <font color=black size=1.5>有关vue.config.js相关内容</font>
* <font color=black size=1.5>
    publicPath：部署应用包时的基本 URL  

    白话：简单理解就是打包 css js img 要部署的地址，
    '/': 绝对路径，打包后应用包以绝对路径部署
    './': 相对路路径.....
    '***': 子路径部署，在子路径部署，打包后需要在包文件里面以子路径命名一个文件，将静态文件移到里面
</font>

* <font color=black size=1.5>
    outputDir：'dist'  
    
    包文件命名，默认是dist
</font>

* <font color=black size=1.5>
    assetsDir：'static'  
    
    静态文件存放的地方，如果为空字符串或者不成名，静态文件是释放在包文件中
</font>

* <font color=black size=1.5>
    indexPath：'**.html'
    
    默认是 index.html
    指定生成的html文件的输出路径 (相对于 outputDir)，也可以是一个绝对路径  
    如果是绝对路径，例如a/b/c/index.html,则会在包文件的里面生成a/b/c的文件，在c文件中成功index.html
</font>

* <font color=black size=1.5>
    lintOnSave：'**.html'  

    Type: boolean | 'warning' | 'default' | 'error'
    Default: 'default'
    
    是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效。
</font>

* <font color=black size=1.5>
    productionSourceMap

    Type: boolean
    Default: true
    生产环境释放需要 source map，可以将其设置为 false 以加速生产环境构建。
</font>

* <font color=black size=1.5>
    productionSourceMap

    Type: boolean
    Default: true
    生产环境释放需要 source map，可以将其设置为 false 以加速生产环境构建。
</font>
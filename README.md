# cloud-data
data analysis system by react-redux-webpack


## 启动及配置
安装+配置环境
http://blog.csdn.net/renlanchuke/article/details/50740921
https://zhidao.baidu.com/question/1434170494714337339.html


加入你右键NEW了一个叫Node的Node工程，那么打开命令窗口，cd到eclipse的workspace下面去，执行命令：express Node,这时候命令行会说，Node已经存在了，你确定覆盖，你就说，yes.接下来请cd到Node目录下去，执行npm install下载一大堆东西，然后刷新eclipse的Node工程，你会发现node-modules啊view啊什么的文件夹已经生成了，好！最后一步很激动了！请右键app.js，run as  > Node Application,然后在浏览器中访问 http://127.0.0.1:3000,如果你可以看到Express什么Welcome什么的界面，恭喜你！成功了！以后你可以在eclipse中开发了。

http://blog.csdn.net/w13770269691/article/details/24294601


切换到当前项目下：npm install安装所有依赖包
http://blog.csdn.net/lrcoop/article/details/50350474


http://stackoverflow.com/questions/21102285/expressjs-node-app-running-error
`!!!` is deprecated, you must now use `doctype`
报错的时候，把对应的文件下的！！！注释掉
# !!!
html
  head
    title= title
    link(rel='stylesheet', href='/stylesheets/style.css')
  body!= body
或者 定义过期
doctype !!!
html
  head
    title= title
    link(rel='stylesheet', href='/stylesheets/style.css')
  body!= body

---------------------------------------
//小童
ip@i:~/workspace/NewsNode/node_modules$ npm install webpack --save-dev -g
ip@i:~/workspace/NewsNode$   ./node_modules/.bin/webpack
ip@i:~/workspace/NewsNode$ npm run dev






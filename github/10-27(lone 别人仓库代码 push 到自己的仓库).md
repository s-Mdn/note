> <font color=black size=1.5>clone 别人仓库代码 push 到自己的仓库(date: 2021-10-27)</font>
* <font color=black size=1.5>clone 代码</font>
* <font color=black size=1.5>自己 git 上创建远程仓库</font>
* <font color=black size=1.5>远程仓库创建好，git 会给出两种导入方式</font>
* <font color=black size=1.5>因为代码是从别人处 clone 过来的，所以第一种不可取，选取第二种，也可以通过 `git remote -v` 查看本地已经存在的远程源, 可以看到以 origin 开头的远程仓库。说明本地已经存在 origin 名称的远程源，所以记得要更换下名称</font>
* <font color=black size=1.5>使用 `git remote add ** git@github.com:git账号/仓库名.git` 命令；否则会报 fatal: remote origin already exists. 的错误</font>
* <font color=black size=1.5>git pull ** 分支， git push  ** 分支</font>
<a>
    内容转载至   https://blog.csdn.net/xianhenyuan/article/details/93198232
</a>

* <font color=black size=1.5>git 添加多个远程仓库命令 git remote add origin https://github.com/xxx(仓库地址)  git remote add gitee https://git.gitee.com/xxxx(仓库地址)
</font>
* <font color=black size=1.5>删除origin仓库 git remote rm origin</font>
<a>
    内容转载至   https://www.cnblogs.com/lwlblog/p/12634455.html 
</a>
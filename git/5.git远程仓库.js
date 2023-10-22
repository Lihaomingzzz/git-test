/*
    远程仓库（remote）
        - 目前对于git的所有操作都是在本地进行的，但在开发中显然不是这样。
        - 我需要一个远程的git仓库，远程的git仓库和本地的没有什么本质区别，不同点在于远程的仓库可以被多人同时访问使用

        - 在实际工作中，git的服务器通常由公司搭建，内部使用。或者是购买一些公共的私有git服务器    
        - 在学习阶段，不方便去弄一个私有的库，但是有一些开放的公共git仓库可以供我们使用
            1. Github
            2. Gitee（码云）

        - 关于Github
            - 创建github远程仓库
                1. 首页有个 Create repository 就是创建一个新仓库的意思，填下信息，创建完毕
                2. 上传分支到远程github仓库
                    一些命令：
                        1. git remote add 远程服务器的名字（自己取名就行） 远程库的地址
                            - 关联本地git仓库与远程仓库
                        2. git branch -M 新分支名
                            - 修改当前主分支的名字
                        3. git push -u 远程服务器的名字（要和remotes中的一样） 当前主分支的名字
                            - 上传
                        - 上传时常常报错，网络问题，需要终端配置一下，设置上vpn的端口
                            git config --global http.proxy http://127.0.0.1:7890 
                            git config --global https.proxy http://127.0.0.1:7890

        - 关于Gitee
            - 创建Gitee远程仓库
                上传分支到Gitee上的一些命令：
                    1. git remote add 远程服务器的名字（还是自己取，但是不能和已关联的服务器名字相同） https://gitee.com/Lihaomingzzz/git-demo.git
                    2. git push -u 远程服务器的名字 分支名字

        - 如何下载代码？
            命令行输入 git clone 代码地址
            - 这时就会自动连接git，下载代码
                            
    */
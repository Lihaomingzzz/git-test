/*
    git config --global http.proxy http://127.0.0.1:33210
    git config --global https.proxy http://127.0.0.1:33210
    export https_proxy=http://127.0.0.1:33210 http_proxy=http://127.0.0.1:33210 all_proxy=socks5://127.0.0.1:33211
    - 远程库操作的命令
        1. git remote ：查看当前关联的远程库
        2. git remote -v ：查看当前关联的远程库的详细信息
        3. git remote add 新建库名 url地址 ：关联远程仓库
        4. git remote remove 库名 ：删除关联的远程库
        5. git push 远程库名 分支名 ：向远程仓库推送代码，这种写法默认远程分支名和本地分支名是相同的
        6. git push 远程库名 分支名/远程库的分支名 ：向远程仓库的指定分支推送分支
        7. git push -u 远程库名 分支名 ：向远程仓库推送代码，并产生关联，关联后就默认往该远程库里面推

    - 远程库在开发中都是多人提交的，那么就不可避免的会存在远程库冲突的问题，
      也就是本地库版本低于远程库，push是默认推送不上去的，如何解决？
        - 要想推送成功，要先确保本地库与远程库的版本一致可以下载远程库代码，然后合并，然后再传
        命令：
            1. git fetch 
                - 下载远程库代码，本质上就是下载了远程的那个节点
                - fetch不会将代码和当前分支自动合并，需要手动对代码进行合并

            2. git merge 远程服务器的名字/要合并的分支名
                - 合并可能有冲突，手动解决一下冲突就完事了

            3. git pull
                - 从服务器上拉取代码，并自动合并，有冲突的话要手动处理
        
*/
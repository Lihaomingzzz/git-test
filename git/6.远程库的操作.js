/*
    git config --global http.proxy http://127.0.0.1:33210
    git config --global https.proxy http://127.0.0.1:33210
    export https_proxy=http://127.0.0.1:33210 http_proxy=http://127.0.0.1:33210 all_proxy=socks5://127.0.0.1:33211
    远程库操作的命令
        1. git remote ：查看当前关联的远程库
        2. git remote -v ：查看当前关联的远程库的详细信息
        3. git remote add 新建库名 url地址 ：关联远程仓库
        4. git remote remove 库名 ：删除关联的远程库
        5. git push 远程库名 分支名 ：向远程仓库推送代码
        6. git push -u 远程库名 分支名 ：向远程仓库推送代码，并产生关联，关联后就默认往该远程库里面推
*/
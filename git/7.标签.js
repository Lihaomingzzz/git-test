/*
    - 每一次commit提交，都会产生一个节点，这个节点有着独特的UID标识，类似这样：40eaba1f7526a5cc753cd20d87ea6a4d000777f0
    - 可以根据这个独特的UID，回到那一个节点上

    - 分离头指针：
        - 当头指针没有指在某个分支的头部时，这种操作叫做分离头指针
            分离头指针的命令：
                - git switch uid UID的前几位 --detach（保证不重复就行）
                - 这种修改头指针的方式，修改代码后，不能确定修改的节点究竟在哪个分支上
                - 这种方式实际上就是修改头指针的位置，头指针在哪个节点上，就切换到哪个节点，切换后也能操作代码，但是这些操作不会出现在任何的分支上。
                - 因此，不要在分离头指针的状态下操作仓库！！！要切回主分支再操作！
                
        - 如果一定要回到过去的节点对代码进行操作的话，那就得分离头指针后，创建一个新的分支再进行操作，之后再合并，就没问题了
            回到老节点并创建分支的命令：
                - git switch -c 新分支名 过去的UID
        
        - 这么做显然很麻烦，要日志里面一条条找，因此可以为提交记录设置标签通过标签识别出节点，就不用依靠UID了
        
        - tag标签
            命令：
                1. git tag ：查看所有标签
                2. git tag 要设置的标签名 ：给当前所在节点设置标签
                3. git tag 要设置的标签名 UID ：给当前UID的节点设置标签
            
            - 设置上tag时，想要回到那个节点，就直接 git switch tag标签名 ，就行了。tag标签替代了UID
            - 推送也是一样的，可以用标签名替代分支名，因为分支指向的也是一个节点，因此推送实际上推送的就是节点
*/

/*
    git变基
        - 通过merge进行合并分支时，在提交记录中会将所有的分支创建和分支合并的过程全部显示出来，
          当项目比较复杂时，代码的提交记录就会极为混乱

        - 在开发中，除了可以通过merge来合并代码外，还可以通过变基（rebase）来完成分支的合并
        - 比如我的分支是从a4这个节点开始的，我的主分支写到了a8，那么变基就是让这条分支从c8开始
        - 变基的原理：
            1. 当发起变基时，git会首先找到两条分支的最近祖先节点
            2. 对比当前分支相对于祖先节点的历史提交，将它们的不同点提取出来，存储到一个临时文件中
            3. 将当前部分指向目标的基底
            4. 以当前基底开始，从新执行历史操作
        
        - 要改变哪个分支的基，就先切换到该分支，输入 git rebase 分支名
        - 变基完，再合并，这时候就是快速合并了
*/
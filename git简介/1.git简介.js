/*
    git
        - git就是一个放代码的地方，管理代码的工具，也可以说是一个代码仓库
        
        - 以下是git命令行的操作
        
            - git的安装及其配置
                1. 安装git，直接去官网安装就行 https://git-scm.com/
                2. 查看是否安装成功，控制台直接 git -v
                3. 配置git，主要是配置name和email
                    - 命令行输入 git config --global user.name （git：git的命令，config：配置信息，global：全局修改，user.name：配置的是user的name属性）
                    - 命令行输入 git config --global user.email （除属性值不一样外，其他表达的意思都一样）
                    - 为啥要配置这玩意呢？因为提交代码的时候，得有一个区分，区分是谁提交到代码仓库的

            - 创建git
                1. 电脑上创建个文件夹，控制台进去
                2. 输入 git status （查看git仓库的状态）发现此文件夹不归git管理
                3. 输入 git init （初始化git）初始化一个新的git仓库
                
            - 使用git
                - git仓库，也就是init的那个文件中的文件有两种状态
                    1. 未跟踪
                        - 指文件未被git所管理
                    2. 已跟踪
                        - 指文件已被git所管理，已经进入了git的监视列表
                        - 已跟踪的文件又有三种状态
                            1. 未修改：指磁盘中的文件和git仓库中的文件相同，还没被修改过
                            2. 已修改：表示磁盘中的文件已被修改，和git仓库里的文件不同
                            3. 暂存：指文件修改已经保存，但尚未提交至git仓库
                            - 可以通过 git status 来查看文件的状态
                    - 刚被添加至文件夹的文件，属于未跟踪的状态
                    - 需要进入git文件夹使用命令 git add 文件名 ，将该文件切换到暂存状态，这时该文件就被git跟踪了
                    - 每次写完代码，都需要git add 文件名，使文件进入暂存状态
                    - 使用命令 git add * ，将该文件夹下的所有文件都进入暂存状态

                - 使用 git commit -m "xxx"（xxx是你添加的一个备注信息）来讲暂存文件提交至git仓库里
                - 修改提交过后的文件源码后，文件会变为已修改状态
                - 使用命令 git log 可以看到每一次提交文件的记录，包括日期和备注信息

                - 有多个已修改的文件 可以使用 git commit -a -m "xxx" 来全部进入暂存状态然后提交，但前提是该文件已追踪了，否则还是要用git add <filename>

            - git的一些常用的命令
                1. 恢复文件
                    - git restore 文件名：将文件重置到修改前的状态
                    - git restore * ：将文件夹下的所有文件全部重置到修改前的状态
                    - git restore --staged 文件名 ：将文件从暂存的状态取消
                
                2. 删除文件
                    - git rm 文件名 ：删除该文件
                    - git rm 文件名 -f：强制删除该文件

                - 先git rm 一个文件，然后文件会被删除，同时会变成暂存状态，如果想恢复文件，
                  要先 git restore --staged 该文件，将该文件从暂存状态取消，
                  然后再 git restore 该文件，恢复该文件

                3. 移动文件（重命名）
                    - git mv 修改前文件名 修改后文件名 ：用于修改文件名的

*/
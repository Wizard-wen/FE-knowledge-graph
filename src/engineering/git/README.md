# Git

## 


- 工作区
- 版本库 Repository .git / stage（或者叫index）的暂存区
- 暂存区



git add 把文件添加进去，实际上就是把文件修改添加到暂存区；
git commit 提交更改，实际上就是把暂存区的所有内容提交到当前分支。







- git branch
    - git branch -d <branch> 删除分支
    - git branch -b
    - git branch -r 查看远程分支
    - git branch -a 查看所有分支

- git checkout 
    - git checkout -b newBranch
    - git checkout -b localBranch origin/remoteBranch 拉取远程分支并创建本地分支
    - git checkout [<commit>] [--] <filepath>

- git status

- git merge 
    - git checkout originalBranch
    - git merge branchWaitingForMerge
    
- git rebase

- git fetch
    - git fetch origin remoteBranch:localBranch

- 

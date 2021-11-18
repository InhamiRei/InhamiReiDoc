## 合作开发流程

```
//从远程仓库克隆初始项目
git clone 项目地址

// 查看和切换分支，拉取远程分支并创建本地分支
git checkout -b 分支名

//查看文件修改状态
git status

// 查看状态
git status

// 添加当前目录的所有文件的修改到暂存区
git add .

// 提交暂存区的内容到本地仓库
git commit -m "信息"

// 推送内容到远程仓库，若没有该分支 则自动创建并推送
git push origin 分支名

// 切换master主分支
git checkout master

// 拉取master主分支最新代码（万一别人push了）
git pull

// 合并分支
git merge 分支名

// 如果有冲突，在vscode解决冲突后
// 重新 add commit push三个指令

// 如果没有冲突
git push

// 切换到自己开发的分支
git checkout 分支名

// 如果master主分支上有他人的修改 则合并到自己开发的分支 没有则继续开发
git merge master
```

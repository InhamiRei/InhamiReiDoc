## 拉取项目
```
// 从远程仓库克隆初始项目
git clone 项目地址
```

```
// 拉取项目别人的分支代码
git clone -b 别人分支名 项目地址
```

## 分支操作
```
// 查看本地分支
git branch 

// 查看远程分支
git branch -r

// 查看远程分支和本地分支
git branch -a 

// 删除本地分支
git branch -d 分支名

//删除远程分支
git push origin --delete 分支名
```

```
// 创建自己开发的分支
git branch 分支名

// 切换到自己的分支
git checkout 分支名

// 包括上面的操作，查看和切换分支，拉去远程分支并创建本地分支
git checkout -b 分支名
```

```
// 会在本地新建分支，并自动切换到本地分支，会建立映射
git checkout -b 本地分支 origin/远程分支

// 会在本地新建分支，但是不会切换到本地分支，不会建立映射
git fetch origin 远程分支：本地分支
```

## 提交修改

```
// 查看状态
git status 

// 添加当前目录的所有文件的修改到暂存区
git add .

// 提交暂存区的内容到本地仓库
git commit -m "信息" 

// 推送内容到远程仓库，若没有该分支 则自动创建并推送
git push origin 分支名

// 强推代码（不建议）
git push -f
```

## 更新项目

```
// 拉取master主分支最新代码
git pull  

// 强行拉分支（不建议）
git fetch --all
git reset --hard origin/develop
git pull
```

## 合并分支

```
// 合并分支
git merge 分支名
```
## 1.x版本无法自动更新

+ 1.x版本无法自动更新，每次修改文件后需要在Git里重启才能看到更新

+ 在package.json中将运行命令进行修改

``` vue {1}
"docs:dev": "vuepress dev"
"docs:dev": "vuepress dev docs --temp .temp"
```

+ 这样修改运行的话会生成.temp的文件，但是并不需要上传和维护
+ 在.gitignore里加上两行代码

``` vue
# vuepress temp file
.temp
```
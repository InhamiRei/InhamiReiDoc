## 1.x 版本无法自动更新

- 1.x 版本无法自动更新，每次修改文件后需要在 Git 里重启才能看到更新

- 在 package.json 中将运行命令进行修改

```vue {1}
"docs:dev": "vuepress dev" "docs:dev": "vuepress dev docs --temp .temp"
```

- 这样修改运行的话会生成.temp 的文件，但是并不需要上传和维护
- 在.gitignore 里加上两行代码

```vue
# vuepress temp file .temp
```

## Nginx 的命令

```
//启动nginx服务
service nginx start

//关闭nginx服务
service nginx stop

//重启nginx服务
service nginx restart

//查看nginx服务状态
service nginx status

// 重新加载nginx
sudo service nginx reload
```

## 定时任务 crontab 命令

```
// 添加定时任务
python manage.py crontab add

// 查看定时任务
python manage.py crontab add

// 移除定时任务
python manage.py crontab add
```

## Python+Django 命令

```
// 迁移文件
python manage.py makemigrations
python manage.py migrate

// 收集静态资源
python3 manage.py collectstatic

// 运行项目
python3 manage.py runserve

// 创建管理员
python3 manage.py createsuperuser

// 修改管理员的登录密码
python3 manage.py changepassword Hey、小怪兽
```

## 运行维护命令

- 如果更新了新的内容

```
cd /home/sites/inhami.com/TaroTown/TaroTown
killall -9 uwsgi
uwsgi --ini uwsgi.ini
cd ..
python3 manage.py runserve
```

## 常见的退出命令

```
ctrl + c
ctrl + d
exit();
```

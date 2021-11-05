## 建立连接

<el-tag type="info">FinalShell版本：3.9.2.2</el-tag>

+ 点击连接管理器，选择建立新的连接，SSH连接(Linux)

<div align="center">
    <img :src="$withBase('/img/community/FinalShell_1.png')" alt="FinalShell_1.png">
</div>

+ 编辑连接：
+ 名称：自定义名称
+ 主机：阿里云服务器IP地址(公)
+ 用户名：root
+ 密码：阿里云登录密码

<div align="center">
    <img :src="$withBase('/img/community/FinalShell_2.png')" alt="FinalShell_2.png">
</div>

+ 先去阿里云的控制台重置服务器的密码

<div align="center">
    <img :src="$withBase('/img/community/FinalShell_3.png')" alt="FinalShell_3.png">
</div>

<div align="center">
    <img :src="$withBase('/img/community/FinalShell_4.png')" alt="FinalShell_4.png">
</div>

## 环境配置

+ 升级系统和库的版本
``` 
sudo apt-get update
sudo apt-get upgrade
```
+ 在执行第二条语句的时候可能会报以下的信息，选择2，保存本地的版本

```
A new version (/tmp/fileMHkfUx) of configuration file /etc/ssh/sshd_config is available, but the version installed 
currently has been locally modified.

  1. install the package maintainer's version             5. show a 3-way difference between available versions
  2. keep the local version currently installed           6. do a 3-way merge between available versions
  3. show the differences between the versions            7. start a new shell to examine the situation
  4. show a side-by-side difference between the versions

```

+ 安装Git，nginx，Python3，uwsgi，django

```
sudo apt-get install git
sudo apt-get install nginx
sudo apt-get install python3
sudo apt-get install python3-pip
pip3 install uwsgi
pip3 install django
```

+ 报错,python2好像不能用了，这里就用pip3

```
DEPRECATION: Python 2.7 will reach the end of its life on January 1st, 2020. Please upgrade your Python as Python 2.7 won't be maintained after that date. A future version of pip will drop support for Python 2.7
```

```
sudo apt-get install --reinstall python3-pip
```

## 转移Python项目

+ 在home新建新的文件夹，home/sites/inhami.com/TaroTown

+ 将项目都放进TaroTown里

+ 注意uwsgi.log要定时清理，删除新建个空的，不然占用内存会越来越大

+ 生成requirements.txt，以便后面安装

```
cd /home/sites/inhami.com/TaroTown/TaroTown
pip freeze > requirements.txt
```

## Navicat+MySQL

<el-tag type="info">Navicat Premium版本：15.0.12</el-tag>

+ 在服务器安装MySQL

```
sudo apt-get install mysql-server
```

+ 修改配置

```
sudo mysql_secure_installation
```

+ 注意这个不允许远程连接选择否

```
...
Disallow root login remotely? (Press y|Y for Yes, any other key for No) : n
...
```

+ 查看MySQL状态

```
systemctl status mysql.service
```

+ 配置端口3306

```
netstat -an | grep 3306
```

+ 在Navicat新建连接
+ 连接名：随便写
+ 主机：localhost
+ 端口：3306
+ 用户名：root
+ 密码：数据库的密码，后面改了是123

<div align="center">
    <img :src="$withBase('/img/community/mysql_1.png')" alt="mysql_1.png">
</div>

+ 主机：就是服务器的IP地址(公)
+ 端口：22
+ 用户名：root
+ 验证方法：密码
+ 密码：服务器的登录密码，不是数据库的密码，如果填数据库的密码，上面的Navicat图标到SSH服务器就会变红

<div align="center">
    <img :src="$withBase('/img/community/mysql_2.png')" alt="mysql_2.png">
</div>

+ 报错：说明SSH服务器和数据库连接失败

```
1698 - Access deied for user 'root'@'localhost'
```

+ 进入数据库

```
sudo mysql -u root -p
select user, plugin from mysql.user;
```

+ 网上搜到的，修改mysql配置

```
set global validate_password_policy=0;
 
set global validate_password_mixed_case_count=0;
 
set global validate_password_number_count=3;
 
set global validate_password_special_char_count=0;
 
set global validate_password_length=3;
```

+ 这里修改密码为123了，所以我的Django项目的setting.py的配置里面连接数据库的地方密码也要改成123

```
update mysql.user set authentication_string=PASSWORD('123'), plugin='mysql_native_password' where user='root';
```

+ 刷新

```
flush privileges;
```

+ 在远程创建一个数据库town，编码为utf8

<div align="center">
    <img :src="$withBase('/img/community/mysql_3.png')" alt="mysql_2.png">
</div>

+ 进入我的Django项目，迁移数据库

```
cd /home/sites/inhami.com/TaroTown
python3 manage.py makemigrations
python3 manage.py migrate
```

+ 数据库结构创好了，在Navicat选择转储SQL文件-结构和数据(直接把这个sql文件拖到Navitcat就可以了)

## Nginx配置

+ /etc/nginx/sites-available/defalut

``` {9}
server {
	listen 80 default_server;
	listen [::]:80 default_server;

	root /var/www/html;

	index index.html index.htm index.nginx-debian.html;

	server_name 服务器的IP地址(公);

	location / {
		include uwsgi_params;
			uwsgi_pass 127.0.0.1:8000;
	}
	location /static {
		alias /home/sites/inhami.com/TaroTown/static;
	} 
	location /media {
		alias /home/sites/inhami.com/TaroTown/media;
	}
}

```

+ /etc/nginx/sites-available/inhami.com.conf

```
server {
    listen       80;
    listen	 443 ssl http2;
    server_name  inhami.com www.inhami.com;
    charset utf-8;
        ssl_certificate /etc/ssl/4734502_inhami.com.pem;
        ssl_certificate_key /etc/ssl/4734502_inhami.com.key;
        ssl_session_timeout 5m;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
        ssl_prefer_server_ciphers on;

    set                         $rewriterule https;
        if                      ($scheme = https) {
            set                 $rewriterule "${rewriterule}7"; }
        if                      ($host ~* ^inhami.com) {
            set                 $rewriterule "${rewriterule}8"; }
        if                      ($rewriterule != "https78") {
            return              301 https://inhami.com$request_uri;
            break; }

    location / {
        include uwsgi_params;
        uwsgi_pass 127.0.0.1:8998;  #端口要和uwsgi里配置的一样           
        uwsgi_param UWSGI_SCRIPT TaroTown.wsgi;  #wsgi.py所在的目录名+.wsgi           
        uwsgi_param UWSGI_CHDIR /home/sites/inhami.com/TaroTown/; #项目路径           
        }
    location /static/ {
        alias /home/sites/inhami.com/TaroTown/static/; #静态资源路径       
        }
    location /media/ {
        alias /home/sites/inhami.com/TaroTown/media/; #静态资源路径       
        }
    }
```

## SSL证书配置

+ 先去阿里云的控制台SSL创建一个新的免费证书（一般证书只有1年期限）
+ 下载证书，选择Nginx服务器类型的证书
+ SSL证书文件两个放到/etc/ssl：xxxxxxx_inhami.com.key 和 xxxxxxx_inhami.com.PEM

+ 修改/etc/nginx/sites-available和/etc/nginx/sites-enabled里的inhami.com.conf文件

```{1,2}
ssl_certificate /etc/ssl/4734502_inhami.com.pem;
ssl_certificate_key /etc/ssl/4734502_inhami.com.key;
ssl_certificate /etc/ssl/6528837_inhami.com.pem;
ssl_certificate_key /etc/ssl/6528837_inhami.com.key;
ssl_session_timeout 5m;
ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
ssl_prefer_server_ciphers on;
```

+ 如果只是替换过期的证书，按上述步骤完成后，前往阿里云控制台重启服务器
+ 之后在FinalShell再次运行Django项目，不然访问会报502错误
+ 点击域名左边的锁，可以看到证书是否更新


## uWSGI配置

+ 在/home/sites/inhami.com/TaroTown/TaroTown创建三个文件：
+ uwsgi.ini

```
#添加配置选择
[uwsgi]
#配置和nginx连接的socket连接
socket=127.0.0.1:8998
#配置项目路径，项目的所在目录
chdir=/home/sites/inhami.com/TaroTown/
#配置wsgi接口模块文件路径,也就是wsgi.py这个文件所在的目录名
wsgi-file=TaroTown/wsgi.py
#配置启动的进程数
processes=4
#配置每个进程的线程数
threads=2
#配置启动管理主进程
master=True
#配置存放主进程的进程号文件
pidfile=uwsgi.pid
#配置dump日志记录
daemonize=uwsgi.log
```

+ uwsgi.log放uwsgi的日志的，需定时清理

+ uwsgi.pid

```
27772
```

## 运行项目

+ 安装requirements.txt

```
pip3 install -r requirements.txt
```

+ 收集静态资源

```
python3 manage.py collectstatic
```

+ 运行

```
python3 manage.py runserve
```

## 定时任务

+ 添加定时任务

```
python manage.py crontab add
```

+ setting.py

``` python
CRONJOBS = [
    ('59 23 * * *', 'townbase.views.my_scheduled_job'),
]
```

+ view.py

``` python
# 定时任务-每日刷新
def my_scheduled_job():
    try:
        需要执行的代码
    except:
        pass
```

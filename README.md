# GA-Login
使用二次验证的登陆系统。

## 项目介绍

登陆系统连接MySQL数据库，数据库中保存用户名和加盐Hash后的值。
登陆后用户可以在用户设置中设置双因子认证，这里使用的是Google Authenticator

## 人员分配

- 宋奕
	CSS设计
- 陈文菲
	框架设计
- 贺文涵
	数据库表设计
- 高志丹
	文档书写

## 项目进度

### 项目目标

1. 页面设计
2. 不加密密码的登陆 & 路由设计
3. 加密密码的注册
4. 双因子认证

途中可能伴随着前端的修改和数据库表的修改

### 11.29 - CWF

完成内容：
- 前后端跨域
- 页面设计
- 数据库表设计

### 12.05 - CWF

目标任务：
- 无localStorage的登录
- 带localStorage的登录
	+ vuex的设计
	+ 路由阻挡

完成内容：
- 无localStorage的登录

### 12.15 - CWF

完成内容

- 带localStorage的登录
	+ vuex的设计
	+ 路由阻挡

日后任务：
- 对密码进行哈希并储存的注册
	+ 加入哈希函数库
- 二次认证生成页面
	+ 加入二次验证函数库和二维码生成库
- 二次认证登录的实现
	+ 可以通过登录后跳转到二次认证页面的形式表现

> 具体实现方法可以查一下网上的资料

### 12.17 - SY

完成内容

- 不带哈希加密的注册模块
	+ 前端提示与跳转
	+ 后端数据库连接

日后任务：
- 注册时对密码进行哈希，
- 登录时对密码进行哈希，与数据库数据进行比对。

### 12.22 - SY

完成内容

- 带哈希加密的注册模块
- 登录时对密码进行哈希，与数据库数据进行比对

### 12.24 - CWF

完成内容

- 修改用户页面路由关系
- 修改数据库表结构
- 添加密钥生成依赖库
- 构思首次验证逻辑

### 12.25 - CWF

完成内容

- 前端：首次双因子验证页面设计
- 后端：首次双因子验证的二维码生成、六位验证码验证的认证
- vuex：验证完成后全局状态的更新

后续完成任务

- 修改数据库表：增加临时secret，仅用于首次验证过程中使用
	为了避免验证到一半失败的情况，在通过验证后再储存为正式secret
- 解除双因子认证
- 双因子认证页面，路由访问的限制
- 修改初次验证结束后token的更新，无需重新登陆
- 添加部分提示视效

注意需要修改数据库表：
```SQL
ALTER TABLE user ADD user_secret varchar(40) DEFAULT NULL;
ALTER TABLE user ADD user_secret_temp varchar(40) DEFAULT NULL;
```

如果需要对各个页面的CSS进行修改，可以把`/GA-Login/src/router/index.js`中对应页面的`beforeEnter`路由守护的部分注释掉，就可以在没有达成进入条件时进入该页面了。

// 第一步
mysql -u root -p //双击enter进入mysql数据库
// 第二步查询mysql中所有数据库名称
SHOW DATABASES; 
// 第三步 创建数据库名称ceshi001
CREATE DATABASE ceshi001;
// 第四部 进入数据库ceshi001
USE ceshi001;
// 创建表名称user
CREATE TABLE `good` (
    `id` int(20) NOT NULL AUTO_INCREMENT,
    `name` varchar(255) DEFAULT NULL,
    `desc` varchar(255) DEFAULT NULL,
    `price` int(20) DEFAULT NULL,
    `sum` int(20) DEFAULT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE=MyISAM AUTO_INCREMENT=120 DEFAULT CHARSET=utf8;

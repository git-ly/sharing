-- MySQL dump 10.13  Distrib 5.6.37, for Win64 (x86_64)
--
-- Host: localhost    Database: sharing
-- ------------------------------------------------------
-- Server version	5.6.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `acess`
--

DROP TABLE IF EXISTS `acess`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `acess` (
  `role` int(3) NOT NULL,
  `menu_no` int(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `acess`
--

LOCK TABLES `acess` WRITE;
/*!40000 ALTER TABLE `acess` DISABLE KEYS */;
INSERT INTO `acess` VALUES (1,100),(1,101),(1,102),(1,103),(1,200),(1,201),(1,202),(1,203),(1,300),(1,301),(1,302),(1,303),(2,100),(2,103),(2,200),(2,201),(2,202),(2,203),(2,300),(2,301),(2,302),(2,303),(3,100),(3,101),(3,300),(3,301),(3,302),(2,101),(2,204),(1,204),(1,205);
/*!40000 ALTER TABLE `acess` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `department`
--

DROP TABLE IF EXISTS `department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `department` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `dpt_name` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `dpt_name` (`dpt_name`)
) ENGINE=InnoDB AUTO_INCREMENT=1005 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `department`
--

LOCK TABLES `department` WRITE;
/*!40000 ALTER TABLE `department` DISABLE KEYS */;
INSERT INTO `department` VALUES (1004,'天津开发中心'),(1002,'广州开发中心'),(1003,'武汉开发中心'),(1001,'深圳开发中心');
/*!40000 ALTER TABLE `department` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dpt_prj_mid`
--

DROP TABLE IF EXISTS `dpt_prj_mid`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dpt_prj_mid` (
  `dpt_id` int(4) DEFAULT NULL,
  `prj_id` int(5) DEFAULT NULL,
  `id` int(6) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dpt_prj_mid`
--

LOCK TABLES `dpt_prj_mid` WRITE;
/*!40000 ALTER TABLE `dpt_prj_mid` DISABLE KEYS */;
INSERT INTO `dpt_prj_mid` VALUES (1001,10001,1),(1001,10002,2),(1001,10003,3),(1001,10005,4),(1002,10001,5),(1002,10002,6),(1002,10005,7);
/*!40000 ALTER TABLE `dpt_prj_mid` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dpt_prj_res_mid`
--

DROP TABLE IF EXISTS `dpt_prj_res_mid`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dpt_prj_res_mid` (
  `dpt_prj_id` int(6) DEFAULT NULL,
  `res_id` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dpt_prj_res_mid`
--

LOCK TABLES `dpt_prj_res_mid` WRITE;
/*!40000 ALTER TABLE `dpt_prj_res_mid` DISABLE KEYS */;
INSERT INTO `dpt_prj_res_mid` VALUES (1,'0a70a5ad7d9311e780961cb72c29411a'),(5,'0a70a5ad7d9311e780961cb72c29411a');
/*!40000 ALTER TABLE `dpt_prj_res_mid` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu`
--

DROP TABLE IF EXISTS `menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `menu` (
  `menu_no` int(3) NOT NULL DEFAULT '0',
  `menu_name` varchar(50) DEFAULT NULL,
  `menu_url` varchar(200) DEFAULT NULL,
  `p_menu_no` int(3) DEFAULT NULL,
  PRIMARY KEY (`menu_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu`
--

LOCK TABLES `menu` WRITE;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` VALUES (0,'root','#',0),(100,'用户管理','userOpt',0),(101,'个人信息','ownInfo',100),(102,'职位管理','authorization',100),(103,'密码管理','pwdReset',100),(200,'简历管理','asumeOpt',0),(201,'简历查询','resumeList',200),(202,'上传简历','addResume',200),(203,'修改简历','modifyResume',200),(204,'项目中心','ctrRegister',200),(205,'中心管理','ctrManage',200),(300,'资源管理','sourceOpt',0),(301,'资料查询','sourceList',300),(302,'上传资料','uploadFile',300),(303,'资料删除','delFile',300);
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `project` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `pro_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `pro_name` (`pro_name`)
) ENGINE=InnoDB AUTO_INCREMENT=10007 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
INSERT INTO `project` VALUES (10006,'abc'),(10001,'公积金管理系统'),(10004,'物流管理系统'),(10002,'简历管理系统'),(10005,'超市管理系统'),(10003,'防盗门安全系统');
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resume`
--

DROP TABLE IF EXISTS `resume`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `resume` (
  `id` varchar(50) NOT NULL,
  `owner` varchar(25) DEFAULT NULL,
  `graduate_time` date DEFAULT NULL,
  `file_name` varchar(50) DEFAULT NULL,
  `file_type` varchar(20) DEFAULT NULL,
  `file_path` varchar(200) DEFAULT NULL,
  `uploader_id` varchar(50) DEFAULT NULL,
  `upload_time` date DEFAULT NULL,
  `dest_name` varchar(50) DEFAULT NULL,
  `education` varchar(25) DEFAULT NULL,
  `major` varchar(30) DEFAULT NULL,
  `dpt_id` int(4) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `i_upload_time` (`upload_time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resume`
--

LOCK TABLES `resume` WRITE;
/*!40000 ALTER TABLE `resume` DISABLE KEYS */;
INSERT INTO `resume` VALUES ('0a70a5ad7d9311e780961cb72c29411a','王麻子','2017-08-25','多进制转换器.txt','txt','f:\\sharing/resumeFiles','fcd7a9527b3a11e797081cb72c29411a','2017-08-10','774561aec7854a5e86e8f55327436167.txt','博士','理工',1002),('31645743864511e782f600ffa085cded','aaa','2017-08-02','100x100.jpg','jpg','f:\\sharing/resumeFiles','fcd7a9527b3a11e797081cb72c29411a','2017-08-21','f197fb95e9f648d286a30dc657b072a5.jpg','aaa',NULL,NULL),('483f2ca27de311e79f671cb72c29411a','李大爷','1976-06-16','打印本页的按钮.txt','txt','f:\\sharing/resumeFiles','fcd7a9527b3a11e797081cb72c29411a','2017-08-10','2345863eba5e412c95023a63e6cce642.txt','学前班','理工',1002),('72369a137de311e79f671cb72c29411a','毛豆','2016-08-11','感应灵敏的鼠标文字.txt','txt','f:\\sharing/resumeFiles','fcd7a9527b3a11e797081cb72c29411a','2017-08-10','c4d40890ab404bf28452306b6ed94638.txt','中专','理工',1002),('7c3cff2d7d1011e79ea91cb72c29411a','李蛋','2015-07-17','Javascript特效大全(上册).exe','exe','f:\\sharingresumeFiles','fcd7a9527b3a11e797081cb72c29411a','2017-08-09','045a0804813b4f3f9cef191229a5c73d.exe','中专','理工',1002),('89902c6a7c4911e7bb751cb72c29411a','隔壁老王','2017-08-01','html5参考手册.chm','chm','f:\\sharingresumeFiles','fcd7a9527b3a11e797081cb72c29411a','2017-08-08','42822ad5a363426e9387cc20594df267.chm','小学','理工',1002),('8de9acee7de311e79f671cb72c29411a','赵飞','2017-08-08','多种形状面积计算.txt','txt','f:\\sharing/resumeFiles','fcd7a9527b3a11e797081cb72c29411a','2017-08-10','77a68ce1ea234438bad4bf06c4a02f7b.txt','大专','理工',1002),('965bf35487d711e798bc00ffa085cded','张三','2017-08-09','100x100.jpg','jpg','f:\\sharing/resumeFiles','fcd7a9527b3a11e797081cb72c29411a','2017-08-23','90b6b45ef618466697bceaac94d8e092.jpg','本科','园艺',1003),('a2d725b47d0f11e79ea91cb72c29411a','王虎','2016-10-08','层叠样式表.chm','chm','f:\\sharingresumeFiles','fcd7a9527b3a11e797081cb72c29411a','2017-08-09','aa3a6820815d488b935dcf004ac5e109.chm','大专','理工',1002),('aa4322c07d1011e79ea91cb72c29411a','武牛','2017-08-08','IT专业测试.txt','txt','f:\\sharingresumeFiles','fcd7a9527b3a11e797081cb72c29411a','2017-08-09','da36a820c6794c8dbe5964a27e0d4747.txt','高中','理工',1002),('afddc6ba7de311e79f671cb72c29411a','顾千华','2017-08-03','电子表式时间.txt','txt','f:\\sharing/resumeFiles','fcd7a9527b3a11e797081cb72c29411a','2017-08-10','d3504690584f439a8bec08f35c355762.txt','大专','理工',1002),('bec35c8c7cb411e7b2121cb72c29411a','店小二','2011-08-03','html5参考手册.chm','chm','f:\\sharingresumeFiles','fcd7a9527b3a11e797081cb72c29411a','2017-08-09','7480f48190ae411d946206c21010845c.chm','初中','理工',1002),('c7d2e4077e9e11e7b6ee1cb72c29411a','王胖子','2017-08-09','滚动的文字背景.txt','txt','f:\\sharing/resumeFiles','fcd7a9527b3a11e797081cb72c29411a','2017-08-11','76fe356dbf1e4e4fbe9a8a0e93566aad.txt','大专','理工',1002),('ca0328af7e6111e7b05a1cb72c29411a','老二','2017-08-09','点击就出现的文字.txt','txt','f:\\sharing/resumeFiles','fcd7a9527b3a11e797081cb72c29411a','2017-08-11','921b8d2c5a9d4637906fb137fb48b41e.txt','本科','理工',1002),('d03fc79d7de311e79f671cb72c29411a','三炮','2015-07-09','打印本页.txt','txt','f:\\sharing/resumeFiles','fcd7a9527b3a11e797081cb72c29411a','2017-08-10','2ce6aa14d38549778d26e85a7815486d.txt','小学','理工',1002),('ff7256cb7e3211e7b05a1cb72c29411a','土豆','2017-08-10','多进制转换器.txt','txt','f:\\sharing/resumeFiles','fcd7a9527b3a11e797081cb72c29411a','2017-08-11','c9b9162abe2643b7858521c6f8d3a03f.txt','中专','理工',1002);
/*!40000 ALTER TABLE `resume` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `share_file`
--

DROP TABLE IF EXISTS `share_file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `share_file` (
  `id` varchar(50) NOT NULL,
  `file_name` varchar(50) DEFAULT NULL,
  `file_type` varchar(20) DEFAULT NULL,
  `file_path` varchar(200) DEFAULT NULL,
  `uploader_id` varchar(50) DEFAULT NULL,
  `upload_time` date DEFAULT NULL,
  `content` varchar(50) DEFAULT NULL,
  `mark` varchar(30) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `dest_name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `share_file`
--

LOCK TABLES `share_file` WRITE;
/*!40000 ALTER TABLE `share_file` DISABLE KEYS */;
INSERT INTO `share_file` VALUES ('bc04441e7e4411e7b05a1cb72c29411a','多进制转换器.txt','txt','f:\\sharing/shareFile','fcd7a9527b3a11e797081cb72c29411a','2017-08-11','测试','测试','测试','8dda32acfd2d43c6854c97551cf3e3a7.txt'),('e94fdd5b7e5a11e7b05a1cb72c29411a','打印本页.txt','txt','f:\\sharing/shareFile','fcd7a9527b3a11e797081cb72c29411a','2017-08-11','测试2','测试','随便看看','0e3bf160e2c64ebdb74c51232150b528.txt');
/*!40000 ALTER TABLE `share_file` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` varchar(50) NOT NULL DEFAULT '',
  `acct` varchar(25) DEFAULT NULL COMMENT '用户名',
  `pwd` varchar(50) DEFAULT NULL,
  `name` varchar(25) DEFAULT NULL COMMENT '姓名',
  `role` tinyint(4) DEFAULT NULL COMMENT '角色',
  `rgt_time` date DEFAULT NULL COMMENT '注册时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `acct` (`acct`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('294c1f6883ed11e7b29c00ffa085cded','abcde','827ccb0eea8a706c4c34a16891f84e7b','大爷的',3,'2017-08-18'),('2f9d8788819411e784341cb72c29411a','tt','670b14728ad9902aecba32e22fa4f6bd','tt',2,'2017-08-15'),('44d94eb9823d11e78b9700ffa085cded','ad','670b14728ad9902aecba32e22fa4f6bd','ad',2,'2017-08-16'),('83aa6a57816d11e784341cb72c29411a','suibian','202cb962ac59075b964b07152d234b70','suibian',2,'2017-08-15'),('97f0a6057ab911e78afd1cb72c29411a','mike','202cb962ac59075b964b07152d234b70','Mike',3,'2017-08-06'),('aca4f3b47ab911e78afd1cb72c29411a','lily','202cb962ac59075b964b07152d234b70','Lily',3,'2017-08-06'),('bc6d464a818d11e784341cb72c29411a','test','202cb962ac59075b964b07152d234b70','test',2,'2017-08-15'),('bf1b34af7b5411e797081cb72c29411a','a','0cc175b9c0f1b6a831c399e269772661','a',3,'2017-08-07'),('e3cb670c782811e7a33c1cb72c29411a','jone','202cb962ac59075b964b07152d234b70','Jone',3,'2017-08-03'),('fcd7a9527b3a11e797081cb72c29411a','bolom','202cb962ac59075b964b07152d234b70','Bolom',1,'2017-08-07');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `workbook`
--

DROP TABLE IF EXISTS `workbook`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `workbook` (
  `workno` int(3) DEFAULT NULL,
  `workname` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `workbook`
--

LOCK TABLES `workbook` WRITE;
/*!40000 ALTER TABLE `workbook` DISABLE KEYS */;
INSERT INTO `workbook` VALUES (0,'root'),(100,'用户管理'),(200,'简历管理'),(300,'资源管理');
/*!40000 ALTER TABLE `workbook` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-08-28  9:50:17

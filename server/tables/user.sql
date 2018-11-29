DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `user_id` char(14) NOT NULL PRIMARY KEY,
  `user_password` char(100) NOT NULL,
  `user_sex` char(1) NULL
) ENGINE=InnoDB DEFAULT CHARSET=gbk;

INSERT INTO `user` VALUES ('alice', '123456', '');
INSERT INTO `user` VALUES ('bob', '123456', '');
INSERT INTO `user` VALUES ('candy', '123456', '');
INSERT INTO `user` VALUES ('darcy', '123456', '');
INSERT INTO `user` VALUES ('echo', '123456', '');
INSERT INTO `user` VALUES ('frank', '123456', '');
INSERT INTO `user` VALUES ('gary', '123456', '');
INSERT INTO `user` VALUES ('miotokyo', 'byxiaowu9', '');

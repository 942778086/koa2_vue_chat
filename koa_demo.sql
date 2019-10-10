/*
 Navicat Premium Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 50562
 Source Host           : localhost:3306
 Source Schema         : koa_demo

 Target Server Type    : MySQL
 Target Server Version : 50562
 File Encoding         : 65001

 Date: 10/10/2019 11:18:38
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `pwd` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES (1, '942778086@qq.com', 'ThinkYourself');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `age` int(11) NOT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `pwd` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `sign` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `regDay` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 24 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, '吴建星', 20, '武汉', 'ThinkYourself', 'http://localhost:3001/upload/ava/3.jpg', 'think more', '2019-10-10 00:00:00');
INSERT INTO `user` VALUES (3, '李进', 23, '大理', 'ThinkYourself', 'http://localhost:3001/upload/ava/2.jpg', '还没有签名', '2019-10-10 00:00:00');
INSERT INTO `user` VALUES (4, '白乐', 22, '北京', 'ThinkYourself', 'http://localhost:3001/upload/ava/4.jpg', '还没有签名', '2019-10-10 00:00:00');
INSERT INTO `user` VALUES (7, '周箭锋', 24, '武汉', 'ThinkYourself', 'http://localhost:3001/upload/ava/5.jpg', '还没有签名', '2019-10-10 00:00:00');
INSERT INTO `user` VALUES (8, '黄敏芳', 21, '武汉', 'ThinkYourself', 'http://localhost:3001/upload/ava/6.jpg', '还没有签名', '2019-10-10 00:00:00');
INSERT INTO `user` VALUES (9, '霍梓君', 21, '北京', 'ThinkYourself', 'http://localhost:3001/upload/ava/2.jpg', '还没有签名', '2019-10-10 00:00:00');
INSERT INTO `user` VALUES (15, '闫寒冬', 22, '武汉', 'ThinkYourself', 'http://localhost:3001/upload/ava/3.jpg', '还没有签名', '2019-10-10 00:00:00');
INSERT INTO `user` VALUES (16, '吴建星的小号', 21, '云南', 'ThinkYourself', 'http://localhost:3001/upload/ava/4.jpg', '还没有签名', '2019-10-10 00:00:00');
INSERT INTO `user` VALUES (17, '毛建伟', 22, '湖北', 'ThinkYourself', 'http://localhost:3001/upload/ava/5.jpg', '还没有签名', '2019-10-10 00:00:00');
INSERT INTO `user` VALUES (18, '希尔薇', 16, 'LoadTown', 'ThinkYourself', 'http://localhost:3001/upload/ava/6.jpg', '还没有签名', '2019-10-10 00:00:00');
INSERT INTO `user` VALUES (23, '林秋婷', 14, '海南', NULL, 'http://localhost:3001/upload/ava/1570676402263_pic1.jpg', '还没有签名', '2019-10-10 00:00:00');

SET FOREIGN_KEY_CHECKS = 1;

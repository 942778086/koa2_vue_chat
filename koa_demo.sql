/*
 Navicat Premium Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 50561
 Source Host           : localhost:3306
 Source Schema         : koa_demo

 Target Server Type    : MySQL
 Target Server Version : 50561
 File Encoding         : 65001

 Date: 30/09/2019 22:32:21
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
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `age` int(11) NULL DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, '吴建星', 20, '武汉');
INSERT INTO `user` VALUES (2, '毛建伟', 22, '武汉');
INSERT INTO `user` VALUES (3, '闫寒冬', 21, '武汉');
INSERT INTO `user` VALUES (4, '柯金涛', 22, '武汉');
INSERT INTO `user` VALUES (5, '徐远', 21, '成都');
INSERT INTO `user` VALUES (6, '陈美芳', 20, '武汉');
INSERT INTO `user` VALUES (7, '黄敏芳', 20, '武汉');
INSERT INTO `user` VALUES (8, '白乐', 22, '北京');
INSERT INTO `user` VALUES (9, '周箭峰', 24, '武汉');
INSERT INTO `user` VALUES (10, '王路辉', 22, '6016');

SET FOREIGN_KEY_CHECKS = 1;

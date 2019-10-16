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

 Date: 16/10/2019 17:43:50
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
-- Table structure for chat
-- ----------------------------
DROP TABLE IF EXISTS `chat`;
CREATE TABLE `chat`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `send_id` int(11) NOT NULL,
  `receive_id` int(11) NOT NULL,
  `send_time` timestamp NULL DEFAULT NULL,
  `content` varchar(300) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 76 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of chat
-- ----------------------------
INSERT INTO `chat` VALUES (1, 1, 1, '2019-10-16 17:06:52', 'hello world');
INSERT INTO `chat` VALUES (72, 1, 18, '2019-10-16 17:36:33', '你好');
INSERT INTO `chat` VALUES (73, 18, 1, '2019-10-16 17:36:39', '你好');
INSERT INTO `chat` VALUES (74, 1, 18, '2019-10-16 17:36:44', '我是吴建星');
INSERT INTO `chat` VALUES (75, 18, 1, '2019-10-16 17:36:50', '我是希尔薇');

-- ----------------------------
-- Table structure for contact
-- ----------------------------
DROP TABLE IF EXISTS `contact`;
CREATE TABLE `contact`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `friend_id` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of contact
-- ----------------------------
INSERT INTO `contact` VALUES (1, 1, 3);

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
  `reg_day` timestamp NULL DEFAULT NULL,
  `socket_id` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 24 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, '吴建星', 20, '武汉', 'ThinkYourself', 'http://localhost:3001/upload/ava/3.jpg', 'think more', '2019-10-10 00:00:00', 'FF-nsmNlDYz4EbchAAAB');
INSERT INTO `user` VALUES (3, '李进', 23, '大理', 'ThinkYourself', 'http://localhost:3001/upload/ava/2.jpg', '还没有签名', '2019-10-10 00:00:00', 'eKYWjfE4_JXYVujHAAAG');
INSERT INTO `user` VALUES (4, '白乐', 22, '北京', 'ThinkYourself', 'http://localhost:3001/upload/ava/4.jpg', '白乐的乐不是音乐的乐', '2019-10-10 00:00:00', NULL);
INSERT INTO `user` VALUES (7, '周箭锋', 24, '武汉', 'ThinkYourself', 'http://localhost:3001/upload/ava/5.jpg', '还没有签名', '2019-10-10 00:00:00', NULL);
INSERT INTO `user` VALUES (8, '黄敏芳', 21, '武汉', 'ThinkYourself', 'http://localhost:3001/upload/ava/6.jpg', '还没有签名', '2019-10-10 00:00:00', NULL);
INSERT INTO `user` VALUES (9, '霍梓君', 21, '北京', 'ThinkYourself', 'http://localhost:3001/upload/ava/2.jpg', '还没有签名', '2019-10-10 00:00:00', NULL);
INSERT INTO `user` VALUES (15, '闫寒冬', 22, '武汉', 'ThinkYourself', 'http://localhost:3001/upload/ava/3.jpg', '还没有签名', '2019-10-10 00:00:00', NULL);
INSERT INTO `user` VALUES (16, '吴建星的小号', 21, '云南', 'ThinkYourself', 'http://localhost:3001/upload/ava/4.jpg', '还没有签名', '2019-10-10 00:00:00', NULL);
INSERT INTO `user` VALUES (17, '毛建伟', 22, '湖北', 'ThinkYourself', 'http://localhost:3001/upload/ava/5.jpg', '还没有签名', '2019-10-10 00:00:00', NULL);
INSERT INTO `user` VALUES (18, '希尔薇', 16, 'LoadTown', 'ThinkYourself', 'http://localhost:3001/upload/ava/6.jpg', '喜欢红色的花，在茶里面加入两朵吧', '2019-10-10 00:00:00', 'sI_MPoZ4mSwbFr3mAAAA');
INSERT INTO `user` VALUES (23, '林秋婷', 14, '海南', NULL, 'http://localhost:3001/upload/ava/1570676402263_pic1.jpg', '还没有签名', '2019-10-10 00:00:00', NULL);

SET FOREIGN_KEY_CHECKS = 1;

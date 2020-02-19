-- MySQL dump 10.13  Distrib 5.7.29, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: Portal_PRL
-- ------------------------------------------------------
-- Server version	5.7.29-0ubuntu0.18.04.1

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
-- Table structure for table `Actuaciones`
--

DROP TABLE IF EXISTS `Actuaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Actuaciones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(256) DEFAULT NULL,
  `descripcion` varchar(10000) DEFAULT NULL,
  `direccion` varchar(45) NOT NULL,
  `poblacion` varchar(45) NOT NULL,
  `provincia` varchar(45) NOT NULL,
  `created_At` datetime NOT NULL,
  `updated_At` datetime DEFAULT NULL,
  `deleted_At` datetime DEFAULT NULL,
  `imageUrl` varchar(256) DEFAULT NULL,
  `Usuarios_id` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Actuaciones_Usuarios1_idx` (`Usuarios_id`),
  CONSTRAINT `fk_Actuaciones_Usuarios1` FOREIGN KEY (`Usuarios_id`) REFERENCES `Usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Actuaciones`
--

LOCK TABLES `Actuaciones` WRITE;
/*!40000 ALTER TABLE `Actuaciones` DISABLE KEYS */;
INSERT INTO `Actuaciones` VALUES (1,'Adecuación de divesas actuaciones del Palacion de Ferias y Congresos de Lugo','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.','Avda. de los Deportes s/n','Lugo','Lugo','2020-01-25 07:19:58','2020-01-31 18:28:37',NULL,'https://res.cloudinary.com/dcbefsoty/image/upload/v1581781391/e0f93f72-8887-42d8-948f-98dfa0a3f4df.jpg','e0f93f72-8887-42d8-948f-98dfa0a3f4df'),(2,'Remodelación de edificion',NULL,'C/ Ayala 8','Madrid','Madrid','2020-01-25 00:08:23','2020-01-31 18:28:47',NULL,NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),(3,'Construcción de vivienda unifamiliar',NULL,'Bº Karega - CC Max Center','Barakaldo','Vizcaya','2020-01-25 00:04:17','2020-01-26 19:52:52',NULL,'https://res.cloudinary.com/dcbefsoty/image/upload/v1582054870/e0f93f72-8887-42d8-948f-98dfa0a3f4df.jpg','e0f93f72-8887-42d8-948f-98dfa0a3f4df'),(4,'Acondicionamiento y mejora de trazado',NULL,'Ctra. N-432 Tramo: Cerro Muriano - Córdoba','Córdoba','Córdoba','2020-01-28 23:42:36','2020-01-31 18:34:29',NULL,NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),(5,'62 viviendas protegidas',NULL,'Parcela Urbana RC-9','Zuera','Zaragoza','2020-01-29 01:10:49','2020-02-01 23:28:13',NULL,NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),(6,'Nueva Carretera',NULL,'Ronda de Castilla','Narón','Barcelona','2020-01-29 01:11:26',NULL,'2020-02-01 23:01:16',NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df');
/*!40000 ALTER TABLE `Actuaciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Actuaciones_Trabajadores`
--

DROP TABLE IF EXISTS `Actuaciones_Trabajadores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Actuaciones_Trabajadores` (
  `Actuaciones_id` int(11) NOT NULL AUTO_INCREMENT,
  `Trabajadores_id` varchar(64) NOT NULL,
  PRIMARY KEY (`Actuaciones_id`,`Trabajadores_id`),
  KEY `fk_Actuaciones_has_Trabajadores_Trabajadores1_idx` (`Trabajadores_id`),
  KEY `fk_Actuaciones_has_Trabajadores_Actuaciones1_idx` (`Actuaciones_id`),
  CONSTRAINT `fk_Actuaciones_has_Trabajadores_Actuaciones1` FOREIGN KEY (`Actuaciones_id`) REFERENCES `Actuaciones` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Actuaciones_has_Trabajadores_Trabajadores1` FOREIGN KEY (`Trabajadores_id`) REFERENCES `Trabajadores` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Actuaciones_Trabajadores`
--

LOCK TABLES `Actuaciones_Trabajadores` WRITE;
/*!40000 ALTER TABLE `Actuaciones_Trabajadores` DISABLE KEYS */;
INSERT INTO `Actuaciones_Trabajadores` VALUES (1,'4cf5e836-9a1b-4deb-af39-9eeebd70a88c'),(1,'5407bcb1-3e89-4f80-8c48-2fa72eaa32a5'),(1,'8a78c214-b2f0-4585-b901-4f2a7f198c75'),(1,'9fea86bf-7eb8-4efd-abf9-1e532e2ec232'),(1,'acff66ac-61f6-4c27-9a91-41f1ca2d9f28'),(1,'c30a76c7-73d0-4b4e-bbfb-fdfa01391c89'),(1,'c875bce0-d45d-4518-8a67-355ef9316d43'),(1,'e66b0040-28fe-4c19-8dc1-69f6a136990b'),(2,'12c92c00-396c-4dc9-b7a0-285bfc611e5c'),(2,'6d72f03f-905b-4fdf-a265-52a1e92d946a'),(2,'e66b0040-28fe-4c19-8dc1-69f6a136990b'),(3,'6d72f03f-905b-4fdf-a265-52a1e92d946a'),(3,'e66b0040-28fe-4c19-8dc1-69f6a136990b'),(4,'e66b0040-28fe-4c19-8dc1-69f6a136990b'),(5,'12c92c00-396c-4dc9-b7a0-285bfc611e5c'),(5,'13cf1066-918d-4467-8e6e-6e3cec10fb31'),(5,'422972bf-fbbd-4b51-a83e-4363b9d9e3f3'),(5,'66f5ba82-5e1a-4a69-ab5b-fbd27bb5d473'),(5,'6d72f03f-905b-4fdf-a265-52a1e92d946a'),(5,'c30a76c7-73d0-4b4e-bbfb-fdfa01391c89'),(5,'e66b0040-28fe-4c19-8dc1-69f6a136990b');
/*!40000 ALTER TABLE `Actuaciones_Trabajadores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Requisitos`
--

DROP TABLE IF EXISTS `Requisitos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Requisitos` (
  `id` int(11) NOT NULL,
  `tipo` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Requisitos`
--

LOCK TABLES `Requisitos` WRITE;
/*!40000 ALTER TABLE `Requisitos` DISABLE KEYS */;
INSERT INTO `Requisitos` VALUES (1,'Formacion'),(2,'Apto'),(3,'Epis');
/*!40000 ALTER TABLE `Requisitos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Trabajadores`
--

DROP TABLE IF EXISTS `Trabajadores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Trabajadores` (
  `id` varchar(64) NOT NULL,
  `dni` varchar(9) NOT NULL,
  `apellidos` varchar(45) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `created_At` datetime NOT NULL,
  `updated_At` datetime DEFAULT NULL,
  `deleted_At` datetime DEFAULT NULL,
  `Usuarios_id` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `dni_UNIQUE` (`dni`),
  KEY `fk_Trabajadores_Usuarios1_idx` (`Usuarios_id`),
  CONSTRAINT `fk_Trabajadores_Usuarios1` FOREIGN KEY (`Usuarios_id`) REFERENCES `Usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Trabajadores`
--

LOCK TABLES `Trabajadores` WRITE;
/*!40000 ALTER TABLE `Trabajadores` DISABLE KEYS */;
INSERT INTO `Trabajadores` VALUES ('053b8a62-c79a-46a5-b2cc-077a9362aa7a','32378572T','Pérez Torres','Pablo','2020-02-09 04:26:30','2020-02-13 19:16:40','2020-02-14 00:29:29','e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('07ebadba-d801-4c71-9e0b-3ef7a4af38d4','22038299K','Vila Pérez','Iñaki','2020-01-26 17:19:33',NULL,NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('09861369-457b-423f-b469-88aad4a9bb6b','52784481X','Roura Sánchez','Francisco','2020-02-11 23:35:11',NULL,'2020-02-12 02:14:07','e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('12c92c00-396c-4dc9-b7a0-285bfc611e5c','26057558F','Parada Tirado','Nicolás','2020-01-24 23:24:21',NULL,NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('13cf1066-918d-4467-8e6e-6e3cec10fb31','45127665D','Villar Martínez','Joaquín','2020-01-24 23:30:01','2020-02-06 02:00:11',NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('28b03bd5-db61-403e-90a4-8679f6146734','89924575A','Rodríguez Lazar','María','2020-02-10 11:20:33',NULL,NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('2b3dbe8a-2f76-45a4-9186-d7628eaeefac','44480125B','Abal Rodríguez','Marta','2020-02-11 19:33:18','2020-02-12 19:53:44',NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('383d4b9a-5473-4e45-a367-b4af8166030c','04341620W','Pulido Heredia','José','2020-02-10 19:03:49',NULL,'2020-02-14 00:29:31','e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('399e390c-bc38-4519-9178-fc3d779e2c01','66036790H','Romero Tendero','María José','2020-02-09 04:19:21',NULL,NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('422972bf-fbbd-4b51-a83e-4363b9d9e3f3','24851831D','Montes De Castro','Beatriz','2020-02-01 22:53:21',NULL,NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('4cf5e836-9a1b-4deb-af39-9eeebd70a88c','32024399G','Moreno Lozano','Francisco','2020-01-26 15:42:14',NULL,NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('5407bcb1-3e89-4f80-8c48-2fa72eaa32a5','58973452A','Barrera Ojeda','Cristina','2020-02-11 18:22:35',NULL,NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('61d09fbd-639c-4e29-96f9-6e4d0e901dfb','28581347Y','Navarro Paz','Ana María','2020-02-17 18:27:05',NULL,NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('66f5ba82-5e1a-4a69-ab5b-fbd27bb5d473','76734942L','Ribera Verdugo','Luis','2020-01-24 23:35:19',NULL,NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('6d72f03f-905b-4fdf-a265-52a1e92d946a','98190258S','Rodríguez Casas','Hugo','2020-01-25 00:16:48',NULL,NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('8a78c214-b2f0-4585-b901-4f2a7f198c75','33142702R','Carrasco Díaz','Dolores','2020-02-09 04:25:14','2020-02-13 12:27:10',NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('9fea86bf-7eb8-4efd-abf9-1e532e2ec232','32035524C','Roca Mota','Isabel','2020-02-09 04:14:13',NULL,NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('a9ca31fe-d2b4-4a43-a213-019aa91c2b94','29543702H','González González','Mireia','2020-02-06 15:03:53',NULL,'2020-02-12 11:34:02','e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('aa2922b3-b905-45c6-b692-fe3b0b318548','38387256A','Iglesias Sanz','Juan Antonio','2020-01-26 14:55:39',NULL,NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('acff66ac-61f6-4c27-9a91-41f1ca2d9f28','65894013W','Ortega Carbó','María José','2020-02-08 12:54:58',NULL,NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('b15c0417-144b-43c7-993e-10a169d05f63','93168103W','Díaz Mendoza','Alberto','2020-02-10 18:11:39',NULL,'2020-02-12 18:21:32','e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('bfcee3c5-5079-4cfc-8fcb-0822b15e4298','55490662B','López González','María Carmen','2020-02-10 00:41:43',NULL,NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('bfed04ed-05db-4e9c-9a59-bfac89078750','81368818Q','Gómez Vázquez','Juan Carlos','2020-02-10 18:59:07','2020-02-14 20:24:34',NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('c30a76c7-73d0-4b4e-bbfb-fdfa01391c89','35616233C','Centeno Diez','María Teresa','2020-02-01 23:18:06',NULL,NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('c875bce0-d45d-4518-8a67-355ef9316d43','72781349B','Cañadas Rodríguez','Dolores','2020-01-25 00:42:07','2020-02-16 00:45:23',NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('d6351768-f816-4187-9211-1ad791293ad4','54698254E','Pastor Ribera','Manuel','2020-02-09 03:26:06',NULL,NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('e66b0040-28fe-4c19-8dc1-69f6a136990b','27009603J','Martínez Roldán','Rocío','2020-02-13 19:22:06',NULL,NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('e9571e91-21ce-4f75-9946-25fee13fa2b1','10868316B','Vázquez López','Fernando','2020-02-11 00:12:03',NULL,NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('f446195d-a487-4a0f-bf0c-55a17a2d38f3','40432008D','Zambrano González','Jesús','2020-02-06 15:06:08',NULL,NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df');
/*!40000 ALTER TABLE `Trabajadores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Trabajadores_Requisitos`
--

DROP TABLE IF EXISTS `Trabajadores_Requisitos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Trabajadores_Requisitos` (
  `Trabajadores_id` varchar(64) NOT NULL,
  `Requisitos_id` int(11) NOT NULL,
  PRIMARY KEY (`Trabajadores_id`,`Requisitos_id`),
  KEY `fk_Trabajadores_has_Requisitos_Requisitos1_idx` (`Requisitos_id`),
  KEY `fk_Trabajadores_has_Requisitos_Trabajadores1_idx` (`Trabajadores_id`),
  CONSTRAINT `fk_Trabajadores_has_Requisitos_Requisitos1` FOREIGN KEY (`Requisitos_id`) REFERENCES `Requisitos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Trabajadores_has_Requisitos_Trabajadores1` FOREIGN KEY (`Trabajadores_id`) REFERENCES `Trabajadores` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Trabajadores_Requisitos`
--

LOCK TABLES `Trabajadores_Requisitos` WRITE;
/*!40000 ALTER TABLE `Trabajadores_Requisitos` DISABLE KEYS */;
/*!40000 ALTER TABLE `Trabajadores_Requisitos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Uploads`
--

DROP TABLE IF EXISTS `Uploads`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Uploads` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Trabajadores_id` varchar(64) NOT NULL,
  `Requisitos_id` int(11) NOT NULL,
  `Usuarios_id` varchar(64) NOT NULL,
  `secureUrl` varchar(256) NOT NULL,
  `FechaCaducidad` date NOT NULL,
  `Obsoleto` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`,`Trabajadores_id`,`Requisitos_id`,`Usuarios_id`),
  KEY `fk_Uploads_Requisitos1_idx` (`Requisitos_id`),
  KEY `fk_Uploads_Usuarios1_idx` (`Usuarios_id`),
  KEY `fk_Uploads_Trabajadores_idx` (`Trabajadores_id`),
  CONSTRAINT `fk_Uploads_Requisitos1` FOREIGN KEY (`Requisitos_id`) REFERENCES `Requisitos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Uploads_Trabajadores` FOREIGN KEY (`Trabajadores_id`) REFERENCES `Trabajadores` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Uploads_Usuarios1` FOREIGN KEY (`Usuarios_id`) REFERENCES `Usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Uploads`
--

LOCK TABLES `Uploads` WRITE;
/*!40000 ALTER TABLE `Uploads` DISABLE KEYS */;
INSERT INTO `Uploads` VALUES (1,'2b3dbe8a-2f76-45a4-9186-d7628eaeefac',2,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1581995842/eb70bcba-a955-4b6c-8cb4-da2a40f0ca33.pdf','2020-02-12',0),(2,'2b3dbe8a-2f76-45a4-9186-d7628eaeefac',3,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1581995842/37789554-d4bf-4943-92fc-57a5ece7d56f.pdf','2020-04-21',0),(3,'2b3dbe8a-2f76-45a4-9186-d7628eaeefac',1,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1581995842/81d86e30-ce99-4b26-aa6a-ec93a69cf8bc.pdf','2020-02-08',0),(4,'5407bcb1-3e89-4f80-8c48-2fa72eaa32a5',3,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1581995895/ff14e345-e0af-4b12-9d48-f046ef87cc50.pdf','2020-07-19',0),(5,'5407bcb1-3e89-4f80-8c48-2fa72eaa32a5',1,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1581995895/bf7851d6-8d4e-452a-94c4-cdca9c2339ee.pdf','2020-11-08',0),(6,'5407bcb1-3e89-4f80-8c48-2fa72eaa32a5',2,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1581995895/200bbc80-79a6-4c3c-9100-78da57964840.pdf','2020-03-01',0),(7,'c875bce0-d45d-4518-8a67-355ef9316d43',2,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1581995940/9288d57b-927a-48b8-8168-8ab28d3a2a10.pdf','2019-12-21',1),(8,'c875bce0-d45d-4518-8a67-355ef9316d43',3,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1581995940/7e18cc81-7976-4789-b716-6f39c3e7c51b.pdf','2020-09-07',0),(9,'c875bce0-d45d-4518-8a67-355ef9316d43',1,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1581995940/ccf00b83-f6c0-4162-a818-a1edcbbc5577.pdf','2020-03-08',0),(10,'c875bce0-d45d-4518-8a67-355ef9316d43',2,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1581996017/e0bcdb3a-3831-4bbd-b93c-a03dc6d93428.pdf','2020-12-21',0),(11,'8a78c214-b2f0-4585-b901-4f2a7f198c75',2,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582049095/7619a6f7-fda8-45d8-9cb0-01e12c64fae9.pdf','2020-03-14',0),(12,'8a78c214-b2f0-4585-b901-4f2a7f198c75',3,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582049095/905f8659-d35e-4902-ab56-7ee61bc21314.pdf','2020-09-08',0),(13,'8a78c214-b2f0-4585-b901-4f2a7f198c75',1,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582049095/2b82718d-c74d-4b20-9fe1-25dd89c9672d.pdf','2020-11-11',0),(14,'66f5ba82-5e1a-4a69-ab5b-fbd27bb5d473',3,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582049164/58ca449b-9b94-45a0-86c4-cf719cc68fd3.pdf','2019-09-26',0),(15,'66f5ba82-5e1a-4a69-ab5b-fbd27bb5d473',1,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582049164/48b10652-9a26-43be-9f41-4e5429abde79.pdf','2020-06-07',0),(16,'66f5ba82-5e1a-4a69-ab5b-fbd27bb5d473',2,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582049164/c70b1ed8-462d-4730-b39c-9dd02682c13b.pdf','2020-04-03',0),(17,'9fea86bf-7eb8-4efd-abf9-1e532e2ec232',3,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582049201/816dbd39-c44e-4034-ae41-136c22fcdf84.pdf','2020-11-14',0),(18,'9fea86bf-7eb8-4efd-abf9-1e532e2ec232',1,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582049201/cef279de-6cf3-4697-bfb3-f743083d7aab.pdf','2020-02-17',0),(19,'9fea86bf-7eb8-4efd-abf9-1e532e2ec232',2,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582049201/3a277cbc-37e3-4c63-8e74-761b6456fdd0.pdf','2019-07-12',0),(20,'07ebadba-d801-4c71-9e0b-3ef7a4af38d4',1,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582049244/6e4002b7-a42c-4fa3-9624-d5e62b8c15a0.pdf','2020-08-28',1),(21,'07ebadba-d801-4c71-9e0b-3ef7a4af38d4',3,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582049244/0283c4c7-c121-452f-ad54-ae8d6e231143.pdf','2020-04-05',0),(22,'07ebadba-d801-4c71-9e0b-3ef7a4af38d4',2,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582049316/cc2defd4-9c2c-42ff-a251-a7a845daee42.pdf','2020-02-01',0),(23,'07ebadba-d801-4c71-9e0b-3ef7a4af38d4',1,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582049317/0a9e4d81-5372-4149-a4f9-db0ad0897d7f.pdf','2020-08-28',0),(24,'e66b0040-28fe-4c19-8dc1-69f6a136990b',3,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582050003/61014e40-972f-4f21-9d8e-42a2515574e2.pdf','2019-04-21',1),(25,'e66b0040-28fe-4c19-8dc1-69f6a136990b',1,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582050003/8fd96211-0452-40c0-ad40-2e6693401fa4.pdf','2019-09-08',0),(26,'e66b0040-28fe-4c19-8dc1-69f6a136990b',2,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582050003/f4d2e3df-3546-4610-941b-5f1bcb1c6b2e.pdf','2019-11-12',0),(27,'e66b0040-28fe-4c19-8dc1-69f6a136990b',3,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582121010/36703818-a1cb-42a9-84eb-ff27b0c3edcd.pdf','2020-03-06',0);
/*!40000 ALTER TABLE `Uploads` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Usuarios`
--

DROP TABLE IF EXISTS `Usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Usuarios` (
  `id` varchar(64) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `created_At` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Usuarios`
--

LOCK TABLES `Usuarios` WRITE;
/*!40000 ALTER TABLE `Usuarios` DISABLE KEYS */;
INSERT INTO `Usuarios` VALUES ('18b68eca-66ff-4a36-a3ef-a9a5cc2df6a1','pablo02@yopmail.com','$2b$10$NQ7Sim.HZvkn8UUCWUEzF.3oqxXJxt5rM8bPn7qWLCN0NwDGk5SZu','2020-01-25 14:55:20'),('1bbf897a-fb89-4fa1-aa1c-bea23df1d179','pablo25@yopmail.com','$2b$10$mX0rMroPJIwfj4AmUKckYeddSePM2l.FMbFBs6yOjhdSzL.NQOHV2','2020-02-01 11:37:22'),('1ddbfc68-e563-47d5-bf39-53c1a07cf517','pablo01@yopmail.com','$2b$10$7YfryFfdqFc8SuCBCbed3.jmD2vY5FZGtU3UrZNo.77XwfvJINvue','2020-01-25 02:24:21'),('2e902dcb-4d95-4903-a788-2081e919021c','pablo18@yopmail.com','$2b$10$Tn.muHTb6tTTbdRNx46Sxu/HnPYL5cPj8ja5tzkamjELPL7rujQVK','2020-02-01 22:49:40'),('76dce147-a9a5-4ad9-a999-fc35fac6408f','pablo09@yopmail.com','$2b$10$.kjDLrclyQFuxL3nOPPUxetSp9pkB4OoqYrnc6PRNNWiR54qVmYHq','2020-01-25 12:27:20'),('8716c0a5-7fba-4d6d-980a-c02cacc03f88','pablo23@yopmail.com','$2b$10$cP2EjhHfans8cU6HMOYZnun9KysAkmJqMSbvK.3VqALgDrA7wRoFm','2020-02-01 23:16:25'),('e0f93f72-8887-42d8-948f-98dfa0a3f4df','pablo.pico.uceira@gmail.com','$2b$10$lZnMfC8XAoJgIcgxCfQ1WOzWRUVhhNBEny44FxN4HkfjDDchLnGOK','2020-02-03 23:13:29');
/*!40000 ALTER TABLE `Usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-02-19 18:58:23

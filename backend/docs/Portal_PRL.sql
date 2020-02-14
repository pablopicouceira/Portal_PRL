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
  `descripcion` varchar(256) NOT NULL,
  `direccion` varchar(45) NOT NULL,
  `poblacion` varchar(45) NOT NULL,
  `provincia` varchar(45) NOT NULL,
  `created_At` datetime NOT NULL,
  `updated_At` datetime DEFAULT NULL,
  `deleted_At` datetime DEFAULT NULL,
  `imageUrl` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Actuaciones`
--

LOCK TABLES `Actuaciones` WRITE;
/*!40000 ALTER TABLE `Actuaciones` DISABLE KEYS */;
INSERT INTO `Actuaciones` VALUES (1,'Adecuación de divesas actuaciones del Palacion de Ferias y Congresos de Lugo','Avda. de los Deportes s/n','Lugo','Lugo','2020-01-25 07:19:58','2020-01-31 18:28:37',NULL,NULL),(2,'Remodelación de edificion','C/ Ayala 8','Madrid','Madrid','2020-01-25 00:08:23','2020-01-31 18:28:47',NULL,NULL),(3,'Construcción de vivienda unifamiliar','Bº Karega - CC Max Center','Barakaldo','Vizcaya','2020-01-25 00:04:17','2020-01-26 19:52:52',NULL,NULL),(4,'Acondicionamiento y mejora de trazado','Ctra. N-432 Tramo: Cerro Muriano - Córdoba','Córdoba','Córdoba','2020-01-28 23:42:36','2020-01-31 18:34:29',NULL,NULL),(5,'62 viviendas protegidas','Parcela Urbana RC-9','Zuera','Zaragoza','2020-01-29 01:10:49','2020-02-01 23:28:13',NULL,NULL),(6,'Nueva Carretera','Ronda de Castilla','Narón','Barcelona','2020-01-29 01:11:26',NULL,'2020-02-01 23:01:16',NULL);
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
INSERT INTO `Actuaciones_Trabajadores` VALUES (1,'4cf5e836-9a1b-4deb-af39-9eeebd70a88c'),(1,'e66b0040-28fe-4c19-8dc1-69f6a136990b'),(2,'12c92c00-396c-4dc9-b7a0-285bfc611e5c'),(2,'6d72f03f-905b-4fdf-a265-52a1e92d946a'),(2,'e66b0040-28fe-4c19-8dc1-69f6a136990b'),(3,'6d72f03f-905b-4fdf-a265-52a1e92d946a'),(3,'e66b0040-28fe-4c19-8dc1-69f6a136990b'),(4,'e66b0040-28fe-4c19-8dc1-69f6a136990b'),(5,'12c92c00-396c-4dc9-b7a0-285bfc611e5c'),(5,'13cf1066-918d-4467-8e6e-6e3cec10fb31'),(5,'422972bf-fbbd-4b51-a83e-4363b9d9e3f3'),(5,'66f5ba82-5e1a-4a69-ab5b-fbd27bb5d473'),(5,'6d72f03f-905b-4fdf-a265-52a1e92d946a'),(5,'e66b0040-28fe-4c19-8dc1-69f6a136990b');
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
  PRIMARY KEY (`id`),
  UNIQUE KEY `dni_UNIQUE` (`dni`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Trabajadores`
--

LOCK TABLES `Trabajadores` WRITE;
/*!40000 ALTER TABLE `Trabajadores` DISABLE KEYS */;
INSERT INTO `Trabajadores` VALUES ('053b8a62-c79a-46a5-b2cc-077a9362aa7a','32378572T','Pérez Torres','Pablo','2020-02-09 04:26:30','2020-02-13 19:16:40','2020-02-14 00:29:29'),('07ebadba-d801-4c71-9e0b-3ef7a4af38d4','22038299K','Vila Pérez','Iñaki','2020-01-26 17:19:33',NULL,NULL),('09861369-457b-423f-b469-88aad4a9bb6b','52784481X','Roura Sánchez','Francisco','2020-02-11 23:35:11',NULL,'2020-02-12 02:14:07'),('12c92c00-396c-4dc9-b7a0-285bfc611e5c','26057558F','Parada Tirado','Nicolás','2020-01-24 23:24:21',NULL,NULL),('13cf1066-918d-4467-8e6e-6e3cec10fb31','45127665D','Villar Martínez','Joaquín','2020-01-24 23:30:01','2020-02-06 02:00:11',NULL),('28b03bd5-db61-403e-90a4-8679f6146734','89924575A','Rodríguez Lazar','María','2020-02-10 11:20:33',NULL,NULL),('2b3dbe8a-2f76-45a4-9186-d7628eaeefac','44480125B','Abal Rodríguez','Marta','2020-02-11 19:33:18','2020-02-12 19:53:44',NULL),('383d4b9a-5473-4e45-a367-b4af8166030c','04341620W','Pulido Heredia','José','2020-02-10 19:03:49',NULL,'2020-02-14 00:29:31'),('399e390c-bc38-4519-9178-fc3d779e2c01','66036790H','Romero Tendero','María José','2020-02-09 04:19:21',NULL,NULL),('422972bf-fbbd-4b51-a83e-4363b9d9e3f3','24851831D','Montes De Castro','Beatriz','2020-02-01 22:53:21',NULL,NULL),('4cf5e836-9a1b-4deb-af39-9eeebd70a88c','32024399G','Moreno Lozano','Francisco','2020-01-26 15:42:14',NULL,NULL),('5407bcb1-3e89-4f80-8c48-2fa72eaa32a5','58973452A','Barrera Ojeda','Cristina','2020-02-11 18:22:35',NULL,NULL),('66f5ba82-5e1a-4a69-ab5b-fbd27bb5d473','76734942L','Ribera Verdugo','Luis','2020-01-24 23:35:19',NULL,NULL),('6d72f03f-905b-4fdf-a265-52a1e92d946a','98190258S','Rodríguez Casas','Hugo','2020-01-25 00:16:48',NULL,NULL),('8a78c214-b2f0-4585-b901-4f2a7f198c75','33142702R','Carrasco Díaz','Dolores','2020-02-09 04:25:14','2020-02-13 12:27:10',NULL),('9e0cd316-7a78-4743-a680-aa5e59874d0d','05212967F','Cañadas Rodríguez','Dolores','2020-01-26 15:44:15','2020-02-13 19:16:04',NULL),('9fea86bf-7eb8-4efd-abf9-1e532e2ec232','32035524C','Roca Mota','Isabel','2020-02-09 04:14:13',NULL,NULL),('a9ca31fe-d2b4-4a43-a213-019aa91c2b94','29543702H','González González','Mireia','2020-02-06 15:03:53',NULL,'2020-02-12 11:34:02'),('aa2922b3-b905-45c6-b692-fe3b0b318548','38387256A','Iglesias Sanz','Juan Antonio','2020-01-26 14:55:39',NULL,NULL),('acff66ac-61f6-4c27-9a91-41f1ca2d9f28','65894013W','Ortega Carbó','María José','2020-02-08 12:54:58',NULL,NULL),('b15c0417-144b-43c7-993e-10a169d05f63','93168103W','Díaz Mendoza','Alberto','2020-02-10 18:11:39',NULL,'2020-02-12 18:21:32'),('bfcee3c5-5079-4cfc-8fcb-0822b15e4298','55490662B','López González','María Carmen','2020-02-10 00:41:43',NULL,NULL),('bfed04ed-05db-4e9c-9a59-bfac89078750','81368818Q','Gómez Vázquez','Juan Carlos','2020-02-10 18:59:07',NULL,NULL),('c30a76c7-73d0-4b4e-bbfb-fdfa01391c89','35616233C','Centeno Diez','María Teresa','2020-02-01 23:18:06',NULL,NULL),('c875bce0-d45d-4518-8a67-355ef9316d43','72781349B','Cañadas Rodríguez','Dolores','2020-01-25 00:42:07','2020-02-13 19:08:14',NULL),('d6351768-f816-4187-9211-1ad791293ad4','54698254E','Pastor Ribera','Manuel','2020-02-09 03:26:06',NULL,NULL),('e66b0040-28fe-4c19-8dc1-69f6a136990b','27009603J','Martínez Roldán','Rocío','2020-02-13 19:22:06',NULL,NULL),('e9571e91-21ce-4f75-9946-25fee13fa2b1','10868316B','Vázquez López','Fernando','2020-02-11 00:12:03',NULL,NULL),('f446195d-a487-4a0f-bf0c-55a17a2d38f3','40432008D','Zambrano González','Jesús','2020-02-06 15:06:08',NULL,NULL);
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
  `id` varchar(64) NOT NULL,
  `Trabajadores_id` varchar(64) NOT NULL,
  `Requisitos_id` int(11) NOT NULL,
  `Usuarios_id` varchar(64) NOT NULL,
  `secureUrl` varchar(256) DEFAULT NULL,
  `FechaCaducidad` date DEFAULT NULL,
  PRIMARY KEY (`id`,`Trabajadores_id`,`Requisitos_id`,`Usuarios_id`),
  KEY `fk_Uploads_Requisitos1_idx` (`Requisitos_id`),
  KEY `fk_Uploads_Usuarios1_idx` (`Usuarios_id`),
  KEY `fk_Uploads_Trabajadores_idx` (`Trabajadores_id`),
  CONSTRAINT `fk_Uploads_Requisitos1` FOREIGN KEY (`Requisitos_id`) REFERENCES `Requisitos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Uploads_Trabajadores` FOREIGN KEY (`Trabajadores_id`) REFERENCES `Trabajadores` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Uploads_Usuarios1` FOREIGN KEY (`Usuarios_id`) REFERENCES `Usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Uploads`
--

LOCK TABLES `Uploads` WRITE;
/*!40000 ALTER TABLE `Uploads` DISABLE KEYS */;
INSERT INTO `Uploads` VALUES ('26d8ed87-0732-47b8-9f50-e74cc94c05c6','7c544d83-87d4-463d-b6ee-6b73080d32d3',3,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1581524110/26d8ed87-0732-47b8-9f50-e74cc94c05c6.pdf',NULL),('27f0d026-d96d-4ffd-a678-449d60a9330d','7c544d83-87d4-463d-b6ee-6b73080d32d3',3,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1581524090/27f0d026-d96d-4ffd-a678-449d60a9330d.pdf',NULL),('35831313-5742-45d2-93c6-62ba31b8df00','7c544d83-87d4-463d-b6ee-6b73080d32d3',3,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1581524118/35831313-5742-45d2-93c6-62ba31b8df00.pdf',NULL),('c4383d33-d1cf-43da-bac3-2c1a0daae4cc','7c544d83-87d4-463d-b6ee-6b73080d32d3',3,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1581537445/c4383d33-d1cf-43da-bac3-2c1a0daae4cc.pdf',NULL),('fc16d916-68e2-47fb-918e-3874e4168c66','7c544d83-87d4-463d-b6ee-6b73080d32d3',3,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1581622098/fc16d916-68e2-47fb-918e-3874e4168c66.pdf',NULL);
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

-- Dump completed on 2020-02-14 10:56:45

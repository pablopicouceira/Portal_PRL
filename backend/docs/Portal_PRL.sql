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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Actuaciones`
--

LOCK TABLES `Actuaciones` WRITE;
/*!40000 ALTER TABLE `Actuaciones` DISABLE KEYS */;
INSERT INTO `Actuaciones` VALUES (1,'Adecuación de divesas actuaciones del Palacion de Ferias y Congresos de Lugo','Avda. de los Deportes s/n','Lugo','Lugo','2020-01-25 07:19:58','2020-01-31 18:28:37',NULL),(2,'Remodelación de edificion','C/ Ayala 8','Madrid','Madrid','2020-01-25 00:08:23','2020-01-31 18:28:47',NULL),(3,'Construcción de vivienda unifamiliar','Bº Karega - CC Max Center','Barakaldo','Vizcaya','2020-01-25 00:04:17','2020-01-26 19:52:52','2020-01-26 18:46:53'),(4,'Acondicionamiento y mejora de trazado','Ctra. N-432 Tramo: Cerro Muriano - Córdoba','Córdoba','Córdoba','2020-01-28 23:42:36','2020-01-31 18:34:29',NULL),(5,'Sucursal nº 2 Correos','C/ Cantera 25-27','Valladolid','Valladolid','2020-01-29 01:10:49','2020-01-31 18:51:18',NULL),(6,'Nueva Carretera','Ronda de Castilla','Narón','Barcelona','2020-01-29 01:11:26',NULL,NULL),(7,'Nueva Carretera','Ronda de Castilla','Narón','Barcelona','2020-01-29 01:11:26',NULL,NULL),(8,'Nueva Carretera','Ronda de Castilla','Narón','Barcelona','2020-01-29 01:11:27',NULL,NULL),(9,'Nueva Carretera','Ronda de Castilla','Narón','Barcelona','2020-01-29 01:11:28',NULL,NULL),(10,'Nueva Carretera','Ronda de Castilla','Narón','Madrid','2020-01-29 01:12:01',NULL,NULL),(23,'Nueva Carretera','Ronda de Castilla','Narón','Madrid','2020-01-30 20:39:03',NULL,NULL);
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
INSERT INTO `Actuaciones_Trabajadores` VALUES (1,'4cf5e836-9a1b-4deb-af39-9eeebd70a88c'),(2,'12c92c00-396c-4dc9-b7a0-285bfc611e5c'),(2,'6d72f03f-905b-4fdf-a265-52a1e92d946a'),(5,'12c92c00-396c-4dc9-b7a0-285bfc611e5c'),(5,'13cf1066-918d-4467-8e6e-6e3cec10fb31'),(5,'66f5ba82-5e1a-4a69-ab5b-fbd27bb5d473');
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
INSERT INTO `Trabajadores` VALUES ('07ebadba-d801-4c71-9e0b-3ef7a4af38d4','22038299K','Vila Pérez','Iñaki','2020-01-26 17:19:33',NULL,NULL),('12c92c00-396c-4dc9-b7a0-285bfc611e5c','26057558F','Parada Tirado','Nicolás','2020-01-24 23:24:21',NULL,NULL),('13cf1066-918d-4467-8e6e-6e3cec10fb31','45127665D','Iglesias Sanz','Juan Antonio','2020-01-24 23:30:01',NULL,NULL),('4cf5e836-9a1b-4deb-af39-9eeebd70a88c','32024399G','Moreno Lozano','Francisco','2020-01-26 15:42:14',NULL,NULL),('66f5ba82-5e1a-4a69-ab5b-fbd27bb5d473','76734942L','Ribera Verdugo','Luis','2020-01-24 23:35:19',NULL,NULL),('6d72f03f-905b-4fdf-a265-52a1e92d946a','98190258S','Rodríguez Casas','Hugo','2020-01-25 00:16:48',NULL,NULL),('9e0cd316-7a78-4743-a680-aa5e59874d0d','05212957F','Moreno Mejías','Roberto','2020-01-26 15:44:15',NULL,'2020-01-31 18:17:44'),('aa2922b3-b905-45c6-b692-fe3b0b318548','38387256A','Iglesias Sanz','Juan Antonio','2020-01-26 14:55:39',NULL,NULL),('c875bce0-d45d-4518-8a67-355ef9316d43','29997002B','Cañadas Rodríguez','Antonia','2020-01-25 00:42:07','2020-01-27 09:36:20',NULL);
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
  `id` int(11) NOT NULL,
  `fecha_de_caducidad` date NOT NULL,
  `Trabajadores_id` varchar(64) NOT NULL,
  `Requisitos_id` int(11) NOT NULL,
  `Usuarios_id` varchar(64) NOT NULL,
  PRIMARY KEY (`id`,`Trabajadores_id`,`Requisitos_id`,`Usuarios_id`),
  KEY `fk_Uploads_Trabajadores_idx` (`Trabajadores_id`),
  KEY `fk_Uploads_Requisitos1_idx` (`Requisitos_id`),
  KEY `fk_Uploads_Usuarios1_idx` (`Usuarios_id`),
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
INSERT INTO `Usuarios` VALUES ('18b68eca-66ff-4a36-a3ef-a9a5cc2df6a1','pablo02@yopmail.com','$2b$10$NQ7Sim.HZvkn8UUCWUEzF.3oqxXJxt5rM8bPn7qWLCN0NwDGk5SZu','2020-01-25 14:55:20'),('1bbf897a-fb89-4fa1-aa1c-bea23df1d179','pablo25@yopmail.com','$2b$10$mX0rMroPJIwfj4AmUKckYeddSePM2l.FMbFBs6yOjhdSzL.NQOHV2','2020-02-01 11:37:22'),('1ddbfc68-e563-47d5-bf39-53c1a07cf517','pablo01@yopmail.com','$2b$10$7YfryFfdqFc8SuCBCbed3.jmD2vY5FZGtU3UrZNo.77XwfvJINvue','2020-01-25 02:24:21'),('76dce147-a9a5-4ad9-a999-fc35fac6408f','pablo09@yopmail.com','$2b$10$.kjDLrclyQFuxL3nOPPUxetSp9pkB4OoqYrnc6PRNNWiR54qVmYHq','2020-01-25 12:27:20');
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

-- Dump completed on 2020-02-01 19:43:29

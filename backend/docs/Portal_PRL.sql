-- MySQL dump 10.13  Distrib 5.7.28, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: Portal_PRL
-- ------------------------------------------------------
-- Server version	5.7.28-0ubuntu0.18.04.4

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
  `id` varchar(64) NOT NULL,
  `descripcion` varchar(256) NOT NULL,
  `direccion` varchar(45) NOT NULL,
  `poblacion` varchar(45) NOT NULL,
  `provincia` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Actuaciones`
--

LOCK TABLES `Actuaciones` WRITE;
/*!40000 ALTER TABLE `Actuaciones` DISABLE KEYS */;
INSERT INTO `Actuaciones` VALUES ('865e8047-473b-4225-9a11-997067cd6b98','Obra menor','Bº Karega - CC Max Center','Barakaldo','Vizcaya'),('9993302b-641c-47d4-8d41-cf142638c12e','Instalación eléctrica oficina','Pol. de Pocomaco, 1º Avda, Parcela A6','A Coruña','A Coruña'),('efd9e2d1-d59a-4cc3-a526-27c51202b21c','Ejecución de edificio de 144 viviendas','Avda. de Aragón 148','Terrassa','Barcelona');
/*!40000 ALTER TABLE `Actuaciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Actuaciones_Trabajadores`
--

DROP TABLE IF EXISTS `Actuaciones_Trabajadores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Actuaciones_Trabajadores` (
  `Actuaciones_id` varchar(64) NOT NULL,
  `Trabajadores_id` varchar(64) NOT NULL,
  PRIMARY KEY (`Actuaciones_id`,`Trabajadores_id`),
  KEY `fk_Actuaciones_has_Trabajadores_Trabajadores1_idx` (`Trabajadores_id`),
  KEY `fk_Actuaciones_has_Trabajadores_Actuaciones1_idx` (`Actuaciones_id`),
  CONSTRAINT `fk_Actuaciones_has_Trabajadores_Actuaciones1` FOREIGN KEY (`Actuaciones_id`) REFERENCES `Actuaciones` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Actuaciones_has_Trabajadores_Trabajadores1` FOREIGN KEY (`Trabajadores_id`) REFERENCES `Trabajadores` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Actuaciones_Trabajadores`
--

LOCK TABLES `Actuaciones_Trabajadores` WRITE;
/*!40000 ALTER TABLE `Actuaciones_Trabajadores` DISABLE KEYS */;
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
INSERT INTO `Trabajadores` VALUES ('12c92c00-396c-4dc9-b7a0-285bfc611e5c','26057558F','Parada Tirado','Nicolás','2020-01-24 23:24:21',NULL,NULL),('13cf1066-918d-4467-8e6e-6e3cec10fb31','97648160G','Perdomo Arévalo','José Miguel','2020-01-24 23:30:01',NULL,NULL),('66f5ba82-5e1a-4a69-ab5b-fbd27bb5d473','76734942L','Ribera Verdugo','Luis','2020-01-24 23:35:19',NULL,NULL),('6d72f03f-905b-4fdf-a265-52a1e92d946a','98190258S','Rodríguez Casas','Hugo','2020-01-25 00:16:48',NULL,NULL),('c875bce0-d45d-4518-8a67-355ef9316d43','Z5790285V','Niño Carbo','Cristian','2020-01-25 00:42:07',NULL,NULL);
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
  `creada_en` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Usuarios`
--

LOCK TABLES `Usuarios` WRITE;
/*!40000 ALTER TABLE `Usuarios` DISABLE KEYS */;
INSERT INTO `Usuarios` VALUES ('18b68eca-66ff-4a36-a3ef-a9a5cc2df6a1','pablo02@yopmail.com','$2b$10$NQ7Sim.HZvkn8UUCWUEzF.3oqxXJxt5rM8bPn7qWLCN0NwDGk5SZu','2020-01-25 14:55:20'),('1ddbfc68-e563-47d5-bf39-53c1a07cf517','pablo01@yopmail.com','$2b$10$7YfryFfdqFc8SuCBCbed3.jmD2vY5FZGtU3UrZNo.77XwfvJINvue','2020-01-25 02:24:21'),('76dce147-a9a5-4ad9-a999-fc35fac6408f','pablo09@yopmail.com','$2b$10$.kjDLrclyQFuxL3nOPPUxetSp9pkB4OoqYrnc6PRNNWiR54qVmYHq','2020-01-25 12:27:20');
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

-- Dump completed on 2020-01-26 14:39:51

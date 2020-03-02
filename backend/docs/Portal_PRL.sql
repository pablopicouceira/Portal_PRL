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
INSERT INTO `Actuaciones` VALUES (1,'Carretera N-432. Tramo: Cerro Muriano-Córdoba','Descripción\nLas obras están divididas en dos tramos, un primer tramo que va desde el p.k. 258+05 al 263+00 en el cual se realiza\nun acondicionamiento de carretera y un segundo tramo que va del p.k. 263+00 a 267+00 en el cual se realiza una\nmejora del trazado. Ambos tramos comprendidos entre Cerro Muriano y Córdoba.\nLa longitud total del tronco de los dos tramos es de 7.500 metros; se realizan seis desvíos provisionales con una\nlongitud total de 1.900 metros; y dos caminos cada uno con una longitud de 400 metros.\nLos trabajos a realizar son básicamente: movimiento de tierras (excavación, terraplén, suelo seleccionado, etc.),\ndrenaje tanto transversal como longitudinal, estructuras, pavimentación (zahorra artificial, aglomerado, etc.),\nseñalización vertical y horizontal, reposición de medidas ambientales, y reposición de servicios afectados.\nLas obras incluyen las siguientes estructuras:\n• 6 marcos de diferentes altos y anchos y realizados de hormigón “in situ”\n• 1 Puente de vigas sobre ferrocarril, de un vano, con estribos de tierra armada, 6 vigas armadas de 1,50 m. de canto\ny 24 m. de largo, tablero armado ejecutado “in situ” de 14 m. de ancho y 24 m. de largo.\n• 1 Pontón de 3x2 m., para dar continuidad a un pontón antiguo, realizado de hormigón “in situ”.\n• 1 Paso inferior de 5x2,5 m (luz libre) para dar continuidad a una cinta de transporte de áridos, realizado de\nhormigón “in situ”.\n• 1 Puente de vigas para paso de la carretera bajo ferrocarril, de un vano, con estribos armados de hormigón “in situ”,\n11 vigas armadas de 1,85 de canto y 29 de largo, tablero armado ejecutado “in situ” de 14 m. de ancho y 29 m. de\nlargo, reposición de vía con balasto.\n• 1 Puente de vigas para paso de una Cañada Real, de un vano, dando continuidad a la cañada, con estribos\narmados de hormigón “in situ”, 1 viga cajón, de 1,65 m. de canto y 3,30 m. (cara inferior) y 3,65 m. (cara superior) y\nEXCAVACIÓN 955.000 m³\nTERRAPLÉN O PEDRAPLÉN 853.000 m³\nSUELO SELECCIONADO 90.000 m³\nUnidades más representativas\narmados de hormigón in situ , 1 viga cajón, de 1,65 m. de canto y 3,30 m. (cara inferior) y 3,65 m. (cara superior) y\ntablero armado ejecutado “in situ” de 6 m. de ancho y 36 m. de largo. aceras.','Ctra. N-432 Tramo: Cerro Muriano - Córdoba','Córdoba','Córdoba','2020-01-28 23:42:36','2020-01-31 18:34:29',NULL,'https://res.cloudinary.com/dcbefsoty/image/upload/v1582337729/e0f93f72-8887-42d8-948f-98dfa0a3f4df.jpg','e0f93f72-8887-42d8-948f-98dfa0a3f4df'),(2,'Rehabilitación y Ampliación del Teatro Salón Apolo','Las obras consisten en la rehabilitación y ampliación del Teatro Salón Apolo en Miranda de Ebro. El teatro original se fecha a finales del XIX, y la actuación consiste en la demolición interior del teatro, respetando y reparando sus fachadas, así como la demolición de las viviendas colindantes con el fin de ampliar la capacidad del teatro. Con esta actuación se quiere recuperar un edificio emblemático de Miranda de Ebro, y a su vez, de forma indirecta, reforzar e impulsar el proyecto de recuperación del casco antiguo de la ciudad, objetivo que se ha venido desarrollando en los últimos años. Las obras se han planificado del siguiente modo: 1-. Estabilización completa de los cerramientos originales del teatro, demolición interior del mismo y de las viviendas adyacentes al Teatro, y refuerzo de las medianeras resultantes con el futuro edificio tras los trabajos de demolición. 2-. Ejecución de cimentaciones especiales mediante pantallas secantes de micropilotes, semiestancas, y agotamiento del freático, controlando los posibles asientos del terreno y edificios colindantes y cercanos del casco antiguo. Excavación de 5 metros y ejecución de losa de cimentación y muro forro, creando finalmente un sótano estanco en todo el solar del futuro edificio. 3-. Ejecución de estructura y cubiertas. 4-. Resto de oficios de albañilería, carpinterías, instalaciones e instalaciones especiales, dotando al futuro teatro de todos los avances del siglo XXI respetando a su vez la singularidad de un edificio de finales del XIX para dotar al futuro teatro de un espacio acorde con el siglo XXI.','Calle de la Cruz','Miranda de Ebro','Burgos','2020-02-22 00:26:16',NULL,NULL,'https://res.cloudinary.com/dcbefsoty/image/upload/v1582337402/e0f93f72-8887-42d8-948f-98dfa0a3f4df.jpg','e0f93f72-8887-42d8-948f-98dfa0a3f4df'),(3,'Reforma y Ampliación Hospital Gutíérrez Ortega','La obra consiste en la ampliación y reforma del hospital de Valdepeñas. La obra se divide en 4 fases que incluyen: Fase 1: Edificios nuevos para consultas externas, aparcamientos, urbanización y helipuerto. Fase 2: Reforma de urgencias y laboratorios y ejecución de una base para las UVIS móviles. Fase 3: Ampliación y reforma de quirófanos, reanimación, salón de actos, rehabilitación y despachos de gerencia. Fase 4: Reforma de cocinas, lavandería, paritorios, archivos y almacenes y ejecución de una UCI.','Av. de los Estudiantes, s/n','Valdepeñas','Ciudad Real','2020-02-22 00:48:29',NULL,NULL,'https://res.cloudinary.com/dcbefsoty/image/upload/v1582339480/e0f93f72-8887-42d8-948f-98dfa0a3f4df.jpg','e0f93f72-8887-42d8-948f-98dfa0a3f4df'),(4,'Torre de Control en la base aérea de San Javier','Las obras mencionadas consistieron en la construcción de: Una torre de control con la altura suficiente para permitir la visualización desde el fanal de los umbrales de las pistas existentes y las futuras con un ángulo superior al 1,02 % recomendado por la FAA (Federal Aviation Administration), sin perforar la pista actual. Se construyen las plantas en fuste necesarias para dotar de los equipos y dependencias necesarias para las actividades en el mencionado fanal; Una edificación anexa donde se establecen las dependencias de equipos, energía, mantenimiento, gestión y administración; Urbanización de parcela y adecuación de accesos de superficie 7.200m² de los que 2.800 m² serán de viales y aparcamientos; acometidas eléctricas y comunicaciones con la central eléctrica y la actual torre de la base aérea; acometidas de agua y conexión con el saneamiento de la base aérea; edificio de municiones de 12 módulos. Las edificaciones cuentan con una superficie útil total de 1.459,61 m²','Aeropuerto de Murcia - San Javier','San Javier','Murcia','2020-02-22 03:26:52',NULL,NULL,'https://res.cloudinary.com/dcbefsoty/image/upload/v1582342322/e0f93f72-8887-42d8-948f-98dfa0a3f4df.jpg','e0f93f72-8887-42d8-948f-98dfa0a3f4df'),(5,'62 viviendas protegidas en bloque','Dos edificios edificios de cuatro alturas alturas, planta baja y tres mas en altura para 62 viviendas viviendas protegidas protegidas, trasteros trasteros y garajes garajes y 2 locales comerciales. Cada edificio esta compuesto por cuatro portales. La fachada tiene combinaciones de ladrillo cara vista y monocapa en tonos amarillos y las particiones interiores de pladur y ladrillo perforado en medianeras. La carpintería exterior es de aluminio mate y la interior de madera da haya lisa vaporizada. El suelo es de gres en color grises. La superficie de la parcela es de 3.200m ² que incluyen además de los edificios una zona central ajardinada. La tipología de las viviendas es de cuatro dormitorios más salón y los pisos del bloque norte en planta baja tiene una terraza.','Parcela Urbana RC-9','Zuera','Zaragoza','2020-02-22 12:08:33',NULL,NULL,'https://res.cloudinary.com/dcbefsoty/image/upload/v1582374048/e0f93f72-8887-42d8-948f-98dfa0a3f4df.jpg','e0f93f72-8887-42d8-948f-98dfa0a3f4df'),(6,'Consolidación estructural y acondicionamiento de la fortaleza de Tovar','La presente obra consistió en la consolidación y recuperación de las diferentes zonas que componen la propia fortaleza. El estado inicial de la edificación era ruinoso, en lo que se refiere a toda la estructura de madera y cubiertas, y afectando levemente a algún muro de mampostería. Las zonas afectadas por esta actuación son las que siguen: Torre del Homenaje, Cuerpo Central y Torre 2. Se procedió inicialmente a la demolición de todos los elementos deteriorados de la estructura de madera, incluyendo la totalidad de las cubiertas. Se actuó sobre una grieta estabilizada en una de las fachadas de la Torre del Homenaje, ejecutando inyecciones de mortero de cal en el interior del muro. A continuación se selló esta grieta con morteros de iguales características al existente. Se efectuaron desmontajes de elementos interiores para garantizar su estabilidad y se repusieron con técnicas tradicionales. Toda la estructura, de madera de castaño, fue renovada, siguiendo fielmente los criterios de la construcción original. La intervención finalizó con la ejecución de las cubiertas de las diferentes partes, siendo éstas en pizarra y recreando los volúmenes originales. Además de lo expuesto, la obra incluyó una pequeña zona de urbanización de 350 m² destinada a aparcamiento para visitas.','Pazo de Tovar 1','San Tomé de Lourenzá','Lugo','2020-02-22 13:39:32',NULL,NULL,'https://res.cloudinary.com/dcbefsoty/image/upload/v1582378958/e0f93f72-8887-42d8-948f-98dfa0a3f4df.jpg','e0f93f72-8887-42d8-948f-98dfa0a3f4df');
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
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Actuaciones_Trabajadores`
--

LOCK TABLES `Actuaciones_Trabajadores` WRITE;
/*!40000 ALTER TABLE `Actuaciones_Trabajadores` DISABLE KEYS */;
INSERT INTO `Actuaciones_Trabajadores` VALUES (1,'422972bf-fbbd-4b51-a83e-4363b9d9e3f3'),(1,'a9ca31fe-d2b4-4a43-a213-019aa91c2b94'),(1,'b15c0417-144b-43c7-993e-10a169d05f63'),(1,'bfed04ed-05db-4e9c-9a59-bfac89078750'),(1,'e66b0040-28fe-4c19-8dc1-69f6a136990b'),(2,'2b3dbe8a-2f76-45a4-9186-d7628eaeefac'),(2,'61d09fbd-639c-4e29-96f9-6e4d0e901dfb'),(2,'bfcee3c5-5079-4cfc-8fcb-0822b15e4298'),(2,'e66b0040-28fe-4c19-8dc1-69f6a136990b'),(3,'07ebadba-d801-4c71-9e0b-3ef7a4af38d4'),(3,'422972bf-fbbd-4b51-a83e-4363b9d9e3f3'),(3,'4cf5e836-9a1b-4deb-af39-9eeebd70a88c'),(3,'bfed04ed-05db-4e9c-9a59-bfac89078750'),(3,'f849aa1e-3e14-49d0-9005-ff0ffc1f1e20'),(4,'2b3dbe8a-2f76-45a4-9186-d7628eaeefac'),(4,'5407bcb1-3e89-4f80-8c48-2fa72eaa32a5'),(4,'61d09fbd-639c-4e29-96f9-6e4d0e901dfb'),(4,'d6351768-f816-4187-9211-1ad791293ad4'),(5,'12c92c00-396c-4dc9-b7a0-285bfc611e5c'),(5,'383d4b9a-5473-4e45-a367-b4af8166030c'),(5,'aa2922b3-b905-45c6-b692-fe3b0b318548'),(5,'b15c0417-144b-43c7-993e-10a169d05f63'),(5,'bdedac9f-4763-425a-b4d3-3cd1deb73dcd'),(6,'053b8a62-c79a-46a5-b2cc-077a9362aa7a'),(6,'12c92c00-396c-4dc9-b7a0-285bfc611e5c'),(6,'422972bf-fbbd-4b51-a83e-4363b9d9e3f3'),(6,'bfcee3c5-5079-4cfc-8fcb-0822b15e4298');
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
INSERT INTO `Trabajadores` VALUES ('053b8a62-c79a-46a5-b2cc-077a9362aa7a','32378572T','Pérez Torres','Pablo','2020-02-09 04:26:30','2020-02-27 00:59:48',NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('07ebadba-d801-4c71-9e0b-3ef7a4af38d4','22038299K','Vila Pérez','Iñaki','2020-01-26 17:19:33','2020-02-27 00:59:54',NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('09861369-457b-423f-b469-88aad4a9bb6b','52784481X','Roura Sánchez','Francisco','2020-02-11 23:35:11','2020-02-27 00:59:52',NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('12c92c00-396c-4dc9-b7a0-285bfc611e5c','26057558F','Parada Tirado','Nicolás','2020-01-24 23:24:21','2020-02-27 00:59:47',NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('13cf1066-918d-4467-8e6e-6e3cec10fb31','45127665D','Villar Martínez','Joaquín','2020-01-24 23:30:01','2020-02-27 00:59:55',NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('28b03bd5-db61-403e-90a4-8679f6146734','89924575A','Rodríguez Lazar','María','2020-02-10 11:20:33','2020-02-27 00:59:50',NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('2b3dbe8a-2f76-45a4-9186-d7628eaeefac','44480125B','Abal Rodríguez','Marta','2020-02-11 19:33:18','2020-02-27 00:59:39',NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('2c7f7738-1da9-4918-a1bf-eaaddef5457a','15338963X','Rovira Torres','Víctor','2020-02-19 19:19:10','2020-02-27 00:59:53',NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('3441d962-fe7d-4330-8b72-b86e657c4ddf','63304908F','Rodríguez Sánchez','Alberto','2020-02-27 02:06:07',NULL,NULL,'1ddbfc68-e563-47d5-bf39-53c1a07cf517'),('383d4b9a-5473-4e45-a367-b4af8166030c','04341620W','Pulido Heredia','José','2020-02-10 19:03:49','2020-02-27 00:59:48',NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('399e390c-bc38-4519-9178-fc3d779e2c01','66036790H','Romero Tendero','María José','2020-02-09 04:19:21','2020-02-27 00:59:52',NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('422972bf-fbbd-4b51-a83e-4363b9d9e3f3','24851831D','Montes De Castro','Beatriz','2020-02-01 22:53:21','2020-02-27 00:59:45',NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('45eddf2e-4bdb-40bc-a070-339948bafe48','69052692E','Fernández Sánchez','Beatriz','2020-02-19 19:07:25','2020-02-27 00:59:42',NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('4cf5e836-9a1b-4deb-af39-9eeebd70a88c','32024399G','Moreno Lozano','Francisco','2020-01-26 15:42:14','2020-02-27 00:59:46',NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('5407bcb1-3e89-4f80-8c48-2fa72eaa32a5','58973452A','Barrera Ojeda','Cristina','2020-02-11 18:22:35','2020-02-27 00:59:39',NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('61d09fbd-639c-4e29-96f9-6e4d0e901dfb','28581347Y','Navarro Paz','Ana María','2020-02-17 18:27:05','2020-02-27 00:59:46',NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('66f5ba82-5e1a-4a69-ab5b-fbd27bb5d473','76734942L','Ribera Verdugo','Luis','2020-01-24 23:35:19','2020-02-27 00:59:49',NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('6d72f03f-905b-4fdf-a265-52a1e92d946a','98190258S','Rodríguez Casas','Hugo','2020-01-25 00:16:48','2020-02-27 00:59:50',NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('8a78c214-b2f0-4585-b901-4f2a7f198c75','33142702R','Carrasco Díaz','Isabel','2020-02-09 04:25:14','2020-02-27 00:59:40',NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('9640c7dd-cfa2-40b6-8cfc-9e671c28bde5','45587954F','Fernández Rodríguez','Manuel','2020-02-20 19:28:56','2020-02-27 00:59:41',NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('98927eca-746e-4268-bf65-b20a2e96eb02','72236523E','Rodríguez Vázquez','José','2020-02-20 19:32:33','2020-02-27 00:59:51',NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('9fea86bf-7eb8-4efd-abf9-1e532e2ec232','32035524C','Roca Mota','Isabel','2020-02-09 04:14:13','2020-02-27 00:59:49',NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('a9ca31fe-d2b4-4a43-a213-019aa91c2b94','29543702H','González González','Mireia','2020-02-06 15:03:53','2020-02-27 00:59:43',NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('aa2922b3-b905-45c6-b692-fe3b0b318548','38387256A','Iglesias Sanz','Juan Antonio','2020-01-26 14:55:39','2020-02-27 00:59:43',NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('acff66ac-61f6-4c27-9a91-41f1ca2d9f28','65894013W','Ortega Carbó','María José','2020-02-08 12:54:58','2020-02-27 00:59:47',NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('b15c0417-144b-43c7-993e-10a169d05f63','93168103W','Díaz Mendoza','Alberto','2020-02-10 18:11:39','2020-02-27 01:55:50',NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('bdedac9f-4763-425a-b4d3-3cd1deb73dcd','46545498H','López Pérez','Elías','2020-02-20 19:30:15','2020-02-27 00:59:44',NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('bfcee3c5-5079-4cfc-8fcb-0822b15e4298','55490662B','López González','Luisa','2020-02-10 00:41:43','2020-02-27 00:59:44',NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('bfed04ed-05db-4e9c-9a59-bfac89078750','81368818Q','Gómez Vázquez','Juan Carlos','2020-02-10 18:59:07','2020-02-27 00:59:42',NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('c30a76c7-73d0-4b4e-bbfb-fdfa01391c89','35616233C','Centeno Díez','María Teresa','2020-02-01 23:18:06','2020-02-27 00:59:40',NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('c875bce0-d45d-4518-8a67-355ef9316d43','72781349B','Cañadas Rodríguez','Dolores','2020-01-25 00:42:07','2020-02-27 00:59:40',NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('d6351768-f816-4187-9211-1ad791293ad4','54698254E','Pastor Ribera','Manuel','2020-02-09 03:26:06','2020-02-27 00:59:47',NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('e66b0040-28fe-4c19-8dc1-69f6a136990b','27009603J','Martínez Roldán','Rocío','2020-02-13 19:22:06','2020-02-27 00:59:45',NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('e9571e91-21ce-4f75-9946-25fee13fa2b1','10868316B','Vázquez López','Fernando','2020-02-11 00:12:03','2020-02-27 00:59:54',NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('f446195d-a487-4a0f-bf0c-55a17a2d38f3','40432008D','Zambrano González','Jesús','2020-02-06 15:06:08','2020-02-27 00:59:56',NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df'),('f849aa1e-3e14-49d0-9005-ff0ffc1f1e20','93699363P','Sánchez Julia','Sergio','2020-02-19 18:27:50','2020-02-27 00:59:53',NULL,'e0f93f72-8887-42d8-948f-98dfa0a3f4df');
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
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Uploads`
--

LOCK TABLES `Uploads` WRITE;
/*!40000 ALTER TABLE `Uploads` DISABLE KEYS */;
INSERT INTO `Uploads` VALUES (1,'2b3dbe8a-2f76-45a4-9186-d7628eaeefac',2,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1581995842/eb70bcba-a955-4b6c-8cb4-da2a40f0ca33.pdf','2020-02-12',0),(2,'2b3dbe8a-2f76-45a4-9186-d7628eaeefac',3,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1581995842/37789554-d4bf-4943-92fc-57a5ece7d56f.pdf','2020-04-21',0),(3,'2b3dbe8a-2f76-45a4-9186-d7628eaeefac',1,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1581995842/81d86e30-ce99-4b26-aa6a-ec93a69cf8bc.pdf','2020-02-08',0),(4,'5407bcb1-3e89-4f80-8c48-2fa72eaa32a5',3,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1581995895/ff14e345-e0af-4b12-9d48-f046ef87cc50.pdf','2020-07-19',0),(5,'5407bcb1-3e89-4f80-8c48-2fa72eaa32a5',1,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1581995895/bf7851d6-8d4e-452a-94c4-cdca9c2339ee.pdf','2020-11-08',0),(6,'5407bcb1-3e89-4f80-8c48-2fa72eaa32a5',2,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1581995895/200bbc80-79a6-4c3c-9100-78da57964840.pdf','2020-03-01',0),(7,'c875bce0-d45d-4518-8a67-355ef9316d43',2,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1581995940/9288d57b-927a-48b8-8168-8ab28d3a2a10.pdf','2019-12-21',1),(8,'c875bce0-d45d-4518-8a67-355ef9316d43',3,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1581995940/7e18cc81-7976-4789-b716-6f39c3e7c51b.pdf','2020-09-07',0),(9,'c875bce0-d45d-4518-8a67-355ef9316d43',1,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1581995940/ccf00b83-f6c0-4162-a818-a1edcbbc5577.pdf','2020-03-08',0),(10,'c875bce0-d45d-4518-8a67-355ef9316d43',2,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1581996017/e0bcdb3a-3831-4bbd-b93c-a03dc6d93428.pdf','2020-12-21',0),(11,'8a78c214-b2f0-4585-b901-4f2a7f198c75',2,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582049095/7619a6f7-fda8-45d8-9cb0-01e12c64fae9.pdf','2020-03-14',0),(12,'8a78c214-b2f0-4585-b901-4f2a7f198c75',3,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582049095/905f8659-d35e-4902-ab56-7ee61bc21314.pdf','2020-09-08',0),(13,'8a78c214-b2f0-4585-b901-4f2a7f198c75',1,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582049095/2b82718d-c74d-4b20-9fe1-25dd89c9672d.pdf','2020-11-11',0),(14,'66f5ba82-5e1a-4a69-ab5b-fbd27bb5d473',3,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582049164/58ca449b-9b94-45a0-86c4-cf719cc68fd3.pdf','2019-09-26',0),(15,'66f5ba82-5e1a-4a69-ab5b-fbd27bb5d473',1,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582049164/48b10652-9a26-43be-9f41-4e5429abde79.pdf','2020-06-07',0),(16,'66f5ba82-5e1a-4a69-ab5b-fbd27bb5d473',2,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582049164/c70b1ed8-462d-4730-b39c-9dd02682c13b.pdf','2020-04-03',0),(17,'9fea86bf-7eb8-4efd-abf9-1e532e2ec232',3,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582049201/816dbd39-c44e-4034-ae41-136c22fcdf84.pdf','2020-11-14',0),(18,'9fea86bf-7eb8-4efd-abf9-1e532e2ec232',1,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582049201/cef279de-6cf3-4697-bfb3-f743083d7aab.pdf','2020-02-17',0),(19,'9fea86bf-7eb8-4efd-abf9-1e532e2ec232',2,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582049201/3a277cbc-37e3-4c63-8e74-761b6456fdd0.pdf','2019-07-12',0),(20,'07ebadba-d801-4c71-9e0b-3ef7a4af38d4',1,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582049244/6e4002b7-a42c-4fa3-9624-d5e62b8c15a0.pdf','2020-08-28',1),(21,'07ebadba-d801-4c71-9e0b-3ef7a4af38d4',3,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582049244/0283c4c7-c121-452f-ad54-ae8d6e231143.pdf','2020-04-05',0),(22,'07ebadba-d801-4c71-9e0b-3ef7a4af38d4',2,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582049316/cc2defd4-9c2c-42ff-a251-a7a845daee42.pdf','2020-02-01',0),(23,'07ebadba-d801-4c71-9e0b-3ef7a4af38d4',1,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582049317/0a9e4d81-5372-4149-a4f9-db0ad0897d7f.pdf','2020-08-28',0),(24,'e66b0040-28fe-4c19-8dc1-69f6a136990b',3,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582050003/61014e40-972f-4f21-9d8e-42a2515574e2.pdf','2019-04-21',1),(25,'e66b0040-28fe-4c19-8dc1-69f6a136990b',1,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582050003/8fd96211-0452-40c0-ad40-2e6693401fa4.pdf','2019-09-08',1),(26,'e66b0040-28fe-4c19-8dc1-69f6a136990b',2,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582050003/f4d2e3df-3546-4610-941b-5f1bcb1c6b2e.pdf','2019-11-12',0),(27,'e66b0040-28fe-4c19-8dc1-69f6a136990b',3,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582121010/36703818-a1cb-42a9-84eb-ff27b0c3edcd.pdf','2020-03-06',0),(28,'e66b0040-28fe-4c19-8dc1-69f6a136990b',1,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582140050/90fc0ae5-1561-4327-bc16-c4a37679acde.pdf','2020-03-04',0),(29,'6d72f03f-905b-4fdf-a265-52a1e92d946a',3,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582200131/700fc0d6-d45f-4ce4-9c9d-8cbfa02c3bcc.pdf','2020-05-14',0),(30,'6d72f03f-905b-4fdf-a265-52a1e92d946a',2,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582200131/807d7b48-ce74-4540-b600-084ca7e70d31.pdf','2020-03-24',0),(31,'28b03bd5-db61-403e-90a4-8679f6146734',2,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582287196/98deda3f-5478-44b7-aa3a-e7a3312b51db.pdf','2019-06-23',0),(32,'28b03bd5-db61-403e-90a4-8679f6146734',3,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582287196/c6ae173f-a09f-440c-a8db-7f81828d5b7b.pdf','2020-08-06',0),(33,'28b03bd5-db61-403e-90a4-8679f6146734',1,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582287196/c0cf89e3-654a-4906-a9a2-6ac5d2bd10ae.pdf','2020-08-27',0),(34,'c30a76c7-73d0-4b4e-bbfb-fdfa01391c89',1,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582287632/457aae25-62d0-4cfb-bf05-275006469a0f.pdf','2020-05-16',0),(35,'c30a76c7-73d0-4b4e-bbfb-fdfa01391c89',2,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582287632/533232a0-ebce-4160-a367-27b1df74737d.pdf','2020-07-14',0),(36,'c30a76c7-73d0-4b4e-bbfb-fdfa01391c89',3,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582287632/1eac461d-f4ba-439a-a9ab-cbebffa29013.pdf','2020-10-07',0),(37,'b15c0417-144b-43c7-993e-10a169d05f63',2,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582288066/3bf7e44f-b2c2-40ed-b881-18cbd835d644.pdf','2019-07-14',0),(38,'b15c0417-144b-43c7-993e-10a169d05f63',3,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582288066/60ceae28-9002-49f3-8232-d8d87d53ba40.pdf','2019-10-07',0),(39,'b15c0417-144b-43c7-993e-10a169d05f63',1,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582288066/9d381d62-2a8b-4d02-b2a8-b6a487f3e473.pdf','2019-05-16',0),(40,'9640c7dd-cfa2-40b6-8cfc-9e671c28bde5',3,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582290993/bb4b5a58-6108-4717-aa00-aa63f5d204b1.pdf','2020-03-07',0),(41,'9640c7dd-cfa2-40b6-8cfc-9e671c28bde5',2,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582290994/15201334-8388-434d-a103-cfd75f27e139.pdf','2020-03-14',0),(42,'9640c7dd-cfa2-40b6-8cfc-9e671c28bde5',1,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582290994/f66d6c61-1662-4edd-8fdd-7d3d53b8e3a1.pdf','2020-03-16',0),(43,'bfed04ed-05db-4e9c-9a59-bfac89078750',1,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582390029/d987e50f-e731-4f1b-9405-4b2d5efc6247.pdf','2020-03-08',0),(44,'bfed04ed-05db-4e9c-9a59-bfac89078750',3,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582390029/2bf36659-ccc5-48d2-8fc7-1e011488ee25.pdf','2020-03-11',0),(45,'bfed04ed-05db-4e9c-9a59-bfac89078750',2,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582390029/99a7fa13-1c1c-47e9-90f4-5a5474ee758d.pdf','2020-03-12',0),(46,'a9ca31fe-d2b4-4a43-a213-019aa91c2b94',3,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582406203/07443525-8b61-411e-bbd8-d4f014d68a1c.pdf','2020-08-22',0),(47,'a9ca31fe-d2b4-4a43-a213-019aa91c2b94',1,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582406203/47fdbf89-733a-41d2-91ba-0d6b6f340ec8.pdf','2020-02-24',0),(48,'a9ca31fe-d2b4-4a43-a213-019aa91c2b94',2,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582406203/e6bac930-4bb2-4ba7-914d-173c6992c0df.pdf','2020-06-15',0),(49,'aa2922b3-b905-45c6-b692-fe3b0b318548',2,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582406676/eeb335ba-62c8-4ca8-a985-891785a793ce.pdf','2020-08-16',0),(50,'aa2922b3-b905-45c6-b692-fe3b0b318548',3,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582406676/81ba5664-6919-4790-b24c-ab9062b2e261.pdf','2020-07-17',0),(51,'aa2922b3-b905-45c6-b692-fe3b0b318548',1,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582406676/25f42616-3ac8-4dbe-800a-918b7b98a21f.pdf','2020-02-25',0),(52,'bfcee3c5-5079-4cfc-8fcb-0822b15e4298',1,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582407078/ac94b2b6-195f-4d3d-955f-ad6e84abe3d7.pdf','2020-02-26',0),(53,'bfcee3c5-5079-4cfc-8fcb-0822b15e4298',3,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582407078/d877ae25-e7ae-4869-8a63-d13f7bf1b503.pdf','2020-08-29',0),(54,'bfcee3c5-5079-4cfc-8fcb-0822b15e4298',2,'e0f93f72-8887-42d8-948f-98dfa0a3f4df','https://res.cloudinary.com/dcbefsoty/image/upload/v1582407078/7fbd7515-f1a6-4843-a1e4-fa4425fc85b4.pdf','2020-04-21',0),(55,'422972bf-fbbd-4b51-a83e-4363b9d9e3f3',3,'1ddbfc68-e563-47d5-bf39-53c1a07cf517','https://res.cloudinary.com/dcbefsoty/image/upload/v1582740715/79633a43-e6d5-44d2-92ce-8b49d7768e2f.pdf','2020-10-01',0),(56,'422972bf-fbbd-4b51-a83e-4363b9d9e3f3',2,'1ddbfc68-e563-47d5-bf39-53c1a07cf517','https://res.cloudinary.com/dcbefsoty/image/upload/v1582740715/2960769a-a8db-4f34-b896-866bfe021031.pdf','2020-04-30',0),(57,'422972bf-fbbd-4b51-a83e-4363b9d9e3f3',1,'1ddbfc68-e563-47d5-bf39-53c1a07cf517','https://res.cloudinary.com/dcbefsoty/image/upload/v1582740715/fce11607-d2bc-491c-bf11-f25b3c31213a.pdf','2020-06-19',0);
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

-- Dump completed on 2020-02-27  4:16:16

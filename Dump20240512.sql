-- MySQL dump 10.13  Distrib 8.0.36, for macos14 (arm64)
--
-- Host: localhost    Database: dulce_arelys
-- ------------------------------------------------------
-- Server version	8.4.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Aceptados`
--

DROP TABLE IF EXISTS `Aceptados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Aceptados` (
  `Id_Aceptado` int NOT NULL AUTO_INCREMENT,
  `IdUsuario` int DEFAULT NULL,
  `TamanoCotizacion` varchar(45) DEFAULT NULL,
  `SaborCotizacion` varchar(45) DEFAULT NULL,
  `BetunCotizacion` varchar(45) DEFAULT NULL,
  `RellenoCotizacion` varchar(45) DEFAULT NULL,
  `Cantidad` int DEFAULT NULL,
  `PrecioCotizacion` int DEFAULT NULL,
  `ComentariosCotizacion` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Id_Aceptado`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Aceptados`
--

LOCK TABLES `Aceptados` WRITE;
/*!40000 ALTER TABLE `Aceptados` DISABLE KEYS */;
INSERT INTO `Aceptados` VALUES (3,1,'Pastelito','Clasico','Merengue suizo','Mantecol con cacao y nueces',1,99,'prueba'),(4,1,'Pastel','Clasico','Merengue suizo','Mantecol con cacao y nueces',1,999,'prueba');
/*!40000 ALTER TABLE `Aceptados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Almacen`
--

DROP TABLE IF EXISTS `Almacen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Almacen` (
  `IdAlmacen` int NOT NULL,
  `NombreAlmacen` varchar(50) NOT NULL,
  `DireccionAlmacen` varchar(45) NOT NULL,
  `TelefonoAlmacen` int NOT NULL,
  PRIMARY KEY (`IdAlmacen`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Almacen`
--

LOCK TABLES `Almacen` WRITE;
/*!40000 ALTER TABLE `Almacen` DISABLE KEYS */;
INSERT INTO `Almacen` VALUES (1,'prueba','prueba',8181),(2,'Prueba Nombre','Prueba Direccion',81181818),(3,'Prueba Nombre','Prueba Direccion',818181),(4,'Prueba Nombre','Prueba Direccion',8181818),(5,'Prueba Nombre','Prueba Direccion',81818181),(10,'Gonzalitos','Av Gonzalitos 300',81818181);
/*!40000 ALTER TABLE `Almacen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Cotizacion`
--

DROP TABLE IF EXISTS `Cotizacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Cotizacion` (
  `Id_Cotizacion` int NOT NULL AUTO_INCREMENT,
  `IdUsuario` int NOT NULL,
  `IdEstadoCotizacion` int DEFAULT NULL,
  `TamanoCotizacion` varchar(20) NOT NULL,
  `SaborCotizacion` varchar(15) NOT NULL,
  `BetunCotizacion` varchar(50) DEFAULT NULL,
  `RellenoCotizacion` varchar(50) DEFAULT NULL,
  `Cantidad` int NOT NULL,
  `PrecioCotizacion` decimal(10,2) DEFAULT NULL,
  `ComentariosCotizacion` varchar(100) DEFAULT NULL,
  `Cotizacioncol` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Id_Cotizacion`),
  KEY `id_usuario` (`IdUsuario`),
  KEY `ID-EstadoCotizacion_idx` (`IdEstadoCotizacion`),
  CONSTRAINT `ID-EstadoCotizacion` FOREIGN KEY (`IdEstadoCotizacion`) REFERENCES `EstadoCotizacion` (`IdEstadoCotizacion`),
  CONSTRAINT `id_usuario` FOREIGN KEY (`IdUsuario`) REFERENCES `Usuario` (`IdUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Cotizacion`
--

LOCK TABLES `Cotizacion` WRITE;
/*!40000 ALTER TABLE `Cotizacion` DISABLE KEYS */;
/*!40000 ALTER TABLE `Cotizacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `EstadoCotizacion`
--

DROP TABLE IF EXISTS `EstadoCotizacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `EstadoCotizacion` (
  `IdEstadoCotizacion` int NOT NULL AUTO_INCREMENT,
  `DescripacionEstado` varchar(45) NOT NULL,
  PRIMARY KEY (`IdEstadoCotizacion`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EstadoCotizacion`
--

LOCK TABLES `EstadoCotizacion` WRITE;
/*!40000 ALTER TABLE `EstadoCotizacion` DISABLE KEYS */;
INSERT INTO `EstadoCotizacion` VALUES (1,'Validacion');
/*!40000 ALTER TABLE `EstadoCotizacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ExistenciaProducto`
--

DROP TABLE IF EXISTS `ExistenciaProducto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ExistenciaProducto` (
  `IdAlmacen` int NOT NULL,
  `IdProducto` int NOT NULL,
  `ExistenciaProducto` int NOT NULL,
  PRIMARY KEY (`IdAlmacen`,`IdProducto`),
  KEY `almacen_id_almacen` (`IdAlmacen`),
  KEY `productos_id_producto` (`IdProducto`),
  CONSTRAINT `id_almacen` FOREIGN KEY (`IdAlmacen`) REFERENCES `Almacen` (`IdAlmacen`),
  CONSTRAINT `id_productos` FOREIGN KEY (`IdProducto`) REFERENCES `Producto` (`IdProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ExistenciaProducto`
--

LOCK TABLES `ExistenciaProducto` WRITE;
/*!40000 ALTER TABLE `ExistenciaProducto` DISABLE KEYS */;
INSERT INTO `ExistenciaProducto` VALUES (10,1,90),(10,2,900);
/*!40000 ALTER TABLE `ExistenciaProducto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MetodoPago`
--

DROP TABLE IF EXISTS `MetodoPago`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `MetodoPago` (
  `IdMetodoPago` int NOT NULL AUTO_INCREMENT,
  `DescripcionMetodoPago` varchar(30) NOT NULL,
  PRIMARY KEY (`IdMetodoPago`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MetodoPago`
--

LOCK TABLES `MetodoPago` WRITE;
/*!40000 ALTER TABLE `MetodoPago` DISABLE KEYS */;
/*!40000 ALTER TABLE `MetodoPago` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Producto`
--

DROP TABLE IF EXISTS `Producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Producto` (
  `IdProducto` int NOT NULL,
  `NombreProducto` varchar(50) NOT NULL,
  `DescripcionProducto` varchar(200) DEFAULT NULL,
  `ImagenProducto` varchar(600) NOT NULL,
  `PrecioProducto` decimal(10,2) NOT NULL,
  PRIMARY KEY (`IdProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Producto`
--

LOCK TABLES `Producto` WRITE;
/*!40000 ALTER TABLE `Producto` DISABLE KEYS */;
INSERT INTO `Producto` VALUES (1,'Pastel 3 leches','Rico pastel','uploads/1715471709752.jpeg',999.00),(2,'Pastel 5','Rico pastel','uploads/1715476376340.jpeg',999.00);
/*!40000 ALTER TABLE `Producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Rol`
--

DROP TABLE IF EXISTS `Rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Rol` (
  `IdRol` int NOT NULL,
  `DescripcionRol` varchar(100) NOT NULL,
  PRIMARY KEY (`IdRol`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Rol`
--

LOCK TABLES `Rol` WRITE;
/*!40000 ALTER TABLE `Rol` DISABLE KEYS */;
INSERT INTO `Rol` VALUES (2,'cliente');
/*!40000 ALTER TABLE `Rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Usuario`
--

DROP TABLE IF EXISTS `Usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Usuario` (
  `IdUsuario` int NOT NULL AUTO_INCREMENT,
  `IdRol` int NOT NULL,
  `NombreUsuario` varchar(100) NOT NULL,
  `ApellidoUsuario` varchar(100) NOT NULL,
  `TelefonoUsuario` int NOT NULL,
  `CorreoUsuario` varchar(320) NOT NULL,
  `ContrasenUsuario` varchar(50) NOT NULL,
  PRIMARY KEY (`IdUsuario`),
  KEY `id_rol` (`IdRol`),
  CONSTRAINT `id_rol` FOREIGN KEY (`IdRol`) REFERENCES `Rol` (`IdRol`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Usuario`
--

LOCK TABLES `Usuario` WRITE;
/*!40000 ALTER TABLE `Usuario` DISABLE KEYS */;
INSERT INTO `Usuario` VALUES (1,1,'Prueba Cinco','Prueba',818181,'admin@admin.com','123'),(3,2,'cliente','cliente apellido',81818181,'cliente@cliente.com','123');
/*!40000 ALTER TABLE `Usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-12 17:12:13

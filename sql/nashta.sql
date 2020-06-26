/*
SQLyog Enterprise v12.5.1 (64 bit)
MySQL - 10.4.6-MariaDB : Database - nashta
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`nashta` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `nashta`;

/*Table structure for table `mahasiswa` */

DROP TABLE IF EXISTS `mahasiswa`;

CREATE TABLE `mahasiswa` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(25) COLLATE latin1_general_ci NOT NULL,
  `alamat` text COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

/*Data for the table `mahasiswa` */

insert  into `mahasiswa`(`id`,`nama`,`alamat`) values 
(1,'Akhmad Salman Yassar','Cileungsi, Bogor\r\n'),
(2,'Dwi Cahyanigsih','Ciketing, BTG');

/*Table structure for table `mata_kuliah` */

DROP TABLE IF EXISTS `mata_kuliah`;

CREATE TABLE `mata_kuliah` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama_matkul` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `id_mahasiswa` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

/*Data for the table `mata_kuliah` */

insert  into `mata_kuliah`(`id`,`nama_matkul`,`id_mahasiswa`) values 
(1,'Algoritma',1),
(2,'Desain Grafis',2);

/*Table structure for table `nilai` */

DROP TABLE IF EXISTS `nilai`;

CREATE TABLE `nilai` (
  `id_mahasiswa` int(11) NOT NULL,
  `id_mata_kuliah` int(11) NOT NULL,
  `nilai` varchar(11) COLLATE latin1_general_ci NOT NULL,
  `keterangan` text COLLATE latin1_general_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

/*Data for the table `nilai` */

insert  into `nilai`(`id_mahasiswa`,`id_mata_kuliah`,`nilai`,`keterangan`) values 
(1,1,'90','nyontek terus');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

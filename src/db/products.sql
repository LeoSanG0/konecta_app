-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-04-2022 a las 04:11:28
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `konecta`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(100) NOT NULL,
  `name_p` varchar(100) NOT NULL,
  `reference` varchar(100) NOT NULL,
  `price` int(100) NOT NULL,
  `weight_p` int(100) NOT NULL,
  `category` varchar(100) NOT NULL,
  `stock` int(100) NOT NULL,
  `created_data` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name_p`, `reference`, `price`, `weight_p`, `category`, `stock`, `created_data`) VALUES
(1, 'Doritos', '101', 1200, 25, 'Alimento', 10, '2022-04-27'),
(2, 'Chocorramo', '102', 1000, 50, 'Alimento', 10, '2022-04-27'),
(3, 'Agua', '103', 2500, 125, 'Bebida', 15, '2022-04-27'),
(4, 'PonyMalta', '104', 1800, 90, 'Bebida', 15, '2022-04-27'),
(5, 'Sandwich', '105', 4000, 250, 'Alimento', 5, '2022-04-27'),
(6, 'Coca-Cola', '106', 2500, 125, 'Bebida', 8, '2022-04-27'),
(7, 'Choclitos', '107', 1100, 50, 'Alimento', 18, '2022-04-27'),
(8, 'JugoHit', '108', 2200, 250, 'Bebida', 8, '2022-04-26'),
(9, 'Palitroques', '109', 1000, 50, 'Alimento', 20, '2022-04-26'),
(10, 'Speed Max', '1010', 1200, 50, 'Bebida', 16, '2022-04-26');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

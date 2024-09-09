-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-09-2024 a las 17:28:29
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pf-n4`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `incidentId` int(11) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `comment`
--

INSERT INTO `comment` (`id`, `userId`, `incidentId`, `description`) VALUES
(3, 3, 2, 'El corte de energía en el pasillo está afectando a varias oficinas.'),
(4, 4, 3, 'La fisura en la pared parece ser superficial, pero necesita reparación.'),
(5, 2, 4, 'La basura acumulada afuera del edificio es inaceptable. Se debe limpiar cuanto antes.'),
(6, 5, 4, 'Ya se ha programado una limpieza para mañana por la mañana.'),
(7, 1, 5, 'Las ventanas siguen sucias después de la limpieza.'),
(8, 4, 3, 'Se ha aplicado una solución temporal para evitar que la fisura empeore.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `incident`
--

CREATE TABLE `incident` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `title` varchar(150) NOT NULL,
  `description` text NOT NULL,
  `ubication` varchar(150) NOT NULL,
  `type` varchar(100) NOT NULL,
  `imagens` text DEFAULT NULL,
  `status` varchar(100) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `incident`
--

INSERT INTO `incident` (`id`, `userId`, `title`, `description`, `ubication`, `type`, `imagens`, `status`, `date`) VALUES
(2, 2, 'Corte de Energía en Pasillo', 'El pasillo principal del tercer piso está sin iluminación debido a un problema eléctrico.', 'Pasillo Tercer Piso, Edificio B', 'electricidad', '[]', 'resuelto', '2024-09-01 14:15:00'),
(3, 3, 'Fisura en la Pared', 'Se observó una fisura en la pared de la sala de reuniones.', 'Sala de Reuniones, Edificio C', 'estructural', '[\"image.jpg\"]', 'pendiente', '2024-08-30 19:45:00'),
(4, 3, 'Basura Acumulada en el Exterior', 'Se ha acumulado basura en la entrada principal del edificio.', 'Entrada Principal, Edificio D', 'exterior', '[\"image.jpg\"]', 'resuelto', '2024-09-02 07:00:00'),
(5, 5, 'Limpieza de Ventanas', 'Las ventanas del cuarto piso no han sido limpiadas en semanas.', 'Cuarto Piso, Edificio E', 'limpieza', '[\"image.jpg\"]', 'progreso', '2024-09-02 10:20:00'),
(7, 2, 'Fuga de Agua en Baño', 'Se detectó una fuga en la tubería del baño del segundo piso.', 'Baño Segundo Piso, Edificio A', 'plomeria', '[\"image.jpg\"]', 'progreso', '2024-09-02 13:30:00'),
(11, 7, 'Fecha actualizada', 'Odit Nam vero occaec', 'Sit enim libero fug', 'ascensores', '[\"image.jpg\",\"images (1).jpg\",\"images.jpg\"]', 'resuelto', '2024-09-05 12:33:49'),
(15, 7, 'Los patos estan nadando', 'Fugiat itaque eum e', 'Culpa et laboriosam', 'plomeria', '[\"image.jpg\",\"images (1).jpg\",\"images.jpg\"]', 'pendiente', '2024-09-05 12:32:28'),
(20, 7, 'subi una imagen', 'Officiis beatae enim', 'Ullamco quo iure com', 'electricidad', '[\"77991931-lindo-y-tierno-perro-kawaii-estilo-ilustraciÃ³n-vectorial-diseÃ±o.jpg\"]', 'pendiente', '2024-09-05 12:34:15'),
(21, 7, 'Reprehenderit aperi', 'Rerum libero est au', 'Sit molestiae magnam', 'plomeria', '[]', 'pendiente', '2024-09-05 18:25:33'),
(22, 7, 'Voluptates tempora m', 'Laboris quod eveniet', 'Veniam dolor in dol', 'electricidad', '[]', 'pendiente', '2024-09-05 18:25:51'),
(23, 7, 'Recusandae Enim qui', 'Adipisicing natus ve', 'Maxime qui dolorem m', 'ascensores', '[]', 'pendiente', '2024-09-05 18:26:57');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `apellido` varchar(150) DEFAULT NULL,
  `dni` int(11) NOT NULL,
  `telefono` varchar(20) NOT NULL,
  `rol` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `usuario` varchar(150) NOT NULL,
  `password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`userId`, `nombre`, `apellido`, `dni`, `telefono`, `rol`, `email`, `usuario`, `password`) VALUES
(1, 'Juan', 'Pérez', 12345678, '555-1234', 'administrador', 'juan.perez@example.com', 'juan', '$2b$10$R3ukx4Qq17YW.lW4GSkCyenhbNE0SnM3OiAFoQzf8Ik9JTNGLf/l.'),
(2, 'María', 'González', 23456789, '555-5678', 'residente', 'maria.gonzalez@example.com', 'María', 'null'),
(3, 'Pedro', 'López', 34567890, '555-9101', 'residente', 'pedro.lopez@example.com', 'Pedro', 'null'),
(4, 'Ana', 'Martínez', 45678901, '555-1122', 'administrador', 'ana.martinez@example.com', 'Ana', ''),
(5, 'Luis', 'Rodríguez', 56789012, '555-3344', 'residente', 'luis.rodriguez@example.com', 'Luis', 'null'),
(6, 'Luisa', 'Rodríguez', 56789018, '555-3348', 'residente', 'luisa.rodriguez@example.com', 'Luisa', 'null'),
(7, 'Luisita Gomez', 'rodri', 56789010, '555-3347', 'residente', 'luisita.rodriguez@example.com', 'luisana', '$2b$10$wIYBQIZukiyyKvl9I84ssetrmVjg43qfiHw1NBoYbDaf0VurYaaXK'),
(11, 'prueba', 'Ea proident quam vo', 2147483647, '+1 (463) 841-7947', 'administrador', 'wugahaled@mailinator.com', 'Quas laborum Sit do', '$2b$10$1tYkSA8uMwC0v/8DQKcNnef4/DaZayXzhVcE.Vgr8diyo3R4m6iiK');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comment_ibfk_1` (`userId`),
  ADD KEY `comment_ibfk_2` (`incidentId`);

--
-- Indices de la tabla `incident`
--
ALTER TABLE `incident`
  ADD PRIMARY KEY (`id`),
  ADD KEY `incident_ibfk_1` (`userId`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`),
  ADD UNIQUE KEY `dni` (`dni`),
  ADD UNIQUE KEY `telefono` (`telefono`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `usuario` (`usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `incident`
--
ALTER TABLE `incident`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`incidentId`) REFERENCES `incident` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `incident`
--
ALTER TABLE `incident`
  ADD CONSTRAINT `incident_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

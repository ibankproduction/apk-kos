-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 27 Nov 2023 pada 20.41
-- Versi server: 10.4.11-MariaDB
-- Versi PHP: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mydb`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `created_at`, `updated_at`) VALUES
(8, 'iqbal', 'iqbal@gmail.com', '03ee2dfaa19b7518187e45dc61cc2b3dd7b1440034c42770d8c5f3f4e2d68ba13eaf1e245426016b2a28084abe79a73feb6b6db67250888bb97880b4b3cb44c618077b29ffa238fd6abfc2124e9cbc4347e0c405736e95c0b51cac4bd9ab9825f89b00f068', '2023-11-27 23:55:20', '2023-11-27 23:55:20'),
(9, 'iqbal', 'iqbal@gmail.com', '60b968323b8dd1f6463512dc3a6ef5b1f587d1a954dd27484817cc3fc81e784ca82f4c853c1dfc6c691f61d59fd42c1f8bb0e79c58ea023df0a4dcc84479a1b708fc979832c2a027391a4d51bfa65d827acb9b8ced6de17ec9ffbe115f4aa7c4e8479c5447', '2023-11-27 23:57:41', '2023-11-27 23:57:41'),
(10, 'admin', 'admin@gmail.com', 'cc98b240ef2e5f5ac9f8424ad12007938e65e5b275d64667d902c4cf182743a41a3088ab5bf08b3a3f143c93456d2c98d5e118969e554b532ef4b54de4d4a63a6ef6600b2dae4db0e2292217da5471e5ebdc9ca7f37115544b27be0e3aa6bd543992470176', '2023-11-28 00:55:16', '2023-11-28 00:55:16'),
(11, 'budi', 'budi@gmail.com', 'budi', '2023-11-28 02:32:34', '2023-11-28 02:32:34'),
(12, 'agus', 'agus@gmail.com', 'agus', '2023-11-28 02:32:59', '2023-11-28 02:32:59');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

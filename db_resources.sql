-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 27, 2022 at 10:09 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `book_store_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `author` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` float DEFAULT NULL,
  `path_img` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `catalog_id` bigint(20) UNSIGNED NOT NULL,
  `type_book` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mass` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `quantity` int(11) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `title`, `author`, `price`, `path_img`, `description`, `catalog_id`, `type_book`, `mass`, `quantity`, `created_at`) VALUES
(1, 'Fate stay night: unlimited blade worlds', 'Kaneki Saki', 100, 'images/fate.jpg', 'None', 2, 'paper', '300', 89, NULL),
(2, 'Jujutsu kaisen: Volumn 12-14', 'Gege Ikutami', 190, 'images/manga1.jpg', 'None', 2, 'paper', '300', 0, NULL),
(3, 'A thounsand Beginnings and Endings', 'Ellen Oh-Elsie Chapman', 250, 'images/book1.png', 'None', 3, 'paper', '300', 90, NULL),
(4, 'The way the life work', 'Solunge team', 150, 'images/book2.jpg', 'None', 3, 'paper', '300', 90, NULL),
(5, 'The night Ocean', 'Paul La Farge', 300, 'images/book3.jpg', 'None', 2, 'paper', '250', 90, NULL),
(6, 'Because the murder was wrong', 'Johsep Janguar', 280, 'images/book4.jpg', 'None', 3, 'paper', '300', 90, NULL),
(7, 'Little women', 'Chris Benjamin', 145, 'images/book5.png', 'None', 3, 'paper', '300', 90, NULL),
(8, 'Livre Paris', 'Porte de Versailles', 120, 'images/book10.jpg', 'The best book for fashion designers', 4, 'paper', '300', 90, NULL),
(9, 'It start with us', 'Colleen Hoover', 290, 'images/bookimg.png', 'None', 3, 'paper', '300', 90, NULL),
(10, 'children are not machines', 'Steven Jolani', 300, 'images/books1.jpg', 'None', 3, 'paper', '300', 90, NULL),
(11, '\'Cant you see the fear in their eyes\"?', 'Haunt Cowel', 150, 'images/books2.jpg', 'By the view of a child you can realize how scared they are...', 3, '', '300', 90, NULL),
(12, 'Harry Potter and the order of the Phoenix', 'J.W. Rowling', 180, 'images/harrypotter.png', 'None', 2, 'paper', '300', 90, NULL),
(13, 'Demon slayer: Mugen train', 'Gotouge Koyoharu', 260, 'images/manga2.png', 'None', 2, 'paper', '300', 90, NULL),
(14, 'Moana sticker book', 'Sony picture', 50, 'images/moana.png', 'None', 2, 'paper', '300', 90, NULL),
(15, 'Star war sticker book', 'Sony picture', 50, 'images/starwar.png', 'None', 5, 'paper', '150', 90, NULL),
(16, 'Clean Code: A Handbook of Agile Software Craftsmanship 1st Edition', 'Robert C. Martin', 98, 'images/cleancode.png', 'Even bad code can function. But if code isn`t clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn`t have to be that way.', 1, 'paper', '300', 90, NULL),
(17, 'Pragmatic', 'Kaneki Saki', 100, 'images/pragmatic.jpg', 'None', 1, 'paper', '90', 90, NULL),
(18, 'Righting Software', 'Kaneki Saki', 100, 'images/rightingsoftware.png', 'None', 1, 'paper', '90', 90, NULL),
(19, 'Success Engineer', 'Kaneki Saki', 100, 'images/successengineer.png', 'None', 1, 'paper', '90', 90, NULL),
(24, 'Overlord', 'TachibanaImomdasd', 78, 'images/overlord2.png', 'The Skeleton overpowers relief in the new world in Yggdrasill and starts his new journey to find his friends', 2, 'paper', '200', 90, NULL),
(25, 'Jujutsu kaisen: Vol 9-10', 'Inumaki Gege', 120, 'images/jujutsukaisen4.png', 'The boy ate the cursed fingers of the Sukuna, then he starts his journey to kill Sukuna and others cursed thing', 2, 'paper', '90', 90, NULL),
(26, 'Teaching Supremacy', 'Donald Yacovone', 89, 'images/edu.png', '', 5, 'paper', '300', 90, NULL),
(27, 'The art of teaching children', 'Phillip Done', 67, 'images/edu2.png', '', 5, 'paper', '290', 90, NULL),
(28, 'Artfully teaching the science of reading', 'Chase Young - David Page', 34, 'images/edu3.png', '', 5, 'paper', '400', 90, NULL),
(29, 'The equity & the social justice education', 'Baruti K.Kafele', 45, 'images/edu5.jpg', '', 5, 'paper', '300', 90, NULL),
(30, 'Educated', 'Tara Westover', 70, 'images/edu6.png', '', 5, 'paper', '400', 90, NULL),
(31, 'The first six weeks of the school', 'Response classroom', 67, 'images/edu7.png', '', 5, 'paper', '230', 90, NULL),
(32, 'The death of learning', 'John Aresto', 90, 'images/edu8.png', '', 5, 'paper', '200', 90, NULL),
(33, 'A deadly education', 'Naomi Novik', 199, 'images/edu9.png', '', 5, 'paper', '500', 90, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `book_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `num` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `catalogs`
--

CREATE TABLE `catalogs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `catalog_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `key_s` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `catalogs`
--

INSERT INTO `catalogs` (`id`, `catalog_name`, `key_s`, `created_at`, `updated_at`) VALUES
(1, 'science', 'science, programming, code', NULL, NULL),
(2, 'manga', 'manga, comic', NULL, NULL),
(3, 'social', 'social, skill, story', NULL, NULL),
(4, 'fashion', 'fashion', NULL, NULL),
(5, 'education', 'education, math, physic', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `content` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_comt` date NOT NULL DEFAULT current_timestamp(),
  `book_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `user_id`, `content`, `date_comt`, `book_id`) VALUES
(1, 1, 'I have waited for this for 3 months damm', '2022-11-20', 12),
(2, 2, '@Thuong me too XD', '2022-11-20', 12),
(3, 1, '@Halland :)', '2022-11-20', 12),
(4, 1, '@Halland maybe we are the first people buy it', '2022-11-20', 12),
(5, 3, 'the good books for new parents', '2022-11-20', 27),
(6, 1, 'When will this book come back?', '2022-11-23', 2);

-- --------------------------------------------------------

--
-- Table structure for table `discount`
--

CREATE TABLE `discount` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `book_id` bigint(20) UNSIGNED NOT NULL,
  `discount_offer` double(8,2) NOT NULL,
  `date_applied` date NOT NULL,
  `date_expired` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `discount`
--

INSERT INTO `discount` (`id`, `book_id`, `discount_offer`, `date_applied`, `date_expired`) VALUES
(20, 15, 5.00, '2022-11-13', '2022-12-15'),
(21, 3, 10.00, '2022-11-15', '2022-12-09'),
(22, 4, 10.00, '2022-11-15', '2022-12-09'),
(23, 6, 10.00, '2022-11-15', '2022-12-09'),
(24, 7, 10.00, '2022-11-15', '2022-12-09'),
(25, 9, 10.00, '2022-11-15', '2022-12-09'),
(26, 10, 10.00, '2022-11-15', '2022-12-09'),
(28, 16, 8.00, '2022-11-23', '2022-12-10'),
(29, 17, 8.00, '2022-11-23', '2022-12-10'),
(30, 18, 8.00, '2022-11-23', '2022-12-10'),
(31, 19, 8.00, '2022-11-23', '2022-12-10');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(16, '2014_10_12_000000_create_users_table', 1),
(17, '2014_10_12_100000_create_password_resets_table', 1),
(18, '2019_08_19_000000_create_failed_jobs_table', 1),
(19, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(20, '2022_10_15_051801_create_books_table', 1),
(21, '2022_11_04_131359_create_catalogs_table', 1),
(22, '2022_11_05_033708_cart', 2),
(23, '2022_11_05_035115_cart_detail', 2),
(25, '2022_11_05_035242_order_detail', 3),
(26, '2022_11_05_082547_comments', 4),
(27, '2022_11_05_083159_reply', 4),
(28, '2022_11_05_122313_news', 5),
(29, '2022_11_08_132045_discount', 6),
(30, '2022_11_17_145123_oder_detail', 7),
(31, '2022_11_19_121647_bills', 8),
(32, '2022_11_05_035223_orders', 9),
(34, '2022_11_19_121647_posts', 10);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(20) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `date_order` date NOT NULL DEFAULT current_timestamp(),
  `state_order` int(11) NOT NULL,
  `address` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`address`)),
  `payment_method` int(2) NOT NULL,
  `phone` char(10) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `date_order`, `state_order`, `address`, `payment_method`, `phone`) VALUES
(2314088, 3, '2022-11-20', 1, '{\"province\":\"bengjing\",\"district\":\"ximua\",\"street\":\"qualiu\"}', 1, '0824119038'),
(9309815, 1, '2022-11-27', 0, '{\"province\":\"Quang Binh\",\"district\":\"Ngu Hanh Son\",\"street\":\"Tho Ha\"}', 1, '0924235201'),
(9760374, 1, '2022-11-23', 1, '{\"province\":\"Quang Binh\",\"district\":\"Ba Don\",\"street\":\"Tho Ha\"}', 1, '0924235201');

-- --------------------------------------------------------

--
-- Table structure for table `order_detail`
--

CREATE TABLE `order_detail` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` int(20) UNSIGNED NOT NULL,
  `book_id` bigint(20) UNSIGNED NOT NULL,
  `total_p` double(8,2) NOT NULL,
  `quan` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order_detail`
--

INSERT INTO `order_detail` (`id`, `order_id`, `book_id`, `total_p`, `quan`) VALUES
(11, 2314088, 1, 300.00, 3),
(12, 2314088, 3, 750.00, 3),
(13, 2314088, 9, 290.00, 1),
(14, 9760374, 5, 300.00, 1),
(15, 9760374, 12, 1260.00, 7),
(16, 9760374, 5, 900.00, 3),
(17, 9760374, 3, 250.00, 1),
(18, 9309815, 1, 100.00, 1);

--
-- Triggers `order_detail`
--
DELIMITER $$
CREATE TRIGGER `orderApprove` AFTER INSERT ON `order_detail` FOR EACH ROW UPDATE books SET quantity = quantity - NEW.quan WHERE id = NEW.book_id
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `orderCancel` AFTER DELETE ON `order_detail` FOR EACH ROW UPDATE books SET books.quantity = books.quantity + OLD.quan WHERE id = OLD.book_id
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `path_img` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cont` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_post` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `path_img`, `cont`, `date_post`) VALUES
(10, 'React Labs: What We\'ve Been Working On – June 2022', 'storage/717617.jpg', 'React 18 was years in the making, and with it brought valuable lessons for the React team. Its release was the result of many years of research and exploring many paths. Some of those paths were successful', '2022-06-23');

-- --------------------------------------------------------

--
-- Table structure for table `replies`
--

CREATE TABLE `replies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `replyto_id` int(11) NOT NULL,
  `content` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `path_img` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'storage/guest.png',
  `gender` int(1) NOT NULL DEFAULT 1,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `path_img`, `gender`, `phone`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Thuong', 'thuong203@gmail.com', NULL, '$2y$10$NXTh2hCbkFKHEBOoas7ztO/N9RUWUcxm5CSDhneJaf/eNY4/TIEia', 'clients/thuong1.jpg', 1, '0924235201', 'fy3Jdv6wJ4f3OSKt7R15KV1WGmZ0aCkkkJkOMd757PGrFborTZLqK4r5dxv1', '2022-11-04 07:28:16', '2022-11-04 07:28:16'),
(2, 'Halland', 'holland@gmail.com', NULL, '$2y$10$CCYC9vdQFwlBQb2axAQpr.Tdu4vncj2milfCFJNSVEgeN.eX2IwzW', 'clients/halland2.jpg', 1, '0824119038', 'MR7vLyG3UjOXeGYNubWfBb9IcZ7xzr846BKIT3IN7rCETl9Y1QFZq3zpkQSr', '2022-11-04 17:08:34', '2022-11-04 17:08:34'),
(3, 'Xiao Mi', 'xaomi@gmail.com', NULL, '$2y$10$ZeUdPckSFdheajCdww9vQ.Qkoi68bwHxezeCCHMMJxDTd/Shd0KCG', 'clients/xiao mi3.jpg', 0, '0824119038', NULL, '2022-11-20 07:42:58', '2022-11-20 07:42:58');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`),
  ADD KEY `catalog_id` (`catalog_id`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `book_id` (`book_id`);

--
-- Indexes for table `catalogs`
--
ALTER TABLE `catalogs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `book_id` (`book_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `discount`
--
ALTER TABLE `discount`
  ADD PRIMARY KEY (`id`),
  ADD KEY `book_id` (`book_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_detail`
--
ALTER TABLE `order_detail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `book_id` (`book_id`),
  ADD KEY `order_id` (`order_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `replies`
--
ALTER TABLE `replies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `catalogs`
--
ALTER TABLE `catalogs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `discount`
--
ALTER TABLE `discount`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `order_detail`
--
ALTER TABLE `order_detail`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `replies`
--
ALTER TABLE `replies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `books_ibfk_1` FOREIGN KEY (`catalog_id`) REFERENCES `catalogs` (`id`);

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`);

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`),
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `discount`
--
ALTER TABLE `discount`
  ADD CONSTRAINT `discount_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`);

--
-- Constraints for table `order_detail`
--
ALTER TABLE `order_detail`
  ADD CONSTRAINT `order_detail_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`),
  ADD CONSTRAINT `order_detail_ibfk_2` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

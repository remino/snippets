-- UTC ISO date
SET @prev_time_zone = @@time_zone;
SET time_zone = '+00:00';
SELECT DATE_FORMAT(NOW(), '%Y-%m-%dT%TZ');
SET time_zone = @prev_time_zone;

-- UTC ISO date without special chars
SET @prev_time_zone = @@time_zone;
SET time_zone = '+00:00';
SELECT DATE_FORMAT(NOW(), '%Y%m%d%H%i%S');
SET time_zone = @prev_time_zone;

-- Local ISO date
SET @prev_time_zone = @@time_zone;
SET time_zone = '+00:00';
SELECT DATE_FORMAT(CONVERT_TZ(NOW(), @@time_zone, 'Asia/Tokyo'), '%Y-%m-%dT%T');
SET time_zone = @prev_time_zone;

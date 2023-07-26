#!/usr/bin/env mysql

-- UTC ISO date
SELECT DATE_FORMAT(NOW(), '%Y-%m-%dT%TZ');

-- UTC ISO date without special chars
SELECT DATE_FORMAT(NOW(), '%Y%m%d%T');

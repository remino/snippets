#!/bin/sh

iso_date_local() {
	date +%Y-%m-%dT%H:%M:%S%z
}

iso_date_utc() {
	date -u +%Y-%m-%dT%H:%M:%SZ
}

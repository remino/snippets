#!/usr/bin/env bash

_require_root() {
	E_NEED_ROOT=16

	if [ "$EUID" -ne 0 ]; then
		echo "Please run as root"
		exit $E_NEED_ROOT
	fi
}

_require_root

#!/usr/bin/env bash

dotenv_main() {
	set -euo pipefail # -x

	E_ARGS=16
	E_CD_FAILED=17

	cd "$(dirname "$0")" || exit $E_CD_FAILED
	source ./dotenv_lib.sh
	dotenv "$@"
}

dotenv_main "$@"

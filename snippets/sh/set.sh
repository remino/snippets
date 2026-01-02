#!/usr/bin/env bash

set -euxo pipefail

set -x          # trace commands as they run
set -e          # exit immediately on error
set -u          # error on unset variables
set -o pipefail # fail if any part of a pipe fails
set +x          # disable trace commands

export PS4='+ ${BASH_SOURCE}:${LINENO}:${FUNCNAME[0]}() '
set -x

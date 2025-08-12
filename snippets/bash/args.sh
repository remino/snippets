#!/bin/bash

# Get last argument
echo "${@:$(( $# ))}"

# Get all arguments except last
echo "${@:1:$(( $# - 1 ))}"

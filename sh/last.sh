#!/bin/sh

last=

for i in $(seq 1 10); do
	last=$i
done

echo "$last" # 10

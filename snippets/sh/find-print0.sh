#!/bin/sh

find . -type f -print0 | while IFS= read -r -d '' file; do
	echo "$file"
done

#!/bin/sh

# More examples in 1x1.sh

# Convert a string to a hex string using xxd:
echo test | xxd -p

# Convert a hex string to a string using xxd:
echo 74657374 | xxd -p -r

# Output list of hex values for each character in a string:
echo test | xxd -d

# Convert above list back to a string:
echo test | xxd | xxd -r

# Use hexdump to output a hex string:
echo test | hexdump -C

# Convert cannonical hex string to a string using xxd:
awk '{for(i=2;i<=NF;i++) printf "%s", $i;}' myhexdump.txt | xxd -r -p > myoutputfile

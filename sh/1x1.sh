#!/bin/sh

# Convert cannonical dump of a 1x1 transparent GIF to a GIF file using awk:
awk '{for(i=2;i<17;i++) printf "%s", $i;}' << EOF | xxd -r -p > transparent.gif
00000000  47 49 46 38 39 61 01 00  01 00 80 01 00 00 00 00  |GIF89a..........|
00000010  ff ff ff 21 f9 04 01 0a  00 01 00 2c 00 00 00 00  |...!.......,....|
00000020  01 00 01 00 00 02 02 4c  01 00 3b                 |.......L..;|
EOF

# Convert cannonical dump of a 1x1 transparent GIF to a GIF file using sed:
sed -E 's/^[0-9]+//;s/\|.*$//;s/ //g' << EOF | xxd -r -p > transparent.gif
00000000  47 49 46 38 39 61 01 00  01 00 80 01 00 00 00 00  |GIF89a..........|
00000010  ff ff ff 21 f9 04 01 0a  00 01 00 2c 00 00 00 00  |...!.......,....|
00000020  01 00 01 00 00 02 02 4c  01 00 3b                 |.......L..;|
EOF

# Test with:
hexdump -C < transparent.gif

# In base64:
echo R0lGODlhAQABAIABAAAAAP///yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw== | base64 -d > transparent.gif

# In base91:
echo 'JaQGWo*HBtAAoIAAAAT|B"]X~bS"CABA`BAAAACAIAAA;C2OC"d' | base91 -d > transparent.gif

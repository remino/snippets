#!/bin/sh

# Convert canonical dump of a 1x1 transparent GIF to a GIF file using awk:
awk '{for(i=2;i<17;i++) printf "%s", $i;}' << EOF | xxd -r -p > transparent.gif
00000000  47 49 46 38 39 61 01 00  01 00 80 00 00 00 00 00  |GIF89a..........|
00000010  ff ff ff 21 f9 04 01 00  00 00 00 2c 00 00 00 00  |...!.......,....|
00000020  01 00 01 00 00 02 01 44  00 3b                    |.......D.;|
EOF

# Convert canonical dump of a 1x1 transparent GIF to a GIF file using sed:
sed -E 's/^[0-9]+//;s/\|.*$//;s/ //g' << EOF | xxd -r -p > transparent.gif
00000000  47 49 46 38 39 61 01 00  01 00 80 00 00 00 00 00  |GIF89a..........|
00000010  ff ff ff 21 f9 04 01 00  00 00 00 2c 00 00 00 00  |...!.......,....|
00000020  01 00 01 00 00 02 01 44  00 3b                    |.......D.;|
EOF

# Test with:
hexdump -C < transparent.gif

# In base64:
echo R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 | base64 -d > transparent.gif

# In base91:
echo 'JaQGWo*HBtAA:CAAAAT|B"]X~bQAAAAA`BAAAACAIAAAmB"C)U' | base91 -d > transparent.gif

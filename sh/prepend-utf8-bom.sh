#!/bin/sh

# Add BOM to new file
printf '\xEF\xBB\xBF' > utf8.txt

# Append file to BOM
cat source_file.txt >> utf8.txt

# Verify file
# (Although `file` will output UTF-8 even without BOM.)
file --mime-type --mime-encoding utf8.txt

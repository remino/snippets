#!/bin/sh

# $TMPDIR/scriptname.XXXXXX
mktmpfile() {
	mktemp -t "$( basename "$0" )"
}

# $TMPDIR/scriptname.XXXXXX/
mktmpdir() {
	mktemp -dt "$( basename "$0" )"
}

# ./fileXXXXXX
mktmplocalfile() {
	mktemp fileXXXXXX
}

# ./fileXXXXXX
mktmplocaldir() {
	mktemp -d fileXXXXXX
}

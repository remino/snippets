#!/bin/sh

_mime_type() {
	file="$1"
	case "$file" in
		*.bmp) echo "image/bmp" ;;
		*.eot) echo "application/vnd.ms-fontobject" ;;
		*.gif) echo "image/gif" ;;
		*.ico) echo "image/x-icon" ;;
		*.jpg|*.jpeg) echo "image/jpeg" ;;
		*.otf) echo "application/font-sfnt" ;;
		*.png) echo "image/png" ;;
		*.svg) echo "image/svg+xml" ;;
		*.tif|*.tiff) echo "image/tiff" ;;
		*.ttf) echo "application/font-sfnt" ;;
		*.webp) echo "image/webp" ;;
		*.woff) echo "application/font-woff" ;;
		*.woff2) echo "application/font-woff2" ;;
		*) file -b --mime-type "$file" ;;
	esac
}

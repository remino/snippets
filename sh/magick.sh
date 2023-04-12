#!/bin/sh

# ImageMagick commands and snippets

# Resize and crop image for Facebook og:image:
magick convert share.png -resize 1200x -gravity center -crop 1200x630+0+0 fb.png

# Crop image for Twitter summary_large_image card, at 2:1 ratio:
# https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary-card-with-large-image
magick convert share.png -gravity center -crop 2880x1440+0+0 tw.png

# Montage of two images, side by side, with options for an image:
magick montage \( -flop 26.jpg \) 01.jpg -geometry +0+0 banner.jpg

# Make output image transparent from transparent inputs:
magick convert -background none -flatten input.png output.png

# Apply watermark image:
magick convert input.png \( watermark.png -resize 1000 -alpha set -channel A -evaluate set 50% \) -gravity SouthWest -composite output.png

# Convert SVG to PNG:
magick convert -background none -density 300 -resize 1000 input.svg output.png

# Generate a 1x1 PNG file of a certain colour:
magick convert -size 1x1 xc:\#2B6499 blue.png

# Generate a 1x1 transparent GIF file:
magick convert -size 1x1 xc:none transparent.gif

# Generate a 1x1 transparent GIF file to stdout:
magick convert -size 1x1 xc:none gif:- > transparent.gif

# Generate the smallest possible transparent GIF file:
magick convert -size 1x1 xc:none -depth 1 gif:- > transparent.gif

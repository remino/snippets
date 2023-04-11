#!/bin/sh

# Find all JPG files in the current directory and convert them to QuickTime-compatible MP4 video at 1 frame per 5 seconds:
ffmpeg -framerate 1/5 -pattern_type glob -i '*.jpg' -c:v libx264 -pix_fmt yuv420p out.mp4

# Convert video to GIF:
ffmpeg -i input.mp4 -vf "fps=15,scale=320:-1:flags=lanczos,palettegen" palette.png
ffmpeg -i input.mp4 -i palette.png -filter_complex "fps=15,scale=320:-1:flags=lanczos[x];[x][1:v]paletteuse" output.gif

# Convert video to GIF, with a custom palette:
ffmpeg -i input.mp4 -i palette.png -filter_complex "fps=15,scale=320:-1:flags=lanczos[x];[x][1:v]paletteuse" output.gif

# Convert video to GIF, with a custom palette, and a custom palette size:
ffmpeg -i input.mp4 -i palette.png -filter_complex "fps=15,scale=320:-1:flags=lanczos[x];[x][1:v]paletteuse=dither=sierra2_4a" output.gif


#!/bin/sh

# Run simple HTTP server with Python 3 on default port 8000
python -m http.server

exit

# Run on different port
python -m http.server 9000

# Usage screen
python -m http.server -h

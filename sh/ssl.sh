#!/bin/sh

# Generate self-signed certificate without interactive prompts
openssl req -newkey rsa:2048 -nodes -keyout server.key -x509 -days 365 -out server.crt -subj "/C=US/ST=State/L=City/O=Company/CN=localhost"

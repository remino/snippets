#!/usr/bin/env python

import os
import subprocess
from http.server import HTTPServer, SimpleHTTPRequestHandler
import ssl

# Function to generate a self-signed certificate
def generate_self_signed_cert(cert_name="cert.pem", key_name="key.pem"):
    subprocess.call([
        'openssl', 'req', '-x509', '-newkey', 'rsa:4096',
        '-keyout', key_name, '-out', cert_name,
        '-days', '365', '-nodes',
        '-subj', '/CN=localhost'
    ])

# Generate certificate if it doesn't exist
if not (os.path.exists('cert.pem') and os.path.exists('key.pem')):
    generate_self_signed_cert()

# Set up an HTTPS server
httpd = HTTPServer(('localhost', 4443), SimpleHTTPRequestHandler)

httpd.socket = ssl.wrap_socket(httpd.socket,
                               keyfile="key.pem",
                               certfile='cert.pem', server_side=True)

print("Serving at https://localhost:4443")
httpd.serve_forever()

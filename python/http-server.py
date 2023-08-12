#!/usr/bin/env python

"""
	Simple Web server using http.server,
	detecting certain files as indexes.
"""

import http.server
import os

class CustomIndexHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
	def translate_path(self, path):
		path = super().translate_path(path)

		if path.endswith('/'):
			indexes = ['index.html', 'index.htm', 'index.xhtml', 'index.xml']
			for index in indexes:
				if os.path.exists(path + index):
					return path + index

		return path

def run(server_class=http.server.HTTPServer, handler_class=CustomIndexHTTPRequestHandler):
	server_address = ('127.0.0.1', 8000)
	httpd = server_class(server_address, handler_class)
	print('http://localhost:%d' % server_address[1])
	httpd.serve_forever()

if __name__ == '__main__':
	run()

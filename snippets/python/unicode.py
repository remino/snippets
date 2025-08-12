#!/usr/bin/env python3

import unicodedata

text = 'café☕🇮🇹'
chars = list(text)
print(text)

for char in chars:
	name = unicodedata.name(char)
	print(name)

	code_point = ord(char)
	hex_value = hex(code_point)
	print(hex_value)

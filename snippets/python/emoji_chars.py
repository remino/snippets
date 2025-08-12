#!/usr/bin/env python3

import emoji

text = 'café☕🇮🇹'
emoji_chars = emoji.emoji_list(text)

for char in emoji_chars:
	print(emoji.emojize(emoji.demojize(char['emoji']), language='en'))

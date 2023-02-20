#!/bin/sh

generate_random_words() {
	WORD_COUNT=10
	DICT_FILE=/usr/share/dict/words

	for i in $(seq 1 $WORD_COUNT)
	do
		word=$(shuf -n 1 $DICT_FILE)
		echo "$word"
	done | tr '\n' ' '
}

generate_random_words

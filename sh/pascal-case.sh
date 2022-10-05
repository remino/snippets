#!/bin/sh

echo "this_is_the_string" | perl -pe 's/(^|_)./uc($&)/ge;s/_//g'

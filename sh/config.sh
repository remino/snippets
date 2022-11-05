#!/bin/sh

COLOR=blue
MSG=Bye

load_config() {
	scriptpath="$( readlink -f "$0" )"
	scriptdir="$( dirname "$scriptpath" )"

	for rc in "/etc/configrc" "$HOME/.configrc" "$scriptdir/.configrc" "$PWD/.configrc"
	do
		if [ -f "$rc" ]
		then
			eval "$(
				# shellcheck source=/dev/null
				. "$rc"
				echo "[ -z \"$COLOR\" ] && COLOR=$COLOR"
				echo "MSG=$MSG"
			)"

			[ -n "$MSG" ] && export MSG
		fi
	done
}

load_config

# Outputs 'Hello' when reading from .configrc in script dir.
echo "$MSG"
# Also outputs 'Hello' because MSG was exported.
bash -c 'echo "$MSG"'
# Outputs 'blue' because COLOR from .configrc cannot override if var is set.
echo "$COLOR"
# Outputs a blank line because COLOR was not exported.
bash -c 'echo "$COLOR"'
# Outputs a blank line because FRUIT was not processed by load_config.
echo "$FRUIT"

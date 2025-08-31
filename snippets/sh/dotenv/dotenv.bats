#!/usr/bin/env bats

# These tests assume Bats (v1+) is installed.
# No bats-assert / bats-support used—pure Bats.

setup() {
	TMPDIR="$(mktemp -d)"
	DOTENV="$TMPDIR/.env"
	LIBDIR="$(cd "$(dirname "${BATS_TEST_FILENAME}")" && pwd)"
	LIBFILE="$LIBDIR/dotenv_lib.sh"

	# write a sample .env for most tests; tests can overwrite if needed
	cat >"$DOTENV" <<'EOF'
# comments and blanks
  # another comment

API_KEY="secret-123"
TIMEOUT =  30
FEATURE_FLAG=1
UNSAFE_CMD='`touch ishouldnotappear`'
BAD KEY=oops
QUOTED_SPACES="  has spaces  "
SINGLE_QUOTED='raw$literal'
INLINE_HASH="value#notcomment"
TRAILING="ends with space "   
EOF
}

teardown() {
	rm -rf "$TMPDIR"
}

load_func() {
	# shellcheck disable=SC1090
	. "$LIBFILE"
}

@test "loads only whitelisted variables into current shell scope" {
	load_func
	ALLOWED_VARS="API_KEY TIMEOUT FEATURE_FLAG"
	dotenv "$DOTENV"

	[ "${API_KEY}" = "secret-123" ]
	[ "${TIMEOUT}" = "30" ]
	[ "${FEATURE_FLAG}" = "1" ]

	# non-whitelisted should be unset
	[ -z "${UNSAFE_CMD+x}" ]
}

@test "variables are exported (visible to child process)" {
	load_func
	ALLOWED_VARS="API_KEY"
	dotenv "$DOTENV"

	run env
	[[ "$output" =~ API_KEY=secret-123 ]]
}

@test "trims spaces around keys and values" {
	load_func
	ALLOWED_VARS="TIMEOUT"
	dotenv "$DOTENV"
	[ "${TIMEOUT}" = "30" ]
}

@test "handles double and single quoted values literally" {
	load_func
	ALLOWED_VARS="QUOTED_SPACES SINGLE_QUOTED"
	dotenv "$DOTENV"

	[ "${QUOTED_SPACES}" = "  has spaces  " ]
	[ "${SINGLE_QUOTED}" = 'raw$literal' ]
}

@test "does not treat inline # as a comment inside quotes" {
	load_func
	ALLOWED_VARS="INLINE_HASH"
	dotenv "$DOTENV"

	[ "${INLINE_HASH}" = "value#notcomment" ]
}

@test "trailing spaces after closing quote are trimmed" {
	load_func
	ALLOWED_VARS="TRAILING"
	dotenv "$DOTENV"

	[ "${TRAILING}" = "ends with space " ]
}

@test "rejects bad keys and continues (emits 'bad key' to stderr)" {
	load_func
	# allow nothing; we only want to observe stderr from bad key line
	ALLOWED_VARS=""
	run bash -c '
    . "'"$LIBFILE"'";
    ALLOWED_VARS="";
    dotenv "'"$DOTENV"'" 2>&1 >/dev/null
  '
	[ "$status" -eq 0 ]
	[[ "$output" =~ Bad\ key ]]
}

@test "fails when dotenv file is unreadable" {
	load_func
	chmod 000 "$DOTENV"
	run dotenv "$DOTENV"
	[ "$status" -ne 0 ]
	[[ "$output" =~ Cannot\ read: ]]
}

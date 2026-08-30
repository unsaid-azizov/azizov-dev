#!/bin/sh
# Read-only helper for the Codex transcripts retained on this Mac.
# Usage:
#   tools/search-local-codex-history.sh list
#   tools/search-local-codex-history.sh search 'exact phrase'

set -eu

history_root="/Users/astex/.codex/sessions"

case "${1:-list}" in
  list)
    find "$history_root" -type f -name '*.jsonl' -exec stat -f '%Sm  %z bytes  %N' -t '%Y-%m-%d %H:%M' {} \; | sort
    ;;
  search)
    test "$#" -eq 2 || { echo "Usage: $0 search 'phrase'" >&2; exit 2; }
    rg -n -i --glob '*.jsonl' -- "$2" "$history_root"
    ;;
  *)
    echo "Usage: $0 {list|search 'phrase'}" >&2
    exit 2
    ;;
esac

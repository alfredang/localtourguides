#!/bin/bash
# PostToolUse hook: syntax-check any edited server-side JS so a bad seed/route
# file never gets left behind silently. Non-JS and client files are ignored.
input=$(cat)
file=$(echo "$input" | python3 -c "import json,sys; print(json.load(sys.stdin).get('tool_input',{}).get('file_path',''))" 2>/dev/null)

case "$file" in
  */server/src/*.js)
    if ! err=$(node --check "$file" 2>&1); then
      echo "Syntax error introduced in $file:" >&2
      echo "$err" >&2
      exit 2  # blocks and feeds the error back to Claude
    fi
    ;;
esac
exit 0

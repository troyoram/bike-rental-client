#!/bin/bash

curl "http://localhost:4741/bikes/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "bike": {
      "style": "'"${STYLE}"'",
      "size": "'"${SIZE}"'"
    }
  }'

echo

#!/bin/bash

curl "https://bike-rental-server.herokuapp.com/bikes/${ID}" \
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

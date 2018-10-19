#!/bin/bash

curl "https://bike-rental-server.herokuapp.com1/bikes" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "bike": {
      "style": "'"${STYLE}"'",
      "size": "'"${SIZE}"'"
    }
  }'

echo

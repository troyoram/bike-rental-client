#!/bin/bash

curl "https://bike-rental-server.herokuapp.com/bikes/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}"

echo

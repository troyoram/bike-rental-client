#!/bin/bash

curl "http://localhost:4741/bikes/${ID}" \
  --include \
  --request GET \

echo

#!/bin/bash

# This script helps run each app independently

case "$1" in
  consumer)
    cd consumer-app && npm start
    ;;
  driver)
    cd driver-dashboard && npm start
    ;;
  farmer)
    cd farmer-dashboard && npm start
    ;;
  *)
    echo "Usage: $0 {consumer|driver|farmer}"
    exit 1
    ;;
esac

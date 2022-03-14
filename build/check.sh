#!/usr/bin/env bash

# This script is used to check the umd's ecmascript compatibility.
# It is intended to be run from the project's root directory.

yarn esist/index.cjs dev/index.cjs dev/index.bundle.js-check es2017 d

if [ $? -eq 1 ]; then
  exit 1
fi

yarn es-check es2017 dist/index.mjs dev/index.mjs --module

if [ $? -eq 1 ]; then
  exit 1
fi

yarn es-check es5 dist/index.bundle.js

if [ $? -eq 1 ]; then
  exit 1
fi

# :)
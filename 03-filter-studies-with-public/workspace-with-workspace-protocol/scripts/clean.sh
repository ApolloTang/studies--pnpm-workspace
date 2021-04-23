#!/usr/bin/env bash
find . -type d -name node_modules -prune -exec rm -rf {} \;

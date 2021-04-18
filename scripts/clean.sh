#!/usr/bin/env bash
echo `pwd`
find . -type d -name node_modules -exec rm -rf {} \;


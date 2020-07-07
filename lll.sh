#!/bin/bash
echo aaaaaaaaaaa > /usr/src/test/marica.txt
eslint .eslintrc.js -f checkstyle  > /usr/src/test/eslint.xml

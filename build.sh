#!/usr/bin/env sh

# set -e
# npm run build

yarn build

cd .temp

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:An-Haijun/flutter-docs.git master:gh-pages

cd -

yarn build &&
git checkout gh-pages &&
rm -rf *.html *.js *.css *.png &&
mv dist/* ./ &&
rm -rf dist &&
git add . &&
git commit -m 'update' &&
git push &&
git checkout -  #回到上一个分支
